import * as React from "react";
import { inject, observer } from "mobx-react";
import { WarscrollStore, PointMode } from "../stores/warscroll";
import { Dropdown, Segment, Grid, Icon, DropdownProps } from "semantic-ui-react";
import { UnitsStore, ArmyOption } from "../stores/units";
import { UiStore } from "../stores/ui";
import { DropdownValues, DropdownObjects } from "./dropdown-list";

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
        const allegianceOptions = this.props.unitsStore!.allegianceList.filter(x => x.grandAlliance === this.props.uiStore!.grandAlliance)
            .map(x => { return { key: x.id, value: x.id, text: x.name }});
        const armyOptions = this.props.warscrollStore!.armyOptions;
        // const armyOptionsValues = armyOptions && armyOptions.values.map(x => { return { key: x, value: x, text: x} });

        return <Segment>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={5}>
                        Allegiance:
                        <Dropdown selection options={allegianceOptions} value={this.props.warscrollStore!.warscroll.allegiance.id} onChange={this.setAllegiance} />    
                    </Grid.Column>
                    { armyOptions && 
                        <Grid.Column width={5}>
                            {armyOptions.name}:
                            <DropdownObjects<ArmyOption> getText={x => x.name} options={armyOptions.values} value={this.props.warscrollStore!.warscroll.armyOption} onChange={this.setArmyOption} />    
                        </Grid.Column>
                    }
                    <Grid.Column width={5}>
                        Mode: <DropdownValues value={warscroll.pointMode} options={[PointMode.MatchedPlay, PointMode.OpenPlay]} getText={(v) => v === PointMode.MatchedPlay ? "Matched play" : "Open play" } onChange={this.handlePointsModeChange} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3} >{totalPoints} points { alliedPoints > 0 && <>({ !warscroll.isAlliedValid && <Icon name="warning"/> } { alliedPoints} allied)</> } </Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isLeadersValid && <Icon name="warning" /> } {warscroll.numberOfLeaders} leaders ({warscroll.minLeaders} - {warscroll.maxLeaders})</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isBattelinesValid && <Icon name="warning" /> }{warscroll.numberOfBattelines} battlelines ({warscroll.minBattlelines} - {warscroll.maxBattlelines})</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isBehemotsValid && <Icon name="warning" /> }{warscroll.numberOfBehemots} behemoths (0 - {warscroll.maxBehemots})</Grid.Column>
                    <Grid.Column width={3}>{!warscroll.isArtilleryValid && <Icon name="warning" />}{warscroll.numberOfArtillery} artillery (0 - {warscroll.maxArtillery})</Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>;
    }

    private setAllegiance = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        const allegiance = this.props.unitsStore!.allegianceList.find(x => x.id === data.value);
        if (allegiance) {
            this.props.warscrollStore!.warscroll.allegiance = allegiance;
            this.props.warscrollStore!.saveWarscroll();
        }
    }

    private setArmyOption = (x: ArmyOption | null) => {
        this.props.warscrollStore!.setArmyOption(x);
    }
}