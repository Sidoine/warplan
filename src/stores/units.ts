import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";
import { getAttackDamage, getValue } from "./combat";
import { overrideNurgle } from "./overrides/nurgle";
import { overrideKhorne } from "./overrides/khorne";
import { overrideDevotedOfSigmar } from "./overrides/devoted-of-sigmar";
import { overrideWanderers } from "./overrides/wanderers";
import { overrideIdonethDeepkins } from "./overrides/idoneth-deepkins";
import { overrideEverchosen } from "./overrides/everchosen";

export const enum Material {
    Metal,
    Resin,
    Plastic,
    Mixed
}

export interface Model {
    name: string;
    id: string;
    publicationYear?: number;
    material?: Material;
}

export const enum GrandAlliance {
    chaos,
    order,
    death,
    destruction
}

export interface Faction {
    id: string;
    grandAlliance: GrandAlliance;
    name: string;
    allied?: string[];
}

export const enum AbilityCategory {
    None,
    Magic,
    SpecialRule,
    Command
}

export const enum Phase {
    Setup,
    Hero,
    Movement,
    Shooting,
    Charge,
    Combat,
    Battleshock
}

export interface Aura {

}

export const enum SubPhase {
    Before,
    While,
    After
}

export const EnemyKeyword = "ENEMY";

export interface UnitState {
    hasCharged: boolean;
}

export interface AbilityEffect {
    aura: Aura;
    targetRange?: number;
    whollyWithin?: boolean;
    targetKeyword?: string; // otherwise, self
    targetCondition?: (state: UnitState) => boolean;
    effectRange?: number;
    phase: Phase;
    subPhase: SubPhase;
    condition?: (state: UnitState) => boolean;
}

export interface Ability {
    name: string;
    flavor?: string;
    description?: string;
    getWounds?: (models: number, melee: boolean, attack?: Attack) => number;
    getSavedWounds?: (save?: number) => number;
    category?: AbilityCategory;
}

export interface Attack {
    melee: boolean;
    name: string;
    range: Value;
    attacks?: Value;
    toHit?: Value;
    toWound?: Value;
    rend?: Value;
    damage?: Value;
}

export interface WeaponOption {
    id: string;
    name: string;
    abilities?: Ability[];
    attacks?: Attack[];
}

export interface Scenery {
    id: string;
    name: string;
    points: number;
    description?: string;
    abilities?: Ability[];
}

export interface ModelOption {
    id: string;
    name: string;
    abilities?: Ability[];
    attacks?: Attack[];

    // A model can only have one option of this category
    modelCategory?: string;

    // An unit can't select another option of this category
    unitCategory?: string;
    isOptionValid?: (unit: WarscrollUnitInterface, model: WarscrollModelInterface) => boolean;
}

export type Value = number | string | DamageColumn | undefined;

export interface DamageTable {
    ranges: number[];
    columns: DamageColumn[];
}

export interface DamageColumn {
    name: string;
    values: Value[];
}

export interface UnitInfos {
    abilities?: Ability[];
    attacks?: Attack[];
    commandAbilities?: Ability[];
}

export interface UnitStatModel {
    options: ModelOption[];
    count: number;
}

export interface UnitStatModels {
    name: string;
    models: UnitStatModel[];
}

export interface Unit extends UnitInfos {
    id: string;
    model: Model;
    size: number;
    maxSize?: number;
    maxPoints?: number;
    points: number;
    factions: Faction[];
    subType?: string;
    warscroll?: string;
    move?: Value;
    save?: Value;
    wounds?: Value;
    bravery?: Value;
    keywords: string[];
    damageTable?: DamageTable;
    description?: string;
    flavor?: string;
    magicDescription?: string;
    options?: ModelOption[];
    pictureUrl?: string;

    modelStats?: UnitStatModels[];

    isLeader?: (warscroll: WarscrollInterface) => boolean;
    isBattleline?: (warscroll: WarscrollInterface) => (boolean | undefined);
    isBehemot?: (warscroll: WarscrollInterface) => boolean;
    isArtillery?: (warscroll: WarscrollInterface) => boolean;
}

// function everyWeaponOptionCombinations(index: number, categories: WeaponOptionCategory[], options: WeaponOptionCombination[], result: WeaponOptionCombination[][], remaining: number) {
//     const count = categories[index].maxCount;
//     for (const weaponOption of categories[index].options) {
//         const newOptions = options.concat({ weaponOption: weaponOption, count: count || remaining});
//         if (categories.length > index + 1) {
//             everyWeaponOptionCombinations(index + 1, categories, newOptions, result, remaining);
//         }
//         else {
//             result.push(newOptions);
//         }
//     }
// }

export interface UnitStats {
    name?: string;
    meleeDamage: number;
    rangedDamage: number;
    unit: Unit;
    save: number | undefined;
    savedWounds: number;
    totalDamage: number;
    ignoredAbilities: Ability[];
}

function addAttacksAndAbilitiesToStats(stats: UnitStats, attacks: Attack[] | undefined, size: number, abilities: Ability[] | undefined, baseAbilities?: Ability[]) {
    let meleeDamage = attacks ? size * attacks.filter(x => x.melee).reduce((x, c) => x + getAttackDamage(c), 0) : 0;
    let rangedDamage = attacks ? size * attacks.filter(x => !x.melee).reduce((x, c) => x + getAttackDamage(c), 0) : 0;
    if (abilities) {
        for (const ability of abilities) {
            if (ability.getWounds) {
                meleeDamage  += ability.getWounds(size, true);
                rangedDamage += ability.getWounds(size, false);
                if (attacks) {
                    for (const attack of attacks) {
                        if (attack.melee) {
                            meleeDamage += ability.getWounds(size, true, attack);
                        } else {
                            rangedDamage += ability.getWounds(size, false, attack);
                        }
                    }    
                }
            } 

            if (ability.getSavedWounds) {
                stats.savedWounds += ability.getSavedWounds(stats.save) * size * getValue(stats.unit.wounds);
            }

            if (!ability.getWounds && !ability.getSavedWounds && stats.ignoredAbilities.indexOf(ability) < 0) {
                stats.ignoredAbilities.push(ability);
            }
        }
    } 

    if (baseAbilities) {
        for (const ability of baseAbilities) {
            if (ability.getWounds) {
                if (attacks) {
                    for (const attack of attacks) {
                        if (attack.melee) {
                            meleeDamage += ability.getWounds(size, true, attack);
                        } else {
                            rangedDamage += ability.getWounds(size, false, attack);
                        }
                    }    
                }
            } 
        }
    }

    stats.meleeDamage += meleeDamage;
    stats.rangedDamage += rangedDamage;
}

function updateTotalDamage(stats: UnitStats) {
    stats.totalDamage = stats.meleeDamage * 1.5 + stats.rangedDamage;
}

function getAllFromArray<T, U>(x: T[], lambda: (value: T) => (U[] | undefined)): U[] {
    return x.reduce<U[]>((p, y) => {
        const values = lambda(y);
        if (values) return p.concat(values);
        return p;
    }, []);
}

export function getUnitStats(unit: Unit): UnitStats[] {
    const save = getValue(unit.save);
    const savedWounds = getValue(unit.wounds) * unit.size * (unit.save ? 6 / (7 - save) : 1);
    const baseStats: UnitStats = {
        rangedDamage: 0,
        meleeDamage: 0,
        save: save,
        savedWounds: savedWounds,
        unit: unit,
        totalDamage: 0,
        ignoredAbilities: unit.abilities ? unit.abilities.filter(x => !x.getSavedWounds && !x.getWounds) : []
    };
    addAttacksAndAbilitiesToStats(baseStats, unit.attacks, unit.size, unit.abilities);
    
    let modelStats = unit.modelStats;
    if (!modelStats && unit.options) {
        modelStats = unit.options.filter(x => x.unitCategory === "main").map<UnitStatModels>(x => {
            return {
                name: x.name,
                models: [{ count: unit.size, options: [x] }]
            }
        });
    }

    if (modelStats) {        
        let combinationStats = modelStats.map(x => {
            const result: UnitStats = {
                name: x.name,
                meleeDamage: baseStats.meleeDamage,
                rangedDamage: baseStats.rangedDamage,
                save: baseStats.save,
                savedWounds: baseStats.savedWounds,
                unit: baseStats.unit,
                totalDamage: 0,
                ignoredAbilities: baseStats.ignoredAbilities.concat()
            };
            for (const unitStatModel of x.models) {
                addAttacksAndAbilitiesToStats(result, getAllFromArray(unitStatModel.options, y => y.attacks), unitStatModel.count, getAllFromArray(unitStatModel.options, y => y.abilities), unit.abilities);
            }
            updateTotalDamage(result);

            return result;
        });
        return combinationStats;
    }
    updateTotalDamage(baseStats);

    return [baseStats];
}
            
export interface BoxedModel {
    /** Un élément par type de modèle possible (en conversion) */
    models: Model[];
    count: number;
}

export interface Box {
    id: string;
    units: BoxedModel[];
    price: number;
    name: string;
    url?: string;
}


export interface BattalionUnit {
    id: string;
    // Outer is and, inner is or (keywords)
    units: string[][];
    countMin: number;
    countMax: number;
}

export interface Battalion {
    id: string;
    name: string;
    units: BattalionUnit[];
    description?: string;
    points: number;
    allegiance: Allegiance;
    abilities?: Ability[];
}

export interface WarscrollBattalionInterface {
    id: number;
    battalion: Battalion; 
}

export interface WarscrollUnitInterface {
    unit: Unit;
    isGeneral: boolean;
    extraAbilities: ExtraAbility[];
    models: WarscrollModelInterface[];
    modelCount: number;
}

export interface WarscrollModelInterface {
    id: number;
    options: ModelOption[];
    count: number;
}

export interface WarscrollInterface {
    battalions: WarscrollBattalionInterface[];
    general: WarscrollUnitInterface | undefined;
    extraAbilities: ExtraAbility[];
    allegiance: Allegiance;
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
    sceneryList: Scenery[] = [];
    
    constructor(data: DataStoreImpl) {   
        overrideStormcast(data);   
        overrideNurgle(data);
        overrideEverchosen(data);
        overrideKhorne(data);
        overrideDevotedOfSigmar(data);
        overrideWanderers(data);
        overrideIdonethDeepkins(data);

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

        this.boxes = [];
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

        const sceneries: {[key: string]: Scenery} = data.sceneries;
        for (const key in sceneries) {
            this.sceneryList.push(sceneries[key]);
        }

        this.addAlliances(data);
    }

    getUnit(id: string) {
        return this.unitList.find(x => x.id === id);
    }

    getExtraAbility(id: string) {
        return this.extraAbilities.find(x => x.id === id);
    }

    private addAlliances(data: DataStoreImpl) {
    }
}