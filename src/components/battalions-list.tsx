import * as React from "react";
import { UnitsStore, Battalion } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { AddButton, TableColumn } from "../atoms/dropdown-list";

export interface BattalionsListProps {
    unitsStore?: UnitsStore;
    title: string;
    warscrollStore?: WarscrollStore;
}

const columns: TableColumn<Battalion>[] = [
    { name: "Name", text: x => x.name },
    {
        name: "Description",
        text: b =>
            b.units
                .map(y => y.units.map(x => x.join("-")).join("/"))
                .join(" ― ")
    }
];

@inject("unitsStore", "warscrollStore")
@observer
export class BattalionsList extends React.Component<BattalionsListProps, {}> {
    render() {
        const items = this.props.warscrollStore!.availableBattalions;
        return (
            <AddButton
                placeholder={this.props.title}
                columns={columns}
                options={items}
                onChange={this.onChange}
            />
        );
    }

    private onChange = (model: Battalion) => {
        this.props.warscrollStore!.addBattalion(model);
    };
}
