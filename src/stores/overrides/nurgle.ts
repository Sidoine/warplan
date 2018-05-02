import { DataStoreImpl } from "../imported-data";
import { Unit, Ability, Attack } from "../units";

function addBoxes(data: DataStoreImpl):void {
    data.boxes.push({
        id: data.serial++,
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
        id: data.serial++,
        name: "Putrid Blightkings",
        units: [
            { count: 5, models: [data.models.putridBlightkings] }
        ],
        price: 45
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
}

export function overrideNurgle(data: DataStoreImpl):void {
    addBoxes(data);
    fixUnits(data);
}