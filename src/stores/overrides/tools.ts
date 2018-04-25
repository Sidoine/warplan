import { WeaponOptionCategory, Attack, Ability, Unit } from "../units";

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