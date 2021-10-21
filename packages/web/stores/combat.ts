import {
    Attack,
    Value,
    AbilityEffect,
    isRatioValue,
    isSumValue,
    isTargetConditionValue,
    isOrValue,
    isConditionValue,
    isTargetPropertyValue,
    ItemWithAbilities,
    AuraType,
} from "../../common/data";
import { getEffectCondition } from "./battle";
import { DataStore } from "./data";
import { targetEnemy, checkCondition } from "./stats";
import { UnitState, addAttackAura } from "./unit-state";

export function roll(faces = 6) {
    return 1 + Math.floor(Math.random() * faces);
}

export function rolls(faces: number, rolls: number) {
    let result = 0;
    for (let i = 0; i < rolls; i++) {
        result += roll(faces);
    }
    return result;
}

export function getValueText(
    formula: Value,
    unit: ItemWithAbilities,
    dataStore: DataStore
): string | number {
    if (typeof formula === "string" || typeof formula === "number") {
        return formula;
    }
    if (isConditionValue(formula)) {
        return `${getValueText(
            formula.value,
            unit,
            dataStore
        )} if ${getEffectCondition(formula.condition, unit, dataStore).join(
            " and "
        )}${
            formula.defaultValue
                ? `, ${getValueText(
                      formula.defaultValue,
                      unit,
                      dataStore
                  )} otherwise`
                : ""
        }`;
    }
    if (isTargetConditionValue(formula)) {
        return `${getValueText(
            formula.value,
            unit,
            dataStore
        )} if target ${getEffectCondition(
            formula.targetCondition,
            unit,
            dataStore
        ).join(" and ")}${
            formula.defaultValue
                ? `, ${getValueText(
                      formula.defaultValue,
                      unit,
                      dataStore
                  )} otherwise`
                : ""
        }`;
    }
    if (isOrValue(formula)) {
        return `${getValueText(
            formula.left,
            unit,
            dataStore
        )} or ${getValueText(formula.right, unit, dataStore)}`;
    }
    return "✹";
}

export function getValue(
    formula: Value,
    target?: UnitState,
    unit?: UnitState
): number {
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
        const randomValueOnChance = formula.match(/^D(\d+)\((\d)\+\)$/);
        if (randomValueOnChance) {
            const numberOfSides = randomValueOnChance[1]
                ? parseInt(randomValueOnChance[1])
                : 1;
            const valueToReturn = (numberOfSides + 1) / 2;
            const minValue = randomValueOnChance[2]
                ? parseInt(randomValueOnChance[2])
                : 6;
            return (valueToReturn * (minValue - 1)) / 6;
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
        return getValue(formula.value, target) * formula.ratio;
    } else if (isSumValue(formula)) {
        return (
            getValue(formula.value1, target) + getValue(formula.value2, target)
        );
    } else if (isTargetConditionValue(formula)) {
        if (target && checkCondition(formula.targetCondition, target))
            return getValue(formula.value, target);
        else if (formula.defaultValue !== undefined)
            return getValue(formula.defaultValue, target);
        return 0;
    } else if (isOrValue(formula)) {
        const left = getValue(formula.left, target);
        if (left) return left;
        return getValue(formula.right, target);
    } else if (isConditionValue(formula)) {
        if (unit && checkCondition(formula.condition, unit))
            return getValue(formula.value, unit);
        return 0;
    } else if (isTargetPropertyValue(formula)) {
        if (target) {
            if (formula.numberOfModelsWithin) return 2;
        }
        return 0;
    }

    return getValue(formula.values[0], target);
}

export function rollValue(
    formula: Value,
    howMany: number,
    target: UnitState,
    unit: UnitState
): number {
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
        return rollValue(formula.value, howMany, target, unit) * formula.ratio;
    } else if (isSumValue(formula)) {
        return (
            rollValue(formula.value1, howMany, target, unit) +
            rollValue(formula.value2, howMany, target, unit)
        );
    } else if (isTargetConditionValue(formula)) {
        if (checkCondition(formula.targetCondition, target))
            return rollValue(formula.value, howMany, target, unit);
        return 0;
    } else if (isOrValue(formula)) {
        const left = rollValue(formula.left, howMany, target, unit);
        if (!left) {
            return rollValue(formula.right, howMany, target, unit);
        }
        return left;
    } else if (isConditionValue(formula)) {
        if (checkCondition(formula.condition, unit))
            return rollValue(formula.value, howMany, target, unit);
        return 0;
    } else if (isTargetPropertyValue(formula)) {
        if (target) {
            if (formula.numberOfModelsWithin) return 2;
        }
        return 0;
    }

    return rollValue(formula.values[0], howMany, target, unit);
}

function count(array: number[], value: number) {
    return array.reduce((p, v) => (v === value ? p + 1 : p), 0);
}

function countLowerOrEqual(array: number[], max: number) {
    return array.reduce((p, v) => (v <= max ? p + 1 : p), 0);
}

export abstract class Combat {
    abstract valueRoller(
        value: Value,
        howMany: number,
        target: UnitState,
        unit: UnitState
    ): Promise<number>;

    /** Roll dices
     * @param dices The number of dices
     * @param groups The limits of group of values that are equivalent. Each value in each group lead to the same result, it doesn't matter wich value is returned. The group that starts at 1 is always present.
     * e.g. [] create one groupe where all the values are equivalent
     * [5] create two groups, one with the values from 1 to 4, and one with the values 5 and 6
     * @returns The list of dices values
     */
    abstract diceRoller(dices: number, groups: number[]): Promise<number[]>;

    async executeAttack(caster: UnitState, target: UnitState, attack: Attack) {
        let attacks = await this.valueRoller(attack.attacks, 1, target, caster);
        const toHit = await this.valueRoller(attack.toHit, 1, target, caster);
        const toWound = await this.valueRoller(
            attack.toWound,
            1,
            target,
            caster
        );

        const attackAura = caster.attackAura;
        if (attackAura.bonusAttacks) {
            attacks += await this.valueRoller(
                attackAura.bonusAttacks,
                1,
                target,
                caster
            );
        }

        let hitRolls = await this.diceRoller(attacks, [toHit]);
        if (attackAura.rerollHitsOn1) {
            hitRolls = await this.reroll(hitRolls, 1, [toHit]);
        }

        const bonusHit =
            (await this.valueRoller(
                attackAura.bonusHitRoll,
                1,
                target,
                caster
            )) || 0;
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
                hitRolls = hitRolls.filter((x) => x !== 6);
                target.wounds += await this.valueRoller(
                    attackAura.mortalWoundsOnHitUnmodified6,
                    numberOf6,
                    target,
                    caster
                );
            }
        }

        let hits = hitRolls.filter(
            (x) => x + bonusHit >= toHit && x !== 1
        ).length;

        if (hits === 0) return;
        if (attackAura.numberOfHitsOnUnmodified6) {
            const bonusHits = count(hitRolls, 6);
            hits +=
                (await this.valueRoller(
                    attackAura.numberOfHitsOnUnmodified6,
                    bonusHits,
                    target,
                    caster
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
            hits = await this.valueRoller(
                attackAura.numberOfHitsOnHit,
                hits,
                target,
                caster
            );
        }

        const woundRolls = await this.diceRoller(hits, [toWound]);
        let wounds = woundRolls.filter((x) => x >= toWound).length;
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
        return dice.filter((x) => x !== rerollOn).concat(newRolls);
    }

    async rerollLowerOrEqual(dice: number[], max: number, groups: number[]) {
        const numberOfRerolls = countLowerOrEqual(dice, max);
        if (numberOfRerolls === 0) return dice;
        const newRolls = await this.diceRoller(numberOfRerolls, groups);
        return dice.filter((x) => x > max).concat(newRolls);
    }

    async executeDamage(
        caster: UnitState,
        wounds: number,
        target: UnitState,
        attack: Attack,
        attackDamage?: Value
    ) {
        let rend = await this.valueRoller(attack.rend, 1, target, caster);
        if (caster.attackAura.bonusRend)
            rend += await this.valueRoller(
                caster.attackAura.bonusRend,
                1,
                target,
                caster
            );
        const save = await this.valueRoller(
            target.unit.save,
            1,
            target,
            caster
        );
        const mortalWoundRolls = await this.diceRoller(wounds, [save - rend]);
        const mortalWounds = mortalWoundRolls.filter(
            (x) => x < save - rend
        ).length;
        if (mortalWounds === 0) return 0;
        let damage = await this.valueRoller(
            attackDamage || attack.damage,
            mortalWounds,
            target,
            caster
        );
        if (caster.attackAura.bonusDamage) {
            damage += await this.valueRoller(
                caster.attackAura.bonusDamage,
                mortalWounds,
                target,
                caster
            );
        }
        target.wounds += damage;
    }

    async executeAbilityEffect(
        caster: UnitState,
        target: UnitState,
        effect: AbilityEffect,
        multiplier = 1
    ) {
        if (!targetEnemy(effect)) target = caster;
        if (effect.condition && !checkCondition(effect.condition, caster))
            return false;
        if (
            effect.targetCondition &&
            !checkCondition(effect.targetCondition, target)
        )
            return false;

        if (effect.auras) {
            for (const aura of effect.auras) {
                if (aura.type === AuraType.Attack)
                    addAttackAura(target, { aura });
            }
        }
        if (effect.immediate?.mortalWounds) {
            const mortalWounds = await this.valueRoller(
                effect.immediate.mortalWounds,
                multiplier,
                target,
                caster
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

    valueRoller(
        value: Value,
        howMany: number,
        target: UnitState,
        unit: UnitState
    ) {
        return Promise.resolve(rollValue(value, howMany, target, unit));
    }
}
