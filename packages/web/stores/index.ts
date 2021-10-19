import React, { useContext } from "react";
import { ImportedDataStore } from "../../common/data";
import { DataStore } from "./data";
import { UiStore } from "./ui";
import { OwnedStore } from "./owned";
import { BasketStore } from "./basket";
import { MarkersStore } from "./markers";
import { CardsStore } from "./cards";
import { BattleStore } from "./battle";
import { ImportedDataStoreImpl } from "./imported-data";
import { ArmyListStore } from "./army-list";

interface Stores {
    dataStore: ImportedDataStore;
    unitsStore: DataStore;
    uiStore: UiStore;
    armyListStore: ArmyListStore;
    ownedStore: OwnedStore;
    basketStore: BasketStore;
    markersStore: MarkersStore;
    cardsStore: CardsStore;
    battleStore: BattleStore;
}

export function newStores(): Stores {
    const dataStore = new ImportedDataStoreImpl();
    const unitsStore = new DataStore(dataStore);
    const uiStore = new UiStore(unitsStore);
    const armyListStore = new ArmyListStore(unitsStore, uiStore);
    const ownedStore = new OwnedStore(unitsStore);
    const basketStore = new BasketStore(unitsStore, armyListStore, ownedStore);
    const markersStore = new MarkersStore(armyListStore, unitsStore);
    const cardsStore = new CardsStore();
    const battleStore = new BattleStore(unitsStore, armyListStore);
    return {
        dataStore,
        unitsStore,
        uiStore,
        armyListStore,
        ownedStore,
        basketStore,
        markersStore,
        cardsStore,
        battleStore,
    };
}

export const StoreContext = React.createContext<Stores>(newStores());

export function useStores(): Stores {
    return useContext(StoreContext);
}
