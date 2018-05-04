import { DataStoreImpl } from "../imported-data";
import { Battalion, Unit, Attack, Ability, WeaponOption, WeaponOptionCategory } from "../units";
import { setBaseWeaponOption, getWoundsForAbility6OnHitIsMortalWound, getWoundsForExtraAttack, getWoundsForAbilityReroll1OnHit, getWoundsForAbilityBonus1OnHit, mediumRate, frequentRate, rareRate, numberOfNeighborUnits, getWoundsForBonusDamageIf6OnWound, getSavedWoundReroll1 } from "./tools";
import { getAttackDamage, getAttackDamageEx } from "../combat";

function addBoxes(data: DataStoreImpl):void {
    data.boxes.push({
        id: data.serial++,
        name: "Start Collecting! Stormcast Vanguard",
        units: [
            { count: 1, models: [data.models.lordAquilor] },
            { count: 5, models: [data.models.vanguardHunters]},
            { count: 3, models: [data.models.vanguardPalladors]},
            { count: 3, models: [data.models.gryphHound]}
        ],
        price: 65
    });
    data.boxes.push({
        id: data.serial++,
        name: "Judicators",
        units: [
            { count: 10, models: [data.models.judicators] }
        ],
        price: 49
    });
    data.boxes.push({
        id: data.serial++,
        name: "Kinght-Venator/Azyros",
        units: [
            { count: 1, models: [data.models.knightAzyros, data.models.knightVenator] }
        ],
        price: 33
    });
    data.boxes.push({
        id: data.serial++,
        name: "Vanguard-Raptors",
        units: [
            { count: 3, models: [data.models.vanguardRaptorsWithHurricaneCrossbows, data.models.vanguardRaptorsWithLongstrikeCrossbows] },
            { count: 3, models: [data.models.aetherwings] }
        ],
        price: 30
    });
    data.boxes.push({
        id: data.serial++,
        name: "Lord-Aquilor",
        units: [
            { count: 1, models: [data.models.lordAquilor] }
        ],
        price: 32.50
    });
}

function fixBattalions(data: DataStoreImpl):void {
    const aetherstrike: Battalion = data.battalions.aetherstrikeForce;
    aetherstrike.units.push({ unit: [data.units.knightVenator], count: 1, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.knightAzyros], count: 1, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.judicators], count: 2, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.vanguardRaptorsWithLongstrikeCrossbows, data.units.vanguardRaptorsWithHurricaneCrossbows], count: 2, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.aetherwings], count: 2, id: data.serial++ });
    aetherstrike.abilities = [
        { name: "Marked for Destruction", description: "The enemies of the Aetherstrike Force hear their doom approaching in the beating of celestial wings. In your hero phase, one unit from this force can attack as if it were the shooting phase. All of their attacks must be directed at units within 12\" of any units of Aetherwings from this battalion or the Knight- Azyros from this battalion."},
        { name:"Vengeance from Afar", description: "Any who seeks to strike against the comrades of these warriors will find their temerity punished with ice cold efficiency. When a unit from this force is destroyed, another unit from this force can attack as if it were the shooting phase. All of their attacks must be directed at the enemy unit that destroyed the unit from the Aetherstrike Force."}
    ];

    const shadowhammers: Battalion = data.battalions.blacktalonSShadowhammers;
    shadowhammers.units.push({ unit: [data.units.neaveBlacktalon], count: 1, id: data.serial++});
    shadowhammers.units.push({ unit: [data.units.vanguardPalladors], count: 1, id: data.serial++});
    shadowhammers.units.push({ unit: [data.units.vanguardRaptorsWithHurricaneCrossbows, data.units.vanguardRaptorsWithLongstrikeCrossbows], count: 1, id: data.serial++});
    shadowhammers.units.push({ unit: [data.units.vanguardHunters], count: 1, id: data.serial++});
    shadowhammers.units.push({ unit: [data.units.aetherwings], count: 1, id: data.serial++});
    shadowhammers.abilities = [
        { name: "Swift as the wind", description: "In your hero phase, all STORMCAST ETERNAL units from this battalion that are within 6\" of Neave Blacktalon may move 5\" as if it were the movement phase, but may not run." },
        { name: "Coordinated Attacks", description: "If a unit from Blacktalon's Shadowhammers makes a successful charge against an enemy unit that was the target of a shooting attack by another unit in this battalion this turn, you may add 1 to its hit rolls in the subsequent combat phase."}
    ]

    const hammerStrikeForce: Battalion = data.battalions.hammerstrikeForce;
    hammerStrikeForce.units.push({ unit: [data.units.paladinRetributors, data.units.paladinDecimators, data.units.paladinProtectors], count: 2, id: data.serial++ });
    hammerStrikeForce.units.push({ unit: [data.units.prosecutorsWithCelestialHammers, data.units.prosecutorsWithStormcallJavelins], count: 1, id: data.serial++});
    hammerStrikeForce.abilities=  [
        { name: "Hammerstrike", description: "Instead of setting up the PALADINS on the battlefield, you can place either or both units to one side and say that they are set up in the Celestial Realm. In any of your movement phases, you can transport either or both units to the battlefield. When you do so, set them up on the battlefield within 6\" of the Hammerstrike Force’s Prosecutors. If the Prosecutors have been slain, set up the PALADINS more than 9\" from any enemy models. In either case, this is their move for that movement phase."},
        { name: "Celestial Supercharge", description: "When a unit of PALADINS from the Hammerstrike Force is set up within \" of its Prosecutors, they are supercharged with celestial energy until the end of your turn. Add 1 to the result of any wound rolls you make for this unit."}
    ];
}

function fixUnits(data: DataStoreImpl):void {
    {
        const liberator: Unit = data.units.liberators;
        liberator.move = 5;
        liberator.save = "4+";
        liberator.bravery = 6;
        liberator.keywords.push("CELESTIAL", "HUMAN", "REDEEMER", "LIBERATORS");
        const warhammer: Attack = { name: "Warhammer", range: "1", attacks: "2", toHit: "4+", toWound: "3+", damage: "1", melee: true };
        const warblade: Attack = { name: "Warblade", range: "1", attacks: "2", toHit: "3+", toWound: "4+", damage: "1", melee: true };
        const grandhammer: Attack = { name: "Grandhammer", range: "1", attacks: "2", toHit: "4+", toWound: "3+", rend: "-1", damage: "2", melee: true };
        const grandblade: Attack = { name: "Grandblade", range: "1", attacks: "2", toHit: "3+", toWound: "4+", rend: "-1", damage: "2", melee: true };
        const pairedWeapons: Ability = { 
            name: "Paired Weapons", 
            description: "An extra weapon allows a Liberator to feint and parry, creating openings in their opponent’s guard. You can re-roll hit rolls of 1 for models armed with more than one Warhammer or Warblade.",
            getWounds: (models, melee, attack) => attack ? getWoundsForAbilityReroll1OnHit(models, attack) : 0
        };
        const layLowTheTyrants: Ability = { 
            name: "Lay Low the Tyrants", 
            description: "If any model from this unit selects an enemy unit with a Wounds characteristic of 5 or more as the target for all of its attacks in a combat phase, add 1 to all of that model’s hit rolls in that combat phase."
        };
        const sigmariteShields: Ability = { 
            name: "Sigmarite Shields", 
            description: "You can re-roll save rolls of 1 for this unit if any models from the unit are carrying Sigmarite Shields.",
            getSavedWounds: getSavedWoundReroll1
        };
        const wc = liberator.weaponOptions![0];
        const wh = wc.options.find(x => x.id === "warhammers")!;
        wh.attacks = [warhammer];
        wh.abilities = [pairedWeapons, layLowTheTyrants];
        const wb = wc.options!.find(x => x.id === "warblades")!;
        wb.attacks = [warblade];
        wb.abilities = [pairedWeapons, layLowTheTyrants];
        const whs = wc.options!.find(x => x.id === "warhammerShield")!;
        whs.attacks = [warhammer];
        whs.abilities = [layLowTheTyrants, sigmariteShields];
        const wbs = wc.options!.find(x => x.id === "warbladeShield")!;
        wbs.attacks = [warblade];
        wbs.abilities = [layLowTheTyrants, sigmariteShields];
        const gwb: WeaponOption = {
            id: "grandblade",
            abilities: [layLowTheTyrants],
            attacks: [grandblade],
            name: "Grandblade"
        };
        const gwh: WeaponOption = {
            id: "grandhammer",
            abilities: [layLowTheTyrants],
            attacks: [grandhammer],
            name: "Grandhammer"
        };
        const gwc: WeaponOptionCategory = {
            options: [gwb, gwh],
            maxCount: 1
        };
        liberator.weaponOptions!.push(gwc);
        liberator.abilities = [{ 
            name: "Liberator-Prime",
            description: "The leader of this unit is the Liberator-Prime. A Liberator-Prime makes 3 attacks rather than 2.",
            getWounds: (models, melee, attack) => attack && models === 1 && melee ? getWoundsForExtraAttack(attack) : 0
        }];    
    }

    {
        const judicator: Unit = data.units.judicators;
        judicator.move = 5;
        judicator.save = "4+";
        judicator.bravery = 6;
        judicator.keywords.push("CELESTIAL", "HUMAN", "JUSTICAR", "JUDICATORS");
        const skyboltBow: Attack = { name: "Skybolt Bow", range: "24", attacks: "1", toHit: "3+", toWound: "3+", rend: "-1", damage: "1", melee: false };
        const boltstormCrossbow: Attack = { name: "Boltstorm Crossbow", range: "12", attacks: "2", toHit: "3+", toWound: "4+", damage: "1", melee: false };
        const shockboltBow: Attack = { name: "Shockbolt Bow", range: "24", attacks: "1", toHit: "3+", toWound: "3+", rend: "-1", damage: "1", melee: false };
        const thunderboltCrossbow: Attack = { name: "Thunderbolt Crossbow", range: "18", melee: false };
        const stormGladius: Attack = { name: "Storm Gladius", range: "1", attacks: "1", toHit: "3+", toWound: "4+", damage: "1", melee: true };
        const judicatorPrime: Ability = { 
            name: "Judicator-Prime", 
            description: "A Judicator-Prime leads this unit. Add 1 to the hit rolls for a Judicator-Prime.",
            getWounds: (models, melee, attack) => attack === skyboltBow || attack === shockboltBow ? getWoundsForAbilityBonus1OnHit(1, attack) : 0
        };
        const rapidFire: Ability = { 
            name: "Rapid Fire", 
            description: "If a unit of Judicators does not move in the movement phase, then you can add 1 to the Attacks characteristic of any Boltstorm Crossbows the unit uses in the shooting phase of the same turn.",
            getWounds: (models, melee, attack) => attack === boltstormCrossbow ? getWoundsForExtraAttack(attack) * models * mediumRate : 0
        };
        const chainedLightning: Ability = { 
            name: "Chained Lightning", 
            description: "If a Judicator attacking with a Shockbolt Bow scores a hit then the bolt explodes into a storm of lightning. Instead of making a single wound roll, roll a dice and make a number of wound rolls equal to the number scored.",
            getWounds: (models, melee, attack) => attack === shockboltBow ? getAttackDamage(attack) * 2.5 : 0
        };
        const eternalJudgment: Ability = { 
            name: "Eternal Judgment",
            description: "You may re-roll any hit rolls of 1 when a Judicator attacks a CHAOS unit in the shooting phase."
        };
        const thunderboltCrossbowAbility: Ability = { 
            name: "Thunderbolt Crossbow", 
            description: "When a model attacks with a Thunderbolt Crossbow the target is struck by a mighty blast of Celestial energy; pick an enemy unit within 18\" and roll a dice. Subtract 1 from the roll if the target is a MONSTER. If the result is equal to or less than the number of models in the unit, the unit suffers D3 mortal wounds.",
            getWounds: (models, melee, attack) => attack === thunderboltCrossbow ? 2 * frequentRate : 0 
        };
        
        const base = judicator.weaponOptions![0];
        let wo = base.options.find(x => x.id === "skyboltBows")!;
        wo.attacks = [skyboltBow, stormGladius];
        wo = base.options.find(x => x.id === "boltstormCrossbows")!;
        wo.attacks = [boltstormCrossbow, stormGladius];
        wo.abilities = [rapidFire];
        judicator.weaponOptions!.push({
            maxCount: 1,
            options: [
                { id: "shockboltBow", name: "Shockbolt Bow", abilities: [chainedLightning], attacks: [shockboltBow, stormGladius] },
                { id: "thunderboltCrossbow", name: "Thunderbolt Crossbow", abilities: [thunderboltCrossbowAbility], attacks: [thunderboltCrossbow, stormGladius] }
            ]
        });
        judicator.abilities = [judicatorPrime, eternalJudgment];

        {
            const lordCelestantOnDracoth: Unit = data.units.lordCelestantOnDracoth;
            lordCelestantOnDracoth.move = 10;
            lordCelestantOnDracoth.wounds = 7;
            lordCelestantOnDracoth.bravery = 9;
            lordCelestantOnDracoth.save = "3+";
            lordCelestantOnDracoth.keywords.push("CELESTIAL", "HUMAN", "LORD-CELESTANT");
            const stormstrikeGlaive: Attack = { melee: true, name: "Stormstrike Glaive", range: "2", attacks: "4", toHit: "3+", toWound: "4+", rend: "-1", damage: "1" };
            const lightningHammer: Attack = { melee: true,name: "Lightning Hammer", range: "1", attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "2" };
            const thunderAxe: Attack = { melee: true,name: "Thunderaxe", range: "2", attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "2"};
            const tempestosHammer: Attack = { melee: true,name: "Tempestos Hammer", range: "2", attacks: "3", toHit: "3+", toWound: "2+", rend: "-1", damage: "D3"};
            const dracothsClawsAndFangs: Attack = {melee: true, name: "Dracoth's Claws and Fangs", range: "1", attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "1"};
            const tempestosHammerAbility: Ability = { 
                name: "Tempestos Hammer", 
                description: "With the momentum of a charge behind it, few can stand against the impact of a Tempestos Hammer. If this model has made a charge move this turn, it can make D3 extra attacks with its Tempestos Hammer.",
                getWounds: (models, melee, attack) => attack === tempestosHammer ? getWoundsForExtraAttack(attack, 2) * rareRate : 0
            };
            const thunderaxeAbility: Ability = { 
                name: "Thunderaxe", 
                description: "In the capable hands of a Lord-Celestant, a Thunderaxe draws on the celestial energies of those around them until it is crackling with barely contained power. Add 1 to the Attacks of this model’s Thunderaxe for each other STORMCAST ETERNAL unit from your army within 5\".",
                getWounds: (models, melee, attack) => attack === thunderAxe ? getWoundsForExtraAttack(attack, numberOfNeighborUnits) : 0
            };
            const lightningHammerAbility: Ability = { 
                name: "Lightning Hammer", 
                description: "If the result of a hit roll for this model’s Lightning Hammer is 6 or more, the target unit immediately suffers two mortal wounds as warriors are blasted to ash, before the wound roll is made. If a unit suffers any mortal wounds in this way, it is stunned for the rest of the combat phase and cannot pile in before it attacks.",
                getWounds: (models, melee, attack) => attack === lightningHammer ? getWoundsForAbility6OnHitIsMortalWound(models, attack, 2) : 0
            };
            const stormstrikeGlaiveAbility: Ability = { 
                name: "Stormstrike Glaive", 
                description: "Lowering their Stormstrike Glaive and wielding it as a lance, a Lord-Celestant can bring down the mightiest foes. If this model has made a charge move this turn, its Stormstrike Glaive causes 3 Damage rather than 1, and has a Rend of -2 rather than -1.",
                getWounds: (models, melee, attack) => attack === stormstrikeGlaive ? rareRate * (getAttackDamageEx(attack, { rend: "-2", damage: "3"}) - getAttackDamage(attack)) : 0
            }
            const sigmariteThundershield: Ability = { 
                name: "Sigmarite Thundershield", 
                description: "You can re-roll save rolls of 1 for this model. If the re-rolled save is successful, the shield unleashes a deafening peal and each enemy unit within 3\" suffers a mortal wound.",
                getSavedWounds: getSavedWoundReroll1                
            };
            const intolerableDamage: Ability = {
                name: "Intolerable Damage", 
                description: "If the wound roll for the Dracoth’s Claws and Fangs attack is 6 or more, then that attack causes D6 Damage rather than 1.",
                getWounds: (models, melee, attack) => attack === dracothsClawsAndFangs ? getWoundsForBonusDamageIf6OnWound(attack, 3.5) : 0
            };
            const stormBreath: Ability = {
                name: "Storm Breath", 
                description: "You can make a storm breath attack with this model in your shooting phase. To do so, pick a point on the battlefield that is within 12\" of this model. Roll a dice for each unit (friend or foe) that is within 2\" of the point that you picked. On a roll of 4 or more, the unit being rolled for suffers D3 mortal wounds.",
                getWounds: (models, melee, attack) => !attack && !melee ? numberOfNeighborUnits * 0.5 * 2 : 0
            };
            const lordOfTheHost: Ability = {name: "Lord of the Host", description: "If a Lord-Celestant uses this ability, until your next hero phase you do not have to take battleshock tests for this model or any friendly STORMCAST ETERNALS that are within 24\" of it at the start of the battleshock phase."};

            lordCelestantOnDracoth.abilities = [intolerableDamage, stormBreath];
            lordCelestantOnDracoth.commandAbilities = [lordOfTheHost];
            lordCelestantOnDracoth.attacks = [dracothsClawsAndFangs];

            setBaseWeaponOption(lordCelestantOnDracoth, data.units.lordCelestantOnDracoth.baseWeaponOptions.tempestosHammerThundershield, [tempestosHammer], [sigmariteThundershield, tempestosHammerAbility]);
            setBaseWeaponOption(lordCelestantOnDracoth, data.units.lordCelestantOnDracoth.baseWeaponOptions.lightningHammer, [lightningHammer], [lightningHammerAbility]);
            setBaseWeaponOption(lordCelestantOnDracoth, data.units.lordCelestantOnDracoth.baseWeaponOptions.lightningHammerThundershield, [lightningHammer], [sigmariteThundershield, lightningHammerAbility]);
            setBaseWeaponOption(lordCelestantOnDracoth, data.units.lordCelestantOnDracoth.baseWeaponOptions.stormstrikeGlaive, [stormstrikeGlaive], [stormstrikeGlaiveAbility]);
            setBaseWeaponOption(lordCelestantOnDracoth, data.units.lordCelestantOnDracoth.baseWeaponOptions.stormstrikeGlaiveThundershield, [stormstrikeGlaive], [sigmariteThundershield, stormstrikeGlaiveAbility]);
            setBaseWeaponOption(lordCelestantOnDracoth, data.units.lordCelestantOnDracoth.baseWeaponOptions.thunderaxe, [thunderAxe], [thunderaxeAbility]);
            setBaseWeaponOption(lordCelestantOnDracoth, data.units.lordCelestantOnDracoth.baseWeaponOptions.thunderaxeThundershield, [thunderAxe], [sigmariteThundershield, thunderaxeAbility]);
        }

        {
            const paladinRetributors: Unit = data.units.paladinRetributors;
            paladinRetributors.wounds = 3;
            paladinRetributors.move = 4;
            paladinRetributors.save = "3+";
            paladinRetributors.bravery = 7;
            paladinRetributors.keywords.push("CELESTIAL", "HUMAN", "PALADIN", "RETRIBUTORS");
            
            const lightningHammer: Attack = { melee: true, name: "Lightning Hammer", range: "1", attacks: "2", toHit: "3+", toWound: "3+", rend: "-1", damage: "2"};
            const starsoulMace: Attack = { melee: true, name: "Starsoul Mace", range: "1" };
            const starsoulMaceAbility: Ability = { 
                name: "Starsoul Mace",
                description: "A model armed with a Starsoul Mace can make a starblast attack in each combat phase. Pick an enemy unit that is within 1\" of the model with the Starsoul Mace. That unit suffers D3 mortal wounds.",
                getWounds: (models, melee, attack) => melee && attack === undefined ? 2 * models : 0
            };
            const blastToAshes: Ability = { 
                name: "Blast to Ashes", 
                description: "If the hit roll for a model attacking with a Lightning Hammer is 6 or more, that blow strikes with a thunderous blast that inflicts 2 mortal wounds instead of its normal damage. Do not make a wound or save roll for the attack.",
                getWounds: (models, melee, attack) => attack && attack === lightningHammer ? getWoundsForAbility6OnHitIsMortalWound(models, attack, 2) : 0
            };
            const retributorPrime: Ability = { 
                name: "Retributor-Prime", 
                description: "The leader of this unit is the Retributor-Prime. A Retributor-Prime makes 3 attacks rather than 2 with a Lightning Hammer.",
                getWounds: (models, melee, attack) => attack && attack === lightningHammer ? getWoundsForExtraAttack(attack) : 0
            };
            paladinRetributors.abilities = [retributorPrime];
            const starsoulMaceOption: WeaponOption = { attacks: [starsoulMace], abilities: [starsoulMaceAbility], name: "Starsoul Mace", id: "starsoulMace" };
            const lightningHammerOption: WeaponOption = { attacks: [lightningHammer], abilities: [blastToAshes], name: "Lightning Hammer", id: "lightningHammer" };
            paladinRetributors.weaponOptions = [{ options: [lightningHammerOption] }, { options: [ starsoulMaceOption], maxCount: 1 }];
        }

        {
            const lordRelictor: Unit = data.units.lordRelictor;
            lordRelictor.wounds = 5;
            lordRelictor.move = 4;
            lordRelictor.save = "3+";
            lordRelictor.bravery = 9;
            lordRelictor.keywords.push("CELESTIAL", "HUMAN", "PRIEST", "LORD-RELICTOR");

            const relicHammer: Attack = { melee: true, name: "Relic Hammer", range: "1", attacks: "4", toHit: "3+", toWound: "3+", rend: "-1", damage: "1"};
            const lightningStorm: Ability = {
                name: "Lighning Storm",
                description: "In your hero phase, you can declare that the Lord-Relictor will pray for a lightning storm. If you do so, pick an enemy unit that is within 12\" of this model and roll a dice. On a roll of 3 or more, the unit you picked suffers D3 mortal wounds, and your opponent must subtract 1 from all hit rolls for the unit until your next hero phase. A Lord-Relictor cannot pray for a lightning storm and a healing storm in the same turn."
            };
            const healingStorm: Ability = { name: "Healing Storm", description: "In your hero phase, you can declare that this model is praying for a healing storm. If you do so, pick a friendly model with the STORMCAST ETERNAL keyword that is within 12\" of this model and roll a dice. On a roll of 3 or more you can heal up to D3 wounds that have been suffered by the model that you picked. A Lord-Relictor cannot pray for a healing storm and a lightning storm in the same turn."};
            lordRelictor.abilities= [lightningStorm, healingStorm];
            lordRelictor.attacks = [relicHammer];
        }

        {
            const prosecutorsWithStormcallJavelins: Unit = data.units.prosecutorsWithStormcallJavelins;
            prosecutorsWithStormcallJavelins.move = 12;
            prosecutorsWithStormcallJavelins.save = "4+";
            prosecutorsWithStormcallJavelins.bravery = 6;
            prosecutorsWithStormcallJavelins.wounds = 2;
            prosecutorsWithStormcallJavelins.keywords.push("CELESTIAL", "HUMAN", "ANGELOS", "PROSECUTORS");

            const stormcallJavelin: Attack = { melee: false, name: "Stormcall Javelin", range: "18", attacks: "1", toHit: "3+", toWound: "3+", damage: "1"};
            const stormsurgeTrident: Attack=  {melee: false, name: "Stormsurge Trident", range: "18", attacks: "1", toHit: "3+", toWound: "3+", rend: "-1", damage: "2"};
            const stormcallJavelinMelee: Attack = {melee: true, name: "Stormcall Javelin", range: "2", attacks: "1", toHit: "4+", toWound: "4+", damage: "1"};
            const stormsurgeTridentMelee: Attack = {melee: true, name: "Stormsurge Trident", range: "2", attacks: "1", toHit: "4+", toWound: "4+", rend: "-1", damage: "2"};
            const fly: Ability = { name: "Fly", description: "Prosecutors can fly."};
            const prosecutorPrime: Ability = { 
                name: "Prosecutor-Prime", 
                description: "The leader of this unit is the Prosecutor-Prime. Raining death from afar, this model makes 2 attacks rather than 1 in the shooting phase.",
                getWounds: (models, melee, attack) => !melee && attack ? getWoundsForExtraAttack(attack) : 0
            };
            const stormcallJavelinAbility: Ability = { 
                name: "Stormcall Javelin", 
                description: "If a Prosecutor throws a Stormcall Javelin at a unit over 9\" away, the javelin calls down a bolt of lightning; that attack has Damage 2 instead of 1.",
                getWounds: (models, melee, attack) => attack === stormcallJavelin ? frequentRate * getAttackDamage(attack) : 0
            };
            const heraldsOfRightouness: Ability=  {name: "Heralds of Righteousness", description: "Roll 3 dice instead of 2 dice when determining the charge move for this unit. In addition, you can declare a charge with this unit if it is within 18\" of the enemy rather than 12\"."};
            const sigmariteShield: Ability = {
                name: "Sigmarite Shields", 
                description: "You can re-roll save rolls of 1 for this unit if any models from the unit are carrying Sigmarite Shields.",
                getSavedWounds: getSavedWoundReroll1
            };
            prosecutorsWithStormcallJavelins.attacks = [stormcallJavelin, stormsurgeTrident, stormcallJavelinMelee, stormsurgeTridentMelee];
            prosecutorsWithStormcallJavelins.abilities= [fly, prosecutorPrime, stormcallJavelinAbility, heraldsOfRightouness, sigmariteShield];
        }

        {
            const unit: Unit = data.units.vanguardRaptorsWithLongstrikeCrossbows;
            unit.move = 5;
            unit.save = "4+";
            unit.bravery = 7;
            unit.wounds = 2;
            unit.keywords.push("CELESTIAL", "HUMAN", "JUSTICAR", "VANGUARD-RAPTORS");

            const longstrikeCrossbow: Attack = { melee: false, name: "Longstrike Crossbow", range: "24", attacks: "1", toHit: "2+", toWound: "3+", rend: "-2", damage: "2"};
            const heavyStock: Attack = { melee: true, name: "Heavy Stock", range: "1", attacks: "1", toHit: "4+", toWound: "3+", damage: "1"};
            const beakAndClaws: Attack = {melee: true, name: "Aetherwing’s Beak and Claws", range: "1", attacks: "2", toHit: "4+", toWound: "3+", damage: "1"};
            const raptorPrime: Ability = { name: "Raptor-Prime", description: "The leader of this unit is the Raptor-Prime. A Raptor-Prime is accompanied by an Aetherwing, which aids them in battle and savages enemies with its Beak and Claws."};
            const longshot: Ability = {name: "Longshot", description: "If a unit of Vanguard-Raptors does not move in the movement phase, then you can add 6\" to the Range characteristic of any Longstrike Crossbows the unit uses in the shooting phase of the same turn."};
            const headshot: Ability = {
                name: "Headshot", 
                description: "If the hit roll for a Longstrike Crossbow is a 6 or more, it causes 2 mortal wounds instead of its normal damage.",
                getWounds: (models, melee, attack) => attack && attack === longstrikeCrossbow ? getWoundsForAbility6OnHitIsMortalWound(models, attack, 2) : 0
            };
            const warningCry: Ability = {name: "Warning Cry", description: "If an enemy unit makes a charge move that ends within 1\" of a unit that includes a Raptor-Prime with an Aetherwing, roll a dice for each Vanguard-Raptor in the unit. Any rolls of 6 inflict 2 mortal wounds on the charging unit."}
            unit.attacks = [longstrikeCrossbow, heavyStock];
            unit.abilities = [raptorPrime, longshot, headshot];
            unit.weaponOptions = [{
                maxCount: 1,
                options: [{ id: "aetherwing", name: "Aetherwing", abilities: [warningCry], attacks: [beakAndClaws] }]
            }];
        }

        {
            const unit: Unit = data.units.aetherwings;
            unit.move = 12;
            unit.bravery = 6;
            unit.wounds = 2;

            const beakAndClaws: Attack = { melee: true, name: "Beak and Claws", range: "1", attacks: "2", toHit: "4+", toWound: "3+", damage: "1"};
            const fly: Ability = { name: "Fly", description: "Aetherwings can fly."};
            const watchfulGuardians: Ability = { name: "Watchful Guardians", description: "Aetherwings form close bonds with Vanguard-Raptors, and defend them from their enemies even as the Vanguard-Raptors destroy threats from afar. At the beginning of your opponent’s charge phase, any friendly unit of Aetherwings within 12\" of a friendly unit of Vanguard-Raptors can immediately move. Roll two dice – the Aetherwings can move up to this distance in inches. They can retreat with this move, but cannot run, and this move cannot take them further than 12\" from the Vanguard-Raptors."}
            const swoopingHunters: Ability = { name: "Swooping Hunters", description: "Units of Aetherwings can retreat and charge in the same turn."};
            unit.attacks = [beakAndClaws];
            unit.abilities = [fly, watchfulGuardians, swoopingHunters];
        }
    }
}

function addExtraAbilities(data: DataStoreImpl): void {
    // Command traits
    data.extraAbilities.stormcastEternalsShieldedByFaith.ability.description = "When your general suffers a mortal wound, roll a dice. On a roll of 5 or more, that mortal wound is ignored.";
    data.extraAbilities.stormcastEternalsConsummateCommander.ability.description = "Choose one other HERO in your army. While your general is alive, the model you chose can also use any command abilities it may have, as if it were your general.";
    data.extraAbilities.stormcastEternalsCunningStrategist.ability.description = "Once both armies are set up, but before the first battle round begins, select D3 friendly STORMCAST ETERNALS units. They can each make a move of up to 5\".";
    data.extraAbilities.stormcastEternalsZealousCrusader.ability.description = "Your general can re-roll their charge distance.";
    data.extraAbilities.stormcastEternalsStaunchDefender.ability.description = "Your general and all friendly STORMCAST ETERNALS units within 6\" add 1 to their save rolls if they have not charged this turn. This modifier does not stack with the save roll modifier for being within or on a terrain feature.";
    data.extraAbilities.stormcastEternalsChampionOfTheRealms.ability.description = "Choose one of your general’s weapon profiles (it cannot be a weapon used by a mount if they have one) and increase its Attacks characteristic by 1.";

    // Artifacts
    data.extraAbilities.stormcastEternalsStrifeEnder.ability.description = "This sigmarite weapon has been energised with runes of emancipation and liberation from evil. Pick one of this HERO’s melee weapons to be a Strife-ender. Add 1 to the Attacks characteristic of this weapon. Add 2 instead if all of the weapon’s attacks are directed against a CHAOS unit.";

    // Prayers
    data.extraAbilities.stormcastEternalsPrayerDivineLight.ability.description = "In your hero phase, you can declare that this model is going to pray for Sigmar to illuminate the battlefield. If you do so, pick a unit within 12\" and roll a dice. On a roll of 3 or more the prayer is heard – if you chose an enemy unit, friendly units re-roll hit rolls of 1 when attacking that unit until your next hero phase. If you instead chose a friendly unit, enemy units re-roll hit rolls of 6 or more when attacking that unit until your next hero phase.";
    data.extraAbilities.stormcastEternalsPrayerBlessWeapons.ability.description = "In your hero phase, you can declare that this model is going to pray for Sigmar to bless the weapons of his chosen warriors. If you do so, pick the PRIEST or a unit within 12\" of them and roll a dice. On a roll of 4 or more the prayer is heard – until your next hero phase, for any hit rolls of 6 or more made for that unit, you can immediately roll another attack.";
    data.extraAbilities.stormcastEternalsPrayerBolsterFaith.ability.description = "In your hero phase, you can declare that this model is going to pray for courage. If you do so roll a dice. On a roll of 4 or more the prayer is heard – the PRIEST and friendly units within 12\" do not have to take battleshock tests until your next hero phase.";
    data.extraAbilities.stormcastEternalsPrayerLightningChariot.ability.description = "In your hero phase, you can declare that this model is going to pray for Sigmar to transport his warriors across the battlefield. If you do so, pick the PRIEST or a friendly unit within 3\" and roll a dice. On a roll of 3 or more the prayer is heard – remove the chosen unit from the table and set it up again anywhere on the table up to 24\" from its previous position and more than 9\" from the enemy. It may not move in the subsequent movement phase.";
    data.extraAbilities.stormcastEternalsPrayerAbjuration.ability.description = "In your hero phase, you can declare that this model will pray for Sigmar to banish vile sorceries. If you do so roll a dice. On a roll of 2 or more the prayer is heard – the PRIEST can attempt to unbind a single spell in each enemy hero phase until your next hero phase in the same manner as a Wizard.";
    data.extraAbilities.stormcastEternalsPrayerGodKingSAspect.ability.description = "In your hero phase, you can declare that this model is going to pray for Sigmar to open the conduit between them and show forth his true glory. If you do so roll a dice. On a roll of 4 or more the prayer is heard – enemy units within 12\" of the PRIEST add 2 to any battleshock tests they have to take until your next hero phase. On a roll of 1 the strain of attempting to channel such might is too great, and the PRIEST suffers a mortal wound.";

    // Dracoth
    data.extraAbilities.stormcastEternalsDracothTraitLithLimbed.ability.description = "This steed is renowned for its swiftness, and is capable of putting on an incredible burst of speed to take its rider to the foe. This HERO adds 1 to their Move characteristic.";
    data.extraAbilities.stormcastEternalsDracothTraitSavageLoyalty.ability.description = "This mount feels a keen hatred for the enemies of Order, and fights through the most horrendous injuries to wreak its vengeance before death claims it. Roll a dice if this HERO is slain in the combat phase. On a roll of 4 or more, the unit that slew them suffers D3 mortal wounds.";
    data.extraAbilities.stormcastEternalsDracothTraitKeenClawed.ability.description = "Sharp of claw and of fang, this steed is undaunted by the thickest armour. Any wound rolls of 6 or more in the combat phase for this HERO’s mount are resolved with a Rend characteristic of -3.";
    data.extraAbilities.stormcastEternalsDracothTraitDrakeKin.ability.description = "The Dracoth that bonds with your Stormcast Eternal is a doughty creature, hardy enough to withstand the worst that their enemies can throw at them without once faltering. If this HERO suffers damage from an attack with a Damage characteristic greater than 1, roll a dice. On a 5 or more the HERO only suffers 1 Damage from the attack.";
    data.extraAbilities.stormcastEternalsDracothTraitThunderCaller.ability.description = "Lightning crackles in the maw of this ferocious beast even when it is at rest. On the battlefield, it unleashes its storm breath with great thunderclaps. This HERO’s Dracoth’s Storm Breath ability has a range of 16\" rather than 12\".";
    data.extraAbilities.stormcastEternalsDracothTraitPackHunter.ability.description = "Like the hero that rides it to battle, this Dracoth is stronger when working in concert with its brethren than when it strikes alone at the enemies of Order. Add 2 to the Attacks characteristic of this HERO’s Dracoth’s Claws and Fangs if there is another friendly model riding a Dracoth within 6\".";
}

export function overrideStormcast(data: DataStoreImpl):void {
    addBoxes(data);
    fixBattalions(data);
    fixUnits(data);
    addExtraAbilities(data);
}