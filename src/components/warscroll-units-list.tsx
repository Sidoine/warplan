import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { UnitsList } from "./units-list";
import { WarscrollUnitEdit } from "./warscroll-unit-edit";
import { WarscrollStore } from "../stores/warscroll";
import { Table } from "semantic-ui-react";

export interface WarscrollUnitsListProps {
    unitsStore?: UnitsStore;
    warscrollStore?: WarscrollStore;
}

@inject('unitsStore', "warscrollStore")
@observer
export class WarscrollUnitsList extends React.Component<WarscrollUnitsListProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        return <div>
            <h1>Units</h1>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Count</Table.HeaderCell>
                        <Table.HeaderCell>Points</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>    
                    </Table.Row>
                </Table.Header>
                <Table.Body>
            {
                warscroll.units.map(x => <WarscrollUnitEdit key={x.id} unit={x}/>)
            }
                </Table.Body>
            </Table>
            <div>
                <span>{warscroll.unitsPoints} points</span>
                <UnitsList title="Add"/>
            </div>
            </div>;
    }
}