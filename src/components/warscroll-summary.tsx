import * as React from "react";
import { inject, observer } from "mobx-react";
import { WarscrollStore, PointMode } from "../stores/warscroll";
import { UnitsStore, ArmyOption, Allegiance } from "../stores/units";
import { UiStore } from "../stores/ui";
import { DropdownValues, DropdownObjects } from "../atoms/dropdown-list";
import { Grid, FormControl, InputLabel, Card, CardContent, CardActions } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';


interface WarscrollSummaryProps {
    warscrollStore?: WarscrollStore;
    uiStore?: UiStore;
    unitsStore?: UnitsStore;
}

@inject("warscrollStore", "uiStore", "unitsStore")
@observer    
export class WarscrollSummary extends React.Component<WarscrollSummaryProps, {}> {
    private handlePointsModeChange = (value: PointMode) => {
        this.props.warscrollStore!.setPointMode(value);
    }

    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        const totalPoints = warscroll.totalPoints;
        const alliedPoints = warscroll.alliedPoints;
        const allegianceOptions = this.props.unitsStore!.allegianceList.filter(x => x.grandAlliance === this.props.uiStore!.grandAlliance);
        const armyOptions = this.props.warscrollStore!.armyOptions;
        // const armyOptionsValues = armyOptions && armyOptions.values.map(x => { return { key: x, value: x, text: x} });

        return <Card>
            <CardContent>
                <Grid container spacing={2} wrap="wrap">
                    <Grid item>
                        <FormControl><InputLabel> Allegiance</InputLabel>
                        <DropdownObjects getText={x => x.name} options={allegianceOptions} value={this.props.warscrollStore!.warscroll.allegiance} onChange={this.setAllegiance} />    
                        </FormControl>
                    </Grid>
                    { armyOptions && 
                        <Grid item>
                        <FormControl>
                            <InputLabel> {armyOptions.name}</InputLabel>
                            <DropdownObjects<ArmyOption> getText={x => x.name} options={armyOptions.values} value={this.props.warscrollStore!.warscroll.armyOption} onChange={this.setArmyOption} />    
                            </FormControl>
                        </Grid>
                    }
                    <Grid item>
                        <FormControl>
                            <InputLabel>Mode</InputLabel>
                            <DropdownValues value={warscroll.pointMode} options={[PointMode.MatchedPlay, PointMode.OpenPlay]} getText={(v) => v === PointMode.MatchedPlay ? "Matched play" : "Open play"} onChange={this.handlePointsModeChange} />
                            </FormControl>
                    </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                <Grid container spacing={2}>
                    <Grid item>{totalPoints} points { alliedPoints > 0 && <>({ !warscroll.isAlliedValid && <WarningIcon fontSize="small" /> } { alliedPoints} allied)</> } </Grid>
                    <Grid item>{ !warscroll.isLeadersValid && <WarningIcon fontSize="small" /> } {warscroll.numberOfLeaders} leaders ({warscroll.minLeaders} - {warscroll.maxLeaders})</Grid>
                    <Grid item>{ !warscroll.isBattelinesValid && <WarningIcon fontSize="small"/> }{warscroll.numberOfBattelines} battlelines ({warscroll.minBattlelines} - {warscroll.maxBattlelines})</Grid>
                    <Grid item>{ !warscroll.isBehemotsValid && <WarningIcon fontSize="small" /> }{warscroll.numberOfBehemots} behemoths (0 - {warscroll.maxBehemots})</Grid>
                    <Grid item>{!warscroll.isArtilleryValid && <WarningIcon fontSize="small"/>}{warscroll.numberOfArtillery} artillery (0 - {warscroll.maxArtillery})</Grid>
                    </Grid>
                </CardActions>
            </Card>;
    }

    private setAllegiance = (allegiance: Allegiance | null) => {
        if (allegiance) {
            this.props.warscrollStore!.warscroll.allegiance = allegiance;
            this.props.warscrollStore!.saveWarscroll();
        }
    }

    private setArmyOption = (x: ArmyOption | null) => {
        this.props.warscrollStore!.setArmyOption(x);
    }
}