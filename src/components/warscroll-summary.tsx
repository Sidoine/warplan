import React = require("react");
import { inject, observer } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { Segment, Grid, Icon } from "semantic-ui-react";

interface WarscrollSummaryProps {
    warscrollStore?: WarscrollStore;
}

@inject("warscrollStore")
@observer    
export class WarscrollSummary extends React.Component<WarscrollSummaryProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        const totalPoints = warscroll.totalPoints;

        return <Segment>
            <Grid>
                    <Grid.Column width={3} >{totalPoints} points</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isLeadersValid && <Icon name="warning" /> } {warscroll.numberOfLeaders} leaders ({warscroll.minLeaders} - {warscroll.maxLeaders})</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isBattelinesValid && <Icon name="warning" /> }{warscroll.numberOfBattelines} battlelines ({warscroll.minBattlelines} - {warscroll.maxBattlelines})</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isBehemotsValid && <Icon name="warning" /> }{warscroll.numberOfBehemots} behemots (0 - {warscroll.maxBehemots})</Grid.Column>
                    <Grid.Column width={3}>{ !warscroll.isArtilleryValid && <Icon name="warning" /> }{warscroll.numberOfArtillery} artillery (0 - {warscroll.maxArtillery})</Grid.Column>
            </Grid>
            </Segment>;
    }
}