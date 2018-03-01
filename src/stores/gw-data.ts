import * as fs from "fs";

interface Army {
    name: string,
    wounds?: string,
    desc?: string,
    points?: string
    models?: string;
    move?: string;
    save?: string;
    bravery?: string;
    units?: Army[];
    heroes?: Army[];
    isMonster?: boolean;
    isWarmachine?: boolean;
}

interface PoolArmy {
    heroes?: Army[];
    units?: Army[];
    monsters?: Army[];
    warmachines?: Army[];
    formations?: Army[];
}

function loadAllArmiesFaster() {
    const availablePoolArmies: {
        [key: string]: PoolArmy
    } = {} ;

    availablePoolArmies.AELVES = {
        heroes: [{
            name: "Mistweaver Saih",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Tenebrael Shard",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [],
        monsters: [],
        warmachines: [],
        formations: []
    },
    availablePoolArmies.ALEGUZZLERGARGANTS = {
        heroes: [],
        units: [],
        warmachines: [],
        monsters: [{
            name: "Aleguzzler Gargant",
            wounds: "12",
            desc: "",
            points: "1.5"
        }],
        formations: []
    }, availablePoolArmies.BEASTCLAWRAIDERS = {
        heroes: [{
            name: "Icebrow Hunter",
            wounds: "7",
            desc: "",
            points: "1"
        }, {
            name: "Frostlord on Stonehorn",
            wounds: "13",
            desc: "",
            points: "1"
        }, {
            name: "Frostlord on Thundertusk",
            wounds: "13",
            desc: "",
            points: "1"
        }, {
            name: "Huskard on Stonehorn",
            wounds: "12",
            desc: "",
            points: "1"
        }, {
            name: "Huskard on Thundertusk",
            wounds: "12",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Frost Sabres",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Mournfang Pack",
            wounds: "12",
            models: "2",
            desc: "",
            points: "1"
        }, {
            name: "Icefall Yhetees",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1"
        }],
        monsters: [{
            name: "Stonehorn Beastriders",
            wounds: "12",
            desc: "",
            points: "3"
        }, {
            name: "Thundertusk Beastriders",
            wounds: "12",
            desc: "",
            points: "3"
        }],
        formations: [{
            name: "Braggoth's Beast Hammer",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Olwyr Alfrostun",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Svard Alfrostun",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Eurlbad",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Torrbad",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Skal",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Alfrostun",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Jorlbad",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }]
    }, availablePoolArmies.SLAVESTODARKNESS = {
        heroes: [{
            name: "Darkoath Chieftain",
            wounds: "5",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Lord Of Chaos",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Chaos Lord On Daemonic Mount",
            wounds: "7",
            desc: "",
            points: "1"
        }, {
            name: "Chaos Lord On Manticore",
            wounds: "12",
            desc: "",
            points: "2.5"
        }, {
            name: "Chaos Sorcerer Lord",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Chaos Sorcerer Lord On Manticore",
            wounds: "12",
            desc: "Wizard",
            points: "3"
        }, {
            name: "Exalted Hero Of Chaos",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Slambo",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Daemon Prince",
            wounds: "8",
            desc: "",
            points: "1"
        }, {
            name: "Darkoath Warqueen",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Chaos Warriors",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Chaos Marauders",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Chaos Chariots",
            wounds: "7",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Chaos Marauder Horsemen",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Chaos Chosen",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Chaos Knights",
            wounds: "15",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Chaos Gorebeast Chariots",
            wounds: "8",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Chaos Warshrine",
            wounds: "12",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Chaos Spawn",
            wounds: "5",
            models: "1",
            desc: "",
            points: ".5"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Godsworn Champions of Ruin",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Godswrath Warband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Ruinbringer Warband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }]
    }, availablePoolArmies.BEASTMEN = {
        heroes: [{
            name: "Beastlord on Chariot",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Wargor Standard Bearer",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Centigor Warhoof",
            wounds: "5",
            desc: "",
            points: "1.5"
        }],
        units: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.BONESPLITTERZ = {
        heroes: [{
            name: "Savage Big Boss",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Maniak Weirdnob",
            wounds: "6",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Wardokk",
            wounds: "5",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Wurrgog Prophet",
            wounds: "6",
            desc: "Wizard",
            points: "1.5"
        }],
        units: [{
            name: "Savage Orruks",
            wounds: "20",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Savage Orruk Arrowboys",
            wounds: "20",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Savage Orruk Morboys",
            wounds: "20",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Savage Big Stabbas",
            wounds: "4",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Savage Boarboyz",
            wounds: "15",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Savage Boarboy Maniaks",
            wounds: "15",
            models: "5",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Kop Rukk",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Icebone Warclan",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Savage Warclan",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Kunnin' Rukk",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Drakkfoot Warclan",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Snaga Rukk",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Brutal Rukk",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Teef Rukk",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Bonegrinz Warclan",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }]
    }, availablePoolArmies.BRAYHERD = {
        heroes: [{
            name: "Beastlord",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Great Bray Shaman",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }],
        units: [{
            name: "Gors",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Bestigors",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Tuskgor Chariots",
            wounds: "6",
            models: "1",
            desc: "",
            points: ".75"
        }, {
            name: "Ungors",
            wounds: "20",
            models: "20",
            desc: "",
            points: "1.25"
        }, {
            name: "Ungor Raiders",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }],
        monsters: [],
        formations: [{
            name: "Wildstalker Brayherd",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }]
    }, availablePoolArmies.BRETONNIA = {
        heroes: [{
            name: "King on Hippogryph",
            wounds: "10",
            desc: "",
            points: "3.5"
        }, {
            name: "Enchantress",
            wounds: "5",
            desc: "Wizard",
            points: "2"
        }, {
            name: "Sacred Protector",
            wounds: "5",
            desc: "",
            points: "2.5"
        }, {
            name: "Bretonnian Lord",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Noble Champion",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Noble Standard Bearer",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Damsel",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }],
        units: [{
            name: "Knights Errant",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Knights Of The Realm",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Questing Knights",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Grail Knights",
            wounds: "10",
            models: "5",
            desc: "",
            points: "2"
        }, {
            name: "Pegasus Knights",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Battle Pilgrims",
            wounds: "6",
            models: "6",
            desc: "",
            points: "1"
        }, {
            name: "Men At Arms",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Peasant Bowmen",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Mounted Yeomen",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }],
        warmachines: [{
            name: "Field Trebuchet",
            wounds: "10",
            desc: "",
            points: "2.5"
        }],
        monsters: [],
        formations: []
    }, availablePoolArmies.DAEMONSOFCHAOS = {
        heroes: [{
            name: "Daemon Prince",
            wounds: "8",
            desc: "",
            points: "1.5"
        }, {
            name: "Be'Lakor, Chaos Daemon Prince",
            wounds: "8",
            desc: "Wizard",
            points: "3"
        }],
        units: [{
            name: "Furies",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }],
        warmachines: [],
        monsters: [{
            name: "Soul Grinder",
            wounds: "16",
            desc: "",
            points: "2"
        }],
        formations: []
    }, availablePoolArmies.CHAOSGARGANTS = {
        heroes: [],
        units: [],
        monsters: [{
            name: "Chaos Gargant",
            wounds: "12",
            desc: "",
            points: "2.5"
        }],
        formations: []
    }, availablePoolArmies.COLLEGIATEARCANE = {
        heroes: [{
            name: "Battlemage",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Battlemage On Griffon",
            wounds: "13",
            desc: "Wizard | Monster",
            points: "2.5"
        }, {
            name: "Celestial Hurricanum With Celestial Battlemage",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "4"
        }, {
            name: "Luminark Of Hysh With White Battlemage",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "4.5"
        }],
        units: [],
        warmachines: [],
        monsters: [{
            name: "Celestial Hurricanum",
            wounds: "11",
            desc: "",
            points: "3.5"
        }, {
            name: "Luminark Of Hysh",
            wounds: "11",
            desc: "",
            points: "3"
        }],
        formations: [{
            name: "War Council",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.DARKLINGCOVENS = {
        heroes: [{
            name: "Sorceress",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Sorceress On Black Dragon",
            wounds: "14",
            desc: "Wizard | Monster",
            points: "4"
        }],
        units: [{
            name: "Dreadspears",
            wounds: "20",
            models: "20",
            desc: "",
            points: "1.25"
        }, {
            name: "Bleakswords",
            wounds: "20",
            models: "20",
            desc: "",
            points: "1.25"
        }, {
            name: "Darkshards",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Black Guard",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Executioners",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }],
        monsters: [],
        warmachines: [],
        formations: [{
            name: "Thrall Warhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.DAUGHTERSOFKHAINE = {
        heroes: [{
            name: "Death Hag",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Cauldron Of Blood",
            wounds: "13",
            models: "1",
            desc: "",
            points: "2.5"
        }],
        units: [{
            name: "Doomfire Warlocks",
            wounds: "10",
            models: "5",
            desc: "Wizard",
            points: "2"
        }, {
            name: "Sisters Of Slaughter",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Bloodwrack Medusae",
            wounds: "5",
            models: "1",
            desc: "",
            points: ".5"
        }, {
            name: "Bloodwrack Shrine",
            wounds: "13",
            models: "1",
            desc: "",
            points: "2.5"
        }, {
            name: "Witch Aelves",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }],
        monsters: [],
        warmachines: [],
        formations: [{
            name: "Bloodwrack Sisterhood",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.DEADWALKERS = {
        heroes: [],
        units: [{
            name: "Zombies",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Dire Wolves",
            wounds: "10",
            models: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Corpse Cart",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.DEATHLORDS = {
        heroes: [{
            name: "Nagash Supreme Lord Of The Undead",
            wounds: "16",
            desc: "Wizard | Monster",
            points: "12"
        }, {
            name: "Arkhan The Black Mortarch of Sacrament",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "3.5"
        }, {
            name: "Mannfred Mortarch Of Night",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "4"
        }, {
            name: "Neferata Mortarch Of Blood",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "3.5"
        }],
        units: [{
            name: "Morghast Harbingers",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Morghast Archai",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.DEATHMAGES = {
        heroes: [{
            name: "Necromancer",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }],
        units: [],
        warmachines: [],
        monsters: [{
            name: "Mortis Engine",
            wounds: "12",
            models: "1",
            desc: "",
            points: "2"
        }],
        formations: []
    }, availablePoolArmies.DEATHRATTLE = {
        heroes: [{
            name: "Wight King with Baleful Tomb Blade",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Wight King with Black Axe",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Skeleton Warriors",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Grave Guard",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Black Knights",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "The Sepulchral Guard",
            wounds: "7",
            models: "7",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Legion of Death",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }]
    }, availablePoolArmies.DEVOTEDOFSIGMAR = {
        heroes: [{
            name: "Warrior Priest",
            wounds: "5",
            desc: "Priest",
            points: "1"
        }, {
            name: "Excelsior Warpriest",
            wounds: "5",
            desc: "Priest",
            points: "1"
        }, {
            name: "Witch Hunter",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "War Altar Of Sigmar",
            wounds: "11",
            desc: "Priest | Monster",
            points: "3"
        }],
        units: [{
            name: "Flagellants",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Pilgrimage of Wrath",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.DISPOSSESSED = {
        heroes: [{
            name: "Runelord",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Unforged",
            wounds: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Warden King",
            wounds: "5",
            desc: "",
            points: ".5"
        }],
        units: [{
            name: "Hammerers",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Ironbreakers",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Irondrakes",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Longbeards",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Warriors",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Quarrellers",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Thunderers",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }],
        monsters: [],
        warmachines: [],
        formations: [{
            name: "Grudgebound War Throng",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }]
    }, availablePoolArmies.DWARFS = {
        heroes: [{
            name: "Warden King on Throne of Power",
            wounds: "8",
            desc: "",
            points: "2.5"
        }, {
            name: "Runelord on Anvil of Doom",
            wounds: "8",
            desc: "",
            points: "1.5"
        }, {
            name: "Apprentice Runesmith",
            wounds: "3",
            desc: "",
            points: ".5"
        }, {
            name: "Far-Ranger",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Thane with Battle Standard",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Miners",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Slayers",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }],
        monsters: [],
        warmachines: [{
            name: "Duardin Bolt Thrower",
            wounds: "7",
            desc: "",
            points: "1.5"
        }, {
            name: "Flame Cannon",
            wounds: "7",
            desc: "",
            points: "3"
        }, {
            name: "Grudge Thrower",
            wounds: "7",
            desc: "",
            points: "2.5"
        }],
        formations: []
    }, availablePoolArmies.ELDRITCHCOUNCIL = {
        heroes: [{
            name: "Archmage On Dragon",
            wounds: "14",
            desc: "Monster",
            points: "4"
        }, {
            name: "Archmage",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Loremaster",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Drakeseer",
            wounds: "14",
            desc: "",
            points: "1.5"
        }],
        units: [{
            name: "Swordmasters",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.EMPIRE = {
        heroes: [{
            name: "Huntmarshal",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Engineer On Mechanical Steed",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Battlemage on Pegasus",
            wounds: "5",
            desc: "Priest",
            points: "1"
        }],
        units: [{
            name: "Knights of Order",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }],
        monsters: [],
        warmachines: [{
            name: "Greatcannon",
            wounds: "4",
            desc: "",
            points: "2"
        }, {
            name: "Field Mortar",
            wounds: "4",
            desc: "",
            points: "2"
        }],
        formations: []
    }, availablePoolArmies.EVERCHOSEN = {
        heroes: [{
            name: "Archaon",
            wounds: "20",
            desc: "Monster | Wizard",
            points: "6.5"
        }, {
            name: "Gaunt Summoner of Tzeentch",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Gaunt Summoner and Chaos Familiars",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }],
        units: [{
            name: "Varanguard",
            wounds: "5",
            models: "1",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Overlords of Chaos",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Bloodmarked Warband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Plaguetouched Warband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Fatesworn Warband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Pleasurebound Warband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Archaon's Grand Host",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }]
    }, availablePoolArmies.EXILES = {
        heroes: [{
            name: "Dreadlord",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Dreadlord On Drakespawn",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Sorceress On Drakespawn",
            wounds: "6",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Beastmaster On Manticore",
            wounds: "10",
            desc: "Monster",
            points: "2"
        }, {
            name: "Master With Battle Standard",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Sorceress on Dark Pegasus",
            wounds: "6",
            desc: "Wizard",
            points: "2.5"
        }],
        units: [{
            name: "Shades",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }],
        monsters: [],
        warmachines: [{
            name: "Reaper Bolt Thrower",
            wounds: "6",
            desc: "",
            points: "1.5"
        }],
        formations: []
    }, availablePoolArmies.FIREBELLIES = {
        heroes: [{
            name: "Firebelly",
            wounds: "7",
            desc: "Wizard",
            points: "1"
        }],
        units: [],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.FLESHEATERCOURTS = {
        heroes: [{
            name: "Abhorrant Ghoul King",
            wounds: "6",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Abhorrant Ghoul King on Terrorgheist",
            wounds: "14",
            desc: "Wizard | Monster",
            points: "4"
        }, {
            name: "Abhorrant Ghoul King on Zombie Dragon",
            wounds: "14",
            desc: "Wizard | Monster",
            points: "4"
        }, {
            name: "Crypt Ghast Courtier",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Crypt Haunter Courtier",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Crypt Infernal Courtier",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Varghulf Courtier",
            wounds: "8",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Crypt Ghouls",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Crypt Horrors",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Crypt Flayers",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }],
        monsters: [{
            name: "Terrorgheist",
            wounds: "14",
            desc: "",
            points: "3"
        }, {
            name: "Zombie Dragon",
            wounds: "14",
            desc: "",
            points: "3.5"
        }],
        formations: [{
            name: "Abattoir",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Attendants at Court",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Deadwatch",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Flesh-eater Court",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Ghoul Patrol",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "King's Ghouls",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Royal Family",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Royal Menagerie",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Royal Mordants",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.FREEPEOPLES = {
        heroes: [{
            name: "Freeguild General",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Freeguild General On Griffon",
            wounds: "13",
            desc: "Monster",
            points: "3"
        }],
        units: [{
            name: "Demigryph Knights",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Freeguild Crossbowmen",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Freeguild Handgunners",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Freeguild Archers",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Freeguild Greatswords",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Freeguild Pistoliers",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Freeguild Outriders",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Freeguild Guard",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }],
        monsters: [],
        warmachines: [],
        formations: [{
            name: "Freeguild Regiment",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.FYRESLAYERS = {
        heroes: [{
            name: "Auric Runemaster",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Battlesmith",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Grimwrath Berzerker",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Auric Runesmiter",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Auric Runesmiter on Magmadroth",
            wounds: "12",
            desc: "Monster",
            points: "2.5"
        }, {
            name: "Auric Runeson",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Auric Runeson on Magmadroth",
            wounds: "12",
            desc: "Monster",
            points: "2.5"
        }, {
            name: "Auric Runefather",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Auric Runefather on Magmadroth",
            wounds: "12",
            desc: "Monster",
            points: "3"
        }, {
            name: "Doomseeker",
            wounds: "5",
            desc: "Monster",
            points: "3"
        }, {
            name: "Fjul-Grimnir",
            wounds: "6",
            desc: "",
            points: "3"
        }],
        units: [{
            name: "Auric Hearthguard",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Hearthguard Berzerkers",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Vulkite Berzerkers",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "The Chosen Axes",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Lords of the Lodge",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Warrior Kinband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Forge Brethren",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Grand Fyrd",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Vostarg Lodge",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Greyfyrd Lodge",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }]
    }, availablePoolArmies.GROTS = {
        heroes: [{
            name: "Gitmob Grot Shaman",
            wounds: "4",
            desc: "Wizard",
            points: "1"
        }],
        units: [{
            name: "Gitmob Grots",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Grot Wolf Riders",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Grot Wolf Chariots",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Nasty Skulkers",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Snotlings",
            wounds: "8",
            models: "2",
            desc: "",
            points: ".5"
        }, {
            name: "Snotling Pump Wagons",
            wounds: "4",
            models: "1",
            desc: "",
            points: "1"
        }],
        warmachines: [{
            name: "Grot Spear Chukka",
            wounds: "7",
            desc: "",
            points: "1"
        }, {
            name: "Grot Rock Lobber",
            wounds: "9",
            desc: "",
            points: "1.5"
        }, {
            name: "Doom Diver Catapult",
            wounds: "9",
            desc: "",
            points: "1.5"
        }],
        monsters: [],
        formations: []
    }, availablePoolArmies.GUTBUSTERS = {
        heroes: [{
            name: "Tyrant",
            wounds: "8",
            desc: "",
            points: "1"
        }, {
            name: "Butcher",
            wounds: "7",
            desc: "Wizard",
            points: "1"
        }],
        units: [{
            name: "Ogors",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Ironguts",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Leadbelchers",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Gorgers",
            wounds: "5",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Ironblaster",
            wounds: "9",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Grot Scraplauncher",
            wounds: "9",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Grots",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }],
        monsters: [],
        formations: []
    }, availablePoolArmies.HIGHELVES = {
        heroes: [{
            name: "Seawarden on Foot",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Highborn Spearmen",
            wounds: "15",
            models: "15",
            desc: "",
            points: ".75"
        }, {
            name: "Highborn Archers",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Highborn Silver Helms",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Great Eagles",
            wounds: "4",
            models: "1",
            desc: "",
            points: ".5"
        }],
        warmachines: [{
            name: "Highborn Repeater Bolt Thrower",
            wounds: "6",
            desc: "",
            points: "1.5"
        }],
        monsters: [],
        formations: []
    }, availablePoolArmies.IRONJAWZ = {
        heroes: [{
            name: "Gordrakk The Fist of Gork",
            wounds: "15",
            desc: "",
            points: "5"
        }, {
            name: "Megaboss on Maw-Krusha",
            wounds: "14",
            desc: "",
            points: "4.5"
        }, {
            name: "Orruk Megaboss",
            wounds: "7",
            desc: "",
            points: "1.5"
        }, {
            name: "Orruk Warchanter",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Orruk Weirdnob Shaman",
            wounds: "6",
            desc: "Wizard",
            points: "1.5"
        }],
        units: [{
            name: "Orruk Ardboys",
            wounds: "20",
            models: "10",
            desc: "",
            points: "2"
        }, {
            name: "Orruk Brutes",
            wounds: "15",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Orruk Gore Gruntas",
            wounds: "15",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Ironskull's Boyz",
            wounds: "8",
            models: "4",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Ardfist",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Brawl",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Brute Fist",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Gorefist",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Ironfist",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Weirdfist",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Bloodtoofs",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Ironsunz",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }]
    }, availablePoolArmies.IRONWELDARSONAL = {
        heroes: [{
            name: "Gunmaster",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Cogsmith",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [],
        warmachines: [{
            name: "Gyrocopters",
            wounds: "4",
            desc: "",
            points: ".5"
        }, {
            name: "Gyrobombers",
            wounds: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Steam Tank",
            wounds: "12",
            desc: "",
            points: "3.5"
        }, {
            name: "Cannon",
            wounds: "4",
            desc: "",
            points: "2"
        }, {
            name: "Organ Gun",
            wounds: "4",
            desc: "",
            points: "2"
        }, {
            name: "Helblaster Volley Gun",
            wounds: "4",
            desc: "",
            points: "2"
        }, {
            name: "Helstorm Rocket Battery",
            wounds: "4",
            desc: "",
            points: "2"
        }],
        monsters: [],
        formations: [{
            name: "Artillery Detachment",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.KHARADRONOVERLORDS = {
        heroes: [{
            name: "Aether-Khemist",
            wounds: "5",
            desc: "",
            points: "1",
            move: "4",
            save: "4+",
            bravery: "7"
        }, {
            name: "Aetheric Navigator",
            wounds: "5",
            desc: "",
            points: "1",
            move: "4",
            save: "3+",
            bravery: "7"
        }, {
            name: "Arkanaut Admiral",
            wounds: "6",
            desc: "",
            points: "1",
            move: "4",
            save: "3+",
            bravery: "8"
        }, {
            name: "Brokk Grungsson",
            wounds: "8",
            desc: "",
            points: "1",
            move: "12",
            save: "3+",
            bravery: "8"
        }, {
            name: "Endrinmaster",
            wounds: "6",
            desc: "",
            points: "1",
            move: "4",
            save: "4+",
            bravery: "7"
        }],
        units: [{
            name: "Arkanaut Company",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Grundstok Thunderers",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Endrinriggers",
            wounds: "6",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Skywardens",
            wounds: "6",
            models: "3",
            desc: "",
            points: "1"
        }],
        warmachines: [{
            name: "Arkanaut Frigate",
            wounds: "14",
            desc: "",
            points: ".5"
        }, {
            name: "Arkanaut Ironclad",
            wounds: "18",
            desc: "",
            points: ".5"
        }, {
            name: "Grundstok Gunhauler",
            wounds: "10",
            desc: "",
            points: ".5"
        }],
        monsters: [],
        formations: [{
            name: "Aetherstrike Force",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Iron Sky Squadron",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Iron Sky Command",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Grundstok Escort Wing",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Grand Armada",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }]
    }, availablePoolArmies.KHORNEBLOODBOUND = {
        heroes: [{
            name: "Mighty Lord Of Khorne",
            wounds: "6",
            desc: "",
            points: "1.5"
        }, {
            name: "Khorgos Khul",
            wounds: "6",
            desc: "",
            points: "1.5"
        }, {
            name: "Bloodsecrator",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Bloodstoker",
            wounds: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Skullgrinder",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Skarr Bloodwrath",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Valkia The Bloody",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Scyla Anfingrimm",
            wounds: "8",
            desc: "Monster",
            points: "1"
        }, {
            name: "Lord Of Khorne On Juggernaut",
            wounds: "8",
            desc: "",
            points: "1.5"
        }, {
            name: "Slaughterpriest",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Slaughterpriest with Hackblade and Wrathhammer",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Exalted Deathbringer",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Exalted Deathbringer with Impaling Spear",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Aspiring Deathbringer",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Aspiring Deathbringer with Goreaxe and Skullhammer",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Skaarac the Bloodborn",
            wounds: "16",
            desc: "",
            points: "4"
        }],
        units: [{
            name: "Blood Warriors",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Wrathmongers",
            wounds: "15",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Bloodreavers",
            wounds: "20",
            models: "20",
            desc: "",
            points: "1.25"
        }, {
            name: "Khorgoraths",
            wounds: "8",
            models: "1",
            desc: "Monster",
            points: "1.5"
        }, {
            name: "Skullreapers",
            wounds: "15",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Mighty Skullcrushers",
            wounds: "15",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Garrek's Reavers",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Bloodbound Warhorde",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Brass Stampede",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Dark Feast",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Red Headsmen",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Skulltake",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "The Gorechosen",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Bloodbound Warband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Bloodmarked Warband",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Bloodforged",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "The Goretide",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "The Skullfiend Tribe",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Slaughterborn",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Gore Pilgrims",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }]
    }, availablePoolArmies.KHORNEDAEMONS = {
        heroes: [{
            name: "Bloodthirster Of Insensate Rage",
            wounds: "14",
            desc: "Monster",
            points: "2.5"
        }, {
            name: "Bloodthirster Of Unfettered Fury",
            wounds: "14",
            desc: "Monster",
            points: "2.5"
        }, {
            name: "Wrath Of Khorne Bloodthirster",
            wounds: "14",
            desc: "Monster",
            points: "3"
        }, {
            name: "Skarbrand",
            wounds: "14",
            desc: "Monster",
            points: "3.5"
        }, {
            name: "Skulltaker",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Bloodmaster, Herald of Khorne",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Skullmaster, Herald of Khorne",
            wounds: "6",
            desc: "",
            points: "1.5"
        }, {
            name: "Blood Throne",
            wounds: "7",
            desc: "",
            points: "1"
        }, {
            name: "Karanak",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Daemon Prince of Khorne",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Exalted Greater Daemon of Khorne",
            wounds: "20",
            desc: "",
            points: "2"
        }],
        units: [{
            name: "Bloodletters",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Bloodcrushers",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Flesh Hounds",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Skull Cannons",
            wounds: "7",
            models: "1",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Blood Host of Khorne",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Blood Hunt",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "The Bloodlords",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Bloodthunder Stampede",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Charnel Host",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Council of Blood",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Daemon Legion of Khorne",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Gorethunder Cohort",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Murderhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "The Reapers of Vengeance",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Skullseeker Host",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.LEGIONOFAZGORH = {
        heroes: [{
            name: "Drazhoath The Ashen",
            wounds: "13",
            desc: "Wizard | Monster",
            points: "3"
        }, {
            name: "Infernal Guard Castellan",
            wounds: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Infernal Guard Battle Standard Bearer",
            wounds: "4",
            desc: "",
            points: ".5"
        }, {
            name: "Daemonsmith",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Bull Centaur Taur'ruk",
            wounds: "7",
            desc: "",
            points: "1.5"
        }, {
            name: "Shar'tor the Executioner",
            wounds: "8",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Infernal Guard Ironsworn",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Infernal Guard Fireglaives",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "K'Daai Fireborn",
            wounds: "9",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Bull Centaur Renders",
            wounds: "15",
            models: "3",
            desc: "",
            points: "1.5"
        }],
        warmachines: [{
            name: "Iron Daemon War Engine",
            wounds: "11",
            desc: "",
            points: "2"
        }, {
            name: "Skullcracker War Engine",
            wounds: "11",
            desc: "",
            points: "2"
        }, {
            name: "Deathshrieker Rocket Launcher",
            wounds: "6",
            desc: "",
            points: "1.5"
        }, {
            name: "Dreadquake Mortar",
            wounds: "10",
            desc: "",
            points: "2"
        }, {
            name: "Magma Cannon",
            wounds: "6",
            desc: "",
            points: "2"
        }],
        monsters: [{
            name: "Chaos Siege Gargant",
            wounds: "12",
            desc: "",
            points: "2"
        }],
        formations: [{
            name: "Blackshard Warhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Hashut's Wrath Artillery Train",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }]
    }, availablePoolArmies.LEGIONSOFNAGASH = {
        heroes: [{
            name: "Nagash Supreme Lord Of The Undead",
            wounds: "16",
            desc: "Wizard | Monster",
            points: "12"
        }, {
            name: "Arkhan The Black Mortarch of Sacrament",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "3.5"
        }, {
            name: "Mannfred Mortarch Of Night",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "4"
        }, {
            name: "Neferata Mortarch Of Blood",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "3.5"
        }, {
            name: "Necromancer",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Cairn Wraith",
            wounds: "4",
            desc: "",
            points: "1"
        }, {
            name: "Tomb Banshee",
            wounds: "4",
            desc: "",
            points: "1"
        }, {
            name: "Vampire Lord",
            wounds: "5",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Vampire Lord On Zombie Dragon",
            wounds: "14",
            desc: "Wizard",
            points: "4.5"
        }, {
            name: "Prince Vhordrai",
            wounds: "14",
            desc: "Wizard",
            points: "4.5"
        }, {
            name: "Coven Throne",
            wounds: "12",
            desc: "Wizard",
            points: "3"
        }, {
            name: "Bloodseeker Palanquin",
            wounds: "12",
            desc: "Wizard",
            points: "3"
        }, {
            name: "Wight King with Baleful Tomb Blade",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Wight King with Black Axe",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Zombies",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Dire Wolves",
            wounds: "10",
            models: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Corpse Cart",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Morghast Harbingers",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Morghast Archai",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Skeleton Warriors",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Grave Guard",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Black Knights",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Spirit Hosts",
            wounds: "9",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Hexwraiths",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Vargheists",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Blood Knights",
            wounds: "15",
            models: "5",
            desc: "",
            points: "2.5"
        }, {
            name: "Fell Bats",
            wounds: "9",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Bat Swarms",
            wounds: "15",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Black Coach",
            wounds: "7",
            models: "1",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [{
            name: "Mortis Engine",
            wounds: "12",
            models: "1",
            desc: "",
            points: "2"
        }, {
            name: "Terrorgheist",
            wounds: "14",
            desc: "",
            points: "3"
        }, {
            name: "Zombie Dragon",
            wounds: "14",
            desc: "",
            points: "3.5"
        }],
        formations: [{
            name: "Castellans of the Crimson Keep",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Court of Nulahmia",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Deathmarch",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Lords of Sacrament",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Nightfall Pack",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "The First Cohort",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.LIONRANGERS = {
        heroes: [],
        units: [{
            name: "White Lions",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "White Lion Chariots",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.LIZARDMEN = {
        heroes: [{
            name: "Skink Prophet",
            wounds: "5",
            desc: "Seraphon | Priest",
            points: "1"
        }, {
            name: "Chameleon Skink Stalker",
            wounds: "4",
            desc: "Seraphon",
            points: "1"
        }, {
            name: "Skink Chief",
            wounds: "4",
            desc: "Seraphon",
            points: ".5"
        }],
        units: [{
            name: "Celestial Swarms",
            wounds: "15",
            models: "3",
            desc: "Seraphon",
            points: "1"
        }],
        monsters: [],
        formations: []
    }, availablePoolArmies.MANEATERS = {
        heroes: [],
        units: [{
            name: "Maneaters",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.MASTERCLAN = {
        heroes: [{
            name: "Thanquol and Boneripper",
            wounds: "13",
            desc: "Wizard",
            points: "4.5"
        }, {
            name: "Grey Seer",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Screaming Bell",
            wounds: "12",
            desc: "Wizard",
            points: "2"
        }, {
            name: "Lord Skreech Verminkin",
            wounds: "12",
            desc: "Wizard | Monster",
            points: "2.5"
        }, {
            name: "Verminlord Warpseer",
            wounds: "12",
            desc: "Wizard | Monster",
            points: "3"
        }, {
            name: "Warpgnaw Verminlord",
            wounds: "10",
            desc: "Wizard | Monster",
            points: "3"
        }],
        units: [],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.MONSTERSOFCHAOS = {
        heroes: [],
        units: [{
            name: "Chaos Warhounds",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Centigors",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Razorgors",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Harpies",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [{
            name: "Curs'd Ettin",
            wounds: "10",
            desc: "",
            points: "2"
        }, {
            name: "Chimera",
            wounds: "12",
            desc: "",
            points: "2"
        }, {
            name: "Mutalith Vortex Beast",
            wounds: "12",
            desc: "",
            points: "2"
        }, {
            name: "Slaughterbrute",
            wounds: "12",
            desc: "",
            points: "2.5"
        }, {
            name: "Cockatrice",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Great Taurus",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Lammasu",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Jabberslythe",
            wounds: "10",
            points: "2"
        }, {
            name: "Preyton",
            wounds: "8",
            desc: "",
            points: "1.5"
        }, {
            name: "Warpfire Dragon",
            wounds: "12",
            desc: "",
            points: "2.5"
        }],
        formations: []
    }, availablePoolArmies.MONSTERSOFORDER = {
        heroes: [],
        units: [],
        warmachines: [],
        monsters: [{
            name: "Carmine Dragon",
            wounds: "14",
            desc: "",
            points: "3"
        }],
        formations: []
    }, availablePoolArmies.MONSTROUSARCANUM = {
        heroes: [],
        units: [{
            name: "Fimir Warriors",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }],
        monsters: [{
            name: "Basilisk",
            wounds: "10",
            desc: "",
            points: "2.5"
        }, {
            name: "Bonegrinder Gargant",
            wounds: "16",
            desc: "",
            points: "3.5"
        }, {
            name: "Colossal Squig",
            wounds: "16",
            desc: "",
            points: "3"
        }, {
            name: "Dread Maw",
            wounds: "14",
            desc: "",
            points: "4"
        }, {
            name: "Incarnate Elemental of Beasts",
            wounds: "14",
            desc: "",
            points: "3"
        }, {
            name: "Incarnate Elemental of Fire",
            wounds: "14",
            desc: "",
            points: "3"
        }, {
            name: "Magma Dragon",
            wounds: "20",
            desc: "",
            points: "6"
        }, {
            name: "Merwyrm",
            wounds: "12",
            desc: "",
            points: "3"
        }, {
            name: "Rogue Idol",
            wounds: "16",
            desc: "",
            points: "4"
        }],
        warmachines: [{
            name: "Squig Gobba",
            wounds: "5",
            desc: "",
            points: "1.5"
        }],
        formations: []
    }, availablePoolArmies.MOONCLANGROTS = {
        heroes: [{
            name: "Grot Warboss",
            wounds: "4",
            desc: "",
            points: "1"
        }, {
            name: "Grot Warboss On Great Cave Squig",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Moonclan Grot Shaman",
            wounds: "4",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Fungoid Cave-Shaman",
            wounds: "4",
            desc: "Wizard",
            points: "1"
        }],
        units: [{
            name: "Moonclan Grots",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Grot Fanatics",
            wounds: "3",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Grot Squig Hoppers",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Grot Squig Herders",
            wounds: "3",
            models: "3",
            desc: "",
            points: ".5"
        }, {
            name: "Cave Squigs",
            wounds: "6",
            models: "3",
            desc: "",
            points: ".5"
        }],
        warmachines: [],
        monsters: [{
            name: "Mangler Squigs",
            wounds: "10",
            desc: "",
            points: "2.5"
        }],
        formations: []
    }, availablePoolArmies.NIGHTHAUNT = {
        heroes: [{
            name: "Cairn Wraith",
            wounds: "4",
            desc: "",
            points: "1"
        }, {
            name: "Tomb Banshee",
            wounds: "4",
            desc: "",
            points: "1"
        }, {
            name: "Knight of Shrouds",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Spirit Hosts",
            wounds: "9",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Hexwraiths",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Black Coach",
            wounds: "7",
            models: "1",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [{
            name: "Mourngul",
            wounds: "10",
            desc: "",
            points: "3"
        }],
        formations: []
    }, availablePoolArmies.NURGLEDAEMONS = {
        heroes: [{
            name: "Great Unclean One",
            wounds: "16",
            desc: "Wizard | Monster",
            points: "2"
        }, {
            name: "Rotigus",
            wounds: "16",
            desc: "Wizard | Monster",
            points: "2"
        }, {
            name: "Epidemius Tallyman of Nurgle",
            wounds: "7",
            desc: "",
            points: "1.5"
        }, {
            name: "Poxbringer Herald of Nurgle",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Spoilpox Scrivener Herald of Nurgle",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Sloppity Bilepiper Herald of Nurgle",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Daemon Prince of Nurgle",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Exalted Greater Daemon of Nurgle",
            wounds: "16",
            desc: "",
            points: "2"
        }, {
            name: "Horticulous Slimux",
            wounds: "8",
            desc: "",
            points: "2"
        }],
        units: [{
            name: "Plaguebearers",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Plague Drones",
            wounds: "15",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Nurglings",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Beasts Of Nurgle",
            wounds: "21",
            models: "3",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Tallyband of Nurgle",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Fecund Rituculturalists",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "The Munificent Wanderers",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Nurgle's Menagerie",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Thricefold Befoulment",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }]
    }, availablePoolArmies.NURGLEROTBRINGERS = {
        heroes: [{
            name: "The Glottkin",
            wounds: "18",
            desc: "Wizard | Monster",
            points: "4.5"
        }, {
            name: "Bloab Rotspawned",
            wounds: "12",
            desc: "Wizard | Monster",
            points: "3"
        }, {
            name: "Morbidex Twiceborn",
            wounds: "12",
            desc: "Wizard | Monster",
            points: "3.5"
        }, {
            name: "Orghotts Daemonspew",
            wounds: "12",
            desc: "Wizard | Monster",
            points: "3"
        }, {
            name: "Gutrot Spume",
            wounds: "7",
            desc: "",
            points: "1.5"
        }, {
            name: "Festus The Leechlord",
            wounds: "6",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Harbinger of Decay",
            wounds: "7",
            desc: "",
            points: "1.5"
        }, {
            name: "Sorcerer",
            wounds: "6",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Lord of Plagues",
            wounds: "7",
            desc: "",
            points: "1"
        }, {
            name: "Lord of Afflictions",
            wounds: "8",
            desc: "",
            points: "1"
        }, {
            name: "Lord of Blights",
            wounds: "7",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Putrid Blightkings",
            wounds: "20",
            models: "5",
            desc: "",
            points: "2"
        }, {
            name: "Pusgoyle Blightlords",
            wounds: "14",
            models: "2",
            desc: "",
            points: "2"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Blight Guard",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Affliction Cyst",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "The Blessed Sons",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Blight Cyst",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Plague Cyst",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }]
    }, availablePoolArmies.OGREKINGDOMS = {
        heroes: [{
            name: "Overtyrant",
            wounds: "9",
            desc: "",
            points: "1"
        }, {
            name: "Bruiser Standard Bearer",
            wounds: "7",
            desc: "",
            points: "1"
        }],
        units: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.ORCSANDGOBLINS = {
        heroes: [{
            name: "Gitboss on Wolf Chariot",
            wounds: "6",
            desc: "",
            points: "1.5"
        }, {
            name: "Gitboss",
            wounds: "4",
            desc: "",
            points: "1"
        }, {
            name: "Orruk Bully",
            wounds: "4",
            desc: "",
            points: ".5"
        }],
        units: [{
            name: "Mercenary Orruks",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.ORDERDRACONIS = {
        heroes: [{
            name: "Dragon Noble",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Dragonlord",
            wounds: "14",
            desc: "Monster",
            points: "4"
        }],
        units: [{
            name: "Dragon Blades",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Dragonlord Host",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }]
    }, availablePoolArmies.ORDERSERPENTIS = {
        heroes: [{
            name: "Dreadlord On Black Dragon",
            wounds: "14",
            desc: "Monster",
            points: "4"
        }],
        units: [{
            name: "Drakespawn Knights",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Drakespawn Chariots",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1"
        }],
        monsters: [{
            name: "War Hydra",
            wounds: "12",
            desc: "",
            points: "2.5"
        }],
        warmachines: [],
        formations: [{
            name: "Ebondrake Warhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.ORRUKS = {
        heroes: [{
            name: "Orruk Warboss",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Orruk Warboss On Wyvern",
            wounds: "10",
            desc: "Monster",
            points: "2.5"
        }, {
            name: "Orruk Great Shaman",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }],
        units: [{
            name: "Orruks",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Orruk Boarboys",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Orruk Boar Chariots",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.PHOENIXTEMPLE = {
        heroes: [{
            name: "Anointed Of Asuryan On Flamespyre Phoenix",
            wounds: "12",
            desc: "Monster",
            points: "4"
        }, {
            name: "Anointed Of Asuryan On Frostheart Phoenix",
            wounds: "12",
            desc: "Monster",
            points: "4"
        }, {
            name: "Anointed",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Phoenix Guard",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [{
            name: "Flamespyre Phoenix",
            wounds: "12",
            desc: "",
            points: "3.5"
        }, {
            name: "Frostheart Phoenix",
            wounds: "12",
            desc: "",
            points: "3"
        }],
        formations: [{
            name: "Spyreheart Warhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }]
    }, availablePoolArmies.SCOURGEPRIVATEERS = {
        heroes: [{
            name: "Black Ark Fleetmaster",
            wounds: "5",
            desc: "",
            points: ".5"
        }],
        units: [{
            name: "Black Ark Corsairs",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Scourgerunner Chariots",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1.5"
        }],
        monsters: [{
            name: "Kharibdyss",
            wounds: "12",
            desc: "",
            points: "2"
        }],
        warmachines: [],
        formations: [{
            name: "Realm Reavers",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.SERAPHON = {
        heroes: [{
            name: "Lord Kroak",
            wounds: "10",
            desc: "Seraphon | Wizard",
            points: "5"
        }, {
            name: "Slann Starmaster",
            wounds: "7",
            desc: "Seraphon | Wizard",
            points: "2.5"
        }, {
            name: "Saurus Oldblood on Carnosaur",
            wounds: "12",
            desc: "Seraphon | Monster",
            points: "3"
        }, {
            name: "Saurus Oldblood",
            wounds: "7",
            desc: "Seraphon",
            points: "1"
        }, {
            name: "Saurus Scar-Veteran on Cold One",
            wounds: "7",
            desc: "Seraphon",
            points: "1"
        }, {
            name: "Saurus Eternity Warden",
            wounds: "7",
            desc: "Seraphon",
            points: "1.5"
        }, {
            name: "Saurus Sunblood",
            wounds: "7",
            desc: "Seraphon",
            points: "1"
        }, {
            name: "Scar-Veteran with Battle Standard",
            wounds: "6",
            desc: "Seraphon | Totem",
            points: "1.5"
        }, {
            name: "Saurus Astrolith Bearer",
            wounds: "6",
            desc: "Seraphon | Totem",
            points: "1.5"
        }, {
            name: "Saurus Scar-Veteran on Carnosaur",
            wounds: "12",
            desc: "Seraphon | Monster",
            points: "3"
        }, {
            name: "Skink Priest",
            wounds: "4",
            desc: "Seraphon | Priest",
            points: "1.5"
        }, {
            name: "Skink Starseer",
            wounds: "5",
            desc: "Wizard",
            points: "2"
        }, {
            name: "Skink Starpriest",
            wounds: "4",
            desc: "Priest",
            points: "1.5"
        }, {
            name: "Engine of the Gods",
            wounds: "10",
            desc: "Seraphon",
            points: "3"
        }],
        units: [{
            name: "Saurus Warriors",
            wounds: "10",
            models: "10",
            desc: "Seraphon",
            points: ".75"
        }, {
            name: "Saurus Guard",
            wounds: "5",
            models: "5",
            desc: "Seraphon",
            points: "1"
        }, {
            name: "Saurus Knights",
            wounds: "10",
            models: "5",
            desc: "Seraphon",
            points: "1"
        }, {
            name: "Skinks",
            wounds: "10",
            models: "10",
            desc: "Seraphon",
            points: ".75"
        }, {
            name: "Chameleon Skinks",
            wounds: "5",
            models: "5",
            desc: "Seraphon",
            points: "1.5"
        }, {
            name: "Terradon Riders",
            wounds: "9",
            models: "3",
            desc: "Seraphon",
            points: "1.5"
        }, {
            name: "Ripperdactyl Riders",
            wounds: "9",
            models: "3",
            desc: "Seraphon",
            points: "1.5"
        }, {
            name: "Skink Handlers",
            wounds: "3",
            models: "3",
            desc: "Seraphon",
            points: ".5"
        }, {
            name: "Salamanders",
            wounds: "3",
            models: "1",
            desc: "Seraphon",
            points: "1"
        }, {
            name: "Razordons",
            wounds: "3",
            models: "1",
            desc: "Seraphon",
            points: "1"
        }, {
            name: "Kroxigor",
            wounds: "12",
            models: "3",
            desc: "Seraphon",
            points: "2"
        }],
        monsters: [{
            name: "Stegadon",
            wounds: "10",
            desc: "Seraphon",
            points: "2.5"
        }, {
            name: "Bastiladon",
            wounds: "8",
            desc: "Seraphon",
            points: "4"
        }, {
            name: "Troglodon",
            wounds: "12",
            desc: "Seraphon",
            points: "2"
        }, {
            name: "Dread Saurian",
            wounds: "16",
            desc: "",
            points: "5"
        }],
        formations: [{
            name: "Bloodclaw Starhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Eternal Starhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Firelance Starhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Heavenswatch Starhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Shadowstrike Starhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Starbeast Constellation",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Sunclaw Starhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1",
            units: [{
                name: "Saurus Warriors",
                desc: ""
            }, {
                name: "Saurus Warriors",
                desc: ""
            }, {
                name: "Saurus Warriors",
                desc: ""
            }],
            heroes: [{
                name: "Saurus Sunblood",
                desc: ""
            }]
        }, {
            name: "Thunderquake Starhost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2.5"
        }, {
            name: "Fangs of Sotek",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2.5"
        }, {
            name: "Dracothion's Tail",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2.5"
        }]
    }, availablePoolArmies.SHADOWBLADES = {
        heroes: [{
            name: "Assassin",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Dark Riders",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }],
        monsters: [],
        warmachines: [],
        formations: []
    }, availablePoolArmies.SKAVEN = {
        heroes: [{
            name: "Skaven Chieftain With Battle Standard",
            wounds: "5",
            desc: "",
            points: "1"
        }],
        units: [{
            name: "Skavenslaves",
            wounds: "20",
            models: "20",
            desc: "",
            points: "1.25"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.SKAVENESHIN = {
        heroes: [{
            name: "Deathrunner",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Verminlord Deceiver",
            wounds: "12",
            desc: "Wizard | Monster",
            points: "2.5"
        }, {
            name: "Skaven Assassin",
            wounds: "5",
            desc: "",
            points: "1.5"
        }],
        units: [{
            name: "Night Runners",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Gutter Runners",
            wounds: "3",
            models: "3",
            desc: "",
            points: ".5"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.SKAVENMOULDER = {
        heroes: [{
            name: "Packmaster",
            wounds: "3",
            desc: "",
            points: ".5"
        }],
        units: [{
            name: "Wolf Rats",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Giant Rats",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Rat Swarms",
            wounds: "4",
            models: "1",
            desc: "",
            points: ".5"
        }, {
            name: "Rat Ogors",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [{
            name: "Brood Horror",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Hell Pit Abomination",
            wounds: "12",
            desc: "",
            points: "2"
        }],
        formations: []
    }, availablePoolArmies.SKAVENPESTILENS = {
        heroes: [{
            name: "Plague Priest with Plague Censer",
            wounds: "5",
            desc: "Priest",
            points: "1"
        }, {
            name: "Plague Priest with Warpstone-tipped Staff",
            wounds: "5",
            desc: "Priest",
            points: "1"
        }, {
            name: "Plague Furnace",
            wounds: "12",
            desc: "Priest",
            points: "2"
        }, {
            name: "Verminlord Corruptor",
            wounds: "12",
            desc: "Wizard | Monster",
            points: "2"
        }],
        units: [{
            name: "Plague Monks",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }, {
            name: "Plague Censer Bearers",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }],
        warmachines: [{
            name: "Plagueclaw",
            wounds: "6",
            desc: "",
            points: "1.5"
        }],
        monsters: [],
        formations: [{
            name: "Congregation of Filth",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Foulrain Congregation",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Plaguesmog Congregation",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Virulent Procession",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }]
    }, availablePoolArmies.SKAVENSKRYRE = {
        heroes: [{
            name: "Warlock Engineer",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Arch Warlock",
            wounds: "6",
            desc: "",
            points: "1.5"
        }],
        units: [{
            name: "Doom Flayer Weapon Team",
            wounds: "3",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Ratling Gun Weapon Team",
            wounds: "3",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Warpfire Thrower Weapon Team",
            wounds: "3",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Warp Grinder Weapon Team",
            wounds: "3",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Poisoned Wind Mortar Weapon Team",
            wounds: "3",
            models: "1",
            desc: "",
            points: ".5"
        }, {
            name: "Skryre Acolytes",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Warplock Jezzails",
            wounds: "6",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Stormfiends",
            wounds: "18",
            models: "3",
            desc: "",
            points: "3"
        }],
        warmachines: [{
            name: "Doomwheel",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Warp Lightning Cannon",
            wounds: "6",
            desc: "",
            points: "1.5"
        }],
        monsters: [],
        formations: [{
            name: "Clan Skryre",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2.5"
        }, {
            name: "Arkhspark Voltik",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Gascloud Chokelung",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Gautfyre Skorch",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Rattlegauge Warplock",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }, {
            name: "Whyrlblade Threshik",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: ".5"
        }]
    }, availablePoolArmies.SKAVENVERMINUS = {
        heroes: [{
            name: "Verminlord Warbringer",
            wounds: "12",
            desc: "Wizard | Monster",
            points: "2.5"
        }, {
            name: "Skaven Warlord",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Skaven Warlord on Brood Horror",
            wounds: "8",
            desc: "",
            points: "2.5"
        }, {
            name: "Skritch Spiteclaw",
            wounds: "5",
            desc: "",
            points: "2.5"
        }],
        units: [{
            name: "Clanrats",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Stormvermin",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Spiteclaw's Swarm",
            wounds: "4",
            models: "4",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.SLAANESHDAEMONS = {
        heroes: [{
            name: "Keeper Of Secrets",
            wounds: "10",
            desc: "Wizard | Monster",
            points: "2"
        }, {
            name: "The Masque Of Slaanesh",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Herald Of Slaanesh",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Herald Of Slaanesh on Seeker Chariot",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Herald Of Slaanesh on Exalted Seeker Chariot",
            wounds: "9",
            desc: "",
            points: "1.5"
        }, {
            name: "Daemon Prince Of Slaanesh",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Chaos Lord Of Slaanesh",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Lord Of Slaanesh On Daemonic Mount",
            wounds: "7",
            desc: "",
            points: "2"
        }, {
            name: "Exalted Greater Daemon of Slaanesh",
            wounds: "15",
            desc: "",
            points: "2"
        }],
        units: [{
            name: "Daemonettes Of Slaanesh",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Seekers Of Slaanesh",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Fiends Of Slaanesh",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Seeker Chariots Of Slaanesh",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Exalted Seeker Chariots Of Slaanesh",
            wounds: "9",
            models: "1",
            desc: "",
            points: "2"
        }, {
            name: "Hellflayers Of Slaanesh",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Hellstriders Of Slaanesh",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.SOULBLIGHT = {
        heroes: [{
            name: "Vampire Lord",
            wounds: "5",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Vampire Lord On Zombie Dragon",
            wounds: "14",
            desc: "Wizard",
            points: "4.5"
        }, {
            name: "Coven Throne",
            wounds: "12",
            desc: "Wizard",
            points: "3"
        }, {
            name: "Prince Vhordrai",
            wounds: "14",
            desc: "Wizard",
            points: "4.5"
        }, {
            name: "Bloodseeker Palanquin",
            wounds: "12",
            desc: "Wizard",
            points: "3"
        }, {
            name: "Mannfred Mortarch Of Night",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "4"
        }, {
            name: "Neferata Mortarch Of Blood",
            wounds: "11",
            desc: "Wizard | Monster",
            points: "3.5"
        }],
        units: [{
            name: "Vargheists",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Blood Knights",
            wounds: "15",
            models: "5",
            desc: "",
            points: "2.5"
        }, {
            name: "Fell Bats",
            wounds: "9",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Bat Swarms",
            wounds: "15",
            models: "3",
            desc: "",
            points: "2"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Castellans of the Crimson Keep",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Court of Nulahmia",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.SPIDERFANGGROTS = {
        heroes: [{
            name: "Arachnarok Spider With Grot Shaman",
            wounds: "14",
            desc: "Wizard",
            points: "3"
        }, {
            name: "Grot Big Boss On Gigantic Spider",
            wounds: "6",
            desc: "",
            points: "1.5"
        }],
        units: [{
            name: "Grot Spider Riders",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [{
            name: "Arachnarok Spider",
            wounds: "14",
            desc: "",
            points: "3"
        }],
        formations: []
    }, availablePoolArmies.STORMCASTETERNALS = {
        heroes: [{
            name: "Lord-Celestant",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Lord-Relictor",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Lord-Castellant",
            wounds: "6",
            desc: "",
            points: "1.5"
        }, {
            name: "Celestant-Prime",
            wounds: "8",
            desc: "",
            points: "3.5"
        }, {
            name: "Knight-Vexillor",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Gavriel Sureheart",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Knight-Heraldor",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Knight-Azyros",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Knight-Venator",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Knight-Questor",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Lord-Veritant",
            wounds: "6",
            desc: "",
            points: "1.5"
        }, {
            name: "Lord-Celestant On Dracoth",
            wounds: "7",
            desc: "",
            points: "2.5"
        }, {
            name: "Vandus Hammerhand",
            wounds: "7",
            desc: "",
            points: "2.5"
        }, {
            name: "Lord-Celestant On Stardrake",
            wounds: "16",
            desc: "Monster",
            points: "5"
        }, {
            name: "Drakesworn Templar",
            wounds: "16",
            desc: "Monster",
            points: "4.5"
        }, {
            name: "Lord-Aquilor",
            wounds: "7",
            desc: "Monster",
            points: "4.5"
        }, {
            name: "Neave Blacktalon",
            wounds: "6",
            desc: "",
            points: "4.5"
        }, {
            name: "Lord-Ordinator",
            wounds: "5",
            desc: "Monster",
            points: "4.5"
        }],
        units: [{
            name: "Gryph-Hound",
            wounds: "3",
            models: "1",
            desc: "",
            points: ".5"
        }, {
            name: "Prosecutors with Stormcall Javelins",
            wounds: "6",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Prosecutors with Celestial Hammers",
            wounds: "6",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Paladin Retributors",
            wounds: "15",
            models: "5",
            desc: "",
            points: "2"
        }, {
            name: "Liberators",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Steelheart's Champions",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Judicators",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Paladin Protectors",
            wounds: "15",
            models: "5",
            desc: "",
            points: "2"
        }, {
            name: "Paladin Decimators",
            wounds: "15",
            models: "5",
            desc: "",
            points: "2"
        }, {
            name: "Concussors",
            wounds: "5",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Desolators",
            wounds: "5",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Tempestors",
            wounds: "5",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Fulminators",
            wounds: "5",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Aetherwings",
            wounds: "2",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Vanguard-Hunters",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Vanguard-Palladors",
            wounds: "15",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Vanguard-Raptors with Hurricane Crossbows",
            wounds: "6",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Vanguard-Raptors with Longstrike Crossbows",
            wounds: "6",
            models: "3",
            desc: "",
            points: "1.5"
        }],
        monsters: [],
        formations: [{
            name: "Exemplar Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Devastation Brotherhood",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Hammerstrike Force",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Lords of the Storm",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "The Skyborne Slayers",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Thunderhead Brotherhood",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Vanguard Wing",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Harbinger Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Warrior Brotherhood",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Warrior Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Drakesworn Temple",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Extremis Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1.5"
        }, {
            name: "Lightning Echelon",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Thunderwave Echelon",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Aetherstrike Force",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Anvils of the Heldenhammer Warrior Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Astral Templars Exemplar Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Celestial Hunting Pack",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Celestial Vindicators Warrior Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Celestial Warbringers Harbinger Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Hallowed Knights Warrior Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Hammers of Sigmar Warrior Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Knights Excelsior Exemplar Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Storm Heralds",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Storm Vortex Garrison",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Tempest Lords Harbinger Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Vanguard Angelos Conclave",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Vanguard Auxiliary Chamber",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Vanguard Justicar Conclave",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }, {
            name: "Blacktalon's Shadowhammers",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "2"
        }]
    }, availablePoolArmies.SWIFTHAWKAGENTS = {
        heroes: [{
            name: "High Warden",
            wounds: "10",
            desc: "Monster",
            points: "3"
        }, {
            name: "Skywarden",
            wounds: "8",
            desc: "",
            points: "1.5"
        }],
        units: [{
            name: "Reavers",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Spireguard",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Skycutters",
            wounds: "8",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Shadow Warriors",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Chariots",
            wounds: "5",
            models: "1",
            desc: "",
            points: "1"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.SYLVANETH = {
        heroes: [{
            name: "Branchwraith",
            wounds: "5",
            desc: "Sylvaneth | Wizard",
            points: "1"
        }, {
            name: "Branchwych",
            wounds: "5",
            desc: "Sylvaneth | Wizard",
            points: "1"
        }, {
            name: "Spirit of Durthu",
            wounds: "12",
            models: "1",
            desc: "Sylvaneth | Monster",
            points: "3.5"
        }, {
            name: "Drycha Hamadreth",
            wounds: "10",
            models: "1",
            desc: "Sylvaneth | Monster",
            points: "3.5"
        }, {
            name: "Alarielle the Everqueen",
            wounds: "16",
            models: "1",
            desc: "Sylvaneth | Monster",
            points: "3.5"
        }, {
            name: "Treelord Ancient",
            wounds: "12",
            desc: "Sylvaneth",
            points: "3"
        }],
        units: [{
            name: "Dryads",
            wounds: "5",
            models: "5",
            desc: "Sylvaneth",
            points: ".5"
        }, {
            name: "Kurnoth Hunters",
            wounds: "15",
            models: "3",
            desc: "Terrain",
            points: "1"
        }, {
            name: "Spite-Revenants",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Tree-Revenants",
            wounds: "5",
            models: "5",
            desc: "",
            points: "1"
        }],
        monsters: [{
            name: "Treelord",
            wounds: "12",
            desc: "Sylvaneth",
            points: "2.5"
        }],
        formations: [{
            name: "Alarielle's Heartwood Guard",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Sylvaneth Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Winterleaf Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Ironbark Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Dreadwood Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Heartwood Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Gnarlroot Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Oakenbrow Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Harvestboon Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Forest Spirit Wargrove",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Outcasts",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Free Spirits",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Forest Folk",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Household",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Lords of the Clan",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "The Guardians of Alarielle",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.TAMURKHANSHORDE = {
        heroes: [{
            name: "Tamurkhan the Maggot Lord",
            wounds: "18",
            desc: "Monster",
            points: "3.5"
        }, {
            name: "Kayzk the Befouled",
            wounds: "7",
            desc: "",
            points: "1"
        }, {
            name: "Sayl The Faithless",
            wounds: "6",
            desc: "Wizard",
            points: "1.5"
        }],
        units: [{
            name: "Plague Ogors",
            wounds: "15",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Bile Troggoths",
            wounds: "15",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Daemon Plague Toads of Nurgle",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Daemon Pox Riders of Nurgle",
            wounds: "15",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Nightmaw",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1"
        }],
        monsters: [{
            name: "Gigantic Chaos Spawn",
            wounds: "12",
            desc: "",
            points: "2"
        }, {
            name: "Chaos War Mammoth",
            wounds: "22",
            desc: "",
            points: "4"
        }],
        formations: [{
            name: "Sons of the Maggot Lord",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "The Leaping Pox",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }]
    }, availablePoolArmies.THUNDERSCORN = {
        heroes: [{
            name: "Dragon Ogor Shaggoth",
            wounds: "10",
            desc: "Monster",
            points: "2"
        }],
        units: [{
            name: "Dragon Ogors",
            wounds: "15",
            models: "3",
            desc: "",
            points: "2"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.TOMBKINGS = {
        heroes: [{
            name: "Tomb King in Royal Chariot",
            wounds: "8",
            desc: "",
            points: "4"
        }, {
            name: "Tomb Queen",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Tomb King",
            wounds: "6",
            desc: "",
            points: "1"
        }, {
            name: "Tomb King on Exalted Chariot",
            wounds: "8",
            desc: "",
            points: "1.5"
        }, {
            name: "Scarab Prince",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Tomb Herald",
            wounds: "5",
            desc: "",
            points: "1.5"
        }, {
            name: "Liche Priest",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Casket Of Souls",
            wounds: "8",
            desc: "",
            points: "1.5"
        }, {
            name: "Necrotect",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Royal Warsphinx",
            wounds: "12",
            desc: "",
            points: "3.5"
        }],
        units: [{
            name: "Skeletal Legionnaires",
            wounds: "10",
            models: "10",
            desc: "",
            points: ".75"
        }, {
            name: "Skeleton Archers",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1"
        }, {
            name: "Skeleton Horsemen",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Skeleton Horse Archers",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Skeleton Chariots",
            wounds: "15",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Tomb Guard",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Tomb Scorpions",
            wounds: "5",
            models: "1",
            desc: "",
            points: "1"
        }, {
            name: "Necropolis Knights",
            wounds: "15",
            models: "3",
            desc: "",
            points: "2.5"
        }, {
            name: "Ushabti",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Sepulchral Stalkers",
            wounds: "15",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Carrion",
            wounds: "9",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Tomb Swarm",
            wounds: "3",
            models: "1",
            desc: "",
            points: ".5"
        }],
        warmachines: [{
            name: "Screaming Skull Catapult",
            wounds: "8",
            desc: "",
            points: "1.5"
        }],
        monsters: [{
            name: "Bone Giant",
            wounds: "9",
            desc: "",
            points: "1.5"
        }, {
            name: "Warsphinx",
            wounds: "12",
            desc: "",
            points: "3"
        }, {
            name: "Necrosphinx",
            wounds: "12",
            desc: "",
            points: "4"
        }],
        formations: []
    }, availablePoolArmies.TROGGOTHS = {
        heroes: [{
            name: "Troggoth Hag",
            wounds: "16",
            desc: "",
            points: "3"
        }],
        units: [{
            name: "Fellwater Troggoths",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Sourbreath Troggoths",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Rockgut Troggoths",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }],
        warmachines: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.TZEENTCHARCHANITES = {
        heroes: [{
            name: "Curseling, Eye of Tzeentch",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Fatemaster",
            wounds: "6",
            desc: "",
            points: "1.5"
        }, {
            name: "Ogroid Thaumaturge",
            wounds: "8",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Gaunt Summoner",
            wounds: "5",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Magister",
            wounds: "5",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Tzaangor Shaman",
            wounds: "6",
            desc: "Wizard",
            points: "1.5"
        }],
        units: [{
            name: "Kairic Acolytes",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Tzaangors",
            wounds: "20",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Tzaangor Enlightened",
            wounds: "9",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Tzaangor Enlightened on Disc",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Tzaangor Skyfires",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Arcanite Cabal",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Arcanite Cult",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Alter-kin Coven",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Cult of the Transient Form",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Skyshoal Coven",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "The Pyrofane Cult",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Tzaangor Coven",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Witchfyre Coven",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }]
    }, availablePoolArmies.TZEENTCHDAEMONS = {
        heroes: [{
            name: "Kairos Fateweaver",
            wounds: "14",
            desc: "Wizard | Wizard",
            points: "3"
        }, {
            name: "Lord Of Change",
            wounds: "14",
            desc: "Wizard | Monster",
            points: "3"
        }, {
            name: "The Changeling",
            wounds: "5",
            desc: "Wizard",
            points: "2"
        }, {
            name: "Herald Of Tzeentch",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Herald Of Tzeentch On Disc",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }, {
            name: "Herald Of Tzeentch On Burning Chariot",
            wounds: "8",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "The Blue Scribes",
            wounds: "5",
            desc: "Wizard",
            points: "1.5"
        }, {
            name: "Daemon Prince Of Tzeentch",
            wounds: "8",
            desc: "",
            points: "2"
        }, {
            name: "Exalted Greater Daemon of Tzeentch",
            wounds: "20",
            desc: "",
            points: "2"
        }],
        units: [{
            name: "Pink Horrors Of Tzeentch",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Blue Horrors Of Tzeentch",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Brimstone Horrors Of Tzeentch",
            wounds: "10",
            models: "10",
            desc: "",
            points: "1.5"
        }, {
            name: "Exalted Flamers of Tzeentch",
            wounds: "4",
            models: "1",
            desc: "",
            points: "1.5"
        }, {
            name: "Flamers Of Tzeentch",
            wounds: "6",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Screamers Of Tzeentch",
            wounds: "9",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Burning Chariots Of Tzeentch",
            wounds: "6",
            models: "1",
            desc: "",
            points: "1.5"
        }],
        warmachines: [],
        monsters: [],
        formations: [{
            name: "Aether-eater Host",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0"
        }, {
            name: "Changehost",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Multitudinous Host",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Omniscient Oracles",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }, {
            name: "Overseer's Fate-twisters",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "The Eternal Conflagration",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "The Hosts Duplicitous",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }, {
            name: "Warpflame Host",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "0.5"
        }]
    }, availablePoolArmies.VAMPIRECOUNTS = {
        heroes: [{
            name: "Vampire Lord On Abyssal Terror",
            wounds: "8",
            desc: "Wizard | Monster",
            points: "3"
        }, {
            name: "Necromancer on Nightmare",
            wounds: "5",
            desc: "Wizard",
            points: "1"
        }],
        units: [],
        monsters: [],
        formations: []
    }, availablePoolArmies.WANDERERS = {
        heroes: [{
            name: "Nomad Prince",
            wounds: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Spellweaver",
            wounds: "5",
            desc: "Wanderer | Wizard",
            points: "1"
        }, {
            name: "Waywatcher",
            wounds: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Wayfinder",
            wounds: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Waystrider",
            wounds: "5",
            desc: "Wanderer",
            points: "1"
        }],
        units: [{
            name: "Wild Riders",
            wounds: "10",
            models: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Glade Guard",
            wounds: "10",
            models: "10",
            desc: "Wanderer",
            points: "1.5"
        }, {
            name: "Sisters of the Watch",
            wounds: "10",
            models: "10",
            desc: "Wanderer",
            points: "1.5"
        }, {
            name: "Eternal Guard",
            wounds: "10",
            models: "10",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Wildwood Rangers",
            wounds: "5",
            models: "5",
            desc: "Wanderer",
            points: ".5"
        }, {
            name: "Sisters of the Thorn",
            wounds: "10",
            models: "5",
            desc: "Wanderer",
            points: "1.5"
        }],
        monsters: [],
        formations: [{
            name: "Waystone Pathfinders",
            wounds: "0",
            models: "0",
            desc: "Formation",
            points: "1"
        }]
    }, availablePoolArmies.WARHERD = {
        heroes: [{
            name: "Doombull",
            wounds: "8",
            desc: "",
            points: "1.5"
        }],
        units: [{
            name: "Bullgors",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }],
        monsters: [{
            name: "Cygor",
            wounds: "14",
            desc: "",
            points: "2"
        }, {
            name: "Ghorgon",
            wounds: "14",
            desc: "",
            points: "2.5"
        }],
        formations: []
    }, availablePoolArmies.WARRIORSOFCHAOS = {
        heroes: [{
            name: "Exalted Hero With Battle Standard",
            wounds: "5",
            desc: "",
            points: "1"
        }, {
            name: "Chaos Dragon",
            wounds: "10",
            desc: "Wizard | Monster",
            points: "3.5"
        }, {
            name: "Troggoth King",
            wounds: "8",
            desc: "",
            points: "2"
        }],
        units: [{
            name: "Forsaken",
            wounds: "10",
            models: "5",
            desc: "",
            points: "1"
        }, {
            name: "Skin Wolves",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }, {
            name: "Chaos Ogors",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1"
        }, {
            name: "Chaos Troggoths",
            wounds: "12",
            models: "3",
            desc: "",
            points: "2"
        }, {
            name: "Chaos Familiars",
            wounds: "5",
            models: "5",
            desc: "",
            points: ".5"
        }],
        warmachines: [{
            name: "Hellcannon",
            wounds: "10",
            desc: "",
            points: "3"
        }],
        monsters: [],
        formations: []
    }, availablePoolArmies.WOODELVES = {
        heroes: [{
            name: "Glade Captain Battle Standard Bearer",
            wounds: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Glade Lord on Great Eagle",
            wounds: "7",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Glade Lord on Great Stag",
            wounds: "7",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Glade Lord on Forest Dragon",
            wounds: "12",
            desc: "Wanderer | Monster",
            points: "4"
        }, {
            name: "Glade Lord on Purebred Steed",
            wounds: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Glade Lord",
            wounds: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Avatar of the Hunt",
            wounds: "8",
            desc: "Wanderer | Monster",
            points: "2"
        }, {
            name: "Twilight Sisters on Forest Dragon",
            wounds: "12",
            desc: "Wanderer | Monster",
            points: "4"
        }, {
            name: "Shadowdancer",
            wounds: "5",
            desc: "Wanderer | Wizard",
            points: "1"
        }],
        units: [{
            name: "Hunting Hounds",
            wounds: "4",
            models: "2",
            desc: "Hunting Hounds",
            points: ".5"
        }, {
            name: "Wardancers",
            wounds: "5",
            models: "5",
            desc: "Wanderer",
            points: ".5"
        }, {
            name: "Waywatchers",
            wounds: "5",
            models: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Glade Riders",
            wounds: "10",
            models: "5",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Warhawk Riders",
            wounds: "8",
            models: "2",
            desc: "Wanderer",
            points: "1"
        }, {
            name: "Great Eagles",
            wounds: "4",
            models: "1",
            desc: "Great Eagles",
            points: ".5"
        }, {
            name: "Tree Kin",
            wounds: "12",
            models: "3",
            desc: "",
            points: "1.5"
        }],
        monsters: [],
        formations: []
    }

    return availablePoolArmies;
}

interface Faction {
    name: string;
    grandAlliance: "chaos" | "order" | "death" | "destruction";
    id: string;
}

const factions:Faction[] = [
{ name: "Beastmen", grandAlliance: "chaos", id: "BEASTMEN" },
{ name: "Brayherd", grandAlliance: "chaos", id: "BRAYHERD" },
{ name: "Chaos Gargants", grandAlliance: "chaos", id: "CHAOSGARGANTS" },
{ name: "Clan Eshin", grandAlliance: "chaos", id: "SKAVENESHIN" },
{ name: "Clan Moulder", grandAlliance: "chaos", id: "SKAVENMOULDER" },
{ name: "Clan Pestilens", grandAlliance: "chaos", id: "SKAVENPESTILENS" },
{ name: "Clan Skryre", grandAlliance: "chaos", id: "SKAVENSKRYRE" },
{ name: "Clan Verminus", grandAlliance: "chaos", id: "SKAVENVERMINUS" },
{ name: "Daemons Of Chaos", grandAlliance: "chaos", id: "DAEMONSOFCHAOS" },
{ name: "Daemons Of Khorne", grandAlliance: "chaos", id: "KHORNEDAEMONS" },
{ name: "Daemons Of Nurgle", grandAlliance: "chaos", id: "NURGLEDAEMONS" },
{ name: "Daemons Of Tzeentch", grandAlliance: "chaos", id: "TZEENTCHDAEMONS" },
{ name: "Everchosen", grandAlliance: "chaos", id: "EVERCHOSEN" },
{ name: "Hosts Of Slaanesh", grandAlliance: "chaos", id: "SLAANESHDAEMONS" },
{ name: "Khorne Bloodbound", grandAlliance: "chaos", id: "KHORNEBLOODBOUND" },
{ name: "Legion Of Azgorh", grandAlliance: "chaos", id: "LEGIONOFAZGORH" },
{ name: "Masterclan", grandAlliance: "chaos", id: "MASTERCLAN" },
{ name: "Monsters Of Chaos", grandAlliance: "chaos", id: "MONSTERSOFCHAOS" },
{ name: "Nurgle Rotbringers", grandAlliance: "chaos", id: "NURGLEROTBRINGERS" },
{ name: "Slaves To Darkness", grandAlliance: "chaos", id: "SLAVESTODARKNESS" },
{ name: "Skaven", grandAlliance: "chaos", id: "SKAVEN" },
{ name: "Tamurkhan's Horde", grandAlliance: "chaos", id: "TAMURKHANSHORDE" },
{ name: "Thunderscorn", grandAlliance: "chaos", id: "THUNDERSCORN" },
{ name: "Tzeentch Arcanites", grandAlliance: "chaos", id: "TZEENTCHARCHANITES" },
{ name: "Warherd", grandAlliance: "chaos", id: "WARHERD" },
{ name: "Warriors of Chaos", grandAlliance: "chaos", id: "WARRIORSOFCHAOS" },
{ name: "Aelves", grandAlliance: "order", id: "AELVES" },
{ name: "Bretonnians", grandAlliance: "order", id: "BRETONNIA" },
{ name: "Collegiate Arcane", grandAlliance: "order", id: "COLLEGIATEARCANE" },
{ name: "Dark Elves", grandAlliance: "order", id: "EXILES" },
{ name: "Darkling Covens", grandAlliance: "order", id: "DARKLINGCOVENS" },
{ name: "Daughters Of Khaine", grandAlliance: "order", id: "DAUGHTERSOFKHAINE" },
{ name: "Devoted Of Sigmar", grandAlliance: "order", id: "DEVOTEDOFSIGMAR" },
{ name: "Dispossessed", grandAlliance: "order", id: "DISPOSSESSED" },
{ name: "Dwarfs", grandAlliance: "order", id: "DWARFS" },
{ name: "Eldritch Council", grandAlliance: "order", id: "ELDRITCHCOUNCIL" },
{ name: "Free Peoples", grandAlliance: "order", id: "FREEPEOPLES" },
{ name: "Fyreslayers", grandAlliance: "order", id: "FYRESLAYERS" },
{ name: "High Elves", grandAlliance: "order", id: "HIGHELVES" },
{ name: "Ironweld Arsenal", grandAlliance: "order", id: "IRONWELDARSONAL" },
{ name: "Kharadron Overlords", grandAlliance: "order", id: "KHARADRONOVERLORDS" },
{ name: "Lion Rangers", grandAlliance: "order", id: "LIONRANGERS" },
{ name: "Lizardmen", grandAlliance: "order", id: "LIZARDMEN" },
{ name: "Monsters Of Order", grandAlliance: "order", id: "MONSTERSOFORDER" },
{ name: "Order Draconis", grandAlliance: "order", id: "ORDERDRACONIS" },
{ name: "Order Serpentis", grandAlliance: "order", id: "ORDERSERPENTIS" },
{ name: "Phoenix Temple", grandAlliance: "order", id: "PHOENIXTEMPLE" },
{ name: "Scourge Privateers", grandAlliance: "order", id: "SCOURGEPRIVATEERS" },
{ name: "Seraphon", grandAlliance: "order", id: "SERAPHON" },
{ name: "Shadowblades", grandAlliance: "order", id: "SHADOWBLADES" },
{ name: "Stormcast Eternals", grandAlliance: "order", id: "STORMCASTETERNALS" },
{ name: "Swifthawk Agents", grandAlliance: "order", id: "SWIFTHAWKAGENTS" },
{ name: "Sylvaneth", grandAlliance: "order", id: "SYLVANETH" },
{ name: "The Empire", grandAlliance: "order", id: "EMPIRE" },
{ name: "Wanderers", grandAlliance: "order", id: "WANDERERS" },
{ name: "Wood Elves", grandAlliance: "order", id: "WOODELVES" },
{ name: "Aleguzzler Gargants", grandAlliance: "destruction", id: "ALEGUZZLERGARGANTS" },
{ name: "Beastclaw Raiders", grandAlliance: "destruction", id: "BEASTCLAWRAIDERS" },
{ name: "Bonesplitterz", grandAlliance: "destruction", id: "BONESPLITTERZ" },
{ name: "Firebellies", grandAlliance: "destruction", id: "FIREBELLIES" },
{ name: "Gitmob Grots", grandAlliance: "destruction", id: "GROTS" },
{ name: "Greenskinz", grandAlliance: "destruction", id: "ORRUKS" },
{ name: "Gutbusters", grandAlliance: "destruction", id: "GUTBUSTERS" },
{ name: "Ironjawz", grandAlliance: "destruction", id: "IRONJAWZ" },
{ name: "Maneaters", grandAlliance: "destruction", id: "MANEATERS" },
{ name: "Monsters Of Destruction", grandAlliance: "destruction", id: "MONSTROUSARCANUM" },
{ name: "Moonclan Grots", grandAlliance: "destruction", id: "MOONCLANGROTS" },
{ name: "Ogre Kingdoms", grandAlliance: "destruction", id: "OGREKINGDOMS" },
{ name: "Orcs & Goblins", grandAlliance: "destruction", id: "ORCSANDGOBLINS" },
{ name: "Spiderfang Grots", grandAlliance: "destruction", id: "SPIDERFANGGROTS" },
{ name: "Troggoths", grandAlliance: "destruction", id: "TROGGOTHS" },
{ name: "Deadwalkers", grandAlliance: "death", id: "DEADWALKERS" },
{ name: "Deathlords", grandAlliance: "death", id: "DEATHLORDS" },
{ name: "Deathmages", grandAlliance: "death", id: "DEATHMAGES" },
{ name: "Deathrattle", grandAlliance: "death", id: "DEATHRATTLE" },
{ name: "Flesh Eater Courts", grandAlliance: "death", id: "FLESHEATERCOURTS" },
{ name: "Legions of Nagash", grandAlliance: "death", id: "LEGIONSOFNAGASH" },
{ name: "Nighthaunt", grandAlliance: "death", id: "NIGHTHAUNT" },
{ name: "Soulblight", grandAlliance: "death", id: "SOULBLIGHT" },
{ name: "Tomb Kings", grandAlliance: "death", id: "TOMBKINGS" },
{ name: "Vampire Counts", grandAlliance: "death", id: "VAMPIRECOUNTS" },
];

const data = loadAllArmiesFaster();
let output = `import { Box, DataStore, GrandAlliance } from "./units";

export class DataStoreImpl implements DataStore {
    serial: number = 0;

    models = {
`;

function toCamelCase(name: string) {
    return name.replace(/[^\w]+(\w)/g, (p,x) => x.toUpperCase()).replace(/^(.)/, (p,x) => x.toLowerCase());
}

const extraData = new Map<string, { factionId: string[], type: string,  army: Army }>();

function addExtraData(name: string, army: Army, factionId: string, type: string) {
    let extra = extraData.get(name);
    if (extra) {
        extra.factionId.push(factionId);
    } else {
        extra = {
            type: type,
            factionId: [factionId],
            army: army,
        }
    }
    extraData.set(toCamelCase(name), extra);
}

for (const faction of factions) {
    const factionData = data[faction.id];
    
    if (factionData.heroes) {
        factionData.heroes.forEach(x => addExtraData(x.name, x, faction.id, "hero"));
    }
    if (factionData.units) {
        factionData.units.forEach(x => addExtraData(x.name, x, faction.id, "unit"));
    }
    if (factionData.monsters) {
        factionData.monsters.forEach(x => addExtraData(x.name, x, faction.id, "monster"));
    }
    if (factionData.warmachines) {
        factionData.warmachines.forEach(x => addExtraData(x.name, x, faction.id, "warmachine"));
    }
    if (factionData.formations) {
        factionData.formations.forEach(x => addExtraData(x.name, x, faction.id, "formation"));
    }
}

for (const [key, value] of extraData) {
    output += `        ${key}: {
            id: this.serial++,
            name: "${value.army.name}"
        },
`;
}


output += `    };
    
    factions = {
`;

for (const faction of factions) {
    output += `        ${faction.id}: {
            id: "${faction.id}",
            grandAlliance: GrandAlliance.${faction.grandAlliance},
            name: "${faction.name}"
        },
`;
}

output += `    };
    
    units = {
`;

const gwPoints = fs.readFileSync("src/stores/data/gwPoints.csv", { encoding: "utf8"}).split("\n").map(x => x.split(","));
const gwPointsMap = new Map<string, { warscroll?: string, type?: string, count: number, maxCount?: number, points: number, maxPoints?: number }>();
for (const points of gwPoints) {
    const name = points[0];
    const t = {
        warscroll: points[1] ? points[1] : undefined,
        type: points[2] ? points[2] : undefined,
        count: points[3] ? parseInt(points[3]) : 1,
        maxCount: points[4] ? parseInt(points[4]) : undefined,
        points: points[5] ? parseInt(points[5]) : 0,
        maxPoints: points[6] ? parseInt(points[6]) : undefined
    }
    gwPointsMap.set(toCamelCase(name), t);
}

for (const [key, unit] of gwPointsMap) {
    const extras = extraData.get(key);
    if (!extras || extras.type === "formation") continue;
    output += `        ${key}: {
            id: this.serial++,
            model: this.models.${key},
            factions: [${ extras.factionId.map( x => `this.factions.${x}`).join(", ")}],
            size: ${unit.count},
            maxSize: ${unit.maxCount !== undefined ? unit.maxCount : "undefined"},
            points: ${unit.points},
            maxPoints: ${unit.maxPoints !== undefined ? unit.maxPoints: "undefined"},
            warcroll: ${unit.warscroll !== undefined ? `"${unit.warscroll}"` : "undefined"},
            type: "${extras.type}",
            subType: ${unit.type !== undefined ? `"${unit.type}"` : "undefined"},
`;
    if (extras.type === "hero") {
        output += "            isLeader: () => true,\n";
    } 
    if (unit.type) {
        const type = unit.type;
        if (type.indexOf("Behemot") >= 0) {
            output += "            isBehemot: () => true,\n";
        }
        if (type.indexOf("Artillery") >= 0) {
            output += "            isArtillery: () => true,\n";
        }
        if (type.indexOf("Battleline") >= 0) {
            output += "            isBattleline: () => true,\n";
        }
    }
    output +=`        },
`;
}

output += `    };
    
    boxes: Box[] = [];

    battalions = {
`;

for (const [key, unit] of gwPointsMap) {
    const extras = extraData.get(key);
    if (!extras || extras.type !== "formation") continue;
    output += `        ${key}: {
            id: this.serial++,
            name: "${extras.army.name}",
            factions: [${ extras.factionId.map( x => `this.factions.${x}`).join(", ")}],
            points: ${unit.points},
            units: []             
        },
`;
}


output += "    }\n}\n";

fs.writeFileSync("src/stores/imported-data.ts", output);
