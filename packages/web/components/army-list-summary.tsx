import { observer, useLocalObservable } from "mobx-react-lite";
import { Faction, PointMode } from "../../common/data";
import DropdownValues from "../atoms/dropdown-values";
import DropdownObjects from "../atoms/dropdown-objects";
import {
    Grid,
    FormControl,
    InputLabel,
    Card,
    CardContent,
    CardActions,
    Input,
    Button,
} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import { Warning } from "../atoms/warning";
import { useStores } from "../stores";
import React, { ChangeEvent, useCallback } from "react";
import AddButton, { TableColumn } from "../atoms/add-button";
import { AllAbilityGroups } from "../atoms/warscroll-components";
import { ExtraAbilitiesEdit } from "./extra-abilities-edit";

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
    const { armyListStore: warscrollStore, unitsStore, uiStore } = useStores();
    const store = useLocalObservable(() => ({
        handlePointsModeChange(value: PointMode) {
            warscrollStore.setPointMode(value);
        },
        setAllegiance(allegiance: Faction | null) {
            if (allegiance) {
                warscrollStore.armyList.allegiance = allegiance;
                warscrollStore.saveWarscroll();
            }
        },
    }));

    const warscroll = warscrollStore.armyList;
    const totalPoints = warscroll.totalPoints;
    const alliedPoints = warscroll.alliedPoints;
    const allegianceOptions = unitsStore.allegiances;
    const handleNameChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            warscrollStore.setName(event.currentTarget.value);
        },
        [warscrollStore]
    );

    return (
        <Card>
            <CardContent>
                <Grid container direction="column" spacing={2}>
                    <Grid item container spacing={2} wrap="wrap">
                        <Grid item>
                            <FormControl>
                                <InputLabel>Name</InputLabel>
                                <Input
                                    value={warscroll.name}
                                    onChange={handleNameChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel>Allegiance</InputLabel>
                                <DropdownObjects<Faction>
                                    getText={getName}
                                    options={allegianceOptions}
                                    value={warscroll.allegiance}
                                    onChange={store.setAllegiance}
                                />
                            </FormControl>
                        </Grid>
                        {warscrollStore.armyTypes && (
                            <Grid item>
                                <AddButton<Faction>
                                    variant="clearable"
                                    columns={allegianceColumns}
                                    options={warscrollStore.armyTypes}
                                    value={warscroll.armyType}
                                    onChange={warscrollStore.setArmyType}
                                    placeholder="Army Type"
                                />
                            </Grid>
                        )}
                        {warscrollStore.subFactions && (
                            <Grid item>
                                {/* {warscroll.armyOption &&
                                    warscroll.armyOption.requiredArtifact &&
                                    warscroll.numberOfArtifacts > 0 &&
                                    !warscroll.hasRequiredArtifact && (
                                        <Warning
                                            label={`${warscroll.armyOption.requiredArtifact.ability.name} must be the first artifact`}
                                        />
                                    )}
                                {warscroll.armyOption &&
                                    warscroll.armyOption.requiredCommandTrait &&
                                    warscroll.general &&
                                    warscroll.general.extraAbilities.some(
                                        (x) =>
                                            x.ability.category ===
                                            AbilityCategory.CommandTrait
                                    ) &&
                                    !warscroll.hasRequiredCommandTrait && (
                                        <Warning
                                            label={`${warscroll.armyOption.requiredCommandTrait.ability.name} must be the command trait of your general`}
                                        />
                                    )} */}
                                <AddButton<Faction>
                                    variant="clearable"
                                    columns={allegianceColumns}
                                    options={warscrollStore.subFactions}
                                    value={warscroll.subFaction}
                                    onChange={warscrollStore.setSubFaction}
                                    placeholder="Sub Faction"
                                />
                            </Grid>
                        )}
                        <Grid item>
                            <FormControl>
                                <InputLabel>Mode</InputLabel>
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
                                    onChange={store.handlePointsModeChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel>Realm</InputLabel>
                                <DropdownObjects
                                    value={warscroll.realm}
                                    options={unitsStore.realms}
                                    getText={(x) => x.name}
                                    onChange={warscrollStore.setRealm}
                                    clearable
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
                <Button onClick={warscrollStore.saveCurrentWarscroll}>
                    Save
                </Button>
            </CardActions>
        </Card>
    );
});
