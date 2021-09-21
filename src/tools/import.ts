import {
    Ability,
    AbilityCategory,
    AbilityEffect,
    Attack,
    DamageColumn,
    DamageTable,
    DataStore,
    Model,
    Phase,
    SubPhase,
    targetConditionValue,
    TargetType,
    Unit,
    Value,
    ValueType
} from "../stores/unit";
import {
    DamageCell,
    DamageRow,
    Dump,
    PurpleGroup,
    Role,
    Type
} from "./definitions2";

function getTargetCondition(blurb: string, value: Value) {
    const match = blurb.match(/if the target unit has (\d+) or more models/);
    if (match) {
        return targetConditionValue({ minModels: parseInt(match[1]) }, value);
    }
    return value;
}

export function getAbilityEffects(name: string, blurb: string) {
    let effect: AbilityEffect | undefined = undefined;

    // Phase
    if (blurb.indexOf("in your hero phase") >= 0) {
        effect = effect || { targetType: TargetType.Unit };
        effect.phase = Phase.Hero;
    }
    if (blurb.indexOf("at the start of a combat phase") >= 0) {
        effect = effect || { targetType: TargetType.Unit };
        effect.phase = Phase.Combat;
        effect.subPhase = SubPhase.Before;
    }

    // Spells
    let match = blurb.match(/has a casting value of (\d+)/);
    if (match) {
        effect = effect || { targetType: TargetType.Unit };
        effect.spellCastingValue = parseInt(match[1]);
        effect.phase = Phase.Hero;
    }

    //Target
    match = blurb.match(
        /you can pick an enemy Hero within (\d+)" of this model/i
    );
    if (match) {
        effect = effect || { targetType: TargetType.Enemy };
        effect.targetType = TargetType.Enemy;
        effect.targetCondition = effect.targetCondition || {};
        effect.targetCondition.keyword = "HERO";
        effect.targetRange = parseInt(match[1]);
    }

    // Defense
    if (blurb.indexOf("subtract 1 from hit rolls for attacks made by") >= 0) {
        effect = effect || { targetType: TargetType.Enemy };
        effect.attackAura = { malusHitRoll: 1 };
    }

    if (
        blurb.indexOf(
            "roll a d6 each time you allocate a mortal wound to this model. on a 5+, the wound is negated."
        ) >= 0
    ) {
        effect = effect || { targetType: TargetType.Model };
        effect.defenseAura = { negateWoundsOn5: true };
    }

    if (
        blurb.indexOf(
            "ignore modifiers (positive or negative) when making save rolls for attacks that target this model"
        ) >= 0
    ) {
        effect = effect || { targetType: TargetType.Model };
        effect.defenseAura = effect.defenseAura || {};
        effect.defenseAura.ignoreRend = true;
    }
    if (
        blurb.indexOf(
            "ignore modifiers (positive or negative) when making save rolls for attacks that target this unit"
        ) >= 0
    ) {
        effect = effect || { targetType: TargetType.Unit };
        effect.defenseAura = effect.defenseAura || {};
        effect.defenseAura.ignoreRend = true;
    }
    if (
        blurb.indexOf(
            "roll a D6 each time you allocate a mortal wound to this model. on a 5+, the wound is negated."
        ) >= 0
    ) {
        effect = effect || { targetType: TargetType.Model };
        effect.defenseAura = effect.defenseAura || {};
        effect.defenseAura.negateWoundsOrMortalWoundsOn5 = true;
    }

    // Movement
    if (name === "Mount") {
        effect = effect || { targetType: TargetType.Mount };
    }
    if (blurb.indexOf("this model can fly") >= 0) {
        effect = effect || { targetType: TargetType.Model };
        effect.movementAura = effect.movementAura || {};
        effect.movementAura = { fly: true };
    }

    // Attack
    match = blurb.match(
        /If the unmodified hit roll for an attack made with (.*) is 6, that attack inflicts (\d+) mortal wounds and the attack sequence ends \(do not make a wound or save roll\)/i
    );
    if (match) {
        effect = effect || { targetType: TargetType.Weapon };
        effect.targetCondition = { weaponId: match[1] };
        effect.attackAura = { mortalWoundsOnHitUnmodified6: match[2] };
    }
    match = blurb.match(
        /You can re-roll failed hit rolls for attacks made with (\w+)/i
    );
    if (match) {
        effect = effect || { targetType: TargetType.Weapon };
        effect.targetCondition = { weaponId: match[1] };
        effect.attackAura = { rerollFailedHits: getTargetCondition(blurb, 1) };
    }
    match = blurb.match(
        /If the unmodified wound roll for an attack made with a (.*) is 6, add (\d) to the Damage characteristic of that weapon for that attack/i
    );
    if (match) {
        effect = effect || { targetType: TargetType.Weapon };
        effect.targetCondition = { weaponId: match[1] };
        effect.attackAura = {
            bonusDamageOnWoundUnmodified6: parseInt(match[2])
        };
    }
    if (!effect) return undefined;

    return [effect];
}

type DataStoreProperty = keyof DataStore;
const idMaps = new Map<DataStoreProperty, Map<string, string>>();

function toCamelCase(name: string) {
    return name
        .toLowerCase()
        .replace(/[^\w]+(\w)/g, (p, x) => x.toUpperCase())
        .replace(/^(.)/, (p, x) => x.toLowerCase())
        .replace(/[^A-Za-z0-9]/g, "")
        .replace(/^[0-9]/g, "_");
}

function getId(id: string, name: string, property: DataStoreProperty) {
    let idMap = idMaps.get(property);
    if (idMap === undefined) {
        idMap = new Map<string, string>();
        idMaps.set(property, idMap);
    }
    let newId = idMap.get(id);
    if (newId) return newId;

    newId = toCamelCase(name);
    if (idMap.has(newId)) {
        let i = 1;
        let composed;
        do {
            composed = `${newId}_${i++}`;
        } while (idMap.has(composed));
        newId = composed;
    }
    idMap.set(id, newId);
    return newId;
}

function getItem<T extends keyof DataStore>(
    dataStore: DataStore,
    property: T,
    id: string
): DataStore[T][string] {
    const newId = idMaps.get(property)?.get(id);
    if (newId) {
        return dataStore[property][newId] as DataStore[T][string];
    }
    throw Error(`Could not find ${property} with id ${id}`);
}

export function importData(db: Dump): DataStore {
    const dataStore: DataStore = {
        abilities: {},
        armyOptions: {},
        attacks: {},
        battalions: {},
        damageTables: {},
        extraAbilities: {},
        factions: {},
        models: {},
        options: {},
        realms: {},
        sceneries: {},
        units: {}
    };

    for (const faction of db.faction) {
        const newId = getId(faction.id, faction.name, "factions");
        dataStore.factions[newId] = {
            id: newId,
            name: faction.name,
            category: faction.keywordCategory,
            children: []
        };
    }

    for (const faction of db.faction) {
        const entity = getItem(dataStore, "factions", faction.id);
        if (faction.parentId) {
            const parent = getItem(dataStore, "factions", faction.parentId);
            entity.parent = parent;
        }
    }

    for (const warscroll of db.warscroll) {
        const model: Model = {
            id: getId(warscroll.id, warscroll.name, "models"),
            name: warscroll.name
        };
        dataStore.models[model.id] = model;
    }

    for (const warscroll of db.warscroll) {
        const unit: Unit = {
            id: getId(warscroll.id, warscroll.name, "units"),
            name: warscroll.name,
            description: warscroll.basicDescription || undefined,
            flavor: warscroll.lore,
            subName: warscroll.subname || undefined,
            size: warscroll.unitSize || 0,
            points: warscroll.points,
            model: getItem(dataStore, "models", warscroll.id),
            factions: [],
            keywords: warscroll.referenceKeywords.split(", "),
            role: Role.Other,
            bravery: warscroll.bravery ?? undefined,
            wounds: warscroll.wounds ?? undefined,
            move: warscroll.move ?? undefined,
            save: warscroll.save ?? undefined,
            pictureUrl: warscroll.imageUrl ?? undefined
        };
        dataStore.units[unit.id] = unit;
    }

    for (const warscrollBattlefieldRole of db.warscroll_battlefield_role) {
        const unit = getItem(
            dataStore,
            "units",
            warscrollBattlefieldRole.warscrollId
        );
        unit.role = warscrollBattlefieldRole.role;
    }

    for (const descriptionSubsection of db.description_subsection) {
        const unit = getItem(
            dataStore,
            "units",
            descriptionSubsection.warscrollId
        );
        const ability: Ability = {
            id: getId(
                descriptionSubsection.id,
                `${unit.name} ${descriptionSubsection.header}`,
                "abilities"
            ),
            name: descriptionSubsection.header,
            description: descriptionSubsection.rules,
            category: AbilityCategory.SpecialRule
        };
        switch (descriptionSubsection.header) {
            case "Champion":
                ability.category = AbilityCategory.Champion;
                break;
            case "Wizard":
                ability.category = AbilityCategory.Spell;
                break;
        }
        dataStore.abilities[ability.id] = ability;
        if (!unit.abilities) unit.abilities = [];
        unit.abilities.push(ability);
    }

    const damageTables = new Map<
        string,
        { row: DamageRow; cells: DamageCell[] }[]
    >();
    const damageRows = new Map<
        string,
        { row: DamageRow; cells: DamageCell[] }
    >();

    for (const damageRow of db.damage_row) {
        let table = damageTables.get(damageRow.warscrollId);
        if (table === undefined) {
            table = [];
            damageTables.set(damageRow.warscrollId, table);
        }
        const row = { row: damageRow, cells: [] };
        table[damageRow.order] = row;
        damageRows.set(damageRow.id, row);
    }

    for (const damageCell of db.damage_cell) {
        const row = damageRows.get(damageCell.rowId);
        if (row) {
            row.cells[damageCell.order] = damageCell;
        }
    }

    for (const damageTable of damageTables.values()) {
        const unit = getItem(
            dataStore,
            "units",
            damageTable[0].row.warscrollId
        );
        const columns: DamageColumn[] = [];
        for (let i = 1; i < damageTable[0].cells.length; i++) {
            columns.push({
                name: "",
                values: [],
                type: ValueType.DamageColumn
            });
        }
        const ranges: string[] = [];
        for (const row of damageTable) {
            if (row.row.order === 0) {
                for (const cell of row.cells) {
                    if (cell.order > 0) {
                        columns[cell.order - 1].name = cell.text;
                    }
                }
            } else {
                for (const cell of row.cells) {
                    if (cell.order === 0) {
                        ranges[row.row.order - 1] = cell.text;
                    } else {
                        columns[cell.order - 1].values[row.row.order - 1] =
                            cell.text;
                    }
                }
            }
        }
        const table: DamageTable = {
            id: getId(
                damageTable[0].row.warscrollId,
                `${unit.name} Damage Table`,
                "damageTables"
            ),
            columns,
            ranges
        };
        dataStore.damageTables[table.id] = table;
        unit.damageTable = table;
    }

    for (const warscrollAbility of db.warscroll_ability) {
        const ability: Ability = {
            id: getId(warscrollAbility.id, warscrollAbility.name, "abilities"),
            name: warscrollAbility.name,
            flavor: warscrollAbility.lore,
            description: warscrollAbility.rules,
            effects: getAbilityEffects(
                warscrollAbility.name,
                warscrollAbility.rules
            )
        };
        dataStore.abilities[ability.id] = ability;
        const unit = getItem(dataStore, "units", warscrollAbility.warscrollId);
        if (!unit.abilities) unit.abilities = [];
        unit.abilities.push(ability);
    }

    for (const weapon of db.weapon) {
        const attack: Attack = {
            id: getId(weapon.id, weapon.name, "attacks"),
            name: weapon.name,
            melee: weapon.type === Type.Melee,
            range: weapon.range,
            attacks: weapon.attacks,
            damage: weapon.damage,
            rend: weapon.rend,
            toHit: weapon.hit,
            toWound: weapon.wound
        };
        dataStore.attacks[attack.id] = attack;
        const unit = getItem(dataStore, "units", weapon.warscrollId);
        if (!unit.attacks) unit.attacks = [];
        unit.attacks.push(attack);
    }

    for (const warscrollFaction of db.warscroll_factions_faction) {
        const unit = getItem(dataStore, "units", warscrollFaction.warscrollId);
        const faction = getItem(
            dataStore,
            "factions",
            warscrollFaction.factionId
        );
        unit.factions.push(faction);
    }

    const battleTraitGroups = new Map<string, PurpleGroup>();

    for (const battleTraitGroup of db.battle_trait_group) {
        battleTraitGroups.set(battleTraitGroup.id, battleTraitGroup);
    }

    for (const battleTrait of db.battle_trait) {
        const battleTraitGroup = battleTraitGroups.get(
            battleTrait.battleTraitGroupId
        );
        const ability: Ability = {
            id: getId(battleTrait.id, battleTrait.name, "abilities"),
            name: battleTrait.name,
            category: AbilityCategory.BattleTrait,
            description: battleTrait.rules,
            effects: getAbilityEffects(battleTrait.name, battleTrait.rules)
        };
        dataStore.abilities[ability.id] = ability;
        if (battleTraitGroup) {
            if (battleTraitGroup.factionId) {
                const faction = getItem(
                    dataStore,
                    "factions",
                    battleTraitGroup.factionId
                );
                if (!faction.battleTraits) faction.battleTraits = [];
                faction.battleTraits.push(ability);
            }
        }
    }

    return dataStore;
}

// // Create readable ids
// function fixIds(db: Dump) {
//     const ids = new Map<string, boolean>();

//     function fixId(oldId: string, name: string, alt: string | undefined) {
//         let id = toCamelCase(name);
//         if (ids.get(id)) {
//             if (ids.get(id) && alt) id += toPascalCase(alt);
//             while (ids.get(id)) id += "x";
//         }
//         ids.set(id, true);
//         idMap.set(oldId, id);
//     }

//     function fixObjectId(
//         o: { id: string; name: string },
//         parent?: { id: string; name: string },
//         alt?: string
//     ) {
//         if (parent) {
//             fixId(o.id, `${parent.name} ${o.name}`, alt);
//         } else {
//             fixId(o.id, o.name, alt);
//         }
//     }

//     function fixItemId(
//         o: { id: string; groupTitle: string },
//         name: string,
//         index: number,
//         parent?: { name: string },
//         alt?: string
//     ) {
//         if (parent) {
//             fixId(
//                 `${o.id} ${index}`,
//                 `${parent.name} ${o.groupTitle} ${name}`,
//                 alt
//             );
//         } else {
//             fixId(`${o.id} ${index}`, `${o.groupTitle} ${name}`, alt);
//         }
//     }

//     function fixPropertyId<T extends { id: string; name: string }>(
//         o: T,
//         prop: keyof T,
//         parent?: { name: string },
//         alt?: string
//     ) {
//         const name = o[prop];
//         if (parent) {
//             fixId(`${o.id} ${prop}`, `${parent.name} ${o.name} ${name}`, alt);
//         } else {
//             fixId(`${o.id} ${prop}`, `${o.name} ${name}`, alt);
//         }
//     }

//     function fixArrayId(
//         objects: ReadonlyArray<{ id: string; name: string }>,
//         parent?: { name: string },
//         alt?: string,
//         subName?: string | null
//     ) {
//         for (const o of objects) {
//             fixId(
//                 o.id,
//                 parent ? `${parent.name} ${subName || ""} ${o.name}` : o.name,
//                 alt
//             );
//         }
//     }

//     function fixGroupId(
//         objects: ReadonlyArray<{ id: string; groupTitle: string }>,
//         parent?: { name: string },
//         alt?: string
//     ) {
//         for (const o of objects) {
//             fixId(
//                 o.id,
//                 parent ? `${parent.name} ${o.groupTitle}` : o.groupTitle,
//                 alt
//             );
//         }
//     }

//     function fixNames(
//         objects: ReadonlyArray<string>,
//         parent: { id: string; groupTitle: string },
//         parentParent?: { name: string },
//         alt?: string
//     ) {
//         for (let i = 0; i < objects.length; i++) {
//             fixItemId(parent, objects[i], i, parentParent, alt);
//         }
//     }

//     function fixGroups<T extends { id: string; groupTitle: string }>(
//         groups: T[],
//         collection: (x: T) => string[],
//         parent: { name: string },
//         alt?: string
//     ) {
//         fixGroupId(groups, parent, alt);
//         for (const group of groups) {
//             fixNames(collection(group), group, parent, alt);
//         }
//     }

//     for (const battalionWarscroll of db.core_battalion) {
//         fixId(
//             battalionWarscroll.id,
//             `${battalionWarscroll.faction} ${battalionWarscroll.name}`,
//             undefined
//         );
//         fixArrayId(battalionWarscroll.abilities, battalionWarscroll, "Ability");
//         fixArrayId(
//             battalionWarscroll.commandAbilities,
//             battalionWarscroll,
//             "Command"
//         );
//         fixArrayId(
//             battalionWarscroll.commandTraits,
//             battalionWarscroll,
//             "CommandTrait"
//         );
//     }

//     fixArrayId(
//         db.objects<def.Division>(modelNames.Division),
//         undefined,
//         "Division"
//     );

//     for (const realmAllegiance of db.objects<def.RealmAllegiance>(
//         modelNames.RealmAllegiance
//     )) {
//         fixId(realmAllegiance.id, realmAllegiance.name, "Allegiance");
//         fixGroups(
//             realmAllegiance.commandTraitGroups,
//             (x) => x.commandTraits,
//             realmAllegiance,
//             "CommandTrait"
//         );
//         fixGroups(
//             realmAllegiance.artefactGroups,
//             (x) => x.artefacts,
//             realmAllegiance,
//             "Artefact"
//         );
//         fixGroups(
//             realmAllegiance.mountTraitGroups,
//             (x) => x.traits,
//             realmAllegiance,
//             "Mount"
//         );
//         fixGroups(
//             realmAllegiance.prayerGroups,
//             (x) => x.traits,
//             realmAllegiance,
//             "Prayer"
//         );
//         fixGroups(
//             realmAllegiance.spellGroups,
//             (x) => x.traits,
//             realmAllegiance,
//             "Spell"
//         );
//         fixArrayId(realmAllegiance.divisions, realmAllegiance, "Division");
//         for (const division of realmAllegiance.divisions) {
//             if (division.requiredArtefact)
//                 fixPropertyId(
//                     division,
//                     "requiredArtefact",
//                     realmAllegiance,
//                     "Artefact"
//                 );

//             if (division.requiredCommandTrait)
//                 fixPropertyId(
//                     division,
//                     "requiredCommandTrait",
//                     realmAllegiance,
//                     "CommandTrait"
//                 );
//         }
//     }

//     for (const unitWarscroll of db.objects<def.UnitWarscroll>(
//         modelNames.UnitWarscroll
//     )) {
//         const name = unitWarscroll.subName
//             ? `${unitWarscroll.name} ${unitWarscroll.subName}`
//             : unitWarscroll.name;
//         fixId(unitWarscroll.id, name, unitWarscroll.factions[0]);
//         fixArrayId(
//             unitWarscroll.specialRules,
//             unitWarscroll,
//             "Rule",
//             unitWarscroll.subName
//         );
//         fixArrayId(
//             unitWarscroll.upgrades,
//             unitWarscroll,
//             "Upgrade",
//             unitWarscroll.subName
//         );
//         fixArrayId(
//             unitWarscroll.abilities,
//             unitWarscroll,
//             "Ability",
//             unitWarscroll.subName
//         );
//         fixArrayId(
//             unitWarscroll.minionAbilities,
//             unitWarscroll,
//             "MinionAbility",
//             unitWarscroll.subName
//         );
//         fixArrayId(
//             unitWarscroll.commandAbilities,
//             unitWarscroll,
//             "Command",
//             unitWarscroll.subName
//         );
//         fixArrayId(
//             unitWarscroll.magicAbilities,
//             unitWarscroll,
//             "Spell",
//             unitWarscroll.subName
//         );
//         for (const weapon of unitWarscroll.weapons) {
//             fixId(
//                 weapon.id,
//                 `${name} ${weapon.name}`,
//                 weapon.missile ? "Ranged" : "Melee"
//             );
//         }
//     }

//     for (const realmOfBattle of db.objects<def.RealmOfBattle>(
//         modelNames.RealmOfBattle
//     )) {
//         fixObjectId(realmOfBattle, undefined, "Realm");
//         // fixGroups(
//         //     realmOfBattle.artefactGroups,
//         //     x => x.artefacts,
//         //     realmOfBattle,
//         //     "Artefact"
//         // );
//         if (realmOfBattle.magic)
//             fixObjectId(realmOfBattle.magic, realmOfBattle, "Magic");
//         fixArrayId(realmOfBattle.commands, realmOfBattle, "Command");
//     }
// }
