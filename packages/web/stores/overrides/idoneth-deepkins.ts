import { ImportedDataStoreImpl } from "../imported-data";

function addBoxes(data: ImportedDataStoreImpl) {}

function fixBattalions(data: ImportedDataStoreImpl) {}

function fixUnits(data: ImportedDataStoreImpl) {
    {
        // const unit: Unit = data.units.akhelianAllopexes;
        // unit.move = 12;
        // unit.save = "4+";
        // unit.bravery = 6;
        // unit.keywords.push("AELF", "AKHELIAN", "ALLOPEX");
        // const razorshellHarpoon: Attack = { melee: false, name: "Razorshell Harpoon Launcher", range: 24, attacks: 3, toHit: "3+", toWound: '3+', damage: 1 };
        // const retariusNet: Attack = { melee: false, name: "Retarius Net Launcher", range: 18, attacks: 1, toHit: "3+", toWound: '3+', damage: 3 };
        // const barbedHooksAndBlades: Attack = { melee: true, name: "Barbed Hooks and Blades", range: 1, attacks: 5, toHit: "3+", toWound: '4+', damage: 1 };
        // const ferociousBite: Attack = { melee: true, name: "Allopex's Ferocious Bite", range: 1, attacks: 1, toHit: "3+", toWound: '3+', rend: -2, damage: 3 };
        // const scythedFins: Attack = { melee: true, name: "Allopex's Scythed Fins", range: 1, attacks: 4, toHit: "3+", toWound: '3+', rend: -1, damage: 1 };
        // const fly: Ability = {
        //     name: "Fly",
        //     description: "Akhelian Allopexes can fly."
        // };
        // const predators: Ability = {
        //     name: "Bloodthirsty Predators",
        //     description: "Allopexes are ferocious beasts drawn towards the scent of freshly spilt blood. At the start of your charge phase, if this unit is within 12\" of any enemy models that have been allocated any wounds, you can re-roll charge rolls for this unit in that charge phase."
        // };
        // unit.attacks = [razorshellHarpoon, retariusNet, barbedHooksAndBlades, ferociousBite, scythedFins];
        // unit.abilities = [fly, predators];
    }
}

function addExtraAbilities(data: ImportedDataStoreImpl) {}

export function overrideIdonethDeepkins(data: ImportedDataStoreImpl): void {
    addBoxes(data);
    fixBattalions(data);
    fixUnits(data);
    addExtraAbilities(data);
}
