import * as React from "react";
import { UnitsStore, WarscrollUnit } from "../stores/units";
import { observer, inject } from "mobx-react";
import { Button, Glyphicon } from "react-bootstrap";
import { NumberControl } from "../atoms/number-control";

export interface WarscrollUnitEditProps {
    unitsStore?: UnitsStore;
    unit: WarscrollUnit;
}

@inject('unitsStore')
@observer
export class WarscrollUnitEdit extends React.Component<WarscrollUnitEditProps, {}> {
    render() {
        const unit = this.props.unit;
        return <tr>
            <td>{unit.unit.model.name}</td>
            <td><NumberControl value={unit.count} onChange={this.onCountChange} /></td>
            <td>{unit.unit.points * unit.count}</td>
            <td>
            <Button onClick={this.delete}><Glyphicon glyph="remove"/></Button>
            </td></tr>;
    }

    private delete = () => {
        const units = this.props.unitsStore!.warscroll.units;
        units.splice(units.indexOf(this.props.unit), 1);
    }

    private onCountChange = (value: number) => {
        this.props.unit.count = value;
    }
}