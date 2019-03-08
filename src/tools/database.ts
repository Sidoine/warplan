import * as realm from "realm";
import * as model from "./en-schemas/en-model";
import * as fs from "fs";
import * as def from "./definitions";

const schemaVersion = 42;

function toCamelCase(name: string) {
    return name.toLowerCase().replace(/[^\w]+(\w)/g, (p,x) => x.toUpperCase()).replace(/^(.)/, (p,x) => x.toLowerCase()).replace(/[^A-Za-z0-9]/g, '');
}

function getId(name: string, alt: string, ids: Map<string, boolean>) {
    let id = toCamelCase(name);
    if (ids.get(id)) {
        id += toCamelCase(alt);
        if (ids.get(id)) return undefined;
    }
    ids.set(id, true);
    return id;
}

function escapeString(text: string) {
    return text.replace(/[\n"]/g, (s) => `\\${s}`);
}

function escapeQuotedString(text: string | null) {
    if (!text) return "undefined";
    return '"' + text.replace(/[\n"]/g, (s) => `\\${s}`) + '"';
}

const models: realm.ObjectSchema[] = [ model.Ability, model.ArtefactGroup, model.BattalionOrganisation, model.BattalionWarscroll,
    model.Battleplan, model.CommandTraitGroup, model.CompoundKeyword, model.DamageColumn,
    model.DamagePair, model.Division, model.EndlessSpell, model.ExceptionalTraitGroup, model.KharadronCode,
    model.RealmAllegiance, model.RealmOfBattle, model.RealmscapeFeature, model.Rule, model.Skyport,
    model.UnitWarscroll, model.UnitWeapon, model.WarMachine];
const tab = "    ";
const allegianceIdByKeyword = new Map<string, string>();
allegianceIdByKeyword.set("SKAVEN PESTILENS", "clansPestilens");
allegianceIdByKeyword.set("CLAN SKRYRE", "clansSkryre");
async function load() {
    try {
        let definitions:string[] = [];
        for (const model of models) {
            definitions.push(`export interface ${model.name} {`);
            for (const propertyName in model.properties) {
                let propertyType = model.properties[propertyName];
                if (typeof(propertyType) === "string") {
                    const optional = propertyType.endsWith('?');
                    if (optional) {
                        propertyType = propertyType.slice(0, propertyType.length - 1);
                    }
                    const orNull = optional ? " | null" : "";
                    if (propertyType === "string") {
                        definitions.push(`${tab}${propertyName}: string${orNull};`)
                    } else if (propertyType === "number" || propertyType === "int" || propertyType === "double") {
                        definitions.push(`${tab}${propertyName}: number${orNull};`);
                    }else if (propertyType === "bool") {
                        definitions.push(`${tab}${propertyName}: boolean${orNull};`)
                    }
                    else if (propertyType === "string[]") {
                        definitions.push(`${tab}${propertyName}: string[];`)
                    } else {
                        definitions.push(`${tab}${propertyName}: ${propertyType}${orNull};`)
                    }
                }
            }
            definitions.push('}');
            definitions.push('');
        }
        fs.writeFileSync('src/tools/definitions.ts', definitions.join('\n'));

        const db = await realm.open({
            path: 'src/tools/en.realm',
            schema: models,
            schemaVersion: schemaVersion
        })
        let result = `import { Unit, DataStore, GrandAlliance, ExtraAbilityTest, WarscrollInterface, Box, AbilityCategory } from "./units";
function hasKeyword(unit: Unit, keywords: string[][]) {
    return keywords.some(x => x.every(y => unit.keywords.indexOf(y) >= 0));
}

const commandTraitAvailable: ExtraAbilityTest = (unit, ws) => unit.isGeneral && ws.extraAbilities.every(x => x.category !== "command");
function commandTraitWithKeywordAvailable(keywords: string[][]): ExtraAbilityTest {
    return (unit, ws) => commandTraitAvailable(unit, ws) && hasKeyword(unit.unit, keywords);
}
// const artifactAvailable: ExtraAbilityTest = (unit, ws) => !!unit.unit.isLeader && unit.extraAbilities.every(x => x.category !== "artifact")  
//         && ws.extraAbilities.filter(x => x.category === "artifact").length < 1 + ws.battalions.length;

function multiKeywordAvailable(category: string, allegianceKeyword: string, keywords: string[][]): ExtraAbilityTest {
    return (unit, ws) => unit.extraAbilities.every(x => x.category !== category) && unit.unit.keywords.indexOf(allegianceKeyword) >= 0 && hasKeyword(unit.unit, keywords);
}
 
// function keywordAvailable(category: string, allegianceKeyword: string, keyword: string): ExtraAbilityTest {
//     return (unit, ws) => unit.extraAbilities.every(x => x.category !== category) && unit.unit.keywords.indexOf(allegianceKeyword) >= 0 && unit.unit.keywords.indexOf(keyword) >= 0;
// }

export class DataStoreImpl implements DataStore {
`;
        result += getModels(db);
        result += getFactions(db);
        result += getAllegiance(db);
        result += getDamageTables(db);
        result += getOptions(db);
        result += getAbilities(db);
        result += getAttacks(db);
        result += getUnits(db);
        result += getExtraAbilities(db);
        result += getBattalions(db);
        result += getEndlessSpells(db);
        result += getArmyOptions(db);
        result += `

        boxes: Box[] = [];
}`;
        fs.writeFileSync('src/stores/imported-data.ts', result);
    }
    catch (error) {
        console.error(error);
    }
    process.exit();
}

load();

function toAllegianceId(allegianceId: string) {
    const id = toCamelCase(allegianceId);
    if (id === "stormcastEternal") return "stormcastEternals";
    if (id === "wanderer") return "wanderers";
    if (id === "gitmob") return "gitmobGrots";
    if (id === "darklingCoven") return "darklingCovens";
    return id;
}

function getFactions(db: realm) {
    const factions: {id: string, grandAlliance: string, name: string}[] = [];
    for (const unit of db.objects<def.UnitWarscroll>(model.UnitWarscroll.name)) {
        for (const faction of unit.factions) {
            if (factions.every(x => x.name !== faction)) {
                factions.push({ id: toCamelCase(faction), name: faction, grandAlliance: unit.grandAlliance });
            }
        }
    }

    let result =`${tab}factions = {
`;
    for (const faction of factions) {
        result += 
`       ${faction.id}: {
            id: "${faction.id}",
            grandAlliance: GrandAlliance.${faction.grandAlliance.toLowerCase()},
            name: "${escapeString(faction.name)}"
        },
`;
    }
    result +=  
`   };
`;
    return result;
}

function getModels(db: realm) {
    const usedNames = new Map<string, boolean>();
    
    let result = 
`   models = {
`;
for (const unit of db.objects<def.UnitWarscroll>(model.UnitWarscroll.name)) {
    const name = unit.subName ? `${unit.name} ${unit.subName}` : unit.name;
        const id = getId(name, unit.id, usedNames);
    result += 
`       ${id}: {
            id: "${id}",
            name: "${escapeString(name)}"
        },
`;
}
result +=  
`   };
`
    return result;
}

function getAllegiance(db: realm) {
    let result = 
`   allegiances = {
    `;
    for (const allegiance of db.objects<def.RealmAllegiance>(model.RealmAllegiance.name)) {
        const id = toCamelCase(allegiance.name);
        allegianceIdByKeyword.set(allegiance.keyword.toUpperCase(), id);
        result += 
`           ${id}: {
            id: "${id}",
            name: "${escapeString(allegiance.name)}",
            keyword: "${allegiance.keyword.toUpperCase()}",
`;
        if (allegiance.grandAlliance) {
            result += `${tab}${tab}${tab}grandAlliance: GrandAlliance.${allegiance.grandAlliance.toLowerCase()},
`;
        }
            
        result += 
`       },
`;
    }
    result +=  
`    };
`
    return result;
}

function getOptions(db: realm) {
    let result = 
`   options = {
`;
    const ids = new Map<string, boolean>();
    for (const unit of db.objects<def.UnitWarscroll>(model.UnitWarscroll.name)) {
        for (const option of unit.upgrades) {
            const id = toCamelCase(`${unit.name} ${option.name}`);
            if (ids.get(id)) continue;
            ids.set(id, true);
            result += 
`
        ${id}: {
            id: "${id}",
            name: "${option.name}",
            description: ${escapeQuotedString(option.blurb)},
        },
`
        }
    }
    result += 
`   };
`
    return result;
}

function getUnitAbilities(unit: { name: string }, abilities: def.Ability[], ids: Map<string, boolean>, category?: string) {
    let result = "";
    for (const ability of abilities) {
        const id = toCamelCase(`${unit.name} ${ability.name}`);
        if (ids.get(id)) continue;
        ids.set(id, true);
        result += 
`
    ${id}: {
        id: "${id}",
        name: "${ability.name}",
        description: ${escapeQuotedString(ability.blurb)},
`;
        if (ability.lore) {
            result +=            
`           flavor: ${escapeQuotedString(ability.lore)},
`
        }
        if (category) {
            result +=            
`        category: AbilityCategory.${category},
`;
        }
        result +=            
`        },
`
    }
    return result;
}

function getAbilities(db: realm) {
    let result = 
`   abilities = {
`;
    const ids = new Map<string, boolean>();
    for (const unit of db.objects<def.UnitWarscroll>(model.UnitWarscroll.name)) {
        result += getUnitAbilities(unit, unit.abilities, ids);
        result += getUnitAbilities(unit, unit.magicAbilities, ids, "Magic");
        result += getUnitAbilities(unit, unit.commandAbilities, ids, "Command");
        for (const ability of unit.specialRules) {
            const id = toCamelCase(`${unit.name} ${ability.name}`);
            if (ids.get(id)) continue;
            ids.set(id, true);
            result += 
`
        ${id}: {
            id: "${id}",
            name: "${ability.name}",
            description: ${escapeQuotedString(ability.blurb)},
            category: AbilityCategory.SpecialRule,
        },
`
        }
    }

    for (const battalion of db.objects<def.BattalionWarscroll>(model.BattalionWarscroll.name)) {
        result += getUnitAbilities(battalion, battalion.abilities, ids);
        result += getUnitAbilities(battalion, battalion.commandAbilities, ids, "Command");
    }

    result += 
`   };
`
    return result;
}

function getAttacks(db: realm) {
    let result = 
`   attacks = {
`;
    const unitIds = new Map<string, boolean>();
    const ids = new Map<string, boolean>();
    for (const unit of db.objects<def.UnitWarscroll>(model.UnitWarscroll.name)) {
        const name = unit.subName ? `${unit.name} ${unit.subName}` : unit.name;
        const unitId = getId(name, unit.id, unitIds);
        if (!unitId) continue;
        for (const weapon of unit.weapons) {
            const id = toCamelCase(`${unit.name} ${weapon.name}`);
            if (ids.get(id)) continue;
            ids.set(id, true);
            result += 
`
        ${id}: {
            id: "${id}",
            name: "${weapon.name}",
            attacks: ${getValue(weapon.attacks, weapon.name, unit, unitId)},
            damage: ${getValue(weapon.damage, weapon.name, unit, unitId)},
            toHit: ${getValue(weapon.hit, weapon.name, unit, unitId)},
            toWound: ${getValue(weapon.wound, weapon.name, unit, unitId)},
            melee: ${!weapon.missile},
            range: ${getValue(weapon.range, weapon.name, unit, unitId)},
            rend: ${getValue(weapon.rend, weapon.name, unit, unitId)},
        },
`
        }
    }
    result += 
`   };
`
    return result;
}

function getDamageTables(db: realm) {
    let result = 
`   damageTables = {
`;
    const usedNames = new Map<string, boolean>();
    for (const unit of db.objects<def.UnitWarscroll>(model.UnitWarscroll.name)) {
        const name = unit.subName ? `${unit.name} ${unit.subName}` : unit.name;
        const id = getId(name, unit.id, usedNames);
        if (unit.damageTable.length === 0) continue;
        const damageTable = unit.damageTable;
        result += 
`
    ${id}: {
        id: "${id}",
        ranges: [${damageTable[0].values.map(x => `"${x.wounds}"`).join(', ')}],
        columns: [${damageTable.map(x => `{ name: "${x.name}", values: [${x.values.map(y => `${escapeQuotedString(y.value)}`).join(', ')}] }`)}],
    },
`;    
}
result += 
`   };
`
return result;
}

function getValue(value: string | undefined, name: string, unit: def.UnitWarscroll, id: string) {
    if (value === "-" || value === undefined) return "undefined";
    if (value === "✹") {
       const damagePairs = unit.damageTable.findIndex(x => name.indexOf(x.name) >= 0);
       if (damagePairs >= 0) {
            return `this.damageTables.${id}.columns[${damagePairs}]`;
       } else if (name !== "Move" && name !== "Wounds") {
         console.error(`Warning: Unable to find damage ${name} for ${unit.name} (available: ${unit.damageTable.map(x => x.name).join(', ')})`);
       }
    }
    return `"${value}"`;
}

function compoundKeywordsToString(keywords: def.CompoundKeyword[]) {
    return `[${keywords.map(y => `[${y.keywords.map(z => `"${z.toUpperCase()}"`).join(', ')}]`).join(', ')}]`;
}

function getUnits(db: realm) {
    
    let result = 
`   units = {
`;
    const usedNames = new Map<string, boolean>();
    for (const unit of db.objects<def.UnitWarscroll>(model.UnitWarscroll.name)) {
        const name = unit.subName ? `${unit.name} ${unit.subName}` : unit.name;
        const id = getId(name, unit.id, usedNames);
        if (!id) continue;
        result += 
`       ${id}: {
            id: "${id}",
            model: this.models.${id},
            description: ${escapeQuotedString(unit.blurb)},
            flavor: ${escapeQuotedString(unit.about)},
            factions: [${unit.factions.map(x => `this.factions.${toCamelCase(x)}`).join(', ')}],
            size: ${unit.unitSizeMin},
            maxSize: ${unit.unitSizeMax},
            points: ${unit.points},
            maxPoints: ${unit.pointsMax},
            keywords: [${unit.keywords.map(x => `"${x}"`).join(', ')}],
            wounds: ${getValue(unit.wounds, "Wounds", unit, id)},
            move: ${getValue(unit.move, "Move", unit, id)},
            save: ${getValue(unit.save, "Save", unit, id)},
            bravery: "${unit.bravery}",
            pictureUrl: ${escapeQuotedString(unit.imageUrl)},
`;
        if (unit.upgrades) {
            result += 
`           options: [${unit.upgrades.map(x => `this.options.${toCamelCase(`${unit.name} ${x.name}`)}`).join(', ')}],
`
        }
        if (unit.abilities.length > 0 || unit.specialRules.length > 0 || unit.magicAbilities.length > 0) {
            const abilities = unit.abilities.map(x => x.name).concat(unit.specialRules.map(x => x.name)).concat(unit.magicAbilities.map(x => x.name));
            result += 
`           abilities: [${abilities.map(x => `this.abilities.${toCamelCase(`${unit.name} ${x}`)}`).join(', ')}],
`
        }
        if (unit.commandAbilities.length > 0) {
            const abilities = unit.commandAbilities.map(x => x.name);
            result += 
`           commandAbilities: [${abilities.map(x => `this.abilities.${toCamelCase(`${unit.name} ${x}`)}`).join(', ')}],
`
        }
        if (unit.weapons) {
            result += 
`           attacks: [${unit.weapons.map(x => `this.attacks.${toCamelCase(`${unit.name} ${x.name}`)}`).join(', ')}],
`
        }
        if (unit.battlefieldRoles) {
            for (const role of unit.battlefieldRoles) {
                if (role === 'Other') continue;
                result += 
`           is${role}: (ws: WarscrollInterface) => true,
`;
            }
        }
        if (unit.overriddenRoles) {
            for (const role of unit.overriddenRoles) {
                if (unit.battlefieldRoles.some(x => x === role)) continue;
                const conditions: string[] = [];
                if (unit.overrideAllegiance) {
                    conditions.push(`ws.allegiance.id === this.allegiances.${toAllegianceId(unit.overrideAllegiance)}.id`);
                }
                if (unit.overrideGeneralKeywords && unit.overrideGeneralKeywords.length) {
                    conditions.push(`ws.general && hasKeyword(ws.general.unit, ${compoundKeywordsToString(unit.overrideGeneralKeywords)})`);
                }
                result += 
`           is${role}: (ws: WarscrollInterface) => ${conditions.join(' && ')},
`;
            }
        }

        if (unit.magicBlurb) {
            result +=
`           magicDescription: ${escapeQuotedString(unit.magicBlurb)},`
        }

        result += 
`       },
`;
    }
    result +=  
`   };
`
    return result;
}

function getExceptionalTraits(allegiance: def.RealmAllegiance, groups: def.ExceptionalTraitGroup[], name: string, usedNames: Map<string, boolean>) {
    let result = "";
    for (const artefactGroup of groups) {
        const groupTitle = artefactGroup.groupTitle.toLowerCase();
        for (const trait of artefactGroup.traits) {
            const id = getId(`${allegiance.name} ${groupTitle} ${trait}`, artefactGroup.id, usedNames);
            result += 
`               ${id}: {
                id: "${id}",
                ability: { name: "${trait}", description: "" },
                allegiance: this.allegiances.${toCamelCase(allegiance.name)},
                category: "${name}",
`;
            if (artefactGroup.keywords) {
                result += 
`                   isAvailable: multiKeywordAvailable("${name}", "${allegiance.keyword.toUpperCase()}", ${compoundKeywordsToString(artefactGroup.keywords)}),
`
            } else {
                result +=
`                   isAvailable: artifactAvailable,
`;
            }
            result += 
`               },
`;
        }
    }
    return result;
}

function getExtraAbilities(db: realm) {
    let result = 
`   extraAbilities = {
        `;

        const usedNames = new Map<string, boolean>();
        for (const allegiance of db.objects<def.RealmAllegiance>(model.RealmAllegiance.name)) {
        for (const commandTraitGroup of allegiance.commandTraitGroups) {
            for (const commandTrait of commandTraitGroup.commandTraits) {
                const id = getId(commandTraitGroup.keywords ? `${allegiance.name} ${commandTraitGroup.keywords.map(y => y.keywords.join(' ')).join(' ')} ${commandTrait}`
                    : `${allegiance.name} ${commandTrait}`, commandTraitGroup.id, usedNames);
                result += 
`               ${id}: {
                    id: "${id}",
                    ability: { name: "${commandTrait}", description: "" },
                    allegiance: this.allegiances.${toCamelCase(allegiance.name)},
                    category: "command",
`;
                if (commandTraitGroup.keywords) {
                    result += 
`                   isAvailable: commandTraitWithKeywordAvailable(${compoundKeywordsToString(commandTraitGroup.keywords)}),
`
                } else {
                    result +=
`                   isAvailable: commandTraitAvailable,
`;
                }
                result += 
`               },
`;
            }
        }

        for (const artefactGroup of allegiance.artefactGroups) {
            const groupTitle = artefactGroup.groupTitle.toLowerCase();
            for (const artefact of artefactGroup.artefacts) {
                const id = getId(`${allegiance.name} ${groupTitle} ${artefact}`, artefactGroup.id, usedNames);
                if (!id) continue;
                result += 
`               ${id}: {
                    id: "${id}",
                    ability: { name: "${artefact}", description: "" },
                    allegiance: this.allegiances.${toCamelCase(allegiance.name)},
                    category: "${artefactGroup.groupTitle}",
`;
                if (artefactGroup.keywords) {
                    result += 
`                   isAvailable: multiKeywordAvailable("${artefactGroup.groupTitle}", "${allegiance.keyword.toUpperCase()}", ${compoundKeywordsToString(artefactGroup.keywords)}),
`
                } else {
                    result +=
`                   isAvailable: artifactAvailable,
`;
                }
                result += 
`               },
`;
            }
        }

        result += getExceptionalTraits(allegiance, allegiance.mountTraitGroups, "mount", usedNames);
        result += getExceptionalTraits(allegiance, allegiance.prayerGroups, "prayer", usedNames);        
        result += getExceptionalTraits(allegiance, allegiance.spellGroups, "spell", usedNames);
    }

    result += `
    };
`;
    return result;
}


function getBattalions(db: realm) {
    let result = 
`   battalions = {
`;
    const ids = new Map<string, boolean>();
    for (const battalion of db.objects<def.BattalionWarscroll>(model.BattalionWarscroll.name)) {
        const id = getId(battalion.name, battalion.id, ids);
        result += 
`       ${id}: {
            id: "${id}",
            name: ${escapeQuotedString(battalion.name)},
            allegiances: [${battalion.allegiance.map(x => allegianceIdByKeyword.get(x)).filter(x => x !== undefined).map(x => `this.allegiances.${x}`)}],
            description: ${escapeQuotedString(battalion.about)},
            pictureUrl: ${escapeQuotedString(battalion.imageUrl)},
            points: ${battalion.points},
            units: [${battalion.organisation.map(x => `{ id: "${x.id}", countMin: ${x.min}, countMax: ${x.max}, required: ${x.required}, units: [${
                x.compoundKeywords.map(y => `[${y.keywords.map(z => `"${z}"`).join(', ')}]`).join(', ')
            }] }`).join(', ')}],
            abilities: [${battalion.abilities.map(x => `this.abilities.${toCamelCase(`${battalion.name} ${x.name}`)}`).join(', ')}],
`;
        if (battalion.organisationFootnote) {
            result += 
`           organisationFootnote: ${escapeQuotedString(battalion.organisationFootnote)},`
        }
        result += `
        },`;
    }
    result +=  `${tab}}
`
    return result;
}

function getEndlessSpells(db: realm) {
    let result = 
`   sceneries = {
    `;
    for (const endlessSpell of db.objects<def.EndlessSpell>(model.EndlessSpell.name)) {
        const id = toCamelCase(endlessSpell.name);
        result += `${tab}${tab}${id}: {
            id: "${id}",
            name: ${escapeQuotedString(endlessSpell.name)},
            points: ${endlessSpell.points},
            description: ${escapeQuotedString(endlessSpell.about)},
`;
        result += `
        },`;
    }
    result +=  `${tab}}
`
    return result;
}


function getArmyOptions(db: realm) {
    let result = 
`   armyOptions = new Map([
    `;
    for (const allegiance of db.objects<def.RealmAllegiance>(model.RealmAllegiance.name)) {
        const id = toCamelCase(allegiance.name);
        if (allegiance.divisionName) {
            result += `["${id}", { name: ${escapeQuotedString(allegiance.divisionName)}, values: [${allegiance.divisions.map(x => escapeQuotedString(x.name))}] }],`;
        }
    }
    result +=  
`   ]);
`
    return result;
}