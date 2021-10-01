import { computed, observable, makeObservable, action } from "mobx";
import {
    Battalion,
    Unit,
    UnitWarscrollInterface,
    WarscrollBattalionInterface,
    WarscrollModelInterface,
    ModelOption,
    Ability,
    AbilityGroup,
    BattalionUnit,
    AbilityCategory
} from "../../common/data";

import { canAddAbilityCategory } from "./conditions";
import { ArmyList } from "./army-list";
import { getUnitModelsWithOptionCount } from "./overrides/tools";
import { HasId } from "../atoms/add-button";
import { Role } from "../../common/definitions";

export const enum PointMode {
    MatchedPlay,
    OpenPlay
}

export class WarscrollModel implements WarscrollModelInterface {
    id: number;

    @observable
    options: ModelOption[] = [];

    @observable
    count = 1;

    constructor(private unitWarscroll: UnitWarscroll, warscroll: ArmyList) {
        makeObservable(this);
        this.id = warscroll.serial++;
    }

    @computed
    get availableOptions() {
        const options = this.unitWarscroll.definition.options;
        if (!options) return [];
        return options.filter(x => this.isOptionAvailable(x));
    }

    private isOptionAvailable(option: ModelOption) {
        if (this.options.some(x => x.id === option.id)) return false;
        return this.isOptionValid(option);
    }

    isOptionValid(option: ModelOption) {
        if (option.isOptionValid) {
            if (!option.isOptionValid(this.unitWarscroll, this)) return false;
        }
        if (option.ratio) {
            const count = getUnitModelsWithOptionCount(
                this.unitWarscroll,
                option
            );
            const totalCount = this.unitWarscroll.modelCount;
            if (count > (totalCount / option.ratio.every) * option.ratio.count)
                return false;
        }
        if (option.champion) {
            if (
                this.unitWarscroll.models.some(
                    x => x.id !== this.id && x.options.some(y => y.champion)
                )
            )
                return false;
            if (this.count > 1) return false;
        }

        if (option.modelCategory !== undefined) {
            if (
                this.options.some(
                    x =>
                        x.modelCategory === option.modelCategory &&
                        x.id !== option.id
                )
            )
                return false;
        }

        if (option.unitCategory !== undefined) {
            if (
                this.unitWarscroll.models.some(x =>
                    x.options.some(
                        y =>
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
        return this.options.map(x => x.name).join(", ");
    }
}

export interface AbilityModel {
    id: string;
    ability: Ability;
    warscrollModel?: WarscrollModelInterface[];
}

export type WarscrollItem = UnitWarscroll | WarscrollBattalion;

export class UnitWarscroll implements UnitWarscrollInterface {
    type: "unit" = "unit";
    id: string;

    @observable
    models: WarscrollModel[] = [];

    @observable.shallow
    battalionUnit: WarscrollBattalionUnit | null = null;

    @computed get keywords() {
        // if (!this.isAllied) {
        //     const addAllegianceKeyword = this.warscroll.allegiance !== null &&
        //         this.definition.keywords.indexOf(
        //             this.warscroll.allegiance.keywords[0]
        //         ) < 0;
        //     const addHostKeyword =
        //         this.warscroll.armyOption !== null &&
        //         this.warscroll.allegiance.armyOptions &&
        //         this.warscroll.allegiance.armyOptions.values.every(
        //             (x) =>
        //                 !x.keyword ||
        //                 this.definition.keywords.indexOf(x.keyword) < 0
        //         );
        //     if (addAllegianceKeyword || addHostKeyword) {
        //         const keywords = this.definition.keywords.concat();
        //         if (addAllegianceKeyword)
        //             keywords.push(this.warscroll.allegiance.keywords[0]);
        //         if (
        //             addHostKeyword &&
        //             this.warscroll.armyOption &&
        //             this.warscroll.armyOption.keyword
        //         )
        //             keywords.push(this.warscroll.armyOption.keyword);
        //         return keywords;
        //     }
        // }
        return this.definition.keywords;
    }

    @computed
    get count() {
        if (!this.definition.size) return 1;
        return Math.ceil(this.modelCount / this.definition.size);
    }

    @computed
    get modelCount() {
        if (this.models.length === 0) return 1;
        return this.models.reduce((p, x) => p + x.count, 0);
    }

    @observable
    extraAbilities: Ability[] = [];

    @computed
    get isAllied() {
        // return (
        //     !this.definition.keywords ||
        //     this.warscroll.allegiance.keywords.every(
        //         (x) => this.definition.keywords.indexOf(x) < 0
        //     )
        // );
        return false;
    }

    get canBeAllied() {
        // return (
        //     this.definition.keywords &&
        //     this.warscroll.allegiance.alliesKeywords &&
        //     this.warscroll.allegiance.alliesKeywords.some((x) =>
        //         x.every((y) => this.definition.keywords.includes(y))
        //     )
        // );
        return false;
    }

    get isArtillery() {
        return this.definition.roles.includes(Role.Artillery);
    }

    get isLeader() {
        return this.definition.roles.includes(Role.Leader);
    }

    get isBehemot() {
        return this.definition.roles.includes(Role.Behemoth);
    }

    get isBattleline() {
        return this.definition.roles.includes(Role.Battleline);
    }

    get isEndlessSpell() {
        return this.definition.roles.includes(Role.EndlessSpell);
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
        return this.armyList.general === this;
    }

    @computed
    get availableExtraAbilities() {
        return this.availableAbilityGroups
            .reduce((p, c) => p.concat(c.abilities), new Array<Ability>())
            .filter(x => this.isAvailableExtraAbility(x))
            .sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    @computed
    get availableAbilityGroups() {
        return this.armyList.abilityGroups.filter(x =>
            this.isAvailableAbilityGroup(x)
        );
    }

    private isAvailableAbilityGroup(group: AbilityGroup) {
        if (!group.allowUniqueUnits && this.definition.unique) {
            return false;
        }
        if (
            group.keywords &&
            !group.keywords.some(x => this.keywords.includes(x))
        ) {
            return false;
        }
        return canAddAbilityCategory(this, this.armyList, group.category);
    }

    private isAvailableExtraAbility(extraAbility: Ability) {
        if (extraAbility.restrictions) {
            if (extraAbility.restrictions.keywords) {
                if (
                    extraAbility.restrictions.keywords.every(
                        x => !this.keywords.includes(x)
                    )
                ) {
                    return false;
                }
            }
        }
        const maxCount = extraAbility.category
            ? this.armyList.getNumberOfEnhancements(extraAbility.category)
            : 0;
        const count = extraAbility.category
            ? this.extraAbilities.reduce(
                  (p, c) => p + (c.category === extraAbility.category ? 1 : 0),
                  0
              )
            : 0;
        return (
            count <= maxCount &&
            !this.armyList.hasAnyUnitExtraAbility(extraAbility) &&
            canAddAbilityCategory(this, this.armyList, extraAbility.category)
        );
    }

    @computed
    get points(): number {
        const points =
            this.armyList.pointMode === PointMode.MatchedPlay
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
            ? this.definition.attacks.map(x => ({
                  count: this.modelCount,
                  attack: x
              }))
            : [];
        for (const model of this.models) {
            for (const option of model.options) {
                if (option.attacks) {
                    for (const attack of option.attacks) {
                        const exisiting = attacks.find(
                            x => x.attack.id === attack.id
                        );
                        if (exisiting) {
                            exisiting.count += model.count;
                        } else {
                            attacks.push({
                                count: model.count,
                                attack: attack
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
            abilities = abilities.concat(this.extraAbilities);
        }

        const modelAbilities: AbilityModel[] = abilities.map(x => ({
            id: x.id,
            ability: x
        }));

        for (const model of this.models) {
            for (const option of model.options) {
                if (option.abilities) {
                    for (const ability of option.abilities) {
                        const existing = modelAbilities.find(
                            x => x.id === ability.id
                        );
                        if (existing) {
                            if (!existing.warscrollModel)
                                existing.warscrollModel = [];
                            existing.warscrollModel.push(model);
                        } else {
                            modelAbilities.push({
                                ability,
                                warscrollModel: [model],
                                id: ability.id
                            });
                        }
                    }
                    abilities = abilities.concat(option.abilities);
                }
            }
        }
        return modelAbilities;
    }

    @computed
    get availableBattalionUnits() {
        const result = this.armyList.battalions.flatMap(x =>
            x.unitTypes.filter(y => y.canAddUnit(this.definition))
        );
        if (this.battalionUnit) return result.concat(this.battalionUnit);
        return result;
    }

    @action
    setBattalionUnit = (unit: WarscrollBattalionUnit | null) => {
        this.battalionUnit = unit;
        this.armyList.save();
    };

    constructor(public armyList: ArmyList, public definition: Unit) {
        makeObservable(this);
        this.id = (armyList.serial++).toString();
    }
}

export class WarscrollBattalionUnit implements HasId {
    static serial = 0;
    id = (WarscrollBattalionUnit.serial++).toString();
    constructor(
        public battalion: WarscrollBattalion,
        public definition: BattalionUnit
    ) {
        makeObservable(this);
    }

    @computed get units(): UnitWarscroll[] {
        return this.battalion.armyList.units.filter(
            x => x.battalionUnit === this
        );
    }

    @computed
    get name() {
        return `${this.battalion.definition.name} ${this.definition.name}`;
    }

    @computed
    get isValid() {
        return this.units.length >= this.definition.min;
    }

    canAddUnit(unit: Unit) {
        if (this.units.length >= this.definition.max) return false;

        if (
            this.definition.keywords &&
            !this.definition.keywords.some(x => unit.keywords.includes(x))
        )
            return false;
        if (
            this.definition.requiredRoles &&
            (!unit.roles ||
                !this.definition.requiredRoles.some(x =>
                    unit.roles.includes(x)
                ))
        )
            return false;
        if (
            this.definition.excludedRoles &&
            unit.roles &&
            this.definition.excludedRoles.some(x => unit.roles.includes(x))
        )
            return false;
        if (
            this.definition.woundsLimit !== null &&
            unit.wounds &&
            unit.wounds > this.definition.woundsLimit
        )
            return false;
        return true;
    }
}

export class WarscrollBattalion implements WarscrollBattalionInterface {
    id: string;
    type: "battalion" = "battalion";

    unitTypes: WarscrollBattalionUnit[];

    @observable
    enhancement: AbilityCategory | null = null;

    @computed get abilities(): AbilityModel[] {
        return (
            this.definition.abilities.map(ability => ({
                ability,
                id: ability.id
            })) || []
        );
    }

    constructor(public armyList: ArmyList, public definition: Battalion) {
        makeObservable(this);
        this.id = (armyList.serial++).toString();
        this.unitTypes = definition.units.map(
            x => new WarscrollBattalionUnit(this, x)
        );
    }

    @action
    setEnhancementType = (type: AbilityCategory | null) => {
        this.enhancement = type;
        this.armyList.save();
    };
}
