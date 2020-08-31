import { DataStoreImpl } from "../imported-data";
import { ExtraAbility, AbilityCategory, TargetType } from "../units";

export function updateGhb2020(data: DataStoreImpl) {
    // Realm artifacts

    const extraAbilities: { [key: string]: ExtraAbility } = data.extraAbilities;

    delete data.extraAbilities.aqshyRelicsOfAqshyCleansingBrooch;
    delete data.extraAbilities.aqshyRelicsOfAqshyCrownOfFlames;
    delete data.extraAbilities.aqshyRelicsOfAqshyEssenceOfVulcatrix;
    delete data.extraAbilities.aqshyRelicsOfAqshyIgnaxSScales;
    delete data.extraAbilities.aqshyRelicsOfAqshySmoulderingHelm;
    delete data.extraAbilities.aqshyRelicsOfAqshyThermalriderCloak;
    delete data.extraAbilities.aqshyWeaponsOfAqshyExileTorch;
    delete data.extraAbilities.aqshyWeaponsOfAqshyMagmadrothBloodVials;
    delete data.extraAbilities.aqshyWeaponsOfAqshyOnyxBlade;
    delete data.extraAbilities.aqshyWeaponsOfAqshyPurefireBrazier;
    delete data.extraAbilities.aqshyWeaponsOfAqshyRubyRing;
    delete data.extraAbilities.aqshyWeaponsOfAqshyMagmaforgedBlade;

    extraAbilities.aqshyIncandescentRageblade = {
        id: "aqshyIncandescentRageblade",
        category: "Artifact of Aqshy",
        realmId: "aqshy",
        ability: {
            id: "aqshyIncandescentRageblade",
            name: "Incandescent Rageblade",
            flavor:
                "In battle, the emberstone crystal set into the sword glows bright, granting the wielder brusts of killing fury.",
            description:
                "Pick 1 of the bearer's melee weapons. If the unmodified hit roll for an attack made by that weapon is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.",
            category: AbilityCategory.Artefact
        }
    };

    delete data.extraAbilities.chamonRelicsOfChamonAlchemicalChain;
    delete data.extraAbilities.chamonRelicsOfChamonArgentArmour;
    delete data.extraAbilities.chamonRelicsOfChamonBejewelledGauntlet;
    delete data.extraAbilities.chamonRelicsOfChamonGildenbane;
    delete data.extraAbilities.chamonRelicsOfChamonGodwroughtHelm;
    delete data.extraAbilities.chamonRelicsOfChamonHydroxskinCloak;
    delete data.extraAbilities.chamonWeaponsOfChamonAibanSHiddenBlade;
    delete data.extraAbilities.chamonWeaponsOfChamonArgentineSTooth;
    delete data.extraAbilities.chamonWeaponsOfChamonChamoniteDarts;
    delete data.extraAbilities.chamonWeaponsOfChamonCrucibleOfMoltenSilver;
    delete data.extraAbilities.chamonWeaponsOfChamonFlowstoneBlade;
    delete data.extraAbilities.chamonWeaponsOfChamonRuneBlade;

    extraAbilities.chamonPlateOfPerfectProtection = {
        id: "chamonPlateOfPerfectProtection",
        category: "Artifact of Chamon",
        realmId: "chamon",
        ability: {
            id: "chamonPlateOfPerfectProtection",
            name: "Plate of Perfect Protection",
            flavor:
                "One the many mystical artefacts forged by the lost artificers of Metallurgica, the steel of this armour is alloyed with Chamonic quicksilver, allowing to subtly reform and ward off all but the truest strikes.",
            description:
                "If a weapon used for an attack targets the bearer has a Rend charactestic of -1, change the Rend characteristic for that attack to '-'.",
            category: AbilityCategory.Artefact,
            effects: [
                {
                    targetType: TargetType.Model,
                    defenseAura: {
                        ignoreRendOfMinus1: true
                    }
                }
            ]
        }
    };
}
