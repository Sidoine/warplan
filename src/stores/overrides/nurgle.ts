import { DataStoreImpl } from "../imported-data";
import { Unit, Ability, Attack } from "../units";

function addBoxes(data: DataStoreImpl):void {
    data.boxes.push({
        id: data.serial++,
        name: "Start Collecting! Nurgle Daemons",
        units: [
            { count: 3, models: [data.models.nurglings] },
            { count: 10, models: [data.models.plaguebearers]},
            { count: 3, models: [data.models.plagueDrones]},
            { count: 1, models: [data.models.poxbringerHeraldOfNurgle] }
        ],
        price: 65
    });
    data.boxes.push({
        id: data.serial++,
        name: "Putrid Blightkings",
        units: [
            { count: 5, models: [data.models.putridBlightkings] }
        ],
        price: 45
    });
}

function fixUnits(data: DataStoreImpl):void {
    {
        const plaguebearers: Unit = data.units.plaguebearers;
        const disgustinglyResilient: Ability = { name: "Disgustingly Resilient", description: "Roll a dice each time you allocate a wound or mortal wound to a model in this unit. On a 5+ the wound is negated."};
        const cloudOfFlies: Ability = { name: "Cloud of Flies", description: "Substract 1 from the hit rolls of attacks that target this unit in the shooting phase. If this unit containes 20 or more models, subtract 2 from the hit rools of attacks that target this unit in the shooting phase, and 1 from the hit rolls of attacks that target this unit in the combat phase instead" };
        const plagueridden: Ability = { name: "Plagueridden", description: "The leader of this unit is a Plagueridden. Add 1 to the Attacks characteristic of a Plagueridden's Plaguesword." };
        const iconBearer: Ability = { name: "Icon Bearer", description: "Models in this unit can be Icon Bearers. If the unmodified roll is a 1 when making a battleshock test for a unit that includes any Icon Bearers, no models from the unit flee. Instead, D6 Plaguebearer models are added to the unit." };
        const pipers: Ability = { name: "Pipers", description: "Models in this unit can be Pipers. Re-roll battleshock rolls of 1 for enemy units while they are within 6\" of any Pipers."};
        const locusOfFecundity: Ability = { name: "Locus of Fecundity", description: "Re-roll save rolls of 1 for this unit while it is within 7\" of a friendly NURGLE DAEMON HERO."};

        plaguebearers.move = 4;
        plaguebearers.save = "5+";
        plaguebearers.wounds = 1;
        plaguebearers.bravery = 10;

        const plagueSwordAttack: Attack = { name: "Plaguesword", range: "1", attacks: "1", toHit: "4+", toWound: "3+", damage: "1", melee: true };

        plaguebearers.attacks = [plagueSwordAttack];

        plaguebearers.abilities = [plagueridden, iconBearer, pipers, disgustinglyResilient, cloudOfFlies, locusOfFecundity];
    }
}

function addExtraAbilities(data: DataStoreImpl): void {  
    // Command traits
    data.extraAbilities.stormcastEternalsShieldedByFaith.ability.description = "When your general suffers a mortal wound, roll a dice. On a roll of 5 or more, that mortal wound is ignored.";
    data.extraAbilities.stormcastEternalsConsummateCommander.ability.description = "Choose one other HERO in your army. While your general is alive, the model you chose can also use any command abilities it may have, as if it were your general.";
    data.extraAbilities.stormcastEternalsCunningStrategist.ability.description = "Once both armies are set up, but before the first battle round begins, select D3 friendly STORMCAST ETERNALS units. They can each make a move of up to 5\".";
    data.extraAbilities.stormcastEternalsZealousCrusader.ability.description = "Your general can re-roll their charge distance.";
    data.extraAbilities.stormcastEternalsStaunchDefender.ability.description = "Your general and all friendly STORMCAST ETERNALS units within 6\" add 1 to their save rolls if they have not charged this turn. This modifier does not stack with the save roll modifier for being within or on a terrain feature.";
    data.extraAbilities.stormcastEternalsChampionOfTheRealms.ability.description = "Choose one of your general’s weapon profiles (it cannot be a weapon used by a mount if they have one) and increase its Attacks characteristic by 1.";

    // Artifacts
    data.extraAbilities.stormcastEternalsStrifeEnder.ability.description = "This sigmarite weapon has been energised with runes of emancipation and liberation from evil. Pick one of this HERO’s melee weapons to be a Strife-ender. Add 1 to the Attacks characteristic of this weapon. Add 2 instead if all of the weapon’s attacks are directed against a CHAOS unit.";

    // Prayers
    data.extraAbilities.stormcastEternalsPrayerDivineLight.ability.description = "In your hero phase, you can declare that this model is going to pray for Sigmar to illuminate the battlefield. If you do so, pick a unit within 12\" and roll a dice. On a roll of 3 or more the prayer is heard – if you chose an enemy unit, friendly units re-roll hit rolls of 1 when attacking that unit until your next hero phase. If you instead chose a friendly unit, enemy units re-roll hit rolls of 6 or more when attacking that unit until your next hero phase.";
    data.extraAbilities.stormcastEternalsPrayerBlessWeapons.ability.description = "In your hero phase, you can declare that this model is going to pray for Sigmar to bless the weapons of his chosen warriors. If you do so, pick the PRIEST or a unit within 12\" of them and roll a dice. On a roll of 4 or more the prayer is heard – until your next hero phase, for any hit rolls of 6 or more made for that unit, you can immediately roll another attack.";
    data.extraAbilities.stormcastEternalsPrayerBolsterFaith.ability.description = "In your hero phase, you can declare that this model is going to pray for courage. If you do so roll a dice. On a roll of 4 or more the prayer is heard – the PRIEST and friendly units within 12\" do not have to take battleshock tests until your next hero phase.";
    data.extraAbilities.stormcastEternalsPrayerLightningChariot.ability.description = "In your hero phase, you can declare that this model is going to pray for Sigmar to transport his warriors across the battlefield. If you do so, pick the PRIEST or a friendly unit within 3\" and roll a dice. On a roll of 3 or more the prayer is heard – remove the chosen unit from the table and set it up again anywhere on the table up to 24\" from its previous position and more than 9\" from the enemy. It may not move in the subsequent movement phase.";
    data.extraAbilities.stormcastEternalsPrayerAbjuration.ability.description = "In your hero phase, you can declare that this model will pray for Sigmar to banish vile sorceries. If you do so roll a dice. On a roll of 2 or more the prayer is heard – the PRIEST can attempt to unbind a single spell in each enemy hero phase until your next hero phase in the same manner as a Wizard.";
    data.extraAbilities.stormcastEternalsPrayerGodKingSAspect.ability.description = "In your hero phase, you can declare that this model is going to pray for Sigmar to open the conduit between them and show forth his true glory. If you do so roll a dice. On a roll of 4 or more the prayer is heard – enemy units within 12\" of the PRIEST add 2 to any battleshock tests they have to take until your next hero phase. On a roll of 1 the strain of attempting to channel such might is too great, and the PRIEST suffers a mortal wound.";

    // Dracoth
    data.extraAbilities.stormcastEternalsDracothTraitLithLimbed.ability.description = "This steed is renowned for its swiftness, and is capable of putting on an incredible burst of speed to take its rider to the foe. This HERO adds 1 to their Move characteristic.";
    data.extraAbilities.stormcastEternalsDracothTraitSavageLoyalty.ability.description = "This mount feels a keen hatred for the enemies of Order, and fights through the most horrendous injuries to wreak its vengeance before death claims it. Roll a dice if this HERO is slain in the combat phase. On a roll of 4 or more, the unit that slew them suffers D3 mortal wounds.";
    data.extraAbilities.stormcastEternalsDracothTraitKeenClawed.ability.description = "Sharp of claw and of fang, this steed is undaunted by the thickest armour. Any wound rolls of 6 or more in the combat phase for this HERO’s mount are resolved with a Rend characteristic of -3.";
    data.extraAbilities.stormcastEternalsDracothTraitDrakeKin.ability.description = "The Dracoth that bonds with your Stormcast Eternal is a doughty creature, hardy enough to withstand the worst that their enemies can throw at them without once faltering. If this HERO suffers damage from an attack with a Damage characteristic greater than 1, roll a dice. On a 5 or more the HERO only suffers 1 Damage from the attack.";
    data.extraAbilities.stormcastEternalsDracothTraitThunderCaller.ability.description = "Lightning crackles in the maw of this ferocious beast even when it is at rest. On the battlefield, it unleashes its storm breath with great thunderclaps. This HERO’s Dracoth’s Storm Breath ability has a range of 16\" rather than 12\".";
    data.extraAbilities.stormcastEternalsDracothTraitPackHunter.ability.description = "Like the hero that rides it to battle, this Dracoth is stronger when working in concert with its brethren than when it strikes alone at the enemies of Order. Add 2 to the Attacks characteristic of this HERO’s Dracoth’s Claws and Fangs if there is another friendly model riding a Dracoth within 6\".";
}

export function overrideNurgle(data: DataStoreImpl):void {
    addBoxes(data);
    fixUnits(data);
    addExtraAbilities(data);
}