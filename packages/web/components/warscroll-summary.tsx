import { observer, useLocalObservable } from "mobx-react-lite";
import {
    PointMode,
    WarscrollLimits,
    WarscrollContingent
} from "../stores/warscroll";
import { contingentName, Faction } from "../../common/unit";
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
    makeStyles
} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import NumberControl from "../atoms/number-control";
import { Warning } from "../atoms/warning";
import { useStores } from "../stores";
import React, { ChangeEvent, useCallback } from "react";

type LimitValues = {
    [K in keyof WarscrollLimits]: WarscrollLimits[K] extends number ? K : never;
}[keyof WarscrollLimits];
type LimitLimits = {
    [K in keyof WarscrollLimits]: WarscrollLimits[K] extends number | undefined
        ? K
        : never;
}[keyof WarscrollLimits];

const useStyles = makeStyles(theme => ({
    allegianceIcon: {
        backgroundColor: theme.palette.grey[500],
        height: "1em",
        borderRadius: "1em",
        padding: theme.spacing(0.1),
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(0.5)
    }
}));

const WarscrollLimitView = observer(
    ({
        limits,
        name,
        prop,
        min,
        max
    }: {
        limits: WarscrollLimits;
        name: string;
        prop: LimitValues;
        min: LimitLimits;
        max: LimitLimits;
    }) => {
        const limitMin = limits[min];
        const limitMax = limits[max];
        return (
            <Grid item>
                {((limitMin !== undefined && limits[prop] < limitMin) ||
                    (limitMax !== undefined && limits[prop] > limitMax)) && (
                    <Warning label={`Wrong number of ${name}`} />
                )}
                {limits[prop]} {name}
                {limitMin !== undefined && limitMax !== undefined && (
                    <>
                        &nbsp;({limitMin} - {limitMax})
                    </>
                )}
                {limitMin === undefined && limitMax !== undefined && (
                    <>&nbsp;({limitMax} max.)</>
                )}
                {limitMin !== undefined &&
                    limitMin !== 0 &&
                    limitMax === undefined && <>&nbsp;({limitMin} min.)</>}
            </Grid>
        );
    }
);

function getName(x: { name: string }) {
    return x.name;
}

const WarscrollContingentView = observer(
    ({ contingent }: { contingent: WarscrollContingent }) => {
        return (
            <Grid item container spacing={2}>
                <Grid item>
                    {contingent.totalNumberOfUnits === 0 && (
                        <Warning label="There must be at least one unit in this contingent" />
                    )}
                </Grid>
                <strong>{contingentName(contingent.contingent)}</strong>
                <WarscrollLimitView
                    limits={contingent}
                    name="Leader"
                    prop="numberOfLeaders"
                    min="minLeaders"
                    max="maxLeaders"
                />
                <WarscrollLimitView
                    limits={contingent}
                    name="Behemot"
                    prop="numberOfBehemots"
                    min="minBehemots"
                    max="maxBehemots"
                />
                <WarscrollLimitView
                    limits={contingent}
                    name="Artillery"
                    prop="numberOfArtilleries"
                    min="minArtilleries"
                    max="maxArtilleries"
                />
                <WarscrollLimitView
                    limits={contingent}
                    name="Batteline"
                    prop="numberOfBattlelines"
                    min="minBattlelines"
                    max="maxBattlelines"
                />
                <WarscrollLimitView
                    limits={contingent}
                    name="Other units"
                    prop="numberOfOtherUnits"
                    min="minOtherUnits"
                    max="maxOtherUnits"
                />
            </Grid>
        );
    }
);

export const WarscrollSummary = observer(() => {
    const { warscrollStore, unitsStore, uiStore } = useStores();
    const store = useLocalObservable(() => ({
        handlePointsModeChange(value: PointMode) {
            warscrollStore.setPointMode(value);
        },
        setCommandPoints(value: number) {
            warscrollStore.setCommandPoints(value);
        },
        setAllegiance(allegiance: Faction | null) {
            if (allegiance) {
                warscrollStore.warscroll.allegiance = allegiance;
                warscrollStore.saveWarscroll();
            }
        }
    }));

    const warscroll = warscrollStore.warscroll;
    const totalPoints = warscroll.totalPoints;
    const alliedPoints = warscroll.alliedPoints;
    const allegianceOptions = unitsStore.allegiances;
    const handleNameChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            warscrollStore.setName(event.currentTarget.value);
        },
        [warscrollStore]
    );
    const classes = useStyles();

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
                                <DropdownObjects
                                    getText={x => (
                                        <>
                                            {x.icon && (
                                                <img
                                                    src={x.icon}
                                                    className={
                                                        classes.allegianceIcon
                                                    }
                                                    alt={x.name}
                                                />
                                            )}{" "}
                                            {x.name}
                                        </>
                                    )}
                                    options={allegianceOptions}
                                    value={warscroll.allegiance}
                                    onChange={store.setAllegiance}
                                />
                            </FormControl>
                        </Grid>
                        {warscrollStore.armyTypes && (
                            <Grid item>
                                <FormControl>
                                    <InputLabel>Army Type</InputLabel>
                                    <DropdownObjects<Faction>
                                        getText={getName}
                                        options={warscrollStore.armyTypes}
                                        value={warscroll.armyType}
                                        onChange={warscrollStore.setArmyType}
                                        clearable
                                    />
                                </FormControl>
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
                                <FormControl>
                                    <InputLabel>Sub-faction</InputLabel>
                                    <DropdownObjects<Faction>
                                        getText={getName}
                                        options={warscrollStore.subFactions}
                                        value={warscroll.subFaction}
                                        onChange={warscrollStore.setSubFaction}
                                        clearable
                                    />
                                </FormControl>
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
                                        PointMode.MeetingEngagements
                                    ]}
                                    getText={v =>
                                        v === PointMode.MatchedPlay
                                            ? "Matched play"
                                            : v === PointMode.OpenPlay
                                            ? "Open play"
                                            : "Meeting engagements"
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
                                    getText={x => x.name}
                                    onChange={warscrollStore.setRealm}
                                    clearable
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <NumberControl
                                label="Command points"
                                min={0}
                                max={warscroll.maxCommandPoints}
                                value={warscroll.commandPoints}
                                onChange={store.setCommandPoints}
                            />
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
                            {warscroll.pointMode !==
                                PointMode.MeetingEngagements && (
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
                            )}
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
                        {warscroll.pointMode === PointMode.MeetingEngagements &&
                            warscroll.contingents.map(x => (
                                <WarscrollContingentView
                                    key={x.contingent}
                                    contingent={x}
                                />
                            ))}
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
