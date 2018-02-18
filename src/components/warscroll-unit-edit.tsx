import * as React from "react";
import { UnitsStore, WarscrollUnit } from "../stores/units";
import { observer, inject } from "mobx-react";
import { Button, Glyphicon, Checkbox } from "react-bootstrap";
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
            <td>
                <div>{unit.unit.model.name}</div>
                <div>
                    {unit.isLeader && "Leader"}
                    {unit.isLeader && <Checkbox checked={unit === this.props.unitsStore!.warscroll.general} onChange={this.toggleGeneral} >General</Checkbox>}
                </div>
            </td>
            <td><NumberControl value={unit.count} onChange={this.onCountChange} /></td>
            <td>{unit.unit.points * unit.count}</td>
            <td>
                <Button onClick={() => this.props.unitsStore!.removeUnit(this.props.unit)}><Glyphicon glyph="remove"/></Button>
            </td></tr>;
    }

    private toggleGeneral = (event: React.FormEvent<Checkbox>) => {
        this.props.unitsStore!.setGeneral((event.target as any).checked ? this.props.unit : undefined);
    }

    private onCountChange = (value: number) => {
        this.props.unitsStore!.setUnitCount(this.props.unit, value);
    }
}