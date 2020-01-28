import {
    Attack,
    Value,
    AbilityEffect,
    isRatioValue,
    isSumValue,
    isConditionValue
} from "./units";
import { targetEnemy, checkCondition } from "./stats";
import { UnitState, addAttackAura } from "./unit-state";

export function getValue(formula: Value): number {
    if (
        formula === undefined ||
        formula === "-" ||
        formula === "✹" ||
        formula === "👁"
    )
        return 0;
    if (typeof formula === "number") return formula;

    if (typeof formula === "string") {
        const number = formula.match(/^(-?\d+\.?\d*)[\+\"]?$/);
        if (number) return parseInt(number[1]);
        const dices = formula.match(/^(\d?)D(\d?)([\+\-]\d+)?$/);
        if (dices) {
            const numberOfDices = dices[1] ? parseInt(dices[1]) : 1;
            const numberOfSides = dices[2] ? parseInt(dices[2]) : 6;
            const bonus = dices[3] ? parseInt(dices[3]) : 0;
            return ((numberOfSides + 1) / 2) * numberOfDices + bonus;
        }
        const someDices = formula.match(/^(\d*)D\((\d)\+\)$/);
        if (someDices) {
            const numberOfDices = someDices[1] ? parseInt(someDices[1]) : 1;
            const minValue = someDices[2] ? parseInt(someDices[2]) : 6;
            return (numberOfDices * 3.5 * (minValue - 1)) / 6;
        }
        const valueOnChance = formula.match(/^(\d+)\((\d)\+\)$/);
        if (valueOnChance) {
            const valueToReturn = valueOnChance[1]
                ? parseInt(valueOnChance[1])
                : 1;
            const minValue = valueOnChance[2] ? parseInt(valueOnChance[2]) : 6;
            return (valueToReturn * (minValue - 1)) / 6;
        }
        throw Error(`Unable to parse ${formula}`);
    } else if (isRatioValue(formula)) {
        return getValue(formula.value) * formula.ratio;
    } else if (isSumValue(formula)) {
        return getValue(formula.value1) + getValue(formula.value2);
    } else if (isConditionValue(formula)) {
        return getValue(formula.value);
    }

    return getValue(formula.values[0]);
}

export function rollValue(formula: Value, howMany: number): number {
    if (
        formula === undefined ||
        formula === "-" ||
        formula === "✹" ||
        formula === "👁"
    )
        return 0;
    if (typeof formula === "number") return formula * howMany;

    if (typeof formula === "string") {
        const number = formula.match(/^(-?\d+\.?\d*)[\+\"]?$/);
        if (number) return parseInt(number[1]) * howMany;
        const dices = formula.match(/^(\d?)D(\d?)(\+\d+)?$/);
        if (dices) {
            const numberOfDices = dices[1] ? parseInt(dices[1]) : 1;
            const numberOfSides = dices[2] ? parseInt(dices[2]) : 6;
            const bonus = dices[3] ? parseInt(dices[3]) : 0;
            return (
                rolls(numberOfSides, numberOfDices * howMany) + bonus * howMany
            );
        }
        throw Error(`Unable to parse ${formula}`);
    } else if (isRatioValue(formula)) {
        return rollValue(formula.value, howMany) * formula.ratio;
    } else if (isSumValue(formula)) {
        return (
            rollValue(formula.value1, howMany) +
            rollValue(formula.value2, howMany)
        );
    } else if (isConditionValue(formula)) {
        return rollValue(formula.value, howMany);
    }

    return rollValue(formula.values[0], howMany);
}

const enemySave = 5;

export function getAttackDamageEx(attack: Attack, override: Partial<Attack>) {
    return getAttackDamage(Object.assign({}, attack, override));
}

export function getAttackDamage(attack: Attack) {
    if (!attack.toHit || !attack.toWound) return 0;
    return (
        (((((7 - getValue(attack.toHit)) / 6) *
            (7 - getValue(attack.toWound))) /
            6) *
            getValue(attack.damage) *
            getValue(attack.attacks) *
            (enemySave - getValue(attack.rend) - 1)) /
        6
    );
}

export function roll(faces: number = 6) {
    return 1 + Math.floor(Math.random() * faces);
}

export function rolls(faces: number, rolls: number) {
    let result = 0;
    for (let i = 0; i < rolls; i++) {
        result += roll(faces);
    }
    return result;
}

function count(array: number[], value: number) {
    return array.reduce((p, v) => (v === value ? p + 1 : p), 0);
}

function countLowerOrEqual(array: number[], max: number) {
    return array.reduce((p, v) => (v <= max ? p + 1 : p), 0);
}

export abstract class Combat {
    abstract async valueRoller(value: Value, howMany: number): Promise<number>;

    /** Roll dices
     * @param dices The number of dices
     * @param groups The limits of group of values that are equivalent. Each value in each group lead to the same result, it doesn't matter wich value is returned. The group that starts at 1 is always present.
     * e.g. [] create one groupe where all the values are equivalent
     * [5] create two groups, one with the values from 1 to 4, and one with the values 5 and 6
     * @returns The list of dices values
     */
    abstract async diceRoller(
        dices: number,
        groups: number[]
    ): Promise<number[]>;

    async executeAttack(caster: UnitState, target: UnitState, attack: Attack) {
        let attacks = await this.valueRoller(attack.attacks, 1);
        const toHit = await this.valueRoller(attack.toHit, 1);
        const toWound = await this.valueRoller(attack.toWound, 1);

        const attackAura = caster.attackAura;
        if (attackAura.bonusAttacks) {
            attacks += await this.valueRoller(attackAura.bonusAttacks, 1);
        }

        let hitRolls = await this.diceRoller(attacks, [toHit]);
        if (attackAura.rerollHitsOn1) {
            hitRolls = await this.reroll(hitRolls, 1, [toHit]);
        }

        const bonusHit =
            (await this.valueRoller(attackAura.bonusHitRoll, 1)) || 0;
        if (attackAura.rerollFailedHits) {
            hitRolls = await this.rerollLowerOrEqual(
                hitRolls,
                Math.max(1, toHit - bonusHit - 1),
                [toHit]
            );
        }

        if (attackAura.mortalWoundsOnHitUnmodified6) {
            const numberOf6 = count(hitRolls, 6);
            if (numberOf6 > 0) {
                hitRolls = hitRolls.filter(x => x !== 6);
                target.wounds += await this.valueRoller(
                    attackAura.mortalWoundsOnHitUnmodified6,
                    numberOf6
                );
            }
        }

        let hits = hitRolls.filter(x => x + bonusHit >= toHit && x !== 1)
            .length;

        if (hits === 0) return;
        if (attackAura.numberOfHitsOnUnmodified6) {
            const bonusHits = count(hitRolls, 6);
            hits +=
                (await this.valueRoller(
                    attackAura.numberOfHitsOnUnmodified6,
                    bonusHits
                )) - bonusHits;
        }

        if (attackAura.effectsOnHitUnmodified6) {
            const numberOf6 = count(hitRolls, 6);
            if (numberOf6 > 0) {
                for (const effect of attackAura.effectsOnHitUnmodified6) {
                    this.executeAbilityEffect(
                        caster,
                        target,
                        effect,
                        numberOf6
                    );
                }
            }
        }

        if (attackAura.numberOfHitsOnHit) {
            hits = await this.valueRoller(attackAura.numberOfHitsOnHit, hits);
        }

        const woundRolls = await this.diceRoller(hits, [toWound]);
        let wounds = woundRolls.filter(x => x >= toWound).length;
        if (wounds === 0) return;
        if (attackAura.damageOnWoundUnmodified6) {
            const sixes = count(woundRolls, 6);
            if (sixes > 0) {
                wounds -= sixes;
                await this.executeDamage(
                    caster,
                    sixes,
                    target,
                    attack,
                    attackAura.damageOnWoundUnmodified6
                );
                if (wounds === 0) return;
            }
        }
        await this.executeDamage(caster, wounds, target, attack);
    }

    async reroll(dice: number[], rerollOn: number, groups: number[]) {
        const numberOfRerolls = count(dice, rerollOn);
        if (numberOfRerolls === 0) return dice;
        const newRolls = await this.diceRoller(numberOfRerolls, groups);
        return dice.filter(x => x !== rerollOn).concat(newRolls);
    }

    async rerollLowerOrEqual(dice: number[], max: number, groups: number[]) {
        const numberOfRerolls = countLowerOrEqual(dice, max);
        if (numberOfRerolls === 0) return dice;
        const newRolls = await this.diceRoller(numberOfRerolls, groups);
        return dice.filter(x => x > max).concat(newRolls);
    }

    async executeDamage(
        caster: UnitState,
        wounds: number,
        target: UnitState,
        attack: Attack,
        attackDamage?: Value
    ) {
        let rend = await this.valueRoller(attack.rend, 1);
        if (caster.attackAura.bonusRend)
            rend += await this.valueRoller(caster.attackAura.bonusRend, 1);
        const save = await this.valueRoller(target.unit.save, 1);
        const mortalWoundRolls = await this.diceRoller(wounds, [save - rend]);
        const mortalWounds = mortalWoundRolls.filter(x => x < save - rend)
            .length;
        if (mortalWounds === 0) return 0;
        const damage = await this.valueRoller(
            attackDamage || attack.damage,
            mortalWounds
        );
        target.wounds += damage;
    }

    async executeAbilityEffect(
        caster: UnitState,
        target: UnitState,
        effect: AbilityEffect,
        multiplier: number = 1
    ) {
        if (!targetEnemy(effect)) target = caster;
        if (effect.condition && !checkCondition(effect.condition, caster))
            return false;
        if (
            effect.targetCondition &&
            !checkCondition(effect.targetCondition, target)
        )
            return false;

        if (effect.attackAura) {
            addAttackAura(target, { aura: effect.attackAura });
        }
        if (effect.mortalWounds) {
            const mortalWounds = await this.valueRoller(
                effect.mortalWounds,
                multiplier
            );
            target.wounds += mortalWounds;
        }
        return true;
    }
}

export class RandomCombat extends Combat {
    diceRoller(dices: number, groups: number[]) {
        const rolls: number[] = [];
        for (let i = 0; i < dices; i++) {
            rolls.push(roll(6));
        }
        return Promise.resolve(rolls);
    }

    valueRoller(value: Value, howMany: number) {
        return Promise.resolve(rollValue(value, howMany));
    }
}
