import { observable, computed } from "mobx";

export interface Model {
    name: string;
    id: number;
}

export interface Unit {
    id: number;
    model: Model;
    size: number;
    points: number;
}

export interface OwnedModel {
    id: number;
    model: Model;
    count: number;
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

export interface WarscrollUnit {
    id: number;
    unit: Unit;
    count: number;
}

export interface WarscrollBattalion {
    id: number;
    battalion: Battalion; 
}

export class Warscroll {
    @observable
    units: WarscrollUnit[] = [];

    @observable
    battalions: WarscrollBattalion[] = [];

    constructor (units: WarscrollUnit[], battalions: WarscrollBattalion[]) {
        this.units = units;
        this.battalions = battalions;
    }

    @computed
    get unitsPoints() {
        return this.units.reduce((p, x) => x.count * x.unit.points + p, 0);
    }

    @computed
    get battalionsPoints() {
        return this.battalions.reduce((p, x) => x.battalion.points + p, 0);
    }
}

export interface BasketElement {
    id: number;
    box: Box;
    count: number;
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
}

interface Missing {
    model: Model;
    count: number;
    inBasket: number;
    id: number;
}

export class UnitsStore {
    serial = 100;

    models = {
        lordAquilor: {
            id: this.serial++,
            name: "Lord Aquilor"
        },
        vanguardPalladors: {
            id: this.serial++,
            name: "Vaguard-Palladors"
        },
        vanguardRaports: {
            id: this.serial++,
            name: "Vanguard-Raptors"
        },
        vanguardHunters: {
            id: this.serial++,
            name: "Vanguard-Hunters"
        },
        gryphHounds: {
            id: this.serial++,
            name: "Griph-Hounds"
        }
    }

    modelsList: Model[] = [];

    units = {
        lordAquilor: {
            id: this.serial++,
            model: this.models.lordAquilor,
            size: 1,
            points: 200
        },
        vanguardPalladors: {
            id: this.serial++,
            model: this.models.vanguardPalladors,
            size: 3,
            points: 220
        },
        vanguardRaports: {
            id: this.serial++,
            model: this.models.vanguardRaports,
            size: 3,
            points: 160
        },
        vanguardHunters: {
            id: this.serial++,
            model: this.models.vanguardHunters,
            size: 10,
            points: 140
        },
        gryphHounds: {
            id: this.serial++,
            model: this.models.gryphHounds,
            size: 1,
            points: 40
        }
    }

    unitList:Unit[] = [];

    boxes: Box[] = [ {
        id: this.serial++,
        name: "Lord Aquilor",
        units: [ { models: [this.models.lordAquilor], count: 1 } ],
        price: 32.5
    }, {
        id: this.serial++,
        name: "Vaguard-Palladors",
        price: 45,
        units: [ { models: [this.models.vanguardPalladors], count: 3}]
    }, {
        id: this.serial++,
        name: "Vangard-Raptors",
        price: 30,
        units: [ { models: [this.models.vanguardRaports], count: 3 }]
    }, {
        id: this.serial++,
        name: "Vangard-Hunters",
        price: 50,
        units: [ { models: [this.models.vanguardHunters], count: 10 }]
    }, {
        id: this.serial++,
        name: "Gryph-Hounds",
        price: 20,
        units: [ { models: [this.models.gryphHounds], count: 6 }]
    }];

    battalions: Battalion[] = [
        {
            id: this.serial++,
            name: "Test Battalion",
            units: [ 
                { 
                    unit: this.units.vanguardPalladors, 
                    count: 2
                },
                {
                    unit: this.units.lordAquilor,
                    count: 1
                }
            ],
            points: 120
        },
    ]

    @observable
    warscroll = new Warscroll([
            {
                id: this.serial++,
                count: 1,
                unit: this.units.gryphHounds
            },{
                id: this.serial++,
                count: 1,
                unit: this.units.vanguardHunters
            }
        ],
        [
            { id: this.serial++ , battalion: this.battalions[0] }
        ]);
    
    @observable
    ownedModels: OwnedModel[] = [{
        id: this.serial++,
        model: this.models.gryphHounds,
        count: 2
    }, {
        id: this.serial++,
        model: this.models.lordAquilor,
        count: 1
    }];

    @observable
    basket: BasketElement[] = [];

    constructor() {      
        const models : {[key:string]: Model} = this.models;  
        for (const key in models) {
            this.modelsList.push(models[key]);
        }

        const units: {[key: string]: Unit} = this.units;
        for (const key in units) {
            this.unitList.push(units[key]);
        }
    }

    @computed
    get missingModels() {
        const neededModels:Missing[] = [];
        
        for (const unit of this.warscroll.units) {
            const count = unit.unit.size * unit.count;
            const existings = neededModels.filter(x => x.model === unit.unit.model);
            if (existings.length === 0) {
                neededModels.push({ 
                    model: unit.unit.model, 
                    count: count, 
                    id: unit.unit.model.id, 
                    inBasket: this.basket.reduce((c, x) => c + x.count * x.box.units.reduce((d, y) => y.models.reduce((e, z) => z.id === unit.unit.model.id ? e + 1: e, 0) * y.count + d, 0) , 0)
                });
            } else {
                existings[0].count += count;
            }
        }

        for (const model of this.ownedModels) {
            const neededModel = neededModels.filter(x => x.model === model.model);
            if (neededModel.length > 0) {
                neededModel[0].count -= model.count;
            }
        }
        return neededModels.filter(x => x.count > 0);
    }
}