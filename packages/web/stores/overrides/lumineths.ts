import { Phase, SubPhase, TargetType } from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { addEffect, updateEffect } from "./tools";

export function overrideLumineths(data: ImportedDataStoreImpl) {
    addEffect(data.abilities.absorbDespair, {
        targetType: TargetType.Friend,
        phase: Phase.Any
    });
    addEffect(data.abilities.shrineLuminorCleansingRituals, {
        targetType: TargetType.Friend,
        spellAura: {}
    });
    addEffect(data.abilities.shrineLuminorDefensible, {
        targetType: TargetType.Friend,
        phase: Phase.Movement,
        subPhase: SubPhase.While
    });
    addEffect(data.abilities.shrineLuminorFactionTerrain, {
        targetType: TargetType.Unit,
        phase: Phase.ArmyList
    });
    addEffect(data.abilities.shrineLuminorSetUp, {
        targetType: TargetType.Unit,
        phase: Phase.Setup,
        subPhase: SubPhase.Before
    });
    addEffect(data.abilities.shrineLuminorShrineGuardian, {
        targetType: TargetType.Unit,
        phase: Phase.Any
    });
    addEffect(data.abilities.vanariBladelordsGuardians, {
        targetType: TargetType.Unit,
        defenseAura: {}
    });
    addEffect(data.abilities.scinariLoreseekerLoreseeker, {
        targetType: TargetType.Unit,
        phase: Phase.Any
    });
    updateEffect(data.abilities.vanariDawnridersPowerOfHysh, {
        attackAura: {}
    });
    updateEffect(data.abilities.vanariAuralanWardensPowerOfHysh, {
        attackAura: {}
    });
    updateEffect(data.abilities.vanariAuralanSentinelsPowerOfHysh, {
        attackAura: {}
    });
    addEffect(data.abilities.vanariAuralanSentinelsManyStringedWeapon, {
        targetType: TargetType.Unit,
        phase: Phase.Shooting,
        subPhase: SubPhase.While
    });
    addEffect(data.abilities.soulBound, {
        targetType: TargetType.Unit,
        battleShockAura: {
            bonusBravery: 2
        }
    });
    addEffect(data.abilities.strikeInUnison, {
        targetType: TargetType.Unit,
        phase: Phase.Combat | Phase.Shooting,
        attackAura: {
            rerollHitsOn1: 1
        }
    });
    addEffect(data.abilities.unityOfPurpose, {
        targetType: TargetType.Unit,
        phase: Phase.Any
    });
    addEffect(data.abilities.avalenorTheStoneheartKingStonemageSymbiosis, {
        targetType: TargetType.Unit,
        valueAura: {
            ignoreWounds: true
        }
    });
}
