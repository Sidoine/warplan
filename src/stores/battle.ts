import { observable, action, computed } from "mobx";
import { Warscroll, WarscrollUnit } from "./warscroll";
import {
    Phase,
    AbilityEffect,
    TargetType,
    Ability,
    Attack,
    UnitsStore
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

export function isEffectInPhase(
    effect: AbilityEffect,
    phase: Phase,
    unit?: WarscrollUnit,
    side?: PhaseSide
) {
    if (phase & Phase.Combat || phase & Phase.Shooting) {
        if (effect.phase !== undefined && effect.phase !== phase) return false;
        if (effect.defenseAura && side === PhaseSide.Defense) return true;
        if (
            effect.attackAura &&
            effect.targetType !== TargetType.Enemy &&
            side === PhaseSide.Attack
        ) {
            if (!unit) return false;
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
            effect.attackAura &&
            effect.targetType === TargetType.Enemy &&
            side === PhaseSide.Defense
        ) {
            if (!unit) return false;
            return true;
        }
        if (
            (effect.mortalWounds || effect.mortalWoundsPerModel) &&
            side === PhaseSide.Attack
        )
            return true;
        if (effect.phase === phase) return true;
        return false;
    }
    if (phase & Phase.Battleshock && effect.battleShockAura) return true;
    if (phase & Phase.Movement && effect.movementAura) return true;
    if (phase & Phase.Charge && effect.chargeAura) return true;
    if (phase & Phase.Hero && effect.spellAura) return true;
    if (phase & Phase.Any && effect.commandAura) return true;
    if (effect.phase !== undefined)
        return effect.phase === phase && side !== PhaseSide.Defense;
    return false;
}

export function isAbilityInPhase(
    ability: Ability,
    phase: Phase,
    unit?: WarscrollUnit,
    side?: PhaseSide
) {
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
    unit: WarscrollUnit,
    phase: Phase,
    side?: PhaseSide
) {
    if (phase === Phase.Movement || phase === Phase.Battleshock) return true;
    if (phase === Phase.Shooting && unit.attacks.some(x => !x.attack.melee)) {
        return true;
    }
    if (phase === Phase.Combat && unit.attacks.some(x => x.attack.melee)) {
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

    constructor(private unitsStore: UnitsStore) {}

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
    next = () => {
        switch (this.phase) {
            case Phase.Setup:
                this.phase = Phase.Hero;
                break;
            case Phase.Hero:
                this.phase = Phase.Movement;
                break;
            case Phase.Movement:
                this.phase = Phase.Shooting;
                break;
            case Phase.Shooting:
                this.phase = Phase.Charge;
                break;
            case Phase.Charge:
                this.phase = Phase.Combat;
                break;
            case Phase.Combat:
                this.phase = Phase.Battleshock;
                break;
            case Phase.Battleshock:
                this.phase = Phase.Hero;
                this.side = PhaseSide.Attack
                    ? PhaseSide.Defense
                    : PhaseSide.Attack;
                break;
        }
    };

    @action
    previous = () => {
        switch (this.phase) {
            case Phase.Hero:
                this.phase = Phase.Battleshock;
                this.side = PhaseSide.Attack
                    ? PhaseSide.Defense
                    : PhaseSide.Attack;
                break;
            case Phase.Movement:
                this.phase = Phase.Hero;
                break;
            case Phase.Shooting:
                this.phase = Phase.Movement;
                break;
            case Phase.Charge:
                this.phase = Phase.Shooting;
                break;
            case Phase.Combat:
                this.phase = Phase.Charge;
                break;
            case Phase.Battleshock:
                this.phase = Phase.Combat;
                break;
        }
    };
}
