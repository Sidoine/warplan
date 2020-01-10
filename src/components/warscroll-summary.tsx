import * as React from "react";
import { inject, observer } from "mobx-react";
import { WarscrollStore, PointMode } from "../stores/warscroll";
import { UnitsStore, ArmyOption, Allegiance } from "../stores/units";
import { UiStore } from "../stores/ui";
import { DropdownValues, DropdownObjects } from "./dropdown-list";
import { Grid, Icon } from "@material-ui/core";

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

        return <div>
                <Grid container>
                    <Grid item xs={5}>
                        Allegiance:
                        <DropdownObjects getText={x => x.name} options={allegianceOptions} value={this.props.warscrollStore!.warscroll.allegiance} onChange={this.setAllegiance} />    
                    </Grid>
                    { armyOptions && 
                        <Grid item xs={5}>
                            {armyOptions.name}:
                            <DropdownObjects<ArmyOption> getText={x => x.name} options={armyOptions.values} value={this.props.warscrollStore!.warscroll.armyOption} onChange={this.setArmyOption} />    
                        </Grid>
                    }
                    <Grid xs={5}>
                        Mode: <DropdownValues value={warscroll.pointMode} options={[PointMode.MatchedPlay, PointMode.OpenPlay]} getText={(v) => v === PointMode.MatchedPlay ? "Matched play" : "Open play" } onChange={this.handlePointsModeChange} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3} >{totalPoints} points { alliedPoints > 0 && <>({ !warscroll.isAlliedValid && <Icon className="fa fa-warning"/> } { alliedPoints} allied)</> } </Grid>
                    <Grid item xs={3}>{ !warscroll.isLeadersValid && <Icon className="fa fa-warning" /> } {warscroll.numberOfLeaders} leaders ({warscroll.minLeaders} - {warscroll.maxLeaders})</Grid>
                    <Grid item xs={3}>{ !warscroll.isBattelinesValid && <Icon className="fa fa-warning" /> }{warscroll.numberOfBattelines} battlelines ({warscroll.minBattlelines} - {warscroll.maxBattlelines})</Grid>
                    <Grid item xs={3}>{ !warscroll.isBehemotsValid && <Icon className="fa fa-warning" /> }{warscroll.numberOfBehemots} behemoths (0 - {warscroll.maxBehemots})</Grid>
                    <Grid item xs={3}>{!warscroll.isArtilleryValid && <Icon className="fa fa-warning" />}{warscroll.numberOfArtillery} artillery (0 - {warscroll.maxArtillery})</Grid>
                </Grid>
            </div>;
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