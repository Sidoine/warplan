import { Attack, Value, UnitState, AbilityEffect, targetEnemy, checkCondition, isRatioValue, isSumValue } from "./units";

export function getValue(formula: Value): number {
    if (formula === undefined ||formula === "-" || formula === "✹" || formula === "👁") return 0;
    if (typeof(formula) === "number") return formula;

    if (typeof(formula) === "string") {
        const number = formula.match(/^(-?\d+\.?\d*)[\+\"]?$/);
        if (number) return parseInt(number[1]);
        const dices = formula.match(/^(\d?)D(\d?)(\+\d+)?$/);
        if (dices) {
            const numberOfDices = dices[1] ? parseInt(dices[1]) : 1;
            const numberOfSides = dices[2] ? parseInt(dices[2]) : 6;
            const bonus = dices[3] ? parseInt(dices[3]) : 0;
            return ((numberOfSides + 1) / 2) * numberOfDices + bonus;
        }
        throw Error(`Unable to parse ${formula}`)
    } else if (isRatioValue(formula)) {
        return getValue(formula.value) * formula.ratio;
    } else if (isSumValue(formula)) {
        return getValue(formula.value1) + getValue(formula.value2);
    }

    return getValue(formula.values[0]);
}


export function rollValue(formula: Value): number {
    if (formula === undefined ||formula === "-" || formula === "✹" || formula === "👁") return 0;
    if (typeof(formula) === "number") return formula;

    if (typeof(formula) === "string") {
        const number = formula.match(/^(-?\d+\.?\d*)[\+\"]?$/);
        if (number) return parseInt(number[1]);
        const dices = formula.match(/^(\d?)D(\d?)(\+\d+)?$/);
        if (dices) {
            const numberOfDices = dices[1] ? parseInt(dices[1]) : 1;
            const numberOfSides = dices[2] ? parseInt(dices[2]) : 6;
            const bonus = dices[3] ? parseInt(dices[3]) : 0;
            return rolls(numberOfSides, numberOfDices) + bonus;
        }
        throw Error(`Unable to parse ${formula}`)
    } else if (isRatioValue(formula)) {
        return rollValue(formula.value) * formula.ratio;
    } else if (isSumValue(formula)) {
        return rollValue(formula.value1) + rollValue(formula.value2);
    }

    return rollValue(formula.values[0]);
}
    
const enemySave = 5;

export function getAttackDamageEx(attack: Attack, override: Partial<Attack>) {
    return getAttackDamage(Object.assign({}, attack, override));
}

export function getAttackDamage(attack: Attack) {
    if (!attack.toHit || !attack.toWound) return 0;
    return (7 - getValue(attack.toHit))/6 * (7 - getValue(attack.toWound))/6 * getValue(attack.damage) * getValue(attack.attacks) * (enemySave - getValue(attack.rend) - 1) / 6;
}

export function roll(faces: number = 6) {
    return 1 + Math.floor(Math.random() * faces);
}

export function rolls(faces: number, rolls: number) {
    let result = 0;
    for (let i = 0; i < rolls; i++){
        result += roll(faces);
    }
    return result;
}

export abstract class Combat {
    abstract async valueRoller(value: Value, multiplier: number): Promise<number>;

    /** Roll dices
     * @param dices The number of dices
     * @param groups The limits of group of values that are equivalent. Each value in each group lead to the same result, it doesn't matter wich value is returned. The group that starts at 1 is always present.
     * e.g. [] create one groupe where all the values are equivalent
     * [5] create two groups, one with the values from 1 to 4, and one with the values 5 and 6
     * @returns The list of dices values
     */
    abstract async diceRoller(dices: number, groups: number[]): Promise<number[]>;

    async executeAttack(caster: UnitState, target: UnitState, attack: Attack) {
        const attacks = await this.valueRoller(attack.attacks, 1);
        const toHit = await this.valueRoller(attack.toHit, 1);
        const toWound = await this.valueRoller(attack.toWound, 1);
        const hitRolls = await this.diceRoller(attacks, [toHit]);
        const hits = hitRolls.filter(x => x >= toHit).length;
        if (hits === 0) return;
        const attackAura = caster.attackAura;
        if (attackAura.effectsOnHitUnmodified6) {
            const numberOf6 = hitRolls.filter(x => x === 6).length;
            if (numberOf6 > 0) {
                for (const effect of attackAura.effectsOnHitUnmodified6) {
                    this.executeAbilityEffect(caster, target, effect, numberOf6);
                }
            }                    
        }
        const woundRolls = await this.diceRoller(hits, [toWound]);
        let wounds = woundRolls.filter(x => x >= toWound).length;
        if (wounds === 0) return;
        if (attackAura.damageOnWoundUnmodified6) {
            const sixes = woundRolls.filter(x => x === 6).length;
            if (sixes > 0) {
                wounds -= sixes;
                await this.executeDamage(sixes, target, attack, attackAura.damageOnWoundUnmodified6);
                if (wounds === 0) return;
            }
        }
        await this.executeDamage(wounds, target, attack);
    }

    async executeDamage(wounds: number, target: UnitState, attack: Attack, attackDamage?: Value) {
        const rend = await this.valueRoller(attack.rend, 1);
        const save = await this.valueRoller(target.unit.save, 1);
        const mortalWoundRolls = await this.diceRoller(wounds, [save - rend]);
        const mortalWounds = mortalWoundRolls.filter(x => x < save - rend).length;
        if (mortalWounds === 0) return 0;
        const damage = await this.valueRoller(attackDamage || attack.damage, 1);
        target.wounds += mortalWounds * damage;
    }

    async executeAbilityEffect(caster: UnitState, target: UnitState, effect: AbilityEffect, multiplier: number = 1) {
        if (!targetEnemy(effect)) target = caster;
        if (effect.condition && !checkCondition(effect.condition, caster)) return;
        if (effect.targetCondition && !checkCondition(effect.targetCondition, target)) return;
         
        if (effect.attackAura) {
            target.addAttackAura({ aura: effect.attackAura });
        }
        if (effect.mortalWounds) {
            const mortalWounds = await this.valueRoller(effect.mortalWounds, multiplier);
            target.wounds += mortalWounds;
        }
    }
}

export class RandomCombat extends Combat {
    diceRoller(dices: number, groups: number[]) {
        const rolls: number[] = [];
        for (let i = 0; i < dices; i++){
            rolls.push(roll(6));
        }
        return Promise.resolve(rolls);
    }
    
    valueRoller(value: Value, multiplier: number) {
        return Promise.resolve(rollValue(value) * multiplier);
    }
} 