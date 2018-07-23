import * as fs from "fs";
import { load } from "../stores/data/allData";
import csv = require("csv-parse/lib/sync");

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

const data: {
    [key: string]: PoolArmy
} = {} ;

const realmArtefacts: {
    [key: string]: string[]
} = {};

const alliesByAllegiance: {
    [key: string]: string;
} = {};

load(data, realmArtefacts, alliesByAllegiance);

interface Faction {
    name: string;
    grandAlliance: "chaos" | "order" | "death" | "destruction";
    id: string;
    // Used because commandTraits and artefacts are wrongly associated to factions instead of allegiances. 
    // If undefined, assume it's the same name
    allegiance?: string;
}

const factions:Faction[] = [
{ name: "Beastmen", grandAlliance: "chaos", id: "BEASTMEN" },
{ name: "Brayherd", grandAlliance: "chaos", id: "BRAYHERD", allegiance: "Brayherd" },
{ name: "Chaos Gargants", grandAlliance: "chaos", id: "CHAOSGARGANTS" },
{ name: "Clan Eshin", grandAlliance: "chaos", id: "SKAVENESHIN" },
{ name: "Clan Moulder", grandAlliance: "chaos", id: "SKAVENMOULDER" },
{ name: "Clan Pestilens", grandAlliance: "chaos", id: "SKAVENPESTILENS", allegiance: "Skaven Pestilens" },
{ name: "Clan Skryre", grandAlliance: "chaos", id: "SKAVENSKRYRE", allegiance: "Skaven Skryre" },
{ name: "Clan Verminus", grandAlliance: "chaos", id: "SKAVENVERMINUS" },
{ name: "Daemons of Chaos", grandAlliance: "chaos", id: "DAEMONSOFCHAOS" },
{ name: "Daemons of Khorne", grandAlliance: "chaos", id: "KHORNEDAEMONS", allegiance: "Khorne" },
{ name: "Daemons of Nurgle", grandAlliance: "chaos", id: "NURGLEDAEMONS", allegiance: "Nurgle" },
{ name: "Daemons of Tzeentch", grandAlliance: "chaos", id: "TZEENTCHDAEMONS", allegiance: "Tzeentch" },
{ name: "Everchosen", grandAlliance: "chaos", id: "EVERCHOSEN", allegiance: "Fist of the Everchosen" },
{ name: "Hosts Of Slaanesh", grandAlliance: "chaos", id: "SLAANESHDAEMONS", allegiance: "Slaanesh" },
{ name: "Khorne Bloodbound", grandAlliance: "chaos", id: "KHORNEBLOODBOUND", allegiance: "Khorne" },
{ name: "Legion Of Azgorh", grandAlliance: "chaos", id: "LEGIONOFAZGORH" },
{ name: "Masterclan", grandAlliance: "chaos", id: "MASTERCLAN" },
{ name: "Monsters Of Chaos", grandAlliance: "chaos", id: "MONSTERSOFCHAOS" },
{ name: "Nurgle Rotbringers", grandAlliance: "chaos", id: "NURGLEROTBRINGERS", allegiance: "Nurgle" },
{ name: "Slaves to Darkness", grandAlliance: "chaos", id: "SLAVESTODARKNESS" },
{ name: "Skaven", grandAlliance: "chaos", id: "SKAVEN" },
{ name: "Tamurkhan's Horde", grandAlliance: "chaos", id: "TAMURKHANSHORDE" },
{ name: "Thunderscorn", grandAlliance: "chaos", id: "THUNDERSCORN" },
{ name: "Tzeentch Arcanites", grandAlliance: "chaos", id: "TZEENTCHARCHANITES", allegiance: "Tzeentch" },
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
{ name: "Seraphon", grandAlliance: "order", id: "SERAPHON", allegiance: "Seraphon" },
{ name: "Shadowblades", grandAlliance: "order", id: "SHADOWBLADES" },
{ name: "Stormcast Eternals", grandAlliance: "order", id: "STORMCASTETERNALS" },
{ name: "Swifthawk Agents", grandAlliance: "order", id: "SWIFTHAWKAGENTS" },
{ name: "Sylvaneth", grandAlliance: "order", id: "SYLVANETH", allegiance: "Sylvaneth" },
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
{ name: "Idoneth Deepkin", grandAlliance: "order", id: "IDONETHDEEPKIN" }
];

interface ImportedAllegiance {
    grandAlliance: "chaos" | "order" | "death" | "destruction";
    name: string;
}

const allegiances:ImportedAllegiance[] = [
    { grandAlliance: "chaos", name: "Chaos" },
    { grandAlliance: "chaos", name: "Brayherd" },
    { grandAlliance: "chaos", name: "Khorne" },
    { grandAlliance: "chaos", name: "Nurgle" },
    { grandAlliance: "chaos", name: "Skaven Pestilens" },
    { grandAlliance: "chaos", name: "Skaven Skryre" },
    { grandAlliance: "chaos", name: "Slaanesh" },
    { grandAlliance: "chaos", name: "Slaves to Darkness" },
    { grandAlliance: "chaos", name: "Tzeentch" },
    { grandAlliance: "chaos", name: "Fist of the Everchosen" },
    { grandAlliance: "order", name: "Order" },
    { grandAlliance: "order", name: "Darkling Covens" },
    { grandAlliance: "order", name: "Dispossessed" },
    { grandAlliance: "order", name: "Free Peoples" },
    { grandAlliance: "order", name: "Fyreslayers" },
    { grandAlliance: "order", name: "Kharadron Overlords" },
    { grandAlliance: "order", name: "Seraphon" },
    { grandAlliance: "order", name: "Stormcast Eternals" },
    { grandAlliance: "order", name: "Sylvaneth" },
    { grandAlliance: "order", name: "Wanderers" },
    { grandAlliance: "order", name: "Hammerhal" },
    { grandAlliance: "order", name: "Anvilgard" },
    { grandAlliance: "order", name: "Tempest's Eye" },
    { grandAlliance: "order", name: "Hallowheart" },
    { grandAlliance: "order", name: "The Living City" },
    { grandAlliance: "order", name: "Greywater Fastness" },
    { grandAlliance: "order", name: "Daughters Of Khaine" },
    { grandAlliance: "destruction", name: "Destruction" },
    { grandAlliance: "destruction", name: "Bonesplitterz" },
    { grandAlliance: "destruction", name: "Beastclaw Raiders" },
    { grandAlliance: "destruction", name: "Ironjawz" },
    { grandAlliance: "destruction", name: "Stoneklaw's Gutstompas" },
    { grandAlliance: "death", name: "Death" },
    { grandAlliance: "death", name: "Flesh Eater Courts" },
    { grandAlliance: "death", name: "Nighthaunt" },
    { grandAlliance: "death", name: "Soulblight" },
    { grandAlliance: "death", name: "Grand Host of Nagash" },
    { grandAlliance: "death", name: "Legion of Sacrament" },
    { grandAlliance: "death", name: "Legion of Blood" },
    { grandAlliance: "death", name: "Legion of Night" },
    { grandAlliance: "death", name: "The Wraith Fleet" },
    { grandAlliance: "death", name: "Legions of Nagash" },
    { grandAlliance: "order", name: "Idoneth Deepkin" }
];

let output = `import { Box, DataStore, GrandAlliance, ExtraAbilityTest, WarscrollInterface } from "./units";

const commandTraitAvailable: ExtraAbilityTest = (unit, ws) => unit.isGeneral && ws.extraAbilities.every(x => x.category !== "command");
function bannerAvailable(id: string): ExtraAbilityTest {
    return (unit, ws) => unit.unit.id === name && unit.extraAbilities.every(x => x.category !== "banner");
}

const artifactAvailable: ExtraAbilityTest = (unit, ws) => !!unit.unit.isLeader && unit.extraAbilities.every(x => x.category !== "artifact")  
         && ws.extraAbilities.filter(x => x.category === "artifact").length < 1 + ws.battalions.length;
function keywordAvailable(category: string, keyword: string, alts: string[]): ExtraAbilityTest {
    return (unit, ws) => unit.extraAbilities.every(x => x.category !== category) && unit.unit.keywords.indexOf(keyword) >= 0 && alts.some(x => x === "ALL" || unit.unit.model.name.toUpperCase() === x || unit.unit.keywords.indexOf(x) >= 0);
}

export class DataStoreImpl implements DataStore {
    serial: number = 0;

    models = {
`;

function toCamelCase(name: string) {
    return name.replace(/[^\w]+(\w)/g, (p,x) => x.toUpperCase()).replace(/^(.)/, (p,x) => x.toLowerCase()).replace(/[^\w]/, '');
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
            id: "${key}",
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
    
    allegiances = {
`;

for (const allegiance of allegiances) {
    const key = toCamelCase(allegiance.name);
    output += `        ${key}: {
            id: "${key}",
            grandAlliance: GrandAlliance.${allegiance.grandAlliance},
            name: "${allegiance.name}",
            keyword: "${allegiance.name.toUpperCase()}"
        },
`;
}

output += `    };
    
    units = {
`;

function readCsv(path: string):string[][] {
    const data = fs.readFileSync(path, { encoding: "utf8"});
    return csv(data, { relax_column_count: true, trim: true });
}

const gwPoints = readCsv("src/stores/data/gwPoints.csv");
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

const extraWeapons = readCsv("src/stores/data/allWeaponOptions.csv");
const extraWeaponsMap = new Map<string, { name: string }[]>();
for (const e of extraWeapons) {
    const name = toCamelCase(e[0]);
    const w = extraWeaponsMap.get(name);
    if (w) {
        w.push({ name: e[1] });
    } else {
        extraWeaponsMap.set(name, [{ name: e[1] }]);
    }   
}

const keywordRegex: { r: RegExp, n: string }[] = [
    { r: /\bDAEMONS?\b/, n: "DAEMON" },
    { r: /\bWIZARD\b/, n: "WIZARD" },
    { r: /\bROTBRINGER\b/, n: "ROTBRINGER" },
    { r: /\bMORTAL\b/, n: "MORTAL" },
    { r: /\bBLOODBOUND\b/, n: "BLOODBOUND" },
    { r: /\bBEHEMOTH\b/, n: "MONSTER" },
    { r: /\bTOTEM\b/, n: "TOTEM" },
    { r: /\bPRIEST\b/, n: "PRIEST"}
];

for (const [key, unit] of gwPointsMap) {
    const extras = extraData.get(key);
    if (!extras || extras.type === "formation") continue;
    output += `        ${key}: {
            id: "${key}",
            model: this.models.${key},
            factions: [${ extras.factionId.map( x => `this.factions.${x}`).join(", ")}],
            size: ${unit.count},
            points: ${unit.points},
            type: "${extras.type}",
            subType: ${unit.type !== undefined ? `"${unit.type}"` : "undefined"},
`;

    const keyWords: string[] = [];
    const unitAllegiances: ImportedAllegiance[] = [];
    for (const factionId of extras.factionId) {
        const faction = factions.find(x => x.id === factionId);
        if (faction) {
            keyWords.push(faction.grandAlliance.toUpperCase());
            const allegiance = faction.allegiance ? allegiances.find(x => x.name === faction.allegiance) : allegiances.find(x => x.name === faction.name);
            if (allegiance) {
                unitAllegiances.push(allegiance);
                keyWords.push(allegiance.name.toUpperCase());
            }
        }
    }

    if (extras.type === "hero") {
        keyWords.push("HERO");
    }

    if (unit.type) {
        const unitType = unit.type.toUpperCase();
        for (const regex of keywordRegex) {
            if (regex.r.test(unitType)) {
                keyWords.push(regex.n);
            }
        }
    }

    if (keyWords.length) {
        output += `            keywords: ["${keyWords.join('", "')}"],\n`;
    }

    if (extras.army.wounds) {
        output+= `            wounds: ${parseInt(extras.army.wounds) / parseInt(extras.army.models || "1")},\n`;
    }

    if (extras.army.bravery) {
        output+= `            bravery: ${extras.army.bravery},\n`;
    }

    if (extras.army.move) {
        output+= `            move: ${extras.army.move},\n`;
    }

    if (extras.army.save) {
        output+= `            save: "${extras.army.save}",\n`;
    }

    if (unit.maxCount) {
        output+= `            maxSize: ${unit.maxCount},\n`;
    }

    if (unit.maxPoints) {
        output+= `            maxPoints: ${unit.maxPoints},\n`;
    }

    if (unit.warscroll) {
        output+= `            warscroll: "${unit.warscroll}",\n`;
    }

    const weapons = extraWeaponsMap.get(key);
    if (weapons) {
        const distinctWeapons = weapons.filter((x, index) => weapons.findIndex(y => y.name === x.name) === index);
        output+= `            options: [${distinctWeapons.map(x => `{ name: "${x.name}", id: "${toCamelCase(x.name)}", unitCategory: "main", modelCategory: "weapon" }`).join(",")}],
            baseOptions: { ${distinctWeapons.map(x => `${toCamelCase(x.name)}: "${toCamelCase(x.name)}"`).join(", ")} },\n`
    }

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
            let allegianceBattleline: string | undefined;
            for (const allegiance of unitAllegiances) {
                if (type.toUpperCase().indexOf(allegiance.name.toUpperCase()) >= 0)  {
                    allegianceBattleline = allegiance.name;
                    break;
                }
            }

            const generalMatch = type.match(/\((.*) General\)/);
            let general: string | undefined;
            if (generalMatch) {
                general = generalMatch[1];
            }

            if (allegianceBattleline) {
                output += `            isBattleline: (wi: WarscrollInterface) => wi.allegiance.id === "${toCamelCase(allegianceBattleline)}"`;
                if (general) {
                    output += ` && wi.general && wi.general.unit.id === "${toCamelCase(general)}"`;
                }
                output += ",\n";
            } else {
                output += "            isBattleline: () => true,\n";
            }
        }
    }
    output +=`        },
`;
}


const commandTraits = readCsv("src/stores/data/commandTraits.csv");

output += `    };
    
    extraAbilities = {
`;

function getAllegiance(factionName: string) {
    factionName = factionName.toLowerCase();
    if (factionName === "skirmish") return undefined;
    let allegiance = allegiances.find(x => x.name.toLowerCase() === factionName);
    if (!allegiance) {
        const faction = factions.find(x => x.name.toLowerCase() === factionName);
        if (faction && faction.allegiance) {
            allegiance = allegiances.find(x => x.name === faction.allegiance);
            if (!allegiance) {
                console.error(`Unable to find allegiance ${faction.allegiance} for faction ${faction.name}`);
                return undefined;
            }
        }
    }

    if (allegiance === undefined) {
        console.error(`Unable to find allegiance or faction "${factionName}"`);
    }
    return allegiance;
}

const usedCommandTraits = new Map<string, boolean>();

for (const commandTrait of commandTraits) {
    const allegiance = getAllegiance(commandTrait[0]);
    if (allegiance === undefined) {
        continue;
    }
    const m = commandTrait[1].match(/(.*) \((.*\))/);
    if (m === null) continue;
    const name = m[1];
    // const criteria = m[2];
    const key = toCamelCase(allegiance.name + name);
    if (usedCommandTraits.get(key)) continue;
    usedCommandTraits.set(key, true);
    output += `        ${key}: {
            id: "${key}",
            ability: { name: "${name}", description: "" },
            allegiance: this.allegiances.${toCamelCase(allegiance.name)},
            category: "command",
            isAvailable: commandTraitAvailable
        },
`
}

const artefacts = readCsv("src/stores/data/artefacts.csv");

for (const artefact of artefacts) {
    const allegiance = getAllegiance(artefact[0]);
    if (allegiance === undefined) {
        continue;
    }
    const category = artefact[1];
    const m = artefact[2].match(/(.*?) ?\((.*\))/);
    if (m === null) continue;
    const name = m[1];
    // const criteria = m[2];
    const key = toCamelCase(allegiance.name + name);
    if (usedCommandTraits.get(key)) continue;
    usedCommandTraits.set(key, true);
    output += `        ${key}: {
            id: "${key}",
            ability: { name: "${name}", description: "" },
            allegiance: this.allegiances.${toCamelCase(allegiance.name)},
            category: "artifact",
            subCategory: "${category}",
            isAvailable: artifactAvailable
        },
`
}

const banners = readCsv("src/stores/data/bannerOptions.csv");

for (const banner of banners) {
    const m = banner[0].match(/(.*) - (.*)/);
    if (m === null) continue;
    const unit = m[1];
    const name = m[2];
    // const criteria = m[2];
    const key = toCamelCase(unit + name);
    output += `        ${key}: {
            id: "${key}",
            ability: { name: "${name}", description: "" },
            category: "banner",
            isAvailable: bannerAvailable("${toCamelCase(unit)}")
        },
`
}

const genericAttributeLines = readCsv("src/stores/data/genericAttributes.csv");

interface GenericAttribute {
    units: string[];
    options: string[];
    name: string;
    allegiance: string;
}

const genericAttributes = new Map<string, GenericAttribute>();

for (const genericAttribute of genericAttributeLines) {
    const allegiance = genericAttribute[0];
    const unit = genericAttribute[1];
    const name = genericAttribute[4];
    const key = toCamelCase(allegiance + name);
    const attribute = genericAttributes.get(key);
    if (attribute) {
        attribute.units.push(unit);
    }
    else {
        const newAttribute: GenericAttribute = {
            units: [unit],
            name: name,
            options: genericAttribute.slice(5),
            allegiance: allegiance
        };
        genericAttributes.set(key, newAttribute);
    }
}

for (const [key, genericAttribute] of genericAttributes) {
    for (const option of genericAttribute.options) {
        const subKey = toCamelCase(key + option);
        output += `        ${subKey}: {
            id: "${subKey}",
            ability: { name: "${option}", description: "" },
            category: "${genericAttribute.name}",
            isAvailable: keywordAvailable("${genericAttribute.name}", "${genericAttribute.allegiance.toUpperCase()}", ["${genericAttribute.units.map(x => x.toUpperCase()).join('", "')}"])
        },
`
    }
}


output += `    };
    
    boxes: Box[] = [];
    
    battalions = {
`;

for (const [key, unit] of gwPointsMap) {
    const extras = extraData.get(key);
    if (!extras || extras.type !== "formation") continue;
    output += `        ${key}: {
            id: "${key}",
            name: "${extras.army.name}",
            factions: [${ extras.factionId.map( x => `this.factions.${x}`).join(", ")}],
            points: ${unit.points},
            units: []             
        },
`;
}

const sceneryLines = readCsv("src/stores/data/scenery.csv");

output += `    };
    
    sceneries = {
`;

for (const line of sceneryLines) {
    const key = toCamelCase(line[0]);
    output += `        ${key}: {
            id: "${key}",
            name: "${line[0]}",
            points: ${line[1]}
        },
`
}

const armyOptions = readCsv("src/stores/data/armyOptions.csv");

output += `    };
    
    armyOptions = new Map([
`;


for (const armyOption of armyOptions) {
    const match = armyOption[0].match(/^Allegiance: (.*)/);
    if (match === null) continue;
    const allegiance = match[1];
    const key = toCamelCase(allegiance);
    const name = armyOption[1];
    const options = armyOption.slice(2);
    output += `        ["${key}", { name: "${name}", values: ["${options.join('", "')}"]}],
`;
}

output += "    ]);\n}\n";

fs.writeFileSync("src/stores/imported-data.ts", output);


/*
ROADMAP

allWeaponOptions: done
armyOptions: done
artefacts: done
bannerOptions: done
commandTraits: done
genericAttributes: done
gwPoints: done
mountOptions: TODO
musicianOptions: TODO
optionalLoadoutOptions: TODO
scenery: TODO

*/

/**
 * import { Box, Faction } from "./units";

export class DataStoreImpl {
    factions: { [key: string]: Faction; } = {};
    boxes: Box[] = [];
    battalions: any;
    units: any;
    models: any;
}
 * 
 */