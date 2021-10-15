import {
    Phase,
    Turn,
    SubPhase,
    targetPropertyValue,
    TargetType,
    EffectDuration,
    conditionValue,
    orValue,
} from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { addEffect, updateAttack, updateEffect } from "./tools";

export function overrideLumineths(data: ImportedDataStoreImpl) {
    data.factions.luminethRealmLords.tokenName = "aetherquartz";

    // Generic abilities
    addEffect(data.abilities.absorbDespair, {
        targetType: TargetType.Enemy,
        specialAura: {
            absorbDespair: true,
        },
        condition: {
            inRangeOf: { friendly: true, keyword: ["CATHALLAR"], range: 18 },
        },
        targetRange: 18,
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
        targetRadius: 3,
        immediate: {
            mortalWounds: 1,
        },
    });
    addEffect(data.abilities.hurakanSpiritOfTheWindLivingCyclone, {
        targetType: TargetType.Enemy,
        targetRadius: 3,
        defenseAura: {
            malusHitRoll: 1,
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
            conditionValue({ hasGarrison: true }, 24),
            conditionValue({ hasGarrison: false }, 12)
        ),
    });
    addEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        choice: "reroll dispell",
        spellAura: {
            rerollDispell: true,
        },
    });
    addEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        choice: "reroll unbind",
        spellAura: {
            rerollUnbind: true,
        },
    });
    addEffect(data.abilities.shrineLuminorDefensible, {
        targetType: TargetType.Friend,
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
    });
    addEffect(data.abilities.scinariCathallarEmotionalTransference, {
        targetType: TargetType.Enemy,
        battleShockAura: {
            emotionalTransference: true,
        },
    });

    // Scinari Loreseeker
    addEffect(data.abilities.scinariLoreseekerLoreseeker, {
        targetType: TargetType.Unit,
        phase: Phase.Any,
        immediate: {
            gainCommandPoints: 1,
        },
    });

    // Vanari Bladelords
    addEffect(data.abilities.vanariBladelordsGuardians, {
        targetType: TargetType.Unit,
        defenseAura: {
            guardianOn2: true,
        },
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
    addEffect(data.abilities.vanariDawnridersDeathlyFurrows, {
        targetType: TargetType.Weapon,
        targetCondition: {
            meleeWeapon: true,
        },
        attackAura: {
            bonusAttacks: 2,
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
