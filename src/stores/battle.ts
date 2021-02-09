import { observable, action, computed, makeObservable } from "mobx";
import { Warscroll, WarscrollItem } from "./warscroll";
import {
    Phase,
    AbilityEffect,
    TargetType,
    Ability,
    Attack,
    UnitsStore,
    AbilityCategory
} from "./units";

export interface Player {
    name: string;
    warscroll: Warscroll;
}

export const phases = [
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

export const enum PhaseSide {
    Attack,
    Defense,
    None
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
    if (effect.commandAura || effect.spellAura) phase |= Phase.Hero;
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
    unit?: WarscrollItem,
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
            if (!unit || unit.type !== "unit") return true;
            if (
                phase === Phase.Combat &&
                unit.attacks.some(x => x.attack.melee)
            )
                return true;
            if (
                phase === Phase.Shooting &&
                unit.attacks.some(x => !x.attack.melee)
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
    if (phase & Phase.Any && effect.commandAura) return true;

    return false;
}

export function isAbilityInPhase(
    ability: Ability,
    phase: Phase,
    unit?: WarscrollItem,
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

export class BattleStore {
    @observable turn = 0;

    @observable phase: Phase = 0;
    @observable side: PhaseSide = PhaseSide.None;

    @observable player: Player | null = null;

    constructor(private unitsStore: UnitsStore) {
        makeObservable(this);
    }

    @computed get abilities() {
        let result: Ability[] = this.unitsStore.baseAbilities;
        if (!this.player) return result;
        const w = this.player.warscroll;
        if (w.armyOption) {
            if (w.armyOption.abilities)
                result = result.concat(w.armyOption.abilities);
        }
        if (w.allegiance.battleTraits)
            result = result.concat(w.allegiance.battleTraits);
        return result;
    }

    @action
    start(warscroll: Warscroll) {
        this.player = {
            name: "Player",
            warscroll: warscroll
        };
        this.phase = Phase.Setup;
        this.side = PhaseSide.Attack;
    }

    @action
    toggleSide = () => {
        this.side =
            this.side === PhaseSide.Attack
                ? PhaseSide.Defense
                : PhaseSide.Attack;
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

    @action
    next = () => {
        this.phase = this.nextPhase;
    };

    @action
    previous = () => {
        this.phase = this.previousPhase;
    };

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
