import realm from "realm";
import * as fs from "fs";
import * as def from "./definitions";
import { modelNames } from "./definitions";

//const schemaVersion = 54;

function toCamelCase(name: string) {
    return name
        .toLowerCase()
        .replace(/[^\w]+(\w)/g, (p, x) => x.toUpperCase())
        .replace(/^(.)/, (p, x) => x.toLowerCase())
        .replace(/[^A-Za-z0-9]/g, "")
        .replace(/^[0-9]/g, "_");
}

function toPascalCase(name: string) {
    return name
        .toLowerCase()
        .replace(/[^\w]+(\w)/g, (p, x) => x.toUpperCase())
        .replace(/^(.)/, (p, x) => x.toUpperCase())
        .replace(/[^A-Za-z0-9]/g, "")
        .replace(/^[0-9]/g, "_");
}

function escapeString(text: string) {
    return text.replace(/[\n"]/g, s => `\\${s}`);
}

function escapeQuotedString(text: string | null | undefined) {
    if (!text) return "undefined";
    return '"' + text.replace(/[\n"]/g, s => `\\${s}`) + '"';
}

const tab = "    ";
const allegianceIdByKeyword = new Map<string, string>();
async function load() {
    try {
        const db = await realm.open({
            path: "src/tools/en.realm"
        });
        const models = db.schema;
        const definitions: string[] = [];
        const modelNames: string[] = [];
        for (const model of models) {
            modelNames.push(model.name);
            definitions.push(`export interface ${model.name} {`);
            for (const propertyName in model.properties) {
                let propertyType = model.properties[propertyName];
                if (typeof propertyType === "string") {
                    const optional = propertyType.endsWith("?");
                    if (optional) {
                        propertyType = propertyType.slice(
                            0,
                            propertyType.length - 1
                        );
                    }
                    const orNull = optional ? " | null" : "";
                    if (propertyType === "string") {
                        definitions.push(
                            `${tab}${propertyName}: string${orNull};`
                        );
                    } else if (
                        propertyType === "number" ||
                        propertyType === "int" ||
                        propertyType === "double"
                    ) {
                        definitions.push(
                            `${tab}${propertyName}: number${orNull};`
                        );
                    } else if (propertyType === "bool") {
                        definitions.push(
                            `${tab}${propertyName}: boolean${orNull};`
                        );
                    } else if (propertyType === "string[]") {
                        definitions.push(`${tab}${propertyName}: string[];`);
                    } else {
                        definitions.push(
                            `${tab}${propertyName}: ${propertyType}${orNull};`
                        );
                    }
                } else {
                    const orNull = propertyType.optional ? " | null" : "";
                    const itemType =
                        propertyType.type === "list" ||
                        propertyType.type === "object"
                            ? propertyType.objectType
                            : propertyType.type;
                    let type: string;
                    if (itemType === "string") {
                        type = "string";
                    } else if (
                        itemType === "number" ||
                        itemType === "int" ||
                        itemType === "double"
                    ) {
                        type = "number";
                    } else if (itemType === "bool") {
                        type = "boolean";
                    } else {
                        type = itemType || "any";
                    }
                    const array = propertyType.type === "list" ? "[]" : "";
                    definitions.push(
                        `${tab}${propertyName}: ${type}${array}${orNull};`
                    );
                }
            }
            definitions.push("}");
            definitions.push("");
        }
        definitions.push(
            `export const modelNames = { ${modelNames
                .map(x => `${x}: "${x}"`)
                .join(", ")} };`
        );
        fs.writeFileSync("src/tools/definitions.ts", definitions.join("\n"));

        let result = `import { DataStore, GrandAlliance, WarscrollInterface, Box, AbilityCategory } from "./units";
import { hasKeywords } from "./conditions";

export class DataStoreImpl implements DataStore {
`;
        fixIds(db);

        result += getModels(db);
        result += getFactions(db);
        result += getAbilities(db);
        result += getDamageTables(db);
        result += getOptions(db);
        result += getAttacks(db);
        result += getUnits(db);
        result += getExtraAbilities(db);
        result += getArmyOptions(db);
        result += getAllegiance(db);
        result += getBattalions(db);
        result += getEndlessSpells(db);
        result += getRealms(db);
        result += `

        boxes: Box[] = [];
}`;
        fs.writeFileSync("src/stores/imported-data.ts", result);
    } catch (error) {
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

const idMap = new Map<string, string>();

function objectId(o: { id: string }) {
    return idMap.get(o.id) || o.id;
}

function itemId(o: { id: string }, index: number) {
    return idMap.get(`${o.id} ${index}`) || "???";
}

function propertyId<T extends { id: string }>(o: T, prop: keyof T) {
    return idMap.get(`${o.id} ${prop}`) || "???";
}

// Create readable ids
function fixIds(db: Realm) {
    const ids = new Map<string, boolean>();

    function fixId(oldId: string, name: string, alt: string | undefined) {
        let id = toCamelCase(name);
        if (ids.get(id)) {
            if (ids.get(id) && alt) id += toPascalCase(alt);
            while (ids.get(id)) id += "x";
        }
        ids.set(id, true);
        idMap.set(oldId, id);
    }

    function fixObjectId(
        o: { id: string; name: string },
        parent?: { id: string; name: string },
        alt?: string
    ) {
        if (parent) {
            fixId(o.id, `${parent.name} ${o.name}`, alt);
        } else {
            fixId(o.id, o.name, alt);
        }
    }

    function fixItemId(
        o: { id: string; groupTitle: string },
        name: string,
        index: number,
        parent?: { name: string },
        alt?: string
    ) {
        if (parent) {
            fixId(
                `${o.id} ${index}`,
                `${parent.name} ${o.groupTitle} ${name}`,
                alt
            );
        } else {
            fixId(`${o.id} ${index}`, `${o.groupTitle} ${name}`, alt);
        }
    }

    function fixPropertyId<T extends { id: string; name: string }>(
        o: T,
        prop: keyof T,
        parent?: { name: string },
        alt?: string
    ) {
        const name = o[prop];
        if (parent) {
            fixId(`${o.id} ${prop}`, `${parent.name} ${o.name} ${name}`, alt);
        } else {
            fixId(`${o.id} ${prop}`, `${o.name} ${name}`, alt);
        }
    }

    function fixArrayId(
        objects: ReadonlyArray<{ id: string; name: string }>,
        parent?: { name: string },
        alt?: string,
        subName?: string | null
    ) {
        for (const o of objects) {
            fixId(
                o.id,
                parent ? `${parent.name} ${subName || ""} ${o.name}` : o.name,
                alt
            );
        }
    }

    function fixGroupId(
        objects: ReadonlyArray<{ id: string; groupTitle: string }>,
        parent?: { name: string },
        alt?: string
    ) {
        for (const o of objects) {
            fixId(
                o.id,
                parent ? `${parent.name} ${o.groupTitle}` : o.groupTitle,
                alt
            );
        }
    }

    function fixNames(
        objects: ReadonlyArray<string>,
        parent: { id: string; groupTitle: string },
        parentParent?: { name: string },
        alt?: string
    ) {
        for (let i = 0; i < objects.length; i++) {
            fixItemId(parent, objects[i], i, parentParent, alt);
        }
    }

    function fixGroups<T extends { id: string; groupTitle: string }>(
        groups: T[],
        collection: (x: T) => string[],
        parent: { name: string },
        alt?: string
    ) {
        fixGroupId(groups, parent, alt);
        for (const group of groups) {
            fixNames(collection(group), group, parent, alt);
        }
    }

    for (const battalionWarscroll of db.objects<def.BattalionWarscroll>(
        modelNames.BattalionWarscroll
    )) {
        fixId(
            battalionWarscroll.id,
            `${battalionWarscroll.faction} ${battalionWarscroll.name}`,
            undefined
        );
        fixArrayId(battalionWarscroll.abilities, battalionWarscroll, "Ability");
        fixArrayId(
            battalionWarscroll.commandAbilities,
            battalionWarscroll,
            "Command"
        );
        fixArrayId(
            battalionWarscroll.commandTraits,
            battalionWarscroll,
            "CommandTrait"
        );
    }

    fixArrayId(
        db.objects<def.Division>(modelNames.Division),
        undefined,
        "Division"
    );

    for (const endlessSpell of db.objects<def.EndlessSpell>(
        modelNames.EndlessSpell
    )) {
        fixId(endlessSpell.id, endlessSpell.name, "EndlessSpell");
        fixArrayId(endlessSpell.abilities, endlessSpell, "Ability");
        fixArrayId(endlessSpell.magicAbilities, endlessSpell, "Magic");
        fixArrayId(endlessSpell.commandAbilities, endlessSpell, "Command");
        fixArrayId(endlessSpell.specialRules, endlessSpell, "SpecialRule");
    }

    for (const realmAllegiance of db.objects<def.RealmAllegiance>(
        modelNames.RealmAllegiance
    )) {
        fixId(realmAllegiance.id, realmAllegiance.name, "Allegiance");
        fixGroups(
            realmAllegiance.commandTraitGroups,
            x => x.commandTraits,
            realmAllegiance,
            "CommandTrait"
        );
        fixGroups(
            realmAllegiance.artefactGroups,
            x => x.artefacts,
            realmAllegiance,
            "Artefact"
        );
        fixGroups(
            realmAllegiance.mountTraitGroups,
            x => x.traits,
            realmAllegiance,
            "Mount"
        );
        fixGroups(
            realmAllegiance.prayerGroups,
            x => x.traits,
            realmAllegiance,
            "Prayer"
        );
        fixGroups(
            realmAllegiance.spellGroups,
            x => x.traits,
            realmAllegiance,
            "Spell"
        );
        fixArrayId(realmAllegiance.divisions, realmAllegiance, "Division");
        for (const division of realmAllegiance.divisions) {
            if (division.requiredArtefact)
                fixPropertyId(
                    division,
                    "requiredArtefact",
                    realmAllegiance,
                    "Artefact"
                );

            if (division.requiredCommandTrait)
                fixPropertyId(
                    division,
                    "requiredCommandTrait",
                    realmAllegiance,
                    "CommandTrait"
                );
        }
    }

    for (const unitWarscroll of db.objects<def.UnitWarscroll>(
        modelNames.UnitWarscroll
    )) {
        const name = unitWarscroll.subName
            ? `${unitWarscroll.name} ${unitWarscroll.subName}`
            : unitWarscroll.name;
        fixId(unitWarscroll.id, name, unitWarscroll.factions[0]);
        fixArrayId(
            unitWarscroll.specialRules,
            unitWarscroll,
            "Rule",
            unitWarscroll.subName
        );
        fixArrayId(
            unitWarscroll.upgrades,
            unitWarscroll,
            "Upgrade",
            unitWarscroll.subName
        );
        fixArrayId(
            unitWarscroll.abilities,
            unitWarscroll,
            "Ability",
            unitWarscroll.subName
        );
        fixArrayId(
            unitWarscroll.minionAbilities,
            unitWarscroll,
            "MinionAbility",
            unitWarscroll.subName
        );
        fixArrayId(
            unitWarscroll.commandAbilities,
            unitWarscroll,
            "Command",
            unitWarscroll.subName
        );
        fixArrayId(
            unitWarscroll.magicAbilities,
            unitWarscroll,
            "Spell",
            unitWarscroll.subName
        );
        for (const weapon of unitWarscroll.weapons) {
            fixId(
                weapon.id,
                `${name} ${weapon.name}`,
                weapon.missile ? "Ranged" : "Melee"
            );
        }
    }

    for (const realmOfBattle of db.objects<def.RealmOfBattle>(
        modelNames.RealmOfBattle
    )) {
        fixObjectId(realmOfBattle, undefined, "Realm");
        fixGroups(
            realmOfBattle.artefactGroups,
            x => x.artefacts,
            realmOfBattle,
            "Artefact"
        );
        if (realmOfBattle.magic)
            fixObjectId(realmOfBattle.magic, realmOfBattle, "Magic");
        fixArrayId(realmOfBattle.commands, realmOfBattle, "Command");
    }
}

function getFactions(db: realm) {
    const factions: { id: string; grandAlliance: string; name: string }[] = [];
    for (const unit of db.objects<def.UnitWarscroll>(
        modelNames.UnitWarscroll
    )) {
        for (const faction of unit.factions) {
            if (factions.every(x => x.name !== faction)) {
                factions.push({
                    id: toCamelCase(faction),
                    name: faction,
                    grandAlliance: unit.grandAlliance
                });
            }
        }
    }

    let result = `${tab}factions = {
`;
    for (const faction of factions) {
        result += `       ${faction.id}: {
            id: "${faction.id}",
            grandAlliance: GrandAlliance.${faction.grandAlliance.toLowerCase()},
            name: "${escapeString(faction.name)}"
        },
`;
    }
    result += `   };
`;
    return result;
}

function getModels(db: realm) {
    let result = `   models = {
`;
    for (const unit of db.objects<def.UnitWarscroll>(
        modelNames.UnitWarscroll
    )) {
        const name = unit.subName ? `${unit.name} ${unit.subName}` : unit.name;
        const id = objectId(unit);
        result += `       ${id}: {
            id: "${id}",
            name: "${escapeString(name)}"
        },
`;
    }
    result += `   };
`;
    return result;
}

function getAllegiance(db: realm) {
    let result = `   allegiances = {
    `;
    for (const allegiance of db.objects<def.RealmAllegiance>(
        modelNames.RealmAllegiance
    )) {
        const id = objectId(allegiance);
        const keywords = allegiance.keywords;
        allegianceIdByKeyword.set(keywords[0].toUpperCase(), id);
        result += `           ${id}: {
            id: "${id}",
            name: "${escapeString(allegiance.name)}",
            keywords: ["${keywords.map(x => x.toUpperCase()).join('", "')}"],
            alliesKeywords: ${compoundKeywordsToString(allegiance.allies)},
`;
        if (allegiance.grandAlliance) {
            result += `${tab}${tab}${tab}grandAlliance: GrandAlliance.${allegiance.grandAlliance.toLowerCase()},
`;
        }
        if (allegiance.divisions.length > 0) {
            result += `${tab}${tab}${tab}armyOptions: {
                name: ${escapeQuotedString(allegiance.divisionName)},
                values: [${allegiance.divisions
                    .map(x => `this.armyOptions.${objectId(x)}`)
                    .join(", ")}]
            },`;
        }

        result += `       },
`;
    }
    result += `    };
`;
    return result;
}

function getOptions(db: realm) {
    let result = `   options = {
`;
    for (const unit of db.objects<def.UnitWarscroll>(
        modelNames.UnitWarscroll
    )) {
        for (const option of unit.upgrades) {
            const id = objectId(option);
            result += `
        ${id}: {
            id: "${id}",
            name: "${option.name}",
            description: ${escapeQuotedString(option.blurb)},
        },
`;
        }
    }
    result += `   };
`;
    return result;
}

function getUnitAbilities(
    abilities: def.Ability[],
    category?: AbilityCategories
) {
    let result = "";
    for (const ability of abilities) {
        const id = objectId(ability);
        result += `
    ${id}: {
        id: "${id}",
        name: "${ability.name}",
        description: ${escapeQuotedString(ability.blurb)},
`;
        if (ability.lore) {
            result += `           flavor: ${escapeQuotedString(ability.lore)},
`;
        }
        if (category) {
            result += `        category: AbilityCategory.${category},
`;
        }
        result += `        },
`;
    }
    return result;
}

function getAbilities(db: realm) {
    let result = `   abilities = {
`;
    for (const unit of db.objects<def.UnitWarscroll>(
        modelNames.UnitWarscroll
    )) {
        result += getUnitAbilities(unit.abilities);
        result += getUnitAbilities(unit.magicAbilities, "Spell");
        result += getUnitAbilities(unit.commandAbilities, "Command");
        for (const ability of unit.specialRules) {
            const id = objectId(ability);
            result += `
        ${id}: {
            id: "${id}",
            name: "${ability.name}",
            description: ${escapeQuotedString(ability.blurb)},
            category: AbilityCategory.SpecialRule,
        },
`;
        }
    }

    for (const endlessSpell of db.objects<def.EndlessSpell>(
        modelNames.EndlessSpell
    )) {
        result += getUnitAbilities(endlessSpell.abilities);
        result += getUnitAbilities(endlessSpell.magicAbilities, "Spell");
        result += getUnitAbilities(endlessSpell.commandAbilities, "Command");
        for (const ability of endlessSpell.specialRules) {
            const id = objectId(ability);
            result += `
        ${id}: {
            id: "${id}",
            name: "${ability.name}",
            description: ${escapeQuotedString(ability.blurb)},
            category: AbilityCategory.SpecialRule,
        },
`;
        }
    }

    for (const battalion of db.objects<def.BattalionWarscroll>(
        modelNames.BattalionWarscroll
    )) {
        result += getUnitAbilities(battalion.abilities);
        result += getUnitAbilities(battalion.commandAbilities, "Command");
    }

    for (const realmOfBattle of db.objects<def.RealmOfBattle>(
        modelNames.RealmOfBattle
    )) {
        result += getUnitAbilities(realmOfBattle.commands, "Command");
        if (realmOfBattle.magic)
            result += getUnitAbilities([realmOfBattle.magic], "Spell");
    }

    result += `   };
`;
    return result;
}

function getAttacks(db: realm) {
    let result = `   attacks = {
`;
    for (const unit of db.objects<def.UnitWarscroll>(
        modelNames.UnitWarscroll
    )) {
        const unitId = objectId(unit);
        for (const weapon of unit.weapons) {
            const id = objectId(weapon);
            result += `
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
`;
        }
    }
    result += `   };
`;
    return result;
}

function getDamageTables(db: realm) {
    let result = `   damageTables = {
`;
    for (const unit of db.objects<def.UnitWarscroll>(
        modelNames.UnitWarscroll
    )) {
        const id = objectId(unit);
        if (unit.damageTable.length === 0) continue;
        const damageTable = unit.damageTable;
        result += `
    ${id}: {
        id: "${id}",
        ranges: [${damageTable[0].values.map(x => `"${x.wounds}"`).join(", ")}],
        columns: [${damageTable.map(
            x =>
                `{ name: "${x.name}", values: [${x.values
                    .map(y => `${escapeQuotedString(y.value)}`)
                    .join(", ")}] }`
        )}],
    },
`;
    }
    result += `   };
`;
    return result;
}

function getValue(
    value: string | undefined,
    name: string,
    unit: def.UnitWarscroll,
    id: string
) {
    if (value === "-" || value === undefined) return "undefined";
    if (value === "✹") {
        const damagePairs = unit.damageTable.findIndex(
            x => name.indexOf(x.name) >= 0
        );
        if (damagePairs >= 0) {
            return `this.damageTables.${id}.columns[${damagePairs}]`;
        } else if (name !== "Move" && name !== "Wounds") {
            console.error(
                `Warning: Unable to find damage ${name} for ${
                    unit.name
                } (available: ${unit.damageTable.map(x => x.name).join(", ")})`
            );
        }
    }
    return `"${value}"`;
}

function compoundKeywordsToString(keywords: def.CompoundKeyword[]) {
    return `[${keywords
        .map(y => `[${y.keywords.map(z => `"${z.toUpperCase()}"`).join(", ")}]`)
        .join(", ")}]`;
}

function getUnits(db: realm) {
    let result = `   units = {
`;
    for (const unit of db.objects<def.UnitWarscroll>(
        modelNames.UnitWarscroll
    )) {
        const id = objectId(unit);
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
            description: ${escapeQuotedString(unit.blurb)},
            flavor: ${escapeQuotedString(unit.about)},
            factions: [${unit.factions
                .map(x => `this.factions.${toCamelCase(x)}`)
                .join(", ")}],
            size: ${unit.unitSizeMin},
            maxSize: ${unit.unitSizeMax},
            points: ${unit.points},
            maxPoints: ${unit.pointsMax},
            keywords: [${unit.keywords.map(x => `"${x}"`).join(", ")}],
            wounds: ${getValue(unit.wounds, "Wounds", unit, id)},
            move: ${getValue(unit.move, "Move", unit, id)},
            save: ${getValue(unit.save, "Save", unit, id)},
            bravery: "${unit.bravery}",
            pictureUrl: ${escapeQuotedString(unit.imageUrl)},
`;
        if (unit.upgrades) {
            result += `           options: [${unit.upgrades
                .map(x => `this.options.${objectId(x)}`)
                .join(", ")}],
`;
        }
        if (
            unit.abilities.length > 0 ||
            unit.specialRules.length > 0 ||
            unit.magicAbilities.length > 0
        ) {
            const abilityIds = unit.abilities
                .map(x => objectId(x))
                .concat(unit.specialRules.map(x => objectId(x)))
                .concat(unit.magicAbilities.map(x => objectId(x)));
            result += `           abilities: [${abilityIds
                .map(x => `this.abilities.${x}`)
                .join(", ")}],
`;
        }
        if (unit.commandAbilities.length > 0) {
            const abilityIds = unit.commandAbilities.map(x => objectId(x));
            result += `           commandAbilities: [${abilityIds
                .map(x => `this.abilities.${x}`)
                .join(", ")}],
`;
        }
        if (unit.weapons) {
            result += `           attacks: [${unit.weapons
                .map(x => `this.attacks.${objectId(x)}`)
                .join(", ")}],
`;
        }
        if (unit.maxCount) {
            result += `           maxCount: ${unit.maxCount},\n`;
        }
        if (unit.battlefieldRoles) {
            for (const role of unit.battlefieldRoles) {
                if (role === "Other") continue;
                result += `           is${role}: (ws: WarscrollInterface) => true,
`;
            }
        }
        if (unit.overriddenRoles) {
            for (const role of unit.overriddenRoles) {
                if (unit.battlefieldRoles.some(x => x === role)) continue;
                const conditions: string[] = [];
                if (
                    unit.overrideAllegiances &&
                    unit.overrideAllegiances.length > 0
                ) {
                    conditions.push(
                        unit.overrideAllegiances
                            .map(
                                x =>
                                    `ws.allegiance.id === ${escapeQuotedString(
                                        toAllegianceId(x)
                                    )}`
                            )
                            .join(" || ")
                    );
                }
                if (
                    unit.overrideGeneralKeywords &&
                    unit.overrideGeneralKeywords.length
                ) {
                    conditions.push(
                        `ws.general && hasKeywords(ws.general.definition, ${compoundKeywordsToString(
                            unit.overrideGeneralKeywords
                        )})`
                    );
                }
                result += `           is${role}: (ws: WarscrollInterface) => ${conditions.join(
                    " && "
                )},
`;
            }
        }

        if (unit.magicBlurb) {
            result += `           magicDescription: ${escapeQuotedString(
                unit.magicBlurb
            )},
`;
        }

        if (unit.damageTable.length > 0) {
            result += `           damageTable: this.damageTables.${id},
`;
        }

        result += `       },
`;
    }
    result += `   };
`;
    return result;
}

interface AbilityGroup {
    groupTitle: string;
    id: string;
    keywords: def.CompoundKeyword[];
}

type AbilityCategories =
    | "Spell"
    | "CommandTrait"
    | "Mount"
    | "Prayer"
    | "Artefact"
    | "Command";

function getArtefactGroup<T extends AbilityGroup>(
    groups: T[],
    traits: (t: T) => string[],
    category: AbilityCategories,
    allegianceKeyword?: string,
    realm?: string
) {
    let result = "";
    for (const artefactGroup of groups) {
        const groupTitle = artefactGroup.groupTitle.toLowerCase();
        let i = 0;
        for (const trait of traits(artefactGroup)) {
            const id = itemId(artefactGroup, i++);
            result += `               ${id}: {
                id: "${id}",
                ${
                    allegianceKeyword
                        ? `allegianceKeyword: ${escapeQuotedString(
                              allegianceKeyword
                          )},
`
                        : ""
                }${
                realm
                    ? `realmId: ${escapeQuotedString(realm)},
`
                    : ""
            }                category: "${groupTitle}",
                keywords: ${compoundKeywordsToString(artefactGroup.keywords)}, 
                ability: { id: "${id}", name: "${trait}", description: "", category: AbilityCategory.${category} },
               },
`;
        }
    }
    return result;
}

function getExtraAbilitiesWithDivision(
    allegiance: def.RealmAllegiance,
    division: def.Division,
    ability: string,
    category: AbilityCategories,
    keywords: string | null
) {
    const id = propertyId(
        division,
        category === "Artefact" ? "requiredArtefact" : "requiredCommandTrait"
    );
    const allegianceKeyword = allegiance.keywords[0];
    const result = `
    ${id}: {
        id: "${id}",
        ability: { id: "${id}", name: "${ability}", category: AbilityCategory.${category} },
        allegianceKeyword: ${escapeQuotedString(
            allegianceKeyword.toUpperCase()
        )},
        category: "${category}",
        requiredByArmyOption: true,
${
    keywords
        ? `keywords: [[${escapeQuotedString(keywords)}]],
`
        : ""
}        armyOptionKeyword: ${escapeQuotedString(division.name.toUpperCase())}
        },
`;
    return result;
}

function getExtraAbilities(db: realm) {
    let result = `   extraAbilities = {
        `;

    for (const allegiance of db.objects<def.RealmAllegiance>(
        modelNames.RealmAllegiance
    )) {
        const allegianceKeyword = allegiance.keywords[0].toUpperCase();
        result += getArtefactGroup(
            allegiance.commandTraitGroups,
            x => x.commandTraits,
            "CommandTrait",
            allegianceKeyword
        );
        result += getArtefactGroup(
            allegiance.artefactGroups,
            x => x.artefacts,
            "Artefact",
            allegianceKeyword
        );

        for (const division of allegiance.divisions) {
            if (division.requiredCommandTrait)
                result += getExtraAbilitiesWithDivision(
                    allegiance,
                    division,
                    division.requiredCommandTrait,
                    "CommandTrait",
                    division.requiredCommandTraitKeyword
                );
            if (division.requiredArtefact)
                result += getExtraAbilitiesWithDivision(
                    allegiance,
                    division,
                    division.requiredArtefact,
                    "Artefact",
                    division.requiredArtefactKeyword
                );
        }

        result += getArtefactGroup(
            allegiance.mountTraitGroups,
            x => x.traits,
            "Mount",
            allegianceKeyword
        );
        result += getArtefactGroup(
            allegiance.prayerGroups,
            x => x.traits,
            "Prayer",
            allegianceKeyword
        );
        result += getArtefactGroup(
            allegiance.spellGroups,
            x => x.traits,
            "Spell",
            allegianceKeyword
        );
    }

    for (const realmOfBattle of db.objects<def.RealmOfBattle>(
        modelNames.RealmOfBattle
    )) {
        result += getArtefactGroup(
            realmOfBattle.artefactGroups,
            x => x.artefacts,
            "Artefact",
            undefined,
            objectId(realmOfBattle)
        );
    }

    result += `
    };
`;
    return result;
}

function getBattalions(db: realm) {
    let result = `   battalions = {
`;
    for (const battalion of db.objects<def.BattalionWarscroll>(
        modelNames.BattalionWarscroll
    )) {
        const id = objectId(battalion);
        result += `       ${id}: {
            id: "${id}",
            name: ${escapeQuotedString(battalion.name)},
            allegiances: [${battalion.allegiance
                .map(x => allegianceIdByKeyword.get(x.toUpperCase()))
                .filter(x => x !== undefined)
                .map(x => `this.allegiances.${x}`)}],
            description: ${escapeQuotedString(battalion.about)},
            pictureUrl: ${escapeQuotedString(battalion.imageUrl)},
            points: ${battalion.points},
            units: [${battalion.organisation
                .map(
                    x =>
                        `{ id: "${objectId(x)}", countMin: ${
                            x.min
                        }, countMax: ${x.max}, required: ${
                            x.required
                        }, units: [${x.compoundKeywords
                            .map(
                                y =>
                                    `[${y.keywords
                                        .map(z => `"${z}"`)
                                        .join(", ")}]`
                            )
                            .join(", ")}] }`
                )
                .join(", ")}],
            abilities: [${battalion.abilities
                .map(x => `this.abilities.${objectId(x)}`)
                .join(", ")}],
`;
        if (battalion.organisationFootnote) {
            result += `           organisationFootnote: ${escapeQuotedString(
                battalion.organisationFootnote
            )},`;
        }
        result += `
        },
`;
    }
    result += `${tab}}
`;
    return result;
}

function getEndlessSpells(db: realm) {
    let result = `   sceneries = {
    `;
    for (const endlessSpell of db.objects<def.EndlessSpell>(
        modelNames.EndlessSpell
    )) {
        const id = objectId(endlessSpell);
        result += `${tab}${tab}${id}: {
            id: "${id}",
            name: ${escapeQuotedString(endlessSpell.name)},
            points: ${endlessSpell.points},
            description: ${escapeQuotedString(endlessSpell.blurb)},
            flavor: ${escapeQuotedString(endlessSpell.about)},
            keywords: [${endlessSpell.keywords.map(x => `"${x}"`).join(", ")}],
            pictureUrl: ${escapeQuotedString(endlessSpell.imageUrl)},
`;
        if (
            endlessSpell.abilities.length > 0 ||
            endlessSpell.specialRules.length > 0 ||
            endlessSpell.magicAbilities.length > 0
        ) {
            const abilityIds = endlessSpell.abilities
                .map(x => objectId(x))
                .concat(endlessSpell.specialRules.map(x => objectId(x)))
                .concat(endlessSpell.magicAbilities.map(x => objectId(x)));
            result += `           abilities: [${abilityIds
                .map(x => `this.abilities.${x}`)
                .join(", ")}],
`;
        }
        if (endlessSpell.commandAbilities.length > 0) {
            const abilityIds = endlessSpell.commandAbilities.map(x =>
                objectId(x)
            );
            result += `           commandAbilities: [${abilityIds
                .map(x => `this.abilities.${x}`)
                .join(", ")}],
`;
        }
        result += `
    },`;
    }
    result += `${tab}}
`;
    return result;
}

function getArmyOptions(db: realm) {
    let result = `   armyOptions = {
    `;
    for (const allegiance of db.objects<def.RealmAllegiance>(
        modelNames.RealmAllegiance
    )) {
        if (allegiance.divisionName && allegiance.divisions.length > 0) {
            for (const division of allegiance.divisions) {
                const id = objectId(division);
                result += `${tab}${tab}${id}: {
            id: "${id}",
            name: ${escapeQuotedString(division.name)},
            keyword: ${escapeQuotedString(division.name.toUpperCase())},
            requiredArtifactKeyword: ${escapeQuotedString(
                division.requiredArtefactKeyword
            )},
            requiredCommandTraitKeyword: ${escapeQuotedString(
                division.requiredCommandTraitKeyword
            )},
`;
                if (division.requiredArtefact) {
                    result += `${tab}${tab}requiredArtifact: this.extraAbilities.${propertyId(
                        division,
                        "requiredArtefact"
                    )},
`;
                }
                if (division.requiredCommandTrait) {
                    result += `${tab}${tab}requiredCommandTrait: this.extraAbilities.${propertyId(
                        division,
                        "requiredCommandTrait"
                    )},
                `;
                }

                result += `
        },                   
`;
            }
        }
    }
    result += `   };
`;
    return result;
}

function ability(ability?: def.Ability | null) {
    if (!ability) return "undefined";
    return `this.abilities.${objectId(ability)}`;
}

function abilities(abilities: def.Ability[]) {
    return `[${abilities.map(ability).join(", ")}]`;
}

function getRealms(db: realm) {
    let result = `${tab}realms = {\n`;
    for (const realm of db.objects<def.RealmOfBattle>(
        modelNames.RealmOfBattle
    )) {
        const id = objectId(realm);
        result += `${tab}${tab}${id}: {
            id: "${id}",
            name: ${escapeQuotedString(realm.name)},
            realmName: ${escapeQuotedString(realm.realmName)},
            magic: ${ability(realm.magic)},
            commands: ${abilities(realm.commands || [])}
        },
`;
    }
    result += `${tab}}`;
    return result;
}
