import * as React from "react";
import { UnitWarscrollView } from "./unit-warscroll";
import { useStores } from "../stores";
import { distinct } from "../helpers/algo";
import BattalionWarscroll from "./battalion-warscroll";

export function ArmyListView() {
    const { armyListStore: warscrollStore } = useStores();
    const w = warscrollStore.armyList;
    return (
        <>
            {distinct(w.units.map(x => x.definition))
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map(x => (
                    <UnitWarscrollView unit={x} key={x.id} />
                ))}

            {w.battalions.length > 0 &&
                w.battalions.map(x => (
                    <BattalionWarscroll key={x.id} battalion={x} />
                ))}
        </>
    );
}
