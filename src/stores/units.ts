import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";

export interface Model {
    name: string;
    id: string;
}

export const enum GrandAlliance {
    chaos,
    order,
    death,
    destruction
}

export interface Faction {
    id: string,
    grandAlliance: GrandAlliance,
    name: string
}

export interface Ability {
    name: string;
    description: string;
}

export interface Attack {
    melee: boolean;
    name: string;
    range: string;
    attacks?: string;
    toHit?: string;
    toWound?: string;
    rend?: string;
    damage?: string;
}

export interface WeaponOption {
    id: string;
    name: string;
    abilities?: Ability[];
    attacks?: Attack[];
}

export interface WeaponOptionCategory {
    options: WeaponOption[];
    maxCount?: number;
}

interface WeaponOptionCombination {
    count: number;
    weaponOption: WeaponOption;
}

/*
OPTION 1
OPTION 2

si y'avait deux axes

unroll(i, values)
for (const axeValues of axes[i]) {
    if (i < axes.length) 
        unroll(i+ 1)
    else
       push({values, axeValues});
}
*/


export interface Unit {
    id: string;
    model: Model;
    size: number;
    maxSize?: number;
    maxPoints?: number;
    points: number;
    factions: Faction[];
    subType?: string;
    warscroll?: string;
    move?: number;
    save?: string;
    wounds?: number;
    bravery?: number;
    keywords: string[];
    weaponOptions?: WeaponOptionCategory[];
    abilities?: Ability[];
    commandAbilities?: Ability[];
    attacks?: Attack[];

    isLeader?: (warscroll: WarscrollInterface) => boolean;
    isBattleline?: (warscroll: WarscrollInterface) => boolean;
    isBehemot?: (warscroll: WarscrollInterface) => boolean;
    isArtillery?: (warscroll: WarscrollInterface) => boolean;
}


function getValue(formula: string | undefined) {
    if (!formula) return 0;
    const number = formula.match(/^(-?\d+)\+?$/);
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

function getAttackDamage(attack: Attack) {
    return (7 - getValue(attack.toHit))/6 * (7 - getValue(attack.toWound))/6 * getValue(attack.damage) * getValue(attack.attacks) * (enemySave + getValue(attack.rend) - 1) / 6;
}

function everyWeaponOptionCombinations(index: number, categories: WeaponOptionCategory[], options: WeaponOptionCombination[], result: WeaponOptionCombination[][], remaining: number) {
    const count = categories[index].maxCount;
    for (const weaponOption of categories[index].options) {
        const newOptions = options.concat({ weaponOption: weaponOption, count: count || remaining});
        if (categories.length > index + 1) {
            everyWeaponOptionCombinations(index + 1, categories, newOptions, result, remaining);
        }
        else {
            result.push(newOptions);
        }
    }
}

function getMeleeDamage(option: WeaponOption) {
    return option.attacks ? option.attacks.filter(x => x.melee).reduce((p, c) => p + getAttackDamage(c), 0) : 0;
}

function getRangedDamage(option: WeaponOption) {
    return option.attacks ? option.attacks.filter(x => !x.melee).reduce((p, c) => p + getAttackDamage(c), 0) : 0;
}

export interface WeaponOptionCombinationStats {
    name?: string;
    meleeDamage: number;
    rangedDamage: number;
}

export interface UnitStats {
    unit: Unit;
    save: number | undefined;
    savedWounds: number;
    combinations?: WeaponOptionCombinationStats[];
    base: WeaponOptionCombinationStats;
}

export function getUnitStats(unit: Unit): UnitStats {
    const baseMeleeDamage = unit.attacks ? unit.size * unit.attacks.filter(x => x.melee).reduce((x, c) => x + getAttackDamage(c), 0) : 0;
    const baseRangedDamage = unit.attacks ? unit.size * unit.attacks.filter(x => !x.melee).reduce((x, c) => x + getAttackDamage(c), 0) : 0;
    
    let combinationStats: WeaponOptionCombinationStats[] | undefined;
    if (unit.weaponOptions) {
        const combinations: WeaponOptionCombination[][] = [];
        const sum = unit.weaponOptions.reduce((sum, category) => sum + (category.maxCount !== undefined ? category.maxCount : 0), 0);
        const remaining = unit.size - sum;
        everyWeaponOptionCombinations(0, unit.weaponOptions, [], combinations, remaining);
        
        combinationStats = combinations.map(x => {
            return {
                name: x.map(x => x.weaponOption.name).join("/"),
                meleeDamage: baseMeleeDamage + x.reduce((s, x) => s + x.count * getMeleeDamage(x.weaponOption), 0),
                rangedDamage: baseRangedDamage + x.reduce((s, x) => s + x.count * getRangedDamage(x.weaponOption), 0),
            }
        });
    }

    const save = getValue(unit.save);
    return {
        unit: unit,
        save: unit.save !== undefined ? save : undefined,
        combinations: combinationStats,
        base: { meleeDamage: baseMeleeDamage, rangedDamage: baseRangedDamage },
        savedWounds: (unit.wounds || 0) / ((7 - save) / 6)
    }
}
            
export interface BoxedModel {
    /** Un élément par type de modèle possible (en conversion) */
    models: Model[];
    count: number;
}

export interface Box {
    id: number;
    units: BoxedModel[];
    price: number;
    name: string;
}


export interface BattalionUnit {
    id: number;
    unit: Unit[];
    count: number;
}

export interface Battalion {
    id: string;
    name: string;
    units: BattalionUnit[];
    description?: string;
    points: number;
    factions: Faction[];
    abilities?: Ability[];
}

export interface WarscrollBattalion {
    id: number;
    battalion: Battalion; 
}

export interface WarscrollUnitInterface {
    unit: Unit;
    isGeneral: boolean;
    extraAbilities: ExtraAbility[];
}

export interface WarscrollInterface {
    battalions: WarscrollBattalion[];
    general: WarscrollUnitInterface | undefined;
    extraAbilities: ExtraAbility[];
}

export interface DataStore {
    models: {[key:string]: Model};
    units: {[key:string]: Unit};
    factions: {[key:string]: Faction};
}

export interface Allegiance {
    id: string;
    grandAlliance: GrandAlliance;
    name: string;
    keyword: string;
}

export type ExtraAbilityTest = (unit: WarscrollUnitInterface, warscroll: WarscrollInterface) => boolean;

export interface ExtraAbility {
    id: string;
    ability: Ability;
    allegiance?: Allegiance;
    category: string;
    isAvailable: ExtraAbilityTest;
}

export interface ArmyOptions {
    name: string;
    values: string[];
}

export class UnitsStore {
    serial = 100;

    extraAbilities: ExtraAbility[] = [];
    modelsList: Model[] = [];
    unitList: Unit[] = [];
    battalions: Battalion[] = [];
    boxes: Box[];
    factions: { [key: string]: Faction };
    factionsList: Faction[] = [];
    allegianceList: Allegiance[] = [];
    armyOptions: Map<string, ArmyOptions>;
    
    constructor(data: DataStoreImpl) {   
        overrideStormcast(data);   

        const models: {[key: string]: Model} = data.models;  
        for (const key in models) {
            this.modelsList.push(models[key]);
        }
        this.modelsList = this.modelsList.sort((a, b) => a.name > b.name ? 1 : -1);

        const units: { [key: string]: Unit } = data.units;
        for (const key in units) {
            this.unitList.push(units[key]);
        }
        this.unitList = this.unitList.sort((a, b) => a.model.name > b.model.name ? 1: -1);

        const battalions: { [key: string]: Battalion } = data.battalions;
        for (const key in battalions) {
            this.battalions.push(battalions[key]);
        }

        this.boxes = data.boxes;
        this.factions = data.factions;

        for (const key in this.factions) {
            this.factionsList.push(this.factions[key]);
        }

        const allegiances: {[key: string]: Allegiance} = data.allegiances;
        for (const key in allegiances) {
            this.allegianceList.push(allegiances[key]);
        }
        this.allegianceList = this.allegianceList.sort((a, b) => a.name > b.name ? 1 : -1);

        const extraAbilities: {[key: string]: ExtraAbility} = data.extraAbilities;
        for (const key in extraAbilities) {
            this.extraAbilities.push(extraAbilities[key]);
        }

        this.armyOptions = data.armyOptions;
    }

    getUnit(id: string) {
        return this.unitList.find(x => x.id === id);
    }

    getExtraAbility(id: string) {
        return this.extraAbilities.find(x => x.id === id);
    }
}