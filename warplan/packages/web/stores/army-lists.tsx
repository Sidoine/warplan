import React, { createContext, useState } from "react";
import { action, makeObservable, observable, toJS } from "mobx";
import { ArmyList, SerializedArmyList, useArmyListStore } from "./army-list";
import {
    useArmyListGetAllCache,
    useArmyListService,
} from "../services/armyList-context";
import { ArmyList as ArmyListData } from "../services/views";
import { MapLoader } from "folke-service-helpers";
import { ArmyListController } from "../services/armyList";

function getWarscrollItem(name: string) {
    return `warscroll/${name}`;
}

export class ArmyListStore {
    @observable
    armyLists: string[] = [];

    constructor(
        private currentArmyList: ArmyList,
        private armyListService: ArmyListController,
        private armyListGetAllCache: MapLoader<ArmyListData[], []>
    ) {
        makeObservable(this);
        const warscrolls = localStorage.getItem("warscrolls");
        if (warscrolls !== null) {
            this.armyLists = JSON.parse(warscrolls);
        }
    }

    loadWarscroll(name: string) {
        const serializedWarscroll = localStorage.getItem(
            getWarscrollItem(name)
        );
        if (serializedWarscroll === null) return;
        const warscroll: SerializedArmyList = JSON.parse(serializedWarscroll);
        this.currentArmyList.loadSerializedWarscroll(warscroll);
        this.currentArmyList.save();
    }

    @action
    saveCurrentArmyList() {
        const name = this.currentArmyList.name;
        const data = JSON.stringify(this.currentArmyList.serialize());
        localStorage.setItem(getWarscrollItem(name), data);
        if (this.armyLists.indexOf(name) < 0) this.armyLists.push(name);
        this.armyListService.create({ data, name });
        this.saveArmyLists();
    }

    create = () => {
        this.currentArmyList.loadSerializedWarscroll({
            name: "New",
            units: [],
            battalions: [],
        });
    };

    @action
    removeWarscroll(name: string) {
        localStorage.removeItem(getWarscrollItem(name));
        this.armyLists.splice(this.armyLists.indexOf(name), 1);
        this.saveArmyLists();
    }

    private saveArmyLists() {
        localStorage.setItem(
            "warscrolls",
            JSON.stringify(toJS(this.armyLists))
        );
    }
}

const ArmyListStoreContext = createContext<ArmyListStore | null>(null);

export function ArmyListsStoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentArmyList = useArmyListStore();
    const armyListService = useArmyListService();
    const armyListGetAll = useArmyListGetAllCache();
    const [data] = useState(
        () =>
            new ArmyListStore(currentArmyList, armyListService, armyListGetAll)
    );
    return (
        <ArmyListStoreContext.Provider value={data}>
            {children}
        </ArmyListStoreContext.Provider>
    );
}

export function useArmyListsStore() {
    const dataStore = React.useContext(ArmyListStoreContext);
    if (!dataStore) {
        throw new Error(
            "useArmyListsStore must be used within a ArmyListsStoreProvider"
        );
    }
    return dataStore;
}
