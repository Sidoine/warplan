import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    Stack,
    DialogContent,
    IconButton,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUiStore } from "../stores/ui";
import { useArmyListsStore } from "../stores/army-lists";
import { ArmyList } from "../services/views";

function WarscrollLine({ x, onClose }: { x: ArmyList; onClose: () => void }) {
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
        <Stack direction="row" spacing={1}>
            <Typography>{x.name}</Typography>
            <Button variant="outlined" onClick={handleLoad}>
                Load
            </Button>
            <IconButton onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </Stack>
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

            <DialogContent>
                <Stack spacing={1}>
                    {warscrollStore.armyLists.map((x) => (
                        <WarscrollLine x={x} onClose={handleClose} key={x.id} />
                    ))}
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClose}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default observer(ArmyListsManager);
