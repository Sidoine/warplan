import React = require("react");
import { inject, observer } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { Dropdown, Segment, Grid, Icon, DropdownProps } from "semantic-ui-react";
import { GrandAlliance, UnitsStore } from "../stores/units";
import { UiStore } from "../stores/ui";

interface WarscrollSummaryProps {
    warscrollStore?: WarscrollStore;
    uiStore?: UiStore;
    unitsStore?: UnitsStore;
}

@inject("warscrollStore", "uiStore", "unitsStore")
@observer    
export class WarscrollSummary extends React.Component<WarscrollSummaryProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        const totalPoints = warscroll.totalPoints;
        const alliedPoints = warscroll.alliedPoints;
        const grandAllianceOptions = [{
            key: GrandAlliance.chaos,
            text: "Chaos",
            value: GrandAlliance.chaos
        }, {
            key: GrandAlliance.order,
            text: "Order",
            value: GrandAlliance.order
        }, {
            key: GrandAlliance.death,
            text: "Death",
            value: GrandAlliance.death
        }, {
            key: GrandAlliance.destruction,
            text: "Destruction",
            value: GrandAlliance.destruction
            }];
        
        const factionOptions = this.props.unitsStore!.factionsList.filter(x => x.grandAlliance === this.props.uiStore!.grandAlliance).map(x => { return { key: x.id, text: x.name, value: x.id } });
        const allegianceOptions = this.props.unitsStore!.allegianceList.filter(x => x.grandAlliance === this.props.uiStore!.grandAlliance)
            .map(x => { return { key: x.id, value: x.id, text: x.name }});
        const armyOptions = this.props.warscrollStore!.armyOptions;
        const armyOptionsValues = armyOptions && armyOptions.values.map(x => { return { key: x, value: x, text: x} });

        return <Segment>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        Filter: 
                        <Dropdown selection options={grandAllianceOptions} value={this.props.uiStore!.grandAlliance} onChange={this.setGrandAlliance}/>
                        <Dropdown selection options={factionOptions} value={this.props.uiStore!.faction.id} onChange={this.setFaction}/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        Allegiance:
                        <Dropdown selection options={allegianceOptions} value={this.props.warscrollStore!.warscroll.allegiance.id} onChange={this.setAllegiance} />    
                    </Grid.Column>
                    { armyOptions && 
                        <Grid.Column width={5}>
                            {armyOptions.name}:
                            <Dropdown selection options={armyOptionsValues} value={this.props.warscrollStore!.warscroll.armyOption} onChange={this.setArmyOption} />    
                        </Grid.Column>
                    }
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

    private setGrandAlliance = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        this.props.uiStore!.setGrandAlliance(data.value as GrandAlliance);
    }

    private setAllegiance = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        const allegiance = this.props.unitsStore!.allegianceList.find(x => x.id === data.value);
        if (allegiance) {
            this.props.warscrollStore!.warscroll.allegiance = allegiance;
            this.props.warscrollStore!.saveWarscroll();
        }
    }

    private setArmyOption = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        this.props.warscrollStore!.setArmyOption(data.value as string);
    }

    private setFaction = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        if (typeof(data.value) === "string") this.props.uiStore!.setFaction(data.value);
    }
}