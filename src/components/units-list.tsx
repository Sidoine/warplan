import * as React from "react";
import { UnitsStore, Unit } from "../stores/units";
import { observer, inject } from "mobx-react";
import { DropdownButton, MenuItem } from "react-bootstrap";

export interface UnitsListProps {
    unitsStore?: UnitsStore;
    title: string;
}

@inject('unitsStore')
@observer
export class UnitsList extends React.Component<UnitsListProps, {}> {
    render() {
        return <DropdownButton title={this.props.title} id="units">
                {
                    this.props.unitsStore!.unitList.map(x => <MenuItem key={x.id} onClick={() => this.addUnit(x)}><span>{x.model.name}</span> <span>{x.size}</span> <span>{x.points}</span></MenuItem>)
                }
            </DropdownButton>;
    }

    private addUnit(unit: Unit) {
        this.props.unitsStore!.warscroll.units.push({
            id: this.props.unitsStore!.serial++,
            unit: unit,
            count: 1
        });
    }
}