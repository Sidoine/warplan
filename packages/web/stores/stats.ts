import {
    UnitStatModels,
    Unit,
    UnitStatModel,
    TargetCondition,
    AbilityEffect,
    Ability,
    TargetType,
    Phase,
    UnitOptionCategory
} from "../../common/data";
import { getValue } from "./combat";
import {
    States,
    UnitState,
    ModelState,
    WeaponState,
    sumAttackAura,
    addAttackAura
} from "./unit-state";
import { CombatSettings } from "./ui";

export interface UnitStats {
    name?: string;
    meleeDamage: number;
    rangedDamage: number;
    unit: Unit;
    save: number | undefined;
    savedWounds: number;
    totalDamage: number;
    ignoredAbilities: Ability[];
}

// function checkAttackCondition(attack: Attack | undefined, condition: TargetCondition | undefined) {
//     if (!condition) return true;
//     if (!attack) return false;
//     if (condition.meleeWeapon && !attack.melee) return false;
//     if (condition.rangedWeapon && attack.melee) return false;
//     if (condition.weaponId && condition.weaponId !== attack.id) return false;
//     return true;
// }

function applyEffect(
    caster: States,
    target: States,
    effect: AbilityEffect,
    stats: UnitStats,
    ratio?: number
) {
    if (effect.condition && !checkCondition(effect.condition, caster))
        return false;
    if (
        effect.targetCondition &&
        !checkCondition(effect.targetCondition, target)
    )
        return false;
    if (effect.randomEffectRange) {
        ratio =
            (effect.randomEffectRange.max - effect.randomEffectRange.min + 1) /
            6;
    }
    if (effect.timesPerBattle) {
        ratio = ((ratio || 1) * effect.timesPerBattle) / 5;
    }
    if (effect.mortalWounds) {
        const mortalWounds =
            getValue(effect.mortalWounds, target.unitState) * (ratio || 1);
        if (effect.phase !== Phase.Combat) {
            stats.rangedDamage += mortalWounds;
        } else {
            stats.meleeDamage += mortalWounds;
        }
    }
    if (effect.mortalWoundsPerModel) {
        const mortalWounds =
            getValue(effect.mortalWoundsPerModel, target.unitState) *
            (ratio || 1) *
            caster.unitState.unit.size;
        if (effect.phase !== Phase.Combat) {
            stats.rangedDamage += mortalWounds;
        } else {
            stats.meleeDamage += mortalWounds;
        }
    }
    if (effect.attackAura) {
        addAttackAura(target, { aura: effect.attackAura, effectRatio: ratio });
    }
    return true;
}

export function checkCondition(
    condition: TargetCondition,
    targetState: States
) {
    if (
        condition.weaponId &&
        (!targetState.attack || targetState.attack.id !== condition.weaponId)
    )
        return false;
    if (
        condition.meleeWeapon &&
        (!targetState.attack || !targetState.attack.melee)
    )
        return false;
    if (
        condition.rangedWeapon &&
        (!targetState.attack || targetState.attack.melee)
    )
        return false;
    const target = targetState.unitState;
    if (condition.hasCharged && !target.hasCharged) return false;
    if (condition.hasMoved && !target.hasMoved) return false;
    if (condition.hasNotCharged && target.hasCharged) return false;
    if (condition.hasNotMoved && target.hasMoved) return false;
    if (
        condition.keyword &&
        target.unit.keywords.indexOf(condition.keyword) < 0
    )
        return false;
    if (
        condition.noKeyword &&
        target.unit.keywords.includes(condition.noKeyword)
    )
        return false;
    if (
        condition.anyKeyword &&
        condition.anyKeyword.every(x => target.unit.keywords.indexOf(x) < 0)
    )
        return false;
    if (
        condition.minWounds &&
        getValue(target.unit.wounds, target) < condition.minWounds
    )
        return false;
    if (
        condition.minModels &&
        target.models.reduce((p, c) => p + c.size, 0) <
            getValue(condition.minModels, target)
    )
        return false;
    return true;
}

export function targetEnemy(effect: AbilityEffect) {
    return (effect.targetType & TargetType.Enemy) > 0;
}

function applyWeaponAttack(
    weaponState: WeaponState,
    enemyState: UnitState,
    stats: UnitStats,
    choice: string | undefined
) {
    const attack = weaponState.attack;
    if (attack.choice && attack.choice !== choice) return;
    const attackAura = sumAttackAura(
        sumAttackAura(
            sumAttackAura({}, weaponState.attackAura),
            weaponState.modelState.attackAura
        ),
        weaponState.modelState.unitState.attackAura
    );
    const numberOfAttacks =
        (getValue(attack.attacks, enemyState, weaponState.unitState) +
            getValue(
                attackAura.bonusAttacks,
                enemyState,
                weaponState.unitState
            )) *
        weaponState.modelState.size;
    const toHit =
        getValue(attack.toHit, enemyState) -
        getValue(attackAura.bonusHitRoll, enemyState);
    const toWound = getValue(attack.toWound, enemyState);
    let damage =
        getValue(attack.damage, enemyState) +
        getValue(attackAura.bonusDamage, enemyState);
    const numberOfHitsOnUnmodified6 = getValue(
        attackAura.numberOfHitsOnUnmodified6,
        enemyState
    );
    const numberOfHitsOnHit =
        getValue(attackAura.numberOfHitsOnHit, enemyState) || 1;
    const rerollHitsOn1 = getValue(attackAura.rerollHitsOn1, enemyState);
    const rend =
        getValue(attack.rend, enemyState) +
        getValue(attackAura.bonusRend, enemyState);
    const enemySave = getValue(enemyState.unit.save, enemyState);
    const mortalWoundsOnHitIsUnmodifed6 = getValue(
        attackAura.mortalWoundsOnHitUnmodified6,
        enemyState
    );
    const mortalWoundsOnHit = getValue(
        attackAura.mortalWoundsOnHit,
        enemyState
    );
    let numberOfMortalWounds = getValue(attackAura.mortalWounds, enemyState);
    const effectsOnHitUnmodified6 = attackAura.effectsOnHitUnmodified6 || [];
    const damageOnWoundUnmodified6 = getValue(
        attackAura.damageOnWoundUnmodified6,
        enemyState
    );

    if (!toHit) return;

    let numberOfHits = (numberOfAttacks * (7 - toHit)) / 6;
    if (effectsOnHitUnmodified6) {
        for (const effect of effectsOnHitUnmodified6) {
            applyEffect(
                weaponState,
                enemyState,
                effect,
                stats,
                (numberOfAttacks * 1) / 6
            );
        }
    }

    if (mortalWoundsOnHitIsUnmodifed6) {
        numberOfHits -= (numberOfAttacks * 1) / 6;
        numberOfMortalWounds +=
            (1 / 6) * numberOfAttacks * mortalWoundsOnHitIsUnmodifed6;
    }

    if (rerollHitsOn1) {
        numberOfHits *= 7 / 6;
    }
    if (numberOfHitsOnUnmodified6) {
        numberOfHits += (numberOfHitsOnUnmodified6 - 1) / 6;
    }
    if (attackAura.rerollFailedHits) {
        numberOfHits +=
            (((numberOfAttacks - numberOfHits) / numberOfAttacks) *
                numberOfHits) /
            numberOfAttacks;
    }
    numberOfHits *= numberOfHitsOnHit;

    if (mortalWoundsOnHit) {
        numberOfMortalWounds += numberOfHits * mortalWoundsOnHit;
        numberOfHits = 0;
    }

    if (damageOnWoundUnmodified6 > 0) {
        damage =
            (damage * (6 - toWound) + damageOnWoundUnmodified6) / (7 - toWound);
    }
    const numberOfWounds = (numberOfHits * (7 - toWound)) / 6;
    numberOfMortalWounds +=
        damage *
        (enemySave - rend < 7
            ? (numberOfWounds * (enemySave - rend - 1)) / 6
            : numberOfWounds);
    if (attack.melee) {
        stats.meleeDamage += numberOfMortalWounds;
    } else {
        stats.rangedDamage += numberOfMortalWounds;
    }
}

function applyUnitAbility(
    ability: Ability,
    unitState: UnitState,
    enemyState: UnitState,
    stats: UnitStats,
    choice?: string
) {
    if (ability.effects) {
        for (const effect of ability.effects) {
            if (effect.choice && effect.choice !== choice) continue;
            let applied: boolean;
            if (targetEnemy(effect)) {
                applied = applyEffect(unitState, enemyState, effect, stats);
            } else if (effect.targetType === TargetType.Model) {
                applied = false;
                for (const model of unitState.models) {
                    applied =
                        applyEffect(unitState, model, effect, stats) || applied;
                }
            } else if (effect.targetType === TargetType.Weapon) {
                applied = false;
                for (const model of unitState.models) {
                    for (const weapon of model.weaponStates) {
                        applied =
                            applyEffect(unitState, weapon, effect, stats) ||
                            applied;
                    }
                }
            } else {
                applied = applyEffect(unitState, unitState, effect, stats);
            }

            if (applied && effect.ignoreOtherEffects) break;
        }
    } else {
        if (
            stats.ignoredAbilities.find(x => x.name === ability.name) ===
            undefined
        ) {
            stats.ignoredAbilities.push(ability);
        }
    }
}

function applyModelAbility(
    ability: Ability,
    modelState: ModelState,
    enemyState: UnitState,
    stats: UnitStats,
    choice?: string
) {
    if (ability.effects) {
        for (const effect of ability.effects) {
            if (effect.choice && effect.choice !== choice) continue;
            let applied: boolean;
            if (effect.targetType === TargetType.Model) {
                applied = applyEffect(modelState, modelState, effect, stats);
            } else if (effect.targetType === TargetType.Weapon) {
                applied = false;
                for (const weaponState of modelState.weaponStates) {
                    if (effect.targetType === TargetType.Weapon) {
                        applied =
                            applyEffect(
                                modelState,
                                weaponState,
                                effect,
                                stats
                            ) || applied;
                    }
                }
            } else if (targetEnemy(effect)) {
                applied = applyEffect(modelState, enemyState, effect, stats);
            } else {
                applied = false;
            }
            if (applied && effect.ignoreOtherEffects) break;
        }
    } else {
        if (
            stats.ignoredAbilities.find(x => x.name === ability.name) ===
            undefined
        ) {
            stats.ignoredAbilities.push(ability);
        }
    }
}

function applyModelAttacks(
    myState: ModelState,
    enemyState: UnitState,
    stats: UnitStats,
    choice: string | undefined
) {
    for (const weaponState of myState.weaponStates) {
        applyWeaponAttack(weaponState, enemyState, stats, choice);
    }
}

function getUnitOptionStats(
    stats: UnitStats,
    unit: Unit,
    models: UnitStatModel[],
    choice: string | undefined,
    settings: CombatSettings
) {
    // Create states
    const unitState = new UnitState(unit);
    const enemyState = new UnitState({
        id: "enemy",
        name: "Enemy",
        model: { id: "enemy", name: "Enemy" },
        size: settings.enemyCount,
        points: 0,
        wounds: 2,
        factions: [],
        keywords: settings.enemyKeywords.split(" "),
        save: settings.enemySave,
        description: "An enemy"
    });
    enemyState.models.push(new ModelState([], enemyState, settings.enemyCount));
    if (settings.hasCharged) {
        unitState.hasCharged = true;
    }
    if (settings.hasMoved) {
        unitState.hasMoved = true;
    }

    for (const model of models) {
        const modelState = new ModelState(
            model.options,
            unitState,
            model.count
        );
        unitState.models.push(modelState);
        if (unit.attacks) {
            for (const attack of unit.attacks) {
                modelState.weaponStates.push(
                    new WeaponState(attack, modelState)
                );
            }
        }
        for (const option of model.options) {
            if (option.attacks) {
                for (const attack of option.attacks) {
                    modelState.weaponStates.push(
                        new WeaponState(attack, modelState)
                    );
                }
            }
        }
    }

    // Apply abilities
    if (unit.abilities) {
        for (const ability of unit.abilities) {
            applyUnitAbility(ability, unitState, enemyState, stats, choice);
        }
    }

    for (const model of unitState.models) {
        for (const option of model.options) {
            if (option.abilities) {
                for (const ability of option.abilities) {
                    applyModelAbility(
                        ability,
                        model,
                        enemyState,
                        stats,
                        choice
                    );
                }
            }
        }
    }

    // Compute stats
    for (const model of unitState.models) {
        applyModelAttacks(model, enemyState, stats, choice);
        stats.savedWounds +=
            ((getValue(unit.wounds) * 6) / ((getValue(unit.save) || 7) - 1)) *
            model.size;
    }
}

export function getUnitStats(unit: Unit, enemy: CombatSettings): UnitStats[] {
    let optionStats = unit.optionStats;
    if (!optionStats) {
        if (unit.options && unit.options.length > 0) {
            optionStats = unit.options
                .filter(x => x.unitCategory === UnitOptionCategory.Main)
                .map<UnitStatModels>(x => {
                    return {
                        name: x.name,
                        models: [{ count: unit.size, options: [x] }]
                    };
                });
        } else {
            optionStats = [
                { name: "Main", models: [{ count: unit.size, options: [] }] }
            ];
        }
    }

    return optionStats.map(x => {
        const result: UnitStats = {
            name: x.name,
            meleeDamage: 0,
            rangedDamage: 0,
            save: getValue(unit.save) || 0,
            savedWounds: 0,
            unit: unit,
            totalDamage: 0,
            ignoredAbilities: []
        };
        getUnitOptionStats(result, unit, x.models, x.choice, enemy);
        result.totalDamage = result.meleeDamage * 1.5 + result.rangedDamage;
        return result;
    });
}
