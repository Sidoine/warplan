import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { BoxesList } from "./boxes-list";
import { BasketStore } from "../stores/basket";
import { Header, Table } from "semantic-ui-react";

export interface MissingsListProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
}


@inject('unitsStore', "basketStore")
@observer
export class MissingsList extends React.Component<MissingsListProps, {}> {
    render() {
        const neededModels = this.props.basketStore!.missingModels;        

        return <div>
            <Header>Missings list</Header>
            <Table>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Count</Table.HeaderCell>
                    <Table.HeaderCell>In basket</Table.HeaderCell>
                    <Table.HeaderCell>Buy</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
            {
                neededModels.map(x => <Table.Row key={x.id}>
                    <Table.Cell>{x.model.name}</Table.Cell>
                    <Table.Cell>{x.count}</Table.Cell>
                    <Table.Cell>{x.inBasket}</Table.Cell>
                    <Table.Cell><BoxesList model={x.model} title="Buy" /></Table.Cell>
                </Table.Row>)
            }
                </Table.Body>
            </Table>
            </div>;
    }
}