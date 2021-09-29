import * as React from "react";
import { Faction } from "../../common/data";
import { observer } from "mobx-react-lite";
import { Grid, Input, CardContent, Card, makeStyles } from "@material-ui/core";
import { useStores } from "../stores";
import DropdownObjects from "../atoms/dropdown-objects";

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.grey[100]
    }
}));

function Filter() {
    const { uiStore, unitsStore } = useStores();
    // const grandAlliance = uiStore.grandAlliance;
    const handleSearch = React.useCallback(
        (x: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            uiStore.setKeywordFilter(x.target.value);
        },
        [uiStore]
    );
    // const setGrandAlliance = React.useCallback(
    //     (x: Faction | null) => {
    //         if (x) uiStore.setGrandAlliance(x);
    //     },
    //     [uiStore]
    // );
    const setFaction = React.useCallback(
        (faction: Faction | null) => {
            if (faction) uiStore.setFaction(faction);
        },
        [uiStore]
    );

    const factionOptions = unitsStore.factionOptions;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container wrap="wrap" spacing={2}>
                    <Grid item>Filter</Grid>
                    {/* <Grid item>
                        <DropdownObjects
                            getText={(x) => x.name}
                            options={unitsStore.grandAlliances}
                            value={grandAlliance}
                            onChange={setGrandAlliance}
                        />
                    </Grid> */}
                    <Grid item>
                        <DropdownObjects
                            getText={x => x.name}
                            options={factionOptions}
                            value={uiStore.faction}
                            onChange={setFaction}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            value={uiStore.keywordFilter}
                            onChange={handleSearch}
                            placeholder="Filter by keyword..."
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default observer(Filter);
