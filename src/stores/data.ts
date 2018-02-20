import { WarscrollInterface, Battalion, Box, DataStore } from "./units";

export class DataStoreImpl implements DataStore {
    serial: number = 0;

    models = {
        // ORDER
        // Stormcast Eternals
        celestanPrime: {
            id: this.serial++,
            name: "Celestant-Prime"
        },
        drakeswornTemplar: {
            id: this.serial++,
            name: "Draksworn Templar"
        },
        knightAzyros: {
            id: this.serial++,
            name: "Knight-Azyros"
        },
        knightHeraldor: {
            id: this.serial++,
            name: "Knight-Heraldor"
        },
        knightQuestor: {
            id: this.serial++,
            name: "Knight-Questor"
        },
        knightVenator: {
            id: this.serial++,
            name: "Knight-Venator"
        },
        knightVexilor: {
            id: this.serial++,
            name: "Knight-Vexilor"
        },
        lordAquilor: {
            id: this.serial++,
            name: "Lord-Aquilor"
        },
        lordCastellant: {
            id: this.serial++,
            name: "Lord-Castellant"
        },
        lordCelestant: {
            id: this.serial++,
            name: "Lord-Celestant"
        },
        lordCelestantOnDracoth: {
            id: this.serial++,
            name: "Lord-Celestant on Dracoth"
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
    
    units = {
        // ORDER
        // Stormcast Eternals
        lordAquilor: {
            id: this.serial++,
            model: this.models.lordAquilor,
            size: 1,
            points: 200,
            isLeader: () => true,
            factions: []
        },
        vanguardPalladors: {
            id: this.serial++,
            model: this.models.vanguardPalladors,
            size: 3,
            points: 220,
            factions: []
        },
        vanguardRaports: {
            id: this.serial++,
            model: this.models.vanguardRaports,
            size: 3,
            points: 160,
            factions: []
        },
        vanguardHunters: {
            id: this.serial++,
            model: this.models.vanguardHunters,
            size: 10,
            points: 140,
            isBattleline: (w: WarscrollInterface) => (w.general && w.general.unit === this.units.lordAquilor) || false,
            factions: []
        },
        gryphHounds: {
            id: this.serial++,
            model: this.models.gryphHounds,
            size: 1,
            points: 40,
            factions: []
        }
    }
    
    battalions: Battalion[] = [
        // ORDER
        // Stormcast Eternals
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
            points: 120,
            factions: []
        },
    ]
    
    boxes: Box[] = [ 
        // ORDER
        // Stormcast Eternals
        {
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
        }
    ];

    factions = {}
}