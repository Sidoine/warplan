import { DataStoreImpl } from "../imported-data";
import { Battalion, Unit, Attack, Ability, WeaponOption, WeaponOptionCategory, DamageColumn } from "../units";
import { setBaseWeaponOption, getWoundsForAbility6OnHitIsMortalWound, getWoundsForExtraAttack, getWoundsForAbilityReroll1OnHit, getWoundsForAbilityBonus1OnHit, mediumRate, frequentRate, rareRate, numberOfNeighborUnits, getWoundsForSpecialDamageIf6OnWound, getSavedWoundReroll1, enemyModelsInRange, getWoundsForExtraWoundsRollsOn6OnHit, numberOfModelsPerUnit } from "./tools";
import { getAttackDamage, getAttackDamageEx, getValue } from "../combat";

function addBoxes(data: DataStoreImpl):void {
    data.boxes.push({
        id: "startCollectingStormcastVanguard",
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
        id: "warhammerAgeOfSigmarStarterSet",
        name: "Warhammer Age of Sigmar Starter Set",
        units: [
            { count: 1, models: [data.models.lordCelestantOnDracoth]},
            {count: 1, models: [data.models.lordRelictor]},
            {count: 3, models: [data.models.paladinRetributors]},
            {count: 10, models: [data.models.liberators]},
            {count: 3, models: [data.models.prosecutorsWithCelestialHammers]},
            {count: 1, models: [data.models.mightyLordOfKhorne]},
            {count: 1, models: [data.models.bloodsecrator]},
            {count: 1, models: [data.models.khorgoraths]},
            {count: 5, models: [data.models.bloodWarriors]},
            {count: 20, models: [data.models.bloodreavers]}
        ],
        price: 126
    });
    data.boxes.push({
        id: "easyToBuildLiberators",
        name: "Easy to Build: Liberators",
        units: [{count: 3, models: [data.models.liberators]}],
        price: 12
    });
    data.boxes.push({
        id: "judicators",
        name: "Judicators",
        units: [
            { count: 10, models: [data.models.judicators] }
        ],
        price: 49
    });
    data.boxes.push({
        id: "knightVenator",
        name: "Kinght-Venator/Azyros",
        units: [
            { count: 1, models: [data.models.knightAzyros, data.models.knightVenator] }
        ],
        price: 33
    });
    data.boxes.push({
        id: "vanguardRaptors",
        name: "Vanguard-Raptors",
        units: [
            { count: 3, models: [data.models.vanguardRaptorsWithHurricaneCrossbows, data.models.vanguardRaptorsWithLongstrikeCrossbows] },
            { count: 3, models: [data.models.aetherwings] }
        ],
        price: 30
    });
    data.boxes.push({
        id: "lordAquilor",
        name: "Lord-Aquilor",
        units: [
            { count: 1, models: [data.models.lordAquilor] }
        ],
        price: 32.50
    });
    data.boxes.push({
        id: "stardrake",
        name: "Lord-Celestant on Stardrake/Drakesworn Templar",
        units: [{ count: 1, models: [data.models.lordCelestantOnStardrake, data.models.drakeswornTemplar]}],
        price: 120
    });
    data.boxes.push({
        id: "celestantPrime",
        name: "Celestant-Prime",
        units: [{count:1, models: [data.models.celestantPrime]}],
        price: 62
    });
    data.boxes.push({
        id: "dracothianGuard",
        name: "Dracothian Guard",
        units: [{count: 2, models: [data.models.fulminators, data.models.tempestors, data.models.concussors, data.models.desolators]}],
        price: 55
    });
    data.boxes.push({
        id: "paladins",
        name: "Paladins",
        units: [{count: 5, models: [data.models.paladinDecimators, data.models.paladinProtectors, data.models.paladinRetributors]}],
        price: 46
    });
    data.boxes.push({
        id: "easyToBuildRetributors",
        name: "Easy to Build: Retributors",
        units: [{count: 2, models: [data.models.paladinRetributors]}],
        price: 12
    });
    data.boxes.push({
        id: "prosecutors",
        name: "Prosecutors",
        units: [{count: 6, models: [data.models.prosecutorsWithCelestialHammers, data.models.prosecutorsWithStormcallJavelins]}],
        price: 59
    });
    data.boxes.push({
        id: "vanguardHunters",
        name: "Vanguard-Hunters",
        units: [{count: 10, models: [data.models.vanguardHunters]}],
        price: 50
    });
    data.boxes.push({
        id: "liberators",
        name: "Liberators",
        units: [{count: 10, models: [data.models.liberators]}],
        price: 49
    });
    data.boxes.push({
        id: "vanguardPalladors",
        name: "Vanguard-Palladors",
        units: [{count: 3, models: [data.models.vanguardPalladors]}],
        price: 45
    });
    data.boxes.push({
        id: "vandusHammerhand",
        name: "Vandus Hammerhand",
        units: [{count: 1, models: [data.models.vandusHammerhand]}],
        price: 32.50
    });
    data.boxes.push({
        id: "lordCastellant",
        name: "Lord-Castellant/Lord-Veritant",
        units: [{count:1, models: [data.models.lordCastellant, data.models.lordVeritant]}, {count:1, models: [data.models.gryphHound]}],
        price: 30
    });
    data.boxes.push({
        id: "lordCelestant",
        name: "Lord-Celestant",
        units: [{count: 1, models: [data.models.lordCelestant]}],
        price: 26
    });
    data.boxes.push({
        id: "lordCelestantGavrielSureheart",
        name: "Lord-Celestant Gavriel Sureheart",
        units: [{count: 1, models: [data.models.gavrielSureheart]}],
        price: 25
    });
    data.boxes.push({
        id: "lordOrdinatorVorrusStarstrike",
        name: "Lord-Ordinator Vorrus Starstrike",
        units: [{count: 1, models: [data.models.lordOrdinator]}],
        price: 25
    });
    data.boxes.push({
        id: "knightVexillor",
        name: "Knight-Vexillor",
        units: [{count: 1, models: [data.models.knightVexillor]}],
        price: 23
    });
    data.boxes.push({
        id: "gryphHounds",
        name: "Gryph-hounds",
        units: [{count: 6, models: [data.models.gryphHound]}],
        price: 20
    });
    data.boxes.push({
        id: "knightHeraldor",
        name: "Knight-Heraldor",
        units: [{count:1, models: [data.models.knightHeraldor]}],
        price: 19.5
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
                getWounds: (models, melee, attack) => attack === dracothsClawsAndFangs ? getWoundsForSpecialDamageIf6OnWound(attack, 3.5) : 0
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
            lordRelictor.warscroll = "https://www.games-workshop.com/resources/PDF/Downloads//ENG_Lord_Relictor.pdf";

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
            unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Vanguard-Raptors-with-Longstrike-Crossbows-en.pdf";

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
            unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Vanguard-Raptors-with-Longstrike-Crossbows-en.pdf";
            unit.keywords.push("CELESTIAL", "AETHERWINGS");

            const beakAndClaws: Attack = { melee: true, name: "Beak and Claws", range: "1", attacks: "2", toHit: "4+", toWound: "3+", damage: "1"};
            const fly: Ability = { name: "Fly", description: "Aetherwings can fly."};
            const watchfulGuardians: Ability = { name: "Watchful Guardians", description: "Aetherwings form close bonds with Vanguard-Raptors, and defend them from their enemies even as the Vanguard-Raptors destroy threats from afar. At the beginning of your opponent’s charge phase, any friendly unit of Aetherwings within 12\" of a friendly unit of Vanguard-Raptors can immediately move. Roll two dice – the Aetherwings can move up to this distance in inches. They can retreat with this move, but cannot run, and this move cannot take them further than 12\" from the Vanguard-Raptors."}
            const swoopingHunters: Ability = { name: "Swooping Hunters", description: "Units of Aetherwings can retreat and charge in the same turn."};
            unit.attacks = [beakAndClaws];
            unit.abilities = [fly, watchfulGuardians, swoopingHunters];
        }

        {
            const unit: Unit = data.units.prosecutorsWithCelestialHammers;
            unit.move = 12;
            unit.bravery = 6;
            unit.save = "4+";
            unit.keywords.push("CELESTIAL", "HUMAN", "ANGELOS", "PROSECUTORS");
            const celestialHammers: Attack = { melee: false, name: "Celestial Hammers", range: "18", attacks: "2", toHit: "4+", toWound: "4+", damage: "1"};
            const celestialHammersMelee: Attack = { melee: true, name: "Celestial Hammers", range: "1", attacks: "2", toHit: "3+", toWound: "3+", damage: "1" };
            const grandaxe: Attack = { melee: true, name: "Grandaxe", range: "1", toHit: "3+", toWound: "3+", rend: "-1", damage: "1"};
            const grandblade: Attack = {melee: true, name: "Grandblade", range: "1", attacks: "2", toHit: "3+", toWound: "4+", rend: "-1", damage: "2"};
            const grandhammer: Attack = { melee: true, name: "Grandhammer", range: "1", attacks: "2", toHit: "4+", toWound: "3+", rend: "-1", damage: "2"};
            const fly: Ability = { name: "Fly", description: "Prosecutors can fly."};
            const prosecutorPrime: Ability = {
                name: "Prosecutor-Prime",
                description: "The leader of this unit is the Prosecutor-Prime. Trained for brutal melee, this model makes 3 attacks rather than 2 in the combat phase.",
                getWounds: (models, melee, attack) => melee && attack ? getWoundsForExtraAttack(attack, 1) : 0
            };
            const heraldsOfRightouness: Ability = { name: "Heralds of Righteousness", description: "Roll 3 dice instead of 2 when determining the charge move for this unit. In addition, you can declare a charge with this unit if it is within 18\" of the enemy rather than 12\"."};
            const cleavingBlow: Ability = {
                name: "Cleaving Blow",
                description: "When a model attacks with a Grandaxe, select a target unit and make one attack against it for each model it has within range.",
                getWounds: (models, melee, attack) => attack === grandaxe ? models * getAttackDamageEx(attack, { attacks: enemyModelsInRange.toString() }) : 0
            };
            const pairedCelestialHammers: Ability = {
                name: "Paired Celestial Hammers",
                description: "You can re-roll hit rolls of 1 for models armed with more than one Celestial Hammer.",
                getWounds: (models, melee, attack) => attack === celestialHammers ? getWoundsForAbilityReroll1OnHit(models, attack) : 0
            };
            const sigmariteShield: Ability = {
                name: "Sigmarite Shields",
                description: "You can re-roll save rolls of 1 for this unit if any models from the unit are carrying Sigmarite Shields.",
                getSavedWounds: getSavedWoundReroll1
            };
            unit.abilities = [sigmariteShield, fly, prosecutorPrime, heraldsOfRightouness];
            unit.attacks = [celestialHammers];
            const pairOfCelestialHammers: WeaponOption = {
                id: "celestialHammerDual",
                abilities: [pairedCelestialHammers],
                attacks: [celestialHammers, celestialHammersMelee],
                name: "Pair of Celestial Hammers"
            }
            const celestialHammerAndShield: WeaponOption = {
                id: "celestialHammerAndShield",
                name: "Celestial Hammer and Sigmarite Shield",
                abilities: [sigmariteShield],
                attacks: [celestialHammers, celestialHammersMelee]
            }
            const grandaxeOption: WeaponOption = {
                id: "grandaxe",
                name: "Grandaxe",
                abilities: [cleavingBlow],
                attacks: [grandaxe]
            }
            const grandbladeOption: WeaponOption = {
                id: "grandblade",
                name: "Grandblade",
                attacks: [grandblade]
            }
            const grandhammerOption: WeaponOption = {
                id: "grandhammer",
                name: "Grandhammer",
                attacks: [grandhammer]
            }
            unit.weaponOptions = [{
                options: [pairOfCelestialHammers, celestialHammerAndShield]
            }, {
                maxCount: 1,
                options: [grandbladeOption, grandhammerOption, grandaxeOption]
            }];
        }

        {
            const unit: Unit = data.units.vanguardHunters;
            unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Vanguard-Hunters-en.pdf";
            unit.move = 6;
            unit.save = "4+";
            unit.bravery = 7;
            unit.keywords.push("CELESTIAL", "HUMAN", "ANGELOS", "VANGUARD-HUNTERS");
            
            const bolstormPistol: Attack = { melee: false, name: "Boltstorm Pistol", range: "9", attacks: "2", toHit: "3+", toWound: "4+", damage: "1" };
            const shockHandaxe: Attack = { melee: true, name: "Shock Handaxe", range: "1", attacks: "2", toHit: "4+", toWound: "3+", damage: "1" };
            const stormSabre: Attack = { melee: true, name: "Storm Sabre", range: "1", attacks: "2", toHit: "3+", toWound: "4+", damage: "1" };
            const hunterPrime: Ability = {
                name: "Hunter-Prime",
                description: "The leader of this unit is the Hunter-Prime. A Hunter-Prime makes 3 attacks rather than 2.",
                getWounds: (models, melee, attack) => attack != null ? getWoundsForExtraAttack(attack, 1) : 0
            }
            const astralCompass: Ability = {
                name: "Astral Compass",
                description: "The Astral Compass shows the Vanguard-Hunters the best route to strike at their foe, no matter the terrain or the distance they must travel. Instead of setting up a unit of Vanguard-Hunters that includes any models with an Astral Compass on the battlefield, you can place it to one side and say that it is set up in pursuit. In any of your movement phases, you can summon the Vanguard-Hunters to strike at the enemy’s flanks. When you do so, set up the unit wholly within 6\" of any edge of the battlefield, more than 7\" from the enemy. This is their move for that movement phase."
            }
            const tirelessHunters: Ability = {
                name: "Tireless Hunters",
                description: "Vanguard-Hunters can run and shoot in the same turn."
            }
            unit.attacks = [bolstormPistol];
            unit.abilities = [hunterPrime, astralCompass, tirelessHunters];
            const shockHandaxeOption: WeaponOption = { attacks: [shockHandaxe], id: "shockHandaxe", name: "Shock Handaxe" };
            const stormSabreOption: WeaponOption = { attacks: [stormSabre], id: "stormSabre", name: "Storm Sabre" };
            unit.weaponOptions = [{ options: [shockHandaxeOption, stormSabreOption] }];
        }

        {
            const unit: Unit = data.units.vanguardPalladors;
            unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Vanguard-Palladors-en.pdf";
            unit.keywords.push("CELESTIAL", "HUMAN", "ANGELOS", "VANGUARD-PALLADORS");
            unit.move = 12;
            unit.save = "4+";
            unit.bravery = 7;
            unit.wounds = 5;

            const bolstormPistol: Attack = { melee: false, name: "Boltstorm Pistol", range: "9", attacks: "2", toHit: "3+", toWound: "4+", damage: "1" };
            const starstrikeJavelin: Attack = { melee: false, name: "Starstrike Javelin", range: "18", attacks: "1", toHit: "3+", toWound: "3+", rend: "-1", damage: "1" };
            const shockHandaxe: Attack = { melee: true, name: "Shock Handaxe", range: "1", attacks: "2", toHit: "3+", toWound: "3+", damage: "1" };
            const starstrikeJavelinMelee: Attack = { melee: true, name: "Starstrike Javelin", range: "2", attacks: "1", toHit: "4+", toWound: "3+", rend: "-1", damage: "1" };
            const beakAndClaws: Attack = { melee: true, name: "Gryph-charger's Razor Beak and Claws", range: "1", attacks: "3", toHit: "3+", toWound: "3+", rend: "-2", damage: "1" };
            const palladorPrime: Ability = {
                name: "Pallador-Prime",
                description: "The leader of this unit is the Pallador-Prime. A Pallador-Prime can bear a Lunar Blade in addition to this model’s other weapons."
            };
            const aetherealStrike: Ability = {
                name: "Aethereal Strike",
                description: "Any rolls to hit of 6 or more with the Gryph-charger’s Razor Beak and Claws cause a mortal wound instead of their normal damage.",
                getWounds: (models, melee, attack) => attack === beakAndClaws ? getWoundsForAbility6OnHitIsMortalWound(models, attack, 1) : 0
            };
            const rideTheWindsAetheric: Ability = {
                name: "Ride the Winds Aetheric",
                description: "Gryph-chargers can move faster than the eye can follow along the winds aetheric, though the shifting of these winds makes such movement perilous at times. In their movement phase, a unit of Vanguard-Palladors can choose to Ride the Winds Aetheric instead of moving normally. If they do so, choose the direction in which the unit will move, and then roll six dice. The unit can move up to a number of inches equal to the result in the direction chosen, moving over terrain and other models as if they could fly. They must end their movement more than 3\" from enemy models – if this is impossible, they cannot move at all. The Vanguard-Palladors cannot run or charge in a turn in which they Ride the Winds Aetheric."
            };
            const lunarBlade: Ability = {
                name: "Lunar Blade",
                description: "The Pallador-Prime can attack with their Lunar Blade in addition to attacking with their Shock Handaxe or Starstrike Javelin in the combat phase. If they do so, choose an enemy unit within 1\" and roll a dice. On a roll of 2 or more that unit suffers a mortal wound.",
                getWounds: (models, melee, attack) => melee && attack === undefined ? 5 / 6 : 0
            };
            const shockHandaxeOption: WeaponOption = {
                id: "shockHandaxe",
                name: "Shock Handaxe",
                attacks: [shockHandaxe]
            };
            const starstrikeJavelinOption: WeaponOption = {
                id: "starstrikeJavelin",
                name: "Starstrike Javelin",
                attacks: [starstrikeJavelin, starstrikeJavelinMelee]
            };
            unit.weaponOptions = [{ options: [shockHandaxeOption, starstrikeJavelinOption] }];
            unit.abilities = [palladorPrime, aetherealStrike, rideTheWindsAetheric, lunarBlade];
            unit.attacks = [bolstormPistol, beakAndClaws];
        }

        {
            const unit: Unit = data.units.vanguardRaptorsWithHurricaneCrossbows;
            unit.warscroll = "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Vanguard-Raptors-with-Longstrike-Crossbows-en.pdf";
            unit.keywords.push("CELESTIAL", "HUMAN", "JUSTICAR", "VANGUARD-RAPTORS");
            unit.move = 5;
            unit.save = "4+";
            unit.bravery = 7;
            unit.wounds = 2;

            const hurricaneCrossbow: Attack = { melee: false, name: "Hurricane Crossbow", range: "18", attacks: "6", toHit: "4+", toWound: "4+", damage: "1" };
            const heavyStock: Attack = { melee: true, name: "Heavy Stock", range: "1", attacks: "1", toHit: "4+", toWound: "4+", damage: "1" };
            const raptorPrime: Ability = {
                name: "Raptor-Prime",
                description: "The leader of this unit is the Raptor-Prime. A Raptor-Prime’s weapons have a To Hit characteristic of 3+.",
                getWounds: (models, melee, attack) => attack !== undefined ? getAttackDamageEx(attack, { toHit: "3+" }) - getAttackDamage(attack) : 0
            };
            const rapidFire: Ability = {
                name: "Rapid Fire",
                description: "If a unit of Vanguard-Raptors does not move in the movement phase, then you can add 3 to the Attacks characteristic of any Hurricane Crossbows the unit uses in the shooting phase of the same turn."
            };
            const suppressingFire: Ability = {
                name: "Suppressing Fire",
                description: "If a unit of Vanguard-Raptors with Hurricane Crossbows directs all of its shooting attacks at a single unit in the shooting phase, that unit must subtract 2 from any charge move they make until your next hero phase."
            };
            unit.abilities = [rapidFire, raptorPrime, suppressingFire];
            unit.attacks = [hurricaneCrossbow, heavyStock];
        }

        {
            const unit: Unit = data.units.neaveBlacktalon;
            unit.warscroll = "https://www.games-workshop.com/resources/PDF/Downloads/Neave_Blacktalon_ENG.pdf";
            unit.keywords.push("CELESTIAL", "HUMAN", "KNIGHT-ZEPHYROS", "NEAVE BLACKTALON");
            unit.move = 6;
            unit.save = "3+";
            unit.bravery = 9;
            unit.wounds = 6;
            const bolstormPistol: Attack = { melee: false, name: "Bolstorm Pistol", range: "9", attacks: "2", toHit: "3+", toWound: "3+", damage: "1" };
            const theWhirlwindAxes: Attack = { melee: true, name: "The Whirlwind Axes", range: "1", attacks: "7", toHit: "3+", toWound: "3+", rend: "-1", damage: "1" };
            const lightningFastStrike: Ability = {
                name: "Lightning-fast Strikes",
                description: "For each hit roll of 6 or more made for Neave Blacktalon in the combat phase, she may immediately make another attack. ",
                getWounds: (models, melee, attack) => attack === theWhirlwindAxes ? 1/6 * getAttackDamage(attack) : 0
            }
            const tirelessHunter: Ability = {
                name: "Tireless Hunter",
                description: "Neave Blacktalon can run and shoot in the same turn. "
            };
            const nemesis: Ability = {
                name: "Nemesis",
                description: "Any of Neave Blacktalon's attacks that target a Hero have a Damage of 2 rather than 1.",
                getWounds: (models, melee, attack) => attack !== undefined ? getAttackDamage(attack) * rareRate : 0
            };
            const windrider: Ability = {
                name: "Windrider",
                description: "When a friendly Stormcast Eternal unit within 6\" uses their Ride the Winds Aetheric ability, Neave Blacktalon can follow in their wake; she can immediately move in the same manner up to the distance moved by the unit she is following, provided that she ends this move within 6\" of them and more than 3\" from any enemy models. If she moves in this way, Neave Blacktalon may not run or charge in that turn. "
            };
            unit.attacks = [bolstormPistol, theWhirlwindAxes];
            unit.abilities = [lightningFastStrike, tirelessHunter, nemesis, windrider];
        }
    
        {
            const unit: Unit = data.units.celestantPrime;
            unit.keywords.push("HUMAN", "CELESTANT-PRIME");
            unit.move = 12;
            unit.save = "3+";
            unit.bravery = 10;
            unit.wounds = 8;

            const cometStrikeSceptre: Attack = { melee: false, name: "The Cometstrike Sceptre", range: "24" };
            const ghalMaraz: Attack = { melee: true, name: "Ghal Maraz, the Hammer of Sigmar", range: "2", attacks: "2", toHit: "3+", toWound: "2+", rend: "-3", damage: "3" };
            const fly: Ability = { name: "Fly", description: "The Celestant-Prime can fly." };
            const cometStrikeSceptreAbility: Ability = {
                name: "Cometstrike Sceptre",
                description: "In your shooting phase, the Celestant-Prime can hold the Cometstrike Sceptre aloft to seize a comet from the heavens, then send it crashing down amid the enemy. If he does, pick a point on the battlefield within range and roll a dice. Each unit within that many inches of that point suffers D3 mortal wounds.",
                getWounds: (models, melee, attack) => !melee && attack === undefined ? 3 * 2 : 0
            }
            const retributionFromOnHigh: Ability = {
                name: "Retribution from On High",
                description: "Instead of setting up the Celestant-Prime on the battlefield, you must place him to one side and say that he is set up in the Celestial Realm. In each of your movement phases you must declare whether he will strike from the Heavens or remain in the Celestial Realm imbuing Ghal Maraz with additional energies. For each battle round that he remains in the Celestial Realm, add 2 to the Attacks characteristic of Ghal Maraz until the end of the battle. When the Celestant-Prime strikes from the Heavens, set him up on the battlefield more than 9\" from any enemy models. This is his move for that movement phase. Until your next hero phase, subtract 2 from the Bravery of all models in any enemy unit within 12\" of him.",
                getWounds: (models, melee, attack) => attack === ghalMaraz ? getAttackDamage(attack) * 2 : 0
            };
            const orrery: Ability = {
                name: "Orrery of Celestial Fates",
                description: "A storm of celestial energy swirls around the Celestant-Prime’s feet, granting him mystic insights that aid him in battle. Once per turn, you can change the roll of one dice for the Celestant-Prime to a roll of your choice, before applying any modifiers."
            };
            unit.attacks = [cometStrikeSceptre, ghalMaraz];
            unit.abilities = [fly, cometStrikeSceptreAbility, retributionFromOnHigh, orrery];
        }

        {
            const unit: Unit = data.units.concussors;
            unit.keywords.push("CELESTIAL", "HUMAN", "DRACOTHIAN GUARD", "CONCUSSORS");
            unit.move = 10;
            unit.save = "3+";
            unit.bravery = 7;
            unit.wounds = 5;
            const stormBlast: Attack = { melee: false, name: "Storm Blast", range: "12", attacks: "1", toHit: "4+" };
            const lightningHammer: Attack = { melee: true, name: "Lightning Hammer", range: "1", attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "2" };
            const dracothsClawsAndFangs: Attack = { melee: true, name: "Dracoth's Claws and Fangs", range: "1", attacks: "3", toHit: "3+", toWound: '3+', rend: "-1", damage: "1" };
            const thunderstrike: Ability = {
                name: "Thunderstrike",
                description: "If the result of a hit roll for this unit’s Lightning Hammers is 6 or more, the attack inflicts a mortal wound in addition to any other damage it causes. If a unit suffers any mortal wounds in this way, it is stunned for the rest of the combat phase and cannot pile in before it attacks. ",
                getWounds: (models, melee, attack) => attack === lightningHammer ? 1/6 * models : 0
            }
            const intolerableDamage: Ability = {
                name: "Intolerable Damage",
                description: "If the wound roll for a Dracoth’s Claws and Fangs is 6 or more, then that attack causes D6 Damage rather than 1. ",
                getWounds: (models, melee, attack) => attack === dracothsClawsAndFangs ? getWoundsForSpecialDamageIf6OnWound(attack, 3.5) : 0
            }
            const sigmariteShields: Ability = {
                name: "Sigmarite Shields",
                description: " You can re-roll save rolls of 1 for this unit",
                getSavedWounds: getSavedWoundReroll1
            }
            const stormBlastAbility: Ability = {
                name: "Storm Blast",
                description: "Dracoths can spit devastating bolts of lightning which blast open amid the enemy ranks, leaving warriors maimed and reeling. When a unit is hit by a Storm Blast, do not make a wound roll; instead, the unit suffers D3 mortal wounds.",
                getWounds: (models, melee, attack) => attack === stormBlast ? models * 3/6 * 2 : 0
            }
            unit.attacks = [stormBlast, lightningHammer, dracothsClawsAndFangs];
            unit.abilities = [thunderstrike, intolerableDamage, sigmariteShields, stormBlastAbility];
        }
        {
            const unit: Unit = data.units.desolators;
            unit.keywords.push("CELESTIAL", "HUMAN", "DRACOTHIAN GUARD", "DESOLATORS");
            unit.move = 10;
            unit.save = "3+";
            unit.bravery = 7;
            unit.wounds = 5;
            const stormBlast: Attack = { melee: false, name: "Storm Blast", range: "12", attacks: "1", toHit: "4+" };
            const thunderaxe: Attack = { melee: true, name: "Thunderaxe", range: "2", attacks: "3", toHit: "4+", toWound: "3+", rend: "-1", damage: "2" };
            const dracothsClawsAndFangs: Attack = { melee: true, name: "Dracoth's Claws and Fangs", range: "1", attacks: "3", toHit: "3+", toWound: '3+', rend: "-1", damage: "1" };
            const thunderstrike: Ability = {
                name: "Fury of the Storm",
                description: " Lightning crackles between the heads of the Desolators’ axes when they attack as one. A Desolator makes 4 attacks with its Thunderaxe rather than 3 if there are at least 4 models in its unit, or 6 attacks if there are at least 6 models in its unit."
            }
            const intolerableDamage: Ability = {
                name: "Intolerable Damage",
                description: "If the wound roll for a Dracoth’s Claws and Fangs is 6 or more, then that attack causes D6 Damage rather than 1. ",
                getWounds: (models, melee, attack) => attack === dracothsClawsAndFangs ? getWoundsForSpecialDamageIf6OnWound(attack, 3.5) : 0
            }
            const sigmariteShields: Ability = {
                name: "Sigmarite Shields",
                description: " You can re-roll save rolls of 1 for this unit",
                getSavedWounds: getSavedWoundReroll1
            }
            const stormBlastAbility: Ability = {
                name: "Storm Blast",
                description: "Dracoths can spit devastating bolts of lightning which blast open amid the enemy ranks, leaving warriors maimed and reeling. When a unit is hit by a Storm Blast, do not make a wound roll; instead, the unit suffers D3 mortal wounds.",
                getWounds: (models, melee, attack) => attack === stormBlast ? models * 3/6 * 2 : 0
            }
            unit.attacks = [stormBlast, thunderaxe, dracothsClawsAndFangs];
            unit.abilities = [thunderstrike, intolerableDamage, sigmariteShields, stormBlastAbility];
        }
    
        {
            const unit: Unit = data.units.fulminators;
            unit.keywords.push("CELESTIAL", "HUMAN", "DRACOTHIAN GUARD", "FULMINATORS");
            unit.move = 10;
            unit.save = "3+";
            unit.bravery = 7;
            unit.wounds = 5;
            const lightningSurge: Attack = { melee: false, name: "Lightning Surge", range: "6", attacks: "D3", toHit: "3+" };
            const stormstrikeGlaive: Attack = { melee: true, name: "Stormstrike Glaive", range: "2", attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "1" };
            const dracothsClawsAndFangs: Attack = { melee: true, name: "Dracoth's Claws and Fangs", range: "1", attacks: "3", toHit: "3+", toWound: '3+', rend: "-1", damage: "1" };
            const glaiveWall: Ability = {
                name: "Glaivewall",
                description: "Fulminators swing their glaives in great arcs as they advance, projecting a barrier of Azyrite force. Add 1 to the result of any save rolls you make for this unit during the shooting phase. ",
            }
            const impalingStrikes: Ability = {
                name: "Impaling Strikes",
                description: "This unit’s Stormstrike Glaives cause 3 Damage rather than 1 if it charged in the same turn.",
                getWounds: (models, melee, attack) => attack === stormstrikeGlaive ? getAttackDamage(attack) * 2 * models * rareRate : 0
            }
            const intolerableDamage: Ability = {
                name: "Intolerable Damage",
                description: "If the wound roll for a Dracoth’s Claws and Fangs is 6 or more, then that attack causes D6 Damage rather than 1. ",
                getWounds: (models, melee, attack) => attack === dracothsClawsAndFangs ? getWoundsForSpecialDamageIf6OnWound(attack, 3.5) : 0
            }
            const sigmariteShields: Ability = {
                name: "Sigmarite Shields",
                description: " You can re-roll save rolls of 1 for this unit",
                getSavedWounds: getSavedWoundReroll1
            }
            const lightningSurgeAbility: Ability = {
                name: "Lightning Surge",
                description: "Some Dracoths, trained for line breaking, spit a crackling torrent of energy at enemies that come too close. When a unit is hit by a Lightning Surge, do not make a wound roll; instead, the unit suffers a mortal wound, or two mortal wounds if it is within 3\" of the attacking model",
                getWounds: (models, melee, attack) => attack === lightningSurge ? getValue("D3") * 4/6 * 2 * models : 0
            }
            unit.attacks = [lightningSurge, stormstrikeGlaive, dracothsClawsAndFangs];
            unit.abilities = [glaiveWall, impalingStrikes, intolerableDamage, sigmariteShields, lightningSurgeAbility];
        }
        
        {
            const unit: Unit = data.units.tempestors;
            unit.keywords.push("CELESTIAL", "HUMAN", "DRACOTHIAN GUARD", "TEMPESTORS");
            unit.move = 10;
            unit.save = "3+";
            unit.bravery = 7;
            unit.wounds = 5;
            const lightningSurge: Attack = { melee: false, name: "Lightning Surge", range: "6", attacks: "D3", toHit: "3+" };
            const volleystormCrossbow: Attack = { melee: false, name: "Volleystorm Crossbow", range: "12", attacks: "4", toHit: "3+", toWound: "4+", damage: "1" };
            const warblade: Attack = { melee: true, name: "Warblade", range: "1", attacks: "3", toHit: "3+", toWound: "4+", damage: "1" };
            const dracothsClawsAndFangs: Attack = { melee: true, name: "Dracoth's Claws and Fangs", range: "1", attacks: "3", toHit: "3+", toWound: '3+', rend: "-1", damage: "1" };
            const disruptiveFire: Ability = {
                name: "Disruptive Fire",
                description: "At the start of your shooting phase, you can declare that this unit will concentrate its fire on an enemy unit within 12\". All models from this unit must attack that unit with their Volleystorm Crossbows. Until your next hero phase, your opponent must subtract 1 from the result of any hit rolls made for that unit.",
            }
            const intolerableDamage: Ability = {
                name: "Intolerable Damage",
                description: "If the wound roll for a Dracoth’s Claws and Fangs is 6 or more, then that attack causes D6 Damage rather than 1. ",
                getWounds: (models, melee, attack) => attack === dracothsClawsAndFangs ? getWoundsForSpecialDamageIf6OnWound(attack, 3.5) : 0
            }
            const sigmariteShields: Ability = {
                name: "Sigmarite Shields",
                description: " You can re-roll save rolls of 1 for this unit",
                getSavedWounds: getSavedWoundReroll1
            }
            const lightningSurgeAbility: Ability = {
                name: "Lightning Surge",
                description: "Some Dracoths, trained for line breaking, spit a crackling torrent of energy at enemies that come too close. When a unit is hit by a Lightning Surge, do not make a wound roll; instead, the unit suffers a mortal wound, or two mortal wounds if it is within 3\" of the attacking model",
                getWounds: (models, melee, attack) => attack === lightningSurge ? getValue("D3") * 4/6 * 2 * models : 0
            }
            unit.attacks = [lightningSurge, volleystormCrossbow, warblade, dracothsClawsAndFangs];
            unit.abilities = [disruptiveFire, intolerableDamage, sigmariteShields, lightningSurgeAbility];
        }
        
        {
            const unit: Unit = data.units.knightAzyros;
            unit.move = 12;
            unit.wounds = 5;
            unit.save = "3+";
            unit.bravery = 9;
            unit.keywords.push("CELESTIAL", "HUMAN", "KNIGHT-AZYROS");

            const starblade: Attack = { melee: true, name: "Starblade", range: "1", attacks: "4", toHit: "3+", toWound: "3+", rend: "-1", damage: "1"};
            const fly: Ability = { name: "Fly", description: "A Knight-Azyros can fly"};
            const illuminatorOfTheLost: Ability = { 
                name: "Illuminator of the Lost", 
                description: "In the shooting phase, you can re-roll hit rolls of 1 for attacks made against enemy units that are within 10\" of a Knight-Azyros."
            };
            const theLightOfSigmar: Ability = { 
                name: "The Light of Sigmar",
                description: "Once per battle, in your hero phase, you can declare that this model will unleash the searing light of its Celestial Beacon. If you do so, it cannot move, charge or pile in during your turn. However, each enemy unit within 8\" of the Knight-Azyros when the searing light is unleashed suffers D3 mortal wounds as they are blinded and driven from the battlefield. The light is anathema to Chao  units, so they suffer D6 mortal wounds instead. "
            }
            unit.attacks = [starblade];
            unit.abilities = [illuminatorOfTheLost, theLightOfSigmar, fly];
        }

        {
            const moveTable: DamageColumn = { name: "Move", values: ['12"', '11"', '10"', '8"', '6"'] };
            const greatClawsTable: DamageColumn = { name: "Great Claws", values: ['3+', '3+', '4+', '4+', '5+']};
            const cavernousJawsTable: DamageColumn = { name: "Cavernous Jaws", values: [3, 2, 2, 1, 1]};
            const unit: Unit = data.units.lordCelestantOnStardrake;
            unit.keywords.push("CELESTIAL", "HUMAN", "STARDRAKE", "MONSTER", "LORD-CELESTANT");
            unit.save = "3+";
            unit.move = moveTable;
            unit.bravery = 9;

            const celestineHammer: Attack = { melee: true, name: "Celestine Hammer", range: "2", attacks: "3", toHit: "3+", toWound: "2+", rend: "-1", damage: "D3"};
            const stormboundBlade: Attack = { melee: true, name: "Stormbound Blade", range: "2", attacks: "3", toHit: "3+", toWound: "4+", rend: "-1", damage: "2"};
            const stardrakesGreatClaws: Attack = {melee: true, name: "Stardrake's Great Claws", range: "1", attacks: "4", toHit: greatClawsTable, toWound: "3+", rend: "-1", damage: "D3"};
            const fly: Ability = { name: "Fly", description: "A Lord-Celestant on Stardrake can fly. "};
            const inescapableVengance: Ability = {
                name: "Inescapable Vengeance",
                description: "If this model has made a charge move this turn, it can make D3 extra attacks with its Celestine Hammer or Stormbound Blade.",
                getWounds: (models, melee, attack) => attack === celestineHammer || attack === stormboundBlade ? 2 * getAttackDamage(attack) * rareRate : 0
            };
            const sigmariteThundershield: Ability = {
                name: "Sigmarite Thundershield",
                description: "You can re-roll save rolls of 1 for this model. If the re-rolled save is successful, the shield unleashes a deafening peal and each enemy unit within 3\" suffers a mortal wound.",
                getSavedWounds: getSavedWoundReroll1
            }
            const stormboundBladeAbility: Ability = {
                name: "Stormbound Blade",
                description: " If the result of any hit roll for a Stormbound Blade is 6 or more, the target is wracked with the fury of the storm. Make three wound rolls against the target rather than one. ",
                getWounds: (models, melee, attack) => attack === stormboundBlade ? models * getWoundsForExtraWoundsRollsOn6OnHit(attack, 2) : 0
            }
            const cavernousJawsAbility: Ability = {
                name: "Cavernous Jaws",
                description: "After this model piles in, but before it attacks, pick an enemy model within 3\" and roll a dice. If the result is greater than that model’s Wounds characteristic, it is swallowed whole and slain. You can do this as many times as shown on the damage table above.",
                getWounds: (models, melee, attack) => melee && !attack ? 4 : 0// Random value
            }
            const sweepingTail: Ability = {
                name: "Sweeping Tail",
                description: "After this model has made all of its attacks in the combat phase, roll a dice for each enemy unit within 3\". If the result is less than the number of models in the unit, it suffers D3 mortal wounds. ",
                getWounds: (models, melee, attack) => melee && !attack ? numberOfNeighborUnits * numberOfModelsPerUnit / 6 * 2 : 0
            }
            const lordOfTheHeavens: Ability = {
                name: "Lord of The Heavens",
                description: `In your shooting phase, a Stardrake can either breathe a Roiling Thunderhead or call a Rain of Stars down from the heavens.
                
                Roiling Thunderhead: Pick an enemy unit to be engulfed in a furious storm cloud, then roll a dice for each of its models that is within 18" of the Stardrake and which it can see. For each result of 6, a bolt of lightning streaks out and the unit suffers a mortal wound.
                
                Rain of Stars: Roll a dice and choose that many enemy units on the battlefield, then roll a dice for each. On a result of 4 or more, the unit is struck by a fragment of a falling star and suffers D3 mortal wounds.`,
                getWounds: (models, melee, attack) => !melee && !attack ? Math.max(numberOfModelsPerUnit / 6, 3.5*0.5*2) / 2 : 0
            }
            const arcaneLineage: Ability = {
                name: "Arcane Lineage",
                description: "Each time a casting roll is made for a Wizard within 18\" of any Stardrakes in your army, you can choose to increase or decrease the result by 1."
            }
            const lordOfTheCelestialHost: Ability = {
                name: "Lord of the Celestial Host",
                description: "The Stardrake ridden by a Lord-Celestant is more than a mere mount; it is an intelligent and cunning hunter in its own right, a radiating beacon of power for its star-spawned kin. If a Lord-Celestant uses this ability, all Stardrakes, Dracothian Guard and Stormcast Eternal Heroes riding Dracoths in your army (including this one) are suffused with the power of Azyr. Until your next hero phase, you can re-roll failed wound rolls whenever those models attack with their Claws and Fangs or Great Claws. "
            }

            setBaseWeaponOption(unit, data.units.lordCelestantOnStardrake.baseWeaponOptions.celestineHammer, [ celestineHammer, stardrakesGreatClaws ], []);
            setBaseWeaponOption(unit, data.units.lordCelestantOnStardrake.baseWeaponOptions.stormboundBlade, [ stormboundBlade, stardrakesGreatClaws ], [stormboundBladeAbility]);

            unit.damageTable = {
                columns: [moveTable, greatClawsTable, cavernousJawsTable],
                ranges: [0, 5, 9, 12, 14]
            };            
            unit.attacks = [stardrakesGreatClaws];
            unit.abilities = [fly, inescapableVengance, sigmariteThundershield, cavernousJawsAbility, sweepingTail, lordOfTheHeavens, arcaneLineage];
            unit.commandAbilities = [lordOfTheCelestialHost];
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