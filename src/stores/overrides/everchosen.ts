import { DataStoreImpl } from "../imported-data";
import { Unit, Ability, Attack, DamageColumn } from "../units";

function addBoxes(data: DataStoreImpl):void {
    data.boxes.push({
        id: "archaon",
        name: "Archaon Everchosen",
        units: [
            { count: 1, models: [data.models.archaon] }
        ],
        price: 130
    });
}

function fixUnits(data: DataStoreImpl):void {
    {
        const archaon: Unit = data.units.archaon;

        const moveEffect: DamageColumn = { name: "Move", values: ["12", "10", "8", "7", "6"]};
        const monstruousClawEffect: DamageColumn = { name: "Monstruous Claws", values: ["2+", "3+", "4+", "4+", "5+"]};
        const threeHeadsEffect: DamageColumn = { name: "Three Heads", values: ["6", "5", "4", "3", "2"]};

        archaon.damageTable = {
            ranges: [0, 5, 9, 13, 17],
            columns: [moveEffect, monstruousClawEffect, threeHeadsEffect]
        }

        archaon.move = moveEffect;
        archaon.wounds = 20;
        archaon.bravery = 10;
        archaon.save = "3+";

        const fly: Ability = { name: "Fly", description: "Dorghar's great wings allow Archaon to fly." };
        const eyeOfSheerian: Ability = { name: "The Eye of Sheerian", description: "In your hero phase, roll a dice and note the result. Until your next hero phase, whenever an enemy scores a hit on Archaon and the result of the hit roll is the number you rolled, the Eye of Sheerian has forewarned him of the attack and you can make your opponent re-roll the dice." };
        const slayerOfKings: Ability = { name: "The Slayer of Kings", description: "If Archaon directs all of his attacks with the Slayer of Kings at the same HERO or MONSTER, and two or more of the wound rolls are 6 or more, the daemon bound in the blade is roused and the target is slain instantly!" };
        const armourOfMorkar: Ability = { name: "The Armour of Morkar", description: "Archaon's ancient armour is inscribed with runes of warding and malice. If a save roll made for Archaon is a 6 (before modifying the roll in any way), the attacking model's unit suffers a mortal wound." };
        const chaosRuneshield: Ability = { name: "Chaos Runeshield", description: "Roll a dice each time Archaon suffers a mortal wound. On a 5 or a 6 that mortal wound is ignored." };
        const crownOfDomination: Ability = { name: "The Crown of Domination", description: "This forbidding helm exudes an aura of menace. When a battleshock test is made for a unit within 10\" of Archaon, you can adjust the result of the dice roll up or down by 2." };
        const tripleHead: Ability = { name: "Triple-headed Monstrosity", description: "After attacking with Dorghar's Three Heads, you can pick one of the following effects if at least one model was slain by those attacks: \n Filth-spewer: Inflict D3 mortal wounds on an enemy unit within 7\" as Dorghar's Nurglesque head vomits up a cascade of half-digested warriors and bile. \n Skull-gorger: If any of the slain models were HEROES, Dorghar's Khornate head devours their skulls and Archaon heals D3 wounds. \n Spell-eater: If any of the slain models were WIZARDS, Dorghar's Tzeentchian head devours them, learning any spells they knew and passing them on to Archaon." };
        const theEverchosen: Ability = { name: "The Everchosen", description: "Roll a dice if Archaon is affected by a spell cast by an enemy WIZARD. If the result is 4 or higher, he is protected by the power of the Dark Gods and the spell has no effect on him (it will still affect other units as normal)." };
        const magic: Ability = { name: "MAGIC", description: "Archaon is a wizard. He can attempt to cast two different spells in each of your own hero phases, and attempt to unbind two spells in each enemy hero phase. He knows the Arcane Bolt and Mystic Shield spells, as well as any learned by Dorghar's Tzeentchian head during the battle." };
    
        archaon.abilities = [fly, eyeOfSheerian, slayerOfKings, armourOfMorkar, chaosRuneshield, crownOfDomination, tripleHead, theEverchosen, magic];

        const theSlayerOfKings: Attack = { name: "The Slayer of Kings", range: "1", melee: true, attacks: "4", toHit: "2+", toWound: "3+", rend: "-1", damage: "3" };
        const claws: Attack = { name: "Dorghar's Monstruous Claws", range: "1", melee: true, attacks: "2", toHit: monstruousClawEffect, toWound: "3+", rend: "-1", damage: "D6" };
        const tail: Attack = { name: "Dorghar's Lashing Tails", range: "3", melee: true, attacks: "2D6", toHit: "4+", toWound: "3+", damage: "1" };
        const heads: Attack = { name: "Dorghar's Three Heads", range: "3", melee: true, attacks: threeHeadsEffect, toHit: "4+", toWound: "3+", rend: "-1", damage: "1" };

        const warlord: Ability = { name: "Warlord Without Equal", description: "Archaon's command over his armies is peerless. If Archaon uses this ability, all other CHAOS units in your army that have command abilities on their warscroll can immediately use them, in an order of your choice." };

        archaon.commandAbilities = [warlord];

        archaon.attacks = [theSlayerOfKings, claws, tail, heads];
    }
}

export function overrideEverchosen(data: DataStoreImpl):void {
    addBoxes(data);
    fixUnits(data);
}