import { ImportedDataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";
import { overrideNurgle } from "./overrides/nurgle";
import { overrideKhorne } from "./overrides/khorne";
import { overrideIdonethDeepkins } from "./overrides/idoneth-deepkins";
import { overrideEverchosen } from "./overrides/everchosen";
import { overrideSylvaneth } from "./overrides/sylvaneth";
import { overrideNighthaunt } from "./overrides/nighthaunt";
import { overrideOrder } from "./overrides/order";
import { overrideCommon } from "./overrides/common";
import { overrideOrruks } from "./overrides/orruks";
import { overrideGitz } from "./overrides/gitz";
import {
    Box,
    Ability,
    RealmOfBattle,
    Model,
    Unit,
    Battalion,
    Faction,
    AbilityGroup,
    BattalionGroup,
    Attack,
} from "../../common/data";
import { computed, makeObservable } from "mobx";
import { KeywordCategory } from "../../common/definitions";
import { overrideLumineths } from "./overrides/lumineths";
import React, { createContext, useState } from "react";

export class DataStore {
    serial = 100;

    modelsList: Model[] = [];
    unitList: Unit[] = [];
    battalions: Battalion[] = [];
    boxes: Box[];
    factions: { [key: string]: Faction };
    factionsList: Faction[] = [];
    baseAbilities: AbilityGroup[] = [];
    abilities: Record<string, Ability> = {};
    genericBattalionGroups: BattalionGroup[] = [];
    attacks: Record<string, Attack> = {};

    realms: RealmOfBattle[] = [];

    get factionOptions() {
        return this.factionsList
            .filter(
                (x) =>
                    x.category === KeywordCategory.Generic ||
                    x.category === KeywordCategory.RosterLevel
            )
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    get allegiances() {
        return this.factionsList.filter(
            (x) => x.category === KeywordCategory.RosterLevel
        );
    }

    constructor(data: ImportedDataStoreImpl) {
        makeObservable(this, {
            factionOptions: computed,
            allegiances: computed,
        });
        overrideStormcast(data);
        overrideNurgle(data);
        overrideSylvaneth(data);
        overrideEverchosen(data);
        overrideKhorne(data);
        overrideIdonethDeepkins(data);
        overrideNighthaunt(data);
        overrideOrder(data);
        overrideCommon(data);
        overrideOrruks(data);
        overrideGitz(data);
        overrideLumineths(data);

        const models: { [key: string]: Model } = data.models;
        for (const key in models) {
            this.modelsList.push(models[key]);
        }
        this.modelsList = this.modelsList.sort((a, b) =>
            a.name > b.name ? 1 : -1
        );

        const units: { [key: string]: Unit } = data.units;
        for (const key in units) {
            this.unitList.push(units[key]);
        }
        this.unitList = this.unitList.sort((a, b) =>
            a.name > b.name ? 1 : -1
        );

        const battalions: { [key: string]: Battalion } = data.battalions;
        for (const key in battalions) {
            this.battalions.push(battalions[key]);
        }

        const realms: { [key: string]: RealmOfBattle } = data.realms;
        for (const key in realms) {
            this.realms.push(realms[key]);
        }

        this.boxes = [];
        this.factions = data.factions;

        for (const key in this.factions) {
            this.factionsList.push(this.factions[key]);
        }

        this.abilities = data.abilities;

        this.baseAbilities = data.genericAbilityGroups;
        this.genericBattalionGroups = data.genericBattalionGroups;
        this.attacks = data.attacks;
    }

    findUnit(id: string) {
        return this.unitList.find((x) => x.id === id);
    }

    getUnit(id: string) {
        const unit = this.findUnit(id);
        if (!unit) throw Error(`Unit ${id} does not exist`);
        return unit;
    }

    getAbility(id: string) {
        return this.abilities[id];
    }

    getAttack(id: string) {
        return this.attacks[id];
    }
}

const DataStoreContext = createContext<DataStore | null>(null);

export function DataStoreProvider({ children }: { children: React.ReactNode }) {
    const [data] = useState(() => new DataStore(new ImportedDataStoreImpl()));
    return (
        <DataStoreContext.Provider value={data}>
            {children}
        </DataStoreContext.Provider>
    );
}

export function useDataStore() {
    const dataStore = React.useContext(DataStoreContext);
    if (!dataStore) {
        throw new Error("useDataStore must be used within a DataStoreProvider");
    }
    return dataStore;
}
