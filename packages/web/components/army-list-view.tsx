import * as React from "react";
import { UnitWarscroll } from "./unit-warscroll";
import { useStores } from "../stores";
import { EndlessSpellWarscroll } from "./endless-spell-warscroll";
import { distinct } from "../helpers/algo";
import BattalionWarscroll from "./battalion-warscroll";

export function ArmyListView() {
    const { armyListStore: warscrollStore } = useStores();
    const w = warscrollStore.warscroll;
    return (
        <>
            {distinct(w.units.map((x) => x.definition))
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((x) => (
                    <UnitWarscroll unit={x} key={x.id} />
                ))}

            {w.battalions.length > 0 &&
                w.battalions.map((x) => (
                    <BattalionWarscroll key={x.id} battalion={x} />
                ))}

            {w.endlessSpells.length > 0 &&
                w.endlessSpells.map((x) => (
                    <EndlessSpellWarscroll wes={x} key={x.id} />
                ))}
        </>
    );
}
