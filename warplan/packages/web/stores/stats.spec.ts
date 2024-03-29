import { test, expect } from "@jest/globals";
import {
    Unit,
    Attack,
    Ability,
    AttackAura,
    TargetType,
    Phase,
    targetConditionValue,
    AuraType,
} from "../../common/data";
import { RandomCombat } from "./combat";
import { UnitState } from "./unit-state";
import { getUnitStats } from "./stats";
import { CombatSettings } from "./ui";
const randomCombat = new RandomCombat();

async function computeUnitDamage(
    unit: Unit,
    melee?: boolean,
    enemyOptions?: Partial<CombatSettings>
) {
    let result = 0;
    const enemyUnit: Unit = {
        id: "enemy",
        name: "Enemy",
        roles: [],
        model: { id: "enemy", name: "Enemy" },
        size: 1,
        points: 0,
        wounds: 2,
        factions: [],
        keywords: enemyOptions?.enemyKeywords
            ? enemyOptions.enemyKeywords.split(" ")
            : [],
        save: 5,
        description: "fake description",
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

function near(expected: number, value: number, text: string) {
    expect(value).toBeCloseTo(expected, 1.5);
}

function createFakeUnit(attacks?: Attack[], abilities?: Ability[]): Unit {
    return {
        id: "fake",
        name: "Fake",
        keywords: [],
        roles: [],
        model: { id: "fake", name: "Fake" },
        factions: [],
        size: 1,
        points: 100,
        attacks: attacks,
        abilities: abilities,
        description: "fake description",
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
        toWound: 4,
    };
}

function createFakeEnemy(enemy?: Partial<CombatSettings>): CombatSettings {
    return Object.assign(
        {
            enemyKeywords: "",
            enemySave: 5,
            hasCharged: false,
            hasMoved: true,
            enemyCount: 5,
        },
        enemy
    );
}

test("stat of simple unit without damage", () => {
    // Arrange
    const unit = createFakeUnit();
    const enemy = createFakeEnemy();

    // Act
    const unitStats = getUnitStats(unit, enemy);

    // Assert
    expect(unitStats.length).toEqual(1);
    expect(unitStats[0].meleeDamage).toEqual(0);
    expect(unitStats[0].rangedDamage).toEqual(0);
});

test("stat of simple unit without any ability", async () => {
    // Arrange
    const unit = createFakeUnit([createFakeAttack()]);
    const enemy = createFakeEnemy();

    // Act
    const unitStats = getUnitStats(unit, enemy);

    // Assert
    expect(unitStats.length).toEqual(1);
    near(
        unitStats[0].meleeDamage,
        await computeUnitDamage(unit, true),
        "melee"
    );
    near(unitStats[0].rangedDamage, await computeUnitDamage(unit), "ranged");
});

function testattackaura(
    attackAura: AttackAura,
    expected?: number,
    enemyOptions?: Partial<CombatSettings>
) {
    return async () => {
        // Arrange
        const unit = createFakeUnit(
            [createFakeAttack()],
            [
                {
                    effects: [
                        { targetType: TargetType.Unit, auras: [attackAura] },
                    ],
                    name: "Fake ability",
                    id: "fakeAbility",
                },
            ]
        );
        const enemy = createFakeEnemy(enemyOptions);

        // Act
        const unitStats = getUnitStats(unit, enemy);

        // Assert
        expect(unitStats.length).toBe(1);
        if (expected) {
            expect(unitStats[0].meleeDamage).toBeCloseTo(expected, 2.5);
            near(
                expected,
                await computeUnitDamage(unit, true, enemyOptions),
                "combat"
            );
        } else {
            near(
                unitStats[0].meleeDamage,
                await computeUnitDamage(unit, true, enemyOptions),
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
test("no aura", testattackaura({ type: AuraType.Attack }, 125 / 900));

// 900 attacks: 300 hits, 150 wounds dont 50 hits à 10 wounds et 100 hits à 1 wound, soit 600 wounds donc 500 MW
test(
    "damageOnWoundUnmodified6",
    testattackaura(
        { type: AuraType.Attack, damageOnWoundUnmodified6: "10" },
        500 / 900
    )
);

// 900 attacks: 300 hits dont 150 font des MW, en plus des 125 MW habituelles, soit 275 MW
test(
    "effectsOnHitUnmodified6",
    testattackaura(
        {
            type: AuraType.Attack,
            effectsOnHitUnmodified6: [
                {
                    targetType: TargetType.Enemy,
                    phase: Phase.Combat,
                    immediate: {
                        mortalWounds: 1,
                    },
                },
            ],
        },
        275 / 900
    )
);

// 900 attacks: 300 hits + 150 rerolls qui font 50 hits, soit 350 hits, donc 175 wounds soit 5*176/6 MW
test(
    "rerollHitsOn1",
    testattackaura(
        { type: AuraType.Attack, rerollHitsOn1: 1 },
        (5 * 176) / 6 / 900
    )
);

// 900 attacks: 300 hits dont 150 font des MW, donc 150 hits touchent => 75 wounds donc 5*75/6 + 150 MW
test(
    "mortalWoundsOnHitUnmodified6",
    testattackaura(
        { type: AuraType.Attack, mortalWoundsOnHitUnmodified6: 1 },
        ((5 * 75) / 6 + 150) / 900
    )
);

// Double le nombre d'attaques
test(
    "bonusAttacks",
    testattackaura({ type: AuraType.Attack, bonusAttacks: 1 }, 250 / 900)
);

// 900 attacks: 450 hits, 225 wounds 5*225/6 MW
test(
    "bonusHitRoll",
    testattackaura(
        { type: AuraType.Attack, bonusHitRoll: 1 },
        (5 * 225) / 6 / 900
    )
);

// 900 attacks: 300 hits dont 150 font deux hits, soit 450 hits, donc 225 wounds, donc 5*225/6 MW
test(
    "numberOfHitsOnUnmodified6",
    testattackaura(
        { type: AuraType.Attack, numberOfHitsOnUnmodified6: 2 },
        (5 * 225) / 6 / 900
    )
);

// 900 attacks: 300 hits soit 600 hits, donc 300 wounds, donc 250 MW
test(
    "numberOfHitsOnHit",
    testattackaura({ type: AuraType.Attack, numberOfHitsOnHit: 2 }, 250 / 900)
);

// 900 attacks: 300 hits et 600 non-hits qui rerollés donnent 200 hits, soit un total de 500 hits, donc 250 wounds, donc 5/6*250 MW
test(
    "rerollFailedHits",
    testattackaura(
        { type: AuraType.Attack, rerollFailedHits: 1 },
        ((5 / 6) * 250) / 900
    )
);

// 900 attacks: 300 hits, 150 wounds donc 150 wounds, 150 MW
test(
    "bonusRend",
    testattackaura({ type: AuraType.Attack, bonusRend: -1 }, 150 / 900)
);

// 900 attacks: 300 hits, 150 wounds donc 450 wounds, 375 MW
test(
    "bonusDamage",
    testattackaura({ type: AuraType.Attack, bonusDamage: 2 }, 375 / 900)
);

test("condition on weapon id", () => {
    // Arrange
    const unit = createFakeUnit(
        [createFakeAttack("first"), createFakeAttack("second")],
        [
            {
                effects: [
                    {
                        targetType: TargetType.Weapon,
                        auras: [{ type: AuraType.Attack, bonusDamage: 2 }],
                        targetCondition: { weaponId: "second" },
                    },
                ],
                name: "Fake ability",
                id: "fakeAbility",
            },
        ]
    );
    const enemy = createFakeEnemy();

    // Act
    const unitStats = getUnitStats(unit, enemy);

    // Assert
    near(125 / 900 + (125 / 900) * 3, unitStats[0].meleeDamage, "stats");
});

test(
    "condition on enemy keyword but enemy has not the keyword",
    testattackaura(
        {
            type: AuraType.Attack,
            bonusDamage: targetConditionValue({ anyKeyword: ["TEST"] }, 2),
        },
        125 / 900
    )
);

test(
    "condition on enemy keyword and the enemy has the keyword",
    testattackaura(
        {
            type: AuraType.Attack,
            bonusDamage: targetConditionValue({ anyKeyword: ["TEST"] }, 2),
        },
        375 / 900,
        { enemyKeywords: "TEST" }
    )
);
