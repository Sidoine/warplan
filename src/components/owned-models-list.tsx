import * as React from "react";
import { observer, inject } from "mobx-react";
import { OwnedModelEdit } from "./owned-model-edit";
import { Panel, Table } from "react-bootstrap";
import { ModelsList } from "./models-list";
import { OwnedStore } from "../stores/owned";

export interface OwnedModelsListProps {
    ownedStore?: OwnedStore;
}

@inject("ownedStore")
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
                    this.props.ownedStore!.ownedModels.map(x => <OwnedModelEdit key={x.id} model={x}/>)
                }
                </tbody>
            </Table>
            <Panel.Footer>
                <ModelsList title="Add"/>
            </Panel.Footer>
        </Panel>;
    }
}