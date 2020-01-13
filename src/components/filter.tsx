import * as React from "react";
import { UnitsStore, GrandAlliance, Faction } from "../stores/units";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { action, computed } from "mobx";
import { Grid, Input, CardContent, Card } from "@material-ui/core";
import { DropdownObjects, HasId } from "../atoms/dropdown-list";

export interface FilterProps {
    unitsStore?: UnitsStore;
    uiStore?: UiStore;
}

interface GrandAllianceInfo extends HasId {
    text: string;
    value: GrandAlliance;
}

const grandAlliances: GrandAllianceInfo[] = [{
    id: "GrandAlliance.chaos",
    text: "Chaos",
    value: GrandAlliance.chaos
}, {
    id: "GrandAlliance.order",
    text: "Order",
    value: GrandAlliance.order
}, {
    id: "GrandAlliance.death",
    text: "Death",
    value: GrandAlliance.death
}, {
    id: "GrandAlliance.destruction",
    text: "Destruction",
    value: GrandAlliance.destruction
    }];

@inject("unitsStore", "uiStore")
@observer    
export class Filter extends React.Component<FilterProps> {

    @computed get grandAlliance() {
        return grandAlliances.find(x => x.value === this.props.uiStore!.grandAlliance) ||null;
    }
    render() {        
        const factionOptions = this.props.unitsStore!.factionsList.filter(x => x.grandAlliance === this.props.uiStore!.grandAlliance);
        
        return <Card style={{maxWidth: 'calc(100vw - 48px)'}}><CardContent> <Grid container wrap="wrap" spacing={2}>
            <Grid item>Filter</Grid>
            <Grid item><DropdownObjects getText={x => x.text} options={grandAlliances} value={this.grandAlliance} onChange={this.setGrandAlliance}/></Grid>
            <Grid item><DropdownObjects getText={x => x.name} options={factionOptions} value={this.props.uiStore!.faction} onChange={this.setFaction} /></Grid>
            <Grid item>
                <Input value={this.props.uiStore!.keywordFilter} onChange={this.handleSearch} className="icon" placeholder="Filter by keyword..." />
            </Grid>
        </Grid></CardContent></Card>;
    }

    @action
    private handleSearch = (x: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.props.uiStore!.setKeywordFilter(x.target.value);
    }

    private setGrandAlliance = (x: GrandAllianceInfo | null) => {
        if (x) this.props.uiStore!.setGrandAlliance(x.value);
    }

    @action
    private setFaction = (faction: Faction | null) => {
        if (faction) this.props.uiStore!.setFaction(faction.id);
    }
}