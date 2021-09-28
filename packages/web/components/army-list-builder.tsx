import * as React from "react";
import { observer } from "mobx-react-lite";
import WarscrollUnitsList from "./warscroll-units-list";
import WarscrollBattalionsList from "./warscroll-battalions-list";
import { ArmyListSummary } from "./army-list-summary";
import Filter from "./filter";
import WarscrollSceneriesList from "./warscroll-sceneries-list";
import { Grid } from "@material-ui/core";
import WarscrollsList from "./warscrolls-list";

function ArmyListBuilder() {
    return (
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
                    <WarscrollUnitsList />
                </Grid>
                <Grid item>
                    <WarscrollSceneriesList />
                </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
                <WarscrollsList />
            </Grid>
        </Grid>
    );
}

export default observer(ArmyListBuilder);
