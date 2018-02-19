import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { Panel, Table } from "react-bootstrap";
import { BoxesList } from "./boxes-list";
import { BasketStore } from "../stores/basket";

export interface MissingsListProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
}


@inject('unitsStore', "basketStore")
@observer
export class MissingsList extends React.Component<MissingsListProps, {}> {
    render() {
        const neededModels = this.props.basketStore!.missingModels;        

        return <Panel>
            <Panel.Heading>Missings list</Panel.Heading>
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>In basket</th>
                    <th>Buy</th>
                    </tr>
                </thead>
                <tbody>
            {
                neededModels.map(x => <tr key={x.id}><td>{x.model.name}</td><td>{x.count}</td><td>{x.inBasket}</td><td><BoxesList model={x.model} title="Buy" /></td></tr>)
            }
                </tbody>
            </Table>
            </Panel>;
    }
}