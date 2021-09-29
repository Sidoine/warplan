import {
    Ability,
    AbilityCategory,
    AbilityEffect,
    AbilityGroup,
    Attack,
    DamageColumn,
    DamageTable,
    ImportedDataStore,
    Model,
    ModelOption,
    ModelOptionCategory,
    Phase,
    SubPhase,
    targetConditionValue,
    TargetType,
    Unit,
    UnitOptionCategory,
    Value,
    ValueType
} from "../common/data";
import {
    CoreBattalionGroupElement,
    DamageCell,
    DamageRow,
    Dump,
    PurpleGroup,
    Role,
    Type
} from "../common/definitions";

function toCamelCase(name: string) {
    return name
        .toLowerCase()
        .replace(/[^\w]+(\w)/g, (p, x) => x.toUpperCase())
        .replace(/^(.)/, (p, x) => x.toLowerCase())
        .replace(/[^A-Za-z0-9]/g, "")
        .replace(/^[0-9]/g, "_");
}

function generatedId(name: string, property: DataStoreProperty) {
    let idMap = idMaps.get(property);
    if (idMap === undefined) {
        idMap = {
            idToName: new Map<string, string>(),
            nameToId: new Map<string, string>()
        };
        idMaps.set(property, idMap);
    }
    let nameId = toCamelCase(name);
    if (idMap.nameToId.has(nameId)) {
        let i = 1;
        let composed;
        do {
            composed = `${nameId}${i++}`;
        } while (idMap.nameToId.has(composed));
        nameId = composed;
    }
    idMap.nameToId.set(nameId, name);
    return nameId;
}

function getId(id: string, name: string, property: DataStoreProperty) {
    let idMap = idMaps.get(property);
    if (idMap === undefined) {
        idMap = {
            idToName: new Map<string, string>(),
            nameToId: new Map<string, string>()
        };
        idMaps.set(property, idMap);
    }
    let nameId = idMap.idToName.get(id);
    if (nameId) return nameId;

    nameId = toCamelCase(name);
    if (idMap.nameToId.has(nameId)) {
        let i = 1;
        let composed;
        do {
            composed = `${nameId}${i++}`;
        } while (idMap.nameToId.has(composed));
        nameId = composed;
    }
    idMap.idToName.set(id, nameId);
    idMap.nameToId.set(nameId, id);
    return nameId;
}

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

    // Chants
    match = blurb.match(/add (\d) to chanting rolls for this unit/i);
    if (match) {
        effect = effect || { targetType: TargetType.Unit };
        effect.prayerAura = { bonusToChant: parseInt(match[1]) };
    }
    match = blurb.match(/is a prayer that has an answer value of (\d)/i);
    if (match) {
        effect = effect || { targetType: TargetType.Unit };
        effect.prayerValue = parseInt(match[1]);
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
        effect.defenseAura.ethereal = true;
    }
    if (
        blurb.indexOf(
            "ignore modifiers (positive or negative) when making save rolls for attacks that target this unit"
        ) >= 0
    ) {
        effect = effect || { targetType: TargetType.Unit };
        effect.defenseAura = effect.defenseAura || {};
        effect.defenseAura.ethereal = true;
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

    match = blurb.match(/this model can fly/i);
    if (match) {
        effect = effect || { targetType: TargetType.Model };
        effect.movementAura = effect.movementAura || {};
        effect.movementAura = { fly: true };
    }

    match = blurb.match(/this unit can fly/i);
    if (match) {
        effect = effect || { targetType: TargetType.Unit };
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

function getProximity(a: string, b: string): number {
    if (a.length > b.length) return getProximity(b, a);
    if (a.length / b.length < 0.75) return 0;
    let value = 0;
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i], i) >= 0) value++;
    }
    return value / a.length;
}

function findElement<T extends { name: string }>(elements: T[], name: string) {
    for (const element of elements) {
        if (element.name === name) {
            return element;
        }
    }

    for (const element of elements) {
        if (getProximity(element.name, name) > 0.95) {
            return element;
        }
    }

    return undefined;
}

function getModelOptions(unit: Unit) {
    const options: ModelOption[] = [];
    let match = unit.description.match(
        /(\d) of the following weapon options: (.*?)\./
    );
    if (match) {
        // const count = parseInt(match[1]);
        const weaponOptions = match[2].split("; ");
        for (const weaponOption of weaponOptions) {
            const text = weaponOption.replace("or ", "");
            const parts = text.split(" and ");
            const option: ModelOption = {
                id: generatedId(
                    `${unit.name} ${unit.subName || ""} ${text}`,
                    "options"
                ),
                name: text,
                modelCategory: ModelOptionCategory.Weapon,
                unitCategory: UnitOptionCategory.Main
            };
            for (const part of parts) {
                if (unit.attacks) {
                    const attack = findElement(unit.attacks, part);
                    if (attack) {
                        if (!option.attacks) {
                            option.attacks = [];
                        }
                        option.attacks.push(attack);
                        unit.attacks = unit.attacks.filter(x => x !== attack);
                    }
                }
                if (unit.abilities) {
                    const ability = findElement(unit.abilities, part);
                    if (ability) {
                        if (!option.abilities) {
                            option.abilities = [];
                        }
                        option.abilities.push(ability);
                        unit.abilities = unit.abilities.filter(
                            x => x !== ability
                        );
                    }
                }
            }
            options.push(option);
        }
    }

    match = unit.description.match(
        /(\d) in every (\d) models can replace their weapon option with a (.*?)\./
    );
    if (match) {
        const count = parseInt(match[1]);
        const every = parseInt(match[2]);
        const weaponOption = match[3];
        const option: ModelOption = {
            id: generatedId(
                `${unit.name} ${unit.subName || ""} ${weaponOption}`,
                "options"
            ),
            name: weaponOption,
            modelCategory: ModelOptionCategory.Weapon,
            ratio: { count, every }
        };
        if (unit.attacks) {
            const attack = unit.attacks.find(x => x.name === weaponOption);
            if (attack) {
                if (!option.attacks) {
                    option.attacks = [];
                }
                option.attacks.push(attack);
                unit.attacks = unit.attacks.filter(x => x !== attack);
            }
        }

        options.push(option);
    }

    if (unit.abilities) {
        const champion = unit.abilities.find(
            x => x.category === AbilityCategory.Champion
        );
        if (champion && champion.description) {
            const match = champion.description.match(
                /1 model in this unit can be an? (.*?)\./
            );
            if (match) {
                const championName = match[1];
                const option: ModelOption = {
                    id: generatedId(
                        `${unit.name} ${unit.subName || ""} ${championName}`,
                        "options"
                    ),
                    name: championName,
                    modelCategory: ModelOptionCategory.Champion,
                    champion: true,
                    abilities: [champion]
                };
                options.push(option);
                unit.abilities = unit.abilities.filter(x => x !== champion);
            }
        }
    }

    if (options.length === 0) return undefined;
    return options;
}

type DataStoreProperty = keyof ImportedDataStore;
const idMaps = new Map<
    DataStoreProperty,
    { idToName: Map<string, string>; nameToId: Map<string, string> }
>();

function getItem<
    T extends KeysOfType<ImportedDataStore, Record<string, unknown>>
>(
    dataStore: ImportedDataStore,
    property: T,
    id: string
): ImportedDataStore[T][string] {
    const newId = idMaps.get(property)?.idToName.get(id);
    if (newId) {
        return dataStore[property][newId] as ImportedDataStore[T][string];
    }
    throw Error(`Could not find ${property} with id ${id}`);
}

type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
type ArrayElement<T> = T extends (infer U)[] ? U : never;
type AbilityGroups = Exclude<
    KeysOfType<Dump, PurpleGroup[]>,
    KeysOfType<Dump, CoreBattalionGroupElement[]>
>;
type Abilities = KeysOfType<
    Dump,
    { id: string; name: string; lore: string | null; rules: string }[]
>;

function importExtraAbilities<
    T extends Abilities,
    G extends AbilityGroups,
    K extends KeysOfType<Dump, { keywordId: string }[]>,
    U extends KeysOfType<ArrayElement<Dump[T]>, string>
>(
    db: Dump,
    dataStore: ImportedDataStore,
    groups: G,
    abilities: T,
    keywords: K | undefined,
    category: AbilityCategory,
    groupId: U
) {
    for (const group of db[groups]) {
        const groupId = getId(group.id, group.name, "abilityGroups");
        const entity: AbilityGroup = {
            abilities: [],
            category,
            id: groupId,
            name: group.name,
            allowUniqueUnits: group.allowUniqueUnits,
            restrictions: group.restrictions
        };
        dataStore.abilityGroups[groupId] = entity;
        if (group.factionId) {
            const faction = getItem(dataStore, "factions", group.factionId);
            if (!faction.abilityGroups) faction.abilityGroups = [];
            faction.abilityGroups.push(entity);
        } else {
            dataStore.genericAbilityGroups.push(entity);
        }
    }

    for (const ability of db[abilities]) {
        const abilityId = getId(ability.id, ability.name, "abilities");
        const group = getItem(
            dataStore,
            "abilityGroups",
            ability[groupId as keyof typeof ability] as string
        );
        const entity: Ability = {
            id: abilityId,
            name: ability.name,
            flavor: ability.lore || undefined,
            description: ability.rules,
            effects: getAbilityEffects(ability.name, ability.rules),
            category
        };
        dataStore.abilities[abilityId] = entity;
        group.abilities.push(entity);
    }

    if (keywords) {
        for (const groupKeyword of db[keywords]) {
            const group = getItem(
                dataStore,
                "abilityGroups",
                groupKeyword[groupId as keyof typeof groupKeyword]
            );
            const keyword = db.keyword.find(
                k => k.id === groupKeyword.keywordId
            );
            if (keyword) {
                if (!group.keywords) group.keywords = [];
                group.keywords.push(keyword.name.toUpperCase());
            }
        }
    }
}

function importAbilityKeywords<
    T extends Abilities,
    K extends KeysOfType<Dump, { keywordId: string }[]>,
    U extends KeysOfType<ArrayElement<Dump[K]>, string>
>(
    db: Dump,
    dataStore: ImportedDataStore,
    abilities: T,
    keywords: K,
    groupId: U
) {
    for (const abilityKeyword of db[keywords]) {
        const ability = getItem(
            dataStore,
            "abilities",
            abilityKeyword[groupId as keyof typeof abilityKeyword]
        );
        const keyword = db.keyword.find(k => k.id === abilityKeyword.keywordId);
        if (keyword) {
            if (!ability.restrictions) ability.restrictions = {};
            if (!ability.restrictions.keywords)
                ability.restrictions.keywords = [];
            ability.restrictions.keywords.push(keyword.name.toUpperCase());
        }
    }
}

export function importData(db: Dump): ImportedDataStore {
    const dataStore: ImportedDataStore = {
        abilities: {},
        attacks: {},
        battalions: {},
        damageTables: {},
        factions: {},
        models: {},
        options: {},
        realms: {},
        sceneries: {},
        units: {},
        abilityGroups: {},
        genericAbilityGroups: []
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
            id: getId(
                warscroll.id,
                `${warscroll.name} ${warscroll.subname || ""}`,
                "units"
            ),
            name: warscroll.name,
            description: warscroll.basicDescription || "",
            flavor: warscroll.lore || undefined,
            subName: warscroll.subname || undefined,
            size: warscroll.unitSize || 0,
            points: warscroll.points,
            model: getItem(dataStore, "models", warscroll.id),
            factions: [],
            keywords: warscroll.referenceKeywords.toUpperCase().split(", "),
            role: Role.Other,
            bravery: warscroll.bravery ?? undefined,
            wounds: warscroll.wounds ?? undefined,
            move: warscroll.move ?? undefined,
            save: warscroll.save ?? undefined,
            pictureUrl: warscroll.imageUrl ?? undefined,
            unique: warscroll.unique,
            single: warscroll.single
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
            category: AbilityCategory.SpecialRule,
            effects: getAbilityEffects(
                descriptionSubsection.header,
                descriptionSubsection.rules
            )
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
        const unit = getItem(dataStore, "units", warscrollAbility.warscrollId);
        const ability: Ability = {
            id: getId(
                warscrollAbility.id,
                `${unit.name} ${unit.subName || ""} ${warscrollAbility.name}`,
                "abilities"
            ),
            name: warscrollAbility.name,
            flavor: warscrollAbility.lore || undefined,
            description: warscrollAbility.rules,
            effects: getAbilityEffects(
                warscrollAbility.name,
                warscrollAbility.rules
            )
        };
        dataStore.abilities[ability.id] = ability;
        if (!unit.abilities) unit.abilities = [];
        unit.abilities.push(ability);
    }

    for (const weapon of db.weapon) {
        const unit = getItem(dataStore, "units", weapon.warscrollId);
        const attack: Attack = {
            id: getId(
                weapon.id,
                `${unit.name} ${unit.subName || ""} ${weapon.name}`,
                "attacks"
            ),
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

    importExtraAbilities(
        db,
        dataStore,
        "artefact_of_power_group",
        "artefact_of_power",
        "artefact_of_power_group_keywords_keyword",
        AbilityCategory.Artefact,
        "artefactOfPowerGroupId"
    );

    importExtraAbilities(
        db,
        dataStore,
        "battle_trait_group",
        "battle_trait",
        undefined,
        AbilityCategory.BattleTrait,
        "battleTraitGroupId"
    );

    importExtraAbilities(
        db,
        dataStore,
        "mount_trait_group",
        "mount_trait",
        "mount_trait_group_keywords_keyword",
        AbilityCategory.Mount,
        "mountTraitGroupId"
    );

    importAbilityKeywords(
        db,
        dataStore,
        "mount_trait",
        "mount_trait_keywords_keyword",
        "mountTraitId"
    );

    importExtraAbilities(
        db,
        dataStore,
        "prayer_group",
        "prayer",
        undefined,
        AbilityCategory.Prayer,
        "prayerGroupId"
    );

    importExtraAbilities(
        db,
        dataStore,
        "spell_lore_group",
        "spell_lore",
        "spell_lore_group_required_keywords_keyword",
        AbilityCategory.Spell,
        "spellLoreGroupId"
    );

    importExtraAbilities(
        db,
        dataStore,
        "triumph_group",
        "triumph",
        undefined,
        AbilityCategory.Triumph,
        "triumphGroupId"
    );

    for (const unit of Object.values(dataStore.units)) {
        unit.options = getModelOptions(unit);
        if (unit.options) {
            for (const option of unit.options) {
                dataStore.options[option.id] = option;
            }
        }
    }

    return dataStore;
}
