import { ImportedDataStoreImpl } from "../imported-data";

function addBoxes(data: ImportedDataStoreImpl) {}

function fixBattalions(data: ImportedDataStoreImpl) {}

function fixUnits(data: ImportedDataStoreImpl) {
    {
        // const unit: Unit = data.units.excelsiorWarpriest;
        // unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-excelsior-warpriest-en.pdf";
        // unit.move = 6;
        // unit.save = "4+";
        // unit.bravery = 8;
        // unit.keywords.push("HUMAN", "CELESTIAL", "EXCELSIOR WARPRIEST");
        // const warhammer: Attack = { melee: true, name: "Warhammer", range: 1, attacks: 4, toHit: "4+", toWound: '4+', damage: 1 };
        // const lightOfSigmar: Ability = {
        //     name: "Light of Sigmar",
        //     description: "In your hero phase, the Warpriest can hold his book of Sigmar's teachings up high, and pray to the God-King for aid. If you do so, roll a dice. On 3 or more, pick the Warpriest or a unit within 10\". If you picked a friendly unit, it heals 1 wound (the Warpriest and firendly ORDER units heal D3 wounds instead). If you picked an enemy unit, it suffers 1 mortal wound (CHAOS unit suffer D3 mortal wounds instead)."
        // };
        // const divinePower: Ability = {
        //     name: "Divine Power",
        //     description: "An Excelsior Warpriest can attempt to unbind 1 spell in each enemy phase as if he were a wizard."
        // };
        // const loyalCompanion: Ability = {
        //     name: "Loyal Companion",
        //     description: "After setting up an Excelsior Warpriest, you can if you wish immediately set up one Gryph-hound within 3\" of him. If you do so, the Gryph-hound is bound to the Excelsior Warpriest. A Gryph-hound that is bound to an Excelsior Warpriest makes 4 attacks with its Beak and Claws rather than 3 if the target unit is within 3\" of the Excelsior Warpriest."
        // };
        // unit.attacks = [warhammer];
        // unit.abilities = [lightOfSigmar, divinePower, loyalCompanion];
    }
}

function addExtraAbilities(data: ImportedDataStoreImpl) {}

export function overrideDevotedOfSigmar(data: ImportedDataStoreImpl): void {
    addBoxes(data);
    fixBattalions(data);
    fixUnits(data);
    addExtraAbilities(data);
}
