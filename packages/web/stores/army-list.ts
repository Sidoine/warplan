import { action, computed, makeObservable, observable, toJS } from "mobx";
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
    ItemWithAbilities
} from "../../common/data";
import { groupBy } from "../helpers/react";
import { hasKeywords } from "./conditions";
import { DataStore } from "./data";
import { UiStore } from "./ui";
import {
    PointMode,
    WarscrollBattalion,
    WarscrollItem,
    WarscrollModel,
    UnitWarscroll
} from "./warscroll";

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

interface SerializedArmyList {
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
}

function getWarscrollItem(name?: string) {
    return name ? `warscroll/${name}` : "warscroll";
}

export class ArmyList implements ArmyListInterface, ArmyListLimits {
    serial = 0;
    id: string;

    constructor(public dataStore: DataStore) {
        makeObservable(this);
        this.id = (this.serial++).toString();
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
            this.dataStore.baseAbilities.flatMap(x => x.abilities)
        );
    }

    @computed
    get abilityGroups() {
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
    grandStrategy: Ability | null = null;

    @observable.shallow
    extraAbilities: Ability[] = [];

    @observable.shallow
    triumph: Ability | null = null;

    @observable
    name = "New Warscroll";

    @observable
    units: UnitWarscroll[] = [];

    @computed
    get items(): WarscrollItem[] {
        const result: WarscrollItem[] = [];
        return result.concat(this.units).concat(this.battalions);
    }

    @computed
    get description() {
        return Array.from(groupBy(this.units, x => x.definition.name))
            .map(
                ([key, values]) =>
                    `${values.reduce((p, v) => p + 1, 0)}x${key} ${
                        values.some(x => x.modelCount > 1)
                            ? ` [${values.map(x => x.modelCount).join(", ")}]`
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
            .filter(x => x.isAllied)
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
        return this.units.filter(x => x.isEndlessSpell);
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
        return this.units.some(x =>
            x.extraAbilities.some(y => y.id === extraAbility.id)
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
            x => x.category === AbilityCategory.BattleTrait
        );
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
        return this.allegianceAbilityGroups.flatMap(x => x.abilities);
    }

    getUnitsWithKeywords(keywords: string[][]) {
        return this.units.filter(x => hasKeywords(x, keywords));
    }

    getNumberOfEnhancements(category: AbilityCategory) {
        return this.battalions.reduce(
            (p, c) => p + (c.enhancement === category ? 1 : 0),
            0
        );
    }

    getSerializedWarscroll(): SerializedArmyList {
        return {
            name: this.name,
            realm: this.realm?.id ?? undefined,
            units: this.units.map(x => {
                return {
                    unitId: x.definition.id,
                    isGeneral: x === this.general,
                    extraAbilities: x.extraAbilities.map(x => x.id),
                    models: x.models.map(x => {
                        return {
                            count: x.count,
                            options: x.options.map(y => y.id)
                        };
                    }),
                    battalionIndex:
                        x.battalionUnit === null
                            ? undefined
                            : this.battalions.findIndex(
                                  y => y.id === x.battalionUnit?.battalion.id
                              ),
                    battalionUnitIndex:
                        x.battalionUnit === null
                            ? undefined
                            : x.battalionUnit.battalion.unitTypes.findIndex(
                                  y => y.id === x.battalionUnit?.id
                              )
                };
            }),
            battalions: this.battalions.map(x => {
                return {
                    battalionId: x.definition.id,
                    enhancement: x.enhancement ?? undefined
                };
            }),
            allegiance: this.allegiance?.id,
            armyType: this.armyType ? this.armyType.id : undefined,
            subFaction: this.subFaction ? this.subFaction.id : undefined,
            sceneries: this.endlessSpells.map(x => x.definition.id),
            pointMode: this.pointMode,
            grandStrategy: this.grandStrategy?.id,
            triumph: this.triumph?.id
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
                x => x.id === serialized.allegiance
            ) || null;
        this.armyType =
            this.dataStore.factionsList.find(
                x => x.id == serialized.armyType
            ) || null;
        this.subFaction =
            this.dataStore.factionsList.find(
                x => x.id == serialized.subFaction
            ) || null;
        this.pointMode = serialized.pointMode || PointMode.MatchedPlay;
        if (serialized.grandStrategy) {
            this.grandStrategy =
                this.dataStore.abilities[serialized.grandStrategy] || null;
        }
        if (serialized.triumph) {
            this.triumph = this.dataStore.abilities[serialized.triumph] || null;
        }
        for (const ba of serialized.battalions) {
            const battalion = this.dataStore.battalions.find(
                x => x.id === ba.battalionId
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
                                x => x.id === loadedOption
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
                        x => x.id === serialized.realm
                    )) ||
                null;
        }
    }

    save(name?: string) {
        const warscroll = this.getSerializedWarscroll();
        localStorage.setItem(getWarscrollItem(name), JSON.stringify(warscroll));
    }

    @computed
    get grandStrategies() {
        return this.allExtraAbilities.filter(
            x => x.category === AbilityCategory.GrandStrategy
        );
    }

    @computed
    get triumphs() {
        return this.allExtraAbilities.filter(
            x => x.category === AbilityCategory.Triumph
        );
    }

    @computed
    get armyLevelAbilityGroups() {
        return this.allegianceAbilityGroups.filter(
            x => x.domain === "armyLevel"
        );
    }

    @action setGrandStrategy = (grandStrategy: Ability | null) => {
        this.grandStrategy = grandStrategy;
        this.save();
    };

    @action setTriumph = (triumph: Ability | null) => {
        this.triumph = triumph;
        this.save();
    };

    @computed get itemsWithAbilities(): ItemWithAbilities[] {
        return new Array<ItemWithAbilities>(this).concat(this.units);
    }
}

export class ArmyListStore {
    @observable
    armyLists: string[] = [];

    @computed
    get availableBattalionGroups() {
        const result = this.dataStore.genericBattalionGroups;
        if (this.armyList.allegiance?.battalionGroups) {
            result.push(...this.armyList.allegiance.battalionGroups);
        }
        if (this.armyList.subFaction?.battalionGroups) {
            result.push(...this.armyList.subFaction.battalionGroups);
        }
        if (this.armyList.armyType?.battalionGroups) {
            result.push(...this.armyList.armyType.battalionGroups);
        }
        return result;
    }

    @computed
    get availableBattalions() {
        return this.availableBattalionGroups.flatMap(x => x.battalions);
    }

    @computed
    get availableUnits() {
        return this.uiStore.warscrolls.filter(
            x =>
                !x.single ||
                this.armyList.units.find(x => x.definition.id === x.id) ===
                    undefined
        );
    }

    getAvailableUnitsOfRole(role: Role) {
        return this.availableUnits.filter(
            x =>
                x.roles.includes(role) &&
                (role === Role.Leader || !x.roles.includes(Role.Leader))
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
        const warscroll = this.armyList;
        const warscrollUnit = new UnitWarscroll(warscroll, unit);
        if (
            unit.roles.every(
                x =>
                    x !== Role.Terrain &&
                    x !== Role.EndlessSpell &&
                    x !== Role.Invocation
            )
        ) {
            const model = new WarscrollModel(warscrollUnit, warscroll);
            model.count = unit.size;
            warscrollUnit.models.push(model);
        }
        warscroll.units.push(warscrollUnit);
        this.saveWarscroll();
    };

    @action
    removeUnit(unit: UnitWarscroll) {
        const units = this.armyList.units;
        units.splice(units.indexOf(unit), 1);
        this.saveWarscroll();
    }

    @action
    addBattalion(battalion: Battalion) {
        this.armyList.battalions.push(
            new WarscrollBattalion(this.armyList, battalion)
        );
        this.saveWarscroll();
    }

    @action
    removeBattalion(battalion: WarscrollBattalionInterface) {
        const battalions = this.armyList.battalions;
        battalions.splice(
            battalions.findIndex(x => x.id === battalion.id),
            1
        );
        this.saveWarscroll();
    }

    @action
    setGeneral(unit: UnitWarscroll | undefined) {
        this.armyList.general = unit;
        this.saveWarscroll();
    }

    @computed
    get armyTypes() {
        return this.armyList.allegiance?.children.filter(
            x => x.category === KeywordCategory.ArmyType
        );
    }

    @computed
    get subFactions() {
        return this.armyList.allegiance?.children.filter(
            x => x.category === KeywordCategory.Subfaction
        );
    }

    @action
    setArmyType = (option: Faction | null) => {
        this.armyList.armyType = option;
        this.saveWarscroll();
    };

    @action
    setSubFaction = (option: Faction | null) => {
        this.armyList.subFaction = option;
        this.saveWarscroll();
    };

    @action
    setPointMode(pointMode: PointMode) {
        this.armyList.pointMode = pointMode;
        this.saveWarscroll();
    }

    loadWarscroll(name?: string) {
        const serializedWarscroll = localStorage.getItem(
            getWarscrollItem(name)
        );
        if (serializedWarscroll === null) return;
        const warscroll: SerializedArmyList = JSON.parse(serializedWarscroll);
        this.armyList.loadSerializedWarscroll(warscroll);
        if (name) this.saveWarscroll();
    }

    @computed
    get link() {
        const ws = btoa(
            deflate(JSON.stringify(this.armyList.getSerializedWarscroll()), {
                to: "string"
            })
        );
        return `${document.location.protocol}//${document.location.host}${document.location.pathname}#?ws=${ws}`;
    }

    @action
    loadLink() {
        const hash = location.hash.match(/ws=(.*)/);
        if (hash) {
            const ws = hash[1];
            this.armyList.loadSerializedWarscroll(
                JSON.parse(inflate(atob(ws), { to: "string" }))
            );
            location.hash = "/";
        }
    }

    // http://localhost:8080/#/wb?ws=eJytkTFPxDAMhf8K8twFxm4nDgELsN2AbvClprXkOsVxVKSq/520Q+kAEkJMsZyXz+85Eyj2BDU80Xh1QkvBoghUkJU9Qf06rdVjUyRI3pGNrG0qghCzOtTXFXC6JyVDgfoNJVEFI+EQ9XlwjrpAzhXQhxseLizsTGtvrnbsQELJUf3FuPj5Ae+W/0SXaM3hPXM5/935YDFRyB4tndi72zUIozxg35PtNnXzm3kTxLXeVrKRjrk8WyZvgtZQm2693KWav7dcuhd0R/kKhiLUMmpY/j+VAH3A5HdOpsUczJ8lx78z

    @action
    saveWarscroll(name?: string) {
        if (name && this.armyLists.indexOf(name) < 0) this.armyLists.push(name);
        this.armyList.save(name);
        this.saveWarscrolls();
    }

    saveCurrentWarscroll = () => {
        this.saveWarscroll(this.armyList.name);
    };

    create = () => {
        this.saveCurrentWarscroll();
        this.armyList.loadSerializedWarscroll({
            name: "New",
            units: [],
            battalions: []
        });
    };

    @action
    removeWarscroll(name: string) {
        localStorage.removeItem(getWarscrollItem(name));
        this.armyLists.splice(this.armyLists.indexOf(name), 1);
        this.saveWarscrolls();
    }

    constructor(private dataStore: DataStore, private uiStore: UiStore) {
        makeObservable(this);
        const warscrolls = localStorage.getItem("warscrolls");
        if (warscrolls !== null) {
            this.armyLists = JSON.parse(warscrolls);
        }

        this.loadWarscroll();
        this.loadLink();
    }

    private saveWarscrolls() {
        localStorage.setItem(
            "warscrolls",
            JSON.stringify(toJS(this.armyLists))
        );
    }

    @observable
    armyList = new ArmyList(this.dataStore);

    @action
    setModelCount(altModel: WarscrollModel, count: number) {
        altModel.count = count;
        this.saveWarscroll();
    }

    @action
    addModelOption(model: WarscrollModel, option: ModelOption) {
        model.options.push(option);
        this.saveWarscroll();
    }

    @action
    removeModelOption(model: WarscrollModel, option: ModelOption) {
        model.options.splice(model.options.indexOf(option), 1);
        this.saveWarscroll();
    }

    @action
    addModel(unit: UnitWarscroll, option: ModelOption | undefined) {
        const model = new WarscrollModel(unit, this.armyList);
        unit.models.push(model);
        if (option) model.options.push(option);
        this.saveWarscroll();
    }

    @action
    removeModel(unit: UnitWarscroll, model: WarscrollModel) {
        unit.models.splice(unit.models.indexOf(model), 1);
        this.saveWarscroll();
    }

    @action setRealm = (realm: RealmOfBattle | null) => {
        this.armyList.realm = realm;
        this.saveWarscroll();
    };

    @action setName = (value: string) => {
        this.armyList.name = value;
        this.saveWarscroll();
    };
}