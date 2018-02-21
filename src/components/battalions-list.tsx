import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { UiStore } from "../stores/ui";
import { Dropdown, DropdownProps } from "semantic-ui-react";

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
        const items = this.props.uiStore!.battalions.map(x => { return { key: x.id, value: x.id, text: x.name, description: x.points }});
        return <Dropdown search selection placeholder={this.props.title} options={items} onChange={this.onChange} />;
    }

    private onChange = (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
        const model  = this.props.unitsStore!.battalions.find(x => x.id === props.value);
        if (model) this.props.warscrollStore!.addBattalion(model);
    }
}