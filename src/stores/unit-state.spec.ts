import test from "ava";
import { AttackAuraValues, AttackAura } from "./units";
import { sumAttackAura } from "./unit-state";
type Complete<T> = {
    [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
        ? T[P]
        : T[P] | undefined;
};
type AttackAuraValuesMandatory = Complete<AttackAuraValues>;

test("sumAttackAura sums all the stats", t => {
    const attackAura: AttackAuraValuesMandatory = {
        bonusAttacks: 1,
        bonusDamage: 1,
        bonusDamageOnHitUnmodified6: 1,
        bonusHitRoll: 1,
        bonusRend: 1,
        bonusRendOnWound6OrMore: 1,
        bonusWoundRoll: 1,
        damageOnWoundUnmodified6: 1,
        malusHitRoll: 1,
        mortalWounds: 1,
        mortalWoundsOnHit: 1,
        mortalWoundsOnHitUnmodified6: 1,
        numberOfHitsOnHit: 1,
        numberOfHitsOnUnmodified6: 1,
        rangeBonus: 1,
        rerollHitsOn1: 1,
        rerollWoundsOn1: 1,
        retreatAfterAttack: 1
    };
    const sum: AttackAuraValues = {};

    const result = sumAttackAura(sum, attackAura);

    t.is(result, sum);
    for (const [key, value] of Object.entries(attackAura)) {
        t.is(result[key as keyof AttackAura], value, key);
    }
});