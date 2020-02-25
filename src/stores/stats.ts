import {
    UnitStatModels,
    Unit,
    UnitStatModel,
    Attack,
    TargetCondition,
    AbilityEffect,
    Ability,
    TargetType,
    Phase
} from "./units";
import { getValue } from "./combat";
import {
    States,
    UnitState,
    ModelState,
    WeaponState,
    sumAttackAura,
    addAttackAura
} from "./unit-state";

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
    ratio?: number,
    attack?: Attack
) {
    if (!targetEnemy(effect)) {
        if (effect.targetType & TargetType.Model) {
            target = caster;
        } else {
            target = caster.unitState;
        }
    }
    if (effect.condition && !checkCondition(effect.condition, caster.unitState))
        return false;
    if (
        effect.targetCondition &&
        !checkCondition(effect.targetCondition, target.unitState)
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
        const mortalWounds = getValue(effect.mortalWounds) * (ratio || 1);
        if (effect.phase !== Phase.Combat) {
            stats.rangedDamage += mortalWounds;
        } else {
            stats.meleeDamage += mortalWounds;
        }
    }
    if (effect.mortalWoundsPerModel) {
        const mortalWounds =
            getValue(effect.mortalWoundsPerModel) *
            (ratio || 1) *
            caster.unitState.unit.size;
        if (effect.phase !== Phase.Combat) {
            stats.rangedDamage += mortalWounds;
        } else {
            stats.meleeDamage += mortalWounds;
        }
    }
    if (effect.attackAura) {
        addAttackAura(caster, { aura: effect.attackAura, effectRatio: ratio });
    }
    return true;
}

export function checkCondition(condition: TargetCondition, target: UnitState) {
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
        condition.anyKeyword &&
        condition.anyKeyword.every(x => target.unit.keywords.indexOf(x) < 0)
    )
        return false;
    if (
        condition.minWounds &&
        getValue(target.unit.wounds) < condition.minWounds
    )
        return false;
    if (
        condition.minModels &&
        target.models.length < getValue(condition.minModels)
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
    let numberOfAttacks =
        (getValue(attack.attacks) + getValue(attackAura.bonusAttacks)) *
        weaponState.modelState.size;
    let toHit = getValue(attack.toHit) - getValue(attackAura.bonusHitRoll);
    let toWound = getValue(attack.toWound);
    let damage = getValue(attack.damage);
    let numberOfHitsOnUnmodified6 = getValue(
        attackAura.numberOfHitsOnUnmodified6
    );
    let numberOfHitsOnHit = getValue(attackAura.numberOfHitsOnHit) || 1;
    let rerollHitsOn1 = getValue(attackAura.rerollHitsOn1);
    let rend = getValue(attack.rend) + getValue(attackAura.bonusRend);
    let enemySave = getValue(enemyState.unit.save);
    let mortalWoundsOnHitIsUnmodifed6 = getValue(
        attackAura.mortalWoundsOnHitUnmodified6
    );
    let numberOfMortalWounds = getValue(attackAura.mortalWounds);
    let effectsOnHitUnmodified6 = attackAura.effectsOnHitUnmodified6 || [];
    let damageOnWoundUnmodified6 = getValue(
        attackAura.damageOnWoundUnmodified6
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

    if (damageOnWoundUnmodified6 > 0) {
        damage =
            (damage * (6 - toWound) + damageOnWoundUnmodified6) / (7 - toWound);
    }
    let numberOfWounds = (numberOfHits * (7 - toWound)) / 6;
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
            const applied = applyEffect(unitState, enemyState, effect, stats);
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
            const applied = applyEffect(modelState, enemyState, effect, stats);
            if (applied && effect.ignoreOtherEffects) break;
            if (!applied) {
                for (const weaponState of modelState.weaponStates) {
                    const weaponApplied = applyEffect(
                        weaponState,
                        enemyState,
                        effect,
                        stats
                    );
                    if (weaponApplied) break;
                }
            }
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
    enemy: { save: number }
) {
    // Create states
    const unitState = new UnitState(unit);
    const enemyState = new UnitState({
        id: "enemy",
        name: "Enemy",
        model: { id: "enemy", name: "Enemy" },
        size: 1,
        points: 0,
        wounds: 2,
        factions: [],
        keywords: [],
        save: enemy.save
    });
    enemyState.models.push(new ModelState([], enemyState, 1));

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
    }
}

export function getUnitStats(unit: Unit, enemy: { save: number }): UnitStats[] {
    let optionStats = unit.optionStats;
    if (!optionStats) {
        if (unit.options && unit.options.length > 0) {
            optionStats = unit.options
                .filter(x => x.unitCategory === "main")
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
            save: 0,
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
