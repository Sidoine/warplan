import { test, TestContext } from "ava";
import { getUnitStats, Unit, Attack, Ability, AttackAura, UnitState } from "../../src/stores/units";
import { RandomCombat } from "../../src/stores/combat";

const randomCombat = new RandomCombat();

async function computeUnitDamage(unit: Unit, melee?: boolean) {
    let result = 0;
    const enemyUnit: Unit = { id: "enemy", model: { id: "enemy", name: "Enemy" }, size: 1, points: 0, wounds: 2, factions: [], keywords: [], save: 5 };
    const tries = 50000;
    if (unit.attacks) {
        for (let i = 0; i < tries; i++) {
            const myState = new UnitState(unit);
            const enemyState = new UnitState(enemyUnit);
            let abilities = unit.abilities || [];
            for (const ability of abilities) {
                if (ability.effects) {
                    for (const effect of ability.effects) {
                        await randomCombat.executeAbilityEffect(myState, enemyState, effect);
                    }
                }
            }
            for (const attack of unit.attacks) {
                if (attack.melee === melee) {
                    await randomCombat.executeAttack(myState, enemyState, attack);
                }
            }
            result += enemyState.wounds;
        }
    }
    return result / tries;
}

function near(t: TestContext, expected: number, value: number) {
    return t.true(Math.abs(value - expected) < 0.01, `real=${value} - stats=${expected} > 0.01`);
}

function createFakeUnit(attacks?: Attack[], abilities?: Ability[]): Unit {
    return {
        id: "fake",
        keywords: [],
        model: { id: "fake", name: "Fake" },
        factions: [],
        size: 1,
        points: 100,
        attacks: attacks,
        abilities: abilities
    };
}

function createFakeAttack(): Attack {
    return { attacks: 1, damage: 1, name: "Fake", melee: true, range: 1, rend: -1, toHit: 5, toWound: 4 };
}

test("stat of simple unit without damage", t => {
    // Arrange
    const unit = createFakeUnit();

    // Act
    const unitStats = getUnitStats(unit);

    // Assert
    t.is(unitStats.length, 1);
    t.is(unitStats[0].meleeDamage, 0);
    t.is(unitStats[0].rangedDamage, 0);
});

test("stat of simple unit without any ability", async t => {
    // Arrange
    const unit = createFakeUnit([createFakeAttack()]);
    
    // Act
    const unitStats = getUnitStats(unit);

    // Assert
    t.is(unitStats.length, 1);
    near(t, unitStats[0].meleeDamage, await computeUnitDamage(unit, true));
    near(t, unitStats[0].rangedDamage, await computeUnitDamage(unit));
});

test("stat of unit with aura", async t => {
    // Arrange
    const attackAura: AttackAura = {
        effectsOnHitUnmodified6: [{ mortalWounds: 1 }],
        damageOnWoundUnmodified6: "7"
    };
    const unit = createFakeUnit([createFakeAttack()], [{ effects: [{ attackAura: attackAura }], name: "Fake" }]);

    // Act
    const unitStats = getUnitStats(unit);

    // Assert
    t.is(unitStats.length, 1);
    near(t, unitStats[0].meleeDamage, await computeUnitDamage(unit, true));
});

