import { DataStoreImpl } from "../imported-data";
import { Unit, DamageColumn } from "../units";

function fixUnits(data: DataStoreImpl):void {
    
    {
        const treelordAncient: Unit = data.units.treelordAncient;

        const doomTendrilStaffEffect: DamageColumn = { name: "Doom Tendril Staff", values: ["2+", "3+", "4+", "5+", "6+"]};
        const sweepingBlowsEffect: DamageColumn = { name: "Sweeping Blows", values: [3, 2, 2, 1, 1]};
        const massiveImpalingEffect: DamageColumn = {name: "Massive Impaling Talons", values: ["2+", "2+", "3+", "3+", "4+"]};
        treelordAncient.damageTable = {
            ranges: [0, 3, 5, 8, 10],
            columns: [doomTendrilStaffEffect, sweepingBlowsEffect, massiveImpalingEffect]
        }
    }

}

export function overrideSylvaneth(data: DataStoreImpl):void {
    fixUnits(data);
}