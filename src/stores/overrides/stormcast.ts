import { DataStoreImpl } from "../imported-data";
import { Battalion, Unit } from "../units";

function addBoxes(data: DataStoreImpl):void {
    data.boxes.push({
        id: data.serial++,
        name: "Start Collecting! Stormcast Vanguard",
        units: [
            { count: 1, models: [data.models.lordAquilor] },
            { count: 5, models: [data.models.vanguardHunters]},
            { count: 3, models: [data.models.vanguardPalladors]},
            { count: 3, models: [data.models.gryphHound]}
        ],
        price: 65
    });
    data.boxes.push({
        id: data.serial++,
        name: "Judicators",
        units: [
            { count: 10, models: [data.models.judicators] }
        ],
        price: 49
    });
    data.boxes.push({
        id: data.serial++,
        name: "Kinght-Venator/Azyros",
        units: [
            { count: 1, models: [data.models.knightAzyros, data.models.knightVenator] }
        ],
        price: 33
    });
    data.boxes.push({
        id: data.serial++,
        name: "Vanguard-Raptors",
        units: [
            { count: 3, models: [data.models.vanguardRaptorsWithHurricaneCrossbows, data.models.vanguardRaptorsWithLongstrikeCrossbows] },
            { count: 3, models: [data.models.aetherwings] }
        ],
        price: 30
    });
    data.boxes.push({
        id: data.serial++,
        name: "Lord-Aquilor",
        units: [
            { count: 1, models: [data.models.lordAquilor] }
        ],
        price: 32.50
    });
}

function fixBattalions(data: DataStoreImpl):void {
    const aetherstrike: Battalion = data.battalions.aetherstrikeForce;
    aetherstrike.units.push({ unit: [data.units.knightVenator], count: 1, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.knightAzyros], count: 1, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.judicators], count: 2, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.vanguardRaptorsWithLongstrikeCrossbows, data.units.vanguardRaptorsWithHurricaneCrossbows], count: 2, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.aetherwings], count: 2, id: data.serial++ });
}

function fixUnits(data: DataStoreImpl):void {
    const liberator: Unit = data.units.liberators;
    liberator.move = 5;
    liberator.save = "4+";
    liberator.bravery = 6;
}

export function overrideStormcast(data: DataStoreImpl):void {
    addBoxes(data);
    fixBattalions(data);
    fixUnits(data);
}