import { action, computed } from "mobx";
import { WarscrollStore } from "./warscroll";
import {
    AbilityCategory,
    Phase,
    UnitsStore,
    Ability,
    AbilityEffect
} from "./units";
import { getAbilityPhases, getEffectPhases } from "./battle";
import { getValue } from "./combat";

export const enum MarkerType {
    Terrain,
    Spell,
    Command
}

export interface Marker {
    text: string;
    condition?: string;
    description: string;
    id: number;
    type: MarkerType;
    tooltip?: string;
}

function getMarker(
    effect: AbilityEffect,
    ability: Ability,
    id: number
): Marker {
    let description: string[] = [];
    let condition: string | undefined;
    if (effect.attackAura) {
        if (effect.attackAura.phase) {
            condition =
                effect.attackAura.phase === Phase.Shooting
                    ? "Shooting"
                    : "Combat";
        }
        if (effect.attackAura.rerollHitsOn1) {
            description.push("RR1 hit");
        }
        if (effect.attackAura.bonusRend) {
            description.push(`${effect.attackAura.bonusRend} Rend`);
        }
        if (effect.attackAura.rerollFailedWounds) {
            description.push("RR Wound");
        }
        if (effect.attackAura.bonusWoundRoll) {
            description.push(
                `+${getValue(effect.attackAura.bonusWoundRoll)} Wound`
            );
        }
        if (effect.attackAura.rerollFailedHits) {
            description.push("RR Hit");
        }
        if (effect.attackAura.malusHitRoll) {
            description.push(
                `-${getValue(effect.attackAura.malusHitRoll)} Hit`
            );
        }
        if (effect.attackAura.noPileIn) {
            description.push("No pile-in");
        }
        if (effect.attackAura.bonusAttacks) {
            description.push(`+${effect.attackAura.bonusAttacks} Atk`);
        }
    }
    if (effect.defenseAura) {
        if (effect.defenseAura.rerollFailedSaves) {
            description.push("RR Save");
        }
        if (effect.defenseAura.bonusSave) {
            description.push(`+${effect.defenseAura.bonusSave} Save`);
        }
        if (effect.defenseAura.rerollSavesOn1) {
            description.push("RR1 Save");
        }
        if (effect.defenseAura.rerollHitOn1) {
            description.push("RR1 Enemy Hit");
        }
        if (effect.defenseAura.rerollHitOn6) {
            description.push("RR6 Enemy Hit");
        }
        if (effect.defenseAura.healOnSave7) {
            description.push(`Save 7+: ${effect.defenseAura.healOnSave7} heal`);
        }
        if (effect.defenseAura.bonusHitRoll) {
            description.push(`+${effect.defenseAura.bonusHitRoll} Enemy Hit`);
        }
        if (effect.defenseAura.bonusWoundRoll) {
            description.push(
                `+${effect.defenseAura.bonusWoundRoll} Enemy Wound`
            );
        }
        if (effect.defenseAura.malusHitRoll) {
            description.push(`-${effect.defenseAura.malusHitRoll} Enemy Hit`);
        }
        if (effect.defenseAura.phase) {
            condition =
                effect.defenseAura.phase === Phase.Shooting
                    ? "Shooting"
                    : "Combat";
        }
    }
    if (effect.movementAura) {
        if (effect.movementAura.allowChargeAfterRunOrRetreat) {
            description.push("Charge after Run/Retreat");
        }
    }
    if (effect.chargeAura) {
        if (effect.chargeAura.bonus) {
            description.push(`+${effect.chargeAura.bonus} Charge`);
        }
    }
    if (effect.spellAura) {
        if (effect.spellAura.noCast) {
            description.push("No cast");
        }
    }
    return {
        id: id,
        description: description.join(" - "),
        condition: condition,
        text: ability.name,
        type:
            ability.category === AbilityCategory.Command
                ? MarkerType.Command
                : MarkerType.Spell,
        tooltip: ability.description
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

export class MarkersStore {
    serial = 1;

    terrainMarkers: Marker[] = [
        {
            id: this.serial++,
            text: "Damned",
            condition: "Sacrifice",
            description: "D3 MW/RR1 hit",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Arcane",
            description: "+1 casting",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Inspiring",
            description: "+1 bravery",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Deadly",
            condition: "Move",
            description: "1: D3 MW",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Mystical",
            condition: "W/MW",
            description: "6+: negated",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Overgrown",
            condition: "On ground",
            description: "Cut visibility",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Entangling",
            description: "-2 run/charge",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Volcalnic",
            description: "6: D3 MW",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Commanding",
            description: "+1 CP",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Healing",
            description: "6: D3 heal",
            type: MarkerType.Terrain
        },
        {
            id: this.serial++,
            text: "Nullification",
            condition: "HEROES",
            description: "+1 unbind",
            type: MarkerType.Terrain
        }
    ];

    genericMarkers: Marker[] = [
        {
            id: this.serial++,
            text: "Mystic shield",
            description: "RR1 Save",
            type: MarkerType.Spell
        },
        {
            id: this.serial++,
            text: "All-out Attack",
            description: "RR1 Hit",
            type: MarkerType.Command
        },
        {
            id: this.serial++,
            text: "All-out Defence",
            description: "RR1 Save",
            type: MarkerType.Command
        },
        {
            id: this.serial++,
            text: "Volley Fire",
            description: "RR1 Hit",
            type: MarkerType.Command
        }
    ];

    @computed
    get unitAbilities() {
        const allegiance = this.warscrollStore.warscroll.allegiance;
        const allegianceKeyword = allegiance.keywords[0];
        const units = this.unitStore.unitList.filter(x =>
            x.keywords.includes(allegianceKeyword)
        );
        const abilities: Ability[] = [];
        for (const unit of units) {
            if (unit.abilities) {
                for (const ability of unit.abilities) {
                    abilities.push(ability);
                }
            }
            if (unit.commandAbilities) {
                for (const ability of unit.commandAbilities) {
                    abilities.push(ability);
                }
            }
        }
        const extraAbilities = this.unitStore.extraAbilities.filter(
            x => x.allegianceKeyword === allegianceKeyword
        );
        for (const extraAbility of extraAbilities) {
            abilities.push(extraAbility.ability);
        }
        return abilities;
    }

    @computed
    get markers(): Marker[] {
        const warscroll = this.warscrollStore.warscroll;
        const abilities = warscroll.allegianceAbilities.concat(
            this.unitAbilities
        );
        const markers: Marker[] = [];
        for (const ability of abilities) {
            if (ability.effects) {
                const abilityPhases = getAbilityPhases(ability);
                for (const effect of ability.effects) {
                    const effectPhases = getEffectPhases(effect);
                    if (
                        abilityPhases > 0 &&
                        hasMarker(effect, effectPhases, abilityPhases)
                    ) {
                        markers.push(getMarker(effect, ability, this.serial++));
                    }
                    if (
                        effect.attackAura &&
                        effect.attackAura.effectsOnHitUnmodified6
                    ) {
                        for (const triggeredEffect of effect.attackAura
                            .effectsOnHitUnmodified6) {
                            const triggeredEffectPhases = getEffectPhases(
                                triggeredEffect
                            );
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
                                        this.serial++
                                    )
                                );
                            }
                        }
                    }
                }
            }
        }
        return markers;
    }

    constructor(
        private warscrollStore: WarscrollStore,
        private unitStore: UnitsStore
    ) {}

    @action
    setText(marker: Marker, text: string) {
        marker.text = text;
        this.save();
    }

    // @action
    // load() {
    //     this.markers = [
    //         {
    //             id: this.serial++,
    //             text: "Lightshard",
    //             condition: '12"',
    //             description: "RR Hit",
    //             type: MarkerType.Spell
    //         },
    //         {
    //             id: this.serial++,
    //             text: "Soul Cage",
    //             description: "Fight last/No retreat",
    //             type: MarkerType.Spell
    //         },
    //         {
    //             id: this.serial++,
    //             text: "Reaping Scythe",
    //             description: "RR Hit/RR Wound",
    //             type: MarkerType.Spell
    //         },
    //         {
    //             id: this.serial++,
    //             text: "Shademist",
    //             description: "-1 Wound",
    //             type: MarkerType.Spell
    //         },
    //         {
    //             id: this.serial++,
    //             text: "Spectral Overseer",
    //             condition: '12"',
    //             description: "+1 Hit",
    //             type: MarkerType.Command
    //         },
    //         {
    //             id: this.serial++,
    //             text: "Lord of Gheists",
    //             description: "+1 Attacks",
    //             type: MarkerType.Command
    //         }
    //     ];
    // const serialized = localStorage.getItem("markers");
    // if (serialized === null) return;

    // this.markers.splice(0);
    // const markers: SerializedMarkers = JSON.parse(serialized);
    // for (const marker of markers.markers) {
    //     this.markers.push({
    //         id: this.serial++,
    //         text: marker.text
    //     })
    // }
    // }

    save() {
        // const serialized: SerializedMarkers = {
        //     markers: this.markers.map(x => {
        //         return {
        //             text: x.text
        //         };
        //     })
        // }
        // localStorage.setItem("markers", JSON.stringify(serialized));
    }

    @action
    delete(marker: Marker) {
        this.markers.splice(this.markers.indexOf(marker), 1);
        this.save();
    }

    @action
    add() {
        this.save();
    }
}
