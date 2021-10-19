import { test, expect } from "@jest/globals";
import { AttackAuraValues } from "../../common/data";
import { sumAttackAura } from "./unit-state";
type Complete<T> = {
    [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
        ? T[P]
        : T[P] | undefined;
};
type AttackAuraValuesMandatory = Complete<AttackAuraValues>;

test("sumAttackAura sums all the stats", () => {
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
        retreatAfterAttack: 1,
        rerollFailedHits: 1,
        bonusDamageOnWoundUnmodified6: 1,
        bonusMortalWoundsOnHitUnmodified6: 1,
        mortalWoundsOnHitUnmodified5: 1,
        bonusPileInDistance: 1,
        malusPileInDistance: 1,
    };
    const sum: AttackAuraValues = {};

    const result = sumAttackAura(sum, attackAura);

    expect(result).toBe(sum);
    expect(result).toEqual(attackAura);
});
