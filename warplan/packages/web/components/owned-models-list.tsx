import * as React from "react";
import { observer } from "mobx-react-lite";
import { OwnedModelEdit } from "./owned-model-edit";
import ModelsList from "./models-list";
import {
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
} from "@mui/material";
import { useOwnedStore } from "../stores/owned";

function OwnedModelsList() {
    const ownedStore = useOwnedStore();
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Created</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ownedStore.ownedModels
                        .slice()
                        .sort((a, b) => (a.model.name > b.model.name ? 1 : -1))
                        .map((x) => (
                            <OwnedModelEdit key={x.id} model={x} />
                        ))}
                </TableBody>
            </Table>
            <ModelsList title="Add..." />
        </>
    );
}

export default observer(OwnedModelsList);
