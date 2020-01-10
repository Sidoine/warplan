import * as React from "react";
import { UnitsStore, Battalion } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { AddButton } from "./dropdown-list";

export interface BattalionsListProps {
    unitsStore?: UnitsStore;
    title: string;
    warscrollStore?: WarscrollStore;
}

@inject('unitsStore', "warscrollStore")
@observer
export class BattalionsList extends React.Component<BattalionsListProps, {}> {
    render() {
        const items = this.props.warscrollStore!.availableBattalions;
        return <AddButton placeholder={this.props.title} options={items} onChange={this.onChange} />;
    }

    private onChange = (model: Battalion) => {
        this.props.warscrollStore!.addBattalion(model);
    }
}