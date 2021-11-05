import React from "react";
import { observer } from "mobx-react-lite";
import BasketPopin from "./basket-popin";
import ArmyListsManager from "./army-lists-manager";
import ExportPopin from "./export-popin";
import { useStores } from "../stores";

function Popins() {
    const { uiStore } = useStores();
    return (
        <>
            {uiStore.basketPopin && <BasketPopin />}
            {uiStore.warscrollPopin && <ArmyListsManager />}
            {uiStore.exportPopin && <ExportPopin />}
        </>
    );
}

export default observer(Popins);
