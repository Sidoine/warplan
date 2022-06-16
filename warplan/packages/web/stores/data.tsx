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
    AbilityCategory,
    TargetType,
    AuraType,
    EffectDuration,
    Phase,
    SubPhase,
    targetConditionValue,
} from "../../common/data";
import { computed, makeObservable } from "mobx";
import { KeywordCategory } from "../../common/definitions";
import { overrideLumineths } from "./overrides/lumineths";
import React, { createContext, useState } from "react";
import { overrideSonsOfBehemat } from "./overrides/behemat";

export class DataStore {
    serial = 100;

    modelsList: Model[] = [];
    unitList: Unit[] = [];
    battalions: Battalion[] = [];
    boxes: Box[];
    factions: { [key: string]: Faction };
    factionsList: Faction[] = [];
    genericAbilities: AbilityGroup[] = [];
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

        this.genericAbilities = data.genericAbilityGroups;
        this.genericBattalionGroups = data.genericBattalionGroups;
        this.attacks = data.attacks;

        const baseSpells: AbilityGroup = {
            id: "base-spells",
            name: "Base spells",
            category: AbilityCategory.Spell,
            abilities: [
                {
                    id: "mystic-shield",
                    name: "Mystic shield",
                    description:
                        "Mystic Shield is a spell that has a casting value of 5 and a range of 12″. If successfully cast, pick 1 friendly unit wholly within range and visible to the caster. Add 1 to save rolls for attacks that target that unit until your next hero phase.",
                    flavor: "The caster conjures up a shield of shimmering energy to protect themselves or an ally from harm.",
                    effects: [
                        {
                            spellCastingValue: 5,
                            targetRange: 12,
                            targetType: TargetType.Friend,
                            auras: [
                                {
                                    type: AuraType.Defense,
                                    bonusSave: 1,
                                    duration: EffectDuration.Round,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "arcane-bolt",
                    name: "Arcane bolt",
                    description:
                        "Arcane Bolt is a spell that has a casting value of 5 and a range of 12″. If successfully cast, at the start of any 1 phase before your next hero phase, you can pick 1 enemy unit within range and visible to the caster. That unit suffers 1 mortal wound. If that unit is within 3″ of the caster, it suffers D3 mortal wounds instead of 1.",
                    flavor: "The caster calls forth a ball of crackling arcane energy that hovers above their outstretched hand, ready to be hurled at a foe.",
                    effects: [
                        {
                            spellCastingValue: 5,
                            targetType: TargetType.Unit,
                            auras: [
                                {
                                    duration: EffectDuration.Round,
                                    type: AuraType.DifferedEffect,
                                    phase: Phase.Any,
                                    subPhase: SubPhase.Before,
                                    targetCondition: { range: 12, enemy: true },
                                    effect: {
                                        mortalWounds: targetConditionValue(
                                            { range: 3 },
                                            "D3",
                                            1
                                        ),
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        };
        this.baseAbilities.push(baseSpells);

        const baseCommands: AbilityGroup = {
            id: "base-commands",
            name: "Base commands",
            category: AbilityCategory.Command,
            abilities: [
                {
                    id: "rally",
                    name: "Rally",
                    description:
                        "You can use this command ability at the start of the hero phase. The unit that receives the command must be more than 3″ from all enemy units. Roll 1 dice for each slain model from that unit. For each 6, you can return 1 slain model to that unit.",
                    flavor: "At a shouted command, injured warriors stagger back to their feet and prepare to fight once more.",
                },
                {
                    id: "at-the-double",
                    name: "At the double",
                    description:
                        "You can use this command ability after you declare that a friendly unit will run. That unit must receive the command. The run roll is not made for that unit. Instead, 6″ is added to that unit’s Move characteristic in that phase. The unit is still considered to have run.",
                    flavor: "Eager for battle, the warriors pick up their pace and surge towards the enemy.",
                },
                {
                    id: "redeploy",
                    name: "Redeploy",
                    description:
                        "You can use this command ability in the enemy movement phase after an enemy unit finishes a normal move, run or retreat. The unit that receives the command must be within 9″ of that enemy unit and more than 3″ from all enemy units. You can make a D6″ move with the unit that receives the command, but it must finish the move more than 3″ from all enemy units and cannot shoot later in the turn.",
                    flavor: "As the enemy draw close, battle-hardened warriors adjust their position to leave their foe at a disadvantage.",
                },
                {
                    id: "forward-to-victory",
                    name: "Forward to Victory",
                    description:
                        "You can use this command ability after you make a charge roll for a friendly unit. That unit must receive the command. You can re-roll the charge roll for that unit.",
                    flavor: "Nothing will stop these ferocious warriors from reaching combat.",
                },
                {
                    id: "unleash-hell",
                    name: "Unleash Hell",
                    description:
                        'You can use this command ability after an enemy unit finishes a charge move. The unit that receives the command must be within 6" of that enemy unit and more than 3" from all other enemy units. Models in the unit that receives the command that are within 6" of the target unit can shoot in that phase, but when they do so, you must subtract 1 from hit rolls for their attacks and they can only target the unit that made the charge move.',
                    flavor: "These warriors have prepared their missile weapons so they can unleash a devastating volley at the last possible moment.",
                },
            ],
        };
        this.baseAbilities.push(baseCommands);
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
