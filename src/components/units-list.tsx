import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { UiStore } from "../stores/ui";
import { Dropdown, DropdownProps } from "semantic-ui-react";

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
        const options = this.props.uiStore!.units.map(x => { return { key: x.id, value: x.id, text: x.model.name, description: x.points }});
        return <Dropdown search selection clearable placeholder={this.props.title} options={options} onChange={this.onChange} value=""></Dropdown>;
    }    

    private onChange = (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
        const unit  = this.props.unitsStore!.unitList.find(x => x.id === props.value);
        if (unit) this.props.warscrollStore!.addUnit(unit);
    }
}