import {
    Phase,
    Turn,
    SubPhase,
    targetPropertyValue,
    TargetType,
    EffectDuration,
    conditionValue,
    orValue,
    targetConditionValue,
    AuraType,
} from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { addEffect, updateAttack, updateAura, updateEffect } from "./tools";

export function overrideLumineths(data: ImportedDataStoreImpl) {
    data.factions.luminethRealmLords.tokenName = "aetherquartz";

    // Generic abilities
    updateEffect(data.abilities.absorbDespair, {
        targetType: TargetType.Enemy,
        auras: [{ type: AuraType.Special, absorbDespair: true }],
        condition: {
            inRangeOf: { friendly: true, keyword: "CATHALLAR", range: '18"' },
        },
        targetRange: '18"',
    });
    updateEffect(data.abilities.aetherquartzReserve, {
        auras: [{ type: AuraType.Battleshock, malusBravery: -1 }],
    });
    addEffect(data.abilities.aetherquartzReserve, {
        targetType: TargetType.Unit,
        phase: Phase.Hero,
        subPhase: SubPhase.Before,
        side: Turn.Your,
        auras: [
            {
                type: AuraType.Spell,
                extraCast: 1,
                duration: EffectDuration.Phase,
            },
        ],
        tokensCost: 1,
        choice: "Magical Insight",
    });
    addEffect(data.abilities.aetherquartzReserve, {
        targetType: TargetType.Unit,
        choice: "Magical Boost: reroll",
        tokensCost: 1,
        phase: Phase.Hero,
        subPhase: SubPhase.While,
        side: Turn.Your,
        immediate: {
            rerollSpellcast: true,
        },
    });
    addEffect(data.abilities.aetherquartzReserve, {
        targetType: TargetType.Unit,
        choice: "Magical Boost: bonus",
        tokensCost: 1,
        phase: Phase.Hero,
        subPhase: SubPhase.While,
        side: Turn.Your,
        immediate: {
            bonusSpellcast: 1,
        },
    });
    addEffect(data.abilities.aetherquartzReserve, {
        targetType: TargetType.Unit,
        choice: "Heightened Senses",
        tokensCost: 1,
        phase: Phase.Combat | Phase.Shooting,
        subPhase: SubPhase.While,
        side: Turn.Your,
        auras: [
            {
                type: AuraType.Attack,
                bonusHitRoll: 1,
                duration: EffectDuration.Phase,
            },
        ],
    });
    addEffect(data.abilities.aetherquartzReserve, {
        targetType: TargetType.Unit,
        choice: "Heightened Reflexes",
        tokensCost: 1,
        phase: Phase.Combat | Phase.Shooting,
        subPhase: SubPhase.While,
        auras: [
            {
                type: AuraType.Defense,
                bonusSave: 1,
                duration: EffectDuration.Phase,
            },
        ],
    });
    updateEffect(data.abilities.deepThinkers, {
        targetType: TargetType.Friend,
        targetCondition: {
            allKeywords: ["WIZARD", "SCINARI"],
        },
        auras: [
            {
                type: AuraType.Spell,
                autoCast: 9,
                delay: EffectDuration.Round,
                duration: EffectDuration.Phase,
            },
            {
                type: AuraType.Spell,
                noCast: true,
                duration: EffectDuration.Phase,
            },
        ],
    });
    addEffect(data.abilities.soulBound, {
        targetType: TargetType.Unit,
        auras: [{ type: AuraType.Battleshock, bonusBravery: 2 }],
        targetCondition: {
            anyKeyword: ["VANARI", "AELEMENTIRI"],
            keyword: "ILIATHA",
        },
    });
    updateEffect(data.abilities.strikeInUnison, {
        targetType: TargetType.Friend,
        targetCondition: {
            minModels: 2,
        },
        phase: Phase.Combat | Phase.Shooting,
        auras: [
            {
                type: AuraType.Attack,
                rerollHitsOn1: 1,
                duration: EffectDuration.Phase,
            },
        ],
    });
    addEffect(data.abilities.unityOfPurpose, {
        targetType: TargetType.Friend,
        targetCondition: {
            allKeywords: ["VANARI", "ILIATHA"],
        },
        auras: [{ type: AuraType.Command, copyCommand: true }],
    });

    updateEffect(data.abilities.lightningReactions, {
        auras: [{ type: AuraType.Special, pickTwoUnitsInCombat: true }],
    });
    updateEffect(data.abilities.luminethGreatNations, {
        immediate: {
            allowInclusion: true,
        },
    });
    updateEffect(data.abilities.moveLikeTheWind, {
        auras: [{ type: AuraType.Attack, pileInEverywhere: true }],
    });
    addEffect(data.abilities.moveLikeTheWind, {
        targetType: TargetType.Unit,
        condition: {
            hasCharged: true,
        },
        auras: [
            {
                type: AuraType.Attack,
                pileInWithFly: true,
                bonusPileInDistance: 3,
            },
        ],
    });
    updateEffect(data.abilities.tectonicForce, {
        auras: [{ type: AuraType.Special, tectonicForce: true }],
    });
    addEffect(data.abilities.tectonicForce, {
        targetType: TargetType.Unit,
        phase: Phase.Combat,
        subPhase: SubPhase.After,
        immediate: {
            pileInMove: 1,
        },
    });
    updateEffect(data.abilities.shiningCompany, {
        auras: [
            { type: AuraType.Charge, cannotCharge: true },
            { type: AuraType.Movement, cannotRun: true },
            { type: AuraType.Attack, pileInDistance: '1"' },
        ],
    });
    updateEffect(data.abilities.enduringAsRock, {
        targetType: TargetType.Friend,
        targetCondition: { keyword: "ALARITH " },
    });
    addEffect(data.abilities.enduringAsRock, {
        targetType: TargetType.Friend,
        targetCondition: { keyword: "ALARITH" },
        phase: Phase.Hero,
        subPhase: SubPhase.Before,
        side: Turn.Your,
        auras: [
            {
                type: AuraType.Defense,
                ignoreRendOfMinus1: true,
                duration: EffectDuration.Round,
            },
        ],
    });

    // Avalenor
    addEffect(data.abilities.avalenorTheStoneheartKingStonemageSymbiosis, {
        targetType: TargetType.Unit,
        auras: [
            {
                type: AuraType.Value,
                ignoreWounds: conditionValue(
                    {
                        inRangeOf: {
                            friendly: true,
                            keyword: "STONEMAGE",
                            range: '12"',
                        },
                    },
                    1
                ),
            },
        ],
    });
    updateEffect(data.abilities.avalenorTheStoneheartKingElderWisdom, {
        auras: [{ type: AuraType.Command, free: true }],
    });
    updateEffect(data.abilities.avalenorTheStoneheartKingGuardianOfHysh, {
        targetRadius: data.damageTables.avalenorDamageTable.columns[1],
        targetType: TargetType.Enemy,
        auras: [{ type: AuraType.Attack, malusHitRoll: 1 }],
    });

    // Hurukan Spirit of the Wind
    updateEffect(data.abilities.hurakanSpiritOfTheWindLivingCyclone, {
        targetType: TargetType.Enemy,
        targetRadius: 3,
        immediate: {
            mortalWounds: 1,
        },
        auras: [
            {
                type: AuraType.Defense,
                malusHitRoll: 1,
                duration: EffectDuration.Phase,
            },
        ],
        randomEffectRange: { min: 3, max: 6 },
    });

    addEffect(data.abilities.hurakanSpiritOfTheWindIntoTheGale, {
        targetType: TargetType.EnemyModel,
        targetRadius: '3"',
        auras: [{ type: AuraType.Attack, malusPileInDistance: '2"' }],
    });
    updateEffect(data.abilities.hurakanSpiritOfTheWindSpiritOfTheWind, {
        phase: undefined,
        subPhase: undefined,
    });
    addEffect(data.abilities.hurakanSpiritOfTheWindSpiritOfTheWind, {
        targetType: TargetType.Unit,
        phase: Phase.Shooting,
        subPhase: SubPhase.After,
        immediate: {
            normalMove: '12"',
        },
    });

    // Shrine Luminor
    updateEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        choice: "reroll casting",
        timesPerTurn: 1,
        immediate: { rerollSpellcast: true },
        targetRange: orValue(
            conditionValue({ hasGarrison: true }, '24"'),
            '12"'
        ),
    });
    addEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        choice: "reroll dispell",
        timesPerTurn: 1,
        immediate: { rerollDispell: true },
        targetRange: orValue(
            conditionValue({ hasGarrison: true }, '24"'),
            '12"'
        ),
    });
    addEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        choice: "reroll unbind",
        timesPerTurn: 1,
        immediate: { rerollUnbind: true },
        targetRange: orValue(
            conditionValue({ hasGarrison: true }, '24"'),
            '12"'
        ),
    });
    addEffect(data.abilities.shrineLuminorDefensible, {
        targetType: TargetType.Friend,
        targetCondition: {
            allKeywords: ["HERO", "LUMINETH REALM-LORDS"],
            noKeyword: "MONSTER",
            hasNotMount: true,
        },
        phase: Phase.Movement,
        subPhase: SubPhase.While,
        auras: [{ type: AuraType.Defense, garrisoned: true }],
    });
    addEffect(data.abilities.shrineLuminorFactionTerrain, {
        targetType: TargetType.Unit,
        phase: Phase.ArmyList,
        immediate: {
            allowInclusion: true,
        },
    });
    addEffect(data.abilities.shrineLuminorSetUp, {
        targetType: TargetType.Unit,
        phase: Phase.Setup,
        subPhase: SubPhase.Before,
        immediate: {
            allowInclusion: true,
            setup: true,
        },
    });
    updateEffect(data.abilities.shrineLuminorShrineGuardian, {
        targetType: TargetType.Friend,
        targetCondition: {
            isInGarrison: true,
        },
        phase: Phase.Any,
        auras: [{ type: AuraType.Command, free: true }],
    });

    // Scinari Cathallar
    updateEffect(data.abilities.scinariCathallarDarknessOfTheSoul, {
        auras: [
            {
                type: AuraType.Special,
                darknessOfSoul: true,
                duration: EffectDuration.Round,
            },
        ],
    });
    updateEffect(data.abilities.scinariCathallarEmotionalTransference, {
        auras: [{ type: AuraType.Battleshock, immune: true }],
        randomEffectRange: { min: 2, max: 6 },
    });
    addEffect(data.abilities.scinariCathallarEmotionalTransference, {
        targetType: TargetType.Enemy,
        targetRange: '18"',
        phase: Phase.Battleshock,
        subPhase: SubPhase.Before,
        auras: [{ type: AuraType.Battleshock, emotionalTransference: true }],
        targetCondition: { needBattleshockTest: true },
        randomEffectRange: { min: 2, max: 6 },
    });

    // Scinari Loreseeker
    addEffect(data.abilities.scinariLoreseekerLoreseeker, {
        targetType: TargetType.Unit,
        phase: Phase.Any,
        immediate: {
            gainCommandPoints: 1,
        },
        condition: {
            inRangeOf: {
                range: '3"',
                slain: true,
                hasArtefact: true,
                enemy: true,
            },
        },
    });
    updateEffect(data.abilities.scinariLoreseekerLoneAgent, {
        auras: [
            {
                type: AuraType.Defense,
                bonusSave: conditionValue(
                    { notInRangeOf: { range: '9"', friendly: true } },
                    1
                ),
            },
            { type: AuraType.Special, loneAgent: true },
        ],
    });

    // Vanari Bladelords
    addEffect(data.abilities.vanariBladelordsGuardians, {
        targetType: TargetType.Friend,
        targetCondition: { keyword: "SCINARI" },
        auras: [{ type: AuraType.Defense, guardianOn2: true }],
        targetRadius: '3"',
    });
    updateAttack(data.attacks.vanariBladelordsSunmetalGreatbladeFlurryOfBlows, {
        choice: "Flurry of Blows",
        attacks: targetPropertyValue({ numberOfModelsWithin: 2 }),
    });
    updateAttack(data.attacks.vanariBladelordsSunmetalGreatbladePerfectStrike, {
        choice: "Perfect Strike",
        // toHit: 0,
    });
    updateEffect(data.abilities.vanariBladelordsSwordmasters, {
        targetType: TargetType.Unit,
        choice: "Furry of Blows",
        auras: [
            {
                type: AuraType.Attack,
                attackId:
                    data.attacks.vanariBladelordsSunmetalGreatbladeFlurryOfBlows
                        .id,
            },
        ],
    });
    addEffect(data.abilities.vanariBladelordsSwordmasters, {
        targetType: TargetType.Unit,
        phase: Phase.Combat,
        choice: "Perfect Strike",
        auras: [
            {
                type: AuraType.Attack,
                attackId:
                    data.attacks.vanariBladelordsSunmetalGreatbladePerfectStrike
                        .id,
            },
        ],
    });

    // Vanari Dawnriders
    updateAura(data.abilities.vanariDawnridersDeathlyFurrows, {
        duration: EffectDuration.Phase,
        type: AuraType.Attack,
        bonusAttacks: targetConditionValue(
            { maxWounds: 1, hasNotMount: true },
            2,
            targetConditionValue({ maxWounds: 2, hasNotMount: true }, 1)
        ),
    });

    // Vanari Auralan Sentinels
    addEffect(data.abilities.vanariAuralanSentinelsManyStringedWeapon, {
        targetType: TargetType.Unit,
        phase: Phase.Shooting,
        subPhase: SubPhase.While,
    });
    updateEffect(data.abilities.vanariAuralanSentinelsManyStringedWeapon, {
        choice: "aimed",
        auras: [
            {
                type: AuraType.Attack,
                attackId: data.attacks.vanariAuralanSentinelsAuralanBowAimed.id,
            },
        ],
    });
    addEffect(data.abilities.vanariAuralanSentinelsManyStringedWeapon, {
        choice: "lofted",
        phase: Phase.Shooting,
        targetType: TargetType.Unit,
        auras: [
            {
                type: AuraType.Attack,
                attackId:
                    data.attacks.vanariAuralanSentinelsAuralanBowLofted.id,
            },
        ],
    });

    updateEffect(data.abilities.vanariAuralanSentinelsScryhawkLantern, {
        auras: [
            {
                type: AuraType.Defense,
                visibleToCasterUnit: conditionValue(
                    {
                        weaponId:
                            data.attacks.vanariAuralanSentinelsAuralanBowLofted
                                .id,
                    },
                    1
                ),
            },
        ],
    });

    // Vanari Auralan Wardens
}
