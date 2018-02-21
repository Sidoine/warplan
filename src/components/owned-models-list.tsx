import * as React from "react";
import { observer, inject } from "mobx-react";
import { OwnedModelEdit } from "./owned-model-edit";
import { ModelsList } from "./models-list";
import { OwnedStore } from "../stores/owned";
import { Header, Table } from "semantic-ui-react";

export interface OwnedModelsListProps {
    ownedStore?: OwnedStore;
}

@inject("ownedStore")
@observer
export class OwnedModelsList extends React.Component<OwnedModelsListProps, {}> {
    render() {
        return <div>
            <Header>Possessions</Header>
            <Table>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Count</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    this.props.ownedStore!.ownedModels.map(x => <OwnedModelEdit key={x.id} model={x}/>)
                }
                </Table.Body>
            </Table>
            <ModelsList title="Add..."/>
        </div>;
    }
}