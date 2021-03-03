import { IconButton, Modal } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";

import { EndlessSpellWarscroll } from "../components/endless-spell-warscroll";
import { UnitWarscroll } from "../components/unit-warscroll";
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
                    {warscrollOpen && warscrollOpen.type === "endless" && (
                        <EndlessSpellWarscroll wes={warscrollOpen} />
                    )}
                    {warscrollOpen && warscrollOpen.type === "unit" && (
                        <UnitWarscroll wu={warscrollOpen} />
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
