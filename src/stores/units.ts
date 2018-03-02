import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";

export interface Model {
    name: string;
    id: number;
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

export interface WeaponOption {
    id: string;
    name: string;
    abilities?: Ability[];
}

export interface Unit {
    id: number;
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
    keywords?: string[];
    weaponOptions?: WeaponOption[];
    abilities?: Ability[];
    commandAbilities?: Ability[];

    isLeader?: (warscroll: WarscrollInterface) => boolean;
    isBattleline?: (warscroll: WarscrollInterface) => boolean;
    isBehemot?: (warscroll: WarscrollInterface) => boolean;
    isArtillery?: (warscroll: WarscrollInterface) => boolean;
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
    id: number;
    name: string;
    units: BattalionUnit[];
    description?: string;
    points: number;
    factions: Faction[];
}


export interface WarscrollUnitInterface {
    unit: Unit;
}

export interface WarscrollInterface {
    general: WarscrollUnitInterface | undefined;
}

export interface DataStore {
    models: {[key:string]: Model};
    units: {[key:string]: Unit};
    battalions: { [key: string]: Battalion };
    boxes: Box[];
    factions: {[key:string]: Faction};
}

export interface Allegiance {
    id: number;
    grandAlliance: GrandAlliance;
    name: string;
}

export class UnitsStore {
    serial = 100;

    modelsList: Model[] = [];
    unitList: Unit[] = [];
    battalions: Battalion[] = [];
    boxes: Box[];
    factions: { [key: string]: Faction };
    factionsList: Faction[] = [];
    allegianceList: Allegiance[] = [
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Chaos" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Brayherd" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Khorne" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Nurgle" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Skaven Pestilens" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Skaven Skryre" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Slaanesh" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Slaves To Darkness" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Tzeentch" },
        { id: this.serial++, grandAlliance: GrandAlliance.chaos, name: "Fist of the Everchosen" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Order" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Darkling Covens" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Dispossessed" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Free Peoples" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Fyreslayers" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Kharadron Overlords" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Seraphon" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Stormcast Eternals" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Sylvaneth" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Wanderers" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Hammerhal" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Anvilgard" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Tempest's Eye" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Hallowheart" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "The Living City" },
        { id: this.serial++, grandAlliance: GrandAlliance.order, name: "Greywater Fastness" },
        { id: this.serial++, grandAlliance: GrandAlliance.destruction, name: "Destruction" },
        { id: this.serial++, grandAlliance: GrandAlliance.destruction, name: "Bonesplitterz" },
        { id: this.serial++, grandAlliance: GrandAlliance.destruction, name: "Beastclaw Raiders" },
        { id: this.serial++, grandAlliance: GrandAlliance.destruction, name: "Ironjawz" },
        { id: this.serial++, grandAlliance: GrandAlliance.destruction, name: "Stoneklaw's Gutstompas" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "Death" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "Flesh Eater Courts" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "Nighthaunt" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "Soulblight" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "Grand Host of Nagash" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "Legion of Sacrament" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "Legion of Blood" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "Legion of Night" },
        { id: this.serial++, grandAlliance: GrandAlliance.death, name: "The Wraith Fleet" },
    ].sort((a, b) => a.name > b.name ? 1 : -1);
    
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
    }

    getUnit(id: number) {
        return this.unitList.find(x => x.id === id);
    }
}