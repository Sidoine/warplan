import { UnitStatModels, Unit, UnitState, UnitStatModel, Attack, AttackCondition, TargetCondition, AbilityEffect, Ability } from "./units";
import { getValue } from "./combat";


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

function applyEffect(caster: UnitState, target: UnitState, effect: AbilityEffect, stats: UnitStats, ratio?: number) {
    if (!targetEnemy(effect)) target = caster;
    if (effect.condition && !checkCondition(effect.condition, caster)) return;
    if (effect.targetCondition && !checkCondition(effect.targetCondition, target)) return;
    if (effect.randomEffectRange) {
        ratio = (effect.randomEffectRange.max - effect.randomEffectRange.min + 1) / 6;
    }
    if (effect.timesPerBattle) {
        ratio = (ratio || 1) * effect.timesPerBattle / 5;
    }    
    if (effect.attackAura) {
        target.addAttackAura({ aura: effect.attackAura, effectRatio: ratio });
    }
    if (effect.mortalWounds) {
        const mortalWounds = getValue(effect.mortalWounds) * (ratio || 1);
        if (effect.targetRange) {
            stats.rangedDamage += mortalWounds;
        } else {
            stats.meleeDamage += mortalWounds;
        }
    }
}

export function checkCondition(condition: TargetCondition, target: UnitState) {
    if (condition.hasCharged && !target.hasCharged) return false;
    if (condition.hasMoved && !target.hasMoved) return false;
    if (condition.hasNotCharged && target.hasCharged) return false;
    if (condition.hasNotMoved && target.hasMoved) return false;
    if (condition.keyword && target.unit.keywords.indexOf(condition.keyword) < 0) return false;
    if (condition.minWounds && getValue(target.unit.wounds) < condition.minWounds) return false;
    return true;
}

function checkAttackCondition(condition: AttackCondition, attack: Attack) {
    if (condition.onlyMeleeAttacks && !attack.melee) return false;
    if (condition.onlyMissileAttacks && attack.melee) return false;
    return true;
}

export function targetEnemy(effect: AbilityEffect) {
    return effect.targetEnemy || effect.targetAura || effect.mortalWounds;
}

function computeModelStats(myState: UnitState, enemyState: UnitState, unit: Unit, model: UnitStatModel, stats: UnitStats) {
    let abilities = unit.abilities || [];
    let attacks = unit.attacks || [];
    for (const option of model.options) {
        if (option.abilities) abilities = abilities.concat(option.abilities)
        if (option.attacks) attacks = attacks.concat(option.attacks);
    }
    
    for (const ability of abilities) {
        if (ability.effects) {
            for (const effect of ability.effects) {
                applyEffect(myState, enemyState, effect, stats);
            }
        } else {
            if (stats.ignoredAbilities.find(x => x.name === ability.name) === undefined) {
                stats.ignoredAbilities.push(ability);
            }
        }
    }
    for (const attack of attacks) {
        const attackAura = myState.attackAura;
        if (attackAura.attackCondition && !checkAttackCondition(attackAura.attackCondition, attack)) continue;
        let numberOfAttacks = (getValue(attack.attacks) + getValue(attackAura.bonusAttacks)) * model.count;
        let toHit = getValue(attack.toHit) - getValue(attackAura.bonusHitRoll);
        let toWound = getValue(attack.toWound);
        let damage = getValue(attack.damage);
        let numberOfHitsOnUnmodified6 = getValue(attackAura.numberOfHitsOnUnmodified6);
        let numberOfHitsOnHit = getValue(attackAura.numberOfHitsOnHit) || 1;
        let rerollHitsOn = getValue(attackAura.rerollHitsOn);
        let rend = getValue(attack.rend);
        let enemySave = getValue(enemyState.unit.save);
        let mortalWoundsOnHitIsUnmodifed6 = getValue(attackAura.mortalWoundsOnHitUnmodified6);
        let numberOfMortalWounds = getValue(attackAura.mortalWounds);
        let effectsOnHitUnmodified6 = attackAura.effectsOnHitUnmodified6 || [];
        let damageOnWoundUnmodified6 = getValue(attackAura.damageOnWoundUnmodified6);
        
        if (!toHit) continue;
        
        let numberOfHits = numberOfAttacks * (7 - toHit) / 6;
        if (effectsOnHitUnmodified6) {
            for (const effect of effectsOnHitUnmodified6) {
                applyEffect(myState, enemyState, effect, stats, numberOfAttacks * 1 / 6);
            }
        }

        if (mortalWoundsOnHitIsUnmodifed6) {
            numberOfHits -= numberOfAttacks * 1/6;
            numberOfMortalWounds += 1/6 * numberOfAttacks * mortalWoundsOnHitIsUnmodifed6;
        }

        if (rerollHitsOn) {
            numberOfHits *= 7 / 6;
        }
        if (numberOfHitsOnUnmodified6) {
            numberOfHits += (numberOfHitsOnUnmodified6 - 1) / 6;
        }
        numberOfHits *= numberOfHitsOnHit;

        if (damageOnWoundUnmodified6 > 0) {
            damage = (damage * (6 - toWound) + damageOnWoundUnmodified6) / (7 - toWound);
        }
        let numberOfWounds = numberOfHits * (7 - toWound) / 6;
        numberOfMortalWounds += damage * ((enemySave - rend < 7) ? numberOfWounds * (enemySave - rend - 1) / 6 : numberOfWounds);
        if (attack.melee) {
            stats.meleeDamage += numberOfMortalWounds;
        } else {
            stats.rangedDamage += numberOfMortalWounds;
        }
    }
}

function computeUnitStats(stats: UnitStats, unit: Unit, models: UnitStatModel[]) {
    const myState = new UnitState(unit);
    const enemyState = new UnitState({ id: "enemy", model: { id: "enemy", name: "Enemy" }, size: 1, points: 0, wounds: 2, factions: [], keywords: [], save: 5 });

    for (const model of models) {
        computeModelStats(myState, enemyState, unit, model, stats);
    }
}

export function getUnitStats(unit: Unit): UnitStats[] {
    let modelStats = unit.modelStats;
    if (!modelStats) {
        if (unit.options && unit.options.length > 0) {
            modelStats = unit.options.filter(x => x.unitCategory === "main").map<UnitStatModels>(x => {
                return {
                    name: x.name,
                    models: [{ count: unit.size, options: [x] }]
                }
            });
        }
        else {
            modelStats = [{ name: "Main", models: [{ count: unit.size, options: [] }] }]
        }
    }

    return modelStats.map(x => {
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
        computeUnitStats(result, unit, x.models);
        result.totalDamage = result.meleeDamage * 1.5 + result.rangedDamage;
        return result;
    });
}