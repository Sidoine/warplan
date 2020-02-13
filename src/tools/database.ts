import realm from "realm";
import * as model from "./en-classes/en-model";
import * as fs from "fs";
import * as def from "./definitions";

const schemaVersion = 52;

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

function escapeQuotedString(text: string | null) {
    if (!text) return "undefined";
    return '"' + text.replace(/[\n"]/g, s => `\\${s}`) + '"';
}

const models: realm.ObjectSchema[] = [
    model.Ability,
    model.ArtefactGroup,
    model.BattalionOrganisation,
    model.BattalionWarscroll,
    model.Battleplan,
    model.CommandTraitGroup,
    model.CompoundKeyword,
    model.DamageColumn,
    model.DamagePair,
    model.Division,
    model.EndlessSpell,
    model.ExceptionalTraitGroup,
    model.KharadronCode,
    model.RealmAllegiance,
    model.RealmOfBattle,
    model.RealmscapeFeature,
    model.Rule,
    model.SkyportCode,
    model.UnitWarscroll,
    model.UnitWeapon,
    model.WarMachine
];
const tab = "    ";
const allegianceIdByKeyword = new Map<string, string>();
async function load() {
    try {
        let definitions: string[] = [];
        for (const model of models) {
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
                }
            }
            definitions.push("}");
            definitions.push("");
        }
        fs.writeFileSync("src/tools/definitions.ts", definitions.join("\n"));

        const db = await realm.open({
            path: "src/tools/en.realm",
            schema: models,
            schemaVersion: schemaVersion
        });
        let result = `import { DataStore, GrandAlliance, WarscrollInterface, Box, AbilityCategory } from "./units";
import { canUseAbility, canUseArmyOptionAbility, hasKeywords } from "./conditions";

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
const ids = new Map<string, boolean>();

function getId(oldId: string, name: string, alt: string | undefined) {
    let id = toCamelCase(name);
    if (ids.get(id)) {
        if (alt) id += toPascalCase(alt);
        while (ids.get(id)) id += "x";
    }
    ids.set(id, true);
    idMap.set(oldId, id);
}

function gid(o: { id: string }) {
    return idMap.get(o.id) || o.id;
}

function fixIds(db: Realm) {
    for (const ability of db.objects<def.Ability>(model.Ability.name)) {
        getId(ability.id, ability.name, undefined);
    }

    for (const artefactGroup of db.objects<def.ArtefactGroup>(
        model.ArtefactGroup.name
    )) {
        getId(artefactGroup.id, artefactGroup.groupTitle, "Artefact");
        for (let i = 0; i < artefactGroup.artefacts.length; i++) {
            getId(
                `${artefactGroup.id} ${i}`,
                `${artefactGroup.groupTitle} ${artefactGroup.artefacts[i]}`,
                "Artefact"
            );
        }
    }

    for (const battalionWarscroll of db.objects<def.BattalionWarscroll>(
        model.BattalionWarscroll.name
    )) {
        getId(
            battalionWarscroll.id,
            `${battalionWarscroll.faction} ${battalionWarscroll.name}`,
            undefined
        );
        for (const ability of battalionWarscroll.abilities) {
            getId(
                ability.id,
                `${battalionWarscroll.name} ${ability.name}`,
                "Ability"
            );
        }
        for (const ability of battalionWarscroll.commandAbilities) {
            getId(
                ability.id,
                `${battalionWarscroll.name} ${ability.name}`,
                "Command"
            );
        }
        for (const ability of battalionWarscroll.commandTraits) {
            getId(
                ability.id,
                `${battalionWarscroll.name} ${ability.name}`,
                "CommandTrait"
            );
        }
    }

    for (const division of db.objects<def.Division>(model.Division.name)) {
        getId(division.id, division.name, "Division");
    }

    for (const endlessSpell of db.objects<def.EndlessSpell>(
        model.EndlessSpell.name
    )) {
        getId(endlessSpell.id, endlessSpell.name, "EndlessSpell");

        for (const ability of endlessSpell.abilities) {
            getId(
                ability.id,
                `${endlessSpell.name} ${ability.name}`,
                undefined
            );
        }
        for (const ability of endlessSpell.magicAbilities) {
            getId(
                ability.id,
                `${endlessSpell.name} ${ability.name}`,
                undefined
            );
        }
        for (const ability of endlessSpell.commandAbilities) {
            getId(
                ability.id,
                `${endlessSpell.name} ${ability.name}`,
                undefined
            );
        }

        for (const specialRule of endlessSpell.specialRules) {
            getId(
                specialRule.id,
                `${endlessSpell.name} ${specialRule.name}`,
                undefined
            );
        }
    }

    for (const realmAllegiance of db.objects<def.RealmAllegiance>(
        model.RealmAllegiance.name
    )) {
        getId(realmAllegiance.id, realmAllegiance.name, "Allegiance");
        for (const commandTraitGroup of realmAllegiance.commandTraitGroups) {
            getId(
                commandTraitGroup.id,
                `${realmAllegiance.name} ${commandTraitGroup.groupTitle}`,
                "CommandTrait"
            );
            for (let i = 0; i < commandTraitGroup.commandTraits.length; i++) {
                getId(
                    `${commandTraitGroup.id} ${i}`,
                    `${realmAllegiance.name} ${commandTraitGroup.groupTitle} ${commandTraitGroup.commandTraits[i]}`,
                    "CommandTrait"
                );
            }
        }
        for (const artefactGroup of realmAllegiance.artefactGroups) {
            getId(
                artefactGroup.id,
                `${realmAllegiance.name} ${artefactGroup.groupTitle}`,
                "Artefact"
            );
            for (let i = 0; i < artefactGroup.artefacts.length; i++) {
                getId(
                    `${artefactGroup.id} ${i}`,
                    `${realmAllegiance.name} ${artefactGroup.groupTitle} ${artefactGroup.artefacts[i]}`,
                    "Artefact"
                );
            }
        }
        for (const artefactGroup of realmAllegiance.mountTraitGroups) {
            getId(
                artefactGroup.id,
                `${realmAllegiance.name} ${artefactGroup.groupTitle}`,
                "Mount"
            );
            for (let i = 0; i < artefactGroup.traits.length; i++) {
                getId(
                    `${artefactGroup.id} ${i}`,
                    `${realmAllegiance.name} ${artefactGroup.groupTitle} ${artefactGroup.traits[i]}`,
                    "Mount"
                );
            }
        }
        for (const artefactGroup of realmAllegiance.prayerGroups) {
            getId(
                artefactGroup.id,
                `${realmAllegiance.name} ${artefactGroup.groupTitle}`,
                "Prayer"
            );
            for (let i = 0; i < artefactGroup.traits.length; i++) {
                getId(
                    `${artefactGroup.id} ${i}`,
                    `${realmAllegiance.name} ${artefactGroup.groupTitle} ${artefactGroup.traits[i]}`,
                    "Prayer"
                );
            }
        }
        for (const artefactGroup of realmAllegiance.spellGroups) {
            getId(
                artefactGroup.id,
                `${realmAllegiance.name} ${artefactGroup.groupTitle}`,
                "Spell"
            );
            for (let i = 0; i < artefactGroup.traits.length; i++) {
                getId(
                    `${artefactGroup.id} ${i}`,
                    `${realmAllegiance.name} ${artefactGroup.groupTitle} ${artefactGroup.traits[i]}`,
                    "Spell"
                );
            }
        }

        for (const division of realmAllegiance.divisions) {
            getId(
                division.id,
                `${realmAllegiance.name} ${division.name}`,
                "Division"
            );
            if (division.requiredArtefact)
                getId(
                    division.id + ".requiredArtefact",
                    `${realmAllegiance.name} ${division.name} ${division.requiredArtefact}`,
                    "Artefact"
                );
            if (division.requiredCommandTrait)
                getId(
                    division.id + ".requiredCommandTrait",
                    `${realmAllegiance.name} ${division.name} ${division.requiredCommandTrait}`,
                    "CommandTrait"
                );
        }
    }

    for (const unitWarscroll of db.objects<def.UnitWarscroll>(
        model.UnitWarscroll.name
    )) {
        const name = unitWarscroll.subName
            ? `${unitWarscroll.name} ${unitWarscroll.subName}`
            : unitWarscroll.name;
        getId(unitWarscroll.id, name, unitWarscroll.factions[0]);
        for (const rule of unitWarscroll.specialRules) {
            getId(rule.id, `${name} ${rule.name}`, "Rule");
        }
        for (const upgrade of unitWarscroll.upgrades) {
            getId(upgrade.id, `${name} ${upgrade.name}`, "Upgrade");
        }
        for (const ability of unitWarscroll.abilities) {
            getId(ability.id, `${name} ${ability.name}`, "Ability");
        }
        for (const minionAbility of unitWarscroll.minionAbilities) {
            getId(
                minionAbility.id,
                `${name} ${minionAbility.name}`,
                "MinionAbility"
            );
        }

        for (const commandAbility of unitWarscroll.commandAbilities) {
            getId(
                commandAbility.id,
                `${name} ${commandAbility.name}`,
                "Command"
            );
        }
        for (const magicAbility of unitWarscroll.magicAbilities) {
            getId(magicAbility.id, `${name} ${magicAbility.name}`, "Spell");
        }
        for (const weapon of unitWarscroll.weapons) {
            getId(
                weapon.id,
                `${name} ${weapon.name}`,
                weapon.missile ? "Ranged" : "Melee"
            );
        }
    }
}

function getFactions(db: realm) {
    const factions: { id: string; grandAlliance: string; name: string }[] = [];
    for (const unit of db.objects<def.UnitWarscroll>(
        model.UnitWarscroll.name
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
        model.UnitWarscroll.name
    )) {
        const name = unit.subName ? `${unit.name} ${unit.subName}` : unit.name;
        const id = gid(unit);
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
        model.RealmAllegiance.name
    )) {
        const id = gid(allegiance);
        const keywords = allegiance.keywords;
        allegianceIdByKeyword.set(keywords[0].toUpperCase(), id);
        result += `           ${id}: {
            id: "${id}",
            name: "${escapeString(allegiance.name)}",
            keywords: ["${keywords.map(x => x.toUpperCase()).join('", "')}"],
`;
        if (allegiance.grandAlliance) {
            result += `${tab}${tab}${tab}grandAlliance: GrandAlliance.${allegiance.grandAlliance.toLowerCase()},
`;
        }
        if (allegiance.divisions.length > 0) {
            result += `${tab}${tab}${tab}armyOptions: {
                name: ${escapeQuotedString(allegiance.divisionName)},
                values: [${allegiance.divisions
                    .map(x => `this.armyOptions.${gid(x)}`)
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
        model.UnitWarscroll.name
    )) {
        for (const option of unit.upgrades) {
            const id = gid(option);
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
    unit: { name: string },
    abilities: def.Ability[],
    category?: AbilityCategories
) {
    let result = "";
    for (const ability of abilities) {
        const id = gid(ability);
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
        model.UnitWarscroll.name
    )) {
        result += getUnitAbilities(unit, unit.abilities);
        result += getUnitAbilities(unit, unit.magicAbilities, "Spell");
        result += getUnitAbilities(unit, unit.commandAbilities, "Command");
        for (const ability of unit.specialRules) {
            const id = gid(ability);
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
        model.EndlessSpell.name
    )) {
        result += getUnitAbilities(endlessSpell, endlessSpell.abilities);
        result += getUnitAbilities(
            endlessSpell,
            endlessSpell.magicAbilities,
            "Spell"
        );
        result += getUnitAbilities(
            endlessSpell,
            endlessSpell.commandAbilities,
            "Command"
        );
        for (const ability of endlessSpell.specialRules) {
            const id = gid(ability);
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
        model.BattalionWarscroll.name
    )) {
        result += getUnitAbilities(battalion, battalion.abilities);
        result += getUnitAbilities(
            battalion,
            battalion.commandAbilities,
            "Command"
        );
    }

    result += `   };
`;
    return result;
}

function getAttacks(db: realm) {
    let result = `   attacks = {
`;
    for (const unit of db.objects<def.UnitWarscroll>(
        model.UnitWarscroll.name
    )) {
        const unitId = gid(unit);
        for (const weapon of unit.weapons) {
            const id = gid(weapon);
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
        model.UnitWarscroll.name
    )) {
        const id = gid(unit);
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
        model.UnitWarscroll.name
    )) {
        const id = gid(unit);
        if (!id) continue;
        result += `       ${id}: {
            id: "${id}",
            name: ${escapeQuotedString(unit.name)},
            model: this.models.${id},
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
                .map(x => `this.options.${gid(x)}`)
                .join(", ")}],
`;
        }
        if (
            unit.abilities.length > 0 ||
            unit.specialRules.length > 0 ||
            unit.magicAbilities.length > 0
        ) {
            const abilityIds = unit.abilities
                .map(x => gid(x))
                .concat(unit.specialRules.map(x => gid(x)))
                .concat(unit.magicAbilities.map(x => gid(x)));
            result += `           abilities: [${abilityIds
                .map(x => `this.abilities.${x}`)
                .join(", ")}],
`;
        }
        if (unit.commandAbilities.length > 0) {
            const abilityIds = unit.commandAbilities.map(x => gid(x));
            result += `           commandAbilities: [${abilityIds
                .map(x => `this.abilities.${x}`)
                .join(", ")}],
`;
        }
        if (unit.weapons) {
            result += `           attacks: [${unit.weapons
                .map(x => `this.attacks.${gid(x)}`)
                .join(", ")}],
`;
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

function getExceptionalTraits<T extends AbilityGroup>(
    allegiance: def.RealmAllegiance,
    groups: T[],
    traits: (t: T) => string[],
    category: AbilityCategories,
    usedNames: Map<string, boolean>
) {
    let result = "";
    const allegianceKeyword = allegiance.keywords[0];
    for (const artefactGroup of groups) {
        const groupTitle = artefactGroup.groupTitle.toLowerCase();
        let i = 0;
        for (const trait of traits(artefactGroup)) {
            const id = gid({ id: `${artefactGroup.id} ${i++}` });
            result += `               ${id}: {
                id: "${id}",
                allegianceKeyword: ${escapeQuotedString(
                    allegianceKeyword.toUpperCase()
                )},
                category: "${groupTitle}",
`;
            if (artefactGroup.keywords) {
                result += `                keywords: ${compoundKeywordsToString(
                    artefactGroup.keywords
                )}, 
                ability: { id: "${id}", name: "${trait}", description: "", category: AbilityCategory.${category} },
                isAvailable: canUseAbility(${escapeQuotedString(
                    trait || "Unknown"
                )}, AbilityCategory.${category}, ${escapeQuotedString(
                    allegianceKeyword.toUpperCase()
                )}, ${compoundKeywordsToString(artefactGroup.keywords)}),
`;
            } else {
                result += `                ability: { id: "${id}", name: "${trait}", description: "", category: AbilityCategory.${category} },
                isAvailable: canUseAbility(${escapeQuotedString(
                    trait || "Unknown"
                )}, AbilityCategory.${category}, ${escapeQuotedString(
                    allegianceKeyword.toUpperCase()
                )}),
`;
            }
            result += `               },
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
    keyword?: string
) {
    const id = gid({ id: `${division.id}.required${category}` });
    const allegianceKeyword = allegiance.keywords[0];
    let result = `
    ${id}: {
        id: "${id}",
        ability: { id: "${id}", name: "${ability}", category: AbilityCategory.${category} },
        allegianceKeyword: ${escapeQuotedString(
            allegianceKeyword.toUpperCase()
        )},
        category: "${category}",
        requiredByArmyOption: true,
`;
    if (keyword) {
        result += `            keywords: [[${escapeQuotedString(keyword)}]],
        isAvailable: canUseArmyOptionAbility(${escapeQuotedString(
            ability
        )}, AbilityCategory.${category}, ${escapeQuotedString(
            allegianceKeyword.toUpperCase()
        )}, ${escapeQuotedString(division.name)}, [[${escapeQuotedString(
            keyword
        )}]]),
`;
    } else {
        result += `            isAvailable: canUseArmyOptionAbility(${escapeQuotedString(
            ability
        )}, AbilityCategory.${category}, ${escapeQuotedString(
            allegianceKeyword.toUpperCase()
        )}, ${escapeQuotedString(division.name)}),
`;
    }
    result += `        },
`;
    return result;
}

function getExtraAbilities(db: realm) {
    let result = `   extraAbilities = {
        `;

    const usedNames = new Map<string, boolean>();
    for (const allegiance of db.objects<def.RealmAllegiance>(
        model.RealmAllegiance.name
    )) {
        result += getExceptionalTraits(
            allegiance,
            allegiance.commandTraitGroups,
            x => x.commandTraits,
            "CommandTrait",
            usedNames
        );
        result += getExceptionalTraits(
            allegiance,
            allegiance.artefactGroups,
            x => x.artefacts,
            "Artefact",
            usedNames
        );

        for (const division of allegiance.divisions) {
            if (division.requiredCommandTrait)
                result += getExtraAbilitiesWithDivision(
                    allegiance,
                    division,
                    division.requiredCommandTrait,
                    "CommandTrait",
                    division.name
                );
            if (division.requiredArtefact)
                result += getExtraAbilitiesWithDivision(
                    allegiance,
                    division,
                    division.requiredArtefact,
                    "Artefact",
                    division.name
                );
        }

        result += getExceptionalTraits(
            allegiance,
            allegiance.mountTraitGroups,
            x => x.traits,
            "Mount",
            usedNames
        );
        result += getExceptionalTraits(
            allegiance,
            allegiance.prayerGroups,
            x => x.traits,
            "Prayer",
            usedNames
        );
        result += getExceptionalTraits(
            allegiance,
            allegiance.spellGroups,
            x => x.traits,
            "Spell",
            usedNames
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
        model.BattalionWarscroll.name
    )) {
        const id = gid(battalion);
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
                        `{ id: "${gid(x)}", countMin: ${x.min}, countMax: ${
                            x.max
                        }, required: ${
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
                .map(x => `this.abilities.${gid(x)}`)
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
        model.EndlessSpell.name
    )) {
        const id = gid(endlessSpell);
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
                .map(x => gid(x))
                .concat(endlessSpell.specialRules.map(x => gid(x)))
                .concat(endlessSpell.magicAbilities.map(x => gid(x)));
            result += `           abilities: [${abilityIds
                .map(x => `this.abilities.${x}`)
                .join(", ")}],
`;
        }
        if (endlessSpell.commandAbilities.length > 0) {
            const abilityIds = endlessSpell.commandAbilities.map(x => gid(x));
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
        model.RealmAllegiance.name
    )) {
        if (allegiance.divisionName && allegiance.divisions.length > 0) {
            for (const division of allegiance.divisions) {
                const id = gid(division);
                result += `${tab}${tab}${id}: {
            id: "${id}",
            name: ${escapeQuotedString(division.name)},
            requiredArtifactKeyword: ${escapeQuotedString(
                division.requiredArtefactKeyword
            )},
            requiredCommandTraitKeyword: ${escapeQuotedString(
                division.requiredCommandTraitKeyword
            )},
`;
                if (division.requiredArtefact) {
                    result += `${tab}${tab}requiredArtifact: this.extraAbilities.${gid(
                        { id: `${division.id}.requiredArtefact` }
                    )},
`;
                }
                if (division.requiredCommandTrait) {
                    result += `${tab}${tab}requiredCommandTrait: this.extraAbilities.${gid(
                        { id: `${division.id}.requiredCommandTrait` }
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
