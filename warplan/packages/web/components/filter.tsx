import * as React from "react";
import { Faction } from "../../common/data";
import { observer } from "mobx-react-lite";
import {
    Grid,
    Input,
    CardContent,
    Card,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import DropdownObjects from "../atoms/dropdown-objects";
import { useUiStore } from "../stores/ui";
import { useDataStore } from "../stores/data";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.grey[100],
    },
}));

function Filter() {
    const uiStore = useUiStore();
    const unitsStore = useDataStore();
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
                    <Grid item>
                        <DropdownObjects
                            getText={(x) => x.name}
                            options={factionOptions}
                            value={uiStore.faction}
                            onChange={setFaction}
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={uiStore.includeAllies}
                                    onChange={uiStore.toggleIncludeAllies}
                                />
                            }
                            label="Allies"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={uiStore.includeFactionLess}
                                    onChange={uiStore.toggleIncludeFactionLess}
                                />
                            }
                            label="Faction less"
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
