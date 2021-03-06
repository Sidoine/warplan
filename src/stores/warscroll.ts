import { action, computed, observable, toJS, makeObservable } from "mobx";
import {
    Battalion,
    Unit,
    Contingent,
    WarscrollUnitInterface,
    WarscrollInterface,
    Allegiance,
    ExtraAbility,
    WarscrollBattalionInterface,
    WarscrollModelInterface,
    EndlessSpell,
    ModelOption,
    ArmyOption,
    AbilityCategory,
    Ability,
    RealmOfBattle,
} from "./unit";
import { UnitsStore } from "./units";

import { deflate, inflate } from "pako";
import { groupBy } from "../helpers/react";
import { UiStore } from "./ui";
import { canUseAbilityCategory, hasKeywords } from "./conditions";

export const enum PointMode {
    MatchedPlay,
    OpenPlay,
    MeetingEngagements,
}

export class WarscrollModel implements WarscrollModelInterface {
    id: number;

    @observable
    options: ModelOption[] = [];

    @observable
    count = 1;

    constructor(private warscrollUnit: WarscrollUnit, warscroll: Warscroll) {
        makeObservable(this);
        this.id = warscroll.serial++;
    }

    @computed
    get availableOptions() {
        const options = this.warscrollUnit.definition.options;
        if (!options) return [];
        return options.filter((x) => this.isOptionAvailable(x));
    }

    isOptionAvailable(option: ModelOption) {
        if (this.options.some((x) => x.id === option.id)) return false;
        if (option.isOptionValid) {
            if (!option.isOptionValid(this.warscrollUnit, this)) return false;
        }
        return this.checkOptionAvailable(option);
    }

    isOptionValid(option: ModelOption) {
        if (!this.checkOptionAvailable(option)) return false;
        if (option.isOptionValid) {
            if (!option.isOptionValid(this.warscrollUnit, this)) return false;
        }
        return true;
    }

    private checkOptionAvailable(option: ModelOption) {
        if (option.modelCategory) {
            if (
                this.options.some(
                    (x) =>
                        x.modelCategory === option.modelCategory &&
                        x.id !== option.id
                )
            )
                return false;
        }

        if (option.unitCategory) {
            if (
                this.warscrollUnit.models.some((x) =>
                    x.options.some(
                        (y) =>
                            y.unitCategory === option.unitCategory &&
                            option.id !== y.id
                    )
                )
            )
                return false;
        }

        return true;
    }

    @computed
    get name() {
        return this.options.map((x) => x.name).join(", ");
    }
}

export interface AbilityModel {
    id: string;
    ability: Ability;
    warscrollModel?: WarscrollModelInterface[];
}

export type WarscrollItem =
    | WarscrollUnit
    | WarscrollEndlessSpell
    | WarscrollBattalion;
export class WarscrollUnit implements WarscrollUnitInterface {
    type: "unit" = "unit";
    id: string;

    @observable
    models: WarscrollModel[] = [];

    @observable
    battalion: WarscrollBattalionInterface | null = null;
    @observable
    contingent = Contingent.Main;

    @computed get keywords() {
        if (!this.isAllied) {
            const addAllegianceKeyword =
                this.definition.keywords.indexOf(
                    this.warscroll.allegiance.keywords[0]
                ) < 0;
            const addHostKeyword =
                this.warscroll.armyOption !== null &&
                this.warscroll.allegiance.armyOptions &&
                this.warscroll.allegiance.armyOptions.values.every(
                    (x) =>
                        !x.keyword ||
                        this.definition.keywords.indexOf(x.keyword) < 0
                );
            if (addAllegianceKeyword || addHostKeyword) {
                const keywords = this.definition.keywords.concat();
                if (addAllegianceKeyword)
                    keywords.push(this.warscroll.allegiance.keywords[0]);
                if (
                    addHostKeyword &&
                    this.warscroll.armyOption &&
                    this.warscroll.armyOption.keyword
                )
                    keywords.push(this.warscroll.armyOption.keyword);
                return keywords;
            }
        }
        return this.definition.keywords;
    }

    @computed
    get count() {
        return Math.ceil(this.modelCount / this.definition.size);
    }

    @computed
    get modelCount() {
        return this.models.reduce((p, x) => p + x.count, 0);
    }

    @observable
    extraAbilities: ExtraAbility[] = [];

    @computed
    get isAllied() {
        return (
            !this.definition.keywords ||
            this.warscroll.allegiance.keywords.every(
                (x) => this.definition.keywords.indexOf(x) < 0
            )
        );
    }

    get canBeAllied() {
        return (
            this.definition.keywords &&
            this.warscroll.allegiance.alliesKeywords &&
            this.warscroll.allegiance.alliesKeywords.some((x) =>
                x.every((y) => this.definition.keywords.includes(y))
            )
        );
    }

    get isArtillery() {
        return (
            this.definition.isArtillery &&
            this.definition.isArtillery(this.warscroll)
        );
    }

    get isLeader() {
        return (
            this.definition.isLeader && this.definition.isLeader(this.warscroll)
        );
    }

    get isBehemot() {
        return (
            this.definition.isBehemot &&
            this.definition.isBehemot(this.warscroll)
        );
    }

    get isBattleline() {
        return (
            this.definition.isBattleline &&
            this.definition.isBattleline(this.warscroll)
        );
    }

    get isOther() {
        return (
            !this.isArtillery &&
            !this.isBehemot &&
            !this.isLeader &&
            !this.isBattleline
        );
    }

    get isGeneral() {
        return this.warscroll.general === this;
    }

    @computed
    get availableExtraAbilities() {
        return this.warscroll.unitsStore.extraAbilities
            .filter((x) => this.isAvailableExtraAbility(x))
            .sort((a, b) => (a.ability.name > b.ability.name ? 1 : -1));
    }

    private isAvailableExtraAbility(extraAbility: ExtraAbility) {
        return (
            this.extraAbilities.every(
                (x) => x.ability.category !== extraAbility.ability.category
            ) &&
            !this.warscroll.hasAnyUnitExtraAbility(extraAbility) &&
            canUseAbilityCategory(
                this,
                this.warscroll,
                extraAbility.ability.category
            ) &&
            (!extraAbility.allegianceKeyword ||
                this.warscroll.allegiance.keywords.indexOf(
                    extraAbility.allegianceKeyword
                ) >= 0) &&
            (!extraAbility.armyOptionKeyword ||
                this.keywords.indexOf(extraAbility.armyOptionKeyword) >= 0) &&
            (!extraAbility.keywords ||
                hasKeywords(this, extraAbility.keywords)) &&
            (!extraAbility.realmId ||
                (this.warscroll.realm &&
                    this.warscroll.realm.id === extraAbility.realmId))
        );
    }

    @computed
    get points(): number {
        const points =
            this.warscroll.pointMode === PointMode.MatchedPlay
                ? this.count * this.definition.points
                : Math.ceil(
                      (this.modelCount * this.definition.points) /
                          this.definition.size
                  );
        if (this.definition.maxPoints && points > this.definition.maxPoints)
            return this.definition.maxPoints;
        return points;
    }

    @computed
    get availableOptions() {
        if (!this.definition.options) return [];
        return this.definition.options;
    }

    @computed
    get attacks() {
        const attacks = this.definition.attacks
            ? this.definition.attacks.map((x) => ({
                  count: this.modelCount,
                  attack: x,
              }))
            : [];
        for (const model of this.models) {
            for (const option of model.options) {
                if (option.attacks) {
                    for (const attack of option.attacks) {
                        const exisiting = attacks.find(
                            (x) => x.attack.id === attack.id
                        );
                        if (exisiting) {
                            exisiting.count += model.count;
                        } else {
                            attacks.push({
                                count: model.count,
                                attack: attack,
                            });
                        }
                    }
                }
            }
        }
        return attacks;
    }

    @computed get abilities(): AbilityModel[] {
        let abilities = this.definition.abilities || [];
        if (this.definition.commandAbilities)
            abilities = abilities.concat(this.definition.commandAbilities);
        if (this.extraAbilities) {
            abilities = abilities.concat(
                this.extraAbilities.map((x) => x.ability)
            );
        }

        const modelAbilities: AbilityModel[] = abilities.map((x) => ({
            id: x.id,
            ability: x,
        }));

        for (const model of this.models) {
            for (const option of model.options) {
                if (option.abilities) {
                    for (const ability of option.abilities) {
                        const existing = modelAbilities.find(
                            (x) => x.id === ability.id
                        );
                        if (existing) {
                            if (!existing.warscrollModel)
                                existing.warscrollModel = [];
                            existing.warscrollModel.push(model);
                        } else {
                            modelAbilities.push({
                                ability,
                                warscrollModel: [model],
                                id: ability.id,
                            });
                        }
                    }
                    abilities = abilities.concat(option.abilities);
                }
            }
        }
        return modelAbilities;
    }

    constructor(public warscroll: Warscroll, public definition: Unit) {
        makeObservable(this);
        this.id = (warscroll.serial++).toString();
    }
}

export class WarscrollEndlessSpell {
    id: number;
    type: "endless" = "endless";

    @computed get abilities(): AbilityModel[] {
        return (
            this.definition.abilities?.map((ability) => ({
                ability,
                id: ability.id,
            })) || []
        );
    }

    constructor(public warscroll: Warscroll, public definition: EndlessSpell) {
        this.id = warscroll.serial++;
    }
}

export class WarscrollBattalion implements WarscrollBattalionInterface {
    id: string;
    type: "battalion" = "battalion";

    @computed get abilities() {
        return (
            this.definition.abilities?.map((ability) => ({
                ability,
                id: ability.id,
            })) || []
        );
    }

    constructor(public warscroll: Warscroll, public definition: Battalion) {
        makeObservable(this);
        this.id = (warscroll.serial++).toString();
    }

    @computed get units() {
        return this.warscroll.units.filter(
            (x) => x.battalion !== null && x.battalion.id === this.id
        );
    }
}

export interface WarscrollLimits {
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

export class WarscrollContingent implements WarscrollLimits {
    constructor(private warscroll: Warscroll, public contingent: Contingent) {
        makeObservable(this);
    }

    @computed get totalNumberOfUnits() {
        return this.warscroll.units.reduce(
            (prev, curr) =>
                curr.contingent === this.contingent ? prev + 1 : prev,
            0
        );
    }

    @computed get numberOfLeaders() {
        return this.count("isLeader");
    }

    @computed get minLeaders() {
        return this.contingent === Contingent.Main ? 1 : 0;
    }

    @computed get maxLeaders() {
        return this.contingent === Contingent.Main ? 2 : 1;
    }

    @computed get numberOfBehemots() {
        return this.count("isBehemot");
    }

    @computed get minBehemots() {
        return 0;
    }

    @computed get maxBehemots() {
        return this.contingent !== Contingent.Spearhead ? 1 : 0;
    }

    @computed get numberOfArtilleries() {
        return this.count("isArtillery");
    }

    @computed get minArtilleries() {
        return 0;
    }

    @computed get maxArtilleries() {
        return this.contingent === Contingent.Rearguard ? 2 : 0;
    }

    @computed get numberOfBattlelines() {
        return this.count("isBattleline");
    }

    @computed get minBattlelines() {
        return this.contingent === Contingent.Main ? 1 : 0;
    }

    @computed get maxBattlelines() {
        return this.contingent === Contingent.Rearguard
            ? 1
            : this.contingent === Contingent.Main
            ? undefined
            : 2;
    }

    @computed get numberOfOtherUnits() {
        return this.count("isOther");
    }

    @computed get minOtherUnits() {
        return 0;
    }

    @computed get maxOtherUnits() {
        return this.contingent === Contingent.Main ? undefined : 2;
    }

    count(key: keyof WarscrollUnit) {
        return this.warscroll.units.reduce(
            (prev, curr) =>
                curr[key] && curr.contingent === this.contingent
                    ? prev + 1
                    : prev,
            0
        );
    }
}

export class Warscroll implements WarscrollInterface, WarscrollLimits {
    serial = 0;

    constructor(public unitsStore: UnitsStore) {
        makeObservable(this);
    }

    @computed
    get extraAbilities() {
        const result: ExtraAbility[] = [];
        for (const unit of this.units) {
            for (const ability of unit.extraAbilities) {
                result.push(ability);
            }
        }
        return result;
    }

    @observable
    allegiance: Allegiance = this.unitsStore.allegianceList[0];

    @observable
    armyOption: ArmyOption | null = null;

    @observable
    realm: RealmOfBattle | null = null;

    @observable
    name = "New Warscroll";

    @observable
    units: WarscrollUnit[] = [];

    @computed
    get items(): WarscrollItem[] {
        const result: WarscrollItem[] = [];
        return result
            .concat(this.units)
            .concat(this.endlessSpells)
            .concat(this.battalions);
    }

    contingents = [
        new WarscrollContingent(this, Contingent.Spearhead),
        new WarscrollContingent(this, Contingent.Main),
        new WarscrollContingent(this, Contingent.Rearguard),
    ];

    @computed
    get description() {
        return Array.from(groupBy(this.units, (x) => x.definition.model.name))
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
    general: WarscrollUnit | undefined = undefined;

    @observable
    endlessSpells: WarscrollEndlessSpell[] = [];

    @observable
    commandPoints = 0;

    @computed
    get unitsPoints() {
        return this.units.reduce((p, x) => x.points + p, 0);
    }

    @computed
    get sceneryPoints() {
        return this.endlessSpells.reduce((p, x) => x.definition.points + p, 0);
    }

    @computed
    get battalionsPoints() {
        return this.battalions.reduce((p, x) => x.definition.points + p, 0);
    }

    @computed
    get totalPoints() {
        return (
            this.unitsPoints +
            this.battalionsPoints +
            this.sceneryPoints +
            50 * this.commandPoints
        );
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
        return this.pointMode === PointMode.MeetingEngagements
            ? 1000
            : this.totalPoints <= 1000
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
        return this.pointMode === PointMode.MeetingEngagements ? 1 : undefined;
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
        return this.pointMode === PointMode.MeetingEngagements ? 1 : undefined;
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
        return this.extraAbilities.reduce(
            (x, a) =>
                x + (a.ability.category === AbilityCategory.Artefact ? 1 : 0),
            0
        );
    }

    hasAnyUnitExtraAbility(extraAbility: ExtraAbility) {
        return this.units.some((x) =>
            x.extraAbilities.some((y) => y.id === extraAbility.id)
        );
    }

    @computed get hasRequiredArtifact() {
        return (
            !this.armyOption ||
            !this.armyOption.requiredArtifact ||
            this.hasAnyUnitExtraAbility(this.armyOption.requiredArtifact)
        );
    }

    @computed get hasRequiredCommandTrait() {
        return (
            !this.armyOption ||
            !this.armyOption.requiredCommandTrait ||
            this.hasAnyUnitExtraAbility(this.armyOption.requiredCommandTrait)
        );
    }

    @computed
    get availableExtraAbilities() {
        return this.unitsStore.extraAbilities.filter(
            (x) =>
                x.allegianceKeyword === undefined ||
                this.allegiance.keywords.indexOf(x.allegianceKeyword) >= 0
        );
    }

    @computed
    get abilities(): AbilityModel[] {
        return this.unitsStore.baseAbilities
            .concat(this.allegianceAbilities)
            .map((ability) => ({ ability, id: ability.id }));
    }

    @computed
    get allegianceAbilities() {
        let result: Ability[] = [];
        if (this.armyOption) {
            if (this.armyOption.abilities)
                result = result.concat(this.armyOption.abilities);
        }
        if (this.allegiance.battleTraits)
            result = result.concat(this.allegiance.battleTraits);
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
        return this.units.filter((x) => hasKeywords(x, keywords));
    }
}

interface SerializedWarscroll {
    name: string;
    units: {
        unitId: string;
        isGeneral?: boolean;
        extraAbilities?: string[];
        models?: { count: number; options: string[] }[];
        battalionIndex?: number;
        contingent?: Contingent;
    }[];
    battalions: {
        battalionId: string;
    }[];
    allegiance?: string;
    armyOption?: string;
    sceneries?: string[];
    pointMode?: PointMode;
    commandPoints?: number;
    realm?: string;
}

export class WarscrollStore {
    @observable
    warscrolls: string[] = [];

    @computed
    get availableBattalions() {
        return this.unitsStore.battalions.filter((x) =>
            x.allegiances.some((y) => y.id === this.warscroll.allegiance.id)
        );
    }

    @computed
    get availableUnits() {
        return this.uiStore.units.filter(
            (x) =>
                x.maxCount === undefined ||
                this.warscroll.units.reduce(
                    (p, y) => (y.definition.id === x.id ? p + 1 : p),
                    0
                ) < x.maxCount
        );
    }

    @computed
    get availableEndlessSpells() {
        return this.unitsStore.sceneryList.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    @action
    addUnit(unit: Unit) {
        const warscroll = this.warscroll;
        const warscrollUnit = new WarscrollUnit(warscroll, unit);
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
    removeUnit(unit: WarscrollUnit) {
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
            battalions.findIndex((x) => x.id === battalion.id),
            1
        );
        this.saveWarscroll();
    }

    @action
    setGeneral(unit: WarscrollUnit | undefined) {
        this.warscroll.general = unit;
        this.saveWarscroll();
    }

    @action
    addExtraAbility(unit: WarscrollUnit, ability: ExtraAbility) {
        unit.extraAbilities.push(ability);
        this.saveWarscroll();
    }

    @action
    removeExtraAbility(unit: WarscrollUnit, ability: ExtraAbility) {
        unit.extraAbilities.splice(unit.extraAbilities.indexOf(ability), 1);
        this.saveWarscroll();
    }

    @computed
    get armyOptions() {
        return this.warscroll.allegiance.armyOptions;
    }

    @action
    setArmyOption(option: ArmyOption | null) {
        this.warscroll.armyOption = option;
        this.saveWarscroll();
    }

    @action
    setPointMode(pointMode: PointMode) {
        this.warscroll.pointMode = pointMode;
        this.saveWarscroll();
    }

    loadWarscroll(name?: string) {
        const serializedWarscroll = localStorage.getItem(
            this.getWarscrollItem(name)
        );
        if (serializedWarscroll === null) return;
        const warscroll: SerializedWarscroll = JSON.parse(serializedWarscroll);
        this.loadSerializedWarscroll(warscroll);
        if (name) this.saveWarscroll();
    }

    @action
    loadSerializedWarscroll(warscroll: SerializedWarscroll) {
        this.warscroll.name = warscroll.name;
        this.warscroll.general = undefined;
        this.warscroll.units.splice(0);
        this.warscroll.battalions.splice(0);
        this.warscroll.endlessSpells.splice(0);
        this.warscroll.allegiance =
            this.unitsStore.allegianceList.find(
                (x) => x.id === warscroll.allegiance
            ) || this.unitsStore.allegianceList[0];
        const armyOptions = this.warscroll.allegiance.armyOptions;
        if (armyOptions)
            this.warscroll.armyOption =
                armyOptions.values.find(
                    (x) => x.name == warscroll.armyOption
                ) || null;
        this.warscroll.pointMode = warscroll.pointMode || PointMode.MatchedPlay;
        this.warscroll.commandPoints = warscroll.commandPoints || 0;

        for (const ba of warscroll.battalions) {
            const battalion = this.unitsStore.battalions.find(
                (x) => x.id === ba.battalionId
            );
            if (battalion === undefined) continue;
            this.warscroll.battalions.push(
                new WarscrollBattalion(this.warscroll, battalion)
            );
        }

        if (warscroll.sceneries) {
            for (const id of warscroll.sceneries) {
                const scenery = this.unitsStore.sceneryList.find(
                    (x) => x.id === id
                );
                if (scenery === undefined) continue;
                this.warscroll.endlessSpells.push(
                    new WarscrollEndlessSpell(this.warscroll, scenery)
                );
            }
        }

        for (const wu of warscroll.units) {
            const unit = this.unitsStore.findUnit(wu.unitId);
            if (unit === undefined) continue;
            const newUnit = new WarscrollUnit(this.warscroll, unit);
            if (wu.isGeneral) {
                this.warscroll.general = newUnit;
            }
            if (wu.contingent !== undefined) newUnit.contingent = wu.contingent;
            if (wu.extraAbilities) {
                for (const e of wu.extraAbilities) {
                    const ability = this.unitsStore.getExtraAbility(e);
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
                wu.battalionIndex &&
                this.warscroll.battalions[wu.battalionIndex]
            ) {
                newUnit.battalion = this.warscroll.battalions[
                    wu.battalionIndex
                ];
            }
            this.warscroll.units.push(newUnit);
            this.warscroll.realm =
                (warscroll.realm &&
                    this.unitsStore.realms.find(
                        (x) => x.id === warscroll.realm
                    )) ||
                null;
        }
    }

    getSerializedWarscroll(): SerializedWarscroll {
        return {
            name: this.warscroll.name,
            realm: this.warscroll.realm?.id ?? undefined,
            units: this.warscroll.units.map((x) => {
                return {
                    unitId: x.definition.id,
                    isGeneral: x === this.warscroll.general,
                    extraAbilities: x.extraAbilities.map((x) => x.id),
                    models: x.models.map((x) => {
                        return {
                            count: x.count,
                            options: x.options.map((y) => y.id),
                        };
                    }),
                    battalionIndex:
                        x.battalion === null
                            ? undefined
                            : this.warscroll.battalions.findIndex(
                                  (y) =>
                                      x.battalion !== null &&
                                      y.id === x.battalion.id
                              ),
                    contingent: x.contingent,
                };
            }),
            battalions: this.warscroll.battalions.map((x) => {
                return {
                    battalionId: x.definition.id,
                };
            }),
            allegiance: this.warscroll.allegiance.id,
            armyOption:
                (this.warscroll.armyOption && this.warscroll.armyOption.name) ||
                undefined,
            sceneries: this.warscroll.endlessSpells.map((x) => x.definition.id),
            pointMode: this.warscroll.pointMode,
            commandPoints: this.warscroll.commandPoints,
        };
    }

    @computed
    get link() {
        const ws = btoa(
            deflate(JSON.stringify(this.getSerializedWarscroll()), {
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

    // http://localhost:8080/#/wb?ws=eJytkTFPxDAMhf8K8twFxm4nDgELsN2AbvClprXkOsVxVKSq/520Q+kAEkJMsZyXz+85Eyj2BDU80Xh1QkvBoghUkJU9Qf06rdVjUyRI3pGNrG0qghCzOtTXFXC6JyVDgfoNJVEFI+EQ9XlwjrpAzhXQhxseLizsTGtvrnbsQELJUf3FuPj5Ae+W/0SXaM3hPXM5/935YDFRyB4tndi72zUIozxg35PtNnXzm3kTxLXeVrKRjrk8WyZvgtZQm2693KWav7dcuhd0R/kKhiLUMmpY/j+VAH3A5HdOpsUczJ8lx78z

    @action
    saveWarscroll(name?: string) {
        if (name && this.warscrolls.indexOf(name) < 0)
            this.warscrolls.push(name);
        const warscroll = this.getSerializedWarscroll();
        localStorage.setItem(
            this.getWarscrollItem(name),
            JSON.stringify(warscroll)
        );
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
            battalions: [],
        });
    };

    @action
    removeWarscroll(name: string) {
        localStorage.removeItem(this.getWarscrollItem(name));
        this.warscrolls.splice(this.warscrolls.indexOf(name), 1);
        this.saveWarscrolls();
    }

    constructor(private unitsStore: UnitsStore, private uiStore: UiStore) {
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
    warscroll = new Warscroll(this.unitsStore);

    private getWarscrollItem(name?: string) {
        return name ? `warscroll/${name}` : "warscroll";
    }

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
    addModel(unit: WarscrollUnit, option: ModelOption | undefined) {
        const model = new WarscrollModel(unit, this.warscroll);
        unit.models.push(model);
        if (option) model.options.push(option);
        this.saveWarscroll();
    }

    @action
    removeModel(unit: WarscrollUnit, model: WarscrollModel) {
        unit.models.splice(unit.models.indexOf(model), 1);
        this.saveWarscroll();
    }

    @action
    setCommandPoints(commandPoints: number) {
        this.warscroll.commandPoints = commandPoints;
        this.saveWarscroll();
    }

    @action setRealm = (realm: RealmOfBattle | null) => {
        this.warscroll.realm = realm;
        this.saveWarscroll();
    };

    @action
    setContingent(unit: WarscrollUnit, x: Contingent): void {
        unit.contingent = x;
        this.saveWarscroll();
    }

    @action setName = (value: string) => {
        this.warscroll.name = value;
        this.saveWarscroll();
    };
}
