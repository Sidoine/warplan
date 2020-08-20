import { default as test, ExecutionContext } from "ava";
import { Unit, Attack, Ability, AttackAura, TargetType, Phase } from "./units";
import { RandomCombat } from "./combat";
import { UnitState } from "./unit-state";
import { getUnitStats } from "./stats";
import { Enemy } from "./ui";
const randomCombat = new RandomCombat();

async function computeUnitDamage(unit: Unit, melee?: boolean) {
    let result = 0;
    const enemyUnit: Unit = {
        id: "enemy",
        name: "Enemy",
        model: { id: "enemy", name: "Enemy" },
        size: 1,
        points: 0,
        wounds: 2,
        factions: [],
        keywords: [],
        save: 5
    };
    const tries = 50000;
    if (unit.attacks) {
        for (let i = 0; i < tries; i++) {
            const myState = new UnitState(unit);
            const enemyState = new UnitState(enemyUnit);
            const abilities = unit.abilities || [];
            for (const ability of abilities) {
                if (ability.effects) {
                    for (const effect of ability.effects) {
                        const applied = await randomCombat.executeAbilityEffect(
                            myState,
                            enemyState,
                            effect
                        );
                        if (applied && effect.ignoreOtherEffects) break;
                    }
                }
            }
            for (const attack of unit.attacks) {
                if (attack.melee === melee) {
                    await randomCombat.executeAttack(
                        myState,
                        enemyState,
                        attack
                    );
                }
            }
            result += enemyState.wounds;
        }
    }
    return result / tries;
}

function near(
    t: ExecutionContext,
    expected: number,
    value: number,
    text: string
) {
    return t.true(
        Math.abs(value - expected) < 0.01,
        `${text}=${value} - expected=${expected} > 0.01`
    );
}

function createFakeUnit(attacks?: Attack[], abilities?: Ability[]): Unit {
    return {
        id: "fake",
        name: "Fake",
        keywords: [],
        model: { id: "fake", name: "Fake" },
        factions: [],
        size: 1,
        points: 100,
        attacks: attacks,
        abilities: abilities
    };
}

function createFakeAttack(id = "fakeAttack"): Attack {
    return {
        id,
        attacks: 1,
        damage: 1,
        name: "Fake",
        melee: true,
        range: 1,
        rend: -1,
        toHit: 5,
        toWound: 4
    };
}

function createFakeEnemy(): Enemy {
    return {
        keywords: "",
        save: 5,
        charged: false
    };
}

test("stat of simple unit without damage", t => {
    // Arrange
    const unit = createFakeUnit();
    const enemy = createFakeEnemy();

    // Act
    const unitStats = getUnitStats(unit, enemy);

    // Assert
    t.is(unitStats.length, 1);
    t.is(unitStats[0].meleeDamage, 0);
    t.is(unitStats[0].rangedDamage, 0);
});

test("stat of simple unit without any ability", async t => {
    // Arrange
    const unit = createFakeUnit([createFakeAttack()]);
    const enemy = createFakeEnemy();

    // Act
    const unitStats = getUnitStats(unit, enemy);

    // Assert
    t.is(unitStats.length, 1);
    near(
        t,
        unitStats[0].meleeDamage,
        await computeUnitDamage(unit, true),
        "melee"
    );
    near(t, unitStats[0].rangedDamage, await computeUnitDamage(unit), "ranged");
});

function testattackaura(attackAura: AttackAura, expected?: number) {
    return async (t: ExecutionContext) => {
        // Arrange
        const unit = createFakeUnit(
            [createFakeAttack()],
            [
                {
                    effects: [
                        { targetType: TargetType.Unit, attackAura: attackAura }
                    ],
                    name: "Fake ability",
                    id: "fakeAbility"
                }
            ]
        );
        const enemy = createFakeEnemy();

        // Act
        const unitStats = getUnitStats(unit, enemy);

        // Assert
        t.is(unitStats.length, 1);
        if (expected) {
            near(t, expected, unitStats[0].meleeDamage, "stats");
            near(t, expected, await computeUnitDamage(unit, true), "combat");
        } else {
            near(
                t,
                unitStats[0].meleeDamage,
                await computeUnitDamage(unit, true),
                "combat"
            );
        }
    };
}

// enemy save à 5, soit 5/6 des blessures font des dommages
// 1/3 des attaques touches, 1/2 des touches blessent
//  return { attacks: 1, damage: 1, name: "Fake", melee: true, range: 1, rend: -1, toHit: 5, toWound: 4 };

// 900 attacks: 300 hits, 150 wounds dont 150 wounds, 125 MW
// Without modifier, the value is 0.1388...
test("no aura", testattackaura({}, 125 / 900));

// 900 attacks: 300 hits, 150 wounds dont 50 hits à 10 wounds et 100 hits à 1 wound, soit 600 wounds donc 500 MW
test(
    "damageOnWoundUnmodified6",
    testattackaura({ damageOnWoundUnmodified6: "10" }, 500 / 900)
);

// 900 attacks: 300 hits dont 150 font des MW, en plus des 125 MW habituelles, soit 275 MW
test(
    "effectsOnHitUnmodified6",
    testattackaura(
        {
            effectsOnHitUnmodified6: [
                {
                    targetType: TargetType.Enemy,
                    mortalWounds: 1,
                    phase: Phase.Combat
                }
            ]
        },
        275 / 900
    )
);

// 900 attacks: 300 hits + 150 rerolls qui font 50 hits, soit 350 hits, donc 175 wounds soit 5*176/6 MW
test(
    "rerollHitsOn1",
    testattackaura({ rerollHitsOn1: 1 }, (5 * 176) / 6 / 900)
);

// 900 attacks: 300 hits dont 150 font des MW, donc 150 hits touchent => 75 wounds donc 5*75/6 + 150 MW
test(
    "mortalWoundsOnHitUnmodified6",
    testattackaura(
        { mortalWoundsOnHitUnmodified6: 1 },
        ((5 * 75) / 6 + 150) / 900
    )
);

// Double le nombre d'attaques
test("bonusAttacks", testattackaura({ bonusAttacks: 1 }, 250 / 900));

// 900 attacks: 450 hits, 225 wounds 5*225/6 MW
test("bonusHitRoll", testattackaura({ bonusHitRoll: 1 }, (5 * 225) / 6 / 900));

// 900 attacks: 300 hits dont 150 font deux hits, soit 450 hits, donc 225 wounds, donc 5*225/6 MW
test(
    "numberOfHitsOnUnmodified6",
    testattackaura({ numberOfHitsOnUnmodified6: 2 }, (5 * 225) / 6 / 900)
);

// 900 attacks: 300 hits soit 600 hits, donc 300 wounds, donc 250 MW
test("numberOfHitsOnHit", testattackaura({ numberOfHitsOnHit: 2 }, 250 / 900));

// 900 attacks: 300 hits et 600 non-hits qui rerollés donnent 200 hits, soit un total de 500 hits, donc 250 wounds, donc 5/6*250 MW
test(
    "rerollFailedHits",
    testattackaura({ rerollFailedHits: 1 }, ((5 / 6) * 250) / 900)
);

// 900 attacks: 300 hits, 150 wounds donc 150 wounds, 150 MW
test("bonusRend", testattackaura({ bonusRend: -1 }, 150 / 900));

// 900 attacks: 300 hits, 150 wounds donc 450 wounds, 375 MW
test("bonusDamage", testattackaura({ bonusDamage: 2 }, 375 / 900));

test("condition on weapon id", t => {
    // Arrange
    const unit = createFakeUnit(
        [createFakeAttack("first"), createFakeAttack("second")],
        [
            {
                effects: [
                    {
                        targetType: TargetType.Weapon,
                        attackAura: { bonusDamage: 2 },
                        targetCondition: { weaponId: "second" }
                    }
                ],
                name: "Fake ability",
                id: "fakeAbility"
            }
        ]
    );
    const enemy = createFakeEnemy();

    // Act
    const unitStats = getUnitStats(unit, enemy);

    // Assert
    near(t, 125 / 900 + (125 / 900) * 3, unitStats[0].meleeDamage, "stats");
});
