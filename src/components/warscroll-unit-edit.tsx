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
                <Button onClick={this.delete}><Glyphicon glyph="remove"/></Button>
            </td></tr>;
    }

    private toggleGeneral = (event: React.FormEvent<Checkbox>) => {
        if ((event.target as any).value) {
            this.props.unitsStore!.warscroll.general = this.props.unit;
        }
        else {
            this.props.unitsStore!.warscroll.general = undefined;
        }
    }

    private delete = () => {
        const units = this.props.unitsStore!.warscroll.units;
        units.splice(units.indexOf(this.props.unit), 1);
    }

    private onCountChange = (value: number) => {
        this.props.unit.count = value;
    }
}