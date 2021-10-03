import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { UnitWarscroll } from "../stores/warscroll";
import {
    TableRow,
    TableCell,
    Button,
    IconButton,
    Modal
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useStores } from "../stores";
import { UnitWarscrollView } from "./unit-warscroll";

export interface WarscrollSceneryEditProps {
    scenery: UnitWarscroll;
}

function WarscrollSceneryEdit({ scenery }: WarscrollSceneryEditProps) {
    const { armyListStore: warscrollStore } = useStores();
    const [warscrollOpen, setWarscrollOpen] = useState<UnitWarscroll | null>(
        null
    );
    const handleOpenWarscroll = useCallback(() => setWarscrollOpen(scenery), [
        scenery
    ]);
    const handleCloseWarscroll = useCallback(() => setWarscrollOpen(null), []);

    return (
        <TableRow>
            <TableCell>
                {scenery.definition.name}
                <IconButton onClick={handleOpenWarscroll} size="small">
                    <VisibilityIcon />
                </IconButton>
                <Modal
                    open={warscrollOpen !== null}
                    onClose={handleCloseWarscroll}
                >
                    <>
                        <UnitWarscrollView wu={warscrollOpen} />
                    </>
                </Modal>
            </TableCell>
            <TableCell>{scenery.definition.points}</TableCell>
            <TableCell>
                <Button onClick={() => warscrollStore.removeUnit(scenery)}>
                    <DeleteIcon />
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default observer(WarscrollSceneryEdit);
