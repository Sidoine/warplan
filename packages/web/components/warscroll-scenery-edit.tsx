import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { WarscrollEndlessSpell } from "../stores/warscroll";
import {
    TableRow,
    TableCell,
    Button,
    IconButton,
    Modal,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { EndlessSpellWarscroll } from "./endless-spell-warscroll";
import { useStores } from "../stores";

export interface WarscrollSceneryEditProps {
    scenery: WarscrollEndlessSpell;
}

function WarscrollSceneryEdit({ scenery }: WarscrollSceneryEditProps) {
    const { warscrollStore } = useStores();
    const [
        warscrollOpen,
        setWarscrollOpen,
    ] = useState<WarscrollEndlessSpell | null>(null);
    const handleOpenWarscroll = useCallback(
        (unit: WarscrollEndlessSpell) => setWarscrollOpen(unit),
        []
    );
    const handleCloseWarscroll = useCallback(() => setWarscrollOpen(null), []);

    return (
        <TableRow>
            <TableCell>
                {scenery.definition.name}
                <IconButton
                    onClick={() => handleOpenWarscroll(scenery)}
                    size="small"
                >
                    <VisibilityIcon />
                </IconButton>
                <Modal
                    open={warscrollOpen !== null}
                    onClose={handleCloseWarscroll}
                >
                    <>
                        <EndlessSpellWarscroll wes={warscrollOpen} />
                    </>
                </Modal>
            </TableCell>
            <TableCell>{scenery.definition.points}</TableCell>
            <TableCell>
                <Button onClick={() => warscrollStore.removeScenery(scenery)}>
                    <DeleteIcon />
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default observer(WarscrollSceneryEdit);
