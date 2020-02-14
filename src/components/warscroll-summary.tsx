import * as React from "react";
import { observer, useLocalStore } from "mobx-react";
import {
    PointMode,
    WarscrollLimits,
    WarscrollContingent
} from "../stores/warscroll";
import { ArmyOption, Allegiance, contingentName } from "../stores/units";
import { DropdownValues, DropdownObjects } from "../atoms/dropdown-list";
import {
    Grid,
    FormControl,
    InputLabel,
    Card,
    CardContent,
    CardActions
} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import { NumberControl } from "../atoms/number-control";
import { Warning } from "../atoms/warning";
import { useStores } from "../stores";

type LimitValues = {
    [K in keyof WarscrollLimits]: WarscrollLimits[K] extends number ? K : never;
}[keyof WarscrollLimits];
type LimitLimits = {
    [K in keyof WarscrollLimits]: WarscrollLimits[K] extends number | undefined
        ? K
        : never;
}[keyof WarscrollLimits];

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
    const store = useLocalStore(() => ({
        handlePointsModeChange(value: PointMode) {
            warscrollStore.setPointMode(value);
        },
        setCommandPoints(value: number) {
            warscrollStore.setCommandPoints(value);
        },
        setAllegiance(allegiance: Allegiance | null) {
            if (allegiance) {
                warscrollStore.warscroll.allegiance = allegiance;
                warscrollStore.saveWarscroll();
            }
        },
        setArmyOption(x: ArmyOption | null) {
            warscrollStore.setArmyOption(x);
        }
    }));

    const warscroll = warscrollStore.warscroll;
    const totalPoints = warscroll.totalPoints;
    const alliedPoints = warscroll.alliedPoints;
    const allegianceOptions = unitsStore.allegianceList.filter(
        x => x.grandAlliance === uiStore.grandAlliance
    );
    const armyOptions = warscrollStore.armyOptions;

    return (
        <Card>
            <CardContent>
                <Grid container spacing={2} wrap="wrap">
                    <Grid item>
                        <FormControl>
                            <InputLabel> Allegiance</InputLabel>
                            <DropdownObjects
                                getText={x => x.name}
                                options={allegianceOptions}
                                value={warscroll.allegiance}
                                onChange={store.setAllegiance}
                            />
                        </FormControl>
                    </Grid>
                    {armyOptions && (
                        <Grid item>
                            {warscroll.armyOption &&
                                warscroll.armyOption.requiredArtifact &&
                                !warscroll.hasRequiredArtifact && (
                                    <Warning
                                        label={`${warscroll.armyOption.requiredArtifact.ability.name} is missing`}
                                    />
                                )}
                            {warscroll.armyOption &&
                                warscroll.armyOption.requiredCommandTrait &&
                                !warscroll.hasRequiredCommandTrait && (
                                    <Warning
                                        label={`${warscroll.armyOption.requiredCommandTrait.ability.name} is missing`}
                                    />
                                )}
                            <FormControl>
                                <InputLabel> {armyOptions.name}</InputLabel>
                                <DropdownObjects<ArmyOption>
                                    getText={x => x.name}
                                    options={armyOptions.values}
                                    value={warscroll.armyOption}
                                    onChange={store.setArmyOption}
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
                        <NumberControl
                            label="Command points"
                            min={0}
                            max={warscroll.maxCommandPoints}
                            value={warscroll.commandPoints}
                            onChange={store.setCommandPoints}
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container spacing={2} direction="column">
                    <Grid item container spacing={2}>
                        <Grid item>
                            {warscroll.totalPoints > warscroll.maxPoints && (
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
                                    {warscroll.numberOfBattlelines} battlelines
                                    ({warscroll.minBattlelines} -{" "}
                                    {warscroll.maxBattlelines})
                                </Grid>
                                <Grid item>
                                    {!warscroll.isBehemotsValid && (
                                        <WarningIcon fontSize="small" />
                                    )}
                                    {warscroll.numberOfBehemots} behemoths (0 -{" "}
                                    {warscroll.maxBehemots})
                                </Grid>
                                <Grid item>
                                    {!warscroll.isArtilleryValid && (
                                        <WarningIcon fontSize="small" />
                                    )}
                                    {warscroll.numberOfArtilleries} artillery (0
                                    - {warscroll.maxArtilleries})
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
            </CardActions>
        </Card>
    );
});
