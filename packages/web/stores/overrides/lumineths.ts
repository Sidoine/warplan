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
} from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { addEffect, updateAttack, updateEffect } from "./tools";

export function overrideLumineths(data: ImportedDataStoreImpl) {
    data.factions.luminethRealmLords.tokenName = "aetherquartz";

    // Generic abilities
    updateEffect(data.abilities.absorbDespair, {
        targetType: TargetType.Enemy,
        specialAura: {
            absorbDespair: true,
        },
        condition: {
            inRangeOf: { friendly: true, keyword: "CATHALLAR", range: '18"' },
        },
        targetRange: '18"',
    });
    updateEffect(data.abilities.aetherquartzReserve, {
        battleShockAura: {
            malusBravery: -1,
        },
    });
    addEffect(data.abilities.aetherquartzReserve, {
        targetType: TargetType.Unit,
        phase: Phase.Hero,
        subPhase: SubPhase.Before,
        side: Turn.Your,
        spellAura: {
            extraCast: 1,
        },
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
        attackAura: {
            bonusHitRoll: 1,
        },
    });
    addEffect(data.abilities.aetherquartzReserve, {
        targetType: TargetType.Unit,
        choice: "Heightened Reflexes",
        tokensCost: 1,
        phase: Phase.Combat | Phase.Shooting,
        subPhase: SubPhase.While,
        defenseAura: {
            bonusSave: 1,
        },
        duration: EffectDuration.Phase,
    });
    updateEffect(data.abilities.deepThinkers, {
        targetType: TargetType.Friend,
        targetCondition: {
            allKeywords: ["WIZARD", "SCINARI"],
        },
        spellAura: {
            autoCast: 9,
        },
    });
    addEffect(data.abilities.soulBound, {
        targetType: TargetType.Unit,
        battleShockAura: {
            bonusBravery: 2,
        },
    });
    addEffect(data.abilities.strikeInUnison, {
        targetType: TargetType.Unit,
        phase: Phase.Combat | Phase.Shooting,
        attackAura: {
            rerollHitsOn1: 1,
        },
    });
    addEffect(data.abilities.unityOfPurpose, {
        targetType: TargetType.Unit,
        phase: Phase.Any,
    });
    updateEffect(data.abilities.lightningReactions, {
        specialAura: {
            pickTwoUnitsInCombat: true,
        },
    });
    updateEffect(data.abilities.luminethGreatNations, {
        immediate: {
            allowInclusion: true,
        },
    });
    updateEffect(data.abilities.moveLikeTheWind, {
        attackAura: {
            pileInEverywhere: true,
        },
    });
    addEffect(data.abilities.moveLikeTheWind, {
        targetType: TargetType.Unit,
        condition: {
            hasCharged: true,
        },
        attackAura: {
            pileInWithFly: true,
            bonusPileInDistance: 3,
        },
    });
    updateEffect(data.abilities.tectonicForce, {
        specialAura: {
            tectonicForce: true,
        },
    });
    addEffect(data.abilities.tectonicForce, {
        targetType: TargetType.Unit,
        phase: Phase.Combat,
        subPhase: SubPhase.After,
        immediate: {
            pileInMove: 1,
        },
    });
    updateEffect(data.abilities.unityOfPurpose, {
        commandAura: {
            copyCommand: true,
        },
    });

    // Avalenor
    addEffect(data.abilities.avalenorTheStoneheartKingStonemageSymbiosis, {
        targetType: TargetType.Unit,
        valueAura: {
            ignoreWounds: true,
        },
    });
    updateEffect(data.abilities.avalenorTheStoneheartKingElderWisdom, {
        commandAura: {
            free: true,
        },
    });

    // Hurukan Spirit of the Wind
    updateEffect(data.abilities.hurakanSpiritOfTheWindLivingCyclone, {
        targetType: TargetType.Enemy,
        targetRadius: 3,
        immediate: {
            mortalWounds: 1,
        },
        randomEffectRange: { min: 3, max: 6 },
    });
    addEffect(data.abilities.hurakanSpiritOfTheWindLivingCyclone, {
        targetType: TargetType.Enemy,
        targetRadius: 3,
        defenseAura: {
            malusHitRoll: 1,
        },
        randomEffectRange: { min: 3, max: 6 },
    });
    addEffect(data.abilities.hurakanSpiritOfTheWindIntoTheGale, {
        targetType: TargetType.EnemyModel,
        targetRadius: '3"',
        attackAura: {
            malusPileInDistance: '2"',
        },
    });

    // Shrine Luminor
    addEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        choice: "reroll casting",
        spellAura: {
            rerollFailedCast: true,
        },
        targetRange: orValue(
            conditionValue({ hasGarrison: true }, '24"'),
            '12"'
        ),
    });
    addEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        choice: "reroll dispell",
        spellAura: {
            rerollDispell: true,
        },
        targetRange: orValue(
            conditionValue({ hasGarrison: true }, '24"'),
            '12"'
        ),
    });
    addEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        choice: "reroll unbind",
        spellAura: {
            rerollUnbind: true,
        },
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
        defenseAura: {
            garrisoned: true,
        },
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
    addEffect(data.abilities.shrineLuminorShrineGuardian, {
        targetType: TargetType.Unit,
        phase: Phase.Any,
        commandAura: {
            free: true,
        },
    });

    // Scinari Cathallar
    updateEffect(data.abilities.scinariCathallarDarknessOfTheSoul, {
        specialAura: {
            darknessOfSoul: true,
        },
    });
    updateEffect(data.abilities.scinariCathallarEmotionalTransference, {
        battleShockAura: {
            immune: true,
        },
        randomEffectRange: { min: 2, max: 6 },
    });
    addEffect(data.abilities.scinariCathallarEmotionalTransference, {
        targetType: TargetType.Enemy,
        targetRange: '18"',
        battleShockAura: {
            emotionalTransference: true,
        },
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
        defenseAura: {
            bonusSave: conditionValue(
                { notInRangeOf: { range: '9"', friendly: true } },
                1
            ),
        },
        specialAura: {
            loneAgent: true,
        },
    });

    // Vanari Bladelords
    addEffect(data.abilities.vanariBladelordsGuardians, {
        targetType: TargetType.Friend,
        defenseAura: {
            guardianOn2: true,
        },
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
        attackAura: {
            attackId:
                data.attacks.vanariBladelordsSunmetalGreatbladeFlurryOfBlows.id,
        },
    });
    addEffect(data.abilities.vanariBladelordsSwordmasters, {
        targetType: TargetType.Unit,
        phase: Phase.Combat,
        choice: "Perfect Strike",
        attackAura: {
            attackId:
                data.attacks.vanariBladelordsSunmetalGreatbladePerfectStrike.id,
        },
    });

    // Vanari Dawnriders
    updateEffect(data.abilities.vanariDawnridersDeathlyFurrows, {
        attackAura: {
            bonusAttacks: targetConditionValue(
                { maxWounds: 1, hasNotMount: true },
                2,
                targetConditionValue({ maxWounds: 2, hasNotMount: true }, 1)
            ),
        },
    });

    // Vanari Auralan Sentinels
    addEffect(data.abilities.vanariAuralanSentinelsManyStringedWeapon, {
        targetType: TargetType.Unit,
        phase: Phase.Shooting,
        subPhase: SubPhase.While,
    });
    updateEffect(data.abilities.vanariAuralanSentinelsManyStringedWeapon, {
        choice: "aimed",
        attackAura: {
            attackId: data.attacks.vanariAuralanSentinelsAuralanBowAimed.id,
        },
    });
    addEffect(data.abilities.vanariAuralanSentinelsManyStringedWeapon, {
        choice: "lofted",
        targetType: TargetType.Unit,
        attackAura: {
            attackId: data.attacks.vanariAuralanSentinelsAuralanBowLofted.id,
        },
    });

    updateEffect(data.abilities.vanariAuralanSentinelsScryhawkLantern, {
        defenseAura: {
            visibleToCasterUnit: true,
        },
    });

    // Vanari Auralan Wardens
}
