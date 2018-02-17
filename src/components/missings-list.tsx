import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { Panel, Table } from "react-bootstrap";
import { BoxesList } from "./boxes-list";

export interface MissingsListProps {
    unitsStore?: UnitsStore;
}


@inject('unitsStore')
@observer
export class MissingsList extends React.Component<MissingsListProps, {}> {
    render() {
        const neededModels = this.props.unitsStore!.missingModels;        

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
                neededModels.filter(x => x.count > 0).map(x => <tr key={x.id}><td>{x.model.name}</td><td>{x.count}</td><td>{x.inBasket}</td><td><BoxesList model={x.model} title="Buy" /></td></tr>)
            }
                </tbody>
            </Table>
            </Panel>;
    }
}