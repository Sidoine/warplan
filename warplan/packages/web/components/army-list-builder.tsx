import * as React from "react";
import { observer } from "mobx-react-lite";
import UnitWarscrollsList from "./unit-warscrolls-list";
import WarscrollBattalionsList from "./battalion-warscrolls-list";
import { ArmyListSummary } from "./army-list-summary";
import Filter from "./filter";
import WarscrollSceneriesList from "./scenery-warscrolls-list";
import { Grid } from "@mui/material";
import ArmyLists from "./army-lists";
import { Role } from "../../common/definitions";
import { ArmyListNavigation } from "./army-list-navigation";

function ArmyListBuilder() {
    return (
        <>
            <Grid container direction="row" spacing={2}>
                <Grid
                    container
                    item
                    direction="column"
                    spacing={2}
                    wrap="nowrap"
                    xs={12}
                    md={9}
                >
                    <Grid item>
                        <Filter />
                    </Grid>
                    <Grid item>
                        <ArmyListSummary />
                    </Grid>
                    <Grid item>
                        <WarscrollBattalionsList />
                    </Grid>
                    <Grid item>
                        <UnitWarscrollsList
                            role={Role.Leader}
                            title="Leaders"
                        />
                    </Grid>
                    <Grid item>
                        <UnitWarscrollsList
                            role={Role.Battleline}
                            title="Battlelines"
                        />
                    </Grid>
                    <Grid item>
                        <UnitWarscrollsList
                            role={Role.Other}
                            title="Other units"
                        />
                    </Grid>
                    <Grid item>
                        <UnitWarscrollsList
                            role={Role.Behemoth}
                            title="Behemots"
                        />
                    </Grid>
                    <Grid item>
                        <UnitWarscrollsList
                            role={Role.Artillery}
                            title="Artilleries"
                        />
                    </Grid>
                    <Grid item>
                        <WarscrollSceneriesList
                            role={Role.EndlessSpell}
                            title="Endless spells"
                        />
                    </Grid>
                    <Grid item>
                        <WarscrollSceneriesList
                            role={Role.Terrain}
                            title="Sceneries"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <ArmyLists />
                </Grid>
            </Grid>
            <ArmyListNavigation />
        </>
    );
}

export default observer(ArmyListBuilder);
