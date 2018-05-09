import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";
import { getAttackDamage, getValue } from "./combat";
import { overrideNurgle } from "./overrides/nurgle";
import { overrideDevotedOfSigmar } from "./overrides/devoted-of-sigmar";

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
    id: string;
    grandAlliance: GrandAlliance;
    name: string;
    allied?: string[];
}

export interface Ability {
    name: string;
    description: string;
    getWounds?: (models: number, melee: boolean, attack?: Attack) => number;
    getSavedWounds?: (save?: number) => number;
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

export type Value = number | string | DamageColumn | undefined;

export interface DamageTable {
    ranges: number[];
    columns: DamageColumn[];
}

export interface DamageColumn {
    name: string;
    values: Value[];
}

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
    move?: Value;
    save?: string;
    wounds?: number;
    bravery?: number;
    keywords: string[];
    weaponOptions?: WeaponOptionCategory[];
    abilities?: Ability[];
    commandAbilities?: Ability[];
    attacks?: Attack[];
    damageTable?: DamageTable;

    isLeader?: (warscroll: WarscrollInterface) => boolean;
    isBattleline?: (warscroll: WarscrollInterface) => boolean;
    isBehemot?: (warscroll: WarscrollInterface) => boolean;
    isArtillery?: (warscroll: WarscrollInterface) => boolean;
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
                stats.savedWounds += ability.getSavedWounds(stats.save) * size * (stats.unit.wounds || 0);
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

export function getUnitStats(unit: Unit): UnitStats[] {
    const save = getValue(unit.save);
    const savedWounds = (unit.wounds || 0) * unit.size * (unit.save ? 6 / (7 - save) : 1);
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
    
    if (unit.weaponOptions) {
        const combinations: WeaponOptionCombination[][] = [];
        const sum = unit.weaponOptions.reduce((sum, category) => sum + (category.maxCount !== undefined ? category.maxCount : 0), 0);
        const remaining = unit.size - sum;
        everyWeaponOptionCombinations(0, unit.weaponOptions, [], combinations, remaining);
        
        let combinationStats = combinations.map(x => {
            const result: UnitStats = {
                name: x.map(x => x.weaponOption.name).join("/"),
                meleeDamage: baseStats.meleeDamage,
                rangedDamage: baseStats.rangedDamage,
                save: baseStats.save,
                savedWounds: baseStats.savedWounds,
                unit: baseStats.unit,
                totalDamage: 0,
                ignoredAbilities: baseStats.ignoredAbilities.concat()
            };
            for (const woc of x) {
                addAttacksAndAbilitiesToStats(result, woc.weaponOption.attacks, woc.count, woc.weaponOption.abilities, unit.abilities);
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
        overrideNurgle(data);
        overrideDevotedOfSigmar(data);

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

        this.addAlliances(data);
    }

    getUnit(id: string) {
        return this.unitList.find(x => x.id === id);
    }

    getExtraAbility(id: string) {
        return this.extraAbilities.find(x => x.id === id);
    }

    private addAlliance(faction1: Faction, ...factions: Faction[]) {
        if (!faction1.allied) faction1.allied = [];
        for (let j = 0; j < factions.length; j++) {
            const faction2 = factions[j];
            if (!faction2.allied) faction2.allied = [];
            if (faction1.allied.indexOf(faction2.id) < 0) {
                faction1.allied.push(faction2.id);
                faction2.allied.push(faction1.id);
            }
        }
    }

    private addAlliances(data: DataStoreImpl) {
        const factions = data.factions;

        // Chaos
        this.addAlliance(factions.BRAYHERD, factions.CHAOSGARGANTS, factions.MONSTERSOFCHAOS, factions.THUNDERSCORN, factions.WANDERERS);
        this.addAlliance(factions.KHORNEBLOODBOUND, factions.BRAYHERD, factions.CHAOSGARGANTS, factions.EVERCHOSEN, factions.MONSTERSOFCHAOS, factions.NURGLEROTBRINGERS, factions.SLAVESTODARKNESS, factions.WARHERD);
        // factions.CHAOSGARGANTS
        this.addAlliance(factions.SKAVENESHIN, factions.SKAVENESHIN, factions.SKAVENMOULDER, factions.SKAVENPESTILENS, factions.SKAVENVERMINUS, factions.MASTERCLAN);
        this.addAlliance(factions.SKAVENMOULDER, factions.SKAVENESHIN, factions.SKAVENSKRYRE, factions.SKAVENPESTILENS, factions.SKAVENVERMINUS, factions.MASTERCLAN);
        this.addAlliance(factions.SKAVENPESTILENS, factions.SKAVENESHIN, factions.SKAVENMOULDER, factions.SKAVENSKRYRE, factions.SKAVENVERMINUS, factions.NURGLEDAEMONS, factions.MASTERCLAN);
        this.addAlliance(factions.SKAVENSKRYRE, factions.SKAVENESHIN, factions.SKAVENMOULDER, factions.SKAVENPESTILENS, factions.SKAVENVERMINUS, factions.MASTERCLAN);
        this.addAlliance(factions.SKAVENVERMINUS, factions.SKAVENESHIN, factions.SKAVENMOULDER, factions.SKAVENPESTILENS, factions.SKAVENSKRYRE, factions.MASTERCLAN);
        // this.addAlliance(factions.DAEMONSOFCHAOS)
        // factions.NURGLEDAEMONS
        // TODO Faction name?
        this.addAlliance(factions.TZEENTCHDAEMONS, factions.CHAOSGARGANTS, factions.EVERCHOSEN, factions.MONSTERSOFCHAOS, factions.SLAVESTODARKNESS, factions.THUNDERSCORN);
        this.addAlliance(factions.EVERCHOSEN, ...this.factionsList.filter(x => x.grandAlliance === GrandAlliance.chaos));
        this.addAlliance(factions.SLAANESHDAEMONS, factions.BRAYHERD, factions.CHAOSGARGANTS, factions.EVERCHOSEN, factions.MONSTERSOFCHAOS, factions.NURGLEROTBRINGERS, factions.SLAVESTODARKNESS, factions.WARHERD);
        // factions.MASTERCLAN
        // factions.MONSTERSOFCHAOS
        this.addAlliance(factions.NURGLEROTBRINGERS, factions.BRAYHERD, factions.CHAOSGARGANTS, factions.EVERCHOSEN, factions.MONSTERSOFCHAOS, factions.SLAANESHDAEMONS, factions.SLAVESTODARKNESS, factions.WARHERD);
        this.addAlliance(factions.SLAVESTODARKNESS, factions.KHORNEBLOODBOUND, factions.BRAYHERD, factions.CHAOSGARGANTS, factions.NURGLEDAEMONS, factions.TZEENTCHDAEMONS, factions.EVERCHOSEN, factions.SLAANESHDAEMONS, factions.NURGLEROTBRINGERS, factions.WARHERD);
        this.addAlliance(factions.THUNDERSCORN, factions.CHAOSGARGANTS, factions.MONSTERSOFCHAOS, factions.BRAYHERD, factions.WARHERD);
        this.addAlliance(factions.WARHERD, factions.CHAOSGARGANTS, factions.MONSTERSOFCHAOS, factions.THUNDERSCORN, factions.BRAYHERD);

        // Death
        this.addAlliance(factions.DEADWALKERS, factions.FLESHEATERCOURTS, factions.DEATHRATTLE, factions.DEATHMAGES, factions.NIGHTHAUNT, factions.SOULBLIGHT);
        this.addAlliance(factions.DEATHLORDS, factions.DEADWALKERS, factions.FLESHEATERCOURTS, factions.DEATHRATTLE, factions.DEATHMAGES, factions.NIGHTHAUNT, factions.SOULBLIGHT);
        //this.addAlliance(factions.DEATHMAGES);
        this.addAlliance(factions.DEATHRATTLE, factions.DEADWALKERS, factions.DEATHLORDS, factions.DEATHMAGES, factions.SOULBLIGHT);
        this.addAlliance(factions.FLESHEATERCOURTS, factions.DEADWALKERS, factions.DEATHLORDS, factions.DEATHMAGES);
        this.addAlliance(factions.NIGHTHAUNT, factions.DEATHLORDS, factions.SOULBLIGHT);
        this.addAlliance(factions.SOULBLIGHT, factions.DEADWALKERS, factions.DEATHLORDS, factions.DEATHMAGES, factions.NIGHTHAUNT);

        // Destruction
        //this.addAlliance(factions.ALEGUZZLERGARGANTS);
        this.addAlliance(factions.BEASTCLAWRAIDERS, factions.ALEGUZZLERGARGANTS, factions.FIREBELLIES, factions.GUTBUSTERS, factions.MANEATERS, factions.TROGGOTHS);
        this.addAlliance(factions.BONESPLITTERZ, factions.ALEGUZZLERGARGANTS, factions.ORRUKS, factions.IRONJAWZ, factions.MOONCLANGROTS, factions.SPIDERFANGGROTS, factions.TROGGOTHS);
        // this.addAlliance(factions.FIREBELLIES);
        // TODO Is this the same as Gitmob Grot?
        this.addAlliance(factions.GROTS, factions.ALEGUZZLERGARGANTS, factions.ORRUKS, factions.MOONCLANGROTS, factions.SPIDERFANGGROTS, factions.TROGGOTHS);
        // Same as Greenskinz
        this.addAlliance(factions.ORRUKS, factions.ALEGUZZLERGARGANTS, factions.BONESPLITTERZ, factions.GROTS, factions.IRONJAWZ, factions.MOONCLANGROTS, factions.SPIDERFANGGROTS, factions.TROGGOTHS);
        this.addAlliance(factions.GUTBUSTERS, factions.ALEGUZZLERGARGANTS, factions.FIREBELLIES, factions.BEASTCLAWRAIDERS, factions.MANEATERS, factions.TROGGOTHS);
        this.addAlliance(factions.IRONJAWZ, factions.ALEGUZZLERGARGANTS, factions.BONESPLITTERZ, factions.GROTS, factions.ORRUKS, factions.MOONCLANGROTS, factions.TROGGOTHS);
        //this.addAlliance(factions.MANEATERS);
        this.addAlliance(factions.MOONCLANGROTS, factions.ALEGUZZLERGARGANTS, factions.ORRUKS, factions.GROTS, factions.SPIDERFANGGROTS, factions.TROGGOTHS);
        this.addAlliance(factions.SPIDERFANGGROTS, factions.ALEGUZZLERGARGANTS, factions.ORCSANDGOBLINS, factions.MOONCLANGROTS, factions.GROTS, factions.TROGGOTHS);
        //this.addAlliance(factions.TROGGOTHS);

        // Order
        //this.addAlliance(factions.AELVES);
        //this.addAlliance(factions.COLLEGIATEARCANE);
        this.addAlliance(factions.DARKLINGCOVENS, factions.DAUGHTERSOFKHAINE, factions.ORDERSERPENTIS, factions.SCOURGEPRIVATEERS, factions.SHADOWBLADES, factions.STORMCASTETERNALS);
        this.addAlliance(factions.DAUGHTERSOFKHAINE, factions.DARKLINGCOVENS, factions.ORDERSERPENTIS, factions.SCOURGEPRIVATEERS, factions.SHADOWBLADES, factions.STORMCASTETERNALS);
        this.addAlliance(factions.DEVOTEDOFSIGMAR, factions.COLLEGIATEARCANE, factions.FREEPEOPLES, factions.IRONWELDARSONAL, factions.STORMCASTETERNALS);
        this.addAlliance(factions.DISPOSSESSED, factions.FYRESLAYERS, factions.IRONWELDARSONAL, factions.KHARADRONOVERLORDS, factions.STORMCASTETERNALS);
        this.addAlliance(factions.ELDRITCHCOUNCIL, factions.LIONRANGERS, factions.ORDERDRACONIS, factions.PHOENIXTEMPLE, factions.STORMCASTETERNALS, factions.SWIFTHAWKAGENTS, factions.SYLVANETH, factions.WANDERERS);
        this.addAlliance(factions.FREEPEOPLES, factions.COLLEGIATEARCANE, factions.DEVOTEDOFSIGMAR, factions.IRONWELDARSONAL, factions.STORMCASTETERNALS);
        this.addAlliance(factions.FYRESLAYERS, factions.DISPOSSESSED, factions.IRONWELDARSONAL, factions.KHARADRONOVERLORDS, factions.STORMCASTETERNALS);
        //this.addAlliance(factions.IRONWELDARSONAL);
        this.addAlliance(factions.KHARADRONOVERLORDS, factions.DISPOSSESSED, factions.FYRESLAYERS, factions.IRONWELDARSONAL, factions.STORMCASTETERNALS);
        //this.addAlliance(factions.LIONRANGERS);
        this.addAlliance(factions.ORDERDRACONIS, factions.ELDRITCHCOUNCIL, factions.LIONRANGERS, factions.PHOENIXTEMPLE, factions.STORMCASTETERNALS, factions.SWIFTHAWKAGENTS, factions.SYLVANETH, factions.WANDERERS);
        this.addAlliance(factions.ORDERSERPENTIS, factions.DARKLINGCOVENS, factions.DAUGHTERSOFKHAINE, factions.SCOURGEPRIVATEERS, factions.SHADOWBLADES, factions.STORMCASTETERNALS);
        this.addAlliance(factions.PHOENIXTEMPLE, factions.ELDRITCHCOUNCIL, factions.LIONRANGERS, factions.ORDERDRACONIS, factions.STORMCASTETERNALS, factions.SWIFTHAWKAGENTS, factions.WANDERERS);
        this.addAlliance(factions.SCOURGEPRIVATEERS, factions.DARKLINGCOVENS, factions.DAUGHTERSOFKHAINE, factions.ORDERSERPENTIS, factions.SHADOWBLADES, factions.STORMCASTETERNALS);
        this.addAlliance(factions.SERAPHON, factions.STORMCASTETERNALS);
        this.addAlliance(factions.SHADOWBLADES, factions.DARKLINGCOVENS, factions.DAUGHTERSOFKHAINE, factions.ORDERSERPENTIS, factions.SCOURGEPRIVATEERS, factions.STORMCASTETERNALS);
        this.addAlliance(factions.STORMCASTETERNALS, ...this.factionsList.filter(x => x.grandAlliance === GrandAlliance.order));
        this.addAlliance(factions.SWIFTHAWKAGENTS, factions.ELDRITCHCOUNCIL, factions.LIONRANGERS, factions.ORDERDRACONIS, factions.PHOENIXTEMPLE, factions.STORMCASTETERNALS, factions.SYLVANETH, factions.WANDERERS);
        this.addAlliance(factions.SYLVANETH, factions.STORMCASTETERNALS, factions.WANDERERS);
        this.addAlliance(factions.WANDERERS, factions.ELDRITCHCOUNCIL, factions.LIONRANGERS, factions.ORDERDRACONIS, factions.PHOENIXTEMPLE, factions.STORMCASTETERNALS, factions.SWIFTHAWKAGENTS, factions.SYLVANETH);
    }
}