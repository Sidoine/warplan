import React from "react";
import { observer } from "mobx-react-lite";
import BasketPopin from "./basket-popin";
import WarscrollPopin from "./warscroll-popin";
import ExportPopin from "./export-popin";
import { useStores } from "../stores";

function Popins() {
    const { uiStore } = useStores();
    return (
        <>
            {uiStore.basketPopin && <BasketPopin />}
            {uiStore.warscrollPopin && <WarscrollPopin />}
            {uiStore.exportPopin && <ExportPopin />}
        </>
    );
}

export default observer(Popins);
