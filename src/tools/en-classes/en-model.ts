export const Ability = {
    name: "Ability",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        blurb: "string",
        lore: "string?"
    }
};

export const ArtefactGroup = {
    name: "ArtefactGroup",
    primaryKey: "id",
    properties: {
        id: "string",
        groupTitle: "string",
        keywords: "CompoundKeyword[]",
        artefacts: "string[]"
    }
};

export const BattalionOrganisation = {
    name: "BattalionOrganisation",
    primaryKey: "id",
    properties: {
        id: "string",
        min: "int",
        max: "int",
        notes: "string?",
        required: "bool",
        compoundKeywords: "CompoundKeyword[]"
    }
};

export const BattalionWarscroll = {
    name: "BattalionWarscroll",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        faction: "string",
        allegiance: "string[]",
        grandAlliance: "string",
        about: "string?",
        imageUrl: "string",
        organisation: "BattalionOrganisation[]",
        organisationFootnote: "string?",
        abilities: "Ability[]",
        commandAbilities: "Ability[]",
        magicBlurb: "string?",
        magicAbilities: "Ability[]",
        artefactGroupTitle: "string?",
        artefactBlurb: "string?",
        artefacts: "Ability[]",
        commandTraitBlurb: "string?",
        commandTraits: "Ability[]",
        points: "int",
        notes: "string?",
        legacyID: "string?",
        requiredProducts: "string[]",
        lastUpdated: "double"
    }
};

export const Battleplan = {
    name: "Battleplan",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        blurb: "string",
        imageUrl: "string",
        ruleset: "string",
        sections: "Rule[]"
    }
};

export const CommandTraitGroup = {
    name: "CommandTraitGroup",
    primaryKey: "id",
    properties: {
        id: "string",
        groupTitle: "string",
        keywords: "CompoundKeyword[]",
        commandTraits: "string[]"
    }
};

export const CompoundKeyword = {
    name: "CompoundKeyword",
    primaryKey: "id",
    properties: {
        id: "string",
        keywords: "string[]"
    }
};

export const DamageColumn = {
    name: "DamageColumn",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        values: "DamagePair[]"
    }
};

export const DamagePair = {
    name: "DamagePair",
    primaryKey: "id",
    properties: {
        id: "string",
        wounds: "string",
        value: "string"
    }
};

export const Division = {
    name: "Division",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        requiredArtefact: "string?",
        requiredArtefactKeyword: "string?",
        requiredCommandTrait: "string?",
        requiredCommandTraitKeyword: "string?",
        addedAllies: "CompoundKeyword[]",
        restrictedRealms: "RealmOfBattle[]",
        fourthAddedKeyword: "CompoundKeyword",
        skyportCode: "SkyportCode",
        childDivision: "Division"
    }
};

export const EndlessSpell = {
    name: "EndlessSpell",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        about: "string?",
        imageUrl: "string",
        specialRules: "Rule[]",
        abilities: "Ability[]",
        commandAbilities: "Ability[]",
        magicAbilities: "Ability[]",
        blurb: "string",
        keywords: "string[]",
        category: "string",
        unitSizeMin: "int",
        unitSizeMax: "int",
        points: "int",
        notes: "string?",
        lastUpdated: "double"
    }
};

export const ExceptionalTraitGroup = {
    name: "ExceptionalTraitGroup",
    primaryKey: "id",
    properties: {
        id: "string",
        groupTitle: "string",
        keywords: "CompoundKeyword[]",
        traits: "string[]"
    }
};

export const KharadronCode = {
    name: "KharadronCode",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        type: "string"
    }
};

export const Mercenary = {
    name: "Mercenary",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        exclusionKeywords: "CompoundKeyword[]",
        organisation: "BattalionOrganisation[]"
    }
};

export const RealmAllegiance = {
    name: "RealmAllegiance",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        allies: "CompoundKeyword[]",
        keywords: "string[]",
        exclusionKeywords: "string[]",
        grandAlliance: "string?",
        commandTraitGroups: "CommandTraitGroup[]",
        artefactGroups: "ArtefactGroup[]",
        divisionName: "string?",
        divisions: "Division[]",
        spellGroups: "ExceptionalTraitGroup[]",
        prayerGroups: "ExceptionalTraitGroup[]",
        generalSpecificTraitGroups: "ExceptionalTraitGroup[]",
        mountTraitGroups: "ExceptionalTraitGroup[]",
        warchanterWarbeatGroups: "ExceptionalTraitGroup[]",
        fourthAddedKeyword: "CompoundKeyword"
    }
};

export const RealmOfBattle = {
    name: "RealmOfBattle",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        realmName: "string",
        magic: "Ability",
        commands: "Ability[]",
        features: "RealmscapeFeature[]",
        artefactGroups: "ArtefactGroup[]"
    }
};

export const RealmscapeFeature = {
    name: "RealmscapeFeature",
    primaryKey: "id",
    properties: {
        id: "string",
        roll: "int",
        feature: "Ability"
    }
};

export const Rule = {
    name: "Rule",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        blurb: "string"
    }
};

export const SceneryWarscroll = {
    name: "SceneryWarscroll",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        about: "string?",
        imageUrl: "string",
        blurb: "string",
        sceneryRules: "Ability[]",
        keywords: "string[]",
        productURL: "string?",
        lastUpdated: "double",
        unitSizeMin: "int",
        unitSizeMax: "int",
        points: "int",
        notes: "string?"
    }
};

export const SkyportCode = {
    name: "SkyportCode",
    primaryKey: "id",
    properties: {
        id: "string",
        artycle: "KharadronCode",
        amendment: "KharadronCode",
        footnote: "KharadronCode"
    }
};

export const UnitWarscroll = {
    name: "UnitWarscroll",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        subName: "string?",
        about: "string?",
        imageUrl: "string",
        move: "string",
        bravery: "string",
        wounds: "string",
        save: "string",
        specialRules: "Rule[]",
        upgrades: "Rule[]",
        abilities: "Ability[]",
        minionAbilities: "Ability[]",
        commandAbilities: "Ability[]",
        magicBlurb: "string?",
        magicAbilities: "Ability[]",
        weapons: "UnitWeapon[]",
        blurb: "string",
        keywords: "string[]",
        hiddenKeywords: "string[]",
        grandAlliance: "string",
        factions: "string[]",
        unitSizeMin: "int",
        unitSizeMax: "int",
        points: "int",
        pointsMax: "int",
        battlefieldRoles: "string[]",
        additionalNotes: "string?",
        overriddenRoles: "string[]",
        overrideAllegiances: "string[]",
        overrideGeneralKeywords: "CompoundKeyword[]",
        nonGeneralCommonOverrideKeyword: "string?",
        overrideUnitSizeMin: "int",
        maxCount: "int",
        maxAppliesToKeyword: "string?",
        requiredIncludedKeyword: "string?",
        legacyID: "string?",
        productURL: "string?",
        availableMarksOfChaos: "string[]",
        markOfChaosRequired: "bool",
        legionOfNagash: "bool",
        damageTable: "DamageColumn[]",
        warMachine: "WarMachine",
        lastUpdated: "double"
    }
};

export const UnitWeapon = {
    name: "UnitWeapon",
    primaryKey: "id",
    properties: {
        id: "string",
        name: "string",
        missile: "bool",
        range: "string",
        attacks: "string",
        hit: "string",
        wound: "string",
        rend: "string",
        damage: "string",
        upgrade: "bool"
    }
};

export const WarMachine = {
    name: "WarMachine",
    primaryKey: "id",
    properties: {
        id: "string",
        move: "string",
        bravery: "string",
        wounds: "string",
        save: "string",
        weapons: "UnitWeapon[]",
        crewTable: "DamageColumn[]",
        keywords: "string[]"
    }
};
