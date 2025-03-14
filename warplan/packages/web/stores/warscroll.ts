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
    AbilityCategory,
    ArmyListInterface,
    PointMode,
    WarscrollBattalionUnitInterface,
    AuraType,
    TargetCondition,
} from "../../common/data";

import { ArmyList } from "./army-list";
import { getUnitModelsWithOptionCount } from "./overrides/tools";
import { Role } from "../../common/definitions";

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
        return options.filter((x) => this.isOptionAvailable(x));
    }

    private isOptionAvailable(option: ModelOption) {
        if (this.options.some((x) => x.id === option.id)) return false;
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
                    (x) => x.id !== this.id && x.options.some((y) => y.champion)
                )
            )
                return false;
            if (this.count > 1) return false;
        }

        if (option.modelCategory !== undefined) {
            if (
                this.options.some(
                    (x) =>
                        x.modelCategory === option.modelCategory &&
                        x.id !== option.id
                )
            )
                return false;
        }

        if (option.unitCategory !== undefined) {
            if (
                this.unitWarscroll.models.some((x) =>
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

export type WarscrollItem = UnitWarscroll | WarscrollBattalion;

export class UnitWarscroll implements UnitWarscrollInterface {
    private static serial = 1;
    type: "unit" = "unit";
    id: string;

    @observable
    models: WarscrollModel[] = [];

    @observable.shallow
    battalionUnit: WarscrollBattalionUnitInterface | null = null;

    @observable
    selectedRole: Role | null = null;

    @computed
    get name() {
        if (this.definition.subName)
            return `${this.definition.name} ${this.definition.subName}`;
        return this.definition.name;
    }

    get allegiance() {
        return this.armyList.allegiance;
    }

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
        let keywords = this.definition.keywords;
        for (const artefact of this.extraAbilities) {
            if (artefact.effects) {
                for (const effect of artefact.effects) {
                    if (effect.auras) {
                        for (const aura of effect.auras) {
                            if (
                                aura.type === AuraType.Special &&
                                aura.addKeyword &&
                                this.checkConditions(aura.condition)
                            ) {
                                keywords = keywords.concat(aura.addKeyword);
                            }
                        }
                    }
                }
            }
        }
        return keywords;
    }

    private checkConditions(conditions: TargetCondition | undefined) {
        if (!conditions) return true;
        if (conditions.noKeyword) {
            if (this.definition.keywords.includes(conditions.noKeyword))
                return false;
        }
        return true;
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
        return this.role === Role.Artillery;
    }

    get isLeader() {
        return this.role === Role.Leader;
    }

    get isBehemot() {
        return this.role === Role.Behemoth;
    }

    get isBattleline() {
        return this.role === Role.Battleline;
    }

    get isEndlessSpell() {
        return this.role === Role.EndlessSpell;
    }

    get isOther() {
        return (
            !this.isArtillery &&
            !this.isBehemot &&
            !this.isLeader &&
            !this.isBattleline
        );
    }

    get isGeneral(): boolean {
        return this.armyList.general === this;
    }

    @action
    setExtraAbility = (
        oldAbility: Ability | undefined,
        ability: Ability | null
    ) => {
        if (oldAbility)
            this.extraAbilities = this.extraAbilities.filter(
                (x) => x.id !== oldAbility.id
            );
        if (ability) this.extraAbilities.push(ability);
        this.armyList.save();
    };

    @computed
    get availableExtraAbilities() {
        return this.availableAbilityGroups
            .flatMap((x) => x.abilities)
            .filter((x) => this.isAvailableExtraAbility(x))
            .sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    @computed
    get availableAbilityGroups() {
        return this.armyList.availableAbilityGroups.filter((x) =>
            this.isAvailableAbilityGroup(x)
        );
    }

    @computed
    get abilityCategories() {
        const categories: AbilityCategory[] = [AbilityCategory.Mount];
        if (this.isLeader)
            categories.push(AbilityCategory.Artefact, AbilityCategory.Command);
        if (this.isGeneral) categories.push(AbilityCategory.CommandTrait);
        if (this.keywords.includes("PRIEST"))
            categories.push(AbilityCategory.Prayer);
        if (
            this.definition.abilities?.some(
                (x) => x.category === AbilityCategory.Spell
            ) ||
            this.keywords.includes("WIZARD")
        )
            categories.push(AbilityCategory.Spell);
        return categories;
    }

    getNumberOfEnhancements(abilityCategory: AbilityCategory) {
        return this.extraAbilities.reduce(
            (c, p) => c + (p.category === abilityCategory ? 1 : 0),
            0
        );
    }

    getMaxNumberOfEnhancements(abilityCategory: AbilityCategory) {
        const number =
            1 + this.armyList.getNumberOfEnhancements(abilityCategory);
        if (abilityCategory === AbilityCategory.Artefact) {
            return (
                number -
                this.armyList.units.reduce(
                    (p, x) =>
                        p +
                        (x.id !== this.id
                            ? x.getNumberOfEnhancements(abilityCategory)
                            : 0),
                    0
                )
            );
        }
        return number;
    }

    private isAvailableAbilityGroup(group: AbilityGroup) {
        if (!group.allowUniqueUnits && this.definition.unique) {
            return false;
        }
        if (
            group.keywords &&
            !group.keywords.some((x) => this.keywords.includes(x))
        ) {
            return false;
        }
        // const maxCount = group.category
        //     ? this.armyList.getNumberOfEnhancements(group.category)
        //     : 0;
        // const count = group.category
        //     ? this.extraAbilities.reduce(
        //           (p, c) => p + (c.category === group.category ? 1 : 0),
        //           0
        //       )
        //     : 0;
        // if (count > maxCount) return false;
        return this.abilityCategories.includes(group.category);
    }

    public isAvailableExtraAbility(extraAbility: Ability) {
        if (extraAbility.restrictions) {
            if (extraAbility.restrictions.keywords) {
                if (
                    extraAbility.restrictions.keywords.every(
                        (x) => !this.keywords.includes(x)
                    )
                ) {
                    return false;
                }
            }
        }
        return !this.armyList.hasAnyUnitExtraAbility(extraAbility);
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
        return this.definition.attacks;
    }

    @computed
    get attackWithCounts() {
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

    @computed get baseAbilities(): Ability[] {
        return this.definition.abilities || [];
    }

    @computed get abilities(): Ability[] {
        let abilities = this.baseAbilities;
        if (this.definition.commandAbilities)
            abilities = abilities.concat(this.definition.commandAbilities);
        if (this.extraAbilities) {
            abilities = abilities.concat(this.extraAbilities);
        }

        for (const model of this.models) {
            for (const option of model.options) {
                if (option.abilities) {
                    abilities = abilities.concat(option.abilities);
                }
            }
        }
        return abilities;
    }

    @computed
    get availableBattalionUnits() {
        const result = this.armyList.battalions.flatMap((x) =>
            x.unitTypes.filter((y) => y.canAddUnit(this))
        );
        if (this.battalionUnit) return result.concat(this.battalionUnit);
        return result;
    }

    @action
    setBattalionUnit = (unit: WarscrollBattalionUnitInterface | null) => {
        this.battalionUnit = unit;
        this.armyList.save();
    };

    @computed
    get availableRoles() {
        const result = [];
        for (const role of this.definition.roles) {
            if (this.armyList.isRoleAvailable(role)) {
                if (role.enforced) {
                    return [role.role];
                }
                result.push(role.role);
            }
        }
        return result;
    }

    @computed
    get role() {
        if (this.availableRoles.length === 0) return Role.Other;
        if (
            this.selectedRole &&
            this.availableRoles.includes(this.selectedRole)
        )
            return this.selectedRole;
        return this.availableRoles[0];
    }

    constructor(public armyList: ArmyListInterface, public definition: Unit) {
        makeObservable(this);
        this.id = (UnitWarscroll.serial++).toString();
    }
}

export class WarscrollBattalionUnit implements WarscrollBattalionUnitInterface {
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
            (x) => x.battalionUnit === this
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

    canAddUnit(unit: UnitWarscrollInterface) {
        if (this.units.length >= this.definition.max) return false;

        if (
            this.definition.keywords &&
            !this.definition.keywords.some((x) => unit.keywords.includes(x))
        )
            return false;
        if (
            this.definition.requiredRoles &&
            !this.definition.requiredRoles.includes(unit.role)
        )
            return false;
        if (
            this.definition.excludedRoles &&
            this.definition.excludedRoles.includes(unit.role)
        )
            return false;
        if (
            this.definition.woundsLimit !== null &&
            unit.definition.wounds &&
            unit.definition.wounds > this.definition.woundsLimit
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

    @computed get name() {
        return this.definition.name;
    }

    @computed get abilities(): Ability[] {
        return this.definition.abilities;
    }

    constructor(public armyList: ArmyList, public definition: Battalion) {
        makeObservable(this);
        this.id = (armyList.serial++).toString();
        this.unitTypes = definition.units.map(
            (x) => new WarscrollBattalionUnit(this, x)
        );
    }

    @action
    setEnhancementType = (type: AbilityCategory | null) => {
        this.enhancement = type;
        this.armyList.save();
    };
}
