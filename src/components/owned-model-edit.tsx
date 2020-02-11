import * as React from "react";
import { observer } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { OwnedModel } from "../stores/owned";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStores } from "../stores";

export interface OwnedModelEditProps {
    model: OwnedModel;
}

export const OwnedModelEdit = observer(({ model }: OwnedModelEditProps) => {
    const { ownedStore } = useStores();
    return (
        <tr>
            <td>{model.model.name}</td>
            <td>
                <NumberControl
                    value={model.count}
                    min={0}
                    onChange={x => ownedStore.setOwnedCount(model, x)}
                />
            </td>
            <td>
                <IconButton onClick={() => ownedStore.removeOwned(model)}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
});
