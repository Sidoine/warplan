import { Phase, SubPhase, TargetType } from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { addEffect, updateEffect } from "./tools";

export function overrideLumineths(data: ImportedDataStoreImpl) {
    // Generic abilities
    addEffect(data.abilities.absorbDespair, {
        targetType: TargetType.Friend,
        specialAura: {
            absorbDespair: true,
        },
    });
    updateEffect(data.abilities.aetherquartzReserve, {
        battleShockAura: {
            malusBravery: -1,
        },
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
        allowInclusion: true,
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
        mortalWounds: 1,
        targetRadius: 3,
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
            rerollCast: true,
        },
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
        allowInclusion: true,
    });
    addEffect(data.abilities.shrineLuminorSetUp, {
        targetType: TargetType.Unit,
        phase: Phase.Setup,
        subPhase: SubPhase.Before,
        setup: true,
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
        gainCommandPoints: 1,
    });

    // Vanari Bladelords
    addEffect(data.abilities.vanariBladelordsGuardians, {
        targetType: TargetType.Unit,
        defenseAura: {
            guardianOn2: true,
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
