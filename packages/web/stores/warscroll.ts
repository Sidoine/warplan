import { computed, observable, makeObservable } from "mobx";
import {
    Battalion,
    Unit,
    UnitWarscrollInterface,
    WarscrollBattalionInterface,
    WarscrollModelInterface,
    EndlessSpell,
    ModelOption,
    Ability,
    AbilityGroup
} from "../../common/data";

import { canAddAbilityCategory } from "./conditions";
import { ArmyList } from "./army-list";
import { getUnitModelsWithOptionCount } from "./overrides/tools";

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

export type WarscrollItem =
    | UnitWarscroll
    | WarscrollEndlessSpell
    | WarscrollBattalion;

export class UnitWarscroll implements UnitWarscrollInterface {
    type: "unit" = "unit";
    id: string;

    @observable
    models: WarscrollModel[] = [];

    @observable
    battalion: WarscrollBattalionInterface | null = null;

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
        return Math.ceil(this.modelCount / this.definition.size);
    }

    @computed
    get modelCount() {
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
        return this.definition.role === "artillery";
    }

    get isLeader() {
        return this.definition.role === "leader";
    }

    get isBehemot() {
        return this.definition.role === "behemoth";
    }

    get isBattleline() {
        return this.definition.role === "battleline";
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
        return this.availableAbilityGroups
            .reduce((p, c) => p.concat(c.abilities), new Array<Ability>())
            .filter(x => this.isAvailableExtraAbility(x))
            .sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    @computed
    get availableAbilityGroups() {
        return this.warscroll.abilityGroups.filter(x =>
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
        return canAddAbilityCategory(this, this.warscroll, group.category);
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
        return (
            this.extraAbilities.every(
                x => x.category !== extraAbility.category
            ) &&
            !this.warscroll.hasAnyUnitExtraAbility(extraAbility) &&
            canAddAbilityCategory(this, this.warscroll, extraAbility.category)
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

    constructor(public warscroll: ArmyList, public definition: Unit) {
        makeObservable(this);
        this.id = (warscroll.serial++).toString();
    }
}

export class WarscrollEndlessSpell {
    id: number;
    type: "endless" = "endless";

    @computed get abilities(): AbilityModel[] {
        return (
            this.definition.abilities?.map(ability => ({
                ability,
                id: ability.id
            })) || []
        );
    }

    constructor(public warscroll: ArmyList, public definition: EndlessSpell) {
        this.id = warscroll.serial++;
    }
}

export class WarscrollBattalion implements WarscrollBattalionInterface {
    id: string;
    type: "battalion" = "battalion";

    @computed get abilities() {
        return (
            this.definition.abilities?.map(ability => ({
                ability,
                id: ability.id
            })) || []
        );
    }

    constructor(public warscroll: ArmyList, public definition: Battalion) {
        makeObservable(this);
        this.id = (warscroll.serial++).toString();
    }

    @computed get units() {
        return this.warscroll.units.filter(
            x => x.battalion !== null && x.battalion.id === this.id
        );
    }
}
