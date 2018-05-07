import { WeaponOptionCategory, Attack, Ability, Unit } from "../units";
import { getAttackDamageEx, getValue } from "../combat";

export function override<T>(value:T, f: (x: T) => void) {
    f(value);
}

export function getBaseWeaponOption(id: string, categories: WeaponOptionCategory[]) {
    return categories[0].options.find(x => x.id === id);
}

export function setBaseWeaponOption(unit: Unit, id: string, attacks: Attack[], abilities: Ability[]) {
    const options = getBaseWeaponOption(id, unit.weaponOptions!);
    options!.attacks = attacks;
    options!.abilities = abilities;
}

export function getWoundsForAbility6OnHitIsMortalWound(models: number, attack: Attack, mortalWounds: number) {
    return models * (mortalWounds/6 - getAttackDamageEx(attack, { toHit: "6"}));
}

export function getWoundsForAbilityBonus1OnHit(models: number, attack: Attack) {
    return models * 1/6 * getAttackDamageEx(attack, {});
}

export function getWoundsForAbilityReroll1OnHit(models: number, attack: Attack) {
    return models * 1/6 * getAttackDamageEx(attack, {});
}

export function getWoundsForExtraAttack(attack: Attack, count: number = 1) {
    return getAttackDamageEx(attack, { attacks: count.toString() });
}

export function getWoundsForSpecialDamageIf6OnWound(attack: Attack, wounds: number) {
    return getAttackDamageEx(attack, { toWound: "6", damage: (wounds - getValue(attack.damage)).toString() });
}

export function getSavedWoundReroll1(save?: number) {
    return save ? 1/6 * 6 / (7 - save) : 0;
}

export function getWoundsForExtraWoundsRollsOn6OnHit(attack: Attack, extraWoundRolls: number) {
    return getAttackDamageEx(attack, { toHit: 6 }) * extraWoundRolls;
}

export const frequentRate = 0.75;
export const mediumRate = 0.5;
export const rareRate = 0.2;
export const numberOfNeighborUnits = 2;
export const enemyModelsInRange = 3;
export const numberOfModelsPerUnit = 4;