import { WeaponOptionCategory, Attack, Ability, Unit, ExtraAbilityTest, Model, Material, WarscrollModel, ModelOption, WarscrollUnitInterface } from "../units";
import { getAttackDamageEx, getValue, getAttackDamage } from "../combat";
import { WarscrollUnit } from "../warscroll";

export function override<T>(value:T, f: (x: T) => void) {
    f(value);
}

export function overrideModel(model: Model, year: number, material: Material) {
    model.material = material;
    model.publicationYear = year;
}

export function getBaseWeaponOption(id: string, categories: WeaponOptionCategory[]) {
    return categories[0].options.find(x => x.id === id);
}

export function setBaseWeaponOption(unit: Unit, id: string, attacks: Attack[], abilities: Ability[]) {
    const options = getBaseWeaponOption(id, unit.weaponOptionCategories!);
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


export function getWoundsForExtraWoundsRollsOnHit(attack: Attack, extraWoundRolls: number) {
    return getAttackDamage(attack) * extraWoundRolls;
}

export function getWoundsForSpecialRendIf6OnWound(attack: Attack, rend: number) {
    return getAttackDamageEx(attack, { toWound: "6", rend: rend }) - getAttackDamageEx(attack, { toWound: "6" });
}

export function keywordAvailable(category: string, keyword: string, alts: string[]): ExtraAbilityTest {
    return (unit, ws) => unit.extraAbilities.every(x => x.category !== category) && unit.unit.keywords.indexOf(keyword) >= 0 && alts.some(x => x === "ALL" || unit.unit.model.name.toUpperCase() === x || unit.unit.keywords.indexOf(x) >= 0);
}

export const artifactAvailable: ExtraAbilityTest = (unit, ws) => !!unit.unit.isLeader && unit.extraAbilities.every(x => x.category !== "artifact")  
         && ws.extraAbilities.filter(x => x.category === "artifact").length < 1 + ws.battalions.length;

export function artifactWithKeywordAvailable(keyword: string, alts: string[]): ExtraAbilityTest {
    return (unit, ws) => artifactAvailable(unit, ws) && unit.unit.keywords.indexOf(keyword) >= 0 && alts.some(x => x === "ALL" || unit.unit.model.name.toUpperCase() === x || unit.unit.keywords.indexOf(x) >= 0);
}
         
export function hasOption(model: WarscrollModel, option: ModelOption) {
    return model.options.some(x => x.id === option.id);
}

export function getOtherModelsCount(unit: WarscrollUnitInterface, model: WarscrollModel) {
    return unit.models.filter(x => x.id !== model.id).reduce((prev, model) => prev + model.count, 0);
}

export function getModelRatio(unit: WarscrollUnitInterface, model: WarscrollModel, howMany: number, forHowMany: number) {
    return Math.floor(unit.modelCount * howMany / forHowMany) - getOtherModelsCount(unit, model);
}

export const frequentRate = 0.75;
export const mediumRate = 0.5;
export const rareRate = 0.2;
export const numberOfNeighborUnits = 2;
export const enemyModelsInRange = 3;
export const numberOfModelsPerUnit = 4;