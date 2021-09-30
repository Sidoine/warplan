import * as fs from "fs";
import {
    Value,
    ImportedDataStore,
    isDamageColumn,
    Ability
} from "../common/data";
import { Dump } from "../common/definitions";
import { importData } from "./import";

function toPascalCase(name: string) {
    return name[0].toUpperCase() + name.substr(1);
}

function escapeString(text: string) {
    return text.replace(/[\n"]/g, s => `\\${s}`);
}

function escapeQuotedString(text: string | null | undefined) {
    return JSON.stringify(text);
}

const tab = "    ";
async function load() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const db: Dump = require("../../assets/dump.json");

        let result = `import { ImportedDataStore, Faction } from "../../common/data";
import { Role, KeywordCategory } from "../../common/definitions";

export class ImportedDataStoreImpl implements ImportedDataStore {
`;
        const dataStore = importData(db);

        result += writeModels(dataStore);
        result += writeFactions(dataStore);
        result += writeAbilities(dataStore);
        result += writeDamageTables(dataStore);
        result += writeAttacks(dataStore);
        result += writeOptions(dataStore);
        result += writeUnits(dataStore);
        result += writeBattalionAbilities(dataStore);
        result += writeBattalionUnits(dataStore);
        result += writeBattalions(dataStore);
        result += writeBattalionGroups(dataStore);
        result += writeGenericBattalionGroups(dataStore);
        result += writeRealms(dataStore);
        result += writeAbilityGroups(dataStore);
        result += writeGenericAbilityGroups(dataStore);
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

function writeFactions(db: ImportedDataStore) {
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

function writeModels(db: ImportedDataStore) {
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

function writeOptions(db: ImportedDataStore) {
    let result = `   options = {
`;
    for (const option of Object.values(db.options)) {
        const id = option.id;
        result += `
        ${id}: {
            id: "${id}",
            name: "${option.name}",
`;
        if (option.attacks) {
            result += `            attacks: [${option.attacks
                .map(x => `this.attacks.${x.id}`)
                .join(", ")}],\n`;
        }
        if (option.abilities) {
            result += `            abilities: [${option.abilities
                .map(x => `this.abilities.${x.id}`)
                .join(", ")}],\n`;
        }
        if (option.unitCategory !== undefined) {
            result += `            unitCategory: ${JSON.stringify(
                option.unitCategory
            )},\n`;
        }
        if (option.modelCategory !== undefined) {
            result += `            modelCategory: ${JSON.stringify(
                option.modelCategory
            )},\n`;
        }
        if (option.champion) {
            result += `            champion: ${JSON.stringify(
                option.champion
            )},\n`;
        }
        if (option.ratio) {
            result += `            ratio: ${JSON.stringify(option.ratio)},\n`;
        }
        result += `        },
`;
    }
    result += `   };
`;
    return result;
}

function writeAbilities(db: ImportedDataStore) {
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
`;
        if (ability.restrictions) {
            result += `            restrictions: ${JSON.stringify(
                ability.restrictions
            )},
`;
        }
        result += `        },
`;
    }

    result += `   };
`;
    return result;
}

function writeAttacks(db: ImportedDataStore) {
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

function writeDamageTables(db: ImportedDataStore) {
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

function writeValue(value: Value, data: ImportedDataStore) {
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

function writeUnits(db: ImportedDataStore) {
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
}           model: this.models.${unit.model.id},
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
        if (unit.roles) {
            result += `           roles: [${unit.roles
                .map(x => `Role.${toPascalCase(x)}`)
                .join(", ")}],\n`;
        }

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

function writeBattalionAbilities(db: ImportedDataStore) {
    let result = `   battalionAbilities = {
`;
    for (const ability of Object.values(db.battalionAbilities)) {
        const id = ability.id;
        if (!id) continue;
        result += `       ${id}: {
            id: "${id}",
            name: ${escapeQuotedString(ability.name)},
            description: ${escapeQuotedString(ability.description)},
            grantsExtraEnhancement: ${JSON.stringify(
                ability.grantsExtraEnhancement
            )},
        },
`;
    }
    result += `   };
`;
    return result;
}

function writeBattalionUnits(db: ImportedDataStore) {
    let result = `   battalionUnits = {
`;
    for (const battalionUnit of Object.values(db.battalionUnits)) {
        const id = battalionUnit.id;
        if (!id) continue;
        result += `       ${id}: {
            id: ${JSON.stringify(battalionUnit.id)},
            name: ${JSON.stringify(battalionUnit.name)},
            restrictions: ${JSON.stringify(battalionUnit.restrictions)},
            imageName: ${JSON.stringify(battalionUnit.imageName)},
            min: ${JSON.stringify(battalionUnit.min)},
            max: ${JSON.stringify(battalionUnit.max)},
            eitherOr: ${JSON.stringify(battalionUnit.eitherOr)},
            woundsLimit: ${JSON.stringify(battalionUnit.woundsLimit)},
            order: ${JSON.stringify(battalionUnit.order)},
`;
        if (battalionUnit.requiredRoles) {
            result += `            requiredRoles: [${battalionUnit.requiredRoles
                .map(x => `Role.${toPascalCase(x)}`)
                .join(", ")}],
`;
        }
        if (battalionUnit.excludedRoles) {
            result += `            excludedRoles: [${battalionUnit.excludedRoles
                .map(x => `Role.${toPascalCase(x)}`)
                .join(", ")}],
`;
        }
        if (battalionUnit.keywords) {
            result += `            keywords: ${JSON.stringify(
                battalionUnit.keywords
            )},\n`;
        }
        result += `${tab}},
`;
    }
    result += `   };
`;
    return result;
}

function writeBattalions(db: ImportedDataStore) {
    let result = `   battalions = {
`;
    for (const battalion of Object.values(db.battalions)) {
        const id = battalion.id;
        result += `       ${id}: {
            id: "${id}",
            name: ${escapeQuotedString(battalion.name)},
            onePerArmy: ${JSON.stringify(battalion.onePerArmy)},
            units: [${battalion.units
                .map(x => `this.battalionUnits.${x.id}`)
                .join(", ")}],
            abilities: [${battalion.abilities
                .map(x => `this.battalionAbilities.${x.id}`)
                .join(", ")}],
`;

        result += `
        },
`;
    }
    result += `${tab}}
`;
    return result;
}

function writeBattalionGroups(db: ImportedDataStore) {
    let result = `   battalionGroups = {
`;
    for (const battalionGroup of Object.values(db.battalionGroups)) {
        const id = battalionGroup.id;
        result += `       ${id}: {
            id: "${id}",
            name: ${escapeQuotedString(battalionGroup.name)},
            description: ${escapeQuotedString(battalionGroup.description)},
            battalions: [${battalionGroup.battalions
                .map(x => `this.battalions.${x.id}`)
                .join(", ")}],
`;
        if (battalionGroup.restrictions) {
            result += `            restrictions: ${battalionGroup.restrictions},\n`;
        }
        result += `
        },
`;
    }
    result += `${tab}}
`;
    return result;
}

function writeGenericBattalionGroups(db: ImportedDataStore) {
    return `   genericBattalionGroups = [${db.genericBattalionGroups.map(
        x => `this.battalionGroups.${x.id}`
    )}]\n`;
}

function ability(ability?: Ability) {
    if (!ability) return "undefined";
    return `this.abilities.${ability.id}`;
}

function abilities(abilities: Ability[]) {
    return `[${abilities.map(ability).join(", ")}]`;
}

function writeRealms(db: ImportedDataStore) {
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

function writeAbilityGroups(db: ImportedDataStore) {
    let result = `${tab}abilityGroups = {\n`;
    for (const group of Object.values(db.abilityGroups)) {
        result += `${tab}${tab}${group.id}: {
            id: "${group.id}",
            name: ${escapeQuotedString(group.name)},
            abilities: ${abilities(group.abilities)},
            category: ${JSON.stringify(group.category)},
`;
        if (group.restrictions) {
            result += `            restrictions: ${JSON.stringify(
                group.restrictions
            )},
`;
        }
        if (group.allowUniqueUnits) {
            result += `${tab}${tab}${tab}allowUniqueUnits: true,
`;
        }
        if (group.keywords) {
            result += `${tab}${tab}${tab}keywords: ${JSON.stringify(
                group.keywords
            )},
`;
        }
        result += `        },
`;
    }
    result += `${tab}}
`;
    return result;
}

function writeGenericAbilityGroups(db: ImportedDataStore) {
    return `${tab}genericAbilityGroups = [${db.genericAbilityGroups.map(
        x => `this.abilityGroups.${x.id}`
    )}];
`;
}

function writeConstructor(db: ImportedDataStore) {
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
        if (faction.battalionGroups) {
            result += `${tab}this.factions.${
                faction.id
            }.battalionGroups = [${faction.battalionGroups
                .map(x => `this.battalionGroups.${x.id}`)
                .join(", ")}];
`;
        }
    }
    result += `}\n`;
    return result;
}
