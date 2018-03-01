import * as React from "react";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";
import { Button, Table, Icon, Checkbox, CheckboxProps } from "semantic-ui-react";

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
                <div>{ unit.unit.size } <Icon name="user"/>
                { unit.unit.warscroll && <a target="_blank" href={unit.unit.warscroll}><Icon name="help circle outline"/></a>}
                 </div>
                <div>
                    <div><em>{unit.unit.subType}</em></div>
                    <div>{unit.isLeader && <><Checkbox toggle checked={unit === this.props.warscrollStore!.warscroll.general} onChange={this.toggleGeneral} ></Checkbox>General</> } </div>
                </div>
            </Table.Cell>
            <Table.Cell><NumberControl value={unit.count} onChange={this.onCountChange} /></Table.Cell>
            <Table.Cell>{unit.unit.points * unit.count}</Table.Cell>
            <Table.Cell>
                <Button onClick={() => this.props.warscrollStore!.removeUnit(this.props.unit)}><Icon name="remove"/></Button>
            </Table.Cell></Table.Row>;
    }

    private toggleGeneral = (event: React.SyntheticEvent<HTMLElement>, props: CheckboxProps) => {
        this.props.warscrollStore!.setGeneral(props.checked ? this.props.unit : undefined);
    }

    private onCountChange = (value: number) => {
        this.props.warscrollStore!.setUnitCount(this.props.unit, value);
    }
}