import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import NumberControl from "../atoms/number-control";
import { OwnedModel, useOwnedStore } from "../stores/owned";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export interface OwnedModelEditProps {
    model: OwnedModel;
}

export const OwnedModelEdit = observer(({ model }: OwnedModelEditProps) => {
    const ownedStore = useOwnedStore();
    const handleNumberChange = useCallback(
        (x) => ownedStore.setOwnedCount(model, x),
        [model, ownedStore]
    );
    const handleRemove = useCallback(
        () => ownedStore.removeOwned(model),
        [model, ownedStore]
    );
    return (
        <tr>
            <td>{model.model.name}</td>
            <td>
                <NumberControl
                    value={model.count}
                    min={0}
                    onChange={handleNumberChange}
                />
            </td>
            <td>{model.model.publicationYear}</td>
            <td>
                <IconButton onClick={handleRemove} size="large">
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
});
