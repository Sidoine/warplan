import * as React from "react";
import { UnitsStore, Scenery } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { UiStore } from "../stores/ui";
import { AddButton } from "./dropdown-list";

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
        return <AddButton placeholder={this.props.title} options={this.props.unitsStore!.sceneryList} onChange={this.onChange}/>;
    }    

    private onChange = (scenery: Scenery) => {
        this.props.warscrollStore!.addScenery(scenery);
    }
}