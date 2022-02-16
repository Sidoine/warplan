import { action, computed, makeObservable, observable } from "mobx";
import { deflate, inflate } from "pako";
import { KeywordCategory, Role } from "../../common/definitions";
import {
    Ability,
    AbilityCategory,
    AbilityGroup,
    Battalion,
    Faction,
    ModelOption,
    RealmOfBattle,
    Unit,
    WarscrollBattalionInterface,
    ArmyListInterface,
    ItemWithAbilities,
    PointMode,
    UnitRole,
} from "../../common/data";
import { groupBy } from "../helpers/react";
import { hasKeywords } from "./conditions";
import { DataStore, useDataStore } from "./data";
import { UiStore, useUiStore } from "./ui";
import {
    WarscrollBattalion,
    WarscrollItem,
    WarscrollModel,
    UnitWarscroll,
} from "./warscroll";
import { distinct } from "../helpers/algo";
import { createContext, useState } from "react";
import React from "react";

export interface ArmyListLimits {
    numberOfLeaders: number;
    minLeaders: number | undefined;
    maxLeaders: number | undefined;
    numberOfBehemots: number;
    minBehemots: number | undefined;
    maxBehemots: number | undefined;
    numberOfArtilleries: number;
    minArtilleries: number | undefined;
    maxArtilleries: number | undefined;
    numberOfBattlelines: number;
    minBattlelines: number | undefined;
    maxBattlelines: number | undefined;
    numberOfOtherUnits: number;
    minOtherUnits: number | undefined;
    maxOtherUnits: number | undefined;
}

export interface SerializedArmyList {
    name: string;
    units: {
        unitId: string;
        isGeneral?: boolean;
        extraAbilities?: string[];
        models?: { count: number; options: string[] }[];
        battalionIndex?: number;
        battalionUnitIndex?: number;
    }[];
    battalions: {
        battalionId: string;
        enhancement?: AbilityCategory;
    }[];
    allegiance?: string;
    armyType?: string;
    subFaction?: string;
    sceneries?: string[];
    pointMode?: PointMode;
    realm?: string;
    grandStrategy?: string;
    triumph?: string;
    uniqueEnhancement?: string;
    extraAbilities?: string[];
}

function hasAbilities(
    item: ItemWithAbilities
): item is Omit<ItemWithAbilities, "abilities"> & { abilities: Ability[] } {
    return item.abilities !== undefined;
}

export class ArmyList implements ArmyListInterface, ArmyListLimits {
    serial = 0;
    id: string;

    constructor(public dataStore: DataStore, private uiStore: UiStore) {
        makeObservable(this);
        this.id = localStorage.getItem("warscrollId") || "";

        const serialized = localStorage.getItem("warscroll");
        if (serialized) {
            this.loadSerializedWarscroll(JSON.parse(serialized));
        }

        this.loadLink();
    }

    @computed
    get link() {
        const ws = btoa(
            deflate(JSON.stringify(this.serialize()), {
                to: "string",
            })
        );
        return `${document.location.protocol}//${document.location.host}${document.location.pathname}#?ws=${ws}`;
    }

    @action
    loadLink() {
        const hash = location.hash.match(/ws=(.*)/);
        if (hash) {
            const ws = hash[1];
            this.loadSerializedWarscroll(
                JSON.parse(inflate(atob(ws), { to: "string" }))
            );
            location.hash = "/";
        }
    }

    isRoleAvailable(role: UnitRole): boolean {
        if (role.faction) {
            return (
                role.faction.id === this.allegiance?.id ||
                role.faction.id === this.subFaction?.id
            );
        }
        return true;
    }

    @computed
    get abilityCategories() {
        return [
            AbilityCategory.Army,
            AbilityCategory.GrandStrategy,
            AbilityCategory.Triumph,
            AbilityCategory.UniqueEnhancement,
        ];
    }

    @computed
    get selectedExtraAbilities() {
        const result: Ability[] = [];
        for (const unit of this.units) {
            for (const ability of unit.extraAbilities) {
                result.push(ability);
            }
        }
        return result;
    }

    @computed
    get allExtraAbilities() {
        return this.allegianceAbilities.concat(
            this.dataStore.baseAbilities.flatMap((x) => x.abilities)
        );
    }

    @computed
    get availableAbilityGroups() {
        const result: AbilityGroup[] = this.dataStore.baseAbilities.concat();
        if (this.allegiance?.abilityGroups) {
            result.push(...this.allegiance.abilityGroups);
        }
        if (this.armyType?.abilityGroups) {
            result.push(...this.armyType.abilityGroups);
        }
        if (this.subFaction?.abilityGroups) {
            result.push(...this.subFaction.abilityGroups);
        }

        return result;
    }

    @observable.shallow
    allegiance: Faction | null = null;

    @observable.shallow
    armyType: Faction | null = null;

    @observable.shallow
    subFaction: Faction | null = null;

    @observable.shallow
    realm: RealmOfBattle | null = null;

    @observable.shallow
    extraAbilities: Ability[] = [];

    @observable
    name = "New Warscroll";

    @observable
    units: UnitWarscroll[] = [];

    @computed
    get items(): WarscrollItem[] {
        const result: WarscrollItem[] = [];
        return result.concat(this.units).concat(this.battalions);
    }

    @action
    setExtraAbility = (category: AbilityCategory, ability: Ability | null) => {
        this.extraAbilities = this.extraAbilities.filter(x => x.category !== category);
        if (ability) this.extraAbilities.push(ability);
        this.save();
    };

    isAvailableExtraAbility(ability: Ability) {
        return true;
    }

    getMaxNumberOfEnhancements(category: AbilityCategory) {
        return 1;
    }

    @computed
    get description() {
        return Array.from(groupBy(this.units, (x) => x.definition.name))
            .map(
                ([key, values]) =>
                    `${values.reduce((p, v) => p + 1, 0)}x${key} ${
                        values.some((x) => x.modelCount > 1)
                            ? ` [${values.map((x) => x.modelCount).join(", ")}]`
                            : ""
                    }`
            )
            .join(", ");
    }

    @observable
    battalions: WarscrollBattalion[] = [];

    @observable
    general: UnitWarscroll | undefined = undefined;

    @computed
    get unitsPoints() {
        return this.units.reduce((p, x) => x.points + p, 0);
    }

    @computed
    get totalPoints() {
        return this.unitsPoints;
    }

    @computed
    get alliedPoints() {
        return this.units
            .filter((x) => x.isAllied)
            .reduce((p, x) => x.count * x.definition.points + p, 0);
    }

    @computed
    get numberOfLeaders() {
        return this.units.reduce((p, x) => (x.isLeader ? p + 1 : p), 0);
    }

    @computed
    get numberOfBattlelines() {
        return this.units.reduce((p, x) => (x.isBattleline ? p + 1 : p), 0);
    }

    @computed
    get numberOfBehemots() {
        return this.units.reduce((p, x) => (x.isBehemot ? p + 1 : p), 0);
    }

    @computed
    get numberOfArtilleries() {
        return this.units.reduce((p, x) => (x.isArtillery ? p + 1 : p), 0);
    }

    @computed
    get numberOfOtherUnits() {
        return this.units.reduce((p, x) => (x.isOther ? p + 1 : p), 0);
    }

    minLeaders = 1;

    @computed
    get maxPoints() {
        return this.totalPoints <= 1000
            ? 1000
            : this.totalPoints <= 2000
            ? 2000
            : 2500;
    }

    @computed
    get maxCommandPoints() {
        if (this.pointMode === PointMode.OpenPlay) return undefined;
        return 1;
    }

    @computed
    get maxLeaders() {
        return this.totalPoints <= 1000 ? 4 : this.totalPoints <= 2000 ? 6 : 8;
    }

    @computed
    get minBattlelines() {
        return this.totalPoints <= 1000 ? 2 : this.totalPoints <= 20000 ? 3 : 4;
    }

    @computed
    get maxBattlelines() {
        return undefined;
    }

    @computed
    get maxBattalions() {
        return undefined;
    }

    minBehemots = 0;

    @computed
    get maxBehemots() {
        return this.totalPoints <= 1000 ? 2 : this.totalPoints <= 2000 ? 4 : 5;
    }

    minOtherUnits = 0;
    maxOtherUnits = undefined;

    minArtilleries = 0;

    @computed
    get maxArtilleries() {
        return this.totalPoints <= 1000 ? 2 : this.totalPoints <= 2000 ? 4 : 5;
    }

    @computed
    get maxAlliedPoints() {
        return this.totalPoints <= 1000
            ? 200
            : this.totalPoints <= 2000
            ? 400
            : 500;
    }

    @computed
    get maxEndlessSpells() {
        return 3;
    }

    @computed
    get isAlliedValid() {
        return this.alliedPoints < this.maxAlliedPoints;
    }

    @computed
    get isLeadersValid() {
        return (
            this.numberOfLeaders >= this.minLeaders &&
            this.numberOfLeaders <= this.maxLeaders
        );
    }

    @computed
    get isBattelinesValid() {
        return this.numberOfBattlelines >= this.minBattlelines;
    }

    @computed
    get isBehemotsValid() {
        return this.numberOfBehemots <= this.maxBehemots;
    }

    @computed
    get isArtilleryValid() {
        return this.numberOfArtilleries <= this.maxArtilleries;
    }

    @computed
    get isEndlessSpellsValid() {
        return (
            this.maxEndlessSpells === undefined ||
            this.endlessSpells.length <= this.maxEndlessSpells
        );
    }

    @computed
    get endlessSpells() {
        return this.units.filter((x) => x.isEndlessSpell);
    }

    @observable pointMode = PointMode.MatchedPlay;

    @computed
    get maxArtifacts() {
        return 1 + this.battalions.length;
    }

    @computed
    get numberOfArtifacts() {
        return this.selectedExtraAbilities.reduce(
            (x, a) => x + (a.category === AbilityCategory.Artefact ? 1 : 0),
            0
        );
    }

    hasAnyUnitExtraAbility(extraAbility: Ability) {
        return this.units.some((x) =>
            x.extraAbilities.some((y) => y.id === extraAbility.id)
        );
    }

    @computed get hasRequiredArtifact() {
        // return (
        //     !this.armyOption ||
        //     !this.armyOption.requiredArtifact ||
        //     this.hasAnyUnitExtraAbility(this.armyOption.requiredArtifact)
        // );
        return false;
    }

    @computed get hasRequiredCommandTrait() {
        // return (
        //     !this.armyOption ||
        //     !this.armyOption.requiredCommandTrait ||
        //     this.hasAnyUnitExtraAbility(this.armyOption.requiredCommandTrait)
        // );
        return false;
    }

    @computed
    get abilities(): Ability[] {
        return this.allegianceAbilities.filter(
            (x) => x.category === AbilityCategory.BattleTrait
        );
    }

    @computed
    get armyAndUnitsAbilities(): {
        item: ItemWithAbilities;
        ability: Ability;
    }[] {
        const result: ItemWithAbilities[] = this.allegianceAbilityGroups.filter(
            (x) => x.category === AbilityCategory.BattleTrait
        );
        const units = distinct(this.units.map((x) => x.definition));
        for (const unit of units) {
            if (unit.options) {
                result.push(...unit.options);
            }
            result.push(unit);
        }
        return result
            .filter(hasAbilities)
            .flatMap((x) => x.abilities.map((y) => ({ item: x, ability: y })))
            .sort((x, y) => x.ability.name.localeCompare(y.ability.name));
    }

    @computed
    get allegianceAbilityGroups() {
        let result: AbilityGroup[] = [];
        if (this.allegiance && this.allegiance.abilityGroups) {
            result = result.concat(this.allegiance.abilityGroups);
        }
        if (this.armyType && this.armyType.abilityGroups) {
            result = result.concat(this.armyType.abilityGroups);
        }
        if (this.subFaction && this.subFaction.abilityGroups) {
            result = result.concat(this.subFaction.abilityGroups);
        }
        return result;
    }

    @computed
    get allegianceAbilities() {
        return this.allegianceAbilityGroups.flatMap((x) => x.abilities);
    }

    getUnitsWithKeywords(keywords: string[][]) {
        return this.units.filter((x) => hasKeywords(x, keywords));
    }

    getNumberOfEnhancements(category: AbilityCategory) {
        return this.battalions.reduce(
            (p, c) => p + (c.enhancement === category ? 1 : 0),
            0
        );
    }

    serialize(): SerializedArmyList {
        return {
            name: this.name,
            realm: this.realm?.id ?? undefined,
            units: this.units.map((x) => {
                return {
                    unitId: x.definition.id,
                    isGeneral: x === this.general,
                    extraAbilities: x.extraAbilities.map((x) => x.id),
                    models: x.models.map((x) => {
                        return {
                            count: x.count,
                            options: x.options.map((y) => y.id),
                        };
                    }),
                    battalionIndex:
                        x.battalionUnit === null
                            ? undefined
                            : this.battalions.findIndex(
                                  (y) => y.id === x.battalionUnit?.battalion.id
                              ),
                    battalionUnitIndex:
                        x.battalionUnit === null
                            ? undefined
                            : x.battalionUnit.battalion.unitTypes.findIndex(
                                  (y) => y.id === x.battalionUnit?.id
                              ),
                };
            }),
            battalions: this.battalions.map((x) => {
                return {
                    battalionId: x.definition.id,
                    enhancement: x.enhancement ?? undefined,
                };
            }),
            allegiance: this.allegiance?.id,
            armyType: this.armyType ? this.armyType.id : undefined,
            subFaction: this.subFaction ? this.subFaction.id : undefined,
            sceneries: this.endlessSpells.map((x) => x.definition.id),
            pointMode: this.pointMode,
            extraAbilities: this.extraAbilities.map((x) => x.id),
        };
    }

    @action
    loadSerializedWarscroll(serialized: SerializedArmyList) {
        this.name = serialized.name;
        this.general = undefined;
        this.units.splice(0);
        this.battalions.splice(0);
        this.endlessSpells.splice(0);
        this.allegiance =
            this.dataStore.factionsList.find(
                (x) => x.id === serialized.allegiance
            ) || null;
        this.armyType =
            this.dataStore.factionsList.find(
                (x) => x.id == serialized.armyType
            ) || null;
        this.subFaction =
            this.dataStore.factionsList.find(
                (x) => x.id == serialized.subFaction
            ) || null;
        this.pointMode = serialized.pointMode || PointMode.MatchedPlay;
        if (serialized.extraAbilities) {
            for (const extraAbility of serialized.extraAbilities) {
                const ability = this.dataStore.abilities[extraAbility];
                if (ability) {
                    this.extraAbilities.push(ability);
                }
            }
        }
        for (const ba of serialized.battalions) {
            const battalion = this.dataStore.battalions.find(
                (x) => x.id === ba.battalionId
            );
            if (battalion === undefined) continue;
            const b = new WarscrollBattalion(this, battalion);
            if (ba.enhancement !== undefined) b.enhancement = ba.enhancement;
            this.battalions.push(b);
        }

        for (const wu of serialized.units) {
            const unit = this.dataStore.findUnit(wu.unitId);
            if (unit === undefined) continue;
            const newUnit = new UnitWarscroll(this, unit);
            if (wu.isGeneral) {
                this.general = newUnit;
            }
            if (wu.extraAbilities) {
                for (const e of wu.extraAbilities) {
                    const ability = this.dataStore.getAbility(e);
                    if (ability) {
                        newUnit.extraAbilities.push(ability);
                    }
                }
            }
            if (wu.models) {
                for (const loadedModel of wu.models) {
                    const model = new WarscrollModel(newUnit, this);
                    for (const loadedOption of loadedModel.options) {
                        if (unit.options) {
                            const option = unit.options.find(
                                (x) => x.id === loadedOption
                            );
                            if (option) {
                                model.options.push(option);
                            }
                        }
                    }
                    model.count = loadedModel.count;
                    newUnit.models.push(model);
                }
            }
            if (
                wu.battalionIndex !== undefined &&
                wu.battalionIndex >= 0 &&
                wu.battalionIndex < this.battalions.length &&
                wu.battalionUnitIndex !== undefined &&
                this.battalions[wu.battalionIndex]
            ) {
                const battalion = this.battalions[wu.battalionIndex];
                if (
                    battalion &&
                    wu.battalionUnitIndex >= 0 &&
                    wu.battalionUnitIndex < battalion.unitTypes.length
                )
                    newUnit.battalionUnit =
                        battalion.unitTypes[wu.battalionUnitIndex];
            }
            this.units.push(newUnit);
            this.realm =
                (serialized.realm &&
                    this.dataStore.realms.find(
                        (x) => x.id === serialized.realm
                    )) ||
                null;
        }
    }

    save = () => {
        const warscroll = this.serialize();
        localStorage.setItem("warscroll", JSON.stringify(warscroll));
        localStorage.setItem("warscrollId", this.id);
    };

    @computed
    get grandStrategies() {
        return this.allExtraAbilities.filter(
            (x) => x.category === AbilityCategory.GrandStrategy
        );
    }

    @computed
    get triumphs() {
        return this.allExtraAbilities.filter(
            (x) => x.category === AbilityCategory.Triumph
        );
    }

    @computed
    get armyLevelAbilityGroups() {
        return this.allegianceAbilityGroups.filter(
            (x) => x.domain === "armyLevel"
        );
    }

    @computed get itemsWithAbilities(): ItemWithAbilities[] {
        return new Array<ItemWithAbilities>(this).concat(this.units);
    }

    @action
    setModelCount(altModel: WarscrollModel, count: number) {
        altModel.count = count;
        this.save();
    }

    @action
    addModelOption(model: WarscrollModel, option: ModelOption) {
        model.options.push(option);
        this.save();
    }

    @action
    removeModelOption(model: WarscrollModel, option: ModelOption) {
        model.options.splice(model.options.indexOf(option), 1);
        this.save();
    }

    @action
    addModel(unit: UnitWarscroll, option: ModelOption | undefined) {
        const model = new WarscrollModel(unit, this);
        unit.models.push(model);
        if (option) model.options.push(option);
        this.save();
    }

    @action
    removeModel(unit: UnitWarscroll, model: WarscrollModel) {
        unit.models.splice(unit.models.indexOf(model), 1);
        this.save();
    }

    @action setRealm = (realm: RealmOfBattle | null) => {
        this.realm = realm;
        this.save();
    };

    @action setName = (value: string) => {
        this.name = value;
        this.save();
    };

    @computed
    get availableBattalionGroups() {
        const result = this.dataStore.genericBattalionGroups;
        if (this.allegiance?.battalionGroups) {
            result.push(...this.allegiance.battalionGroups);
        }
        if (this.subFaction?.battalionGroups) {
            result.push(...this.subFaction.battalionGroups);
        }
        if (this.armyType?.battalionGroups) {
            result.push(...this.armyType.battalionGroups);
        }
        return result;
    }

    @computed
    get availableBattalions() {
        return this.availableBattalionGroups.flatMap((x) => x.battalions);
    }

    @computed
    get availableUnits() {
        return this.uiStore.warscrolls.filter(
            (x) =>
                !x.single ||
                this.units.find((x) => x.definition.id === x.id) === undefined
        );
    }

    getAvailableUnitsOfRole(role: Role) {
        return this.availableUnits.filter(
            (x) =>
                x.roles.some((x) => x.role === role) &&
                (role === Role.Leader ||
                    !x.roles.some((x) => x.role === Role.Leader))
        );
    }

    @computed
    get availableEndlessSpells() {
        return this.dataStore.unitList.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    @action
    addUnit = (unit: Unit | null) => {
        if (unit === null) return;
        const warscroll = this;
        const warscrollUnit = new UnitWarscroll(warscroll, unit);
        if (
            warscrollUnit.role !== Role.Terrain &&
            warscrollUnit.role !== Role.EndlessSpell &&
            warscrollUnit.role !== Role.Invocation
        ) {
            const model = new WarscrollModel(warscrollUnit, warscroll);
            model.count = unit.size;
            warscrollUnit.models.push(model);
        }
        warscroll.units.push(warscrollUnit);
        this.save();
    };

    @action
    removeUnit(unit: UnitWarscroll) {
        const units = this.units;
        units.splice(units.indexOf(unit), 1);
        this.save();
    }

    @action
    addBattalion(battalion: Battalion) {
        this.battalions.push(new WarscrollBattalion(this, battalion));
        this.save();
    }

    @action
    removeBattalion(battalion: WarscrollBattalionInterface) {
        const battalions = this.battalions;
        battalions.splice(
            battalions.findIndex((x) => x.id === battalion.id),
            1
        );
        this.save();
    }

    @action
    setGeneral(unit: UnitWarscroll | undefined) {
        this.general = unit;
        this.save();
    }

    @computed
    get armyTypes() {
        return this.allegiance?.children.filter(
            (x) => x.category === KeywordCategory.ArmyType
        );
    }

    @computed
    get subFactions() {
        return this.allegiance?.children.filter(
            (x) => x.category === KeywordCategory.Subfaction
        );
    }

    @action
    setArmyType = (option: Faction | null) => {
        this.armyType = option;
        this.save();
    };

    @action
    setSubFaction = (option: Faction | null) => {
        this.subFaction = option;
        this.save();
    };

    @action
    setPointMode = (pointMode: PointMode) => {
        this.pointMode = pointMode;
        this.save();
    };

    setAllegiance = (allegiance: Faction | null) => {
        this.allegiance = allegiance;
        this.save();
    };
}

const ArmyListStoreContext = createContext<ArmyList | null>(null);

export function ArmyListStoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const dataStore = useDataStore();
    const uiStore = useUiStore();
    const [data] = useState(() => new ArmyList(dataStore, uiStore));
    return (
        <ArmyListStoreContext.Provider value={data}>
            {children}
        </ArmyListStoreContext.Provider>
    );
}

export function useArmyListStore() {
    const dataStore = React.useContext(ArmyListStoreContext);
    if (!dataStore) {
        throw new Error(
            "useArmyListStore must be used within a ArmyListStoreProvider"
        );
    }
    return dataStore;
}
