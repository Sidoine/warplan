import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { OwnedModelEdit } from "./owned-model-edit";
import { Panel, Table } from "react-bootstrap";
import { ModelsList } from "./models-list";

export interface OwnedModelsListProps {
    unitsStore?: UnitsStore;
}

@inject('unitsStore')
@observer
export class OwnedModelsList extends React.Component<OwnedModelsListProps, {}> {
    render() {
        return <Panel>
            <Panel.Heading>Possessions</Panel.Heading>
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.unitsStore!.ownedModels.map(x => <OwnedModelEdit key={x.id} model={x}/>)
                }
                </tbody>
            </Table>
            <Panel.Footer>
                <ModelsList title="Add"/>
            </Panel.Footer>
        </Panel>;
    }
}