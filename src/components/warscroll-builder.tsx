import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollUnitsList } from "./warscroll-units-list";
import { WarscrollBattalionsList } from "./warscroll-battalions-list";
import { WarscrollSummary } from "./warscroll-summary";
import { UiStore } from "../stores/ui";
import { Filter } from "./filter";
import { WarscrollSceneriesList } from "./warscroll-sceneries-list";
import { Button, Grid } from "@material-ui/core";

export interface WarscrollBuilderProps {
    unitsStore?: UnitsStore;
    uiStore?: UiStore;
}

@inject("unitsStore", "uiStore")
@observer
export class WarscrollBuilder extends React.Component<
    WarscrollBuilderProps,
    {}
> {
    render() {
        return (
            <Grid container direction="column" spacing={2} wrap="nowrap">
                <Grid item>
                    {" "}
                    <Filter />
                </Grid>
                <Grid item>
                    {" "}
                    <WarscrollSummary />
                </Grid>
                <Grid item>
                    {" "}
                    <WarscrollBattalionsList />
                </Grid>
                <Grid item>
                    {" "}
                    <WarscrollUnitsList />
                </Grid>
                <Grid item>
                    {" "}
                    <WarscrollSceneriesList />
                </Grid>
                <Grid item>
                    {" "}
                    <Button
                        onClick={() => this.props.uiStore!.showWarscrollPopin()}
                    >
                        Manage warscrolls
                    </Button>
                    <Button
                        onClick={() => this.props.uiStore!.showExportPopin()}
                    >
                        Export
                    </Button>
                </Grid>
            </Grid>
        );
    }
}
