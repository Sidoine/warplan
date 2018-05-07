import { DataStoreImpl } from "../imported-data";
import { Unit, Ability, Attack, DamageColumn } from "../units";

function addBoxes(data: DataStoreImpl):void {
    data.boxes.push({
        id: "startCollectingNurgleDaemons",
        name: "Start Collecting! Nurgle Daemons",
        units: [
            { count: 3, models: [data.models.nurglings] },
            { count: 10, models: [data.models.plaguebearers]},
            { count: 3, models: [data.models.plagueDrones]},
            { count: 1, models: [data.models.poxbringerHeraldOfNurgle] }
        ],
        price: 65
    });
    data.boxes.push({
        id: "putridBlightkings",
        name: "Putrid Blightkings",
        units: [
            { count: 5, models: [data.models.putridBlightkings] }
        ],
        price: 45
    });
    data.boxes.push({
        id: "lordOfBlights",
        name: "Lord of Blights",
        units: [
            { count: 1, models: [data.models.lordOfBlights] }
        ],
        price: 20
    });
    data.boxes.push({
        id: "greatUncleanOne",
        name: "Great Unclean One",
        units: [
            { count: 1, models: [data.models.greatUncleanOne] }
        ],
        price: 110
    });
    data.boxes.push({
        id: "beastOfNurgle",
        name: "Beast of Nurgle",
        units: [
            { count: 1, models: [data.models.beastsOfNurgle] }
        ],
        price: 32
    });
    data.boxes.push({
        id: "sloppityBilepiper",
        name: "Sloppity Bilepiper",
        units: [
            { count: 1, models: [data.models.sloppityBilepiperHeraldOfNurgle] }
        ],
        price: 20
    });
    data.boxes.push({
        id: "pusgoyleBlightlords",
        name: "Pusgoyle Blightlords",
        units: [
            { count: 2, models: [data.models.pusgoyleBlightlords] }
        ],
        price: 55
    });
    data.boxes.push({
        id: "spoilpoxScrivener",
        name: "Spoilpox Scrivener",
        units: [
            { count: 1, models: [data.models.spoilpoxScrivenerHeraldOfNurgle] }
        ],
        price: 20
    });
    data.boxes.push({
        id: "poxbringer",
        name: "Poxbringer",
        units: [
            { count: 1, models: [data.models.poxbringerHeraldOfNurgle] }
        ],
        price: 20
    });
    data.boxes.push({
        id: "plaguebearersOfNurgle",
        name: "Plaguebearers of Nurgle",
        units: [
            { count: 10, models: [data.models.plaguebearers] }
        ],
        price: 23
    });
    data.boxes.push({
        id: "plagueDronesOfNurgle",
        name: "Plague Drones of Nurgle",
        units: [
            { count: 3, models: [data.models.plagueDrones] }
        ],
        price: 45
    });
    data.boxes.push({
        id: "rotigus",
        name: "Rotigus",
        units: [
            { count: 1, models: [data.models.rotigus] }
        ],
        price: 110
    });
    data.boxes.push({
        id: "glottkin",
        name: "Glottkin",
        units: [
            { count: 1, models: [data.models.theGlottkin] }
        ],
        price: 86
    });
    data.boxes.push({
        id: "orghottsDaemonspew",
        name: "Orghotts Daemonspew",
        units: [
            { count: 1, models: [data.models.orghottsDaemonspew] }
        ],
        price: 60
    });
    data.boxes.push({
        id: "morbidexTwiceborn",
        name: "Morbidex Twiceborn",
        units: [
            { count: 1, models: [data.models.morbidexTwiceborn] }
        ],
        price: 60
    });
    data.boxes.push({
        id: "bloabRotspawned",
        name: "Bloab Rotspawned",
        units: [
            { count: 1, models: [data.models.bloabRotspawned] }
        ],
        price: 60
    });
    data.boxes.push({
        id: "lordOfAfflictions",
        name: "Lord of Afflictions",
        units: [
            { count: 1, models: [data.models.lordOfAfflictions, data.models.pusgoyleBlightlords] },
        ],
        price: 55
    });
    data.boxes.push({
        id: "horticulousSlimux",
        name: "Horticulous Slimux",
        units: [
            { count: 1, models: [data.models.horticulousSlimux] }
        ],
        price: 43
    });
    data.boxes.push({
        id: "epidemius",
        name: "Epidemius",
        units: [
            { count: 1, models: [data.models.epidemiusTallymanOfNurgle] }
        ],
        price: 39
    });
    data.boxes.push({
        id: "harbingerOfDecay",
        name: "Harbinger of Decay",
        units: [
            { count: 1, models: [data.models.harbingerOfDecay] }
        ],
        price: 31
    });
    data.boxes.push({
        id: "gutrotSprume",
        name: "Gutrot Sprume",
        units: [
            { count: 1, models: [data.models.gutrotSpume] }
        ],
        price: 21
    });
    data.boxes.push({
        id: "festus",
        name: "Festus The Leechlord",
        units: [
            { count: 1, models: [data.models.festusTheLeechlord] }
        ],
        price: 16
    });
    data.boxes.push({
        id: "lordOfPlagues",
        name: "Lord of Plagues",
        units: [
            { count: 1, models: [data.models.lordOfPlagues] }
        ],
        price: 12
    });
}

function fixUnits(data: DataStoreImpl):void {
    {
        const plaguebearers: Unit = data.units.plaguebearers;
        const disgustinglyResilient: Ability = { name: "Disgustingly Resilient", description: "Roll a dice each time you allocate a wound or mortal wound to a model in this unit. On a 5+ the wound is negated."};
        const cloudOfFlies: Ability = { name: "Cloud of Flies", description: "Substract 1 from the hit rolls of attacks that target this unit in the shooting phase. If this unit containes 20 or more models, subtract 2 from the hit rools of attacks that target this unit in the shooting phase, and 1 from the hit rolls of attacks that target this unit in the combat phase instead" };
        const plagueridden: Ability = { name: "Plagueridden", description: "The leader of this unit is a Plagueridden. Add 1 to the Attacks characteristic of a Plagueridden's Plaguesword." };
        const iconBearer: Ability = { name: "Icon Bearer", description: "Models in this unit can be Icon Bearers. If the unmodified roll is a 1 when making a battleshock test for a unit that includes any Icon Bearers, no models from the unit flee. Instead, D6 Plaguebearer models are added to the unit." };
        const pipers: Ability = { name: "Pipers", description: "Models in this unit can be Pipers. Re-roll battleshock rolls of 1 for enemy units while they are within 6\" of any Pipers."};
        const locusOfFecundity: Ability = { name: "Locus of Fecundity", description: "Re-roll save rolls of 1 for this unit while it is within 7\" of a friendly NURGLE DAEMON HERO."};

        plaguebearers.move = 4;
        plaguebearers.save = "5+";
        plaguebearers.wounds = 1;
        plaguebearers.bravery = 10;

        const plagueSwordAttack: Attack = { name: "Plaguesword", range: "1", attacks: "1", toHit: "4+", toWound: "3+", damage: "1", melee: true };

        plaguebearers.attacks = [plagueSwordAttack];

        plaguebearers.abilities = [plagueridden, iconBearer, pipers, disgustinglyResilient, cloudOfFlies, locusOfFecundity];
    }

    {
        const nurglings: Unit = data.units.nurglings;

        const diseaseRiddenDemise: Ability = { name: "Disease-ridden Demise", description: "At the end of the combat phase, roll a dice for each enemy unit that was allocated any wounds caused by a unit of Nurglings in that combat phase. On a 2+ that unit suffers 1 mortal wound." };
        const endlessSwarm: Ability = { name: "Endless Swarm", description: "At the end of the battleshock phase, heal any wounds that have been allocated to this unit." };
        const hiddenInfestations: Ability = { name: "Hidden Infestations", description: "Instead of setting up this unit on the battlefield, you can place it to one side and say that it is set up as a hidden infestation of Nurglings. If you do so, at the end of your first movement phase, set up the unit anywhere on the battlefield so that it is in cover and more that 9\" from any enemy models."};

        nurglings.abilities = [diseaseRiddenDemise, endlessSwarm, hiddenInfestations];

        nurglings.move = 5;
        nurglings.wounds = 4;
        nurglings.bravery = 10;
        nurglings.save = "6+";

        const tinyRazorSharpTeeth: Attack = { name: "Tiny Razor-sharp Teeth", range: "1", melee: true, attacks: "5", toHit: "5+", toWound: "5+", damage: "1" };
        nurglings.attacks = [tinyRazorSharpTeeth];
    }

    {
        const plagueDrones: Unit = data.units.plagueDrones;

        plagueDrones.wounds = 5;
        plagueDrones.move = 8;
        plagueDrones.bravery = 10;
        plagueDrones.save = "5+";

        const fly: Ability = { name: "Fly", description: "Plague Drones can fly." };
        const plagueBringer = { name: "Plaguebringer", description: "The leader of this unit is a Plaguebringer. Add 1 to the Attacks characteristic of a Plaguebringer's Plaguesword."};
        const iconBearer: Ability = { name: "Icon Bearer", description: "Models in this unit can be Icon Bearers. If the unmodified roll is a 1 when making a battleshock test for a unit that includes any Icon Bearer, no models from the unit flee. Instead, 1 Plague Drone model is added to the unit." };
        const bellTollers: Ability = { name: "Bell Tollers", description: "Models in this unit can be Bell Tollers. Re-roll battleshock rolls of 1 for enemy units while they are within 6\" of any Bell Tollers."};
        const disgustinglyResilient: Ability = { name: "Disgustingly Resilient", description: "Roll a dice each time you allocate a wound or mortal wound to a model in this unit. On a 5+ the wound is negated."};
        const locusOfContagion: Ability = { name: "Locus of Contagion", description: "Add 1 to the Attacks characteristics of this unit's weapons while it is within 7\" of a friendly NURGLE DAEMON HERO."};

        plagueDrones.abilities = [fly, plagueBringer, iconBearer, bellTollers, disgustinglyResilient, locusOfContagion];

        const deathsHead: Attack = { name: "Death's Head", range: "14", attacks: "1", melee: false, toHit: "4+", toWound: "3+", damage: "1" };
        const plaguesword: Attack = { name: "Plaguesword", melee: true, range: "1", attacks: "1", toHit: "4+", toWound: "3+", damage: "1" };
        const venomousSting: Attack = { name: "Venomous Sting", melee: true, range: "1", attacks: "1", toHit: "4+", toWound: "3+", rend: "-1", damage: "D3" };

        const prehensileProboscis: Attack = { name: "Prehensile Proboscis", melee: true, range: "1", attacks: "3", toHit: "3+", toWound: "4+", damage: "1" };
        const foulMouthparts: Attack = { name: "Foul Mouthparts", melee: true, range: "1", attacks: "2", toHit: "3+", toWound: "3+", damage: "1" };
        
        plagueDrones.attacks = [deathsHead, plaguesword, venomousSting];

        plagueDrones.weaponOptions = [{
            options: [{
                name: "Prehensile Proboscis",
                id: "prehensileProboscis",
                attacks: [prehensileProboscis]
            },
            {
                name: "Foul Mouthparts",
                id: "foulMouthparts",
                attacks: [foulMouthparts]
            }]
        }];
    }

    { 
        const slimux: Unit = data.units.horticulousSlimux;

        slimux.wounds = 8;
        slimux.move = 5;
        slimux.save = "3+";
        slimux.bravery = 10;

        const disgustinglyResilient: Ability = { name: "Disgustingly Resilient", description: "Roll a dice each time you allocate a wound or mortal wound to a model in this unit. On a 5+ the wound is negated."};
        const acidicSlimeTrail: Ability = { name: "Acidic Slime Trail", description: "Roll a dice for each enemy that is within 3\" of this model immediately before this model makes a retreat move. On a 4+ that enemy unit suffers D3 mortal wounds."};
        const beastHandler: Ability = { name: "Beast Handler", description: "Re-roll failed charge rolls and hit rolls of 1 for friendly Beasts of Nurgle units while they are within 7\" of Horticulous Slimux."};
        const inDeathThereIsLife: Ability = { name: "In Death There is Life", description: "At the start of your hero phase, if any models (friend or foe) were slain in the last turn, you can heal 1 wound allocated to a friendly NURGLE DAEMON unit within 7\" of Horticulous Slimux." };
        const cultivating: Ability = { name: "Cultivating the Garden of Nurgle", description: "Once during the battle, at the start of your hero phase, you can set up a Feculent Gnarlmaw within 3\" of Horticulous Slimux and more than 1\" away from any other model or terrain feature." };

        slimux.abilities = [disgustinglyResilient, acidicSlimeTrail, beastHandler, inDeathThereIsLife, cultivating];

        const loppingShears: Attack = { name: "Lopping Shears", range: "1", melee: true, attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "D3" };
        const mulchAttack: Attack = { name: "Mulch's Slime-encrusted Jaws", range: "1", melee: true, attacks: "D3", toHit: "3+", toWound: "3+", rend: "-2", damage: "2" };

        slimux.attacks = [loppingShears, mulchAttack];
    }

    {
        const beast: Unit = data.units.beastsOfNurgle;

        beast.wounds = 7;
        beast.move = 5;
        beast.save = "5+";
        beast.bravery = 10;

        const disgustinglyResilient: Ability = { name: "Disgustingly Resilient", description: "Roll a dice each time you allocate a wound or mortal wound to a model in this unit. On a 5+ the wound is negated."};
        const acidicSlimeTrail: Ability = { name: "Acidic Slime Trail", description: "Roll a dice for each enemy that is within 3\" of this model immediately before this model makes a retreat move. On a 4+ that enemy unit suffers D3 mortal wounds."};
        const attentionSeekers: Ability = { name: "Attention Seekers", description: "This unit can charge in the same turn in which it ran or retreated." };
        const locusOfVirulence: Ability = { name: "Locus of Virulence", description: "Add 1 to the Damage characteristics of this unit's weapons while it is within 7\" of a friendly NURGLE DAEMON HERO." };

        beast.abilities = [disgustinglyResilient, acidicSlimeTrail, attentionSeekers, locusOfVirulence];

        const claws: Attack = { name: "Claws and Tentacles", range: "1", melee: true, attacks: "D6", toHit: "4+", toWound: "3+", damage: "1" };
        const slobberingTongue: Attack = { name: "Slobbering Tongue", range: "2", melee: true, attacks: "1", toHit: "3+", toWound: "3+", damage: "D3" };

        beast.attacks = [claws, slobberingTongue];
    }

    {
        const blightkings: Unit = data.units.putridBlightkings;

        blightkings.wounds = 4;
        blightkings.move = 4;
        blightkings.bravery = 8;
        blightkings.save = "4+";

        const blightLord: Ability = { name: "Blightlord", description: "The leader of this unit is a Blightlord. A Blightlord has a Wounds characteristic of 5." };
        const iconBearer: Ability = { name: "Icon Bearer", description: "Models in this unit may be Icon Bearers. Add 1 to this unit's Bravery characteristic while it includes any Icon Bearers." };
        const sonorousTocsin: Ability = { name: "Sonorous Tocsin", description: "Models in this unit may carry a Sonorous Tocsin. Add 1 to this unit's run and charge rolls whilst it includes any models carrying a Sonorous Tocsin." };
        const virulentDischarge: Ability = { name: "Virulent Discharge", description: "In your hero phase, roll a dice for each unit (friend or foe) that is within 3\" of any friendly units with this ability. On a 6+ that unit suffers D3 mortal wounds. If the unit has the NURGLE keyword, heal D3 wounds allocated to the unit instead." };
        const blightedWeapons: Ability = { name: "Blighted Weapons", description: "Each time you make a hit roll of 6+ for this unit's Blighted Weapons, that hit roll inflicts D6 instead of 1." };

        blightkings.abilities = [blightLord, iconBearer, sonorousTocsin, virulentDischarge, blightedWeapons];

        const blightedWeaponsAttack: Attack = { name: "Blighted Weapon", range: "1", melee: true, attacks: "3", toHit: "3+", toWound: "3+", damage: "1" };

        blightkings.attacks = [blightedWeaponsAttack];
    }

    {
        const lordOfBlight: Unit = data.units.lordOfBlights;

        lordOfBlight.wounds = 7;
        lordOfBlight.move = 4;
        lordOfBlight.bravery = 9;
        lordOfBlight.save = "4+";

        const munificentBounty: Ability = { name: "Munificent Bounty", description: "At the start of you shooting phase, you can pick 1 friendly Putrid Blightkings unit that is within 3\" of this model. That unit can shoot in that shooting phase using the Munificent Boutny Death's Head missile weapon shown above." };
        const verminShield: Ability = { name: "Vermid Shield", description: "In the combat phase, re-roll save rolls of 1 for this model." };
        const plagueOfFlies: Ability = { name: "Plague of Flies", description: "You can use this command ability in your hero phase. If you do, pick a friendly NURGLE unit within 21\" of it. Until your next hero phase, subtract 1 from the hit rolls of attacks that target that unit in the shooting phase. If the unit contains 20 or more models, subtract 2 from the hit rolls of attacks that target that unit in the shooting phase, and 1 from the hit rolls of attacks that target that unit in the combat phase instead." };

        lordOfBlight.commandAbilities = [plagueOfFlies];
        lordOfBlight.abilities = [munificentBounty, verminShield];

        const buboticHammer: Attack = { name: "Bubotic Hammer", range: "1", melee: true, attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "2" };
        const thriceRipenedDeathHead: Attack = { name: "Thrice-ripened Death's Head", range: "14", melee: false, attacks: "1", toHit: "3+", toWound: "3+", rend: "-3", damage: "D3" };        
        const munificientDeathHead: Attack = { name: "Munificent Bounty Death's Head", range: "14", melee: false, attacks: "1", toHit: "4+", toWound: "3+", damage: "1" };
        
        lordOfBlight.attacks = [buboticHammer, thriceRipenedDeathHead, munificientDeathHead];
    }

    {
        const uncleanOne: Unit = data.units.greatUncleanOne;

        const noxiousBileEffect: DamageColumn = { name: "Noxious Bile", values: ["2+", "3+", "3+", "4+", "5+"]};
        const plagueFlailEffect: DamageColumn = { name: "Plague Fail", values: ["2+", "3+", "3+", "4+", "4+"]};
        const massiveBileswordEffect: DamageColumn = {name: "Massive Bilesword", values: [3,3,2,2,1]};
        uncleanOne.damageTable = {
            ranges: [0, 4, 7, 10, 13],
            columns: [noxiousBileEffect, plagueFlailEffect, massiveBileswordEffect]
        }

        uncleanOne.move = 5;
        uncleanOne.wounds = 16;
        uncleanOne.save = "4+";
        uncleanOne.bravery = 10;

        const blubberAndBile: Ability = { name: "Blubber and Bile", description: "Roll a dice each time you allocate a wound or mortal wounds to this model. On a 5+ the wound is negated. In addition, if the roll is 6+ and it is the combat phase, the attacking unie suffers 1 mortal wounds after all of its attacks have been made." };
        const corpulentMass: Ability = { name: "Corpulent Mass", description: "In your hero phase, you can heal D3 wounds that have been allocated to this model" };
        const mountain: Ability = { name: "Mountain of Loathsome Flesh", description: "Roll a dice for each enemy unit that is within 1\" of this model after this model completes a charge move. On a 4+, the enemy unit suffers D3 mortal wounds." };
        const magic: Ability = { name: "Magic", description: "A Great Unclean One is a WIZARD. It can attempt to cast two spells in your hero phase, and attempt to unbind two spells in the enemy hero phase. It knows the Arcane Bolt, Mystic Shield and Plague Winds spells." };
        const plagueWind: Ability = { name: "Plague Wind", description: "Plague Wind has a casting value of 7. If successfully cast, pick a point on the battlefield within 14\" of the caster and draw an imaginary straight line between it and the closest part of the caster. Each unit (friend of foe) crossed by the center of the line suffers D3 mortal wounds. Units with the NURGLE keyword are instead invigorated by the Plague Wind; if it passes over them, heal D3 wounds that have been allocated to the unit." };
        
        uncleanOne.abilities = [blubberAndBile, corpulentMass, mountain, magic, plagueWind];
        
        // doomsday bell
        const reverberatingSummons: Ability = { name: "Reverberating Summons", description: "If a NURGLE unit begins its movement phase within 7\" of any models with a Doomsday Bell, add 3 to its Move characteristic until the end of the phase." };        
        const doomsdayBell: Attack = { name: "Doomsday Bell", range: "2", melee: true, attacks: "4", toHit: "4+", toWound: "3+", rend: "-1", damage: "1" };

        // bileblade
        const putridOffering: Ability = { name: "Putrid Offering", description: "If this model has a Bileblade and attempts to cast or unbind a spell, you can say that it is using the Bileblade to hook out a portion of its own rotting guts as an offering to Nurgle. If you do do so, this model immediatly suffers 1 mortal wound (which cannot be negated), but you can then add 1 to the casting or unbinding roll." };
        const bileblade: Attack = { name: "Bileblade", range: "2", melee: true, attacks: "3", toHit: "3+", toWound: "3+", rend: "-1", damage: "1" };
                
        const noxiousBile: Attack = { name: "Noxious Bile", melee: false, range: "7", attacks: "D6", toHit: "3+", toWound: noxiousBileEffect, rend: "-2", damage: "1" };
        const hostOfNurglings: Attack = { name: "Host of Nurglings", range: "1", melee: true, attacks: "3", toHit: "5+", toWound: "5+", damage: "1" };

        uncleanOne.attacks = [noxiousBile, hostOfNurglings];

        const plagueFlail: Attack = { name: "Plague Flail", range: "2", melee: true, attacks: "3", toHit: "3+", toWound: plagueFlailEffect, rend: "-1", damage: "2" };
        const massiveBilesword: Attack = { name: "Massive Bilesword", range: "2", melee: true, attacks: massiveBileswordEffect, toHit: "4+", toWound: "3", rend: "-2", damage: "3" };
    
        uncleanOne.weaponOptions = [{
            options: [{
                name: "Plague Flail",
                id: "plagueFlail",
                attacks: [plagueFlail]
            },
            {
                name: "Bileblade",
                id: "bileblade",
                attacks: [bileblade],
                abilities: [putridOffering]
            }]
        },
        {
            options: [{
                name: "Massive Bilesword",
                id: "massivebilesword",
                attacks: [massiveBilesword]
            },
            {
                name: "Doomsday Bell",
                id: "doomsdaybell",
                attacks: [doomsdayBell],
                abilities: [reverberatingSummons]
            }]
        }];
    }
}

export function overrideNurgle(data: DataStoreImpl):void {
    addBoxes(data);
    fixUnits(data);
}