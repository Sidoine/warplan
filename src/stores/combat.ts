import { Attack } from "./units";

export function getValue(formula: string | undefined) {
    if (!formula) return 0;
    const number = formula.match(/^(-?\d+\.?\d*)\+?$/);
    if (number) return parseInt(number[1]);
    const dices = formula.match(/^(\d?)D(\d?)$/);
    if (dices) {
        const numberOfDices = dices[1] ? parseInt(dices[1]) : 1;
        const numberOfSides = dices[2] ? parseInt(dices[2]) : 6;
        return ((numberOfSides + 1) / 2) * numberOfDices;
    }
    throw Error(`Unable to parse ${formula}`)
}

const enemySave = 5;

export function getAttackDamageEx(attack: Attack, override: Partial<Attack>) {
    return getAttackDamage(Object.assign({}, attack, override));
}

export function getAttackDamage(attack: Attack) {
    if (!attack.toHit || !attack.toWound) return 0;
    return (7 - getValue(attack.toHit))/6 * (7 - getValue(attack.toWound))/6 * getValue(attack.damage) * getValue(attack.attacks) * (enemySave - getValue(attack.rend) - 1) / 6;
}

