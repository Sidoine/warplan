import { observer } from "mobx-react-lite";
import { Faction, PointMode } from "../../common/data";
import DropdownValues from "../atoms/dropdown-values";
import DropdownObjects from "../atoms/dropdown-objects";
import {
    Grid,
    FormControl,
    Card,
    CardContent,
    CardActions,
    Input,
    Button,
    FormHelperText,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { Warning } from "../atoms/warning";
import React, { ChangeEvent, useCallback } from "react";
import AddButton, { TableColumn } from "../atoms/add-button";
import { AllAbilityGroups } from "../atoms/warscroll-components";
import { ExtraAbilitiesEdit } from "./extra-abilities-edit";
import { useArmyListStore } from "../stores/army-list";
import { useDataStore } from "../stores/data";
import { useUiStore } from "../stores/ui";

function getName(x: { name: string }) {
    return x.name;
}

const allegianceColumns: TableColumn<Faction>[] = [
    { name: "Name", text: (x: Faction) => x.name },
    {
        name: "Abilities",
        text: (x) =>
            x.abilityGroups && (
                <AllAbilityGroups abilityGroups={x.abilityGroups} />
            ),
    },
];

export const ArmyListSummary = observer(() => {
    const armyList = useArmyListStore();
    const unitsStore = useDataStore();
    const uiStore = useUiStore();

    const warscroll = armyList;
    const totalPoints = warscroll.totalPoints;
    const alliedPoints = warscroll.alliedPoints;
    const allegianceOptions = unitsStore.allegiances;
    const handleNameChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            armyList.setName(event.currentTarget.value);
        },
        [armyList]
    );

    return (
        <Card>
            <CardContent>
                <Grid container direction="column" spacing={2}>
                    <Grid item container spacing={2} wrap="wrap">
                        <Grid item>
                            <FormControl>
                                <FormHelperText>Name</FormHelperText>
                                <Input
                                    value={warscroll.name}
                                    onChange={handleNameChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormHelperText>Allegiance</FormHelperText>
                                <DropdownObjects<Faction>
                                    getText={getName}
                                    options={allegianceOptions}
                                    value={warscroll.allegiance}
                                    onChange={armyList.setAllegiance}
                                />
                            </FormControl>
                        </Grid>
                        {armyList.armyTypes && armyList.armyTypes.length > 0 && (
                            <Grid item>
                                <AddButton<Faction>
                                    variant="clearable"
                                    columns={allegianceColumns}
                                    options={armyList.armyTypes}
                                    value={warscroll.armyType}
                                    onChange={armyList.setArmyType}
                                    placeholder="Army Type"
                                />
                            </Grid>
                        )}
                        {armyList.subFactions &&
                            armyList.subFactions.length > 0 && (
                                <Grid item>
                                    <AddButton<Faction>
                                        variant="clearable"
                                        columns={allegianceColumns}
                                        options={armyList.subFactions}
                                        value={warscroll.subFaction}
                                        onChange={armyList.setSubFaction}
                                        placeholder="Sub Faction"
                                    />
                                </Grid>
                            )}
                        <Grid item>
                            <FormControl>
                                <FormHelperText>Mode</FormHelperText>
                                <DropdownValues
                                    value={warscroll.pointMode}
                                    options={[
                                        PointMode.MatchedPlay,
                                        PointMode.OpenPlay,
                                    ]}
                                    getText={(v) =>
                                        v === PointMode.MatchedPlay
                                            ? "Matched play"
                                            : "Open play"
                                    }
                                    onChange={armyList.setPointMode}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <ExtraAbilitiesEdit unit={warscroll} />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2} direction="column">
                        <Grid item container spacing={2}>
                            <Grid item>
                                {warscroll.totalPoints >
                                    warscroll.maxPoints && (
                                    <Warning
                                        label={`Maximum is ${warscroll.maxPoints}`}
                                    />
                                )}{" "}
                                {totalPoints} points{" "}
                                {alliedPoints > 0 && (
                                    <>
                                        (
                                        {!warscroll.isAlliedValid && (
                                            <WarningIcon fontSize="small" />
                                        )}{" "}
                                        {alliedPoints} allied)
                                    </>
                                )}{" "}
                            </Grid>
                            {
                                <>
                                    <Grid item>
                                        {!warscroll.isLeadersValid && (
                                            <Warning label="Wrong number of leaders" />
                                        )}{" "}
                                        {warscroll.numberOfLeaders} leaders (
                                        {warscroll.minLeaders} -{" "}
                                        {warscroll.maxLeaders})
                                    </Grid>
                                    <Grid item>
                                        {!warscroll.isBattelinesValid && (
                                            <WarningIcon fontSize="small" />
                                        )}
                                        {warscroll.numberOfBattlelines}{" "}
                                        battlelines ({warscroll.minBattlelines}{" "}
                                        - {warscroll.maxBattlelines})
                                    </Grid>
                                    <Grid item>
                                        {!warscroll.isBehemotsValid && (
                                            <WarningIcon fontSize="small" />
                                        )}
                                        {warscroll.numberOfBehemots} behemoths
                                        (0 - {warscroll.maxBehemots})
                                    </Grid>
                                    <Grid item>
                                        {!warscroll.isArtilleryValid && (
                                            <WarningIcon fontSize="small" />
                                        )}
                                        {warscroll.numberOfArtilleries}{" "}
                                        artillery (0 -{" "}
                                        {warscroll.maxArtilleries})
                                    </Grid>
                                </>
                            }
                            <Grid item>
                                {!warscroll.isEndlessSpellsValid && (
                                    <Warning label="Wrong number of endless spells" />
                                )}
                                {warscroll.endlessSpells.length} endless spells{" "}
                                {warscroll.maxEndlessSpells && (
                                    <>(0 - {warscroll.maxEndlessSpells})</>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button onClick={uiStore.showExportPopin}>Export</Button>
                <Button onClick={armyList.save}>Save</Button>
            </CardActions>
        </Card>
    );
});
