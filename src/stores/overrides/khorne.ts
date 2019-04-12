import { DataStoreImpl } from "../imported-data";

function fixUnits(data: DataStoreImpl):void {
    {
        // const bloodreavers: Unit = data.units.bloodreavers;
        // const chieftain: Ability = { name: "Chieftain", description: "The leader of this unit is a Chieftain. A Chieftain makes 2 attacks rather than 1."};
        // const iconBearer: Ability = { name: "Icon Bearer", description: "Models in this unit may be Icon Bearers. If the unit includes one or more Icon Bearers, add 1 to the Bravery of all its models." };
        // const hornblower: Ability = { name: "Hornblower", description: "Models in this unit may be Hornblowers. If the unit includes one or more Hornblowers, add 1 to its run and charge rolls." };
        // const frenzy: Ability = { name: "Frenzied Devotion", description: "If this unit is within 12\" of a CHAOS TOTEM from your army when it is selected to attack, then all models in this unit make 2 attacks rather than 1, and the Chieftain makes 3 attacks rather than 2." };

        // bloodreavers.move = 6;
        // bloodreavers.save = "6+";
        // bloodreavers.wounds = 1;
        // bloodreavers.bravery = 5;

        // bloodreavers.abilities = [chieftain, iconBearer, hornblower, frenzy];

        // const reaverblades: Attack = { name: "Reaver Blades", range: "1", attacks: "1", melee: true, toHit: "4+", toWound: "4+", damage: "1" };
        // const axe: Attack = { name: "Meatripper Axe", melee: true, range: "1", attacks: "1", toHit: "4+", toWound: "4+", rend:"-1", damage: "1" };
        // const blades: Ability = { name: "Reaver Blades", description: "You can re-roll hit rolls of 1 for models armed with Reaper Blades." };

        // bloodreavers.options = [{
        //     name: "Reaver Blades",
        //     id: "reaverblade",
        //     attacks: [reaverblades],
        //     abilities: [blades],
        //     unitCategory: "main",
        //     modelCategory: "weapon"
        // },
        // {
        //     name: "Meatripper Axe",
        //     id: "meatripperaxe",
        //     attacks: [axe],
        //     unitCategory: "main",
        //     modelCategory: "weapon"
        // }];
    }
}

export function overrideKhorne(data: DataStoreImpl):void {
    fixUnits(data);
}