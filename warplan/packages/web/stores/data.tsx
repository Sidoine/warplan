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
import { overrideSonsOfBehemat } from "./overrides/behemat";
import beasts_of_chaos from "../assets/factions/beasts_of_chaos.svg";
import bonesplitterz from "../assets/factions/bonesplitterz.svg";
import cities_of_sigmar from "../assets/factions/cities_of_sigmar.svg";
import daughters_of_khaine from "../assets/factions/daughters_of_khaine.svg";
import flesh_eater_courts from "../assets/factions/flesh_eater_courts.svg";
import fyreslayers from "../assets/factions/fyreslayers.svg";
import gloomspite_gitz from "../assets/factions/gloomspite_gitz.svg";
import hedonites_of_slaanesh from "../assets/factions/hedonites_of_slaanesh.svg";
import idoneth_deepkin from "../assets/factions/idoneth_deepkin.svg";
import ironjawz from "../assets/factions/ironjawz.svg";
import kharadron_overlords from "../assets/factions/kharadron_overlords.svg";
import khorne_bloodbound from "../assets/factions/khorne_bloodbound.svg";
import lumineth_realmlords from "../assets/factions/lumineth_realmlords.svg";
import maggotkin_of_nurgle from "../assets/factions/maggotkin_of_nurgle.svg";
import nighthaunt from "../assets/factions/nighthaunt.svg";
import ogor_mawtribes from "../assets/factions/ogor_mawtribes.svg";
import ossiarch_bonereapers from "../assets/factions/ossiarch_bonereapers.svg";
import seraphon from "../assets/factions/seraphon.svg";
import skaven from "../assets/factions/skaven.svg";
import slaves_to_darkness from "../assets/factions/slaves_to_darkness.svg";
import stormcast_eternals_warrior from "../assets/factions/stormcast_eternals_warrior.svg";
import sylvaneth from "../assets/factions/sylvaneth.svg";
import tzeentch_arcanites from "../assets/factions/tzeentch_arcanites.svg";

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

        data.factions.beastsOfChaos.icon = beasts_of_chaos;
        data.factions.bonesplitterz.icon = bonesplitterz;
        data.factions.citiesOfSigmar.icon = cities_of_sigmar;
        data.factions.daughtersOfKhaine.icon = daughters_of_khaine;
        data.factions.fleshEaterCourts.icon = flesh_eater_courts;
        data.factions.fyreslayers.icon = fyreslayers;
        data.factions.gloomspiteGitz.icon = gloomspite_gitz;
        data.factions.hedonitesOfSlaanesh.icon = hedonites_of_slaanesh;
        data.factions.idonethDeepkin.icon = idoneth_deepkin;
        data.factions.ironjawz.icon = ironjawz;
        data.factions.kharadronOverlords.icon = kharadron_overlords;
        data.factions.khorne.icon = khorne_bloodbound;
        data.factions.luminethRealmLords.icon = lumineth_realmlords;
        data.factions.maggotkinOfNurgle.icon = maggotkin_of_nurgle;
        data.factions.nighthaunt.icon = nighthaunt;
        data.factions.ogorMawtribes.icon = ogor_mawtribes;
        data.factions.ossiarchBonereapers.icon = ossiarch_bonereapers;
        data.factions.seraphon.icon = seraphon;
        data.factions.skaven.icon = skaven;
        data.factions.slavesToDarkness.icon = slaves_to_darkness;
        data.factions["stormcastEternals"].icon = stormcast_eternals_warrior;
        data.factions.sylvaneth.icon = sylvaneth;
        data.factions.tzeentch.icon = tzeentch_arcanites;

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
        overrideSonsOfBehemat(data);

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
