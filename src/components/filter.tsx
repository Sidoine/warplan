import * as React from "react";
import { GrandAlliance, Faction } from "../stores/units";
import { observer } from "mobx-react-lite";
import { Grid, Input, CardContent, Card, makeStyles } from "@material-ui/core";
import { HasId } from "../atoms/add-button";
import { useStores } from "../stores";
import DropdownObjects from "../atoms/dropdown-objects";

interface GrandAllianceInfo extends HasId {
    text: string;
    value: GrandAlliance;
}

const grandAlliances: GrandAllianceInfo[] = [
    {
        id: "GrandAlliance.chaos",
        text: "Chaos",
        value: GrandAlliance.chaos,
    },
    {
        id: "GrandAlliance.order",
        text: "Order",
        value: GrandAlliance.order,
    },
    {
        id: "GrandAlliance.death",
        text: "Death",
        value: GrandAlliance.death,
    },
    {
        id: "GrandAlliance.destruction",
        text: "Destruction",
        value: GrandAlliance.destruction,
    },
];

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.grey[100],
    },
}));

function Filter() {
    const { uiStore, unitsStore } = useStores();
    const grandAlliance =
        grandAlliances.find((x) => x.value === uiStore.grandAlliance) || null;
    const handleSearch = React.useCallback(
        (x: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            uiStore.setKeywordFilter(x.target.value);
        },
        [uiStore]
    );
    const setGrandAlliance = React.useCallback(
        (x: GrandAllianceInfo | null) => {
            if (x) uiStore.setGrandAlliance(x.value);
        },
        [uiStore]
    );
    const setFaction = React.useCallback(
        (faction: Faction | null) => {
            if (faction) uiStore.setFaction(faction.id);
        },
        [uiStore]
    );

    const factionOptions = unitsStore.factionsList.filter(
        (x) => x.grandAlliance === uiStore.grandAlliance
    );
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container wrap="wrap" spacing={2}>
                    <Grid item>Filter</Grid>
                    <Grid item>
                        <DropdownObjects
                            getText={(x) => x.text}
                            options={grandAlliances}
                            value={grandAlliance}
                            onChange={setGrandAlliance}
                        />
                    </Grid>
                    <Grid item>
                        <DropdownObjects
                            getText={(x) => x.name}
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
