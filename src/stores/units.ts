import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";
import { overrideNurgle } from "./overrides/nurgle";
import { overrideKhorne } from "./overrides/khorne";
import { overrideDevotedOfSigmar } from "./overrides/devoted-of-sigmar";
import { overrideWanderers } from "./overrides/wanderers";
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
    EndlessSpell,
    Ability,
    RealmOfBattle,
    ExtraAbility,
    Model,
    Unit,
    Battalion,
    Faction,
    AbilityCategory,
    TargetType,
    Phase
} from "./unit";
import { computed, makeObservable } from "mobx";
import { KeywordCategory } from "../tools/definitions2";

export class UnitsStore {
    serial = 100;

    extraAbilities: ExtraAbility[] = [];
    modelsList: Model[] = [];
    unitList: Unit[] = [];
    battalions: Battalion[] = [];
    boxes: Box[];
    factions: { [key: string]: Faction };
    factionsList: Faction[] = [];
    sceneryList: EndlessSpell[] = [];
    baseAbilities: Ability[] = [];

    realms: RealmOfBattle[] = [];

    get factionOptions() {
        return this.factionsList
            .filter(
                x =>
                    x.category === KeywordCategory.Generic ||
                    x.category === KeywordCategory.RosterLevel
            )
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    get allegiances() {
        return this.factionsList.filter(
            x => x.category === KeywordCategory.RosterLevel
        );
    }

    constructor(data: DataStoreImpl) {
        makeObservable(this, {
            factionOptions: computed,
            allegiances: computed
        });
        overrideStormcast(data);
        overrideNurgle(data);
        overrideSylvaneth(data);
        overrideEverchosen(data);
        overrideKhorne(data);
        overrideDevotedOfSigmar(data);
        overrideWanderers(data);
        overrideIdonethDeepkins(data);
        overrideNighthaunt(data);
        overrideOrder(data);
        overrideCommon(data);
        overrideOrruks(data);
        overrideGitz(data);

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

        // const allegiances: { [key: string]: Allegiance } = data.allegiances;
        // for (const key in allegiances) {
        //     this.allegianceList.push(allegiances[key]);
        // }
        // this.allegianceList = this.allegianceList.sort((a, b) =>
        //     a.name > b.name ? 1 : -1
        // );

        const extraAbilities: { [key: string]: ExtraAbility } =
            data.extraAbilities;
        for (const key in extraAbilities) {
            this.extraAbilities.push(extraAbilities[key]);
        }

        this.fillBaseAbilities();
        // this.armyOptions = data.armyOptions;

        const sceneries: { [key: string]: EndlessSpell } = data.sceneries;
        for (const key in sceneries) {
            this.sceneryList.push(sceneries[key]);
        }
    }

    private fillBaseAbilities() {
        this.baseAbilities.push({
            id: "at_the_double",
            name: "At the double",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability after you make a run roll for a friendly unit that is within 6" of a friendly Hero, or 12" of a friendly Hero that is a general. If you do so, the run roll is treated as being a 6.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Movement }]
        });
        this.baseAbilities.push({
            id: "forward_to_victory",
            name: "Forward to Victory",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability after you make a charge roll for a friendly unit that is within 6" of a friendly Hero, or 12" of a friendly Hero that is a general. If you do so, re-roll the charge roll.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Charge }]
        });
        this.baseAbilities.push({
            id: "inspiring_presence",
            name: "Inspiring Presence",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability at the start of the battleshock phase. If you do so, pick a friendly unit that is within 6" of friendly Hero, or 12" of a friendly Hero that is a general. That unit does not have to take battleshock tests in that phase.',
            effects: [
                { targetType: TargetType.Friend, phase: Phase.Battleshock }
            ]
        });
        this.baseAbilities.push({
            id: "allout_attack",
            name: "All-out Attack",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit wholly within 12" of a friendly HERO, or wholly within 18" of a friendly HERO that is a general. You can re-roll hit rolls of 1 for attacks made by that unit until the end of that phase.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Combat }]
        });
        this.baseAbilities.push({
            id: "allout_defence",
            name: "All-out Defence",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit that is wholly within 12" of a friendly HERO, or wholly within 18" of a friendly HERO that is a general. You can re-roll save rolls of 1 for attacks that target that unit until the end of that phase.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Combat }]
        });
        this.baseAbilities.push({
            id: "volleyfire",
            name: "Volley Fire",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability at the start of your shooting phase. If you do so, pick 1 friendly unit that is wholly within 12" of a friendly HERO, or wholly within 18" of a friendly HERO that is a general. You can re-roll hit rolls of 1 for attacks made by that unit until the end of that phase.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Shooting }]
        });
        this.baseAbilities.push({
            id: "lookoutsir",
            name: "Look out, Sir!",
            category: AbilityCategory.Army,
            description:
                'You must subtract 1 from hit rolls made for missile weapons if the target of the attack is an enemy Hero that is within 3" of an enemy unit that has 3 or more models. The Look Out, Sir! rule does not apply if the target Hero is a Monster.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Shooting }]
        });
        this.baseAbilities.push({
            id: "cover",
            name: "Cover",
            category: AbilityCategory.Army,
            description:
                "Add 1 to save rolls for a unit if all of its models are wholly on or within a terrain feature when the rolls are made. This modifier does not apply in the combat phase if the unit you are making save rolls for made a charge move in the same turn, and never applies to units containing models with the Monster or War Machinekeyword that have a Wounds characteristic of 8 or more.",
            effects: [
                {
                    targetType: TargetType.Friend,
                    phase: Phase.Shooting | Phase.Combat
                }
            ]
        });
        this.baseAbilities.push({
            id: "arcanebolt",
            name: "Arcane Bolt",
            category: AbilityCategory.Spell,
            description:
                'Arcane Bolt has a casting value of 5. If successfully cast, pick an enemy unit within 18" of the caster that is visible to them. That unit suffers 1 mortal wound. If the casting roll was 10 or more, the unit suffers D3 mortal wounds instead.',
            effects: [
                {
                    spellCastingValue: 5,
                    targetRange: 18,
                    targetType: TargetType.Enemy,
                    phase: Phase.Hero
                }
            ]
        });
        this.baseAbilities.push({
            id: "mysticshield",
            name: "Mystic Shield",
            category: AbilityCategory.Spell,
            description:
                'Mystic Shield has a casting value of 6. If successfully cast, pick a friendly unit within 18" of the caster that is visible to them. Re-roll save rolls of 1 for that unit until your next hero phase.',
            effects: [
                {
                    targetType: TargetType.Friend,
                    spellCastingValue: 6,
                    targetRange: 18,
                    phase: Phase.Hero,
                    defenseAura: { rerollSavesOn1: true }
                }
            ]
        });
    }

    findUnit(id: string) {
        return this.unitList.find(x => x.id === id);
    }

    getUnit(id: string) {
        const unit = this.findUnit(id);
        if (!unit) throw Error(`Unit ${id} does not exist`);
        return unit;
    }

    getExtraAbility(id: string) {
        return this.extraAbilities.find(x => x.id === id);
    }
}
