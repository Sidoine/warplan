import {
    Attack,
    Ability,
    Unit,
    Model,
    Material,
    WarscrollModelInterface,
    ModelOption,
    UnitWarscrollInterface,
    AbilityEffect,
    ModelOptionCategory,
    UnitOptionCategory,
    Aura,
} from "../../../common/data";

type ModelCondition = (
    unit: UnitWarscrollInterface,
    model: WarscrollModelInterface
) => boolean;
export function setAbilityAsOption(
    unit: Unit,
    ability: Ability,
    condition?: (option: ModelOption) => ModelCondition,
    unitCategory?: UnitOptionCategory
) {
    removeAbility(unit, ability);
    const option: ModelOption = {
        id: ability.name,
        name: ability.name,
        abilities: [ability],
        unitCategory: unitCategory,
    };
    if (condition) option.isOptionValid = condition(option);
    return addOption(unit, option);
}

export function addOption(unit: Unit, option: ModelOption) {
    if (!unit.options) unit.options = [];
    unit.options.push(option);
    return option;
}

export function addAttackToOption(
    option: ModelOption,
    unit: Unit,
    attack: Attack
) {
    if (!option.attacks) option.attacks = [];
    removeAttack(unit, attack);
    option.attacks.push(attack);
    return attack;
}

export function addAbilityToOption(
    option: ModelOption,
    unit: Unit,
    ability: Ability,
    effect?: AbilityEffect
) {
    if (!option.abilities) option.abilities = [];
    removeAbility(unit, ability);
    option.abilities.push(ability);
    if (effect) addAbilityEffect(ability, effect);
    return ability;
}

export function setAttackAsOption(
    unit: Unit,
    attack: Attack,
    condition?: (option: ModelOption) => ModelCondition,
    abilities?: Ability[],
    unitCategory?: UnitOptionCategory
) {
    if (unit.attacks) {
        unit.attacks.splice(unit.attacks.indexOf(attack), 1);
    }
    if (abilities) {
        for (const ability of abilities) {
            removeAbility(unit, ability);
        }
    }
    const option = addOption(unit, {
        id: attack.name,
        name: attack.name,
        attacks: [attack],
        modelCategory: ModelOptionCategory.Weapon,
        abilities: abilities,
        unitCategory: unitCategory,
    });
    if (condition) option.isOptionValid = condition(option);
    return option;
}

export function setAttackAsUpgrade(
    unit: Unit,
    attack: Attack,
    upgradeTo: Attack,
    condition?: (option: ModelOption) => ModelCondition,
    abilities?: Ability[],
    unitCategory?: UnitOptionCategory
) {
    setAttackAsOption(
        unit,
        upgradeTo,
        undefined,
        undefined,
        UnitOptionCategory.Main
    );
    setAttackAsOption(unit, attack, condition, abilities, unitCategory);
}

export function removeAttack(unit: Unit, attack: Attack) {
    if (unit.attacks) {
        const index = unit.attacks.indexOf(attack);
        if (index >= 0) unit.attacks.splice(index, 1);
    }
    return attack;
}

export function removeAbility(unit: Unit, ability: Ability) {
    if (unit.abilities) {
        const index = unit.abilities.indexOf(ability);
        if (index >= 0) unit.abilities.splice(index, 1);
    }
    return ability;
}

export function addEffect(ability: Ability, effect: AbilityEffect) {
    if (!ability.effects) ability.effects = [];
    ability.effects.push(effect);
    return effect;
}

export function updateEffect(
    ability: Ability,
    effect?: Partial<AbilityEffect>,
    aura?: Aura
) {
    if (ability.effects) {
        if (effect) Object.assign(ability.effects[0], effect);
        if (aura) {
            if (!ability.effects[0].auras) ability.effects[0].auras = [];
            ability.effects[0].auras.push(aura);
        }
    }
}

export function updateAura(ability: Ability, aura: Aura) {
    if (ability.effects && ability.effects[0].auras) {
        Object.assign(ability.effects[0].auras[0], aura);
    }
}

export function updateAttack(attack: Attack, update: Partial<Attack>) {
    Object.assign(attack, update);
    return attack;
}

export function overrideAbility(ability: Ability, f: (x: Ability) => void) {
    override(ability, f);
}

export function overrideAbilities(
    f: (x: Ability) => void,
    ...abilities: Ability[]
) {
    for (const ability of abilities) override(ability, f);
}

export function overrideAttack(ability: Attack, f: (x: Attack) => void) {
    override(ability, f);
}

export function override<T>(value: T, f: (x: T) => void) {
    f(value);
}

export function overrideModel(model: Model, year: number, material: Material) {
    model.material = material;
    model.publicationYear = year;
}

export function mergeModels(
    models: Record<string, Model>,
    name: string,
    year: number,
    material: Material,
    ...units: Unit[]
) {
    const model = units[0].model;
    model.material = material;
    model.publicationYear = year;
    model.name = name;
    for (const unit of units) {
        if (model.id !== unit.model.id) delete models[unit.model.id];
        unit.model = model;
    }
}

export function getBaseModelOption(id: string, options: ModelOption[]) {
    return options.find((x) => x.id === id);
}

export function setBaseModelOption(
    unit: Unit,
    id: string,
    attacks: Attack[],
    abilities: Ability[]
) {
    const option = getBaseModelOption(id, unit.options || []);
    if (option) {
        option.attacks = attacks;
        option.abilities = abilities;
    }
    return option || {};
}

// export const artifactAvailable: ExtraAbilityTest = (unit, ws) =>
//     unit.isLeader &&
//     unit.extraAbilities.every(x => x.category !== AbilityCategory.Artefact) &&
//     ws.selectedExtraAbilities.filter(
//         x => x.category === AbilityCategory.Artefact
//     ).length < ws.maxArtifacts;

// export function artifactWithKeywordAvailable(
//     keyword: string,
//     alts: string[]
// ): ExtraAbilityTest {
//     return (unit, ws) =>
//         artifactAvailable(unit, ws) &&
//         unit.definition.keywords.indexOf(keyword) >= 0 &&
//         alts.some(
//             x =>
//                 x === "ALL" ||
//                 unit.definition.model.name.toUpperCase() === x ||
//                 unit.definition.keywords.indexOf(x) >= 0
//         );
// }

export function hasOption(model: WarscrollModelInterface, option: ModelOption) {
    return !model || model.options.some((x) => x.id === option.id);
}

export function getUnitModelsWithOptionCount(
    unit: UnitWarscrollInterface,
    option: ModelOption
) {
    return unit.models.reduce(
        (p, x) => (hasOption(x, option) ? p + x.count : p),
        0
    );
}

export function getUnitModelsWithOptionsCount(
    unit: UnitWarscrollInterface,
    option1: ModelOption,
    option2: ModelOption
) {
    return unit.models.reduce(
        (p, x) =>
            hasOption(x, option1) && hasOption(x, option2) ? p + x.count : p,
        0
    );
}

export function isRatioCorrect(
    unit: UnitWarscrollInterface,
    option: ModelOption,
    howMany: number,
    forHowMany: number
) {
    return (
        getUnitModelsWithOptionCount(unit, option) <=
        (unit.modelCount * howMany) / forHowMany
    );
}

export function oneModelOption(option: ModelOption) {
    return (unit: UnitWarscrollInterface, model: WarscrollModelInterface) =>
        getUnitModelsWithOptionCount(unit, option) <= 1;
}

export function ratioModelOption(howMany: number, forHowMany: number) {
    return (option: ModelOption) => {
        return (unit: UnitWarscrollInterface, model: WarscrollModelInterface) =>
            isRatioCorrect(unit, option, howMany, forHowMany);
    };
}

export const frequentRate = 0.75;
export const mediumRate = 0.5;
export const rareRate = 0.2;
export const numberOfNeighborUnits = 2;
export const enemyModelsInRange = 3;
export const numberOfModelsPerUnit = 4;

export function addAbilityEffect(ability: Ability, auraEffect: AbilityEffect) {
    if (!auraEffect.name) auraEffect.name = ability.name;
    if (ability.effects === undefined) ability.effects = [];
    ability.effects.push(auraEffect);
}
