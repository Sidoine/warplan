import {
    AuraType,
    conditionValue,
    Material,
    TargetType,
} from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { addEffect, overrideModel, mergeModels } from "./tools";

function fixModels(data: ImportedDataStoreImpl) {
    const models = data.models;
    overrideModel(models.aetherwings, 2017, Material.Plastic);
    overrideModel(models.celestantPrime, 2014, Material.Plastic);
    mergeModels(
        data.models,
        "Dracothian Guard",
        2016,
        Material.Plastic,
        data.units.dracothianGuardConcussors,
        data.units.dracothianGuardDesolators,
        data.units.dracothianGuardFulminators,
        data.units.dracothianGuardFulminatorsSingle,
        data.units.dracothianGuardTempestors,
        data.units.vandusHammerhand,
        data.units.lordCelestantOnDracoth
    );
    mergeModels(
        data.models,
        "Paladins",
        2014,
        Material.Plastic,
        data.units.decimators,
        data.units.protectors,
        data.units.retributors
    );
    mergeModels(
        data.models,
        "Stardrake",
        2016,
        Material.Plastic,
        data.units.drakeswornTemplar,
        data.units.lordCelestantOnStardrake
    );
    overrideModel(models.gryphHounds, 2017, Material.Plastic);
    mergeModels(
        data.models,
        "Judicators",
        2014,
        Material.Plastic,
        data.units.judicatorsWithBoltstormCrossbows,
        data.units.judicatorsWithSkyboltBows
    );
    mergeModels(
        data.models,
        "Knight-Azyros/Venator",
        2014,
        Material.Plastic,
        data.units.knightAzyros,
        data.units.knightVenator
    );
    overrideModel(models.knightHeraldor, 2014, Material.Plastic);
    overrideModel(models.knightVexillor, 2014, Material.Plastic);
    overrideModel(models.liberators, 2014, Material.Plastic);
    overrideModel(models.gavrielSureheart, 2017, Material.Plastic);
    overrideModel(models.lordAquilor, 2017, Material.Plastic);
    overrideModel(models.lordCastellant, 2014, Material.Plastic);
    overrideModel(models.lordCelestant, 2014, Material.Plastic);
    overrideModel(models.lordOrdinator, 2018, Material.Plastic);
    overrideModel(models.lordRelictor, 2014, Material.Plastic);
    overrideModel(models.lordVeritant, 2014, Material.Plastic);
    mergeModels(
        data.models,
        "Prosecutors",
        2014,
        Material.Plastic,
        data.units.prosecutorsWithCelestialHammers,
        data.units.prosecutorsWithStormcallJavelins
    );
    overrideModel(models.steelheartSChampions, 2017, Material.Plastic);
    overrideModel(models.vanguardHunters, 2017, Material.Plastic);
    overrideModel(models.vanguardPalladors, 2017, Material.Plastic);
    mergeModels(
        data.models,
        "Vanguard-Raptors",
        2017,
        Material.Plastic,
        data.units.vanguardRaptorsWithHurricaneCrossbows,
        data.units.vanguardRaptorsWithLongstrikeCrossbows
    );
    overrideModel(models.sequitors, 2018, Material.Plastic);
    overrideModel(models.castigators, 2018, Material.Plastic);
    overrideModel(models.evocators, 2018, Material.Plastic);
    mergeModels(
        data.models,
        "Celestial Dracolines",
        2018,
        Material.Plastic,
        data.units.evocatorsOnCelestialDracolines,
        data.units.lordArcanumOnCelestialDracoline
    );
    overrideModel(models.knightIncantor, 2018, Material.Plastic);
    mergeModels(
        data.models,
        "Annihilators",
        2021,
        Material.Plastic,
        data.units.annihilators,
        data.units.annihilatorsWithMeteoricGrandhammers
    );
    overrideModel(models.astreiaSolbright, 2018, Material.Plastic);
    mergeModels(
        data.models,
        "Tauralon",
        2018,
        Material.Plastic,
        data.units.aventisFirestrikeMagisterOfHammerhal,
        data.units.lordArcanumOnTauralon
    );
    mergeModels(
        data.models,
        "Stormsire's Cursebreakers",
        2018,
        Material.Plastic,
        data.units.stormsireSCursebreakers,
        data.units.averonStormsire
    );
    overrideModel(models.bastianCarthalos, 2021, Material.Plastic);
    overrideModel(models.celestarBallista, 2018, Material.Plastic);
    mergeModels(
        data.models,
        "Battlemagic Stormcast",
        2018,
        Material.Plastic,
        data.units.celestianVortex,
        data.units.daisArcanum,
        data.units.everblazeComet
    );
    overrideModel(models.gardusSteelSoul, 2021, Material.Plastic);
    mergeModels(
        data.models,
        "Draconids",
        2021,
        Material.Plastic,
        data.units.karazaiTheScarred,
        data.units.krondysSonOfDracothion
    );
    overrideModel(models.knightArcanum, 2021, Material.Plastic);
    overrideModel(models.lordArcanum, 2018, Material.Plastic);
    mergeModels(
        data.models,
        "Knight-Draconis",
        2021,
        Material.Plastic,
        data.units.knightDraconis,
        data.units.stormdrakeGuard,
        data.units.stormdrakeGuardSingle
    );
    overrideModel(
        models.knightJudicatorWithGryphHounds,
        2021,
        Material.Plastic
    );
    overrideModel(models.knightQuestor, 2016, Material.Plastic);
    overrideModel(models.knightRelictor, 2021, Material.Plastic);
    overrideModel(
        models.knightVexillorWithBannerOfApotheosis,
        2021,
        Material.Plastic
    );
    mergeModels(
        data.models,
        "Knight-Zephyros",
        2017,
        Material.Plastic,
        data.units.knightZephyros,
        data.units.neaveBlacktalon
    );
    overrideModel(models.lordArcanumOnGryphCharger, 2018, Material.Plastic);
    overrideModel(models.lordExorcist, 2018, Material.Plastic);
    overrideModel(models.lordImperatant, 2021, Material.Plastic);
    overrideModel(models.praetors, 2021, Material.Plastic);
    overrideModel(models.stormstrikeChariot, 2021, Material.Plastic);
    overrideModel(models.theFarstriders, 2018, Material.Plastic);
    overrideModel(models.vanquishers, 2021, Material.Plastic);
    overrideModel(models.vigilors, 2021, Material.Plastic);
    overrideModel(models.vindictors, 2021, Material.Plastic);
    overrideModel(models.xandireSTruthseekers, 2021, Material.Plastic);
    overrideModel(models.yndrasta, 2021, Material.Plastic);
}

export function overrideStormcast(data: ImportedDataStoreImpl): void {
    fixModels(data);
    addEffect(data.abilities.blazeOfGlory, {
        targetType: TargetType.Enemy,
        condition: {
            slain: true,
            inRangeOf: {
                enemy: true,
                range: '1"',
            },
        },
        targetRange: '1"',
        immediate: {
            mortalWounds: conditionValue({ keyword: "THUNDERSTRIKE" }, "1(6+)"),
            mortalWoundsPerWound: "1(6+)",
        },
    });

    addEffect(
        data.abilities.annihilatorsWithMeteoricGrandhammersBlazingImpact,
        {
            condition: {
                setup: true,
            },
            targetType: TargetType.Enemy,
            targetRadius: '10"',
            immediate: {
                mortalWounds: "D3(3+)",
            },
        }
    );
    addEffect(
        data.abilities.annihilatorsWithMeteoricGrandhammersBlazingImpact,
        {
            targetType: TargetType.Unit,
            auras: [
                {
                    type: AuraType.Charge,
                    condition: {
                        setup: true,
                    },
                    rerollCharge: true,
                },
            ],
        }
    );
}
