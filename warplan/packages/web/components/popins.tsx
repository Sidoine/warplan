import React from "react";
import { observer } from "mobx-react-lite";
import BasketPopin from "./basket-popin";
import ArmyListsManager from "./army-lists-manager";
import ExportPopin from "./export-popin";
import { useUiStore } from "../stores/ui";

function Popins() {
    const uiStore = useUiStore();
    return (
        <>
            {uiStore.basketPopin && <BasketPopin />}
            {uiStore.warscrollPopin && <ArmyListsManager />}
            {uiStore.exportPopin && <ExportPopin />}
        </>
    );
}

export default observer(Popins);
