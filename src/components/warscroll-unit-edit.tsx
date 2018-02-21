import * as React from "react";
import { observer, inject } from "mobx-react";
import { Checkbox } from "react-bootstrap";
import { NumberControl } from "../atoms/number-control";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";
import { Button, Table, Icon } from "semantic-ui-react";

export interface WarscrollUnitEditProps {
    unit: WarscrollUnit;
    warscrollStore?: WarscrollStore;
}

@inject("warscrollStore")
@observer
export class WarscrollUnitEdit extends React.Component<WarscrollUnitEditProps, {}> {
    render() {
        const unit = this.props.unit;
        return <Table.Row>
            <Table.Cell>
                <div>{unit.unit.model.name}</div>
                <div>
                    {unit.isLeader && "Leader"}
                    {unit.isLeader && <Checkbox checked={unit === this.props.warscrollStore!.warscroll.general} onChange={this.toggleGeneral} >General</Checkbox>}
                </div>
            </Table.Cell>
            <Table.Cell><NumberControl value={unit.count} onChange={this.onCountChange} /></Table.Cell>
            <Table.Cell>{unit.unit.points * unit.count}</Table.Cell>
            <Table.Cell>
                <Button onClick={() => this.props.warscrollStore!.removeUnit(this.props.unit)}><Icon name="remove"/></Button>
            </Table.Cell></Table.Row>;
    }

    private toggleGeneral = (event: React.FormEvent<Checkbox>) => {
        this.props.warscrollStore!.setGeneral((event.target as any).checked ? this.props.unit : undefined);
    }

    private onCountChange = (value: number) => {
        this.props.warscrollStore!.setUnitCount(this.props.unit, value);
    }
}