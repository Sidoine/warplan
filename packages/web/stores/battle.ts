import { observable, action, computed, makeObservable } from "mobx";
import { UnitWarscroll, WarscrollItem } from "./warscroll";
import {
    Phase,
    AbilityEffect,
    TargetType,
    Ability,
    Attack,
    AbilityCategory,
    PhaseSide,
    ItemWithAbilities,
    SubPhase
} from "../../common/data";
import { DataStore } from "./data";
import { ArmyList, ArmyListStore } from "./army-list";

export interface Player {
    name: string;
    armyList: ArmyList;
}

export const phases = [
    Phase.ArmyList,
    Phase.Any,
    Phase.Setup,
    Phase.Hero,
    Phase.Movement,
    Phase.Shooting,
    Phase.Charge,
    Phase.Combat,
    Phase.Battleshock
];

export function getPhaseName(phase: Phase) {
    switch (phase) {
        case Phase.ArmyList:
            return "Choose army";
        case Phase.Any:
            return "Any";
        case Phase.Setup:
            return "Setup";
        case Phase.Hero:
            return "Hero";
        case Phase.Movement:
            return "Movement";
        case Phase.Shooting:
            return "Shooting";
        case Phase.Charge:
            return "Charge";
        case Phase.Combat:
            return "Combat";
        case Phase.Battleshock:
            return "Battleshock";
    }
    return "Battle";
}

export function getEffectPhases(effect: AbilityEffect) {
    let phase = 0;
    if (effect.defenseAura) {
        if (effect.defenseAura.phase) phase |= effect.defenseAura.phase;
        else phase |= Phase.Combat | Phase.Shooting;
    }
    if (effect.attackAura) {
        if (effect.attackAura.phase) phase |= effect.attackAura.phase;
        else phase |= Phase.Combat | Phase.Shooting;
    }
    if (effect.commandAura || effect.spellAura || effect.prayerAura)
        phase |= Phase.Hero;
    if (effect.movementAura) phase |= Phase.Movement;
    if (effect.chargeAura) phase |= Phase.Charge;
    if (effect.battleShockAura) phase |= Phase.Battleshock;
    return phase;
}

export function getAbilityPhases(ability: Ability) {
    let phase = 0;
    if (
        ability.category === AbilityCategory.Prayer ||
        ability.category === AbilityCategory.Spell
    )
        phase |= Phase.Hero;
    if (ability.effects) {
        for (const effect of ability.effects) {
            if (effect.phase) phase |= effect.phase;
        }
    }
    return phase;
}
export function isEffectInPhase(
    effect: AbilityEffect,
    phase: Phase,
    unit: ItemWithAbilities,
    side?: PhaseSide
) {
    if (
        effect.phase !== undefined &&
        effect.phase === phase &&
        side !== PhaseSide.Defense
    )
        return true;

    if (phase & Phase.Combat || phase & Phase.Shooting) {
        if (effect.defenseAura && side === PhaseSide.Defense) {
            if (effect.defenseAura.phase !== undefined)
                return effect.defenseAura.phase === phase;
            return true;
        }
        if (
            effect.attackAura &&
            effect.targetType !== TargetType.Enemy &&
            side === PhaseSide.Attack
        ) {
            if (
                effect.attackAura.phase !== undefined &&
                effect.attackAura.phase !== phase
            )
                return false;
            if (
                phase === Phase.Combat &&
                unit.attacks &&
                unit.attacks.some(x => x.attack.melee)
            )
                return true;
            if (
                phase === Phase.Shooting &&
                unit.attacks?.some(x => !x.attack.melee)
            )
                return true;
        }
        if (
            effect.defenseAura &&
            effect.targetType === TargetType.Enemy &&
            side === PhaseSide.Attack
        ) {
            if (!unit) return false;
            return true;
        }
        if (
            effect.attackAura &&
            effect.targetType === TargetType.Enemy &&
            side === PhaseSide.Defense
        ) {
            if (!unit) return false;
            return true;
        }
        // if (
        //     (effect.mortalWounds || effect.mortalWoundsPerModel) &&
        //     side === PhaseSide.Attack
        // )
        //     return true;
        return false;
    }
    if (phase & Phase.Battleshock && effect.battleShockAura) return true;
    if (phase & Phase.Movement && effect.movementAura) return true;
    if (phase & Phase.Charge && effect.chargeAura) return true;
    if (phase & Phase.Hero && effect.spellAura) return true;
    if (phase & Phase.Hero && effect.prayerAura) return true;
    if (phase & Phase.Any && effect.commandAura) return true;

    return false;
}

export function isAbilityInPhase(
    ability: Ability,
    phase: Phase,
    unit: ItemWithAbilities,
    side?: PhaseSide
) {
    if (
        (ability.category === AbilityCategory.Spell ||
            ability.category === AbilityCategory.Prayer) &&
        phase === Phase.Hero
    )
        return true;

    if (ability.effects) {
        for (const effect of ability.effects) {
            if (isEffectInPhase(effect, phase, unit, side)) return true;
        }
    }
    return false;
}

export function isAttackInPhase(attack: Attack, phase: Phase) {
    if (phase === Phase.Shooting && !attack.melee) return true;
    if (phase === Phase.Combat && attack.melee) return true;
    return false;
}

export function isUnitInPhase(
    unit: WarscrollItem,
    phase: Phase,
    side?: PhaseSide
) {
    if (
        (phase === Phase.Movement || phase === Phase.Battleshock) &&
        unit.type === "unit"
    )
        return true;
    if (
        phase === Phase.Shooting &&
        unit.type === "unit" &&
        unit.attacks.some(x => !x.attack.melee)
    ) {
        return true;
    }
    if (
        phase === Phase.Combat &&
        unit.type === "unit" &&
        unit.attacks.some(x => x.attack.melee)
    ) {
        return true;
    }
    if (unit.abilities.some(x => isAbilityInPhase(x, phase, unit, side)))
        return true;
    return false;
}

interface BattleSerialized {
    phase: Phase;
    side: PhaseSide;
    subPhase: SubPhase;
    armyListId?: string;
}

export class BattleStore {
    @observable turn = 0;

    @observable phase: Phase = 0;
    @observable side: PhaseSide = PhaseSide.None;
    @observable subPhase: SubPhase = SubPhase.Before;

    @observable player: Player | null = null;

    @observable checkedArmyAbilityIds: string[] = [];
    @observable checkedAbilities = new Map<string, string[]>();
    @observable skippedUnits = new Map<string, boolean>();

    constructor(
        public dataStore: DataStore,
        private armyListStore: ArmyListStore
    ) {
        makeObservable(this);
        const serialized = localStorage.getItem("battle");
        if (serialized) {
            this.deserialize(JSON.parse(serialized) as BattleSerialized);
        }
    }

    private serialize(): BattleSerialized {
        return {
            phase: this.phase,
            side: this.side,
            subPhase: this.subPhase,
            armyListId: this.player?.armyList.id
        };
    }

    private save() {
        localStorage.setItem("battle", JSON.stringify(this.serialize()));
    }

    @action
    private deserialize(serialized: BattleSerialized) {
        if (serialized.armyListId) {
            this.phase = serialized.phase;
            this.side = serialized.side;
            this.subPhase = serialized.subPhase;
            const armyList = this.armyListStore.armyList;
            this.player = {
                name: armyList.name,
                armyList
            };
        }
    }

    @computed
    get units() {
        return (
            this.player?.armyList.units.filter(x =>
                isUnitInPhase(x, this.phase, this.side)
            ) || []
        );
    }

    @computed private get allArmyAbilities() {
        if (!this.player) return [];
        // const w = this.player.armyList;
        // for (const group of this.dataStore.baseAbilities) {
        //     result = result.concat(group.abilities);
        // }
        // result = result.concat(w.abilities);
        // return result;
        return this.player.armyList.abilities;
    }

    @computed get armyAbilities() {
        return this.allArmyAbilities.filter(x =>
            isAbilityInPhase(x, this.phase, this.armyListStore.armyList)
        );
    }

    @computed get uncheckedArmyAbilities() {
        return this.armyAbilities.filter(x => !this.isArmyAbilityChecked(x));
    }
    @computed get checkedArmyAbilities() {
        return this.armyAbilities.filter(x => this.isArmyAbilityChecked(x));
    }

    @computed get numberOfUncheckedUnitsOrArmyAbilities() {
        return (
            this.armyAbilities.length -
            this.checkedArmyAbilities.length +
            this.units.reduce((p, c) => p + (this.isUnitHidden(c) ? 0 : 1), 0)
        );
    }

    @action
    start(warscroll: ArmyList) {
        this.player = {
            name: "Player",
            armyList: warscroll
        };
        this.phase = Phase.Setup;
        this.side = PhaseSide.Attack;
        this.checkedAbilities.clear();
        this.save();
    }

    @action
    toggleSide = () => {
        this.side =
            this.side === PhaseSide.Attack
                ? PhaseSide.Defense
                : PhaseSide.Attack;
        this.save();
    };

    @computed
    get nextPhase() {
        switch (this.phase) {
            case Phase.Setup:
                return Phase.Hero;
            case Phase.Hero:
                return Phase.Movement;
            case Phase.Movement:
                return Phase.Shooting;
            case Phase.Shooting:
                return Phase.Charge;
            case Phase.Charge:
                return Phase.Combat;
            case Phase.Combat:
                return Phase.Battleshock;
            case Phase.Battleshock:
                return Phase.Hero;
        }
        return Phase.Setup;
    }

    next = () => {
        this.goToPhase(this.nextPhase);
    };

    previous = () => {
        this.goToPhase(this.previousPhase);
    };

    @action private goToPhase(phase: Phase) {
        this.checkedAbilities.clear();
        this.skippedUnits.clear();
        this.checkedArmyAbilityIds.splice(0);
        this.phase = phase;
        this.save();
    }

    @action
    toggleArmyAbility(ability: Ability) {
        const checked = this.checkedArmyAbilityIds;
        const index = checked.indexOf(ability.id);
        if (index < 0) checked.push(ability.id);
        else checked.splice(index, 1);
    }

    @action
    toggleUnitAbility(unit: UnitWarscroll, ability: Ability) {
        const checked = this.checkedAbilities.get(unit.id) || [];
        const index = checked.indexOf(ability.id);
        if (index < 0) checked.push(ability.id);
        else checked.splice(index, 1);
        this.checkedAbilities.set(unit.id, checked);
    }

    @action
    toggleSkippedUnit(unit: UnitWarscroll) {
        this.skippedUnits.set(
            unit.id,
            !(this.skippedUnits.get(unit.id) || false)
        );
    }

    private isUnitChecked(unit: UnitWarscroll) {
        const unitAbilities = this.checkedAbilities.get(unit.id);
        if (!unitAbilities) return false;
        return unit.abilities.every(
            x =>
                unitAbilities.includes(x.id) ||
                !isAbilityInPhase(x, this.phase, unit, this.side)
        );
    }

    isUnitSkipped(unit: UnitWarscroll) {
        return this.skippedUnits.get(unit.id) || false;
    }

    isUnitHidden(unit: UnitWarscroll) {
        return this.isUnitSkipped(unit) || this.isUnitChecked(unit);
    }

    isArmyAbilityChecked(ability: Ability) {
        return this.checkedArmyAbilityIds.includes(ability.id);
    }

    isUnitAbilityChecked(unit: UnitWarscroll, ability: Ability) {
        return (
            this.checkedAbilities.get(unit.id)?.includes(ability.id) ?? false
        );
    }

    @computed
    get previousPhase() {
        switch (this.phase) {
            case Phase.Hero:
                return Phase.Battleshock;
            case Phase.Movement:
                return Phase.Hero;
            case Phase.Shooting:
                return Phase.Movement;
            case Phase.Charge:
                return Phase.Shooting;
            case Phase.Combat:
                return Phase.Charge;
            case Phase.Battleshock:
                return Phase.Combat;
        }
        return Phase.Setup;
    }
}
