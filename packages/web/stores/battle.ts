import { observable, action, computed, makeObservable } from "mobx";
import { UnitWarscroll, WarscrollItem } from "./warscroll";
import {
    Phase,
    AbilityEffect,
    Ability,
    Attack,
    AbilityCategory,
    PhaseSide,
    ItemWithAbilities,
    SubPhase,
} from "../../common/data";
import { DataStore } from "./data";
import { ArmyList, ArmyListStore } from "./army-list";
import { getValue } from "./combat";

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
    Phase.Battleshock,
];

export const enum EffectType {
    Buff,
    Debuff,
    Immediate,
    Unknown,
}

export function getEffectText(
    effect: AbilityEffect,
    unit: ItemWithAbilities
): [
    condition: string | undefined,
    description: string[],
    effectType: EffectType
] {
    const description: string[] = [];
    let condition: string | undefined;
    let effectType: EffectType = EffectType.Buff;
    if (effect.attackAura) {
        if (effect.attackAura.phase) {
            condition =
                effect.attackAura.phase === Phase.Shooting
                    ? "Shooting"
                    : "Combat";
        }
        if (effect.attackAura.rerollHitsOn1) {
            description.push("RR1 hit");
        }
        if (effect.attackAura.bonusRend) {
            description.push(`${effect.attackAura.bonusRend} Rend`);
        }
        if (effect.attackAura.rerollFailedWounds) {
            description.push("RR Wound");
        }
        if (effect.attackAura.bonusWoundRoll) {
            description.push(
                `+${getValue(effect.attackAura.bonusWoundRoll)} Wound`
            );
        }
        if (effect.attackAura.rerollFailedHits) {
            description.push("RR failed Hit");
        }
        if (effect.attackAura.malusHitRoll) {
            description.push(
                `-${getValue(effect.attackAura.malusHitRoll)} Hit`
            );
        }
        if (effect.attackAura.noPileIn) {
            description.push("No pile-in");
        }
        if (effect.attackAura.bonusAttacks) {
            description.push(`+${effect.attackAura.bonusAttacks} Atk`);
        }
        if (effect.attackAura.rerollHits) {
            description.push("RR Hit");
        }
        if (effect.attackAura.bonusDamageOnHitUnmodified6) {
            description.push(
                `+${effect.attackAura.bonusDamageOnHitUnmodified6} Dmg on 6 Hit`
            );
        }
        if (effect.attackAura.mortalWoundsOnHitUnmodified5) {
            description.push(
                `${effect.attackAura.mortalWoundsOnHitUnmodified5} MW on 5+ Hit`
            );
        }
        if (effect.attackAura.mortalWoundsOnHitUnmodified6) {
            description.push(
                `${effect.attackAura.mortalWoundsOnHitUnmodified6} MW on 6 Hit`
            );
        }
        if (effect.attackAura.bonusMortalWoundsOnHitUnmodified6) {
            description.push(
                `+${effect.attackAura.bonusMortalWoundsOnHitUnmodified6} MW on 6 Hit`
            );
        }
        if (effect.attackAura.attackId) {
            const attack = unit.attacks?.find(
                (x) => x.attack.id === effect.attackAura?.attackId
            );
            if (attack) {
                description.push(`Choose ${attack.attack.name}`);
            }
        }
        if (effect.attackAura.pileInEverywhere) {
            description.push("Pile-in everywhere");
        }
        if (effect.attackAura.bonusPileInDistance) {
            description.push(
                `+${getValue(effect.attackAura.bonusPileInDistance)} Pile-in`
            );
        }
        if (effect.attackAura.pileInWithFly) {
            description.push("Pile-in with Fly");
        }
        if (description.length === 0) {
            description.push(
                `attackAura: ${JSON.stringify(effect.attackAura)}`
            );
        }
    }
    if (effect.commandAura) {
        if (effect.commandAura.free) {
            description.push("Free command");
        }
        if (description.length === 0) {
            description.push(
                `commandAura: ${JSON.stringify(effect.commandAura)}`
            );
        }
    }
    if (effect.defenseAura) {
        if (effect.defenseAura.rerollFailedSaves) {
            description.push("RR Save");
        }
        if (effect.defenseAura.bonusSave) {
            description.push(`+${effect.defenseAura.bonusSave} Save`);
        }
        if (effect.defenseAura.rerollSavesOn1) {
            description.push("RR1 Save");
        }
        if (effect.defenseAura.rerollHitOn1) {
            description.push("RR1 Enemy Hit");
        }
        if (effect.defenseAura.rerollHitOn6) {
            description.push("RR6 Enemy Hit");
        }
        if (effect.defenseAura.healOnSave7) {
            description.push(`Save 7+: ${effect.defenseAura.healOnSave7} heal`);
        }
        if (effect.defenseAura.bonusHitRoll) {
            description.push(`+${effect.defenseAura.bonusHitRoll} Enemy Hit`);
        }
        if (effect.defenseAura.bonusWoundRoll) {
            description.push(
                `+${effect.defenseAura.bonusWoundRoll} Enemy Wound`
            );
        }
        if (effect.defenseAura.malusHitRoll) {
            description.push(`-${effect.defenseAura.malusHitRoll} Enemy Hit`);
        }
        if (effect.defenseAura.negateWoundsOrMortalWoundsOn5) {
            description.push("5+ ward");
        }
        if (effect.defenseAura.phase) {
            condition =
                effect.defenseAura.phase === Phase.Shooting
                    ? "Shooting"
                    : "Combat";
        }
        if (effect.defenseAura.garrisoned) {
            description.push("Garrisoned");
        }
        if (effect.defenseAura.ignoreRendOfMinus1) {
            description.push("Ignore -1 Rend");
        }
        if (effect.defenseAura.guardianOn2) {
            description.push("2+ Guardian");
        }
        if (effect.defenseAura.visibleToCasterUnit) {
            description.push("Visible to caster unit");
        }
        if (description.length === 0) {
            description.push(
                `defenseAura: ${JSON.stringify(effect.defenseAura)}`
            );
        }
    }
    if (effect.movementAura) {
        if (effect.movementAura.allowChargeAfterRunOrRetreat) {
            description.push("Charge after Run/Retreat");
        }
        if (effect.movementAura.doubleMove) {
            description.push("Move ×2");
        }
        if (effect.movementAura.fly) {
            description.push("Fly");
        }
        if (description.length === 0) {
            description.push(
                `movementAura: ${JSON.stringify(effect.movementAura)}`
            );
        }
    }
    if (effect.chargeAura) {
        if (effect.chargeAura.bonus) {
            description.push(`+${effect.chargeAura.bonus} Charge`);
        }
        if (effect.chargeAura.canChargeAfterRetreat) {
            description.push("Charge after Retreat");
        }
        if (description.length === 0) {
            description.push(
                `ChargeAura: ${JSON.stringify(effect.chargeAura)}`
            );
        }
    }
    if (effect.spellAura) {
        if (effect.spellAura.noCast) {
            description.push("No cast");
        }
        if (effect.spellAura.rerollCast) {
            description.push("RR cast");
        }
        if (effect.spellAura.rerollDispell) {
            description.push("RR dispell");
        }
        if (effect.spellAura.rerollUnbind) {
            description.push("RR unbind");
        }
        if (effect.spellAura.autoCast) {
            description.push("Auto-cast 9");
        }
        if (description.length === 0) {
            description.push(`SpellAura: ${JSON.stringify(effect.spellAura)}`);
        }
    }
    if (effect.specialAura) {
        if (effect.specialAura.absorbDespair) {
            description.push("Brav -1 transfered to enemy");
        }
        if (effect.specialAura.darknessOfSoul) {
            description.push("No action on 2D6>Brv");
        }
        if (effect.specialAura.pickTwoUnitsInCombat) {
            description.push("Pick 2 units (excl. strike 1st/last)");
        }
        if (effect.specialAura.blockVisibility) {
            description.push("Block visibility");
        }
        if (description.length === 0) {
            description.push(
                `specialAura: ${JSON.stringify(effect.specialAura)}`
            );
        }
    }
    if (effect.valueAura) {
        if (effect.valueAura.ignoreWounds) {
            description.push("Wds table: use 0 Wd");
        }
        if (description.length === 0) {
            description.push(`valueAura: ${JSON.stringify(effect.valueAura)}`);
        }
    }
    if (effect.battleShockAura) {
        if (effect.battleShockAura.malusBravery) {
            description.push(`${effect.battleShockAura.malusBravery} Brav`);
        }
        if (effect.battleShockAura.emotionalTransference) {
            description.push("Transfered losses");
        }
        if (effect.battleShockAura.immune) {
            description.push(`Battleshock immune`);
        }
        if (effect.battleShockAura.bonusBravery) {
            description.push(`+${effect.battleShockAura.bonusBravery} Brav`);
        }
        if (effect.battleShockAura.rerollFails) {
            description.push("RR battleshocks");
        }
        if (description.length === 0) {
            description.push(
                `battleShockAura: ${JSON.stringify(effect.battleShockAura)}`
            );
        }
    }

    if (effect.mortalWounds) {
        effectType = EffectType.Immediate;
        description.push(`${effect.mortalWounds} MW`);
    }
    if (effect.mortalWoundsPerModel) {
        effectType = EffectType.Immediate;
        description.push(`${effect.mortalWoundsPerModel} MW/model`);
    }
    if (effect.allowInclusion) {
        effectType = EffectType.Immediate;
        description.push("Include");
    }
    if (effect.gainCommandPoints) {
        effectType = EffectType.Immediate;
        description.push(`${effect.gainCommandPoints} CP`);
    }
    if (effect.setup) {
        effectType = EffectType.Immediate;
        description.push("Setup");
    }
    if (description.length === 0) {
        description.push(JSON.stringify(effect));
        effectType = EffectType.Unknown;
    }
    return [condition, description, effectType];
}

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

export function getPhaseSideName(side: PhaseSide) {
    switch (side) {
        case PhaseSide.Attack:
            return "Your turn";
        case PhaseSide.Defense:
            return "Enemy's turn";
    }
    return "";
}

export function getSubPhaseName(subPhase: SubPhase) {
    switch (subPhase) {
        case SubPhase.After:
            return "end of ";
        case SubPhase.Before:
            return "start of ";
    }
    return "";
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
    if (effect.valueAura || effect.specialAura) phase |= Phase.AnyInGame;
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
    unit: ItemWithAbilities,
    effect: AbilityEffect,
    side: PhaseSide,
    phase: Phase,
    subPhase?: SubPhase
) {
    if (
        (effect.side === undefined || effect.side === side) &&
        effect.phase === phase &&
        (subPhase === undefined || effect.subPhase === subPhase)
    ) {
        return true;
    }

    if (subPhase !== undefined && subPhase !== SubPhase.While) return false;

    return (getEffectPhases(effect) & phase) > 0;
}

export function isAbilityInPhase(
    unit: ItemWithAbilities,
    ability: Ability,
    side: PhaseSide,
    phase: Phase,
    subPhase?: SubPhase
) {
    if (
        (ability.category === AbilityCategory.Spell ||
            ability.category === AbilityCategory.Prayer) &&
        (phase === Phase.Hero || phase === undefined) &&
        side === PhaseSide.Attack &&
        (subPhase === SubPhase.While || subPhase === undefined)
    )
        return true;

    if (ability.effects) {
        for (const effect of ability.effects) {
            if (isEffectInPhase(unit, effect, side, phase, subPhase))
                return true;
        }
    }
    return false;
}

export function isAttackInPhase(
    attack: Attack,
    phase: Phase,
    subPhase: SubPhase
) {
    if (
        phase === Phase.Shooting &&
        subPhase === SubPhase.While &&
        !attack.melee
    )
        return true;
    if (phase === Phase.Combat && subPhase === SubPhase.While && attack.melee)
        return true;
    return false;
}

export function isUnitInPhase(
    unit: WarscrollItem,
    side: PhaseSide,
    phase: Phase,
    subPhase: SubPhase
) {
    if (subPhase === SubPhase.While) {
        if (
            (phase === Phase.Movement || phase === Phase.Battleshock) &&
            unit.type === "unit"
        )
            return true;
        if (
            phase === Phase.Shooting &&
            unit.type === "unit" &&
            unit.attacks.some((x) => !x.attack.melee)
        ) {
            return true;
        }
        if (
            phase === Phase.Combat &&
            unit.type === "unit" &&
            unit.attacks.some((x) => x.attack.melee)
        ) {
            return true;
        }
    }
    if (
        unit.abilities.some((x) =>
            isAbilityInPhase(unit, x, side, phase, subPhase)
        )
    )
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
            armyListId: this.player?.armyList.id,
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
                armyList,
            };
        }
    }

    @computed
    get units() {
        return (
            this.player?.armyList.units.filter((x) =>
                isUnitInPhase(x, this.side, this.phase, this.subPhase)
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
        return this.allArmyAbilities.filter((x) =>
            isAbilityInPhase(
                this.armyListStore.armyList,
                x,
                this.side,
                this.phase,
                this.subPhase
            )
        );
    }

    @computed get uncheckedArmyAbilities() {
        return this.armyAbilities.filter((x) => !this.isArmyAbilityChecked(x));
    }
    @computed get checkedArmyAbilities() {
        return this.armyAbilities.filter((x) => this.isArmyAbilityChecked(x));
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
            armyList: warscroll,
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
        switch (this.subPhase) {
            case SubPhase.Before:
                this.goToPhase(this.side, this.phase, SubPhase.While);
                break;
            case SubPhase.While:
                this.goToPhase(this.side, this.phase, SubPhase.After);
                break;
            case SubPhase.After:
                if (this.phase === Phase.Battleshock) {
                    this.goToPhase(
                        this.side === PhaseSide.Attack
                            ? PhaseSide.Defense
                            : PhaseSide.Attack,
                        Phase.Hero,
                        SubPhase.Before
                    );
                } else {
                    this.goToPhase(this.side, this.nextPhase, SubPhase.Before);
                }
                break;
        }
    };

    previous = () => {
        switch (this.subPhase) {
            case SubPhase.Before:
                if (this.phase === Phase.Hero)
                    this.goToPhase(
                        this.side === PhaseSide.Attack
                            ? PhaseSide.Defense
                            : PhaseSide.Attack,
                        Phase.Battleshock,
                        SubPhase.After
                    );
                else
                    this.goToPhase(
                        this.side,
                        this.previousPhase,
                        SubPhase.After
                    );
                break;
            case SubPhase.While:
                this.goToPhase(this.side, this.phase, SubPhase.Before);
                break;
            case SubPhase.After:
                this.goToPhase(this.side, this.phase, SubPhase.While);
                break;
        }
    };

    @action private goToPhase(
        side: PhaseSide,
        phase: Phase,
        subPhase: SubPhase
    ) {
        this.checkedAbilities.clear();
        this.skippedUnits.clear();
        this.checkedArmyAbilityIds.splice(0);
        this.phase = phase;
        this.subPhase = subPhase;
        this.side = side;
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
            (x) =>
                unitAbilities.includes(x.id) ||
                !isAbilityInPhase(unit, x, this.side, this.phase, this.subPhase)
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
