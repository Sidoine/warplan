import * as React from "react";
import { Dropdown, DropdownProps, Menu, Input, InputOnChangeData } from "semantic-ui-react";
import { GrandAlliance, UnitsStore } from "../stores/units";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { action } from "mobx";

export interface FilterProps {
    unitsStore?: UnitsStore;
    uiStore?: UiStore;
}

@inject("unitsStore", "uiStore")
@observer    
export class Filter extends React.Component<FilterProps> {
    render() {
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
        
        return <Menu>
            <Menu.Item header>Filter</Menu.Item>
            <Menu.Item><Dropdown selection options={grandAllianceOptions} value={this.props.uiStore!.grandAlliance} onChange={this.setGrandAlliance}/></Menu.Item>
            <Menu.Item><Dropdown selection options={factionOptions} value={this.props.uiStore!.faction.id} onChange={this.setFaction} /></Menu.Item>
            <Menu.Item>
                <Input value={this.props.uiStore!.keywordFilter} onChange={this.handleSearch} className="icon" icon="search" placeholder="Filter by keyword..." />
            </Menu.Item>
        </Menu>;
    }

    @action
    private handleSearch = (x: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) => {
        this.props.uiStore!.setKeywordFilter(data.value);
    }

    private setGrandAlliance = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        this.props.uiStore!.setGrandAlliance(data.value as GrandAlliance);
    }

    @action
    private setFaction = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        if (typeof (data.value) === "string") {
            this.props.uiStore!.setFaction(data.value);
        }
    }
}