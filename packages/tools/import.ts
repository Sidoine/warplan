import {
    Ability,
    AbilityCategory,
    AbilityEffect,
    AbilityGroup,
    Attack,
    Battalion,
    BattalionGroup,
    BattalionUnit,
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
    ValueType,
    BattalionAbility,
    Turn,
    EffectDuration,
    Aura,
    AuraType,
    DefenseAura,
} from "../common/data";
import {
    AbilityGroupDomain,
    DamageCell,
    DamageRow,
    Dump,
    PurpleGroup,
    Type,
} from "../common/definitions";

function toCamelCase(name: string) {
    return name
        .toLowerCase()
        .replace(/[^\w]+(\w)/g, (p, x) => x.toUpperCase())
        .replace(/^(.)/, (p, x) => x.toLowerCase())
        .replace(/[^A-Za-z0-9]/g, "")
        .replace(/^[0-9]/g, "_");
}

function parseValue(value: string, name: string, unit: Unit): Value {
    if (value.match(/^\d+$/)) {
        return Number.parseInt(value);
    }

    if (value === "✹" && unit.damageTable) {
        return unit.damageTable.columns.find((x) => x.name === name) ?? value;
    }

    return value;
}

function generatedId(name: string, property: DataStoreProperty) {
    let idMap = idMaps.get(property);
    if (idMap === undefined) {
        idMap = {
            idToName: new Map<string, string>(),
            nameToId: new Map<string, string>(),
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
            nameToId: new Map<string, string>(),
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

function parseWeaponCondition(
    unit: Unit | undefined,
    weapon: string,
    effect: Partial<AbilityEffect>
) {
    effect.targetType = TargetType.Weapon;
    if (unit && unit.attacks) {
        if (weapon.startsWith("missile")) {
            effect.targetCondition = effect.targetCondition || {};
            effect.targetCondition.rangedWeapon = true;
            return;
        }
        if (weapon.startsWith("melee")) {
            effect.targetCondition = effect.targetCondition || {};
            effect.targetCondition.meleeWeapon = true;
            return;
        }

        if (weapon.startsWith("a ")) {
            weapon = weapon.substring(2);
        } else if (weapon.startsWith("an ")) {
            weapon = weapon.substring(3);
        }
        const attack = findElement(unit.attacks, weapon);
        if (attack) {
            effect.targetCondition = { weaponId: attack.id };
        }
    }
}

function parseKeywords(keywords: string, db: Dump): string[] {
    keywords = keywords.toUpperCase();
    if (db.keyword.some((x) => x.name === keywords)) {
        return [keywords];
    }
    const result: string[] = [];
    const words = keywords.split(/\s+/);
    let i = 0;
    for (i = words.length - 1; i >= 0; i--) {
        const word = words[i];
        if (db.keyword.some((x) => x.name.toUpperCase() === word)) {
            result.push(word);
        } else {
            break;
        }
    }
    if (i < 0) return result;

    if (i < words.length - 1) {
        const remaining = words.slice(0, i).join(" ");
        if (db.faction.some((x) => x.name.toUpperCase() === remaining)) {
            result.push(remaining);
            return result;
        }
        return result.concat(remaining + "?");
    }

    return [keywords];
}

export function getAbilityEffects(
    name: string,
    blurb: string,
    dump: Dump,
    unit?: Unit
) {
    const effect: Partial<AbilityEffect> = {};
    const auras: Aura[] = [];

    // Phase
    let match = blurb.match(/when you choose an? .*? army/i);
    if (match) {
        effect.phase = Phase.ArmyList;
    }

    match = blurb.match(/1 model in this unit can be a/i);
    if (match) {
        effect.targetType = TargetType.Unit;
        effect.phase = Phase.ArmyList;
    }

    match = blurb.match(/(\d) in every (\d) models in this unit can be a/i);
    if (match) {
        effect.targetType = TargetType.Unit;
        effect.phase = Phase.ArmyList;
    }

    match = blurb.match(/once per phase,/i);
    if (match) {
        effect.phase = Phase.Any;
    }

    match = blurb.match(
        /after armies have been set up but before the first battle round/i
    );
    if (match) {
        effect.phase = Phase.Setup;
        effect.subPhase = SubPhase.After;
    }

    match = blurb.match(/at the start of your hero phase,/i);
    if (match) {
        effect.phase = Phase.Hero;
        effect.subPhase = SubPhase.Before;
        effect.side = Turn.Your;
    }
    match = blurb.match(/at the start of the hero phase/i);
    if (match) {
        effect.phase = Phase.Hero;
        effect.subPhase = SubPhase.Before;
    }
    if (blurb.indexOf("in your hero phase") >= 0) {
        effect.phase = Phase.Hero;
        effect.subPhase = SubPhase.While;
        effect.side = Turn.Your;
    }

    match = blurb.match(/in your hero phase,/i);
    if (match) {
        effect.phase = Phase.Hero;
        effect.subPhase = SubPhase.While;
        effect.side = Turn.Your;
    }

    match = blurb.match(/at the end of your hero phase,/i);
    if (match) {
        effect.phase = Phase.Hero;
        effect.subPhase = SubPhase.After;
        effect.side = Turn.Your;
    }

    match = blurb.match(/at the start of your shooting phase/i);
    if (match) {
        effect.phase = Phase.Shooting;
        effect.subPhase = SubPhase.Before;
        effect.side = Turn.Your;
    }

    match = blurb.match(/in your shooting phase/i);
    if (match) {
        effect.phase = Phase.Shooting;
        effect.subPhase = SubPhase.While;
        effect.side = Turn.Your;
    }

    match = blurb.match(/at the end of the shooting phase/i);
    if (match) {
        effect.phase = Phase.Shooting;
        effect.subPhase = SubPhase.After;
    }

    match = blurb.match(/after this (model|unit) makes a charge move/i);
    if (match) {
        effect.phase = Phase.Charge;
        effect.subPhase = SubPhase.WhileAfter;
        effect.side = Turn.Your;
    }

    match = blurb.match(/at the start of (a|the) combat phase/i);
    if (match) {
        effect.phase = Phase.Combat;
        effect.subPhase = SubPhase.Before;
    }

    match = blurb.match(/before fighting with this unit/i);
    if (match) {
        effect.phase = Phase.Combat;
        effect.subPhase = SubPhase.While;
    }

    match = blurb.match(
        /After this unit has fought for the first time in a phase and all of its attacks have been resolved/i
    );
    if (match) {
        effect.phase = Phase.Combat;
        effect.subPhase = SubPhase.WhileAfter;
    }

    match = blurb.match(/during the combat phase,/i);
    if (match) {
        effect.phase = Phase.Combat;
        effect.subPhase = SubPhase.While;
    }
    match = blurb.match(/at the end of each combat phase,/i);
    if (match) {
        effect.phase = Phase.Combat;
        effect.subPhase = SubPhase.After;
    }

    match = blurb.match(/at the start of the battleshock phase,/i);
    if (match) {
        effect.phase = Phase.Battleshock;
        effect.subPhase = SubPhase.Before;
    }

    // Occurences
    match = blurb.match(/once per battle/i);
    if (match) {
        effect.timesPerBattle = 1;
    }

    match = blurb.match(/once per turn/i);
    if (match) {
        effect.timesPerTurn = 1;
    }

    // Commands
    match = blurb.match(/you can use this command ability/i);
    if (match) {
        effect.commandPoints = 1;
    }

    // Spells
    match = blurb.match(
        /has a casting value of (\d+)(?: and a range of (\d+"))?/
    );
    if (match) {
        effect.spellCastingValue = parseInt(match[1]);
        if (match[2]) {
            effect.targetRange = match[2];
        }
        effect.phase = Phase.Hero;
    }

    match = blurb.match(
        /subtract (\d) from casting, dispelling and unbinding rolls for Wizards/i
    );
    if (match) {
        effect.targetType = TargetType.Enemy;
        auras.push({
            type: AuraType.Spell,
            malusToAll: match[1],
        });
    }

    match = blurb.match(/you can re-roll 1 failed casting roll/i);
    if (match) {
        auras.push({
            type: AuraType.Spell,
            rerollFailedCast: true,
        });
    }

    match = blurb.match(
        /can attempt to cast (\d) spells? in your hero phase and attempt to unbind (\d) spells? in the enemy hero phase/i
    );
    if (match) {
        effect.phase = Phase.Hero;
        effect.immediate = effect.immediate || {};
        effect.immediate.casts = parseInt(match[1]);
        effect.immediate.unbinds = parseInt(match[2]);
    }

    // Chants
    match = blurb.match(/add (\d) to chanting rolls for this unit/i);
    if (match) {
        auras.push({
            type: AuraType.Prayer,
            bonusToChant: parseInt(match[1]),
        });
    }
    match = blurb.match(/is a prayer that has an answer value of (\d)/i);
    if (match) {
        effect.prayerValue = parseInt(match[1]);
    }

    //Target
    match = blurb.match(
        /you can pick an enemy Hero within (\d+") of this model/i
    );
    if (match) {
        effect.targetType = TargetType.Enemy;
        effect.targetCondition = effect.targetCondition || {};
        effect.targetCondition.keyword = "HERO";
        effect.targetRange = parseInt(match[1]);
    }

    match = blurb.match(
        /pick 1 enemy unit within (\d+") of the caster and visible to them/i
    );
    if (match) {
        effect.targetType = TargetType.Enemy;
        effect.targetCondition = effect.targetCondition || {};
        effect.targetCondition.visible = true;
        effect.targetRange = match[1];
    }

    match = blurb.match(/you can pick 1 enemy unit within (\d") of this unit/i);
    if (match) {
        effect.targetType = TargetType.Enemy;
        effect.targetRange = match[1];
    }

    match = blurb.match(
        /pick 1 enemy unit within (\d+") of this unit’s (.*?) that is not visible to them/i
    );
    if (match) {
        effect.targetType = TargetType.Enemy;
        effect.targetRange = match[1];
    }

    match = blurb.match(
        /pick 1 friendly (.*?) (?:unit )?(?:that is )?(wholly )?within (\d+") of this model/i
    );
    if (match) {
        effect.targetType = TargetType.Friend;
        effect.targetCondition = effect.targetCondition || {};
        effect.targetCondition.allKeywords = parseKeywords(match[1], dump);
        if (match[2] === "wholly ") effect.whollyWithin = true;
        effect.targetRange = match[3];
    }

    match = blurb.match(
        /pick 1 terrain feature within range and visible to the caster/i
    );
    if (match) {
        effect.targetType = TargetType.Terrain;
        effect.targetCondition = effect.targetCondition || {};
        effect.targetCondition.visible = true;
    }

    match = blurb.match(
        /you can pick 1 enemy unit within (\d+") of this unit’s (.*?) and/i
    );
    if (match && effect.targetType === undefined) {
        effect.targetType = TargetType.Enemy;
        effect.targetRange = match[1];
    }

    match = blurb.match(
        /you can pick 1 enemy unit within (\d+") of this unit and/i
    );
    if (match && effect.targetType === undefined) {
        effect.targetType = TargetType.Enemy;
        effect.targetRange = match[1];
    }

    match = blurb.match(
        /you can pick 1 enemy unit within (\d+") of each friendly (.*?)unit/i
    );
    if (match) {
        effect.targetType = TargetType.Enemy;
        effect.targetRange = match[1];
        effect.condition = effect.condition || {};
        if (match[2]) effect.condition.keyword = match[2];
    }

    match = blurb.match(
        /pick up to (D?\d) friendly (.*)?units wholly within (\d+") of a friendly model/i
    );
    if (match) {
        effect.targetType = TargetType.Friend;
        effect.targetCondition = effect.targetCondition || {};
        if (match[2])
            effect.targetCondition.allKeywords = parseKeywords(match[2], dump);
        effect.targetRange = match[3];
        effect.targetsCount = match[1];
    }

    match = blurb.match(
        /you can pick 1 point on the battlefield within (\d+") of this unit and visible to it/i
    );
    if (match) {
        effect.targetType = TargetType.Zone;
        effect.targetRange = match[1];
        effect.targetCondition = effect.targetCondition || {};
        effect.targetCondition.visible = true;
    }

    // Defense
    match = blurb.match(
        /Roll a dice each time you allocate a wound or mortal wound to this model\. On a (\d)\+, that wound or mortal wound is negated/i
    );
    if (match) {
        const defenseAura: DefenseAura = { type: AuraType.Defense };
        auras.push(defenseAura);
        if (match[1] === "5") {
            defenseAura.negateWoundsOrMortalWoundsOn5 = true;
        }
        if (match[1] === "6") {
            defenseAura.negateWoundsOrMortalWoundsOn6 = true;
        }
    } else {
        match = blurb.match(/On a 5\+, that wound or mortal wound is negated/i);
        if (match) {
            auras.push({
                type: AuraType.Defense,
                negateWoundsOrMortalWoundsOn5: true,
            });
        }
    }

    if (blurb.indexOf("subtract 1 from hit rolls for attacks made by") >= 0) {
        auras.push({ type: AuraType.Attack, malusHitRoll: 1 });
    }

    match = blurb.match(
        /roll a d6 each time you allocate a mortal wound to this model\. on a 5\+, the wound is negated/i
    );
    if (match) {
        auras.push({ type: AuraType.Defense, negateMortalWoundsOn5: true });
    }

    match = blurb.match(
        /ignore modifiers (positive or negative) when making save rolls for attacks that target this (model|unit)/i
    );
    if (match) {
        auras.push({ type: AuraType.Defense, ethereal: true });
    }

    match = blurb.match(
        /subtract (\d) from hit rolls for attacks that target/i
    );
    if (match) {
        auras.push({ type: AuraType.Defense, malusHitRoll: match[1] });
    }

    match = blurb.match(
        /subtract (\d) from hit rolls for attacks made by enemy models/i
    );
    if (match) {
        auras.push({ type: AuraType.Defense, malusHitRoll: match[1] });
    }

    match = blurb.match(
        /you can add 1 to save rolls for attacks that target this (model|unit)/i
    );
    if (match) {
        auras.push({ type: AuraType.Defense, bonusSave: 1 });
    }

    match = blurb.match(
        /Each time this (unit|model) is affected by a spell or endless spell, you can roll a dice\. If you do so, on a 4\+, ignore the effects of that spell or endless spell on this unit/i
    );
    if (match) {
        auras.push({
            type: AuraType.Defense,
            ignoreSpellOn4: true,
            phase: Phase.Hero,
        });
    }

    match = blurb.match(
        /has a Rend characteristic of -1, change the Rend characteristic for that attack to ‘-’/i
    );
    if (match) {
        auras.push({ type: AuraType.Defense, ignoreRendOfMinus1: true });
    }

    // Movement
    if (name === "Mount") {
        effect.noEffect = true;
    }

    match = blurb.match(/this (model|unit) can fly/i);
    if (match) {
        auras.push({ type: AuraType.Movement, fly: true });
    }

    match = blurb.match(/double the Move characteristic of that unit/i);
    if (match) {
        auras.push({ type: AuraType.Movement, doubleMove: true });
    }

    // Charge
    match = blurb.match(
        / this model can retreat and still charge later in the same turn/i
    );
    if (match) {
        auras.push({ type: AuraType.Charge, canChargeAfterRetreat: true });
    }

    // Attack
    match = blurb.match(
        /if the unmodified hit roll for an attack made with (?:an?|this model's )?(.*) is 6, (?:the target suffers|that attack inflicts) (\d+) mortal wounds? (on the target )?and the attack sequence ends \(do not make a wound or save roll\)/i
    );
    if (match) {
        auras.push({
            type: AuraType.Attack,
            mortalWoundsOnHitUnmodified6: match[2],
        });
        parseWeaponCondition(unit, match[1], effect);
    }
    match = blurb.match(
        /You can re-roll failed hit rolls for attacks made with (\w+)/i
    );
    if (match) {
        auras.push({
            type: AuraType.Attack,
            rerollFailedHits: getTargetCondition(blurb, 1),
        });
        parseWeaponCondition(unit, match[1], effect);
    }
    match = blurb.match(
        /If the unmodified wound roll for an attack made with a (.*) is 6, add (\d) to the Damage characteristic of that weapon for that attack/i
    );
    if (match) {
        parseWeaponCondition(unit, match[1], effect);
        auras.push({
            type: AuraType.Attack,
            bonusDamageOnWoundUnmodified6: parseInt(match[2]),
        });
    }
    match = blurb.match(
        /add 1 to the Attacks characteristic of (.*?)(?:’s|s’) (.*?)(\.| until| in that)/i
    );
    if (match) {
        parseWeaponCondition(unit, match[2], effect);
        auras.push({ type: AuraType.Attack, bonusAttacks: 1 });
    }
    match = blurb.match(/Add 1 to Damage characteristic of that weapon/i);
    if (match) {
        auras.push({ type: AuraType.Attack, bonusDamage: 1 });
    }
    match = blurb.match(
        /if the unmodified hit roll for an attack made with (.*?) is 6, that attack inflicts (\d) mortal wound on the target in addition to any normal damage/i
    );
    if (match) {
        parseWeaponCondition(unit, match[1], effect);
        auras.push({
            type: AuraType.Attack,
            bonusMortalWoundsOnHitUnmodified6: match[2],
        });
    }

    match = blurb.match(
        /add 1 to wound rolls for attacks made with this unit’s (.*?)(\.| and)/i
    );
    if (match) {
        parseWeaponCondition(unit, match[1], effect);
        auras.push({ type: AuraType.Attack, bonusWoundRoll: 1 });
    }

    match = blurb.match(/improve the Rend characteristic of that weapon by 1/i);
    if (match) {
        auras.push({ type: AuraType.Attack, bonusRend: 1 });
    }
    match = blurb.match(
        /if the unmodified hit roll for an attack made with (.*?) is 6, add (\d) to the damage inflicted if that attack is successful/i
    );
    if (match) {
        parseWeaponCondition(unit, match[1], effect);
        auras.push({
            type: AuraType.Attack,
            bonusDamageOnHitUnmodified6: match[2],
        });
    }
    match = blurb.match(
        /you can re-roll hit rolls for attacks made with (.*?) that target that unit/i
    );
    if (match) {
        parseWeaponCondition(unit, match[1], effect);
        auras.push({ type: AuraType.Attack, rerollHits: true });
    } else {
        match = blurb.match(/you can re-roll hit rolls for (.*?)./i);
        if (match) {
            parseWeaponCondition(unit, match[1], effect);
            auras.push({ type: AuraType.Attack, rerollHits: true });
        }
    }

    match = blurb.match(
        /the Sunmetal Weapons ability for the caster and\/or the unit they are part of causes mortal wounds to be inflicted on an unmodified hit roll of 5\+ instead of 6/i
    );
    if (match) {
        effect.targetType = TargetType.Ability;
        effect.targetCondition = effect.targetCondition || {};
        effect.targetCondition.abilityId = unit?.abilities?.find(
            (a) => a.name === "Sunmetal Weapons"
        )?.id;
        auras.push({ type: AuraType.Attack, mortalWoundsOnHitUnmodified5: 1 });
    }

    // Battleshock
    match = blurb.match(/You can re-roll battleshock tests for units/i);
    if (match) {
        auras.push({ type: AuraType.Battleshock, rerollFails: true });
    }

    // Immediate
    match = blurb.match(
        /on a (\d)\+, that enemy unit suffers ([D\d]+) mortal wounds/i
    );
    if (match) {
        effect.targetType = TargetType.Enemy;
        effect.immediate = effect.immediate || {};
        effect.immediate.mortalWounds = `${match[2]}(${match[1]}+)`;
    }

    match = blurb.match(
        /roll a number of dice equal to the number of models in that unit. For each (\d)\+, that unit suffers (\d) mortal wound./i
    );
    if (match) {
        effect.immediate = effect.immediate || {};
        effect.immediate.mortalWoundsPerModel = `${match[2]}(${match[1]}+)`;
    }

    match = blurb.match(
        /roll a number of dice equal to the unmodified charge roll for that charge move\. For each (\d)\+, that unit suffers (\d) mortal wounds?./i
    );
    if (match) {
        effect.immediate = effect.immediate || {};
        effect.immediate.mortalWoundsPerChargeRoll = `${match[2]}(${match[1]}+)`;
    }

    match = blurb.match(
        /you can heal up to (\d?D?\d?) wounds allocated to this model/i
    );
    if (match) {
        effect.immediate = effect.immediate || {};
        effect.immediate.heal = match[1];
    }

    match = blurb.match(
        /each enemy unit within (\d") of that point suffers (D?\d) mortal wounds/i
    );
    if (match) {
        effect.immediate = effect.immediate || {};
        effect.immediate.mortalWounds = match[2];
        effect.targetRadius = match[1];
    }

    match = blurb.match(
        /Roll (\d) dice for each model in this unit\. For each (\d)\+, that enemy unit suffers (\d) mortal wound/i
    );
    if (match) {
        effect.immediate = effect.immediate || {};
        effect.immediate.mortalWoundsPerModel = `${match[3]}(${match[1]}D ${match[2]}+)`;
    }

    // Command
    match = blurb.match(
        /your opponent must spend 2 command points to use a command ability instead of 1/i
    );
    if (match) {
        effect.targetType = TargetType.EnemyArmy;
        auras.push({ type: AuraType.Command, doublePrice: true });
    }

    // List building
    match = blurb.match(/1 model in this unit can be/i);
    if (match) {
        effect.immediate = effect.immediate || {};
        effect.immediate.allowInclusion = true;
    }

    // Special
    match = blurb.match(/visibility between 2 models is blocked/i);
    if (match) {
        auras.push({
            type: AuraType.Special,
            blockVisibility: true,
        });
    }

    // Aura target conditions
    match = blurb.match(
        /if the target (model|unit) made a charge move in the same turn/i
    );
    if (match) {
        for (const aura of auras) {
            aura.targetCondition = aura.targetCondition || {};
            aura.targetCondition.hasCharged = true;
        }
    }

    // Conditions
    match = blurb.match(
        /if this (model|unit) does not make a charge move in your charge phase/i
    );
    if (match) {
        for (const aura of auras) {
            aura.condition = aura.condition || {};
            aura.condition.hasNotCharged = true;
        }
    }

    match = blurb.match(
        /if this (model|unit) made a charge move in the same turn/i
    );
    if (match) {
        for (const aura of auras) {
            aura.condition = aura.condition || {};
            aura.condition.hasCharged = true;
        }
    }

    match = blurb.match(
        /if this model is within (\d+") of any friendly (.*?),/i
    );
    if (match) {
        for (const aura of auras) {
            aura.condition = aura.condition || {};
            aura.condition.inRangeOf = {
                allKeywords: parseKeywords(match[2], dump),
                range: match[1],
            };
        }
    }

    // Duration
    match = blurb.match(/until the end of that phase/i);
    if (match) {
        for (const aura of auras) {
            aura.duration = EffectDuration.Phase;
        }
    }

    match = blurb.match(/until your next (.*?) phase/i);
    if (match) {
        for (const aura of auras) {
            aura.duration = EffectDuration.Round;
        }
    }

    match = blurb.match(/in that (combat) phase/i);
    if (match) {
        for (const aura of auras) {
            aura.duration = EffectDuration.Phase;
        }
    }

    if (auras.length) {
        effect.auras = auras;
    }

    if (Object.keys(effect).length === 0) return undefined;

    return [Object.assign({ targetType: TargetType.Unit }, effect)];
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
        if (element.name.includes(" or ")) {
            const names = element.name.split(" or ");
            if (names.includes(name)) return element;
        }
    }

    for (const element of elements) {
        if (getProximity(element.name, name) > 0.95) {
            return element;
        }
        if (element.name.includes(": ")) {
            if (getProximity(element.name.split(": ")[0], name) > 0.95) {
                return element;
            }
        }

        if (element.name.includes(" or ")) {
            const names = element.name.split(" or ");
            if (names.some((x) => getProximity(x, name) > 0.95)) return element;
        }
    }

    return undefined;
}

function getModelOption(option: ModelOption, optionName: string, unit: Unit) {
    let found = false;
    if (unit.attacks) {
        for (;;) {
            const attack: Attack | undefined = findElement(
                unit.attacks,
                optionName
            );
            if (attack) {
                if (!option.attacks) {
                    option.attacks = [];
                }
                option.attacks.push(attack);
                unit.attacks = unit.attacks.filter((x) => x !== attack);
                found = true;
            } else break;
        }
    }
    if (unit.abilities) {
        const ability = findElement(unit.abilities, optionName);
        if (ability) {
            if (!option.abilities) {
                option.abilities = [];
            }
            option.abilities.push(ability);
            unit.abilities = unit.abilities.filter((x) => x !== ability);
            found = true;
        }
    }
    return found;
}

function getModelOptionAbilities(
    abilities: Ability[] | undefined,
    name: string
) {
    const result: Ability[] = [];
    const regex = new RegExp(`within (\\d+") of this unit’s ${name}`, "i");
    if (!abilities) return result;
    for (const ability of abilities) {
        if (ability.description && ability.description.match(regex)) {
            result.push(ability);
        }
    }
    return result;
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
            const option: ModelOption = {
                id: generatedId(
                    `${unit.name} ${unit.subName || ""} ${text}`,
                    "options"
                ),
                name: text,
                modelCategory: ModelOptionCategory.Weapon,
                unitCategory: UnitOptionCategory.Main,
            };

            if (!getModelOption(option, text, unit) && text.includes(" and ")) {
                const parts = text.split(" and ");
                for (const part of parts) {
                    getModelOption(option, part, unit);
                }
            }
            options.push(option);
        }
    }

    match = unit.description.match(
        /(\d) in every (\d) models can replace (?:their|the unit’s) ([\w\s]+) with a (.*?)\./
    );
    if (match) {
        const count = parseInt(match[1]);
        const every = parseInt(match[2]);
        const weaponOption = match[4];
        const option: ModelOption = {
            id: generatedId(
                `${unit.name} ${unit.subName || ""} ${weaponOption}`,
                "options"
            ),
            name: weaponOption,
            modelCategory: ModelOptionCategory.Weapon,
            ratio: { count, every },
        };
        if (unit.attacks) {
            const attack = unit.attacks.find((x) => x.name === weaponOption);
            if (attack) {
                if (!option.attacks) {
                    option.attacks = [];
                }
                option.attacks.push(attack);
                unit.attacks = unit.attacks.filter((x) => x !== attack);
            }
        }

        options.push(option);
    }

    if (unit.abilities) {
        const champion = unit.abilities.find(
            (x) => x.category === AbilityCategory.Champion
        );
        if (champion && champion.description) {
            const match = champion.description.match(
                /1 model in this unit can be an? (.*?)\./
            );
            if (match) {
                const championName = match[1];
                const abilities = getModelOptionAbilities(
                    unit.abilities,
                    championName
                ).concat(champion);
                const option: ModelOption = {
                    id: generatedId(
                        `${unit.name} ${unit.subName || ""} ${championName}`,
                        "options"
                    ),
                    name: championName,
                    modelCategory: ModelOptionCategory.Champion,
                    champion: true,
                    abilities: abilities,
                };
                options.push(option);
                unit.abilities = unit.abilities.filter(
                    (x) => !abilities.includes(x)
                );
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
type AbilityGroups = KeysOfType<Dump, PurpleGroup[]>;
type Abilities = KeysOfType<
    Dump,
    { id: string; name: string; lore?: string | null; rules: string }[]
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
    groupId: U,
    defaultDomain?: AbilityGroupDomain
) {
    for (const group of db[groups]) {
        const groupId = getId(group.id, group.name, "abilityGroups");
        const entity: AbilityGroup = {
            abilities: [],
            category,
            id: groupId,
            name: group.name,
            allowUniqueUnits: group.allowUniqueUnits,
            restrictions: group.restrictions,
            domain: group.domain ?? defaultDomain,
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
            effects: getAbilityEffects(ability.name, ability.rules, db),
            category,
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
                (k) => k.id === groupKeyword.keywordId
            );
            if (keyword) {
                if (!group.keywords) group.keywords = [];
                group.keywords.push(keyword.name.toUpperCase());
            }
        }
    }
}

function importAbilityKeywords<
    K extends KeysOfType<Dump, { keywordId: string }[]>,
    U extends KeysOfType<ArrayElement<Dump[K]>, string>
>(db: Dump, dataStore: ImportedDataStore, keywords: K, groupId: U) {
    for (const abilityKeyword of db[keywords]) {
        const ability = getItem(
            dataStore,
            "abilities",
            abilityKeyword[groupId as keyof typeof abilityKeyword]
        );
        const keyword = db.keyword.find(
            (k) => k.id === abilityKeyword.keywordId
        );
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
        units: {},
        abilityGroups: {},
        genericAbilityGroups: [],
        battalionUnits: {},
        battalionGroups: {},
        genericBattalionGroups: [],
        battalionAbilities: {},
    };

    for (const faction of db.faction) {
        const newId = getId(faction.id, faction.name, "factions");
        dataStore.factions[newId] = {
            id: newId,
            name: faction.name,
            category: faction.keywordCategory,
            children: [],
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
            name: warscroll.name,
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
            roles: [],
            bravery: warscroll.bravery ?? undefined,
            wounds: warscroll.wounds ?? undefined,
            move: warscroll.move ?? undefined,
            save: warscroll.save ?? undefined,
            pictureUrl: warscroll.imageUrl ?? undefined,
            unique: warscroll.unique,
            single: warscroll.single,
        };
        dataStore.units[unit.id] = unit;
    }

    for (const warscrollBattlefieldRole of db.warscroll_battlefield_role) {
        const unit = getItem(
            dataStore,
            "units",
            warscrollBattlefieldRole.warscrollId
        );
        unit.roles = unit.roles || [];
        unit.roles.push(warscrollBattlefieldRole.role);
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
                type: ValueType.DamageColumn,
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
            ranges,
        };
        dataStore.damageTables[table.id] = table;
        unit.damageTable = table;
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
            range: parseValue(weapon.range, weapon.name, unit),
            attacks: parseValue(weapon.attacks, weapon.name, unit),
            damage: parseValue(weapon.damage, weapon.name, unit),
            rend: parseValue(weapon.rend, weapon.name, unit),
            toHit: parseValue(weapon.hit, weapon.name, unit),
            toWound: parseValue(weapon.wound, weapon.name, unit),
        };
        dataStore.attacks[attack.id] = attack;
        if (!unit.attacks) unit.attacks = [];
        unit.attacks.push(attack);
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
                descriptionSubsection.rules,
                db,
                unit
            ),
        };
        switch (descriptionSubsection.header) {
            case "Champion":
                ability.category = AbilityCategory.Champion;
                break;
            case "Wizard":
                ability.category = AbilityCategory.Spell;
                break;
            default:
                if (
                    ability.description &&
                    ability.description.indexOf(
                        "1 model in this unit can be a"
                    ) >= 0
                ) {
                    ability.category = AbilityCategory.Champion;
                }
        }
        dataStore.abilities[ability.id] = ability;
        if (!unit.abilities) unit.abilities = [];
        unit.abilities.push(ability);
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
                warscrollAbility.rules,
                db,
                unit
            ),
        };
        dataStore.abilities[ability.id] = ability;
        if (!unit.abilities) unit.abilities = [];
        unit.abilities.push(ability);
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
        "artefactOfPowerGroupId",
        "unitLevel"
    );

    importExtraAbilities(
        db,
        dataStore,
        "battle_trait_group",
        "battle_trait",
        undefined,
        AbilityCategory.BattleTrait,
        "battleTraitGroupId",
        "armyLevel"
    );

    importExtraAbilities(
        db,
        dataStore,
        "mount_trait_group",
        "mount_trait",
        "mount_trait_group_keywords_keyword",
        AbilityCategory.Mount,
        "mountTraitGroupId",
        "unitLevel"
    );

    importAbilityKeywords(
        db,
        dataStore,
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
        "prayerGroupId",
        "unitLevel"
    );

    importExtraAbilities(
        db,
        dataStore,
        "spell_lore_group",
        "spell_lore",
        "spell_lore_group_required_keywords_keyword",
        AbilityCategory.Spell,
        "spellLoreGroupId",
        "unitLevel"
    );

    importExtraAbilities(
        db,
        dataStore,
        "triumph_group",
        "triumph",
        undefined,
        AbilityCategory.Triumph,
        "triumphGroupId",
        "armyLevel"
    );

    importExtraAbilities(
        db,
        dataStore,
        "grand_strategy_group",
        "grand_strategy",
        undefined,
        AbilityCategory.GrandStrategy,
        "grandStrategyGroupId",
        "armyLevel"
    );

    importExtraAbilities(
        db,
        dataStore,
        "unique_enhancement_group",
        "unique_enhancement",
        "unique_enhancement_group_keywords_keyword",
        AbilityCategory.UniqueEnhancement,
        "uniqueEnhancementGroupId"
    );

    // importAbilityKeywords(
    //     db,
    //     dataStore,
    //     "enhancement_bonus_requires_keywords_keyword",
    //     "enhancementBonusId"
    // );

    // importAbilityKeywords(
    //     db,
    //     dataStore,
    //     "enhancement_bonus_excludes_keywords_keyword",
    //     "enhancementBonusId",
    //     true
    // );

    importExtraAbilities(
        db,
        dataStore,
        "command_trait_group",
        "command_trait",
        "command_trait_group_keywords_keyword",
        AbilityCategory.CommandTrait,
        "commandTraitGroupId"
    );

    for (const unit of Object.values(dataStore.units)) {
        unit.options = getModelOptions(unit);
        if (unit.options) {
            for (const option of unit.options) {
                dataStore.options[option.id] = option;
            }
        }
    }

    for (const battalionGroup of db.core_battalion_group) {
        const entity: BattalionGroup = {
            id: getId(
                battalionGroup.id,
                battalionGroup.name,
                "battalionGroups"
            ),
            battalions: [],
            name: battalionGroup.name,
            description: battalionGroup.rules || "",
            restrictions: battalionGroup.restrictions,
        };
        dataStore.battalionGroups[entity.id] = entity;
        if (battalionGroup.factionId) {
            const faction = getItem(
                dataStore,
                "factions",
                battalionGroup.factionId
            );
            faction.battalionGroups = faction.battalionGroups || [];
            faction.battalionGroups.push(entity);
        } else {
            dataStore.genericBattalionGroups.push(entity);
        }
    }

    for (const battalion of db.core_battalion) {
        const battalionData: Battalion = {
            id: getId(battalion.id, battalion.name, "battalions"),
            name: battalion.name,
            onePerArmy: battalion.onePerArmy,
            units: [],
            abilities: [],
        };
        dataStore.battalions[battalionData.id] = battalionData;
        const battalionGroup = getItem(
            dataStore,
            "battalionGroups",
            battalion.coreBattalionGroupId
        );
        battalionGroup.battalions.push(battalionData);
    }

    for (const ability of db.battalion_ability) {
        const battalion = getItem(
            dataStore,
            "battalions",
            ability.coreBattalionId
        );
        const entity: BattalionAbility = {
            id: getId(
                ability.id,
                `${battalion.name} ${ability.header}`,
                "battalionAbilities"
            ),
            grantsExtraEnhancement: ability.grantsExtraEnhancement,
            name: ability.header,
            description: ability.rules,
        };
        dataStore.battalionAbilities[entity.id] = entity;
        battalion.abilities.push(entity);
    }

    for (const unitType of db.unit_type) {
        const battalion = getItem(
            dataStore,
            "battalions",
            unitType.coreBattalionId
        );
        const entity: BattalionUnit = {
            id: getId(
                unitType.id,
                `${battalion.name} ${unitType.name}`,
                "battalionUnits"
            ),
            name: unitType.name,
            max: unitType.max,
            min: unitType.min,
            eitherOr: unitType.eitherOr,
            imageName: unitType.imageName,
            order: unitType.order,
            restrictions: unitType.restrictions,
            woundsLimit: unitType.woundsLimit,
        };
        dataStore.battalionUnits[entity.id] = entity;
        battalion.units.push(entity);
    }

    for (const unitTypeBattleFieldRole of db.unit_type_required_battlefield_role) {
        const unitType = getItem(
            dataStore,
            "battalionUnits",
            unitTypeBattleFieldRole.unitTypeId
        );
        unitType.requiredRoles = unitType.requiredRoles || [];
        unitType.requiredRoles.push(unitTypeBattleFieldRole.role);
    }

    for (const unitTypeExcludedRole of db.unit_type_excluded_battlefield_role) {
        const unitType = getItem(
            dataStore,
            "battalionUnits",
            unitTypeExcludedRole.unitTypeId
        );
        unitType.excludedRoles = unitType.excludedRoles || [];
        unitType.excludedRoles.push(unitTypeExcludedRole.role);
    }

    for (const unitTypeKeyword of db.unit_type_required_keywords_keyword) {
        const unitType = getItem(
            dataStore,
            "battalionUnits",
            unitTypeKeyword.unitTypeId
        );
        unitType.keywords = unitType.keywords || [];
        const keyword = db.keyword.find(
            (k) => k.id === unitTypeKeyword.keywordId
        );
        if (keyword) unitType.keywords.push(keyword.name.toUpperCase());
    }

    return dataStore;
}
