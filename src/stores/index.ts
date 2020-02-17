import { MobXProviderContext } from "mobx-react";
import React from "react";
import { DataStore, UnitsStore } from "./units";
import { UiStore } from "./ui";
import { WarscrollStore } from "./warscroll";
import { OwnedStore } from "./owned";
import { BasketStore } from "./basket";
import { MarkersStore } from "./markers";
import { CardsStore } from "./cards";
import { BattleStore } from "./battle";
import { DataStoreImpl } from "./imported-data";

interface Stores {
    dataStore: DataStore;
    unitsStore: UnitsStore;
    uiStore: UiStore;
    warscrollStore: WarscrollStore;
    ownedStore: OwnedStore;
    basketStore: BasketStore;
    markersStore: MarkersStore;
    cardsStore: CardsStore;
    battleStore: BattleStore;
}

export function newStores(): Stores {
    const dataStore = new DataStoreImpl();
    const unitsStore = new UnitsStore(dataStore);
    const uiStore = new UiStore(unitsStore);
    const warscrollStore = new WarscrollStore(unitsStore, uiStore);
    const ownedStore = new OwnedStore(unitsStore);
    const basketStore = new BasketStore(unitsStore, warscrollStore, ownedStore);
    const markersStore = new MarkersStore(warscrollStore, unitsStore);
    const cardsStore = new CardsStore();
    const battleStore = new BattleStore(unitsStore);
    return {
        dataStore,
        unitsStore,
        uiStore,
        warscrollStore,
        ownedStore,
        basketStore,
        markersStore,
        cardsStore,
        battleStore
    };
}

export function useStores(): Stores {
    return React.useContext(MobXProviderContext);
}
