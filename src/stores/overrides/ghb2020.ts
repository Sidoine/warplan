import { DataStoreImpl } from "../imported-data";
import { ExtraAbility, AbilityCategory, TargetType } from "../units";

export function updateGhb2020(data: DataStoreImpl) {
    // CHAOS
    // Blades of Khorne
    data.units.skullCannons.points = 130;
    data.units.bloodsecrator.points = 120;
    data.units.valkiaTheBloody.points = 140;
    data.units.bloodthirsterOfInsensateRage.points = 270;
    data.units.bloodthirsterOfUnfetteredFury.points = 270;
    data.units.skarbrand.points = 380;
    data.units.vorgarothTheScarredSkalokTheSkullHostOfKhorne.points = 1100;
    data.units.wrathOfKhorneBloodthirster.points = 300;
    data.units.bloodcrushers.points = 120;
    data.units.mightySkullcrushers.points = 160;

    // Maggotkin of Nurgle
    data.units.plaguebearers.points = 110;
    data.units.plaguebearers.maxPoints = 300;
    data.units.lordOfAfflictions.points = 190;
    data.units.theGlottkin.points = 380;
    data.units.rotigus.points = 320;
    data.units.beastsOfNurgle.points = 70;
    data.units.nurglings.points = 80;
    data.units.plagueDrones.points = 190;
    data.units.pusgoyleBlightlords.points = 190;
    data.units.putridBlightkings.points = 140;
    data.units.putridBlightkings.maxPoints = 500;
    data.battalions.nurgleAfflictionCyst.points = 140;
    data.battalions.nurgleBlightCyst.points = 140;
    data.battalions.nurgleNurgleSMenagerie.points = 180;
    data.battalions.nurglePlagueCyst.points = 140;
    data.battalions.nurgleTallybandOfNurgle.points = 160;
    data.battalions.nurgleThricefoldBefoulment.points = 60;

    // DEATH
    // Nighthaunts
    data.units.blackCoach.points = 220;
    data.units.theBriarQueen.points = 160;
    data.units.guardianOfSoulsWithNightmareLantern.points = 130;
    data.units.kurdossValentianTheCravenKing.points = 160;
    data.units.ladyOlynderMortarchOfGrief.points = 200;
    data.units.reikenorTheGrimhailer.points = 170;
    data.units.dreadscytheHarridans.points = 70;
    data.units.dreadscytheHarridans.maxPoints = 260;
    data.units.hexwraiths.points = 130;
    data.battalions.nighthauntTheCondemned.points = 140;

    // DESTRUCTION

    // ORDER
    // Stormcast eternals
    data.units.liberators.points = 90;
    data.units.liberators.maxPoints = 480;
    data.units.astreiaSolbright.points = 200;
    data.units.aventisFirestrikeMagisterOfHammerhal.points = 300;
    data.units.celestantPrimeHammerOfSigmar.points = 300;
    data.units.knightIncantor.points = 120;
    data.units.knightVenator.points = 110;
    data.units.knightVexillor.points = 110;
    data.units.lordAquilor.points = 170;
    data.units.lordArcanum.points = 150;
    data.units.lordArcanumOnCelestialDracoline.points = 210;
    data.units.lordArcanumOnGryphCharger.points = 200;
    data.units.lordArcanumOnTauralon.points = 280;
    data.units.lordCelestantOnDracoth.points = 200;
    data.units.lordExorcist.points = 90;
    data.units.lordVeritant.points = 110;
    data.units.neaveBlacktalon.points = 110;
    data.units.vandusHammerhand.points = 260;
    data.units.drakeswornTemplar.points = 420;
    data.units.lordCelestantOnStardrake.points = 500;
    data.units.aetherwings.points = 40;
    data.units.castigators.points = 70;
    data.units.concussors.points = 220;
    data.units.decimators.points = 170;
    data.units.desolators.points = 190;
    data.units.evocators.points = 210;
    data.units.evocatorsOnCelestialDracolines.points = 260;
    data.units.fulminators.points = 220;
    data.units.gryphHounds.points = 120;
    data.units.judicators.points = 140;
    data.units.protectors.points = 170;
    data.units.retributors.points = 190;
    data.units.sequitors.points = 120;
    data.units.tempestors.points = 190;
    data.units.vanguardHunters.points = 100;
    data.units.vanguardPalladors.points = 170;
    data.battalions.stormcastEternalsVanguardAuxiliaryChamber.points = 130;
    data.battalions.stormcastEternalsVanguardAngelosConclave.points = 150;
    data.battalions.stormcastEternalsWarriorBrotherhood.points = 170;
    data.battalions.stormcastEternalsThunderheadBrotherhood.points = 150;
    data.battalions.stormcastEternalsLightningEchelon.points = 120;
    data.battalions.stormcastEternalsLordsOfTheStorm.points = 130;
    data.battalions.stormcastEternalsDrakeswornTemple.points = 130;
    data.battalions.stormcastEternalsTheSkyborneSlayers.points = 180;
    data.sceneries.celestianVortex.points = 30;

    // Endless spells
    data.sceneries.soulscreamBridge.points = 100;

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
