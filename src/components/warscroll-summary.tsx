import React = require("react");
import { inject, observer } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { Dropdown, Segment, Grid, Icon, DropdownProps, Menu } from "semantic-ui-react";
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

        return <Segment>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        Filter: 
                        <Menu>
                        <Dropdown selection options={grandAllianceOptions} value={this.props.uiStore!.grandAlliance} onChange={this.setGrandAlliance}/>
                        <Dropdown selection options={factionOptions} value={this.props.uiStore!.faction.id} onChange={this.setFaction}/>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        {/* <DropDown selection options={} />     */}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3} >{totalPoints} points</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isLeadersValid && <Icon name="warning" /> } {warscroll.numberOfLeaders} leaders ({warscroll.minLeaders} - {warscroll.maxLeaders})</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isBattelinesValid && <Icon name="warning" /> }{warscroll.numberOfBattelines} battlelines ({warscroll.minBattlelines} - {warscroll.maxBattlelines})</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isBehemotsValid && <Icon name="warning" /> }{warscroll.numberOfBehemots} behemots (0 - {warscroll.maxBehemots})</Grid.Column>
                    <Grid.Column width={3}>{!warscroll.isArtilleryValid && <Icon name="warning" />}{warscroll.numberOfArtillery} artillery (0 - {warscroll.maxArtillery})</Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>;
    }

    private setGrandAlliance = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        this.props.uiStore!.grandAlliance = data.value as GrandAlliance;
    }

    private setFaction = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        const faction = this.props.unitsStore!.factionsList.find(x => x.id === data.value);
        if (faction) this.props.uiStore!.faction = faction;
    }
}