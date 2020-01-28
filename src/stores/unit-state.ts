import {
    AttackAura,
    DefenseAura,
    DebuffAura,
    ModelOption,
    Unit,
    AttackAuraValues,
    AttackAuraBooleans,
    AttackAuraAbilityEffects,
    getSumValues,
    getValueRatio,
    Attack
} from "./units";

type AttackAuraValueKey = keyof AttackAuraValues;
const attackAuraValueKeys: AttackAuraValueKey[] = [
    "bonusHitRoll",
    "bonusAttacks",
    "numberOfHitsOnUnmodified6",
    "numberOfHitsOnHit",
    "mortalWoundsOnHitUnmodified6",
    "mortalWounds",
    "damageOnWoundUnmodified6",
    "bonusRend"
];
// const attackAuraNumberKeys: (keyof AttackAuraNumbers)[] = [];
const attackAuraBooleanKeys: (keyof AttackAuraBooleans)[] = [
    "rerollFailedHits"
];
const attackAuraAbilityEffectKeys: (keyof AttackAuraAbilityEffects)[] = [
    "effectsOnHitUnmodified6"
];

export interface AuraState<T> {
    aura: T;
    effectRatio?: number;
    duration?: number;
}

export interface States {
    attackAuras: AuraState<AttackAura>[];
    attackAura: AttackAura;
    defenseAura: AuraState<DefenseAura>[];
    debuffAuras: AuraState<DebuffAura>[];
    unitState: UnitState;
}

export class WeaponState implements States {
    attackAuras: AuraState<AttackAura>[] = [];
    attackAura: AttackAura = {};
    defenseAura: AuraState<DefenseAura>[] = [];
    debuffAuras: AuraState<DebuffAura>[] = [];
    unitState: UnitState;

    constructor(public attack: Attack, public modelState: ModelState) {
        this.unitState = modelState.unitState;
    }
}

export class ModelState implements States {
    attackAuras: AuraState<AttackAura>[] = [];
    attackAura: AttackAura = {};
    defenseAura: AuraState<DefenseAura>[] = [];
    debuffAuras: AuraState<DebuffAura>[] = [];
    weaponStates: WeaponState[] = [];

    constructor(
        public options: ModelOption[],
        public unitState: UnitState,
        public size: number
    ) {}
}

export class UnitState implements States {
    attackAuras: AuraState<AttackAura>[] = [];
    attackAura: AttackAura = {};
    defenseAura: AuraState<DefenseAura>[] = [];
    debuffAuras: AuraState<DebuffAura>[] = [];
    hasCharged: boolean = false;
    hasMoved: boolean = false;
    wounds: number = 0;
    models: ModelState[] = [];
    unitState = this;
    constructor(public unit: Unit) {}
}

export function sumAttackAura(
    sum: AttackAura,
    aura: AttackAura,
    ratio?: number
) {
    for (const key of attackAuraValueKeys) {
        if (aura[key]) {
            sum[key] = getSumValues(sum[key], getValueRatio(aura[key], ratio));
        }
    }
    // for (const key of attackAuraNumberKeys) {
    //     const a = aura[key];
    //     if (a) {
    //         sum[key] = a * (ratio || 1);
    //     }
    // }
    for (const key of attackAuraBooleanKeys) {
        if (aura[key]) sum[key] = true;
    }
    for (const key of attackAuraAbilityEffectKeys) {
        const a = aura[key];
        if (a) {
            // TODO ratio?
            const effects = sum[key] || [];
            sum[key] = effects.concat(a);
        }
    }
    return sum;
}

export function addAttackAura(
    states: States,
    auraState: AuraState<AttackAura>
) {
    states.attackAuras.push(auraState);
    sumAttackAura(states.attackAura, auraState.aura, auraState.effectRatio);
}
