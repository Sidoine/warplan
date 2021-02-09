import * as React from "react";
import { observer } from "mobx-react-lite";
import WarscrollUnitsList from "./warscroll-units-list";
import WarscrollBattalionsList from "./warscroll-battalions-list";
import { WarscrollSummary } from "./warscroll-summary";
import Filter from "./filter";
import WarscrollSceneriesList from "./warscroll-sceneries-list";
import { Button, Grid } from "@material-ui/core";
import { useStores } from "../stores";

function WarscrollBuilder() {
    const { uiStore } = useStores();
    return (
        <Grid container direction="column" spacing={2} wrap="nowrap">
            <Grid item>
                <Filter />
            </Grid>
            <Grid item>
                <WarscrollSummary />
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
            <Grid item>
                <Button onClick={() => uiStore.showWarscrollPopin()}>
                    Manage warscrolls
                </Button>
                <Button onClick={() => uiStore.showExportPopin()}>
                    Export
                </Button>
            </Grid>
        </Grid>
    );
}

export default observer(WarscrollBuilder);
