import * as fs from "fs";
import { Value, DataStore, isDamageColumn, Ability } from "../common/unit";
import { Dump } from "../common/definitions";
import { importData } from "./import";

function toPascalCase(name: string) {
    return name[0].toUpperCase() + name.substr(1);
}

function escapeString(text: string) {
    return text.replace(/[\n"]/g, s => `\\${s}`);
}

function escapeQuotedString(text: string | null | undefined) {
    if (!text) return "undefined";
    return '"' + text.replace(/[\n"]/g, s => `\\${s}`) + '"';
}

const tab = "    ";
async function load() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const db: Dump = require("../../assets/dump.json");

        let result = `import { DataStore, Faction } from "../../common/unit";
import { Role, KeywordCategory } from "../../common/definitions";

export class DataStoreImpl implements DataStore {
`;
        const dataStore = importData(db);

        result += writeModels(dataStore);
        result += writeFactions(dataStore);
        result += writeAbilities(dataStore);
        result += writeDamageTables(dataStore);
        result += writeOptions(dataStore);
        result += writeAttacks(dataStore);
        result += writeUnits(dataStore);
        result += writeBattalions(dataStore);
        result += writeRealms(dataStore);
        result += writeAbilityGroups(dataStore);
        result += writeConstructor(dataStore);
        result += `
        sceneries = {};
        boxes = [];
}`;
        fs.writeFileSync("packages/web/stores/imported-data.ts", result);
    } catch (error) {
        console.error(error);
    }
    process.exit();
}

load();

function writeFactions(db: DataStore) {
    let result = `${tab}factions: Record<string, Faction> = {
`;
    for (const faction of Object.values(db.factions)) {
        result += `       ${faction.id}: {
            id: "${faction.id}",
            category: KeywordCategory.${toPascalCase(faction.category)},
            name: "${escapeString(faction.name)}",
            children: [],
        },
`;
    }
    result += `   };
`;
    return result;
}

function writeModels(db: DataStore) {
    let result = `   models = {
`;
    for (const model of Object.values(db.models)) {
        result += `       ${model.id}: {
            id: "${escapeString(model.id)}",
            name: "${escapeString(model.name)}",
        },
`;
    }
    result += `   };
`;
    return result;
}

function writeOptions(db: DataStore) {
    let result = `   options = {
`;
    for (const option of Object.values(db.options)) {
        const id = option.id;
        result += `
        ${id}: {
            id: "${id}",
            name: "${option.name}",
        },
`;
    }
    result += `   };
`;
    return result;
}

function writeAbilities(db: DataStore) {
    let result = `   abilities = {
`;
    for (const ability of Object.values(db.abilities)) {
        result += `
        ${ability.id}: {
            id: "${ability.id}",
            name: "${ability.name}",
            description: ${JSON.stringify(ability.description)},
            category: ${JSON.stringify(ability.category)},
            effects: ${JSON.stringify(ability.effects)},
            flavor: ${JSON.stringify(ability.flavor)},
        },
`;
    }

    result += `   };
`;
    return result;
}

function writeAttacks(db: DataStore) {
    let result = `   attacks = {
`;
    for (const weapon of Object.values(db.attacks)) {
        result += `
        ${weapon.id}: {
            id: "${weapon.id}",
            name: "${weapon.name}",
            attacks: ${writeValue(weapon.attacks, db)},
            damage: ${writeValue(weapon.damage, db)},
            toHit: ${writeValue(weapon.toHit, db)},
            toWound: ${writeValue(weapon.toWound, db)},
            melee: ${weapon.melee},
            range: ${writeValue(weapon.range, db)},
            rend: ${writeValue(weapon.rend, db)},
        },
`;
    }
    result += `   };
`;
    return result;
}

function writeDamageTables(db: DataStore) {
    let result = `   damageTables = {
`;
    for (const damageTable of Object.values(db.damageTables)) {
        const id = damageTable.id;
        result += `
    ${id}: {
        id: "${id}",
        ranges: ${JSON.stringify(damageTable.ranges)},
        columns: ${JSON.stringify(damageTable.columns)},
    },
`;
    }
    result += `   };
`;
    return result;
}

function writeValue(value: Value, data: DataStore) {
    if (value === undefined) return "undefined";
    if (isDamageColumn(value)) {
        const damageTable = Object.values(data.damageTables).find(x =>
            x.columns.includes(value)
        );
        if (damageTable) {
            const index = damageTable.columns.indexOf(value);
            return `this.damageTables.${damageTable.id}.columns[${index}]`;
        }
    }
    return JSON.stringify(value);
}

function writeUnits(db: DataStore) {
    let result = `   units = {
`;
    for (const unit of Object.values(db.units)) {
        const id = unit.id;
        if (!id) continue;
        result += `       ${id}: {
            id: "${id}",
            name: ${escapeQuotedString(unit.name)},
${
    unit.subName
        ? `subName: ${escapeQuotedString(unit.subName)},
            `
        : ""
}           model: this.models.${id},
            description: ${escapeQuotedString(unit.description)},
            flavor: ${escapeQuotedString(unit.flavor)},
            factions: [${unit.factions
                .map(x => `this.factions.${x.id}`)
                .join(", ")}],
            size: ${unit.size},
            points: ${unit.points},
            keywords: ${JSON.stringify(unit.keywords)},
            wounds: ${writeValue(unit.wounds, db)},
            move: ${writeValue(unit.move, db)},
            save: ${writeValue(unit.save, db)},
            bravery: "${unit.bravery}",
            pictureUrl: ${escapeQuotedString(unit.pictureUrl)},
`;
        if (unit.single) {
            result += `            single: true,
`;
        }
        if (unit.unique) {
            result += `            unique: true,
`;
        }
        if (unit.options) {
            result += `           options: [${unit.options
                .map(x => `this.options.${x.id}`)
                .join(", ")}],
`;
        }
        if (unit.abilities) {
            const abilityIds = unit.abilities;
            result += `           abilities: [${abilityIds
                .map(x => `this.abilities.${x.id}`)
                .join(", ")}],
`;
        }
        if (unit.commandAbilities) {
            const abilityIds = unit.commandAbilities.map(x => x.id);
            result += `           commandAbilities: [${abilityIds
                .map(x => `this.abilities.${x}`)
                .join(", ")}],
`;
        }
        if (unit.attacks) {
            result += `           attacks: [${unit.attacks
                .map(x => `this.attacks.${x.id}`)
                .join(", ")}],
`;
        }
        if (unit.maxCount) {
            result += `           maxCount: ${unit.maxCount},\n`;
        }
        if (unit.role) {
            result += `           role: Role.${toPascalCase(unit.role)},\n`;
        }
        //         if (unit.overriddenRoles) {
        //             for (const role of unit.overriddenRoles) {
        //                 if (unit.battlefieldRoles.some((x) => x === role)) continue;
        //                 const conditions: string[] = [];
        //                 if (
        //                     unit.overrideAllegiances &&
        //                     unit.overrideAllegiances.length > 0
        //                 ) {
        //                     conditions.push(
        //                         unit.overrideAllegiances
        //                             .map(
        //                                 (x) =>
        //                                     `ws.allegiance.id === ${escapeQuotedString(
        //                                         toAllegianceId(x)
        //                                     )}`
        //                             )
        //                             .join(" || ")
        //                     );
        //                 }
        //                 if (
        //                     unit.overrideGeneralKeywords &&
        //                     unit.overrideGeneralKeywords.length
        //                 ) {
        //                     conditions.push(
        //                         `ws.general && hasKeywords(ws.general.definition, ${compoundKeywordsToString(
        //                             unit.overrideGeneralKeywords
        //                         )})`
        //                     );
        //                 }

        //                 if (
        //                     unit.overrideCountDependantKeywords &&
        //                     unit.overrideCountDependantKeywords.length
        //                 ) {
        //                     conditions.push(
        //                         `hasKeywordInArmy(ws, ${compoundKeywordsToString(
        //                             unit.overrideCountDependantKeywords
        //                         )})`
        //                     );
        //                 }

        //                 result += `           is${role}: (ws: WarscrollInterface) => ${conditions.join(
        //                     " && "
        //                 )},
        // `;
        //             }
        //         }

        if (unit.magicDescription) {
            result += `           magicDescription: ${escapeQuotedString(
                unit.magicDescription
            )},
`;
        }

        if (unit.damageTable) {
            result += `           damageTable: this.damageTables.${unit.damageTable.id},
`;
        }

        result += `       },
`;
    }
    result += `   };
`;
    return result;
}
function writeBattalions(db: DataStore) {
    let result = `   battalions = {
`;
    for (const battalion of Object.values(db.battalions)) {
        const id = battalion.id;
        result += `       ${id}: {
            id: "${id}",
            name: ${escapeQuotedString(battalion.name)},
            allegiances: [${battalion.allegiances.map(
                x => `this.allegiances.${x}`
            )}],
            description: ${escapeQuotedString(battalion.description)},
            pictureUrl: ${escapeQuotedString(battalion.pictureUrl)},
            points: ${battalion.points},
`;
        // units: [${battalion.units
        //     .map(
        //         (x) =>
        //             `{ id: "${objectId(x)}", countMin: ${
        //                 x.min
        //             }, countMax: ${x.max}, required: ${
        //                 x.required
        //             }, units: [${x.compoundKeywords
        //                 .map(
        //                     (y) =>
        //                         `[${y.keywords
        //                             .map((z) => `"${z}"`)
        //                             .join(", ")}]`
        //                 )
        //                 .join(", ")}] }`
        //     )
        //     .join(", ")}],
        // abilities: [${battalion.abilities
        //     .map((x) => `this.abilities.${objectId(x)}`)
        //     .join(", ")}],
        // `;
        // if (battalion.organisationFootnote) {
        //     result += `           organisationFootnote: ${escapeQuotedString(
        //         battalion.organisationFootnote
        //     )},`;
        // }
        result += `
        },
`;
    }
    result += `${tab}}
`;
    return result;
}

// function writeEndlessSpells(db: realm) {
//     let result = `   sceneries = {
//     `;
//     for (const endlessSpell of db.objects<def.EndlessSpell>(
//         modelNames.EndlessSpell
//     )) {
//         const id = objectId(endlessSpell);
//         result += `${tab}${tab}${id}: {
//             id: "${id}",
//             name: ${escapeQuotedString(endlessSpell.name)},
//             points: ${endlessSpell.points},
//             description: ${escapeQuotedString(endlessSpell.blurb)},
//             flavor: ${escapeQuotedString(endlessSpell.about)},
//             keywords: [${endlessSpell.keywords
//                 .map((x) => `"${x}"`)
//                 .join(", ")}],
//             pictureUrl: ${escapeQuotedString(endlessSpell.imageUrl)},
// `;
//         if (
//             endlessSpell.abilities.length > 0 ||
//             endlessSpell.specialRules.length > 0 ||
//             endlessSpell.magicAbilities.length > 0
//         ) {
//             const abilityIds = endlessSpell.abilities
//                 .map((x) => objectId(x))
//                 .concat(endlessSpell.specialRules.map((x) => objectId(x)))
//                 .concat(endlessSpell.magicAbilities.map((x) => objectId(x)));
//             result += `           abilities: [${abilityIds
//                 .map((x) => `this.abilities.${x}`)
//                 .join(", ")}],
// `;
//         }
//         if (endlessSpell.commandAbilities.length > 0) {
//             const abilityIds = endlessSpell.commandAbilities.map((x) =>
//                 objectId(x)
//             );
//             result += `           commandAbilities: [${abilityIds
//                 .map((x) => `this.abilities.${x}`)
//                 .join(", ")}],
// `;
//         }
//         result += `
//     },`;
//     }
//     result += `${tab}}
// `;
//     return result;
// }

function ability(ability?: Ability) {
    if (!ability) return "undefined";
    return `this.abilities.${ability.id}`;
}

function abilities(abilities: Ability[]) {
    return `[${abilities.map(ability).join(", ")}]`;
}

function writeRealms(db: DataStore) {
    let result = `${tab}realms = {\n`;
    for (const realm of Object.values(db.realms)) {
        result += `${tab}${tab}${realm.id}: {
            id: "${realm.id}",
            name: ${escapeQuotedString(realm.name)},
            realmName: ${escapeQuotedString(realm.realmName)},
            magic: ${ability(realm.magic)},
            commands: ${abilities(realm.commands)}
        },
`;
    }
    result += `${tab}}`;
    return result;
}

function writeAbilityGroups(db: DataStore) {
    let result = `${tab}abilityGroups = {\n`;
    for (const group of Object.values(db.abilityGroups)) {
        result += `${tab}${tab}${group.id}: {
            id: "${group.id}",
            name: ${escapeQuotedString(group.name)},
            abilities: ${abilities(group.abilities)},
            category: ${JSON.stringify(group.category)},
`;
        if (group.allowUniqueUnits) {
            result += `${tab}${tab}allowUniqueUnits: true,
`;
        }
        result += `        },
`;
    }
    result += `${tab}}`;
    return result;
}

function writeConstructor(db: DataStore) {
    let result = `${tab}constructor() {\n`;
    for (const faction of Object.values(db.factions)) {
        if (faction.parent) {
            result += `${tab}this.factions.${faction.id}.parent = this.factions.${faction.parent.id};
${tab}this.factions.${faction.parent.id}.children.push(this.factions.${faction.id});
`;
        }
        if (faction.abilityGroups) {
            result += `${tab}this.factions.${
                faction.id
            }.abilityGroups = [${faction.abilityGroups
                .map(x => `this.abilityGroups.${x.id}`)
                .join(", ")}];
`;
        }
    }
    result += `}\n`;
    return result;
}
