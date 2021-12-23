import * as React from "react";
import { UnitWarscrollEx, UnitWarscrollView } from "./unit-warscroll";
import { distinct } from "../helpers/algo";
import BattalionWarscroll from "./battalion-warscroll";
import { Grid } from "@mui/material";
import { FactionWarscroll } from "./faction-warscroll";
import { useArmyListStore } from "../stores/army-list";

export function ArmyListWarscrolls() {
    const warscrollStore = useArmyListStore();
    const w = warscrollStore.armyList;
    return (
        <>
            <Grid container spacing={1} direction="column">
                {w.allegiance && (
                    <Grid item>
                        <FactionWarscroll faction={w.allegiance} />
                    </Grid>
                )}
                {w.subFaction && (
                    <Grid item>
                        <FactionWarscroll faction={w.subFaction} />
                    </Grid>
                )}
                {w.armyType && (
                    <Grid item>
                        <FactionWarscroll faction={w.armyType} />
                    </Grid>
                )}
                {distinct(w.units.map((x) => x.definition))
                    .sort((a, b) => (a.name > b.name ? 1 : -1))
                    .map((x) => (
                        <Grid item key={x.id}>
                            <UnitWarscrollEx unit={x} />
                            <UnitWarscrollView unit={x} />
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
