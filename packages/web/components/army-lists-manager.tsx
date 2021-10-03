import React, { ChangeEvent, useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
    Input
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStores } from "../stores";

function WarscrollLine({ x, onClose }: { x: string; onClose: () => void }) {
    const { armyListStore: warscrollStore } = useStores();
    const handleUpdate = useCallback(() => warscrollStore.saveWarscroll(x), [
        warscrollStore,
        x
    ]);
    const handleLoad = useCallback(() => {
        warscrollStore.loadWarscroll(x);
        onClose();
    }, [onClose, warscrollStore, x]);
    const handleDelete = useCallback(() => warscrollStore.removeWarscroll(x), [
        warscrollStore,
        x
    ]);
    return (
        <div key={x}>
            {x}
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleLoad}>Load</Button>
            <Button onClick={handleDelete}>
                <DeleteIcon />
            </Button>
        </div>
    );
}

function ArmyListsManager() {
    const { armyListStore: warscrollStore, uiStore } = useStores();
    const [warscrollName, setWarscrollName] = useState(
        warscrollStore.armyList.name
    );
    const handleClose = useCallback(() => uiStore.closeWarscrollPopin(), [
        uiStore
    ]);
    const handleInputChange = useCallback(
        (x: ChangeEvent<HTMLInputElement>) => setWarscrollName(x.target.value),
        []
    );

    return (
        <Dialog onClose={handleClose} open={true}>
            <DialogTitle>Warscrolls</DialogTitle>

            <DialogContentText>
                {warscrollStore.armyLists.map(x => (
                    <WarscrollLine x={x} onClose={handleClose} key={x} />
                ))}
                <Input
                    type="text"
                    value={warscrollName}
                    onChange={handleInputChange}
                />
                <Button
                    onClick={() => warscrollStore.saveWarscroll(warscrollName)}
                >
                    Add
                </Button>
            </DialogContentText>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default observer(ArmyListsManager);
