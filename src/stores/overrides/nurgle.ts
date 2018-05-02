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

export function overrideNurgle(data: DataStoreImpl):void {
    addBoxes(data);
    fixUnits(data);
}