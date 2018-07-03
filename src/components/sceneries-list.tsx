import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { UiStore } from "../stores/ui";
import { Dropdown, DropdownProps } from "semantic-ui-react";

export interface SceneriesListProps {
    unitsStore?: UnitsStore;
    title: string;
    warscrollStore?: WarscrollStore;
    uiStore?: UiStore;
}

@inject('unitsStore', "warscrollStore", "uiStore")
@observer
export class SceneriesList extends React.Component<SceneriesListProps, {}> {
    render() {
        const options = this.props.unitsStore!.sceneryList.map(x => { return { key: x.id, value: x.id, text: x.name, description: x.points }});
        return <Dropdown search selection placeholder={this.props.title} options={options} onChange={this.onChange}></Dropdown>;
    }    

    private onChange = (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
        const scenery  = this.props.unitsStore!.sceneryList.find(x => x.id === props.value);
        if (scenery) this.props.warscrollStore!.addScenery(scenery);
    }
}