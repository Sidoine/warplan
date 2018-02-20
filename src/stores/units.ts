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

export interface Unit {
    id: number;
    model: Model;
    size: number;
    points: number;
    factions: Faction[];

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
    unit: Unit;
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
    battalions: Battalion[];
    boxes: Box[];
    factions: Faction[];
}

export class UnitsStore {
    serial = 100;

    modelsList: Model[] = [];
    unitList:Unit[] = [];
    battalions: Battalion[];
    boxes: Box[];
    factions: Faction[];
    
    constructor(data: DataStore) {      
        const models = data.models;  
        for (const key in models) {
            this.modelsList.push(models[key]);
        }

        const units = data.units;
        for (const key in units) {
            this.unitList.push(units[key]);
        }

        this.battalions = data.battalions;
        this.boxes = data.boxes;
        this.factions = data.factions;
    }

    getUnit(id: number) {
        return this.unitList.find(x => x.id === id);
    }
}