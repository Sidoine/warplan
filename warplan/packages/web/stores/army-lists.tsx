import React, { createContext, useState } from "react";
import { action, computed, makeObservable } from "mobx";
import { ArmyList, SerializedArmyList, useArmyListStore } from "./army-list";
import {
    useArmyListGetAllCache,
    useArmyListService,
} from "../services/armyList-context";
import { ArmyList as ArmyListData } from "../services/views";
import { MapLoader } from "folke-service-helpers";
import { ArmyListController } from "../services/armyList";

export class ArmyListStore {
    constructor(
        private currentArmyList: ArmyList,
        private armyListService: ArmyListController,
        private armyListGetAllCache: MapLoader<ArmyListData[], []>
    ) {
        makeObservable(this);
    }

    @computed
    get armyLists() {
        return this.armyListGetAllCache.getValue() || [];
    }

    loadWarscroll(armyList: ArmyListData) {
        const warscroll: SerializedArmyList = JSON.parse(armyList.data);
        this.currentArmyList.loadSerializedWarscroll(warscroll);
        this.currentArmyList.save();
    }

    @action
    saveCurrentArmyList = async () => {
        if (!this.currentArmyList.id) {
            const data = JSON.stringify(this.currentArmyList.serialize());
            const name = this.currentArmyList.name;
            const result = await this.armyListService.create({ data, name });
            if (result.ok) {
                this.armyListGetAllCache.updateCache(
                    [],
                    this.armyLists.concat(result.value)
                );
                this.currentArmyList.id = result.value.id.toString();
            }
        } else {
            const data = JSON.stringify(this.currentArmyList.serialize());
            const existing = this.armyLists.find(
                (x) => x.id.toString() === this.currentArmyList.id
            );
            if (existing) {
                existing.data = data;
                existing.name = this.currentArmyList.name;
            }
            await this.armyListService.update(Number(this.currentArmyList.id), {
                data,
                name: this.currentArmyList.name,
            });
        }
        this.currentArmyList.save();
    };

    create = () => {
        this.currentArmyList.id = "";
        this.currentArmyList.loadSerializedWarscroll({
            name: "New",
            units: [],
            battalions: [],
        });
    };

    @action
    async removeWarscroll(armyList: ArmyListData) {
        this.armyListGetAllCache.updateCache(
            [],
            this.armyLists.filter((x) => x.id !== armyList.id)
        );
        await this.armyListService.delete(armyList.id);
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
