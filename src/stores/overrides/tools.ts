import { WeaponOptionCategory, Attack, Ability, Unit } from "../units";
import { getAttackDamageEx } from "../combat";

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
    return models * (2/6 - getAttackDamageEx(attack, { toHit: "6"}));
}

export function getWoundsForUnitLeaderHasOneExtraAttack(attack: Attack) {
    return getAttackDamageEx(attack, { attacks: "1" });
}