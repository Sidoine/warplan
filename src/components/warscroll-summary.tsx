import * as React from "react";
import { inject, observer } from "mobx-react";
import {
    WarscrollStore,
    PointMode,
    WarscrollLimits,
    WarscrollContingent
} from "../stores/warscroll";
import {
    UnitsStore,
    ArmyOption,
    Allegiance,
    contingentName
} from "../stores/units";
import { UiStore } from "../stores/ui";
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

interface WarscrollSummaryProps {
    warscrollStore?: WarscrollStore;
    uiStore?: UiStore;
    unitsStore?: UnitsStore;
}

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

@inject("warscrollStore", "uiStore", "unitsStore")
@observer
export class WarscrollSummary extends React.Component<
    WarscrollSummaryProps,
    {}
> {
    private handlePointsModeChange = (value: PointMode) => {
        this.props.warscrollStore!.setPointMode(value);
    };

    private setCommandPoints = (value: number) =>
        this.props.warscrollStore!.setCommandPoints(value);

    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        const totalPoints = warscroll.totalPoints;
        const alliedPoints = warscroll.alliedPoints;
        const allegianceOptions = this.props.unitsStore!.allegianceList.filter(
            x => x.grandAlliance === this.props.uiStore!.grandAlliance
        );
        const armyOptions = this.props.warscrollStore!.armyOptions;
        // const armyOptionsValues = armyOptions && armyOptions.values.map(x => { return { key: x, value: x, text: x} });

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
                                    value={
                                        this.props.warscrollStore!.warscroll
                                            .allegiance
                                    }
                                    onChange={this.setAllegiance}
                                />
                            </FormControl>
                        </Grid>
                        {armyOptions && (
                            <Grid item>
                                <FormControl>
                                    <InputLabel> {armyOptions.name}</InputLabel>
                                    <DropdownObjects<ArmyOption>
                                        getText={x => x.name}
                                        options={armyOptions.values}
                                        value={
                                            this.props.warscrollStore!.warscroll
                                                .armyOption
                                        }
                                        onChange={this.setArmyOption}
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
                                    onChange={this.handlePointsModeChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel>Command points</InputLabel>
                                <NumberControl
                                    min={0}
                                    max={warscroll.maxCommandPoints}
                                    value={warscroll.commandPoints}
                                    onChange={this.setCommandPoints}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container spacing={2} direction="column">
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
                </CardActions>
            </Card>
        );
    }

    private setAllegiance = (allegiance: Allegiance | null) => {
        if (allegiance) {
            this.props.warscrollStore!.warscroll.allegiance = allegiance;
            this.props.warscrollStore!.saveWarscroll();
        }
    };

    private setArmyOption = (x: ArmyOption | null) => {
        this.props.warscrollStore!.setArmyOption(x);
    };
}
