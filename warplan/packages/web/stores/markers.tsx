import { action, computed, observable, makeObservable } from "mobx";
import {
    AbilityCategory,
    Ability,
    AbilityEffect,
    ItemWithAbilities,
    AuraType,
} from "../../common/data";
import { DataStore, useDataStore } from "./data";
import { getAbilityPhases, getEffectPhases, getEffectText } from "./battle";
import elite from "../assets/elite.svg";
import { ArmyList, useArmyListStore } from "./army-list";
import { createContext, useState } from "react";
import React from "react";

export const enum MarkerType {
    Terrain,
    Spell,
    Command,
}

export interface Marker {
    text: string;
    condition?: string;
    description: string;
    id: string;
    type?: MarkerType;
    tooltip?: string;
    image?: string;
}

function getMarker(
    effect: AbilityEffect,
    ability: Ability,
    effectIndex: number,
    unit: ItemWithAbilities,
    dataStore: DataStore
): Marker {
    const descriptions = getEffectText(effect, unit, dataStore);
    return {
        id: ability.id + effectIndex,
        description: descriptions
            .map((x) => x.descriptions.join(" - "))
            .join(" and "),
        condition: descriptions
            .filter((x) => x.condition !== undefined)
            .map((x) => x.condition)
            .join(" and "),
        text: ability.name,
        type:
            ability.category === AbilityCategory.Command
                ? MarkerType.Command
                : MarkerType.Spell,
        tooltip: ability.description,
    };
}

function hasMarker(
    effect: AbilityEffect,
    effectPhases: number,
    abilityPhases: number
) {
    return (
        (effectPhases > 0 && effect.subPhase !== undefined) ||
        (effectPhases & ~abilityPhases) > 0
    );
}

interface SerializedMarkers {
    hiddenMarkers: string[];
    terrains?: boolean;
    generics?: boolean;
    warscrolls?: boolean;
}

export class MarkersStore {
    serial = 1;

    @observable showTerrains = true;
    @observable showGenerics = true;
    @observable showWarscrolls = true;

    @observable
    hiddenMarkers = new Map<string, boolean>();

    @action toggleShowTerrains = () => {
        this.showTerrains = !this.showTerrains;
        this.save();
    };
    @action toggleShowGenerics = () => {
        this.showGenerics = !this.showGenerics;
        this.save();
    };
    @action toggleShowWarscrolls = () => {
        this.showWarscrolls = !this.showWarscrolls;
        this.save();
    };

    terrainMarkers: Marker[] = [
        {
            id: "damned",
            text: "Damned",
            condition: "Sacrifice",
            description: "D3 MW/+1 hit",
            type: MarkerType.Terrain,
        },
        {
            id: "arcane",
            text: "Arcane",
            description: "+1 cast/disp",
            type: MarkerType.Terrain,
        },
        {
            id: "inspiring",
            text: "Inspiring",
            description: "+1 bravery",
            type: MarkerType.Terrain,
        },
        {
            id: "deadly",
            text: "Deadly",
            condition: "Move/charge",
            description: "1: D3 MW",
            type: MarkerType.Terrain,
        },
        {
            id: "mystical",
            text: "Mystical",
            condition: "W/MW",
            description: "6+ ward",
            type: MarkerType.Terrain,
        },
        {
            id: "sinister",
            text: "Sinister",
            description: "-1 bravery",
            type: MarkerType.Terrain,
        },
    ];

    genericMarkers: Marker[] = [
        {
            id: "Mystic shield",
            text: "Mystic shield",
            description: "RR1 Save",
            type: MarkerType.Spell,
        },
        {
            id: "All-out Attack",
            text: "All-out Attack",
            description: "RR1 Hit",
            type: MarkerType.Command,
        },
        {
            id: "All-out Defence",
            text: "All-out Defence",
            description: "RR1 Save",
            type: MarkerType.Command,
        },
        {
            id: "Volley Fire",
            text: "Volley Fire",
            description: "RR1 Hit",
            type: MarkerType.Command,
        },
        {
            id: "Command Point 1",
            text: "Command Point",
            description: "",
            image: elite,
        },
        {
            id: "Command Point 2",
            text: "Command Point",
            description: "",
            image: elite,
        },
        {
            id: "Command Point 3",
            text: "Command Point",
            description: "",
            image: elite,
        },
        {
            id: "Command Point 4",
            text: "Command Point",
            description: "",
            image: elite,
        },
    ];

    @computed
    get unitAbilities() {
        // const allegiance = this.warscrollStore.warscroll.allegiance;
        // const allegianceKeyword = allegiance.keywords[0];
        // const units = this.unitStore.unitList.filter((x) =>
        //     x.keywords.includes(allegianceKeyword)
        // );
        const abilities: Ability[] = [];
        // for (const unit of units) {
        //     if (unit.abilities) {
        //         for (const ability of unit.abilities) {
        //             abilities.push(ability);
        //         }
        //     }
        //     if (unit.commandAbilities) {
        //         for (const ability of unit.commandAbilities) {
        //             abilities.push(ability);
        //         }
        //     }
        // }
        // const extraAbilities = this.unitStore.extraAbilities.filter(
        //     (x) => x.allegianceKeyword === allegianceKeyword
        // );
        // for (const extraAbility of extraAbilities) {
        //     abilities.push(extraAbility.ability);
        // }
        return abilities;
    }

    @computed
    get markers(): Marker[] {
        const warscroll = this.warscrollStore;
        const abilities = warscroll.armyAndUnitsAbilities;
        const markers: Marker[] = [];
        for (const { ability, item } of abilities) {
            if (ability.effects) {
                const abilityPhases = getAbilityPhases(ability);
                let index = 0;
                for (const effect of ability.effects) {
                    const effectPhases = getEffectPhases(effect);
                    if (
                        abilityPhases > 0 &&
                        hasMarker(effect, effectPhases, abilityPhases)
                    ) {
                        markers.push(
                            getMarker(
                                effect,
                                ability,
                                index,
                                item,
                                this.unitStore
                            )
                        );
                    }

                    if (effect.auras) {
                        for (const aura of effect.auras) {
                            if (
                                aura.type === AuraType.Attack &&
                                aura.effectsOnHitUnmodified6
                            ) {
                                for (const triggeredEffect of aura.effectsOnHitUnmodified6) {
                                    const triggeredEffectPhases =
                                        getEffectPhases(triggeredEffect);
                                    if (
                                        hasMarker(
                                            triggeredEffect,
                                            triggeredEffectPhases,
                                            effectPhases
                                        )
                                    ) {
                                        markers.push(
                                            getMarker(
                                                triggeredEffect,
                                                ability,
                                                this.serial++,
                                                item,
                                                this.unitStore
                                            )
                                        );
                                    }
                                }
                            }
                        }
                    }

                    index++;
                }
            }
        }
        return markers;
    }

    constructor(
        private warscrollStore: ArmyList,
        public unitStore: DataStore // TODO
    ) {
        makeObservable(this);
        this.load();
    }

    @action
    setText(marker: Marker, text: string) {
        marker.text = text;
        this.save();
    }

    @action
    load() {
        const serialized = localStorage.getItem("markers");
        if (serialized === null) return;

        this.markers.splice(0);
        const markers: SerializedMarkers = JSON.parse(serialized);
        for (const marker of markers.hiddenMarkers) {
            this.hiddenMarkers.set(marker, true);
        }
        this.showGenerics = markers.generics || false;
        this.showTerrains = markers.terrains || false;
        this.showWarscrolls = markers.warscrolls || false;
    }

    save() {
        const serialized: SerializedMarkers = {
            hiddenMarkers: Array.from(this.hiddenMarkers)
                .filter((x) => x[1])
                .map((x) => x[0]),
        };
        serialized.generics = this.showGenerics;
        serialized.terrains = this.showTerrains;
        serialized.warscrolls = this.showWarscrolls;
        localStorage.setItem("markers", JSON.stringify(serialized));
    }

    @action
    toggleMarker(marker: Marker) {
        this.hiddenMarkers.set(
            marker.id,
            !(this.hiddenMarkers.get(marker.id) || false)
        );
        this.save();
    }
}

const MarkersStoreContext = createContext<MarkersStore | null>(null);

export function MarkersStoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const armyListStore = useArmyListStore();
    const dataStore = useDataStore();
    const [data] = useState(() => new MarkersStore(armyListStore, dataStore));
    return (
        <MarkersStoreContext.Provider value={data}>
            {children}
        </MarkersStoreContext.Provider>
    );
}

export function useMarkersStore() {
    const dataStore = React.useContext(MarkersStoreContext);
    if (!dataStore) {
        throw new Error(
            "useMarkersStore must be used within a MarkersStoreProvider"
        );
    }
    return dataStore;
}
