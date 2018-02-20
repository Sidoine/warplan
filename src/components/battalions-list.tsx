import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { WarscrollStore } from "../stores/warscroll";
import { UiStore } from "../stores/ui";

export interface BattalionsListProps {
    unitsStore?: UnitsStore;
    title: string;
    warscrollStore?: WarscrollStore;
    uiStore?: UiStore;
}

@inject('unitsStore', "warscrollStore", "uiStore")
@observer
export class BattalionsList extends React.Component<BattalionsListProps, {}> {
    render() {
        return <DropdownButton title={this.props.title} id="battalions">
                {
                    this.props.uiStore!.battalions.map(x => <MenuItem key={x.id} onClick={() => this.props.warscrollStore!.addBattalion(x)}><span>{x.name}</span> <span>{x.points}</span></MenuItem>)
                }
            </DropdownButton>;
    }
}