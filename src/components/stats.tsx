import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { Table } from "semantic-ui-react";

export interface StatsProps {
    uiStore?: UiStore;
}

@inject("uiStore")
@observer
export class Stats extends React.Component<StatsProps> {
    render() {
        return <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Points</Table.HeaderCell>
                    <Table.HeaderCell>Wounds</Table.HeaderCell>
                    <Table.HeaderCell>Move</Table.HeaderCell>
                    <Table.HeaderCell>Save</Table.HeaderCell>
                    <Table.HeaderCell>Bravery</Table.HeaderCell>
                    <Table.HeaderCell>Melee Damage</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    this.props.uiStore!.unitStats.map(x => <Table.Row id={x.unit.id}>
                            <Table.HeaderCell>{x.unit.model.name}</Table.HeaderCell>
                            <Table.Cell>{x.unit.points}</Table.Cell>
                            <Table.Cell>{x.unit.wounds} </Table.Cell>
                            <Table.Cell>{x.unit.move}</Table.Cell>
                            <Table.Cell>{x.save}</Table.Cell>
                            <Table.Cell>{x.unit.bravery}</Table.Cell>
                            <Table.Cell>{x.meleeDamage}</Table.Cell>
                        </Table.Row>)
                }
            </Table.Body>
        </Table>;
    }
}