import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUiStore } from "../stores/ui";
import { useArmyListsStore } from "../stores/army-lists";

function WarscrollLine({ x, onClose }: { x: string; onClose: () => void }) {
    const warscrollStore = useArmyListsStore();
    const handleLoad = useCallback(() => {
        warscrollStore.loadWarscroll(x);
        onClose();
    }, [onClose, warscrollStore, x]);
    const handleDelete = useCallback(
        () => warscrollStore.removeWarscroll(x),
        [warscrollStore, x]
    );
    return (
        <div key={x}>
            {x}
            <Button onClick={handleLoad}>Load</Button>
            <Button onClick={handleDelete}>
                <DeleteIcon />
            </Button>
        </div>
    );
}

function ArmyListsManager() {
    const uiStore = useUiStore();
    const warscrollStore = useArmyListsStore();
     const handleClose = useCallback(
        () => uiStore.closeWarscrollPopin(),
        [uiStore]
    );
   
    return (
        <Dialog onClose={handleClose} open={true}>
            <DialogTitle>Warscrolls</DialogTitle>

            <DialogContentText>
                {warscrollStore.armyLists.map((x) => (
                    <WarscrollLine x={x} onClose={handleClose} key={x} />
                ))}                
            </DialogContentText>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default observer(ArmyListsManager);
