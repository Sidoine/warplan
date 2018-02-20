import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { WarscrollStore } from "../stores/warscroll";
import { UiStore } from "../stores/ui";

export interface UnitsListProps {
    unitsStore?: UnitsStore;
    title: string;
    warscrollStore?: WarscrollStore;
    uiStore?: UiStore;
}

@inject('unitsStore', "warscrollStore", "uiStore")
@observer
export class UnitsList extends React.Component<UnitsListProps, {}> {
    render() {
        return <DropdownButton title={this.props.title} id="units">
                {
                    this.props.uiStore!.units.map(x => <MenuItem key={x.id} onClick={() => this.props.warscrollStore!.addUnit(x)}><span>{x.model.name}</span> <span>{x.size}</span> <span>{x.points}</span></MenuItem>)
                }
            </DropdownButton>;
    }    
}