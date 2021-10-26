import * as React from "react";
import { UnitWarscrollEx } from "./unit-warscroll";
import { useStores } from "../stores";
import { distinct } from "../helpers/algo";
import BattalionWarscroll from "./battalion-warscroll";
import { Grid } from "@material-ui/core";

export function ArmyListWarscrolls() {
    const { armyListStore: warscrollStore } = useStores();
    const w = warscrollStore.armyList;
    return (
        <>
            <Grid container spacing={1}>
                {distinct(w.units.map((x) => x.definition))
                    .sort((a, b) => (a.name > b.name ? 1 : -1))
                    .map((x) => (
                        <Grid item key={x.id}>
                            <UnitWarscrollEx unit={x} />
                        </Grid>
                    ))}
            </Grid>

            {w.battalions.length > 0 &&
                w.battalions.map((x) => (
                    <BattalionWarscroll key={x.id} battalion={x} />
                ))}
        </>
    );
}
