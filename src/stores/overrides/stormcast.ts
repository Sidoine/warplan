import { DataStoreImpl } from "../imported-data";
import {
    Unit,
    Material,
    Phase,
    SubPhase,
    TargetType,
    conditionValue,
    Allegiance,
    Ability,
    ArmyOption,
    AbilityCategory
} from "../units";
import {
    overrideModel,
    setAbilityAsOption,
    setAttackAsOption,
    removeAbility,
    addOption,
    ModelCategoryWeapon,
    UnitCategoryMain,
    oneModelOption,
    ratioModelOption,
    override,
    addAbilityEffect,
    hasOption,
    overrideAttack,
    addAttackToOption,
    addAbilityToOption,
    overrideAbility,
    overrideAbilities
} from "./tools";

function addBoxes(data: DataStoreImpl): void {
    data.boxes.push({
        id: "startCollectingStormcastVanguard",
        name: "Start Collecting! Stormcast Vanguard",
        units: [
            { count: 1, models: [data.models.lordAquilor] },
            { count: 5, models: [data.models.vanguardHunters] },
            { count: 3, models: [data.models.vanguardPalladors] },
            { count: 3, models: [data.models.gryphHounds] }
        ],
        price: 65
    });
    data.boxes.push({
        id: "warhammerAgeOfSigmarStarterSet",
        name: "Warhammer Age of Sigmar Starter Set",
        units: [
            { count: 1, models: [data.models.lordCelestantOnDracoth] },
            { count: 1, models: [data.models.lordRelictor] },
            { count: 3, models: [data.models.retributors] },
            { count: 10, models: [data.models.liberators] },
            { count: 3, models: [data.models.prosecutors] },
            { count: 1, models: [data.models.mightyLordOfKhorne] },
            { count: 1, models: [data.models.bloodsecrator] },
            { count: 1, models: [data.models.khorgoraths] },
            { count: 5, models: [data.models.bloodWarriors] },
            { count: 20, models: [data.models.bloodreavers] }
        ],
        price: 126
    });
    data.boxes.push({
        id: "startCollectingStormcasts",
        name: "Start Collecting! Stormcast Eternals",
        units: [
            { count: 1, models: [data.models.lordCelestant] },
            { count: 2, models: [data.models.retributors] },
            { count: 3, models: [data.models.prosecutors] },
            { count: 5, models: [data.models.liberators] }
        ],
        price: 65
    });
    data.boxes.push({
        id: "shadespire",
        name: "Warhammer Underworlds: Shadespire",
        units: [
            { count: 3, models: [data.models.steelheartSChampions] },
            { count: 5, models: [data.models.garrekSReavers] }
        ],
        price: 50
    });
    data.boxes.push({
        id: "easyToBuildLiberators",
        name: "Easy to Build: Liberators",
        units: [{ count: 3, models: [data.models.liberators] }],
        price: 12
    });
    data.boxes.push({
        id: "judicators",
        name: "Judicators",
        units: [{ count: 10, models: [data.models.judicators] }],
        price: 49
    });
    data.boxes.push({
        id: "knightVenator",
        name: "Kinght-Venator/Azyros",
        units: [
            {
                count: 1,
                models: [data.models.knightAzyros, data.models.knightVenator]
            }
        ],
        price: 33
    });
    data.boxes.push({
        id: "vanguardRaptors",
        name: "Vanguard-Raptors",
        units: [
            {
                count: 3,
                models: [
                    data.models.vanguardRaptorsWithHurricaneCrossbows,
                    data.models.vanguardRaptorsWithLongstrikeCrossbows
                ]
            },
            { count: 3, models: [data.models.aetherwings] }
        ],
        price: 30
    });
    data.boxes.push({
        id: "lordAquilor",
        name: "Lord-Aquilor",
        units: [{ count: 1, models: [data.models.lordAquilor] }],
        price: 32.5
    });
    data.boxes.push({
        id: "stardrake",
        name: "Lord-Celestant on Stardrake/Drakesworn Templar",
        units: [
            {
                count: 1,
                models: [
                    data.models.lordCelestantOnStardrake,
                    data.models.drakeswornTemplar
                ]
            }
        ],
        price: 120
    });
    data.boxes.push({
        id: "celestantPrime",
        name: "Celestant-Prime",
        units: [
            { count: 1, models: [data.models.celestantPrimeHammerOfSigmar] }
        ],
        price: 62
    });
    data.boxes.push({
        id: "dracothianGuard",
        name: "Dracothian Guard",
        units: [
            {
                count: 2,
                models: [
                    data.models.fulminators,
                    data.models.tempestors,
                    data.models.concussors,
                    data.models.desolators
                ]
            }
        ],
        price: 55
    });
    data.boxes.push({
        id: "paladins",
        name: "Paladins",
        units: [
            {
                count: 5,
                models: [
                    data.models.decimators,
                    data.models.protectors,
                    data.models.retributors
                ]
            }
        ],
        price: 46
    });
    data.boxes.push({
        id: "easyToBuildRetributors",
        name: "Easy to Build: Retributors",
        units: [{ count: 2, models: [data.models.retributors] }],
        price: 12
    });
    data.boxes.push({
        id: "prosecutors",
        name: "Prosecutors",
        units: [{ count: 6, models: [data.models.prosecutors] }],
        price: 59
    });
    data.boxes.push({
        id: "vanguardHunters",
        name: "Vanguard-Hunters",
        units: [{ count: 10, models: [data.models.vanguardHunters] }],
        price: 50
    });
    data.boxes.push({
        id: "liberators",
        name: "Liberators",
        units: [{ count: 10, models: [data.models.liberators] }],
        price: 49
    });
    data.boxes.push({
        id: "vanguardPalladors",
        name: "Vanguard-Palladors",
        units: [{ count: 3, models: [data.models.vanguardPalladors] }],
        price: 45
    });
    data.boxes.push({
        id: "vandusHammerhand",
        name: "Vandus Hammerhand",
        units: [{ count: 1, models: [data.models.vandusHammerhand] }],
        price: 32.5
    });
    data.boxes.push({
        id: "lordCastellant",
        name: "Lord-Castellant",
        units: [
            { count: 1, models: [data.models.lordCastellant] },
            { count: 1, models: [data.models.gryphHounds] }
        ],
        price: 30
    });
    data.boxes.push({
        id: "lordVeritant",
        name: "Lord-Veritant",
        units: [
            { count: 1, models: [data.models.lordVeritant] },
            { count: 1, models: [data.models.gryphHounds] }
        ],
        price: 26
    });
    data.boxes.push({
        id: "lordCelestant",
        name: "Lord-Celestant",
        units: [{ count: 1, models: [data.models.lordCelestant] }],
        price: 26
    });
    data.boxes.push({
        id: "lordCelestantGavrielSureheart",
        name: "Lord-Celestant Gavriel Sureheart",
        units: [{ count: 1, models: [data.models.gavrielSureheart] }],
        price: 25
    });
    data.boxes.push({
        id: "lordOrdinatorVorrusStarstrike",
        name: "Lord-Ordinator Vorrus Starstrike",
        units: [{ count: 1, models: [data.models.lordOrdinator] }],
        price: 25
    });
    data.boxes.push({
        id: "knightVexillor",
        name: "Knight-Vexillor",
        units: [{ count: 1, models: [data.models.knightVexillor] }],
        price: 23
    });
    data.boxes.push({
        id: "gryphHounds",
        name: "Gryph-hounds",
        units: [{ count: 6, models: [data.models.gryphHounds] }],
        price: 20
    });
    data.boxes.push({
        id: "knightHeraldor",
        name: "Knight-Heraldor",
        units: [{ count: 1, models: [data.models.knightHeraldor] }],
        price: 19.5
    });
    data.boxes.push({
        id: "warhammerQuestMightyHeroes",
        name: "Warhammer Quest Mighty Heroes",
        price: 45,
        url:
            "https://www.games-workshop.com/en-EU/Warhammer-Quest-Mighty-Heroes",
        units: [
            { count: 1, models: [data.models.slaughterpriest] },
            {
                count: 1,
                models: [data.models.knightVenator, data.models.knightAzyros]
            },
            { count: 1, models: [data.models.auricRunemaster] }
        ]
    });
    data.boxes.push({
        id: "warhammerQuestArcaneHeroes",
        name: "Warhammer Quest Arcane Heroes",
        price: 45,
        url:
            "https://www.games-workshop.com/en-EU/Warhammer-Quest-Arcane-Heroes",
        units: [
            { count: 1, models: [data.models.greySeer] },
            { count: 1, models: [data.models.chaosSorcererLord] },
            { count: 1, models: [data.models.knightHeraldor] },
            { count: 1, models: [data.models.sorceress] },
            { count: 1, models: [data.models.skinkPriest] }
        ]
    });
}

function fixBattalions(data: DataStoreImpl): void {
    // const aetherstrike: Battalion = data.battalions.aetherstrikeForce;
    // aetherstrike.units.push({ unit: [data.units.knightVenator], count: 1, id: data.serial++ });
    // aetherstrike.units.push({ unit: [data.units.knightAzyros], count: 1, id: data.serial++ });
    // aetherstrike.units.push({ unit: [data.units.judicators], count: 2, id: data.serial++ });
    // aetherstrike.units.push({ unit: [data.units.vanguardRaptorsWithLongstrikeCrossbows, data.units.vanguardRaptorsWithHurricaneCrossbows], count: 2, id: data.serial++ });
    // aetherstrike.units.push({ unit: [data.units.aetherwings], count: 2, id: data.serial++ });
    // aetherstrike.abilities = [
    //     { name: "Marked for Destruction", description: "The enemies of the Aetherstrike Force hear their doom approaching in the beating of celestial wings. In your hero phase, one unit from this force can attack as if it were the shooting phase. All of their attacks must be directed at units within 12\" of any units of Aetherwings from this battalion or the Knight- Azyros from this battalion."},
    //     { name:"Vengeance from Afar", description: "Any who seeks to strike against the comrades of these warriors will find their temerity punished with ice cold efficiency. When a unit from this force is destroyed, another unit from this force can attack as if it were the shooting phase. All of their attacks must be directed at the enemy unit that destroyed the unit from the Aetherstrike Force."}
    // ];
    // const shadowhammers: Battalion = data.battalions.blacktalonSShadowhammers;
    // shadowhammers.units.push({ unit: [data.units.neaveBlacktalon], count: 1, id: data.serial++});
    // shadowhammers.units.push({ unit: [data.units.vanguardPalladors], count: 1, id: data.serial++});
    // shadowhammers.units.push({ unit: [data.units.vanguardRaptorsWithHurricaneCrossbows, data.units.vanguardRaptorsWithLongstrikeCrossbows], count: 1, id: data.serial++});
    // shadowhammers.units.push({ unit: [data.units.vanguardHunters], count: 1, id: data.serial++});
    // shadowhammers.units.push({ unit: [data.units.aetherwings], count: 1, id: data.serial++});
    // shadowhammers.abilities = [
    //     { name: "Swift as the wind", description: "In your hero phase, all STORMCAST ETERNAL units from this battalion that are within 6\" of Neave Blacktalon may move 5\" as if it were the movement phase, but may not run." },
    //     { name: "Coordinated Attacks", description: "If a unit from Blacktalon's Shadowhammers makes a successful charge against an enemy unit that was the target of a shooting attack by another unit in this battalion this turn, you may add 1 to its hit rolls in the subsequent combat phase."}
    // ]
    // const hammerStrikeForce: Battalion = data.battalions.hammerstrikeForce;
    // hammerStrikeForce.units.push({ unit: [data.units.paladinRetributors, data.units.paladinDecimators, data.units.paladinProtectors], count: 2, id: data.serial++ });
    // hammerStrikeForce.units.push({ unit: [data.units.prosecutorsWithCelestialHammers, data.units.prosecutorsWithStormcallJavelins], count: 1, id: data.serial++});
    // hammerStrikeForce.abilities=  [
    //     { name: "Hammerstrike", description: "Instead of setting up the PALADINS on the battlefield, you can place either or both units to one side and say that they are set up in the Celestial Realm. In any of your movement phases, you can transport either or both units to the battlefield. When you do so, set them up on the battlefield within 6\" of the Hammerstrike Force’s Prosecutors. If the Prosecutors have been slain, set up the PALADINS more than 9\" from any enemy models. In either case, this is their move for that movement phase."},
    //     { name: "Celestial Supercharge", description: "When a unit of PALADINS from the Hammerstrike Force is set up within \" of its Prosecutors, they are supercharged with celestial energy until the end of your turn. Add 1 to the result of any wound rolls you make for this unit."}
    // ];
    // const vanguardWing: Battalion = data.battalions.vanguardWing;
    // vanguardWing.units.push({ unit: [data.units.prosecutorsWithCelestialHammers, data.units.prosecutorsWithStormcallJavelins], count: 3, id: data.serial++});
    // vanguardWing.units.push({ unit: [data.units.liberators], count: 1, id: data.serial++});
    // vanguardWing.units.push({ unit: [data.units.judicators], count: 1, id: data.serial++});
    // vanguardWing.abilities = [
    //     { name: "Bearers of the Storm", description: "Liberators and Judicators in a Vanguard Wing are empowered while they are within 8\" of the battalion’s Prosecutors. If a hit roll for an attack made by these Liberators or Judicators is 6 or higher, make two wound rolls rather than one."},
    //     { name: "Stormstreak", description: "Instead of moving in their movement phase, a Vanguard Wing’s Liberators can vanish with a crash of thunder, travelling at the speed of a thunderbolt to aid their Prosecutor brethren. Remove the unit from the battlefield, then set it up anywhere within 5\" of a unit of Prosecutors from the Vanguard Wing."}
    // ];
}

function fixUnits(data: DataStoreImpl): void {
    {
        const liberator: Unit = data.units.liberators;
        const shield = removeAbility(
            liberator,
            data.abilities.liberatorsSigmariteShields
        );
        const pairedWeapons = removeAbility(
            liberator,
            data.abilities.liberatorsPairedWeapons
        );
        const gb = setAttackAsOption(
            liberator,
            data.attacks.liberatorsGrandblade,
            ratioModelOption(1, 5)
        );
        const gh = setAttackAsOption(
            liberator,
            data.attacks.liberatorsGrandhammer,
            ratioModelOption(1, 5)
        );
        const wb = setAttackAsOption(
            liberator,
            data.attacks.liberatorsWarblade,
            undefined,
            [pairedWeapons],
            UnitCategoryMain
        );
        const wh = setAttackAsOption(
            liberator,
            data.attacks.liberatorsWarhammer,
            undefined,
            [pairedWeapons],
            UnitCategoryMain
        );
        const whs = addOption(liberator, {
            id: "warhammerAndShield",
            name: "Warhammer and shield",
            abilities: [shield],
            attacks: [data.attacks.liberatorsWarhammer],
            modelCategory: ModelCategoryWeapon,
            unitCategory: UnitCategoryMain
        });
        const wbs = addOption(liberator, {
            id: "warbladeAndShield",
            name: "Warblade and shield",
            abilities: [shield],
            attacks: [data.attacks.liberatorsWarblade],
            modelCategory: ModelCategoryWeapon,
            unitCategory: UnitCategoryMain
        });
        const prime = setAbilityAsOption(
            liberator,
            data.abilities.liberatorsLiberatorPrime,
            oneModelOption
        );
        addAbilityEffect(data.abilities.liberatorsLayLowTheTyrants, {
            targetType: TargetType.Unit,
            attackAura: { bonusHitRoll: conditionValue({ minWounds: 5 }, 1) }
        });
        addAbilityEffect(data.abilities.liberatorsLiberatorPrime, {
            targetType: TargetType.Model,
            attackAura: { bonusAttacks: 1 }
        });
        addAbilityEffect(data.abilities.liberatorsSigmariteShields, {
            defenseAura: { rerollSavesOn1: true },
            targetType: TargetType.Unit
        });
        addAbilityEffect(data.abilities.liberatorsPairedWeapons, {
            attackAura: { numberOfHitsOnUnmodified6: 2 },
            targetType: TargetType.Model
        });

        liberator.optionStats = [
            {
                name: "Warhammers, prime with Grandhammer",
                models: [
                    { options: [wh], count: 4 },
                    { options: [gh, prime], count: 1 }
                ]
            },
            {
                name: "Warhammer and Shield, prime with Grandhammer",
                models: [
                    { options: [whs], count: 4 },
                    { options: [gh, prime], count: 1 }
                ]
            },
            {
                name: "Warblades, prime with Grandblade",
                models: [
                    { options: [wb], count: 4 },
                    { options: [gb, prime], count: 1 }
                ]
            },
            {
                name: "Warblade and Shield, prime with Grandblade",
                models: [
                    { options: [wbs], count: 4 },
                    { options: [gb, prime], count: 1 }
                ]
            }
        ];
    }

    {
        const judicator: Unit = data.units.judicators;
        const rapidFire = removeAbility(
            judicator,
            data.abilities.judicatorsRapidFire
        );
        const chainedLightning = removeAbility(
            judicator,
            data.abilities.judicatorsChainedLightning
        );
        const thunderboltCrossbowAbility = removeAbility(
            judicator,
            data.abilities.judicatorsThunderboltCrossbow
        );
        const skyboltBow = setAttackAsOption(
            judicator,
            data.attacks.judicatorsSkyboltBow
        );
        const boltstormCrossbow = setAttackAsOption(
            judicator,
            data.attacks.judicatorsBoltstormCrossbow,
            undefined,
            [rapidFire]
        );
        const shockboltBow = setAttackAsOption(
            judicator,
            data.attacks.judicatorsShockboltBow,
            ratioModelOption(1, 5),
            [chainedLightning]
        );
        const thunderboltCrossbow = setAttackAsOption(
            judicator,
            data.attacks.judicatorsThunderboltCrossbowRanged,
            ratioModelOption(1, 5),
            [thunderboltCrossbowAbility]
        );
        const judicatorPrime = setAbilityAsOption(
            judicator,
            data.abilities.judicatorsJudicatorPrime,
            oneModelOption
        );
        addAbilityEffect(data.abilities.judicatorsChainedLightning, {
            phase: Phase.Shooting,
            targetType: TargetType.Model,
            attackAura: { numberOfHitsOnHit: "D6" },
            targetCondition: {
                weaponId: data.attacks.judicatorsShockboltBow.id
            }
        });
        addAbilityEffect(data.abilities.judicatorsRapidFire, {
            phase: Phase.Shooting,
            targetType: TargetType.Model,
            targetCondition: {
                hasNotMoved: true,
                weaponId: data.attacks.judicatorsBoltstormCrossbow.id
            },
            attackAura: { bonusAttacks: 1 }
        });
        addAbilityEffect(data.abilities.judicatorsEternalJudgement, {
            targetType: TargetType.Weapon,
            targetCondition: { rangedWeapon: true },
            attackAura: {
                phase: Phase.Shooting,
                rerollHitsOn1: conditionValue({ keyword: "CHAOS" }, 1)
            }
        });
        addAbilityEffect(data.abilities.judicatorsThunderboltCrossbow, {
            phase: Phase.Shooting,
            targetType: TargetType.Enemy,
            targetCondition: { keyword: "MONSTER", minModels: "D6-1" },
            mortalWounds: "D3",
            ignoreOtherEffects: true
        });
        addAbilityEffect(data.abilities.judicatorsThunderboltCrossbow, {
            phase: Phase.Shooting,
            targetType: TargetType.Enemy,
            targetCondition: { minModels: "D6" },
            mortalWounds: "D3"
        });
        addAbilityEffect(data.abilities.judicatorsJudicatorPrime, {
            phase: Phase.Shooting | Phase.Combat,
            targetType: TargetType.Model,
            attackAura: { bonusHitRoll: 1 }
        });

        judicator.optionStats = [
            {
                name: "Skybolt Bows and prime with Shockbolt Bow",
                models: [
                    { count: 4, options: [skyboltBow] },
                    { count: 1, options: [shockboltBow, judicatorPrime] }
                ]
            },
            {
                name: "Boltstorm Crossbows and prime with Thunderbolt Crossbow",
                models: [
                    { count: 4, options: [boltstormCrossbow] },
                    { count: 1, options: [thunderboltCrossbow, judicatorPrime] }
                ]
            }
        ];
    }

    {
        const unit = data.units.lordCelestantOnDracoth;
        const glaive = setAttackAsOption(
            unit,
            data.attacks.lordCelestantOnDracothStormstrikeGlaiveMelee
        );
        const hammer = setAttackAsOption(
            unit,
            data.attacks.lordCelestantOnDracothTempestosHammerMelee
        );
        const axe = setAttackAsOption(
            unit,
            data.attacks.lordCelestantOnDracothThunderaxeMelee
        );
        const light = setAttackAsOption(
            unit,
            data.attacks.lordCelestantOnDracothLightningHammerMelee
        );
        addAbilityToOption(
            hammer,
            unit,
            data.abilities.lordCelestantOnDracothTempestosHammer,
            {
                attackAura: { bonusAttacks: 3 },
                targetCondition: { hasCharged: true },
                targetType: TargetType.Weapon
            }
        );
        addAbilityToOption(
            axe,
            unit,
            data.abilities.lordCelestantOnDracothThunderaxe,
            { attackAura: { bonusAttacks: 1 }, targetType: TargetType.Weapon }
        );
        addAbilityToOption(
            light,
            unit,
            data.abilities.lordCelestantOnDracothLightningHammer,
            {
                attackAura: { mortalWoundsOnHitUnmodified6: 2 },
                targetType: TargetType.Weapon
            }
        );
        addAbilityToOption(
            glaive,
            unit,
            data.abilities.lordCelestantOnDracothStormstrikeGlaive,
            {
                attackAura: { bonusDamage: 2 },
                targetCondition: { hasCharged: true },
                targetType: TargetType.Weapon
            }
        );
        addAbilityEffect(
            data.abilities.lordCelestantOnDracothSigmariteThundershield,
            {
                defenseAura: {
                    mortalWoundsOnSucessfulSaveReroll: 1,
                    rerollFailedSaves: true
                },
                targetType: TargetType.Unit
            }
        );
        addAbilityEffect(
            data.abilities.lordCelestantOnDracothIntolerableDamage,
            {
                targetType: TargetType.Weapon,
                attackAura: { damageOnWoundUnmodified6: "D6" },
                targetCondition: {
                    weaponId:
                        data.attacks.lordCelestantOnDracothDracothSClawsAndFangs
                            .id
                }
            }
        );
        addAbilityEffect(data.abilities.lordCelestantOnDracothStormBreath, {
            phase: Phase.Shooting,
            effectRange: 12,
            targetRadius: 2,
            mortalWounds: "D3(4+)",
            targetType: TargetType.Enemy
        });
        addAbilityEffect(data.abilities.lordCelestantOnDracothMount, {
            phase: Phase.Setup,
            targetType: TargetType.Unit
        });
        addAbilityEffect(data.abilities.lordCelestantOnDracothLordOfTheHost, {
            phase: Phase.Battleshock,
            targetType: TargetType.Friend,
            battleShockAura: { immune: true }
        });

        // setBaseModelOption(unit, data.units.lordCelestantOnDracoth.baseOptions.tempestosHammerThundershield, [tempestosHammer], [sigmariteThundershield, tempestosHammerAbility]);
        // setBaseModelOption(unit, data.units.lordCelestantOnDracoth.baseOptions.lightningHammer, [lightningHammer], [lightningHammerAbility]);
        // setBaseModelOption(unit, data.units.lordCelestantOnDracoth.baseOptions.lightningHammerThundershield, [lightningHammer], [sigmariteThundershield, lightningHammerAbility]);
        // setBaseModelOption(unit, data.units.lordCelestantOnDracoth.baseOptions.stormstrikeGlaive, [stormstrikeGlaive], [stormstrikeGlaiveAbility]);
        // setBaseModelOption(unit, data.units.lordCelestantOnDracoth.baseOptions.stormstrikeGlaiveThundershield, [stormstrikeGlaive], [sigmariteThundershield, stormstrikeGlaiveAbility]);
        // setBaseModelOption(unit, data.units.lordCelestantOnDracoth.baseOptions.thunderaxe, [thunderAxe], [thunderaxeAbility]);
        // setBaseModelOption(unit, data.units.lordCelestantOnDracoth.baseOptions.thunderaxeThundershield, [thunderAxe], [sigmariteThundershield, thunderaxeAbility]);
    }

    {
        const paladinRetributors: Unit = data.units.retributors;
        const bta = removeAbility(
            paladinRetributors,
            data.abilities.retributorsBlastToAshes
        );
        const lightningHammerOption = setAttackAsOption(
            paladinRetributors,
            data.attacks.retributorsLightningHammer,
            undefined,
            [bta],
            UnitCategoryMain
        );
        const ssm = removeAbility(
            paladinRetributors,
            data.abilities.retributorsStarsoulMace
        );
        const starsoulMaceOption = setAttackAsOption(
            paladinRetributors,
            data.attacks.retributorsStarsoulMaceMelee,
            ratioModelOption(2, 5),
            [ssm]
        );
        const prime = setAbilityAsOption(
            paladinRetributors,
            data.abilities.retributorsRetributorPrime,
            oneModelOption
        );
        addAbilityEffect(bta, {
            phase: Phase.Combat,
            targetType: TargetType.Model,
            attackAura: { mortalWoundsOnHitUnmodified6: 2 }
        });
        addAbilityEffect(data.abilities.retributorsRetributorPrime, {
            phase: Phase.Combat,
            targetType: TargetType.Model,
            attackAura: { bonusAttacks: 1 }
        });
        ssm.randomEffectDices = "D6";
        addAbilityEffect(ssm, {
            phase: Phase.Combat,
            targetType: TargetType.Model,
            attackAura: { mortalWounds: "D3" },
            randomEffectRange: { min: 2, max: 5 }
        });
        addAbilityEffect(ssm, {
            phase: Phase.Combat,
            targetType: TargetType.Model,
            attackAura: { mortalWounds: "D3+1" },
            randomEffectRange: { min: 6, max: 6 }
        });
        paladinRetributors.optionStats = [
            {
                name: "Lightning Hammer and Starsoul Mace",
                models: [
                    { count: 2, options: [starsoulMaceOption] },
                    { count: 1, options: [lightningHammerOption, prime] },
                    { count: 2, options: [lightningHammerOption] }
                ]
            }
        ];
    }

    {
        // const unit: Unit = data.units.protectors;
        // unit.wounds = 3;
        // unit.move = 4;
        // unit.save = "3+";
        // unit.bravery = 7;
        // unit.keywords.push("CELESTIAL", "HUMAN", "PALADIN", "PROTECTORS");
        // const stormstrikeGlaive: Attack = { melee: true, name: "Stormstrike Glaive", range: "3", attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "1"};
        // const starsoulMace: Attack = { melee: true, name: "Starsoul Mace", range: "1" };
        // const starsoulMaceAbility: Ability = {
        //     name: "Starsoul Mace",
        //     description: "A model armed with a Starsoul Mace can make a starblast attack in each combat phase. Pick an enemy unit that is within 1\" of the model with the Starsoul Mace. That unit suffers D3 mortal wounds.",
        //     getWounds: (models, melee, attack) => melee && attack === undefined ? 2 * models : 0
        // };
        // const deathstrike: Ability = {
        //     name: "Deathstrike",
        //     description: "Stormstrike Glaive can slay monstrous foes with a single blow. If the wound roll for a Stormstrike Glaive is 6 or more and the target is a MONSTER, it does D6 Damage instead of 1."
        // };
        // const stormShield: Ability = {
        //     name: "Storm-Shield",
        //     description: "Arrows are deflected by the Protectors’ weaving Glaives. Subtract 1 from the hit rolls of enemy shooting attacks that target a unit of Protectors, or which must cross a unit of Protectors to hit a model that lies beyond them."
        // }
        // const protectorPrime: Ability = {
        //     name: "Protector-Prime",
        //     description: "The leader of this unit is the Protector-Prime. A Protector-Prime attacking with a Stormstrike Glaive makes 4 attacks rather than 3.",
        //     getWounds: (models, melee, attack) => attack && attack === stormstrikeGlaive ? getWoundsForExtraAttack(attack) : 0
        // };
        // const primeOption: ModelOption = {
        //     id: "prime",
        //     abilities: [protectorPrime],
        //     name: "Protector-Prime",
        //     isOptionValid: (unit, model) => getUnitModelsWithOptionCount(unit, primeOption) <= 0
        // }
        // const starsoulMaceOption: ModelOption = {
        //     attacks: [starsoulMace],
        //     abilities: [starsoulMaceAbility],
        //     name: "Starsoul Mace",
        //     id: "starsoulMace",
        //     isOptionValid: (unit, model) => isRatioCorrect(unit, starsoulMaceOption, 2, 5),
        //     modelCategory: "weapon"
        // };
        // const stormstrikeGlaiveOption: ModelOption = {
        //     attacks: [stormstrikeGlaive],
        //     abilities: [deathstrike, stormShield],
        //     name: "Stormstrike Glaive",
        //     id: "stormstrikeGlaive",
        //     modelCategory: "weapon",
        //     unitCategory: "main"
        // };
        // unit.options = [stormstrikeGlaiveOption, starsoulMaceOption, primeOption];
        // unit.modelStats = [
        //     { name: "Stormstrike Glaive and Starsoul Mace", models: [{ count: 2, options: [starsoulMaceOption] }, { count: 1, options: [stormstrikeGlaiveOption, primeOption] }, { count: 2, options: [stormstrikeGlaiveOption] }] }
        // ]
    }

    {
        // const unit: Unit = data.units.decimators;
        // unit.wounds = 3;
        // unit.move = 4;
        // unit.save = "3+";
        // unit.bravery = 7;
        // unit.keywords.push("CELESTIAL", "HUMAN", "PALADIN", "PROTECTORS");
        // const thunderaxe: Attack = { melee: true, name: "Thunderaxe", range: "2", toHit: "3+", toWound: "3+", rend: "-1", damage: "1"};
        // const starsoulMace: Attack = { melee: true, name: "Starsoul Mace", range: "1" };
        // const starsoulMaceAbility: Ability = {
        //     name: "Starsoul Mace",
        //     description: "A model armed with a Starsoul Mace can make a starblast attack in each combat phase. Pick an enemy unit that is within 1\" of the model with the Starsoul Mace. That unit suffers D3 mortal wounds.",
        //     getWounds: (models, melee, attack) => melee && attack === undefined ? 2 * models : 0
        // };
        // const cleavingBlow: Ability = {
        //     name: "Cleaving Blow",
        //     description: "single swing of a Thunderaxe can carve through several foes. When a model attacks with a Thunderaxe, select a target unit and make one attack against it for each model it has within range.",
        //     getWounds: (models, melee, attack) => attack === thunderaxe ? getAttackDamageEx(attack, { attacks: enemyModelsInRange }) * models : 0
        // };
        // const grimHarvesters: Ability = {
        //     name: "Grim Harversters",
        //     description: "Fear surrounds Decimators as they set about their gory work. Add 2 to the result of battleshock tests made for enemy units that are within 6\" of any Decimators."
        // }
        // const prime: Ability = {
        //     name: "Decimator-Prime",
        //     description: "The leader of this unit is the Decimator-Prime. Add 1 to the wound rolls for a Decimator-Prime.",
        //     getWounds: (models, melee, attack) => attack === thunderaxe ? getAttackDamageEx(attack, { toWound:6, attacks: enemyModelsInRange}) : 0
        // };
        // const primeOption: ModelOption = {
        //     id: "prime",
        //     abilities: [prime],
        //     name: "Decimator-Prime",
        //     isOptionValid: (unit, model) => getUnitModelsWithOptionCount(unit, primeOption) <= 0
        // }
        // const starsoulMaceOption: ModelOption = {
        //     attacks: [starsoulMace],
        //     abilities: [starsoulMaceAbility],
        //     name: "Starsoul Mace",
        //     id: "starsoulMace",
        //     isOptionValid: (unit, model) => isRatioCorrect(unit, starsoulMaceOption, 2, 5),
        //     modelCategory: "weapon"
        // };
        // const thunderaxeOption: ModelOption = {
        //     attacks: [thunderaxe],
        //     abilities: [cleavingBlow, grimHarvesters],
        //     name: "Thunderaxe",
        //     id: "thunderaxe",
        //     modelCategory: "weapon",
        //     unitCategory: "main"
        // };
        // unit.options = [thunderaxeOption, starsoulMaceOption, primeOption];
        // unit.modelStats = [
        //     { name: "Thunderaxe and Starsoul Mace", models: [{ count: 2, options: [starsoulMaceOption] }, { count: 1, options: [thunderaxeOption, primeOption] }, { count: 2, options: [thunderaxeOption] }] }
        // ]
    }

    {
        // const lordRelictor: Unit = data.units.lordRelictor;
        // lordRelictor.wounds = 5;
        // lordRelictor.move = 4;
        // lordRelictor.save = "3+";
        // lordRelictor.bravery = 9;
        // lordRelictor.keywords.push("CELESTIAL", "HUMAN", "PRIEST", "LORD-RELICTOR");
        // lordRelictor.warscroll = "https://www.games-workshop.com/resources/PDF/Downloads//ENG_Lord_Relictor.pdf";
        // const relicHammer: Attack = { melee: true, name: "Relic Hammer", range: "1", attacks: "4", toHit: "3+", toWound: "3+", rend: "-1", damage: "1"};
        // const lightningStorm: Ability = {
        //     name: "Lighning Storm",
        //     description: "In your hero phase, you can declare that the Lord-Relictor will pray for a lightning storm. If you do so, pick an enemy unit that is within 12\" of this model and roll a dice. On a roll of 3 or more, the unit you picked suffers D3 mortal wounds, and your opponent must subtract 1 from all hit rolls for the unit until your next hero phase. A Lord-Relictor cannot pray for a lightning storm and a healing storm in the same turn."
        // };
        // const healingStorm: Ability = { name: "Healing Storm", description: "In your hero phase, you can declare that this model is praying for a healing storm. If you do so, pick a friendly model with the STORMCAST ETERNAL keyword that is within 12\" of this model and roll a dice. On a roll of 3 or more you can heal up to D3 wounds that have been suffered by the model that you picked. A Lord-Relictor cannot pray for a healing storm and a lightning storm in the same turn."};
        // lordRelictor.abilities= [lightningStorm, healingStorm];
        // lordRelictor.attacks = [relicHammer];
    }

    {
        const unit: Unit = data.units.vanguardHunters;
        const handaxe = setAttackAsOption(
            unit,
            data.attacks.vanguardHuntersShockHandaxe,
            undefined,
            undefined,
            UnitCategoryMain
        );
        const sabre = setAttackAsOption(
            unit,
            data.attacks.vanguardHuntersStormSabre,
            undefined,
            undefined,
            UnitCategoryMain
        );
        const prime = setAbilityAsOption(
            unit,
            data.abilities.vanguardHuntersHunterPrime,
            oneModelOption
        );
        unit.optionStats = [
            {
                name: "Handaxes",
                models: [
                    {
                        count: 1,
                        options: [handaxe, prime]
                    },
                    {
                        count: 4,
                        options: [handaxe]
                    }
                ]
            },
            {
                name: "Sabres",
                models: [
                    { count: 1, options: [sabre, prime] },
                    { count: 4, options: [sabre] }
                ]
            }
        ];
    }

    {
        addAbilityEffect(
            data.abilities.vanguardRaptorsWithLongstrikeCrossbowsLongshot,
            {
                targetType: TargetType.Weapon,
                attackAura: { rangeBonus: 6 },
                targetCondition: {
                    hasNotMoved: true,
                    weaponId: "Longstrike Crossbow"
                }
            }
        );
        addAbilityEffect(
            data.abilities.vanguardRaptorsWithLongstrikeCrossbowsHeadshot,
            {
                targetType: TargetType.Weapon,
                attackAura: { mortalWoundsOnHitUnmodified6: 2 },
                targetCondition: { weaponId: "Longstrike Crossbow" }
            }
        );
        addAbilityEffect(
            data.abilities.vanguardRaptorsWithLongstrikeCrossbowsHuntingCall,
            { targetType: TargetType.Enemy, phase: Phase.Charge }
        ); //, mortalWoundsPerModel: "2(6+)"
        addAbilityEffect(
            data.abilities.vanguardRaptorsWithLongstrikeCrossbowsRaptorPrime,
            { targetType: TargetType.Unit, phase: Phase.Setup }
        );
    }

    {
        addAbilityEffect(data.abilities.aetherwingsFly, {
            targetType: TargetType.Unit,
            movementAura: { fly: true }
        });
        addAbilityEffect(data.abilities.aetherwingsSwoopingHunters, {
            targetType: TargetType.Unit,
            movementAura: { allowChargeAfterRunOrRetreat: true }
        });
        addAbilityEffect(data.abilities.aetherwingsWatchfulGuardians, {
            targetType: TargetType.Unit,
            phase: Phase.Charge
        });
    }

    {
        const unit: Unit = data.units.prosecutors;
        addAbilityEffect(data.abilities.prosecutorsHeraldsOfRighteousness, {
            targetType: TargetType.Unit,
            chargeAura: {}
        });
        addAbilityEffect(data.abilities.prosecutorsFly, {
            targetType: TargetType.Unit,
            movementAura: { fly: true }
        });

        setAbilityAsOption(
            unit,
            data.abilities.prosecutorsProsecutorPrime,
            oneModelOption
        );
        addAbilityEffect(data.abilities.prosecutorsProsecutorPrime, {
            targetType: TargetType.Model,
            attackAura: { bonusAttacks: 1 }
        });

        const prosecutorsCleavingBlow = removeAbility(
            unit,
            data.abilities.prosecutorsCleavingBlow
        );
        addAbilityEffect(data.abilities.prosecutorsCleavingBlow, {
            targetType: TargetType.Weapon,
            attackAura: {}
        });
        setAttackAsOption(unit, data.attacks.prosecutorsGrandaxe, undefined, [
            prosecutorsCleavingBlow
        ]);

        const sigmariteShields = removeAbility(
            unit,
            data.abilities.prosecutorsSigmariteShields
        );
        addAbilityEffect(data.abilities.prosecutorsSigmariteShields, {
            targetType: TargetType.Unit,
            defenseAura: { rerollSavesOn1: true }
        });

        const stormcallJavelinAbility = removeAbility(
            unit,
            data.abilities.prosecutorsStormcallJavelin
        );
        addAbilityEffect(data.abilities.prosecutorsStormcallJavelin, {
            targetType: TargetType.Weapon,
            phase: Phase.Shooting,
            attackAura: {}
        });
        const stormcallJavalinOption = setAttackAsOption(
            unit,
            data.attacks.prosecutorsStormcallJavelinRanged,
            undefined,
            [stormcallJavelinAbility, sigmariteShields]
        );
        addAttackToOption(
            stormcallJavalinOption,
            unit,
            data.attacks.prosecutorsStormcallJavelinMelee
        );

        const pairedHammersAbility = removeAbility(
            unit,
            data.abilities.prosecutorsPairedCelestialHammers
        );
        const pairedHammersOption = setAttackAsOption(
            unit,
            data.attacks.prosecutorsCelestialHammerSMelee,
            undefined,
            [pairedHammersAbility]
        );
        addAttackToOption(
            pairedHammersOption,
            unit,
            data.attacks.prosecutorsCelestialHammerS
        );

        const tridentOption = setAttackAsOption(
            unit,
            data.attacks.prosecutorsStormsurgeTrident,
            oneModelOption,
            [sigmariteShields]
        );
        addAttackToOption(
            tridentOption,
            unit,
            data.attacks.prosecutorsStormsurgeTridentMelee
        );

        setAttackAsOption(
            unit,
            data.attacks.prosecutorsGrandblade,
            oneModelOption
        );
        setAttackAsOption(
            unit,
            data.attacks.prosecutorsGrandhammer,
            oneModelOption
        );

        // unit.optionStats = [
        //     { name: "One prime and Accuracy", models: [{ count: 1, options: [primeOption]}, { count: 2, options: []}], choice: "Accuracy"},
        //     { name: "One prime and Power", models: [{ count: 1, options: [primeOption]}, { count: 2, options: []}], choice: "Power"}
        // ];
    }

    {
        addAbilityEffect(data.abilities.vanguardHuntersAstralCompass, {
            phase: Phase.Movement,
            targetType: TargetType.Unit
        });
        addAbilityEffect(data.abilities.vanguardHuntersTirelessHunters, {
            targetType: TargetType.Model,
            attackAura: { shootAfterRun: true }
        });
        addAbilityEffect(data.abilities.vanguardHuntersHunterPrime, {
            targetType: TargetType.Model,
            attackAura: { bonusAttacks: 1 }
        });
    }

    {
        addAbilityEffect(data.abilities.vanguardPalladorsAetherealStrike, {
            targetType: TargetType.Weapon,
            targetCondition: {
                weaponId: data.attacks.vanguardPalladorsRazorBeakAndClaws.id
            },
            attackAura: { mortalWoundsOnHitUnmodified6: 1 }
        });
        addAbilityEffect(data.abilities.vanguardPalladorsRideTheWindsAetheric, {
            targetType: TargetType.Unit,
            movementAura: { rideTheWindDistance: "6D6" }
        });
        addAbilityEffect(data.abilities.vanguardPalladorsLunarBlade, {
            targetType: TargetType.Enemy,
            phase: Phase.Combat,
            mortalWounds: "1(2+)",
            targetRange: 1
        });
        addAbilityEffect(data.abilities.vanguardPalladorsMount, {
            targetType: TargetType.Unit,
            phase: Phase.Setup
        });
        addAbilityEffect(data.abilities.vanguardPalladorsPalladorPrime, {
            targetType: TargetType.Model,
            phase: Phase.Setup
        });
    }

    {
        // const unit: Unit = data.units.vanguardRaptorsWithHurricaneCrossbows;
        // unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Vanguard-Raptors-with-Longstrike-Crossbows-en.pdf";
        // unit.keywords.push("CELESTIAL", "HUMAN", "JUSTICAR", "VANGUARD-RAPTORS");
        // unit.move = 5;
        // unit.save = "4+";
        // unit.bravery = 7;
        // unit.wounds = 2;
        // const hurricaneCrossbow: Attack = { melee: false, name: "Hurricane Crossbow", range: "18", attacks: "6", toHit: "4+", toWound: "4+", damage: "1" };
        // const heavyStock: Attack = { melee: true, name: "Heavy Stock", range: "1", attacks: "1", toHit: "4+", toWound: "4+", damage: "1" };
        // const raptorPrime: Ability = {
        //     name: "Raptor-Prime",
        //     description: "The leader of this unit is the Raptor-Prime. A Raptor-Prime’s weapons have a To Hit characteristic of 3+.",
        //     getWounds: (models, melee, attack) => attack !== undefined ? getAttackDamageEx(attack, { toHit: "3+" }) - getAttackDamage(attack) : 0
        // };
        // const rapidFire: Ability = {
        //     name: "Rapid Fire",
        //     description: "If a unit of Vanguard-Raptors does not move in the movement phase, then you can add 3 to the Attacks characteristic of any Hurricane Crossbows the unit uses in the shooting phase of the same turn."
        // };
        // const suppressingFire: Ability = {
        //     name: "Suppressing Fire",
        //     description: "If a unit of Vanguard-Raptors with Hurricane Crossbows directs all of its shooting attacks at a single unit in the shooting phase, that unit must subtract 2 from any charge move they make until your next hero phase."
        // };
        // unit.abilities = [rapidFire, raptorPrime, suppressingFire];
        // unit.attacks = [hurricaneCrossbow, heavyStock];
    }

    {
        addAbilityEffect(data.abilities.neaveBlacktalonTirelessHunter, {
            attackAura: { phase: Phase.Shooting, shootAfterRun: true },
            targetType: TargetType.Model
        });
        addAbilityEffect(data.abilities.neaveBlacktalonLightningFastStrikes, {
            targetType: TargetType.Model,
            condition: { hasCharged: true },
            attackAura: { bonusAttacks: 1 }
        });
        addAbilityEffect(data.abilities.neaveBlacktalonNemesis, {
            targetType: TargetType.Model,
            targetCondition: { keyword: "HERO" },
            attackAura: { bonusDamage: 1 }
        });
        addAbilityEffect(data.abilities.neaveBlacktalonWindrider, {
            targetType: TargetType.Model,
            movementAura: { windrider: true }
        });
    }

    {
        addAbilityEffect(
            data.abilities.celestantPrimeHammerOfSigmarCometstrikeSceptre,
            {
                phase: Phase.Shooting,
                targetType: TargetType.Enemy,
                targetRange: 24,
                targetRadius: "D6",
                mortalWounds: "D3"
            }
        );
        addAbilityEffect(
            data.abilities.celestantPrimeHammerOfSigmarRetributionFromOnHigh,
            {
                phase: Phase.Movement,
                subPhase: SubPhase.After,
                targetType: TargetType.Model
            }
        );
        addAbilityEffect(
            data.abilities.celestantPrimeHammerOfSigmarBearerOfTheWarhammer,
            {
                targetType: TargetType.Friend,
                targetRadius: 18,
                whollyWithin: true,
                battleShockAura: { bonusBravery: 1 }
            }
        );
        addAbilityEffect(
            data.abilities.celestantPrimeHammerOfSigmarOrreryOfCelestialFates,
            {
                targetType: TargetType.Model,
                attackAura: { changeHitRoll: true, changeWoundRoll: true },
                defenseAura: { changeSaveRoll: true },
                movementAura: { changeRunRoll: true },
                chargeAura: { changeChargeRoll: true }
            }
        );
        addAbilityEffect(data.abilities.celestantPrimeHammerOfSigmarFly, {
            targetType: TargetType.Model,
            movementAura: { fly: true }
        });
    }

    {
        addAbilityEffect(data.abilities.concussorsBlastToAshes, {
            targetType: TargetType.Unit,
            attackAura: {
                phase: Phase.Shooting,
                effectsOnHitUnmodified6: [
                    {
                        mortalWounds: 1,
                        targetType: TargetType.Enemy,
                        phase: Phase.Shooting
                    },
                    {
                        attackAura: { noPileIn: true },
                        targetType: TargetType.Enemy
                    }
                ]
            }
        });
        addAbilityEffect(data.abilities.concussorsIntolerableDamage, {
            attackAura: { phase: Phase.Combat, damageOnWoundUnmodified6: "D6" },
            targetType: TargetType.Weapon,
            targetCondition: {
                weaponId: data.attacks.concussorsClawsAndFangs.id
            }
        });
        // const stormBlast: Attack = { melee: false, name: "Storm Blast", range: "12", attacks: "1", toHit: "4+" };
        // const lightningHammer: Attack = { melee: true, name: "Lightning Hammer", range: "1", attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "2" };
        // const dracothsClawsAndFangs: Attack = { melee: true, name: "Dracoth's Claws and Fangs", range: "1", attacks: "3", toHit: "3+", toWound: '3+', rend: "-1", damage: "1" };
        // const thunderstrike: Ability = {
        //     name: "Thunderstrike",
        //     description: "If the result of a hit roll for this unit’s Lightning Hammers is 6 or more, the attack inflicts a mortal wound in addition to any other damage it causes. If a unit suffers any mortal wounds in this way, it is stunned for the rest of the combat phase and cannot pile in before it attacks. ",
        //     getWounds: (models, melee, attack) => attack === lightningHammer ? 1/6 * models : 0
        // }
        // const intolerableDamage: Ability = {
        //     name: "Intolerable Damage",
        //     description: "If the wound roll for a Dracoth’s Claws and Fangs is 6 or more, then that attack causes D6 Damage rather than 1. ",
        //     getWounds: (models, melee, attack) => attack === dracothsClawsAndFangs ? getWoundsForSpecialDamageIf6OnWound(attack, 3.5) : 0
        // }
        // const sigmariteShields: Ability = {
        //     name: "Sigmarite Shields",
        //     description: " You can re-roll save rolls of 1 for this unit",
        //     getSavedWounds: getSavedWoundReroll1
        // }
        // const stormBlastAbility: Ability = {
        //     name: "Storm Blast",
        //     description: "Dracoths can spit devastating bolts of lightning which blast open amid the enemy ranks, leaving warriors maimed and reeling. When a unit is hit by a Storm Blast, do not make a wound roll; instead, the unit suffers D3 mortal wounds.",
        //     getWounds: (models, melee, attack) => attack === stormBlast ? models * 3/6 * 2 : 0
        // }
        // unit.attacks = [stormBlast, lightningHammer, dracothsClawsAndFangs];
        // unit.abilities = [thunderstrike, intolerableDamage, sigmariteShields, stormBlastAbility];
    }
    {
        addAbilityEffect(data.abilities.desolatorsFuryOfTheStorm, {
            targetType: TargetType.Unit,
            targetCondition: { minModels: 4 },
            attackAura: { bonusAttacks: 1 }
        });
        addAbilityEffect(data.abilities.desolatorsFuryOfTheStorm, {
            targetType: TargetType.Unit,
            targetCondition: { minModels: 6 },
            attackAura: { bonusAttacks: 2 }
        });
    }

    {
        addAbilityEffect(data.abilities.fulminatorsGlaivewall, {
            targetType: TargetType.Unit,
            defenseAura: { phase: Phase.Shooting, bonusSave: 1 }
        });
        addAbilityEffect(data.abilities.fulminatorsImpalingStrikes, {
            targetType: TargetType.Weapon,
            targetCondition: {
                hasCharged: true,
                weaponId: data.attacks.fulminatorsClawsAndFangs.id
            },
            attackAura: { bonusDamage: 2 }
        });
        addAbilityEffect(data.abilities.fulminatorsSigmariteShields, {
            targetType: TargetType.Unit,
            defenseAura: { rerollSavesOn1: true }
        });
        addAbilityEffect(data.abilities.fulminatorsIntolerableDamage, {
            targetType: TargetType.Weapon,
            targetCondition: {
                weaponId: data.attacks.fulminatorsClawsAndFangs.id
            },
            attackAura: { damageOnWoundUnmodified6: "D6" }
        });
        addAbilityEffect(data.abilities.fulminatorsMount, {
            targetType: TargetType.Unit,
            phase: Phase.Setup
        });
        addAbilityEffect(data.abilities.fulminatorsStormBlast, {
            targetType: TargetType.Weapon,
            targetCondition: {
                weaponId: data.attacks.fulminatorsStormBlastRanged.id
            },
            attackAura: { mortalWoundsOnHit: "D3" }
        });
    }

    {
        addAbilityEffect(data.abilities.tempestorsDisruptiveFire, {
            targetType: TargetType.Enemy,
            targetRadius: 12,
            attackAura: { bonusHitRoll: -1 }
        });
        addAbilityEffect(data.abilities.tempestorsSigmariteShields, {
            targetType: TargetType.Model,
            defenseAura: { rerollSavesOn1: true }
        });
        addAbilityEffect(data.abilities.tempestorsIntolerableDamage, {
            targetType: TargetType.Weapon,
            targetCondition: {
                weaponId: data.attacks.tempestorsClawsAndFangs.id
            },
            attackAura: { damageOnWoundUnmodified6: "D6" }
        });
        addAbilityEffect(data.abilities.tempestorsStormBlast, {
            targetType: TargetType.Weapon,
            targetCondition: {
                weaponId: data.attacks.tempestorsStormBlastRanged.id
            },
            attackAura: { mortalWoundsOnHit: "D3" }
        });
        addAbilityEffect(data.abilities.tempestorsMount, {
            targetType: TargetType.Mount
        });
    }

    {
        addAbilityEffect(data.abilities.knightAzyrosFly, {
            targetType: TargetType.Unit,
            movementAura: { fly: true }
        });
        addAbilityEffect(data.abilities.knightAzyrosIlluminatorOfTheLost, {
            targetType: TargetType.Enemy,
            targetRadius: 10,
            attackAura: {}
        });
        addAbilityEffect(data.abilities.knightAzyrosTheLightOfSigmar, {
            targetType: TargetType.Enemy,
            phase: Phase.Hero
        });
    }

    {
        const unit: Unit = data.units.lordCelestantOnStardrake;
        const hammer = setAttackAsOption(
            unit,
            data.attacks.lordCelestantOnStardrakeCelestineHammer
        );
        const blade = setAttackAsOption(
            unit,
            data.attacks.lordCelestantOnStardrakeStormboundBladeMelee,
            undefined,
            [data.abilities.lordCelestantOnStardrakeStormboundBlade]
        );
        addAbilityEffect(
            data.abilities.lordCelestantOnStardrakeStormboundBlade,
            {
                targetType: TargetType.Weapon,
                attackAura: { numberOfHitsOnUnmodified6: 3 }
            }
        );
        unit.optionStats = [
            {
                name: "Celestine Hammer",
                models: [{ count: 1, options: [hammer] }]
            },
            {
                name: "Stormbound Blade",
                models: [{ count: 1, options: [blade] }]
            }
        ];
    }

    {
        const unit: Unit = data.units.drakeswornTemplar;
        const axe = setAttackAsOption(
            unit,
            data.attacks.drakeswornTemplarTempestAxeMelee,
            undefined,
            [data.abilities.drakeswornTemplarTempestAxe]
        );
        const hammer = setAttackAsOption(
            unit,
            data.attacks.drakeswornTemplarArcHammerMelee,
            undefined,
            [data.abilities.drakeswornTemplarArcHammer]
        );
        const lance = setAttackAsOption(
            unit,
            data.attacks.drakeswornTemplarStormlanceMelee,
            undefined,
            [data.abilities.drakeswornTemplarStormlance]
        );
        addAbilityEffect(data.abilities.drakeswornTemplarArcHammer, {
            targetType: TargetType.Weapon,
            attackAura: { numberOfHitsOnUnmodified6: 2 }
        });
        addAbilityEffect(data.abilities.drakeswornTemplarStormlance, {
            targetType: TargetType.Weapon,
            attackAura: {
                mortalWoundsOnHitUnmodified6: conditionValue(
                    { keyword: "MONSTER" },
                    "D6"
                )
            }
        });
        addAbilityEffect(data.abilities.drakeswornTemplarTempestAxe, {
            targetType: TargetType.Model,
            defenseAura: {
                malusEnemyPileIn: 2
            }
        });
        unit.optionStats = [
            {
                name: "Tempest Axe",
                models: [{ count: 1, options: [axe] }]
            },
            {
                name: "Arc Hammer",
                models: [{ count: 1, options: [hammer] }]
            },
            {
                name: "Stormlance",
                models: [{ count: 1, options: [lance] }]
            }
        ];
    }

    {
        addAbilityEffect(data.abilities.knightVenatorStarFatedArrow, {
            phase: Phase.Shooting,
            targetType: TargetType.Model
        });
        addAbilityEffect(data.abilities.knightVenatorCelestialStrike, {
            targetType: TargetType.Weapon,
            attackAura: {}
        });
        addAbilityEffect(data.abilities.knightVenatorCompanion, {
            phase: Phase.Setup,
            targetType: TargetType.Unit
        });
        addAbilityEffect(data.abilities.knightVenatorFly, {
            movementAura: { fly: true },
            targetType: TargetType.Model
        });
        // const unit: Unit = data.units.knightVenator;
        // unit.move = 5;
        // unit.bravery = 9;
        // unit.save = "3+";
        // unit.keywords.push("CELESTIAL", "HUMAN", "KNIGHT-VENATOR");
        // const bow: Attack = { name: "Realmhunter's Bow", melee: false, range: 30, attacks: 3, toHit: "2+", toWound: "3+", rend: -1, damage: 1};
        // const talons: Attack = { name: "Star-eagle's Celestial Talons", melee: false, range: 30, attacks: 3, toHit: "4+", toWound: "3+", damage: 1};
        // const talonsMelee: Attack = { name: "Star-eagle's Celestial Talons", melee: true, range: 1, attacks: 3, toHit: "4+", toWound: "3+", damage: 1};
        // const fly: Ability = { name: "Fly", description: "A Knight-Venator can fly."};
        // const celestialsTalon: Ability = {
        //     name: "Celestial Talons",
        //     description: "If the wound roll for the Stareagle’s Celestial Talons is 6 or more, that attack has a Rend of -3.",
        //     getWounds: (models, melee, attack) => attack === talons || attack === talonsMelee ? getWoundsForSpecialRendIf6OnWound(attack, -3) : 0
        // };
        // const starFatedArrow: Ability = {
        //     name: "Star-fated Arrow",
        //     description: "Once per battle, in your shooting phase, you can declare that this model will loose a Star-fated Arrow. When you do so, it makes 1 attack with his Realmhunter’s Bow rather than 3, but it causes D3+3 Damage. If the target is a HERO or MONSTER, the Damage is D6+3 instead.",
        //     getWounds: (models, melee, attack) => attack === bow ? (getAttackDamageEx(attack, { attacks: 1, damage: "D6+3" }) - getAttackDamage(attack)) * rareRate : 0
        // };
        // unit.attacks = [bow, talons, talonsMelee];
        // unit.abilities= [fly, celestialsTalon, starFatedArrow];
    }

    {
        addAbilityEffect(data.abilities.gryphHoundsLoyalCompanion, {
            targetType: TargetType.Model,
            attackAura: { bonusAttacks: 2 },
            targetCondition: {}
        });
        addAbilityEffect(data.abilities.gryphHoundsDartingAttacks, {
            targetType: TargetType.Model,
            attackAura: { retreatAfterAttack: 6 }
        });
        addAbilityEffect(data.abilities.gryphHoundsWarningCry, {
            targetType: TargetType.Model,
            phase: Phase.Movement
        });
    }

    {
        // const moveColumn: DamageColumn = { name: "Move", values: ['12"', '11"', '10"', '8"', '6"'] };
        // const greatClawsColumn: DamageColumn = { name: "Great Claws", values: ['3+', '3+', '4+', '4+', '5+'] };
        // const cavernousJaws: DamageColumn = { name: "Cavernous Jaws", values: [3, 2, 2, 1, 1] };
        // const unit: Unit = data.units.drakeswornTemplar;
        // unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Drakesworn-Templar-en.pdf";
        // unit.keywords.push("CELESTIAL", "HUMAN", "STARDRAKE", "DRAKESWORN TEMPLAR");
        // unit.move = moveColumn;
        // unit.save = "3+";
        // unit.bravery = 9;
        // unit.damageTable = { columns: [moveColumn, greatClawsColumn, cavernousJaws], ranges: [0, 5, 9, 12, 14] };
        // const skyboltBow: Attack = { melee: false, name: "Skybolt Bow", range: 24, attacks: 1, toHit: "3+", toWound: "3+", rend: -1, damage: 1 };
        // const tempestAxe: Attack = { melee: true, name: "Tempest Axe", range: 2, attacks: 6, toHit: "3+", toWound: "3+", damage: 1 };
        // const arcHammer: Attack = { melee: true, name: "Arc Hammer", range: 1, attacks: 2, toHit: "3+", toWound: "3+", rend: -1, damage: 3 };
        // const stormlance: Attack = { melee: true, name: "Stormlance", range: 3, attacks: 3, toHit: "3+", toWound: "3+", rend: -1, damage: 2 };
        // const greatClaws: Attack = { melee: true, name: "Stardrake's Great Claws", range: 1, attacks: 4, toHit: greatClawsColumn, toWound: "3+", rend: -1, damage: "D3" };
        // const fly: Ability = { name: "Fly", description: "A Drakesworn Templar can fly." };
        // const inspirationalLieutenant: Ability = { name: "Inspirational Lieutenant", description: "Although Drakesworn Templars do not often lead Sigmar’s armies to war, they are held in awe by other Stormcasts for the bond they have forged with a Stardrake. Add 1 to the Bravery of Stormcast Eternal units in your army while they are within 10\" of any Drakesworn Templars from your army." };
        // const tempestAxeAbility: Ability = {
        //     name: "Tempest Axe",
        //     description: "A hurricane is unleashed each time a Tempest Axe strikes the foe. After this model attacks with its Tempest Axe, roll a dice for each unit that suffered any wounds from it. If the result is higher than the unit’s Wounds characteristic, its models move 1\" rather than 3\" when they pile in until the end of the phase."
        // };
        // const arcHammerAbility: Ability = {
        //     name: "Arc Hammer",
        //     description: "The static hum of an Arc Hammer rises to an almighty concussive crescendo as it strikes. If the hit roll for an Arc Hammer is 6 or more, make two wound rolls instead of one. ",
        //     getWounds: (models, melee, attack) => attack === arcHammer ? models * getWoundsForSpecialDamageIf6OnWound(attack, 2) : 0
        // }
        // const stormlanceAbility: Ability = {
        //     name: "Stormlace",
        //     description: "If the hit roll for a Stormlance is 6 or more and the target is a Monster, lightning surges forth and the attack inflicts D6 mortal wounds instead of its normal damage. "
        // }
        // const skyboltBowAbility: Ability = {
        //     name: "Skybolt Bow",
        //     description: "Drakesworn Templars often direct attacks with well-placed skybolts. If this model scores a hit on an enemy unit with a Skybolt Bow, that unit is illuminated by a blazing bolt of lightning. In the next combat phase, you can add 1 to the result of any hit rolls for Dracothian Guard that attack that unit.",
        // };
        // const cavernousJawsAbility: Ability = {
        //     name: "Cavernous Jaws",
        //     description: "After this model piles in, but before it attacks, pick an enemy model within 3\" and roll a dice. If the result is greater than that model’s Wounds characteristic, it is swallowed whole and slain. You can do this as many times as shown on the damage table above.",
        //     getWounds: (models, melee, attack) => melee && !attack ? 4 : 0// Random value
        // };
        // const sweepingTail: Ability = {
        //     name: "Sweeping Tail",
        //     description: "After this model has made all of its attacks in the combat phase, roll a dice for each enemy unit within 3\". If the result is less than the number of models in the unit, it suffers D3 mortal wounds. ",
        //     getWounds: (models, melee, attack) => melee && !attack ? numberOfNeighborUnits * numberOfModelsPerUnit / 6 * 2 : 0
        // }
        // const lordOfTheHeavens: Ability = {
        //     name: "Lord of The Heavens",
        //     description: `In your shooting phase, a Stardrake can either breathe a Roiling Thunderhead or call a Rain of Stars down from the heavens.
        //     Roiling Thunderhead: Pick an enemy unit to be engulfed in a furious storm cloud, then roll a dice for each of its models that is within 18" of the Stardrake and which it can see. For each result of 6, a bolt of lightning streaks out and the unit suffers a mortal wound.
        //     Rain of Stars: Roll a dice and choose that many enemy units on the battlefield, then roll a dice for each. On a result of 4 or more, the unit is struck by a fragment of a falling star and suffers D3 mortal wounds.`,
        //     getWounds: (models, melee, attack) => !melee && !attack ? Math.max(numberOfModelsPerUnit / 6, 3.5*0.5*2) / 2 : 0
        // }
        // const arcaneLineage: Ability = {
        //     name: "Arcane Lineage",
        //     description: "Each time a casting roll is made for a Wizard within 18\" of any Stardrakes in your army, you can choose to increase or decrease the result by 1."
        // }
        // unit.attacks = [greatClaws, skyboltBow];
        // unit.abilities = [fly, inspirationalLieutenant, skyboltBowAbility, cavernousJawsAbility, sweepingTail, lordOfTheHeavens, arcaneLineage];
        // // setBaseModelOption(unit, data.units.drakeswornTemplar.baseOptions.arcHammer, [arcHammer], [arcHammerAbility]);
        // // setBaseModelOption(unit, data.units.drakeswornTemplar.baseOptions.stormLance, [stormlance], [stormlanceAbility]);
        // // setBaseModelOption(unit, data.units.drakeswornTemplar.baseOptions.tempestAxe, [tempestAxe], [tempestAxeAbility]);
    }

    {
        addAbilityEffect(data.abilities.gavrielSureheartInescapableVengeance, {
            targetType: TargetType.Model,
            attackAura: { bonusAttacks: 1 }
        });
        addAbilityEffect(
            data.abilities.gavrielSureheartSigmariteThundershield,
            {
                targetType: TargetType.Model,
                defenseAura: {
                    rerollSavesOn1: true,
                    mortalWoundsOnSucessfulSaveReroll: 1
                }
            }
        );
        addAbilityEffect(
            data.abilities.gavrielSureheartOnceMoreForSigmarCharge,
            {
                targetType: TargetType.Friend,
                phase: Phase.Charge,
                subPhase: SubPhase.Before,
                targetRadius: 12,
                whollyWithin: true,
                chargeAura: { bonus: 3 },
                targetCondition: { keyword: "HAMMERS OF SIGMAR" }
            }
        );
    }

    {
        addAbilityEffect(data.abilities.knightHeraldorOnwardsToGlory, {
            phase: Phase.Movement,
            subPhase: SubPhase.Before,
            targetType: TargetType.Friend,
            movementAura: { allowChargeAfterRunOrRetreat: true }
        });
        addAbilityEffect(data.abilities.knightHeraldorThunderblast, {
            phase: Phase.Shooting,
            mortalWounds: "D3",
            targetType: TargetType.Enemy
        });
    }

    {
        addAbilityEffect(data.abilities.lordVeritantLanternOfAbjuration, {
            targetType: TargetType.Model,
            phase: Phase.Hero,
            spellAura: { bonusUnbind: 1 }
        });
        addAbilityEffect(data.abilities.lordVeritantSanction, {
            phase: Phase.Hero,
            targetType: TargetType.Enemy,
            targetCondition: { keyword: "WIZARD" },
            targetRange: 7,
            mortalWounds: "D3(4+)"
        });
        addAbilityEffect(data.abilities.lordVeritantBoundInService, {
            phase: Phase.Hero,
            targetType: TargetType.Unit,
            spellAura: { bonusToUnbind: 3 }
        });
        addAbilityEffect(data.abilities.lordVeritantFaithfulGryphHound, {
            phase: Phase.Setup,
            targetType: TargetType.Unit
        });
    }

    {
        // const unit: Unit = data.units.lordCelestant;
        // unit.keywords.push("CELESTIAL", "HUMAN", "LORD-CELESTANT");
        // unit.move = 5;
        // unit.save = "3+";
        // unit.bravery = 9;
        // const sigmariteRuneblade: Attack = { melee: true, name: "Sigmarite Runeblade", range: 1, attacks: 4, toHit: "3+", toWound: "3+", rend: -1, damage: 1 };
        // const warhammer: Attack = { melee: true, name: "Warhammer", range: 1, attacks: 2, toHit: "4+", toWound: "3+", damage: 1 };
        // const inescapableVengance: Ability = {
        //     name: "Inescapable Vengeance",
        //     description: "If this model has made a charge move this turn, it can make 1 extra attack with each of its melee weapons.",
        //     getWounds: (models, melee, attack) => attack !== undefined && melee ? getWoundsForExtraAttack(attack) * models * rareRate : 0
        // };
        // const sigmariteWarcloack: Ability = {
        //     name: "Sigmarite Warcloak",
        //     description: "In your shooting phase, you can unleash D6 hammers from this model’s Sigmarite Warcloak. Pick an enemy unit within 16\" of this model for each hammer that is unleashed, then roll a dice for each unit you picked. On a roll of 4 or more the unit suffers a mortal wound. Note that you can pick the same unit more than once in a phase.",
        //     getWounds: (models, melee, attack) => !melee && !attack ? 3.5 * 0.5 : 0
        // };
        // const furiousRetribution: Ability = {
        //     name: "Furious Retribution",
        //     description: "If this model is your general and uses this ability, then until your next hero phase you can add 1 to the result of any hit rolls in the combat phase for this model and friendly STORMCAST ETERNAL units within 9\" of this model."
        // };
        // unit.attacks = [sigmariteRuneblade, warhammer];
        // unit.abilities = [inescapableVengance, sigmariteWarcloack];
        // unit.commandAbilities = [furiousRetribution];
    }

    {
        // const unit: Unit = data.units.knightQuestor;
        // unit.keywords.push("CELESTIAL", "HUMAN", "KNIGHT-QUESTOR");
        // unit.move = 5;
        // unit.save = "3+";
        // unit.bravery = 8;
        // const warblade: Attack = { melee: true, name: "Warblade", range: 1, attacks: 4, toHit: "3+", toWound: "3+", rend: -1, damage: 1 };
        // const heroicChallenge: Ability = {
        //     name: "Heroic Challenge",
        //     description: "If a Knight-Questor is within 6\" of an enemy HERO when chosen to fight in the combat phase, they can pile in 6\" instead of 3\", but must end their pile in move within 1\" of that HERO. You can re-roll failed hit rolls for a Knight- Questor if the target is a HERO."
        // };
        // const sigmariteShield: Ability = {
        //     name: "Sigmarite Shields",
        //     description: "You can re-roll failed save rolls for this model.",
        //     getSavedWounds: getSavedWoundReroll1
        // };
        // const thunderchargedStrike : Ability= {
        //     name: "Thundercharged Strike",
        //     description: "Add 1 to the damage inflicted by a Knight-Questor’s Warblade if the wound roll for the attack was 6 or more.",
        //     getWounds: (models, melee, attack) => attack === warblade ? getWoundsForSpecialDamageIf6OnWound(attack, 2) : 0
        // }
        // unit.attacks = [warblade];
        // unit.abilities = [heroicChallenge, sigmariteShield, thunderchargedStrike];
    }

    {
        const unit: Unit = data.units.knightVexillor;
        const meteoricStandard = data.abilities.knightVexillorMeteoricStandard;
        const penantOfTheStormbringer =
            data.abilities.knightVexillorPennantOfTheStormbringer;
        addAbilityEffect(meteoricStandard, {
            targetType: TargetType.Enemy,
            targetRange: 24,
            targetArea: true,
            targetRadius: "2D6",
            mortalWounds: "D3",
            timesPerBattle: 1,
            phase: Phase.Hero
        });
        addAbilityEffect(data.abilities.knightVexillorIconOfWar, {
            phase: Phase.Charge,
            targetType: TargetType.Friend,
            targetCondition: {
                keyword: data.allegiances.stormcastEternals.keywords[0]
            },
            targetRadius: 18,
            whollyWithin: true,
            chargeAura: { rerollCharge: true }
        });
        addAbilityEffect(penantOfTheStormbringer, {
            phase: Phase.Movement,
            subPhase: SubPhase.After,
            targetType: TargetType.Friend,
            targetCondition: {
                keyword: data.allegiances.stormcastEternals.keywords[0]
            },
            setUpAwayFromEnemy: 9,
            timesPerBattle: 1
        });
        setAbilityAsOption(unit, meteoricStandard, undefined, "main");
        setAbilityAsOption(unit, penantOfTheStormbringer, undefined, "main");
    }

    {
        addAbilityEffect(data.abilities.lordCastellantWardingLantern, {
            targetType: TargetType.Enemy,
            phase: Phase.Hero
        });
        addAbilityEffect(data.abilities.lordCastellantWardingLantern, {
            targetType: TargetType.Friend,
            phase: Phase.Hero,
            defenseAura: { bonusSave: 1, healOnSave7: 1 }
        });
        addAbilityEffect(data.abilities.lordCastellantFaithfulGryphHound, {
            targetType: TargetType.Friend,
            phase: Phase.Setup
        });
    }

    {
        // const unit: Unit = data.units.lordAquilor;
        // unit.keywords.push("CELESTIAL", "HUMAN", "LORD-AQUILOR");
        // unit.move = 12;
        // unit.save = "3+";
        // unit.bravery = 9;
        // const pistol: Attack = { melee: false, name: "Heavy Boltstorm Pistol", range: 9, attacks: 4, toHit: "3+", toWound: "3+", damage: 1 };
        // const starboundBlade: Attack = { melee: true, name: "Starbound Blade", range: 1, attacks: 3, toHit: "3+", toWound: "3+", rend: -1, damage: 2 };
        // const shockHandaxe: Attack = { melee: true, name: "Shock Handaxe", range: 1, attacks: 2, toHit: "3+", toWound: "3+", damage: 1 };
        // const beakAndClaws: Attack = { melee: true, name: "Gryph-charger's Razor Beak and Claws", range: 1, attacks: 3, toHit: "3+", toWound: "3+", rend: -2, damage: 1 };
        // const astralCompass: Ability = {
        //     name: "Astral Compass",
        //     description: "The Astral Compass shows the Lord-Aquilor the best route to strike at their foe, no matter the terrain or the distance they must travel. Instead of setting up a Lord-Aquilor on the battlefield, you can place the model to one side and say that it is set up in pursuit. In any of your movement phases, you can summon the Lord- Aquilor to strike at the enemy’s flanks. When you do so, set up the Lord-Aquilor wholly within 6\" of any edge of the battlefield, more than 7\" from the enemy. This is their move for that movement phase."
        // };
        // const rideTheWindsAetheric: Ability = {
        //     name: "Ride the Winds Aetheric",
        //     description: "Gryph-chargers can move faster than the eye can follow along the winds aetheric, though the shifting of these winds makes such movement perilous at times. In his movement phase, a Lord-Aquilor can choose to Ride the Winds Aetheric instead of moving normally. If they do so, choose the direction in which they will move, and then roll six dice. The Lord-Aquilor can move up to a number of inches equal to the result in the direction chosen, moving over terrain and other models as if they could fly. They must end their movement more than 3\" from enemy models – if this is impossible, they cannot move at all.The Lord-Aquilor cannot run or charge in a turn in which they Ride the Winds Aetheric."
        // };
        // const aetherealStrike: Ability = {
        //     name: "Aetheral Strike",
        //     description: "Any rolls to hit of 6 or more with the Gryph-charger’s Razor Beak and Claws cause a mortal wound instead of their normal damage."
        // };
        // const lordOfAzyriteHurricane: Ability = {
        //     name: "Lord of Azyrite Hurricane",
        //     description: "If a Lord-Aquilor uses this ability, they direct their warriors to fade and strike from an unexpected direction, whirling around the enemy like a cyclone. You can remove the Lord-Aquilor and/or a friendly unit of Vanguard-Hunters, Vanguard-Palladors, Vanguard-Raptors or Aetherwings within 24\" of them from the battlefield and set them up in your subsequent movement phase as if they had been set up in pursuit(see Astral Compass, left)."
        // };
        // unit.attacks = [pistol, starboundBlade, shockHandaxe, beakAndClaws];
        // unit.abilities = [astralCompass, rideTheWindsAetheric, aetherealStrike];
        // unit.commandAbilities = [lordOfAzyriteHurricane];
    }

    {
        // const unit: Unit = data.units.lordOrdinator;
        // unit.warscroll = "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Lord%20Ordinator.pdf";
        // unit.keywords.push("CELESTIAL", "HUMAN", "LORD-ORDINATOR");
        // unit.move = 5;
        // unit.save = "4+";
        // unit.bravery = 9;
        // const astralHammer: Attack = { melee: true, name: "Astral Hammers", range: 1, attacks: 5, toHit: "4+", toWound: "3+", damage: 1 };
        // const arcaneEngineer: Ability = {
        //     name: "Arcane Engineer",
        //     description: "No conventional engineer is the Lord-Ordinator, but a scryer of possibilities and predictor of futures. Their insights lend those under their command a vital edge when it comes to predicting the movements of the enemy. Add 1 to hit rolls for friendly ORDER WAR MACHINES within 6\" of any friendly Lord-Ordinators."
        // };
        // const meteoricSlam: Ability = {
        //     name: "Meteoric Slam",
        //     description: "When the Lord-Ordinator’s astral hammers strike at exactly the same time, they unleash a devastating explosion of energy. If you roll 2 or more hit rolls of 6 for this model’s Astral Hammers, then after its attacks have been resolved, pick one enemy unit within 1\" of it. That unit suffers D3 mortal wounds.",
        //     getWounds: (models, melee, attack) => attack === astralHammer ? 1/6*1/6 * 2 : 0
        // }
        // const raindOfFire: Ability = {
        //     name: "Rain of Fire",
        //     description: "The Lord-Ordinator turns his uncanny prescience to the arts of war. His ability to read the ebb and flow of the battle – and to predict the enemy’s movements by interpreting omens – lets him guide the fire of nearby artillery to devastating effect. If this model is your general and uses this command ability, then pick a friendly ORDER WAR MMACHINE that is wholly within 12\" of it at the start of your shooting phase. You can fire twice with that war machine this phase."
        // }
        // unit.attacks = [astralHammer];
        // unit.abilities = [arcaneEngineer, meteoricSlam, raindOfFire]
    }

    {
        const unit: Unit = data.units.steelheartSChampions;
        const broadsword = setAttackAsOption(
            unit,
            data.attacks.steelheartSChampionsSeverinSBroadsword,
            oneModelOption
        );
        const grandhammer = setAttackAsOption(
            unit,
            data.attacks.steelheartSChampionsObrynSGrandhammer,
            oneModelOption
        );
        const warhammer = setAttackAsOption(
            unit,
            data.attacks.steelheartSChampionsAngharadSWarhammer,
            oneModelOption
        );
        unit.optionStats = [
            {
                models: [
                    {
                        count: 1,
                        options: [broadsword]
                    },
                    { count: 1, options: [grandhammer] },
                    { count: 1, options: [warhammer] }
                ],
                name: "All champions"
            }
        ];
    }

    {
        // const unit: Unit = data.units.theFarstriders;
        // unit.warscroll = "https://www.games-workshop.com/resources/PDF/Downloads//aos-warscroll-the-farstriders-en.pdf";
        // unit.move = 6;
        // unit.save = "4+";
        // unit.bravery = 7;
        // const pistol: Attack = { melee: false, name: "Boltstorm Pistol", range: 9, attacks: 2, toHit: "3+", toWound: "4+", damage: 1};
        // const handaxe: Attack = {melee: true, name: "Shock Handaxe", range: 1, attacks: 2, toHit: "4+", toWound: "3+", damage: 1};
        // const stormSabre: Attack = {melee: true, name: "Storm Sabre", range: 1, attacks: 2, toHit: "3+", toWound: "4+", damage: 1};
        // const sansonFarstriderAbility: Ability = {
        //     name: "Sanson Farstrider",
        //     description: "The leader of this unit is Sanson Farstrider. Add 1 to the Attacks characteristic of this model’s Shock Handaxe",
        //     getWounds: (models, melee, attack) => attack === handaxe ? getWoundsForExtraAttack(attack) : 0
        // };
        // const starFalcon: Ability = {
        //     name: "Star Falcon",
        //     description: "Farstrider’s loyal star falcon aids in scouting the enemy, but can also swoop at lightning speed to strike at the eyes and throats of enemy warriors.At the start of the Shooting phase, pick an enemy unit within 18\" of Sanson Farstrider and roll a dice. On a 4+, that enemy unit suffers a mortal wound. ",
        //     getWounds: (models, melee, attack) => attack === undefined && !melee ? 0.5 : 0
        // };
        // const astralCompass: Ability = {
        //     name: "Astral Compass",
        //     description: "The Astral Compass shows the Vanguard-Hunters the best route to strike at their foe, no matter the terrain or the distance they must travel.Instead of setting up this unit on the battlefield, you can place it to one side and say that it is set up in pursuit. If you do so, in any of your movement phases you can set up the unit wholly within 6\" of any edge of the battlefield, more than 7\" from the enemy. This is their move for that movement phase."
        // };
        // const tirelessHunter: Ability = {
        //     name: "Tireless Hunter",
        //     description: "The warriors of the Vanguard Chambers never stop moving in pursuit of their prey. The Farstriders can run and still shoot in the same turn."
        // };
        // const sanson: ModelOption = {
        //     id: "sanson",
        //     name: "Sanson Farstrider",
        //     abilities: [sansonFarstriderAbility, starFalcon, astralCompass],
        //     attacks: [pistol, handaxe],
        //     modelCategory: "main"
        // };
        // const almeric: ModelOption = {
        //     id: "almeric",
        //     name: "Almeric Eagle-eye",
        //     attacks: [pistol, handaxe],
        //     modelCategory: "main"
        // };
        // const elias: ModelOption = {
        //     id: "elias",
        //     name: "Elias Swiftblade",
        //     attacks: [pistol, stormSabre],
        //     modelCategory: "main"
        // };
        // unit.options = [sanson, almeric, elias];
        // unit.modelStats = [{ name: "Sanson, Almeric, and Elias", models: [{ count: 1, options: [sanson] }, { count: 1, options: [almeric] }, { count: 1, options: [elias] }] }];
        // unit.abilities = [tirelessHunter];
    }

    {
        // const unit: Unit = data.units.vandusHammerhand;
        // unit.warscroll = "https://www.games-workshop.com/resources/PDF/Downloads/Vandus_Hammerhand_CB_Web%20-%20cropped.pdf";
        // unit.move = 10;
        // unit.wounds = 7;
        // unit.bravery = 9;
        // unit.save = "3+";
        // unit.keywords.push("CELESTIAL", "HUMAN", "LORD-CELESTANT", "VANDUS HAMMERHAND");
        // const heldensen: Attack = { melee: true, name: "Heldensen", range: "2", attacks: "3", toHit: "3+", toWound: "2+", rend: "-1", damage: "3"};
        // const dracothsClawsAndFangs: Attack = {melee: true, name: "Calanax's Claws and Fangs", range: "1", attacks: "4", toHit: "3+", toWound: "3+", rend: "-1", damage: "1"};
        // const heldensenAbility: Ability = {
        //     name: "Heldensen",
        //     description: "With the momentum of a charge behind it, few can stand against the impact of Vandus Hammerhand's tempestos hammer. If Vandus has made a charge move this turn, it can make D3 extra attacks with its Tempestos Hammer.",
        //     getWounds: (models, melee, attack) => attack === heldensen ? getWoundsForExtraAttack(attack, 2) * rareRate : 0
        // };
        // const intolerableDamage: Ability = {
        //     name: "Intolerable Damage",
        //     description: "If the wound roll for the Calanax’s Claws and Fangs attack is 6 or more, then that attack causes D6 Damage rather than 1.",
        //     getWounds: (models, melee, attack) => attack === dracothsClawsAndFangs ? getWoundsForSpecialDamageIf6OnWound(attack, 3.5) : 0
        // };
        // const stormBreath: Ability = {
        //     name: "Storm Breath",
        //     description: "You can make a storm breath attack with this model in your shooting phase. To do so, pick a point on the battlefield that is within 12\" of this model. Roll a dice for each unit (friend or foe) that is within 2\" of the point that you picked. On a roll of 4 or more, the unit being rolled for suffers D3 mortal wounds.",
        //     getWounds: (models, melee, attack) => !attack && !melee ? numberOfNeighborUnits * 0.5 * 2 : 0
        // };
        // const lordOfTheHammerhands: Ability = {
        //     name: "Lord of the Host",
        //     description: "If Vandus Hammerhand is taken as part of a Hammers of Sigmar Warrior Chamber battalion, then any units from the battalion that are within 24\" of him a the start of the battleshock phase do not have to take battleshock tests."
        // };
        // const vengefulDetermination: Ability = {
        //     name: "Vengeful Determination",
        //     description: "If Vandus Hammerhand uses this ability, then until your next hero phase you can add 1 to the Attacks characteristic of any melee weapon used by friendly STORMCAST ETERNAL units whilst they are within 6 \" of him."
        // };
        // unit.abilities = [intolerableDamage, stormBreath, lordOfTheHammerhands, heldensenAbility];
        // unit.commandAbilities = [vengefulDetermination];
        // unit.attacks = [dracothsClawsAndFangs, heldensen];
    }

    {
        addAbilityEffect(data.abilities.knightIncantorVoidstormScroll, {
            targetType: TargetType.Model,
            spellAura: { autoUnbinds: 1 }
        });
        addAbilityEffect(data.abilities.knightIncantorSpiritFlasks, {
            targetType: TargetType.Enemy,
            phase: Phase.Combat,
            subPhase: SubPhase.Before
        });
        addAbilityEffect(data.abilities.knightIncantorSpiritStorm, {
            phase: Phase.Hero,
            targetType: TargetType.Enemy,
            mortalWounds: 1
        });
    }

    {
        const sequitor: Unit = data.units.sequitors;
        const greatmaceBlast = removeAbility(
            sequitor,
            data.abilities.sequitorsGreatmaceBlast
        );
        const souldShield = removeAbility(
            sequitor,
            data.abilities.sequitorsSoulshields
        );
        const greatMaceOption = setAttackAsOption(
            sequitor,
            data.attacks.sequitorsStormsmiteGreatmace,
            ratioModelOption(2, 5),
            [greatmaceBlast]
        );
        const tempestBladeAndShieldOption = setAttackAsOption(
            sequitor,
            data.attacks.sequitorsTempestBlade,
            undefined,
            [souldShield]
        );
        const maulAndShieldOption = setAttackAsOption(
            sequitor,
            data.attacks.sequitorsStormsmiteMaul,
            undefined,
            [souldShield]
        );
        const sequitorPrimeOption = setAbilityAsOption(
            sequitor,
            data.abilities.sequitorsSequitorPrime,
            oneModelOption
        );
        const redemptionCacheOption = setAbilityAsOption(
            sequitor,
            data.abilities.sequitorsRedemptionCache,
            option => (unit, model) =>
                !hasOption(model, greatMaceOption) &&
                hasOption(model, sequitorPrimeOption)
        );
        addAbilityEffect(data.abilities.sequitorsGreatmaceBlast, {
            targetType: TargetType.Model,
            targetCondition: { anyKeyword: ["DAEMON", "NIGHTHAUT"] },
            attackAura: { numberOfHitsOnUnmodified6: "D3" }
        });
        addAbilityEffect(data.abilities.sequitorsRedemptionCache, {
            targetType: TargetType.Enemy,
            phase: Phase.Shooting,
            targetRange: 6,
            targetCondition: { anyKeyword: ["CHAOS", "DEATH"] },
            randomEffectRange: { min: 4, max: 6 },
            mortalWounds: 1
        });
        addAbilityEffect(data.abilities.sequitorsSequitorAethericChannelling, {
            targetType: TargetType.Unit,
            phase: Phase.Combat,
            choice: "Weapons",
            attackAura: { rerollFailedHits: true }
        });
        addAbilityEffect(data.abilities.sequitorsSequitorAethericChannelling, {
            targetType: TargetType.Unit,
            phase: Phase.Combat,
            choice: "Shields",
            defenseAura: { rerollFailedSaves: true }
        });
        addAbilityEffect(data.abilities.sequitorsSequitorPrime, {
            targetType: TargetType.Model,
            attackAura: { bonusAttacks: 1 }
        });
        addAbilityEffect(data.abilities.sequitorsSoulshields, {
            targetType: TargetType.Unit,
            defenseAura: { rerollSavesOn1: true }
        });
        sequitor.optionStats = [
            {
                name:
                    "Maul and Shield, Greatmaces, and prime with Greatmace (channeling shields)",
                models: [
                    { count: 2, options: [greatMaceOption] },
                    { count: 2, options: [maulAndShieldOption] },
                    {
                        count: 1,
                        options: [greatMaceOption, sequitorPrimeOption]
                    }
                ],
                choice: "Shields"
            },
            {
                name: "Maul and Shield and Greatmaces (channeling shields)",
                models: [
                    { count: 2, options: [greatMaceOption] },
                    { count: 2, options: [maulAndShieldOption] },
                    {
                        count: 1,
                        options: [
                            maulAndShieldOption,
                            redemptionCacheOption,
                            sequitorPrimeOption
                        ]
                    }
                ],
                choice: "Shields"
            },
            {
                name:
                    "Tempest Blade and Shield, Greatmaces, and prime with Greatmace (channeling shields)",
                models: [
                    { count: 2, options: [greatMaceOption] },
                    { count: 2, options: [tempestBladeAndShieldOption] },
                    {
                        count: 1,
                        options: [greatMaceOption, sequitorPrimeOption]
                    }
                ],
                choice: "Shields"
            },
            {
                name:
                    "Tempest Blade and Shield and Greatmaces (channeling shields)",
                models: [
                    { count: 2, options: [greatMaceOption] },
                    { count: 2, options: [tempestBladeAndShieldOption] },
                    {
                        count: 1,
                        options: [
                            tempestBladeAndShieldOption,
                            redemptionCacheOption,
                            sequitorPrimeOption
                        ]
                    }
                ],
                choice: "Shields"
            },
            {
                name:
                    "Maul and Shield, Greatmaces, and prime with Greatmace (channeling weapons)",
                models: [
                    { count: 2, options: [greatMaceOption] },
                    { count: 2, options: [maulAndShieldOption] },
                    {
                        count: 1,
                        options: [greatMaceOption, sequitorPrimeOption]
                    }
                ],
                choice: "Weapons"
            },
            {
                name: "Maul and Shield and Greatmaces (channeling weapons)",
                models: [
                    { count: 2, options: [greatMaceOption] },
                    { count: 2, options: [maulAndShieldOption] },
                    {
                        count: 1,
                        options: [
                            maulAndShieldOption,
                            redemptionCacheOption,
                            sequitorPrimeOption
                        ]
                    }
                ],
                choice: "Weapons"
            },
            {
                name:
                    "Tempest Blade and Shield, Greatmaces, and prime with Greatmace (channeling weapons)",
                models: [
                    { count: 2, options: [greatMaceOption] },
                    { count: 2, options: [tempestBladeAndShieldOption] },
                    {
                        count: 1,
                        options: [greatMaceOption, sequitorPrimeOption]
                    }
                ],
                choice: "Weapons"
            },
            {
                name:
                    "Tempest Blade and Shield and Greatmaces (channeling weapons)",
                models: [
                    { count: 2, options: [greatMaceOption] },
                    { count: 2, options: [tempestBladeAndShieldOption] },
                    {
                        count: 1,
                        options: [
                            tempestBladeAndShieldOption,
                            redemptionCacheOption,
                            sequitorPrimeOption
                        ]
                    }
                ],
                choice: "Weapons"
            }
        ];
    }

    {
        const unit: Unit = data.units.celestarBallista;
        addAbilityEffect(data.abilities.celestarBallistaVersatileWeapon, {
            phase: Phase.Shooting,
            targetType: TargetType.Model
        });
        addAbilityEffect(data.abilities.celestarBallistaBastionsOfDeath, {
            targetType: TargetType.Unit,
            condition: { inCover: true },
            defenseAura: { phase: Phase.Shooting, bonusSave: 1 }
        });
        addAbilityEffect(data.abilities.celestarBallistaChainedLightning, {
            targetType: TargetType.Unit,
            attackAura: {
                phase: Phase.Shooting,
                numberOfHitsOnUnmodified6: "D6"
            }
        });
        overrideAttack(
            data.attacks.celestarBallistaCelestarStormboltsRapidFire,
            x => (x.choice = "Rapid Fire")
        );
        overrideAttack(
            data.attacks.celestarBallistaCelestarStormboltsSingleShot,
            x => (x.choice = "Single Shot")
        );
        unit.optionStats = [
            {
                name: "Rapid Fire",
                models: [{ count: 1, options: [] }],
                choice: "Rapid Fire"
            },
            {
                name: "Single Shot",
                models: [{ count: 1, options: [] }],
                choice: "Single Shot"
            }
        ];
    }

    {
        const unit: Unit = data.units.castigators;
        const primeOption = setAbilityAsOption(
            unit,
            data.abilities.castigatorsCastigatorPrime,
            oneModelOption
        );
        addAbilityEffect(data.abilities.castigatorsBurstOfCelestialEnergy, {
            targetType: TargetType.Unit,
            attackAura: {
                phase: Phase.Shooting,
                numberOfHitsOnUnmodified6: conditionValue(
                    { anyKeyword: ["DAEMON", "NIGHTHAUNT"] },
                    "D3"
                )
            }
        });
        addAbilityEffect(data.abilities.castigatorsCastigatorPrime, {
            phase: Phase.Shooting,
            targetType: TargetType.Model,
            attackAura: { bonusHitRoll: 1 }
        });
        // TODO add condition on current attack (works only on the ranged weapon)
        addAbilityEffect(
            data.abilities.castigatorsCastigatorAethericChannelling,
            {
                targetType: TargetType.Unit,
                choice: "Accuracy",
                phase: Phase.Shooting,
                attackAura: { rerollHitsOn1: 1 }
            }
        );
        addAbilityEffect(
            data.abilities.castigatorsCastigatorAethericChannelling,
            {
                targetType: TargetType.Unit,
                choice: "Power",
                phase: Phase.Shooting,
                attackAura: { bonusRend: -1 }
            }
        );
        unit.optionStats = [
            {
                name: "One prime and Accuracy",
                models: [
                    { count: 1, options: [primeOption] },
                    { count: 2, options: [] }
                ],
                choice: "Accuracy"
            },
            {
                name: "One prime and Power",
                models: [
                    { count: 1, options: [primeOption] },
                    { count: 2, options: [] }
                ],
                choice: "Power"
            }
        ];
    }

    {
        const unit: Unit = data.units.evocators;
        const primeOption = setAbilityAsOption(
            unit,
            data.abilities.evocatorsEvocatorPrime,
            oneModelOption
        );
        const staveOption = setAttackAsOption(
            unit,
            data.attacks.evocatorsGrandstave
        );
        const bladeOption = setAttackAsOption(
            unit,
            data.attacks.evocatorsTempestBladeAndStormstave
        );
        addAbilityEffect(data.abilities.evocatorsEvocatorPrime, {
            targetType: TargetType.Model,
            attackAura: { bonusAttacks: 1 }
        });
        addAbilityEffect(data.abilities.evocatorsCelestialLightningArc, {
            targetType: TargetType.Unit,
            defenseAura: { phase: Phase.Shooting, rerollSavesOn1: true }
        });
        addAbilityEffect(data.abilities.evocatorsCelestialLightningArc, {
            targetType: TargetType.Unit,
            phase: Phase.Combat,
            subPhase: SubPhase.WhileAfter,
            targetRange: 3,
            mortalWoundsPerModel: "2(4+)"
        });
        addAbilityEffect(data.abilities.evocatorsEmpower, {
            targetType: TargetType.Unit,
            spellCastingValue: 6,
            targetRange: 12,
            attackAura: {
                rerollFailedWounds: true
            }
        });
        // TODo spells addAbilityEffect(data.abilities.evocatorsEmpower, )
        unit.optionStats = [
            {
                name: "Grand stave",
                models: [
                    { count: 4, options: [staveOption] },
                    { count: 1, options: [staveOption, primeOption] }
                ]
            },
            {
                name: "Tempest Blade and Stormstave",
                models: [
                    { count: 4, options: [bladeOption] },
                    { count: 1, options: [bladeOption, primeOption] }
                ]
            }
        ];
    }

    {
        addAbilityEffect(
            data.abilities.evocatorsOnCelestialDracolinesCelestialLightningArc,
            {
                targetType: TargetType.Unit,
                defenseAura: {
                    phase: Phase.Shooting,
                    rerollSavesOn1: true
                }
            }
        );
        addAbilityEffect(
            data.abilities.evocatorsOnCelestialDracolinesCelestialLightningArc,
            {
                targetType: TargetType.Enemy,
                targetRange: 3,
                mortalWoundsPerModel: "2(4+)"
            }
        );
        addAbilityEffect(
            data.abilities.evocatorsOnCelestialDracolinesEvocatorPrime,
            {
                targetType: TargetType.Model,
                attackAura: {
                    bonusAttacks: 1
                }
            }
        );
        const unit: Unit = data.units.evocatorsOnCelestialDracolines;
        const bladeOption = setAttackAsOption(
            unit,
            data.attacks.evocatorsOnCelestialDracolinesTempestBladeAndStormstave
        );
        const staff = setAttackAsOption(
            unit,
            data.attacks.evocatorsOnCelestialDracolinesGrandstave,
            ratioModelOption(2, 3)
        );
        const prime = setAbilityAsOption(
            unit,
            data.abilities.evocatorsOnCelestialDracolinesEvocatorPrime,
            oneModelOption
        );
        unit.optionStats = [
            {
                name: "2 grand staves and 1 blade",
                models: [
                    { count: 2, options: [staff] },
                    { count: 1, options: [bladeOption, prime] }
                ]
            }
        ];
    }

    {
        addAbilityEffect(data.abilities.lordArcanumCycleOfTheStorm, {
            targetType: TargetType.Friend,
            defenseAura: {}
        });
        addAbilityEffect(data.abilities.lordArcanumSpiritFlask, {
            targetType: TargetType.Friend,
            phase: Phase.Combat,
            subPhase: SubPhase.Before
        });
        addAbilityEffect(data.abilities.lordArcanumThunderclap, {
            targetType: TargetType.Enemy,
            phase: Phase.Hero,
            attackAura: {
                malusHitRoll: 1
            }
        });
        addAbilityEffect(data.abilities.lordArcanumPrimeElectrids, {
            targetType: TargetType.Friend,
            phase: Phase.Hero
        });
        addAbilityEffect(data.abilities.lordArcanumAethericManipulation, {
            targetType: TargetType.Unit,
            phase: Phase.Hero
        });
    }

    {
        addAbilityEffect(
            data.abilities.lordArcanumOnGryphChargerAetherealStrike,
            {
                targetType: TargetType.Friend,
                attackAura: { mortalWoundsOnHitUnmodified6: 1 }
            }
        );
        addAbilityEffect(
            data.abilities.lordArcanumOnGryphChargerCycleOfTheStorm,
            { targetType: TargetType.Friend, defenseAura: {} }
        );
        addAbilityEffect(
            data.abilities.lordArcanumOnGryphChargerRideTheWindsAetheric,
            { targetType: TargetType.Friend, movementAura: {} }
        );
        addAbilityEffect(data.abilities.lordArcanumOnGryphChargerSpiritFlask, {
            targetType: TargetType.Friend,
            phase: Phase.Combat,
            subPhase: SubPhase.Before
        });
        addAbilityEffect(data.abilities.lordArcanumOnGryphChargerMount, {
            targetType: TargetType.Friend,
            phase: Phase.Combat
        });
        addAbilityEffect(data.abilities.lordArcanumOnGryphChargerHealingLight, {
            targetType: TargetType.Friend,
            phase: Phase.Hero
        });
        addAbilityEffect(
            data.abilities.lordArcanumOnGryphChargerPrimeElectrids,
            { targetType: TargetType.Friend, phase: Phase.Hero }
        );
        addAbilityEffect(data.abilities.evocatorsEmpower, {
            targetType: TargetType.Friend,
            phase: Phase.Hero,
            targetRange: 12
        });
        addAbilityEffect(data.abilities.lordArcanumOnGryphChargerSoulEnergy, {
            targetType: TargetType.Friend,
            phase: Phase.Hero,
            targetCondition: { keyword: "EVOCATORS" }
        });
        addAbilityEffect(data.abilities.lordArcanumOnGryphChargerSoulEnergy, {
            targetType: TargetType.Friend,
            phase: Phase.Shooting,
            targetCondition: { keyword: "CASTIGATORS" }
        });
        addAbilityEffect(data.abilities.lordArcanumOnGryphChargerSoulEnergy, {
            targetType: TargetType.Friend,
            phase: Phase.Combat,
            targetCondition: { keyword: "SEQUITORS" }
        });
    }

    {
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalCometTrail,
            {
                targetType: TargetType.Enemy,
                phase: Phase.Movement,
                subPhase: SubPhase.After,
                defenseAura: {
                    phase: Phase.Shooting,
                    bonusHitRoll: 1
                }
            }
        );
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalCycleOfTheStorm,
            { targetType: TargetType.Friend, phase: Phase.Any }
        );
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalFieryOrator,
            {
                targetType: TargetType.Friend,
                targetCondition: { keyword: "HAMMER OF SIGMAR" },
                targetRange: 12,
                attackAura: { bonusWoundRoll: 1 },
                phase: Phase.Combat,
                subPhase: SubPhase.Before
            }
        );
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalFly,
            { targetType: TargetType.Model, movementAura: { fly: true } }
        );
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalMeteoricStrike,
            {
                targetType: TargetType.Enemy,
                phase: Phase.Charge,
                targetRange: 1,
                mortalWounds: "1(2+)"
            }
        );
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalMount,
            { targetType: TargetType.Mount }
        );
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalPrimeElectrids,
            { targetType: TargetType.Model, phase: Phase.Hero }
        );
        addAbilityEffect(
            data.abilities
                .aventisFirestrikeMagisterOfHammerhalPyroelectricBlast,
            { targetType: TargetType.Enemy, phase: Phase.Hero }
        );
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalSpiritFlask,
            {
                targetType: TargetType.Enemy,
                phase: Phase.Combat,
                subPhase: SubPhase.Before
            }
        );
        addAbilityEffect(
            data.abilities.aventisFirestrikeMagisterOfHammerhalThunderheadCrown,
            { targetType: TargetType.Model, phase: Phase.Hero }
        );
        addAbilityEffect(
            data.abilities
                .aventisFirestrikeMagisterOfHammerhalRighteousIndignation,
            {
                targetType: TargetType.Model,

                defenseAura: {
                    phase: Phase.Combat,
                    mortalWoundsOnWound: "1(5+)"
                }
            }
        );
    }
}

function fixExtraAbilities(data: DataStoreImpl): void {
    // Command traits
    overrideAbility(
        data.extraAbilities.stormcastEternalsAspectsOfAzyrShieldedByFaith
            .ability,
        x => {
            x.description =
                "Roll a dice each time you allocate a mortal wound to this general. On a 5+ that mortal wound is negated.";
            x.flavor =
                "This warrior’s faith allows them to shrug off the most grievous injuries.";
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsAspectsOfAzyrConsummateCommander
            .ability,
        x => {
            x.description =
                "If this general is on the battlefield at the start of your hero phase, roll a dice. On a 4+ you receive 1 extra command point.";
            x.flavor =
                "This general directs their forces with supernatural flair";
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsAspectsOfAzyrCunningStrategist
            .ability,
        x => {
            x.description =
                'After set-up is complete, but before the battle begins, D3 friendly STORMCAST ETERNAL units can move up to 5".';
            x.flavor =
                "This general primes their forces to strike at just the right moment.";
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsAspectsOfAzyrZealousCrusader
            .ability,
        x => {
            x.description = "You can re-roll charge rolls for this general.";
            x.flavor =
                "There is very little that can stand between this general and their hated foe.";
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsAspectsOfAzyrStaunchDefender
            .ability,
        x => {
            x.description =
                'Add 1 to save rolls for attacks that target friendly STORMCAST ETERNAL units wholly within 9" of this general if that STORMCAST ETERNAL unit has not made a charge move in the same turn.';
            x.effects = [
                { targetType: TargetType.Friend, defenseAura: { bonusSave: 1 } }
            ];
            x.flavor =
                "The general holds their ground, never taking a backward step.";
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsAspectsOfAzyrChampionOfTheRealms
            .ability,
        x => {
            x.description =
                "Pick one of this general’s melee weapons. Add 1 to the Attacks characteristic of that weapon.";
            x.flavor = "This general is deadly with their favoured weapon.";
        }
    );

    // Stormforged Weapons
    override<Ability>(
        data.extraAbilities.stormcastEternalsStormForgedWeaponsStrifeEnder
            .ability,
        x => {
            x.flavor =
                "This sigmarite weapon has been energised with runes of emancipation and liberation from evil. Pick one of this HERO’s melee weapons to be a Strife-ender.";
            x.description =
                "Add 1 to the Attacks characteristic of this weapon.Add 2 instead if all of the weapon’s attacks are directed against a CHAOS unit.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsStormForgedWeaponsBladeOfHeroes
            .ability,
        x => {
            x.flavor =
                "This shining blade glows bright in the presence of a truly dire threat, bolstering the warrior spirit of the wielder until no task seems insurmountable.";
            x.description =
                "Pick one of this HERO’s melee weapons to be a Blade of Heroes.Re - roll failed hit rolls made with this weapon that target HEROES or MONSTERS.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsStormForgedWeaponsHammerOfMight
            .ability,
        x => {
            x.flavor =
                "When the bearer strikes true, this noble weapon unleashes a thunderclap of energy that can shatter every bone in the victim’s body.";
            x.description =
                "Pick one of this HERO’s melee weapons to be a Hammer of Might.Wound rolls of 6 or more for this weapon cause double damage.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsStormForgedWeaponsFangOfDracothion
            .ability,
        x => {
            x.flavor =
                "Blessed by the stormy breath of the zodiacal godbeast Dracothion, this weapon’s void-cold bite is so fierce that even a slight slash can be fatal.";
            x.description =
                "Pick one of this HERO’s melee weapons to be a Fang of Dracothion.Re - roll any wound rolls of 1 for this weapon.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsStormForgedWeaponsObsidianBlade
            .ability,
        x => {
            x.flavor =
                "In the lightning-spewing volcanoes of the Sicklestar Peaks, the Obsidian Blades are forged. Their edges are so sharp they can cut bone like butter.";
            x.description =
                "Pick one of this HERO’s melee weapons to be an Obsidian Blade.Improve the Rend characteristic of this weapon by 1(if it has a Rend characteristic of ‘-’ it becomes - 1).";
            x.effects = [
                { targetType: TargetType.Weapon, attackAura: { bonusRend: -1 } }
            ];
        }
    );
    override<Ability>(
        data.extraAbilities
            .stormcastEternalsStormForgedWeaponsGiftOfTheSixSmiths.ability,
        x => {
            x.flavor =
                "Some Stormcast Eternals, when reforged after a truly valorous death, will find their weapons remade as well, perfect examples of the Six Smiths’ craft that guide the bearer to his kill.";
            x.description =
                "Pick one of this HERO’s melee weapons to be a Gift of the Six Smiths.In each turn you can re - roll one hit, wound or damage roll for an attack made with this weapon.";
        }
    );

    // Heaven wrought armours
    override<Ability>(
        data.extraAbilities.stormcastEternalsHeavenWroughtArmourArmourOfDestiny
            .ability,
        x => {
            x.flavor = "This plate mail is blessed by fate.";
            x.description =
                "Roll a dice each time you allocate a wound or mortal wound to the bearer. On a 6+, that wound or mortal wound is negated.";
        }
    );
    overrideAbility(
        data.extraAbilities
            .stormcastEternalsHeavenWroughtArmourArmourOfSilveredSigmarite
            .ability,
        x => {
            x.flavor =
                "Shining with a sacred aura, this armour gleams so bright it can dazzle the enemy";
            x.description =
                "Subtract 1 from hit rolls for attacks made with melee weapons that target the bearer.";
        }
    );

    override<Ability>(
        data.extraAbilities.stormcastEternalsHeavenWroughtArmourDrakescaleArmour
            .ability,
        x => {
            x.flavor =
                "A guardian spirit lives on in this armour’s iron-hard drake scales.";
            x.description =
                "Re - roll failed save rolls for this HERO against weapons with a Damage characteristic greater than 1.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsHeavenWroughtArmourMirrorshield
            .ability,
        x => {
            x.flavor =
                "This shield reflects the sun’s rays in questing beams that seek out the eyes of enemy archers.";
            x.description =
                "Subtract 2 from any hit rolls for missile weapon attacks directed at this HERO.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsHeavenWroughtArmourSpellshield
            .ability,
        x => {
            x.flavor =
                "The bearer of this shield can use it to smash aside eldritch energies as if they were physical blows.";
            x.description =
                "This HERO may attempt to unbind a single spell in each enemy hero phase in the same manner as a Wizard.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsHeavenWroughtArmourFeatherfoeTorc
            .ability,
        x => {
            x.flavor =
                "Forged in the image of a coiled raptordrake, this torc strikes primal fear into winged enemies.";
            x.description =
                "Units that can fly must re - roll successful hit rolls for attacks directed against this HERO.";
        }
    );

    // Artefacts of the tempest
    override<Ability>(
        data.extraAbilities
            .stormcastEternalsArtefactsOfTheTempestTalismanOfEndurance.ability,
        x => {
            x.flavor =
                "The bearer of this powerful item never tires in the execution of the God-King’s will.";
            x.description = "Add 1 to this HERO’s Wounds characteristic.";
        }
    );

    override<Ability>(
        data.extraAbilities.stormcastEternalsArtefactsOfTheTempestObsidianAmulet
            .ability,
        x => {
            x.flavor =
                "This amulet absorbs magical energy, drinking it in as a surgeon’s sponge soaks up blood.";
            x.description =
                "Roll a dice whenever this HERO is affected by a spell.On a roll of 4 or more, ignore the effects of the spell on this HERO.Other units are affected as normal.";
        }
    );

    overrideAbility(
        data.extraAbilities.stormcastEternalsArtefactsOfTheTempestLuckstone
            .ability,
        x => {
            x.flavor =
                "Some say the Luckstone is so redolent with fortune it survived the death of the world-that-was.";
            x.description =
                "Once per battle, you can change one hit, wound or save roll, or one roll that randomly determines a Damage characteristic, to the roll of your choice. The roll must be for an attack made by the bearer, or a save roll for an attack that targets the bearer.";
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    timesPerBattle: 1,
                    attackAura: { changeHitWoundSaveOrDamageRoll: true }
                }
            ];
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsArtefactsOfTheTempestSeedOfRebirth
            .ability,
        x => {
            x.flavor =
                "A gift from the goddess Alarielle, this seed-shaped gem can heal the bearer, body and soul.";
            x.description =
                "Roll a D6 for this HERO in each of your hero phases.On a roll of 4 or more they heal 1 wound.";
        }
    );
    override<Ability>(
        data.extraAbilities
            .stormcastEternalsArtefactsOfTheTempestSigmaritePendant.ability,
        x => {
            x.flavor =
                "This pendant is imbued with spells of vengeance – woe betide they who lay low its wielder.";
            x.description =
                "When this HERO is slain, roll a dice.On a 4 or more the unit that slew them suffers D6 mortal wounds.";
        }
    );
    override<Ability>(
        data.extraAbilities
            .stormcastEternalsArtefactsOfTheTempestQuicksilverDraught.ability,
        x => {
            x.flavor =
                "Taken from the river of Anvrok, this potion lends uncanny speed to those who imbibe it.";
            x.description =
                "Once per battle, this HERO may pile in and make attacks in the combat phase before any other units, even if it is your opponent’s turn.";
        }
    );

    //Treasured standards
    overrideAbility(
        data.extraAbilities.stormcastEternalsTreasuredStandardsHurricaneStandard
            .ability,
        x => {
            x.flavor =
                "The bearer of this potent item always has the wind at their back. They and their kin are driven towards victory by the fury of the tempest.";
            x.description =
                'You can re-roll run and charge rolls for friendly STORMCAST ETERNAL units wholly within 12" of the bearer at the start of the phase in which the roll is made.';
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsTreasuredStandardsLicheboneStandard
            .ability,
        x => {
            x.flavor =
                "Incorporating a femur blessed by the Great Necromancer, this banner can instil vigour in even a mortally wounded warrior.";
            x.description =
                'At the start of your hero phase, you can heal 1 wound allocated to each friendly STORMCAST ETERNAL unit wholly within 9" of the bearer.';
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsTreasuredStandardsPennantOfSigmaron
            .ability,
        x => {
            x.flavor =
                "The steel in the soul of those near this standard is all but unbending, even in dire peril.";
            x.description =
                'If a friendly STORMCAST ETERNAL unit wholly within 24" of the bearer fails a battleshock test, roll a dice. On a 2+ only one model flees from that unit.';
        }
    );

    // Mystic lights
    overrideAbilities(
        x => {
            x.flavor =
                "The fiery light that spills from this item can ignite a deep and righteous rage in those nearby.";
            x.description =
                'In your hero phase, you can pick 1 melee weapon used by a STORMCAST ETERNAL HERO within 6" of the bearer. Add 1 to the Attacks characteristic of that melee weapon until your next hero phase.';
            x.effects = [
                {
                    phase: Phase.Hero,
                    targetType: TargetType.Friend,
                    targetCondition: { keyword: "HERO" },
                    attackAura: { bonusAttacks: 1 }
                }
            ];
        },
        data.extraAbilities.stormcastEternalsMysticLightsFuryBrand.ability,
        data.extraAbilities.stormcastEternalsMysticLightsFuryBrandArtefact
            .ability,
        data.extraAbilities.stormcastEternalsMysticLightsFuryBrandArtefactx
            .ability
    );
    overrideAbilities(
        x => {
            x.flavor =
                "The redemptive light of Sigendil beams outwards, sapping the will of evil men.";
            x.description =
                'Subtract 1 from the Bravery characteristic of enemy units while they are within 6" of the bearer. Subtract 2 from the unit’s Bravery characteristic instead if it has the CHAOS keyword.';
        },
        data.extraAbilities.stormcastEternalsMysticLightsShrivingLight.ability,
        data.extraAbilities.stormcastEternalsMysticLightsShrivingLightArtefact
            .ability,
        data.extraAbilities.stormcastEternalsMysticLightsShrivingLightArtefactx
            .ability
    );
    overrideAbilities(
        x => {
            x.flavor =
                "This lantern emits the crackling, blinding glare of a caged lightning storm.";
            x.description =
                'Re-roll unmodified hit rolls of 6 for attacks made with missile weapons that target friendly STORMCAST ETERNAL units wholly within 12" of the bearer.';
        },
        data.extraAbilities.stormcastEternalsMysticLightsLanternOfTheTempest
            .ability,
        data.extraAbilities
            .stormcastEternalsMysticLightsLanternOfTheTempestArtefact.ability,
        data.extraAbilities
            .stormcastEternalsMysticLightsLanternOfTheTempestArtefactx.ability
    );

    //Celestial Staves
    overrideAbilities(
        x => {
            x.flavor =
                "Imbued with the energies of Azyr, this staff assists its bearer in channelling the destructive power of the storm.";
            x.description =
                "Once per battle, in your hero phase, the bearer can use this artefact. If they do so, add 1 to casting rolls for the bearer until the end of that phase. In addition, if the bearer casts a spell that inflicts any mortal wounds during that phase, add 1 to the number of mortal wounds inflicted on each unit that the spell affects.";
        },
        data.extraAbilities.stormcastEternalsCelestialStavesStaffOfFocus
            .ability,
        data.extraAbilities.stormcastEternalsCelestialStavesStaffOfFocusArtefact
            .ability
    );
    overrideAbilities(
        x => {
            x.flavor =
                "The head of this stave can mesmerise enemy spellcasters, leaving them unable to formulate coherent thoughts.";
            x.description =
                'Once per battle, at the start of the enemy hero phase, you can pick an enemy WIZARD with 12" of the bearer. That WIZARD cannot cast any spells that phase.';
            x.effects = [
                {
                    phase: Phase.Hero,
                    subPhase: SubPhase.Before,
                    targetType: TargetType.Enemy,
                    spellAura: { noCast: true }
                }
            ];
        },
        data.extraAbilities.stormcastEternalsCelestialStavesMindlockStaff
            .ability,
        data.extraAbilities
            .stormcastEternalsCelestialStavesMindlockStaffArtefact.ability
    );
    overrideAbilities(
        x => {
            x.flavor =
                "This staff glows brightly whenever celestial energy is channelled through it, blinding the enemies of Sigmar.";
            x.description =
                "In your hero phase, if the bearer successfully casts any spells that are not unbound, subtract 1 from hit rolls for attacks that target the bearer until your next hero phase.";
        },
        data.extraAbilities.stormcastEternalsCelestialStavesStaffOfAzyr.ability,
        data.extraAbilities.stormcastEternalsCelestialStavesStaffOfAzyrArtefact
            .ability
    );

    // Scrolls of power
    overrideAbilities(
        x => {
            x.flavor =
                "As the wizard reads from this scroll, enemy spellcasters find their spells unravelling.";
            x.description =
                "Once per battle, at the start of the enemy hero phase, the bearer can use this artefact. If they do so, in that hero phase, enemy casting rolls that are equal to the spell’s casting value are unsuccessful and the caster suffers D3 mortal wounds.";
        },
        data.extraAbilities.stormcastEternalsScrollsOfPowerScrollOfUnravelling
            .ability,
        data.extraAbilities
            .stormcastEternalsScrollsOfPowerScrollOfUnravellingArtefact.ability
    );
    overrideAbilities(
        x => {
            x.flavor =
                "This scroll lists the names of those who have been judged unworthy.";
            x.description =
                'Once per battle, in your hero phase, the bearer can use this artefact. If they do so, pick an enemy HERO within 12" of the bearer. Until the end of that turn, add 1 to wound rolls for attacks made by friendly STORMCAST ETERNALS that target that model.';
            x.effects = [
                {
                    targetType: TargetType.Enemy,
                    phase: Phase.Hero,
                    defenseAura: { bonusWoundRoll: 1 }
                }
            ];
        },
        data.extraAbilities.stormcastEternalsScrollsOfPowerScrollOfCondemnation
            .ability,
        data.extraAbilities
            .stormcastEternalsScrollsOfPowerScrollOfCondemnationArtefact.ability
    );
    overrideAbilities(
        x => {
            x.flavor =
                "Reading aloud from the scroll, the wizard causes Sigmar’s storm to roil and lash out at the battlefield the ground with anger.";
            x.description =
                "Once per battle, in your hero phase, the bearer can use this artefact. If they do so, pick up to 6 different enemy units on the battlefield, and give each of them a different number from 1 to 6. Then roll a dice. If there is a unit whose number is the same as the roll, that unit suffers D6 mortal wounds.";
        },
        data.extraAbilities.stormcastEternalsScrollsOfPowerStormScroll.ability,
        data.extraAbilities.stormcastEternalsScrollsOfPowerStormScrollArtefact
            .ability
    );

    // Prayers
    overrideAbility(
        data.extraAbilities.stormcastEternalsPrayersOfTheStormhostsDivineLight
            .ability,
        x => {
            x.flavor =
                "The priest parts the storm clouds and a ray of Sigmar’s divine light illuminates the battlefield.";
            x.description =
                'In your hero phase, pick a unit wholly within 18" of this PRIEST and roll a dice. On a 3+ the prayer is successful. If the prayer is successful and you chose an enemy unit, you can re-roll hit rolls of 1 for attacks that target that unit until your next hero phase. If the prayer is successful and you chose a friendly unit, re-roll unmodified hit rolls of 6 for attacks that target that unit until your next hero phase.';
            x.effects = [
                {
                    phase: Phase.Hero,
                    targetType: TargetType.Enemy,
                    choice: "enemy",
                    defenseAura: {
                        rerollHitOn1: true
                    }
                },
                {
                    phase: Phase.Hero,
                    targetType: TargetType.Friend,
                    choice: "friend",
                    defenseAura: {
                        rerollHitOn6: true
                    }
                }
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsPrayersOfTheStormhostsBlessWeapons
            .ability,
        x => {
            x.flavor =
                "The priest imbues the weapons of those nearby with the pure essence of the storm.";
            x.description =
                'In your hero phase, pick a friendly unit wholly within 18" of this PRIEST and roll a dice. On a roll of 4+ the prayer is successful. If the prayer is successful, until your next hero phase, each unmodified hit roll of 6 for an attack made by that unit inflicts 1 extra hit on the target (usually this will be 2 hits instead of 1). Make a wound and save roll for each hit.';
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsPrayersOfTheStormhostsBolsterFaith
            .ability,
        x => {
            x.flavor =
                "The priest bestows a calming aura upon his allies, strengthening their will.";
            x.description =
                'In your hero phase, pick a friendly STORMCAST ETERNAL unit within 9" of this PRIEST and roll a dice. On a 3+ the prayer is successful. If the prayer is successful, until your next hero phase that unit does not take battleshock tests.';
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsPrayersOfTheStormhostsTranslocation
            .ability,
        x => {
            x.flavor =
                "The priest drops to one knee, praying to Sigmar to banish vile sorceries.";
            x.description =
                'At the start of the enemy hero phase, pick an enemy WIZARD within 12" of this PRIEST and roll a dice. On a 3+ the prayer is successful. If the prayer is successful this PRIEST can attempt to unbind 1 spell cast by that enemy WIZARD in that hero phase in the same manner as a WIZARD.';
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsPrayersOfTheStormhostsAbjuration
            .ability,
        x => {
            x.flavor =
                "The priest’s appearance shifts to resemble Sigmar himself.";
            x.description =
                'In your hero phase, this PRIEST can take on Sigmar’s appearance. If they do so, roll a dice. On a 3+ the prayer is successful. If the prayer is successful, until your next hero phase, subtract 1 from the Bravery characteristic of enemy units while they are within 6" of this PRIEST.';
        }
    );
    overrideAbility(
        data.extraAbilities
            .stormcastEternalsPrayersOfTheStormhostsGodKingSAspect.ability,
        x => {
            x.flavor =
                "Calling to Sigmar’s storm above, the priest summons bolts of lightning to transport nearby warriors across the field of battle.";
            x.description =
                'In your hero phase, pick a friendly STORMCAST ETERNAL unit wholly within 9" of this PRIEST and roll a dice. On a 3+ the prayer is successful. If the prayer is successful, remove that unit from the battlefield and then set it up again anywhere on the battlefield more than 9" from any enemy units. It may not move in the subsequent movement phase.';
        }
    );
    overrideMounts(data);
    overrideSpells(data);
}

function overrideMounts(data: DataStoreImpl) {
    overrideTraitsOfTheNobleBeast(data);
    overrideCelestialLineages(data);
    overrideAncientPowers(data);
    overrideAethericAspects(data);
    overrideStarchaser(data);
    overrideSavageTemperaments(data);
}

function overrideSpells(data: DataStoreImpl) {
    // spells
    overrideAbility(
        data.extraAbilities.stormcastEternalsLoreOfTheStormLightningBlast
            .ability,
        x => {
            x.flavor = `The wizard unleashes pent-up
        storm energy into the foes of Sigmar.`;
            x.description = `Lightning Blast has a casting value of 5. If
        successfully cast, the closest enemy unit that is
        visible to the caster suffers D3 mortal wounds. If
        more than one enemy unit visible to the caster is
        equally close, you can pick which unit is affected.`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsLoreOfTheStormStarfall.ability,
        x => {
            x.flavor = `Gazing to the Heavens, the wizard
        drags fragments of its power down to rain upon
        the enemy.`;
            x.description = `Starfall has a casting value of 5. If successfully
        cast, pick a point on the battlefield within 12" of
        the caster that is visible to them. Roll a dice for
        each enemy unit within 3" of that point. On a 4+
        that unit suffers 1 mortal wound.`;
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsLoreOfTheStormAzyriteHalo.ability,
        x => {
            x.effects = [{ targetType: TargetType.Enemy, phase: Phase.Hero }];
            x.description =
                'Azyrite Halo has a casting value of 5. If successfully cast, pick a friendly STORMCAST ETERNAL unit wholly within 12" of the caster that is visible to them. Until your next hero phase, each time you make an unmodified save roll of 6 for that unit, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.';
            x.flavor =
                "This circlet of Azyrite power lashes out at the enemies of the faithful.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsLoreOfTheStormThundershock.ability,
        x => {
            x.effects = [
                {
                    targetType: TargetType.Enemy,
                    phase: Phase.Hero,
                    mortalWounds: "1(4+)",
                    attackAura: { malusHitRoll: 1 }
                }
            ];
            x.description =
                'Thundershock has a casting value of 6. If successfully cast, roll a dice for each enemy unit within 6" of the caster that is visible to them. On a 4+ that unit suffers 1 mortal wound. In addition, subtract 1 from hit rolls for attacks made by that unit until your next hero phase.';
            x.flavor =
                "Gathering the power of Sigmar’s storm into themselves, the wizard unleashes this energy as a roiling wave of pure force.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsLoreOfTheStormStormcaller.ability,
        x => {
            x.effects = [{ targetType: TargetType.Enemy, phase: Phase.Hero }];
            x.description =
                "Stormcaller has a casting value of 7. If successfully cast, roll a dice for each enemy unit on the battlefield. On a 6+ that unit suffers D3 mortal wounds.";
            x.flavor =
                "The storm overhead thickens, bolts of lightning crashing down into the enemy ranks.";
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsLoreOfInvigorationTerrifyingAspect
            .ability,
        x => {
            x.flavor = `The
        enemy’s courage falters.`;
            x.description = `Terrifying Aspect has
        a casting value of 5. If
        successfully cast, pick
        a friendly STORMCAST
        ETERNAL unit wholly
        within 18" of the caster
        that is visible to them.
        Until your next hero phase,
        subtract 1 from the Bravery
        characteristic of enemy units
        while they are within 3" of
        that unit.`;
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsLoreOfInvigorationCelestialBlades
            .ability,
        x => {
            x.effects = [{ targetType: TargetType.Enemy, phase: Phase.Hero }];
            x.description =
                'Celestial Blades has a casting value of 5. If successfully cast, pick a friendly STORMCAST ETERNAL unit wholly within 18" of the caster that is visible to them. Add 1 to wound rolls for attacks made with that unit’s melee weapons until your next hero phase.';
            x.flavor =
                "The wizard imbues the blades of their allies with power.";
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsLoreOfInvigorationSpeedOfLightning
            .ability,
        x => {
            x.effects = [{ targetType: TargetType.Enemy, phase: Phase.Hero }];
            x.description =
                'Speed of Lightning has a casting value of 5. If successfully cast, pick a friendly STORMCAST ETERNAL unit wholly within 9" of the caster that is visible to them. You can re-roll charge rolls for that unit until your next hero phase.';
            x.flavor = "The Wizard’s allies are filled with Azyrite power.";
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsLoreOfTheStormChainLightning
            .ability,
        x => {
            x.description =
                'Chain Lightning has a casting value of 7. If successfully cast, pick an enemy unit within 24" of the caster that is visible to them. That unit suffers D3 mortal wounds. Then, roll a dice for each enemy unit within 3" of the first. On a 4+, that unit suffers 1 mortal wound.';
            x.flavor =
                "The wizard channels a torrent of lightning that leaps from foe to foe.";
            x.effects = [{ phase: Phase.Hero, targetType: TargetType.Enemy }];
        }
    );
}

function overrideTraitsOfTheNobleBeast(data: DataStoreImpl) {
    overrideAbility(
        data.extraAbilities.stormcastEternalsTraitsOfTheNobleBeastLitheLimbed
            .ability,
        x => {
            x.description = `Add 1 to the Move characteristic of this model.`;
            x.flavor = `This steed is renowned for its
    swiftness, and is capable of putting on an
    incredible burst of speed.`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsTraitsOfTheNobleBeastKeenClawed
            .ability,
        x => {
            x.flavor = `Sharp of claw and fang, this steed
is undaunted even by the thickest armour.`;
            x.description = `If the unmodified wound roll for an attack
    made with this mount’s melee weapons is 6, that
    attack has a Rend characteristic of -3.`;

            x.effects = [
                {
                    attackAura: { bonusRendOnWound6OrMore: -3 },
                    targetType: TargetType.Model
                }
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsTraitsOfTheNobleBeastSavageLoyalty
            .ability,
        x => {
            x.flavor = `This mount feels a keen hatred
            for the enemies of Order, and fights through the
            most horrendous injuries to wreak its vengeance
            before death claims it.`;
            x.description = `If this model is slain by wounds or mortal
            wounds inflicted by an attack made with an
            enemy unit’s melee weapons, roll a dice. On a
            4+, that enemy unit suffers D3 mortal wounds.`;
        }
    );
}

function overrideCelestialLineages(data: DataStoreImpl) {
    overrideAbility(
        data.extraAbilities.stormcastEternalsCelestialLineagesDrakeKin.ability,
        x => {
            x.flavor = `This mount is hardy enough to
        withstand the worst their enemy can throw at
        them without faltering.`;
            x.description = `Before determining damage for an attack
        that targets this model that has a Damage
        characteristic of any value other than 1,
        roll a dice. On a 5+ change the Damage
        characteristic of that attack to 1.`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsCelestialLineagesThunderCaller
            .ability,
        x => {
            x.flavor = `Lightning crackles in the
        maw of this beast, even when it is at rest.`;
            x.description = `This model’s Storm Breath ability has a range
        of 16" rather than 12".`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsCelestialLineagesPackLeader
            .ability,
        x => {
            x.flavor = `This Dracoth is stronger when
        leading packs of its closest kin into battle.`;
            x.description = `Add 2 to the Attacks characteristic of this
        model’s Claws and Fangs while this model
        is within 6" of any friendly DRACOTHIAN
        GUARD models.`;
            x.effects = [
                {
                    targetType: TargetType.Weapon,
                    attackAura: { bonusAttacks: 2 }
                }
            ];
        }
    );
}

function overrideAncientPowers(data: DataStoreImpl) {
    overrideAbility(
        data.extraAbilities.stormcastEternalsAncientPowersStormWinged.ability,
        x => {
            x.flavor = `When this Stardrake
            unfurls its wings, it buffets the enemy with a
            powerful gale.`;
            x.description = `After this model has moved, you can pick
            1 enemy unit that has any models that this
            model passed across, and roll a dice. On a 2+
            that unit suffers D3 mortal wounds.`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsAncientPowersThunderlord.ability,
        x => {
            x.flavor = `The storms that accompany this
            Stardrake are particularly destructive.`;
            x.description = `The Roiling Thunderhead from this model’s
            Lord of the Heavens ability has a range of 24"
            instead of 18".`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsAncientPowersStarBranded.ability,
        x => {
            x.flavor = `This Stardrake is marked for
            some great destiny.`;
            x.description = `Subtract 1 from the number of wounds
            allocated to this model (to a minimum of 0)
            when determining which row on its damage
            table to use.`;
        }
    );
}

function overrideAethericAspects(data: DataStoreImpl) {
    overrideAbility(
        data.extraAbilities.stormcastEternalsAethericAspectsWindRunner.ability,
        x => {
            x.flavor = `When this Gryph-charger
            takes to the winds aetheric, it leaves all others
            in its starry wake.`;
            x.description = `When this model Rides the Winds Aetheric,
            roll an extra dice when determining the
            distance it can move.`;
        }
    );
    override<Ability>(
        data.extraAbilities.stormcastEternalsAethericAspectsAetherealStalker
            .ability,
        x => {
            x.effects = [
                {
                    targetType: TargetType.Enemy,
                    phase: Phase.Setup,
                    attackAura: {
                        rerollFailedHits: true,
                        rerollFailedWounds: true
                    }
                }
            ];
            x.description =
                "When this model is set up, choose an enemy unit. You can re-roll failed hit and wound rolls for attacks made with this model’s Gryph-charger’s Razor Beak and Claws that target that enemy unit.";
            x.flavor =
                "This Gryph-charger has a hatred for the enemies of Order that burns as hot as that of their rider";
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsAethericAspectsIndefatigable
            .ability,
        x => {
            x.flavor = `The beast and its rider have
            hunted together over countless leagues.`;
            x.description = `You can re-roll run rolls for this model.`;
        }
    );
}

function overrideStarchaser(data: DataStoreImpl) {
    overrideAbility(
        data.extraAbilities.stormcastEternalsStarchaserFormsSwiftwing.ability,
        x => {
            x.flavor = `This majestic creature swoops
            across the battlefield at great speed.`;
            x.description = `You can re-roll run rolls for this model.`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsStarchaserFormsLashingTail.ability,
        x => {
            x.flavor = `This creature uses its tail
            defensively, smashing back nearby enemies.`;
            x.description = `At the end of the combat phase, you can
            pick an enemy unit within 3" of this model
            and roll a dice. On a 4+ that unit suffers 1
            mortal wound.`;
        }
    );

    overrideAbility(
        data.extraAbilities.stormcastEternalsStarchaserFormsSteelPinions
            .ability,
        x => {
            x.flavor =
                "The pinions of this creature are deceptively strong, able to shield their rider from enemy attacks.";
            x.description =
                "Roll a dice each time a wound or mortal wound is allocated to this model. On a 6+ that wound or mortal wound is negated.";
            x.effects = [
                {
                    targetType: TargetType.Model,
                    defenseAura: { negateWoundsOrMortalWoundsOn6: true }
                }
            ];
        }
    );
}

function overrideSavageTemperaments(data: DataStoreImpl) {
    overrideAbility(
        data.extraAbilities.stormcastEternalsSavageTemperamentsBoundingLeap
            .ability,
        x => {
            x.flavor = `This mighty
            beast pounces into the midst
            of the foe in great leaps.`;
            x.description = `This model is eligible to fight
            in the combat phase if it is
            within 6" of an enemy unit
            instead of 3", and it can move
            an extra 3" when it piles in.`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsSavageTemperamentsPrideLeader
            .ability,
        x => {
            x.flavor = `This Dracoline
            holds its head high, directing
            its kin with growls and roars.`;
            x.description = `Add 1 to hit rolls for
            attacks made by friendly
            DRACOLINE units while
            they are wholly within 9" of
            this model.`;
        }
    );
    overrideAbility(
        data.extraAbilities.stormcastEternalsSavageTemperamentsEarBurstingRoar
            .ability,
        x => {
            x.flavor = `This
            great beast’s bellow can
            stagger even a mighty orruk.`;
            x.description = `At the start of the combat
            phase you can pick an enemy
            unit within 3" of this model
            and roll a dice. On a 4+
            subtract 1 from hit rolls for
            attacks made by that unit
            until the end of that phase.`;
        }
    );
}

function fixStormhosts(data: DataStoreImpl) {
    const abilities = data.extraAbilities;

    // Hammers of Sigmar
    override<Ability>(
        abilities.stormcastEternalsHammersOfSigmarGodForgedBlade.ability,
        x => {
            x.description =
                "Pick one of the bearer’s melee weapons. If the unmodified hit roll for an attack made with the Godforged Blade is 6, add 1 to the Damage characteristic of that attack.";
            x.flavor =
                "Wrought by Grungni himself for the first Stormhost, this weapon strikes with explosive power.";
            x.effects = [
                {
                    targetType: TargetType.Weapon,
                    attackAura: { damageOnWoundUnmodified6: 1 }
                }
            ];
        }
    );
    override<Ability>(
        abilities.stormcastEternalsHammersOfSigmarWeCannotFail.ability,
        x => {
            x.description =
                'Roll a dice each time you allocate a wound or mortal wound to a friendly HAMMERS OF SIGMAR unit wholly within 9" of this general. On a 6+, that wound or mortal wound is negated.';
            x.flavor =
                "The Hammers of Sigmar refuse to fall until their task is completed.";
            x.effects = [
                {
                    targetCondition: { keyword: "HAMMERS OF SIGMAR" },
                    targetType: TargetType.Friend,
                    effectRange: 9,
                    defenseAura: { negateWoundsOrMortalWoundsOn6: true }
                }
            ];
        }
    );
    const firstToBeForged: Ability = {
        id: "stormcast_firstToBeForged",
        description:
            "Add 1 to the Bravery characteristic of friendly HAMMERS OF SIGMAR units.",
        flavor:
            "The Hammers of Sigmar were at the forefront of Sigmar’s war against Chaos, and have stared down the greatest of horrors.",
        name: "First to be Forged",
        category: AbilityCategory.Army,
        effects: [
            {
                targetType: TargetType.Friend,
                battleShockAura: { bonusBravery: 1 }
            }
        ]
    };
    const soulOfTheStormhost: Ability = {
        id: "stormcast_soulOfTheStormhost",
        name: "Soul of the Stormhost",
        flavor:
            "The Redeemers of the Hammers of Sigmar break the enemy force with waves of reinforcements that never seem to end.",
        description:
            'You can use this command ability when a friendly HAMMERS OF SIGMAR REDEEMER unit is destroyed. If you do so, roll a dice. On a 5+ a new unit identical to the one that was destroyed is added to your army. Set up the new unit anywhere on the battlefield, more than 9" from any enemy models. You cannot use this command ability more than once per phase.',
        category: AbilityCategory.Command,
        effects: [
            {
                targetType: TargetType.Friend,
                targetCondition: { keyword: "REDEEMER" },
                defenseAura: {}
            }
        ]
    };
    override<ArmyOption>(
        data.armyOptions.stormcastEternalsHammersOfSigmar,
        x => (x.abilities = [firstToBeForged, soulOfTheStormhost])
    );

    // Hallowed knights
    overrideAbility(
        abilities.stormcastEternalsHallowedKnightsMartyrSStrength.ability,
        x => {
            x.description =
                "Roll a dice if this general is slain in the combat phase. On a 2+ this general can make a pile-in move and then attack with all of the melee weapons it is armed with, before it is removed from play.";
            x.flavor =
                "The Hallowed Knights will not fall until their foe is slain.";
        }
    );
    overrideAbility(
        abilities.stormcastEternalsHallowedKnightsParchmentOfPurity.ability,
        x => {
            x.description =
                "In your hero phase, heal 1 wound allocated to the bearer.";
            x.flavor =
                "The runes etched on this honour parchment glow with the restorative power of Azyr.";
        }
    );
    const onlyTheFaithful: Ability = {
        id: "stormcastEternalsAnvilsOfTheHeldenhammerOnlyTheFaithful",
        name: "Only the Faithful",
        description:
            "If a friendly HALLOWED KNIGHTS unit is affected by a spell or endless spell, roll a dice. On a 6+ ignore the effects of that spell on that unit.",
        flavor:
            "The Hallowed Knights are so devout that they can deny even the magic of the realms."
    };
    const holyCrusaders: Ability = {
        id: "stormcastEternalsAnvilsOfTheHeldenhammerHolyCrusaders",
        name: "Holy Crusaders",
        description:
            'You can use this command ability at the start of your hero phase. If you do so, pick a friendly HALLOWED KNIGHTS unit wholly within 9" of a friendly HALLOWED KNIGHTS HERO, or wholly within 18" of a friendly HALLOWED KNIGHTS HERO that is a general. Add 1 to run rolls and charge rolls for that unit until your next hero phase. In addition, until your next hero phase, that unit can run and still charge later in the same turn.',
        flavor:
            "The Hallowed Knights are driven forward by their faith, always eager to bring Sigmar’s holy retribution to the enemies of the God-King."
    };
    override<ArmyOption>(
        data.armyOptions.stormcastEternalsHallowedKnights,
        x => (x.abilities = [onlyTheFaithful, holyCrusaders])
    );

    //Celestial Vindicators
    overrideAbility(
        abilities.stormcastEternalsCelestialVindicatorsSingleMindedFury.ability,
        x => {
            x.description =
                "Each time you roll an unmodified hit roll of 6 for this general, add 1 to the Damage characteristic of that attack.";
            x.flavor =
                "The leaders of the Celestial Vindicators are always eager to go on the offensive.";
        }
    );
    overrideAbility(
        abilities.stormcastEternalsCelestialVindicatorsStormrageBlade.ability,
        x => {
            x.description =
                "Pick one of the bearer’s melee weapons. At the start of the combat phase, you can add 2 to the Attacks characteristic of this weapon until the end of that phase. If you do so, subtract 1 from save rolls for attacks that target the bearer until the end of that phase.";
            x.flavor =
                "This blade stokes the rage of its bearer, driving them into such a killing frenzy they give no thought to their own defence.";
        }
    );
    const drivenByVengeance: Ability = {
        name: "Driven by Vengeance",
        flavor:
            "The Celestial Vindicators strike down their foes with a flurry of blows.",
        description:
            "You can re-roll hit rolls of 1 for attacks made by friendly CELESTIAL VINDICATORS units if they made a charge move in the same turn.",
        id: "stormcastEternalsCelestialVindicatorsDrivenByVengeance"
    };
    const righteousHatred: Ability = {
        name: "Righteous Hatred",
        flavor:
            "The Celestial Vindicators are relentless in their desire to slay the enemies of Sigmar.",
        description:
            'You can use this command ability the start of the combat phase. If you do so, you pick a friendly CELESTIAL VINDICATORS unit wholly within 9" of a friendly CELESTIAL VINDICATORS HERO, or wholly within 18" of a friendly CELESTIAL VINDICATORS HERO that is a general. Add 1 to the Attacks characteristic of that unit’s melee weapons until the end of that phase.',
        id: "stormcastEternalsCelestialVindicatorsRighteousHatred"
    };
    override<ArmyOption>(
        data.armyOptions.stormcastEternalsCelestialVindicators,
        x => (x.abilities = [drivenByVengeance, righteousHatred])
    );

    // Anvils of the Heldenhammer
    overrideAbility(
        abilities.stormcastEternalsAnvilsOfTheHeldenhammerDeathlyAura.ability,
        x => {
            x.description =
                'Subtract 1 from the Bravery characteristic of enemy units while they are within 6" of this general.';
            x.flavor =
                "The leaders of the Anvils of the Heldenhammer embody their Stormhost’s sinister reputation.";
            x.effects = [
                {
                    targetType: TargetType.Enemy,
                    effectRange: 6,
                    battleShockAura: { bonusBravery: -1 }
                }
            ];
        }
    );
    overrideAbility(
        abilities.stormcastEternalsAnvilsOfTheHeldenhammerSoulthief.ability,
        x => {
            x.description =
                "Pick one of the bearer’s melee weapons. At the end of the combat phase, roll a dice for each enemy model that was allocated any wounds caused by this weapon in that combat phase. On a 3+ that model suffers 1 mortal wound.";
            x.flavor =
                "The Soulthief is a powerful artefact, each blow striking the victim’s very spirit.";
            x.effects = [
                {
                    targetType: TargetType.Weapon,
                    phase: Phase.Combat,
                    subPhase: SubPhase.After,
                    mortalWounds: "1(3+)"
                }
            ];
        }
    );
    const noTrueDeath: Ability = {
        id: "stormcast_noTrueDeath",
        description:
            "You can re-roll failed battleshock tests for friendly ANVILS OF THE HELDENHAMMER units.",
        flavor:
            "The Anvils of the Heldenhammer know that if slain, they will return to fight again.",
        name: "No True Death",
        category: AbilityCategory.Army,
        effects: [
            {
                targetType: TargetType.Unit,
                battleShockAura: { rerollFails: true }
            }
        ]
    };
    const heroesOfAnotherAge: Ability = {
        id: "stormcast_heroesOfAnotherAge",
        description:
            'You can use this command ability in your hero phase. If you do so, pick a friendly ANVILS OF THE HELDENHAMMER unit wholly within 9" of a friendly ANVILS OF THE HELDENHAMMER HERO, or wholly within 18" of a friendly ANVILS OF THE HELDENHAMMER HERO that is a general. That unit can attack with all of the missile weapons it is armed with, or make a pile-in move and attack with all of the melee weapons it is armed with.',
        flavor:
            "The Anvils of the Heldenhammer use ancient and revered codes of battle.",
        category: AbilityCategory.Command,
        name: "Heroes of Another Age",
        effects: [{ phase: Phase.Hero, targetType: TargetType.Friend }]
    };
    override<ArmyOption>(
        data.armyOptions.stormcastEternalsAnvilsOfTheHeldenhammer,
        x => (x.abilities = [noTrueDeath, heroesOfAnotherAge])
    );

    // Knight Excelsiors
    overrideAbility(
        abilities.stormcastEternalsKnightsExcelsiorChainsOfCelestialLightning
            .ability,
        x => {
            x.description =
                'Once per battle, in your hero phase, the bearer can attempt to bind an enemy HERO or MONSTER model within 3". If they do so, roll 3D6. Your opponent rolls 2D6 if the target is a HERO or 3D6 if it is a MONSTER or HERO MONSTER. If your roll is higher, until your next hero phase, halve the Move characteristic, run rolls and charge rolls for that enemy model, and halve the Attacks characteristic of its melee weapons. Round any fractions up.';
            x.flavor =
                "These enchanted chains can trap the unworthy in unbreakable bindings.";
        }
    );
    overrideAbility(
        abilities.stormcastEternalsKnightsExcelsiorDivineExecutioner.ability,
        x => {
            x.description = `Add 1 to the Damage characteristic of this general’s melee
                weapons if the target is a HERO.`;
            x.flavor = `Knights Excelsior commanders
                seek out enemy leaders with aggressive focus.`;
        }
    );
    const stormOfAnnihilation: Ability = {
        id: "stormcastEternalsAnvilsOfTheHeldenhammerstormOfAnnihilation",
        description: `If a friendly KNIGHTS EXCELSIOR unit makes an
            attack that destroys an enemy unit, you can re-roll
            hit rolls of 1 for attacks made by that KNIGHTS
            EXCELSIOR unit for the rest of the battle.`,
        flavor: `The Knights Excelsior take a
        cold pleasure in the deaths of their foes.`,
        category: AbilityCategory.Army,
        name: "Storm of Annihilation"
    };
    const noMercy: Ability = {
        id: "stormcastEternalsAnvilsOfTheHeldenhammernoMercy",
        description: `You can use this command ability in your hero phase.
        If you do so, pick a friendly KNIGHTS EXCELSIOR unit
        wholly within 9" of a friendly KNIGHTS EXCELSIOR
        HERO, or wholly within 18" of a friendly KNIGHTS
        EXCELSIOR HERO that is a general. You can re-roll
        wound rolls of 1 for attacks made by that unit until the
        end of the turn.`,
        flavor: `The Knights Excelsior are merciless in
        prosecuting the enemies of the God-King.`,
        category: AbilityCategory.Command,
        name: "No Mercy"
    };
    override<ArmyOption>(
        data.armyOptions.stormcastEternalsKnightsExcelsior,
        x => (x.abilities = [stormOfAnnihilation, noMercy])
    );

    // Celestial Warbringers
    overrideAbility(
        abilities.stormcastEternalsCelestialWarbringersHammersOfAugury.ability,
        x => {
            x.description = `At the end of the combat phase, you can pick 1 enemy
                unit within 3" of the bearer and roll a dice. On a
                3+, that unit suffers 1 mortal wound and you can
                roll another dice. On a 4+, that unit suffers 1 extra
                mortal wound.`;
            x.flavor = `These potent tools of divination
                orbit their bearer, lashing out at nearby foes.`;
        }
    );
    overrideAbility(
        abilities.stormcastEternalsCelestialWarbringersPortentsAndOmens.ability,
        x => {
            x.description = `Once per turn, you can re-roll 1 failed hit roll or 1
            failed wound roll for an attack made by this general, or
            1 failed save roll for an attack that targets this general.`;
            x.flavor = `The leaders of the Celestial
            Warbringers receive guidance from the stars.`;
        }
    );
    const fearlessForeseight: Ability = {
        id: "stormcastEternalsCelestialWarbringersfearlessForeseight",
        description: `At the start of the first battle round, after determining
        who has the first turn but before the first turn
        begins, you can pick up to D3 friendly CELESTIAL
        WARBRINGERS units and set them up again (any
        restrictions in the set-up instructions for the battleplan
        being used still apply).`,
        flavor: `The Celestial Warbringers use
        portents to inform their strategies in battle.`,
        category: AbilityCategory.Army,
        name: "Fearless Foresight"
    };
    const astralConjunction: Ability = {
        id: "stormcastEternalsCelestialWarbringersastralConjunction",
        description: `You can use this command ability in your hero
        phase. If you do so, pick a friendly CELESTIAL
        WARBRINGERS WIZARD wholly within 9" of a
        friendly CELESTIAL WARBRINGERS HERO, or wholly
        within 18" of a friendly CELESTIAL WARBRINGERS
        HERO that is a general. Add 1 to casting rolls for that
        unit until the end of that phase.`,
        flavor: `Celestial Warbringers read the
        stars to boost their already potent magical powers.`,
        category: AbilityCategory.Command,
        name: "Astral Conjunction"
    };
    override<ArmyOption>(
        data.armyOptions.stormcastEternalsCelestialWarbringers,
        x => (x.abilities = [fearlessForeseight, astralConjunction])
    );

    // Tempest lords
    overrideAbility(
        abilities.stormcastEternalsTempestLordsBondsOfNobleDuty.ability,
        x => {
            x.description = `Add 1 to wound rolls for attacks made with this
            general’s melee weapons while this general is within 6"
            of any other friendly TEMPEST LORDS units.`;
            x.flavor = `When surrounded by their
            kin, the leaders of the Tempest Lords set a perfect
            martial example.`;
        }
    );
    overrideAbility(
        abilities.stormcastEternalsTempestLordsPatricianSHelm.ability,
        x => {
            x.description = `If the bearer is on the battlefield, each time you spend
            a command point, roll a dice. On a 5+ you receive 1
            extra command point.`;
            x.flavor = `The sacred relics of the Tempest
            Lords are imbued with an aura of authority and
            command that magnifies that of the wearer.`;
        }
    );
    const grandStrategist: Ability = {
        id: "stormcastEternalsTempestLordsgrandStrategist",
        description: `At the start of your hero phase, roll a dice. On a 4+ you
        receive 1 extra command point.`,
        flavor: `The Tempest Lords have an innate
        grasp of the flow of battle, allowing them to adapt to
        any situation at great speed.`,
        category: AbilityCategory.Army,
        name: "Grand Strategists"
    };
    const rousingOratory: Ability = {
        id: "stormcastEternalsTempestLordsrousingOratory",
        description: `You can use this command ability at the start of the
        combat phase. If you do so, pick a friendly TEMPEST
        LORDS unit wholly within 9" of a friendly TEMPEST
        LORDS HERO, or wholly within 18" of a friendly
        TEMPEST LORDS HERO that is a general. You can reroll
        wound rolls of 1 for attacks made by that unit until
        your next hero phase.`,
        flavor: `The inspiring speeches of the
        Tempest Lords’ commanders drives their forces to ever
        greater feats of arms.`,
        category: AbilityCategory.Command,
        name: "Rousing Oratory"
    };
    override<ArmyOption>(
        data.armyOptions.stormcastEternalsTempestLords,
        x => (x.abilities = [grandStrategist, rousingOratory])
    );

    // Astral Templars
    overrideAbility(
        abilities.stormcastEternalsAstralTemplarsDauntlessHunters.ability,
        x => {
            x.description = `After set-up is complete, but before the battle begins,
            friendly ASTRAL TEMPLARS units wholly within 12"
            of this general can move up to 6".`;
            x.flavor = `The Astral Templars do not often
            seek permission to rush headlong at the foe, but their
            commanders relish giving it anyway`;
        }
    );
    overrideAbility(
        abilities.stormcastEternalsAstralTemplarsGodbeastPlate.ability,
        x => {
            x.description = `Subtract 1 from wound rolls for attacks made by a
            MONSTER that target the bearer.`;
            x.flavor = `This armour, quenched in the blood of
            the mightiest beasts, is proof against the raking claws of
            feral creatures.`;
        }
    );
    const beastStalkers: Ability = {
        id: "stormcastEternalsAstralTemplarsbeastStalkers",
        description: `Add 1 to hit rolls for attacks made by ASTRAL
        TEMPLARS units that target a MONSTER.`,
        flavor: `The Astral Templars are experienced
        hunters of the most horrific creatures the Mortal
        Realms have to offer.`,
        category: AbilityCategory.Army,
        name: "Beast Stalkers"
    };
    const cuttOffTheHead: Ability = {
        id: "stormcastEternalsAstralTemplarscuttOffTheHead",
        description: `You can use this command ability at the start of
        the combat phase. If you do so, pick an ASTRAL
        TEMPLARS unit that is wholly within 9" of a friendly
        ASTRAL TEMPLARS HERO, or wholly within 18" of a
        friendly ASTRAL TEMPLARS HERO that is a general.
        Until the end of that phase, add 1 to wound rolls for
        attacks made by that unit that target a HERO.`,
        flavor: `The Astral Templars are renowned
        for seeking glory in the midst of battle, often neglecting
        lesser foes in favour of a greater challenge.`,
        category: AbilityCategory.Command,
        name: "Cut off the Head"
    };
    override<ArmyOption>(
        data.armyOptions.stormcastEternalsAstralTemplars,
        x => (x.abilities = [beastStalkers, cuttOffTheHead])
    );
}

function fixModels(data: DataStoreImpl) {
    const models = data.models;
    overrideModel(models.aetherwings, 2017, Material.Plastic);
    overrideModel(models.celestantPrimeHammerOfSigmar, 2014, Material.Plastic);
    overrideModel(models.concussors, 2016, Material.Plastic);
    overrideModel(models.desolators, 2016, Material.Plastic);
    overrideModel(models.drakeswornTemplar, 2016, Material.Plastic);
    overrideModel(models.fulminators, 2016, Material.Plastic);
    overrideModel(models.gryphHounds, 2017, Material.Plastic);
    overrideModel(models.judicators, 2014, Material.Plastic);
    overrideModel(models.knightAzyros, 2014, Material.Plastic);
    overrideModel(models.knightHeraldor, 2014, Material.Plastic);
    overrideModel(models.knightVenator, 2014, Material.Plastic);
    overrideModel(models.knightVexillor, 2014, Material.Plastic);
    overrideModel(models.liberators, 2014, Material.Plastic);
    overrideModel(models.gavrielSureheart, 2017, Material.Plastic);
    overrideModel(models.lordAquilor, 2017, Material.Plastic);
    overrideModel(models.lordCastellant, 2014, Material.Plastic);
    overrideModel(models.lordCelestant, 2014, Material.Plastic);
    overrideModel(models.lordCelestantOnDracoth, 2016, Material.Plastic);
    overrideModel(models.lordCelestantOnStardrake, 2016, Material.Plastic);
    overrideModel(models.lordOrdinator, 2018, Material.Plastic);
    overrideModel(models.lordRelictor, 2014, Material.Plastic);
    overrideModel(models.lordVeritant, 2014, Material.Plastic);
    overrideModel(models.decimators, 2014, Material.Plastic);
    overrideModel(models.protectors, 2014, Material.Plastic);
    overrideModel(models.retributors, 2014, Material.Plastic);
    overrideModel(models.prosecutors, 2014, Material.Plastic);
    overrideModel(models.steelheartSChampions, 2017, Material.Plastic);
    overrideModel(models.tempestors, 2016, Material.Plastic);
    overrideModel(models.vandusHammerhand, 2014, Material.Plastic);
    overrideModel(models.vanguardHunters, 2017, Material.Plastic);
    overrideModel(models.vanguardPalladors, 2017, Material.Plastic);
    overrideModel(
        models.vanguardRaptorsWithHurricaneCrossbows,
        2017,
        Material.Plastic
    );
    overrideModel(
        models.vanguardRaptorsWithLongstrikeCrossbows,
        2017,
        Material.Plastic
    );
    overrideModel(models.sequitors, 2018, Material.Plastic);
    overrideModel(models.castigators, 2018, Material.Plastic);
    overrideModel(models.evocators, 2018, Material.Plastic);
    overrideModel(
        models.evocatorsOnCelestialDracolines,
        2018,
        Material.Plastic
    );
    overrideModel(models.knightIncantor, 2018, Material.Plastic);
}

function fixAllegiance(data: DataStoreImpl) {
    const scionsOfTheStorm: Ability = {
        id: "stormcast_scionsOfTheStorm",
        name: "Scions of the Storm",
        flavor:
            "Sigmar’s finest warriors strike as if from nowhere, the building storm heralding their arrival.",
        description:
            'Instead of setting up a STORMCAST ETERNAL unit on the battlefield, you can place it to one side and say that it is set up in the Celestial Realm as a reserve unit. You can set up one reserve unit in the Celestial Realm for each unit you have set up on the battlefield. At the end of your movement phase, you can set up one or more of the reserve units in the Celestial Realm on the battlefield, more than 9" from any enemy units. Any reserve units in the Celestial Realm that are not set up on the battlefield before the start of the fourth battle round are slain.',
        category: AbilityCategory.Army,
        effects: [{ targetType: TargetType.Friend, phase: Phase.Setup }]
    };
    const shockAndAwe: Ability = {
        id: "stormcast_shockAndAwe",
        name: "Shock and Awe",
        flavor:
            "When the Stormcast Eternals arrive to reinforce their allies, their sudden appearance strikes terror into the hearts of the enemies of Sigmar.",
        description:
            "Subtract 1 from hit rolls for attacks that target friendly STORMCAST ETERNAL units that were set up on the battlefield during the same turn.",
        category: AbilityCategory.Army,
        effects: [
            {
                phase: Phase.Movement,
                targetType: TargetType.Friend,
                defenseAura: { malusHitRoll: 1 }
            }
        ]
    };
    override<Allegiance>(
        data.allegiances.stormcastEternals,
        x => (x.battleTraits = [scionsOfTheStorm, shockAndAwe])
    );
}

export function overrideStormcast(data: DataStoreImpl): void {
    fixAllegiance(data);
    addBoxes(data);
    fixBattalions(data);
    fixUnits(data);
    fixExtraAbilities(data);
    fixStormhosts(data);
    fixModels(data);
}
