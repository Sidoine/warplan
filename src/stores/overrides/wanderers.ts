import { DataStoreImpl } from "../imported-data";
import { Unit, Attack, Ability } from "../units";
import { getWoundsForExtraAttack } from "./tools";

function addBoxes(data: DataStoreImpl) {

}

function fixBattalions(data: DataStoreImpl) {

}

function fixUnits(data: DataStoreImpl) {
    {
        const unit: Unit = data.units.sistersOfTheThorn;
        unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sisters-of-the-thorn-en.pdf";
        unit.move = 12;
        unit.save = "5+";
        unit.bravery = 7;
        unit.keywords.push("AELF", "WIZARD", "SISTERS OF THE THORN");
        const blackbriarJavelin: Attack = { melee: false, name: "Blackbriar Javelin", range: 9, attacks: 2, toHit: "4+", toWound: '4+', rend: -1, damage: 1 };
        const deepwoodCovenStaff: Attack = { melee: true, name: "Deepwood Coven Staff", range: 2, attacks: 1, toHit: "4+", toWound: '4+', damage: 1 };
        const antlers: Attack = { melee: true, name: "Steeds' Antlers and Thrashing Hooves", range: 1, attacks: 2, toHit: "4+", toWound: '4+', damage: 1 };
        
        const handmaidenOfTheThorn: Ability = {
            name: "Handmaiden of the Thorn",
            description: "The leader of this unit is the Handmaiden of the Thorn. A Handmaiden of the Thorn makes 2 attacks with her Deepwood Coven Staff rather than 1",
            getWounds: (models, melee, attack) => attack === deepwoodCovenStaff ? getWoundsForExtraAttack(attack) : 0
        };
        const hornBlower: Ability = {
            name: "Hornblower",
            description: "Models in this unit may be Hornblowers. You can re-roll the dice when determining how far this unit can run if it includes any Hornblowers. "
        };
        const standardBearer: Ability = {
            name: "Standard Bearer",
            description: "Models in this unit may be Standard Bearers. If the unit includes any Standard Bearers, add 1 to the Bravery of its models. Add 2 their Bravery instead if the unit is in cover."
        };
        const magic: Ability = {
            name: "Magic",
            description: "A unit of Sisters of the Thorn can attempt to cast one spell in each of your hero phases, and attempt to unbind one spell in each enemy hero phase. You can add 1 to any casting or unbinding rolls made for this unit if it includes 10 or more models. Sisters of the Thorn know the Arcane Bolt, Mystic Shield and Shield of Thorns spells."
        };
        const shieldOfThorns: Ability = {
            name: "Shield of Thorns",
            description: "The Sisters cause crawling brambles to burst from the ground and form a living barrier around their allies. Shield of Thorns has a casting value of 6. If successfully cast, pick a unit within 18\". You can re-roll failed save rolls for that unit until your next hero phase. In addition, each time you make a successful save roll of a 6 or more for that unit in the combat phase, the attacking unit suffers a mortal wound after all its attacks have been made."
        }
        unit.attacks = [blackbriarJavelin, deepwoodCovenStaff, antlers];
        unit.abilities = [handmaidenOfTheThorn, hornBlower, standardBearer, magic, shieldOfThorns];
    }
}

function addExtraAbilities(data: DataStoreImpl) {

}

export function overrideWanderers(data: DataStoreImpl): void {
    addBoxes(data);
    fixBattalions(data);
    fixUnits(data);
    addExtraAbilities(data);
}