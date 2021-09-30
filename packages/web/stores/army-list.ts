import { action, computed, makeObservable, observable, toJS } from "mobx";
import { deflate, inflate } from "pako";
import { KeywordCategory } from "../../common/definitions";
import {
    Ability,
    AbilityCategory,
    AbilityGroup,
    Battalion,
    EndlessSpell,
    Faction,
    ModelOption,
    RealmOfBattle,
    Unit,
    WarscrollBattalionInterface,
    ArmyListInterface
} from "../../common/data";
import { groupBy } from "../helpers/react";
import { hasKeywords } from "./conditions";
import { DataStore } from "./data";
import { UiStore } from "./ui";
import {
    AbilityModel,
    PointMode,
    WarscrollBattalion,
    WarscrollEndlessSpell,
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

function getWarscrollItem(name?: string) {
    return name ? `warscroll/${name}` : "warscroll";
}

export class ArmyList implements ArmyListInterface, ArmyListLimits {
    serial = 0;

    constructor(public dataStore: DataStore) {
        makeObservable(this);
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
    get extraAbilities() {
        return this.allegianceAbilities;
        // let extraAbilities: Ability[] = [];
        // if (this.allegiance && this.allegiance.artefacts) {
        //     extraAbilities = extraAbilities.concat(this.allegiance.artefacts);
        // }
        // if (this.armyType && this.armyType.artefacts) {
        //     extraAbilities = extraAbilities.concat(this.armyType.artefacts);
        // }
        // if (this.subFaction && this.subFaction.artefacts) {
        //     extraAbilities = extraAbilities.concat(this.subFaction.artefacts);
        // }
        // return extraAbilities;
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

    @observable
    name = "New Warscroll";

    @observable
    units: UnitWarscroll[] = [];

    @computed
    get items(): WarscrollItem[] {
        const result: WarscrollItem[] = [];
        return result
            .concat(this.units)
            .concat(this.endlessSpells)
            .concat(this.battalions);
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

    @observable
    endlessSpells: WarscrollEndlessSpell[] = [];

    @computed
    get unitsPoints() {
        return this.units.reduce((p, x) => x.points + p, 0);
    }

    @computed
    get sceneryPoints() {
        return this.endlessSpells.reduce((p, x) => x.definition.points + p, 0);
    }

    @computed
    get totalPoints() {
        return this.unitsPoints + this.sceneryPoints;
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
    get abilities(): AbilityModel[] {
        return this.allegianceAbilities.map(ability => ({
            ability,
            id: ability.id
        }));
    }

    @computed
    get allegianceAbilities() {
        let result: Ability[] = [];
        if (this.armyType && this.armyType.abilityGroups) {
            for (const group of this.armyType.abilityGroups) {
                result = result.concat(group.abilities);
            }
        }
        if (this.subFaction && this.subFaction.abilityGroups) {
            for (const group of this.subFaction.abilityGroups) {
                result = result.concat(group.abilities);
            }
        }
        if (this.allegiance && this.allegiance.abilityGroups) {
            for (const group of this.allegiance.abilityGroups) {
                result = result.concat(group.abilities);
            }
        }
        return result;
    }

    // @computed
    // get unitAbilities() {
    //     const result: Ability[] = [];
    //     for (const unit of this.items) {
    //         for (const ability of unit.abilities) {
    //             if (!result.find((x) => x.id === ability..id))
    //                 result.push(ability);
    //         }
    //     }
    //     return result;
    // }

    getUnitsWithKeywords(keywords: string[][]) {
        return this.units.filter(x => hasKeywords(x, keywords));
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
                    battalionId: x.definition.id
                };
            }),
            allegiance: this.allegiance?.id,
            armyType: this.armyType ? this.armyType.id : undefined,
            subFaction: this.subFaction ? this.subFaction.id : undefined,
            sceneries: this.endlessSpells.map(x => x.definition.id),
            pointMode: this.pointMode
        };
    }

    save(name?: string) {
        const warscroll = this.getSerializedWarscroll();
        localStorage.setItem(getWarscrollItem(name), JSON.stringify(warscroll));
    }
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
    }[];
    allegiance?: string;
    armyType?: string;
    subFaction?: string;
    sceneries?: string[];
    pointMode?: PointMode;
    realm?: string;
}

export class ArmyListStore {
    @observable
    warscrolls: string[] = [];

    @computed
    get availableBattalionGroups() {
        const result = this.dataStore.genericBattalionGroups;
        if (this.warscroll.allegiance?.battalionGroups) {
            result.push(...this.warscroll.allegiance.battalionGroups);
        }
        if (this.warscroll.subFaction?.battalionGroups) {
            result.push(...this.warscroll.subFaction.battalionGroups);
        }
        if (this.warscroll.armyType?.battalionGroups) {
            result.push(...this.warscroll.armyType.battalionGroups);
        }
        return result;
    }

    @computed
    get availableBattalions() {
        return this.availableBattalionGroups.flatMap(x => x.battalions);
    }

    @computed
    get availableUnits() {
        return this.uiStore.units.filter(
            x =>
                x.maxCount === undefined ||
                this.warscroll.units.reduce(
                    (p, y) => (y.definition.id === x.id ? p + 1 : p),
                    0
                ) < x.maxCount
        );
    }

    @computed
    get availableEndlessSpells() {
        return this.dataStore.sceneryList.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    @action
    addUnit(unit: Unit) {
        const warscroll = this.warscroll;
        const warscrollUnit = new UnitWarscroll(warscroll, unit);
        const model = new WarscrollModel(warscrollUnit, warscroll);
        model.count = unit.size;
        warscrollUnit.models.push(model);
        warscroll.units.push(warscrollUnit);
        this.saveWarscroll();
    }

    @action
    addScenery = (scenery: EndlessSpell) => {
        this.warscroll.endlessSpells.push(
            new WarscrollEndlessSpell(this.warscroll, scenery)
        );
        this.saveWarscroll();
    };

    @action
    removeScenery(scenery: WarscrollEndlessSpell) {
        const sceneries = this.warscroll.endlessSpells;
        sceneries.splice(sceneries.indexOf(scenery), 1);
        this.saveWarscroll();
    }

    @action
    removeUnit(unit: UnitWarscroll) {
        const units = this.warscroll.units;
        units.splice(units.indexOf(unit), 1);
        this.saveWarscroll();
    }

    @action
    addBattalion(battalion: Battalion) {
        this.warscroll.battalions.push(
            new WarscrollBattalion(this.warscroll, battalion)
        );
        this.saveWarscroll();
    }

    @action
    removeBattalion(battalion: WarscrollBattalionInterface) {
        const battalions = this.warscroll.battalions;
        battalions.splice(
            battalions.findIndex(x => x.id === battalion.id),
            1
        );
        this.saveWarscroll();
    }

    @action
    setGeneral(unit: UnitWarscroll | undefined) {
        this.warscroll.general = unit;
        this.saveWarscroll();
    }

    @action
    addExtraAbility(unit: UnitWarscroll, ability: Ability) {
        unit.extraAbilities.push(ability);
        this.saveWarscroll();
    }

    @action
    removeExtraAbility(unit: UnitWarscroll, ability: Ability) {
        unit.extraAbilities.splice(unit.extraAbilities.indexOf(ability), 1);
        this.saveWarscroll();
    }

    @computed
    get armyTypes() {
        return this.warscroll.allegiance?.children.filter(
            x => x.category === KeywordCategory.ArmyType
        );
    }

    @computed
    get subFactions() {
        return this.warscroll.allegiance?.children.filter(
            x => x.category === KeywordCategory.Subfaction
        );
    }

    @action
    setArmyType = (option: Faction | null) => {
        this.warscroll.armyType = option;
        this.saveWarscroll();
    };

    @action
    setSubFaction = (option: Faction | null) => {
        this.warscroll.subFaction = option;
        this.saveWarscroll();
    };

    @action
    setPointMode(pointMode: PointMode) {
        this.warscroll.pointMode = pointMode;
        this.saveWarscroll();
    }

    loadWarscroll(name?: string) {
        const serializedWarscroll = localStorage.getItem(
            getWarscrollItem(name)
        );
        if (serializedWarscroll === null) return;
        const warscroll: SerializedArmyList = JSON.parse(serializedWarscroll);
        this.loadSerializedWarscroll(warscroll);
        if (name) this.saveWarscroll();
    }

    @action
    loadSerializedWarscroll(warscroll: SerializedArmyList) {
        this.warscroll.name = warscroll.name;
        this.warscroll.general = undefined;
        this.warscroll.units.splice(0);
        this.warscroll.battalions.splice(0);
        this.warscroll.endlessSpells.splice(0);
        this.warscroll.allegiance =
            this.dataStore.factionsList.find(
                x => x.id === warscroll.allegiance
            ) || null;
        this.warscroll.armyType =
            this.dataStore.factionsList.find(x => x.id == warscroll.armyType) ||
            null;
        this.warscroll.subFaction =
            this.dataStore.factionsList.find(
                x => x.id == warscroll.subFaction
            ) || null;
        this.warscroll.pointMode = warscroll.pointMode || PointMode.MatchedPlay;

        for (const ba of warscroll.battalions) {
            const battalion = this.dataStore.battalions.find(
                x => x.id === ba.battalionId
            );
            if (battalion === undefined) continue;
            this.warscroll.battalions.push(
                new WarscrollBattalion(this.warscroll, battalion)
            );
        }

        if (warscroll.sceneries) {
            for (const id of warscroll.sceneries) {
                const scenery = this.dataStore.sceneryList.find(
                    x => x.id === id
                );
                if (scenery === undefined) continue;
                this.warscroll.endlessSpells.push(
                    new WarscrollEndlessSpell(this.warscroll, scenery)
                );
            }
        }

        for (const wu of warscroll.units) {
            const unit = this.dataStore.findUnit(wu.unitId);
            if (unit === undefined) continue;
            const newUnit = new UnitWarscroll(this.warscroll, unit);
            if (wu.isGeneral) {
                this.warscroll.general = newUnit;
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
                    const model = new WarscrollModel(newUnit, this.warscroll);
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
                wu.battalionUnitIndex !== undefined &&
                this.warscroll.battalions[wu.battalionIndex]
            ) {
                const battalion = this.warscroll.battalions[wu.battalionIndex];
                if (battalion)
                    newUnit.battalionUnit =
                        battalion.unitTypes[wu.battalionUnitIndex];
            }
            this.warscroll.units.push(newUnit);
            this.warscroll.realm =
                (warscroll.realm &&
                    this.dataStore.realms.find(
                        x => x.id === warscroll.realm
                    )) ||
                null;
        }
    }

    @computed
    get link() {
        const ws = btoa(
            deflate(JSON.stringify(this.warscroll.getSerializedWarscroll()), {
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
            this.loadSerializedWarscroll(
                JSON.parse(inflate(atob(ws), { to: "string" }))
            );
            location.hash = "/";
        }
    }

    // http://localhost:8080/#/wb?ws=eJytkTFPxDAMhf8K8twFxm4nDgELsN2AbvClprXkOsVxVKSq/520Q+kAEkJMsZyXz+85Eyj2BDU80Xh1QkvBoghUkJU9Qf06rdVjUyRI3pGNrG0qghCzOtTXFXC6JyVDgfoNJVEFI+EQ9XlwjrpAzhXQhxseLizsTGtvrnbsQELJUf3FuPj5Ae+W/0SXaM3hPXM5/935YDFRyB4tndi72zUIozxg35PtNnXzm3kTxLXeVrKRjrk8WyZvgtZQm2693KWav7dcuhd0R/kKhiLUMmpY/j+VAH3A5HdOpsUczJ8lx78z

    @action
    saveWarscroll(name?: string) {
        if (name && this.warscrolls.indexOf(name) < 0)
            this.warscrolls.push(name);
        this.warscroll.save(name);
        this.saveWarscrolls();
    }

    saveCurrentWarscroll = () => {
        this.saveWarscroll(this.warscroll.name);
    };

    create = () => {
        this.saveCurrentWarscroll();
        this.loadSerializedWarscroll({
            name: "New",
            units: [],
            battalions: []
        });
    };

    @action
    removeWarscroll(name: string) {
        localStorage.removeItem(getWarscrollItem(name));
        this.warscrolls.splice(this.warscrolls.indexOf(name), 1);
        this.saveWarscrolls();
    }

    constructor(private dataStore: DataStore, private uiStore: UiStore) {
        makeObservable(this);
        const warscrolls = localStorage.getItem("warscrolls");
        if (warscrolls !== null) {
            this.warscrolls = JSON.parse(warscrolls);
        }

        this.loadWarscroll();
        this.loadLink();
    }

    private saveWarscrolls() {
        localStorage.setItem(
            "warscrolls",
            JSON.stringify(toJS(this.warscrolls))
        );
    }

    @observable
    warscroll = new ArmyList(this.dataStore);

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
        const model = new WarscrollModel(unit, this.warscroll);
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
        this.warscroll.realm = realm;
        this.saveWarscroll();
    };

    @action setName = (value: string) => {
        this.warscroll.name = value;
        this.saveWarscroll();
    };
}
