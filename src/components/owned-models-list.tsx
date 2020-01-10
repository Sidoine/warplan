import * as React from "react";
import { observer, inject } from "mobx-react";
import { OwnedModelEdit } from "./owned-model-edit";
import { ModelsList } from "./models-list";
import { OwnedStore } from "../stores/owned";
import { Table, TableCell, TableRow, TableHead, TableBody } from "@material-ui/core";

export interface OwnedModelsListProps {
    ownedStore?: OwnedStore;
}

@inject("ownedStore")
@observer
export class OwnedModelsList extends React.Component<OwnedModelsListProps, {}> {
    render() {
        return <div>
            <h1>Possessions</h1>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Count</TableCell>
                    <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    this.props.ownedStore!.ownedModels.map(x => <OwnedModelEdit key={x.id} model={x}/>)
                }
                </TableBody>
            </Table>
            <ModelsList title="Add..."/>
        </div>;
    }
}