import { IconButton, Modal } from "@mui/material";
import React, { useCallback, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { UnitWarscrollView } from "../components/unit-warscroll";
import BattalionWarscroll from "../components/battalion-warscroll";
import { WarscrollItem } from "../stores/warscroll";

function WarscrollButton({ item: item }: { item: WarscrollItem }) {
    const [warscrollOpen, setWarscrollOpen] = useState<WarscrollItem | null>(
        null
    );
    const handleOpenWarscroll = useCallback(
        (unit: WarscrollItem) => setWarscrollOpen(unit),
        []
    );
    const handleCloseWarscroll = useCallback(() => setWarscrollOpen(null), []);

    return (
        <>
            <IconButton onClick={() => handleOpenWarscroll(item)} size="small">
                <VisibilityIcon />
            </IconButton>
            <Modal open={warscrollOpen !== null} onClose={handleCloseWarscroll}>
                <>
                    {warscrollOpen && warscrollOpen.type === "unit" && (
                        <UnitWarscrollView wu={warscrollOpen} />
                    )}
                    {warscrollOpen && warscrollOpen.type === "battalion" && (
                        <BattalionWarscroll battalion={warscrollOpen} />
                    )}
                </>
            </Modal>
        </>
    );
}

export default WarscrollButton;
