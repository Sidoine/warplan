import * as React from "react";
import { UnitsStore, Unit } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { UiStore } from "../stores/ui";
import { AddButton } from "./dropdown-list";

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
        return <AddButton options={this.props.uiStore!.units} onChange={this.onChange} />;
    }    

    private onChange = (unit: Unit) => {
        this.props.warscrollStore!.addUnit(unit);
    }
}