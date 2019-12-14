exports.Ability = {
  name: 'Ability',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    blurb: 'string',
    lore: 'string?'
  }
}

exports.ArtefactGroup = {
  name: 'ArtefactGroup',
  primaryKey: 'id',
  properties: {
    id: 'string',
    groupTitle: 'string',
    keywords: 'CompoundKeyword[]',
    artefacts: 'string[]'
  }
}

exports.BattalionOrganisation = {
  name: 'BattalionOrganisation',
  primaryKey: 'id',
  properties: {
    id: 'string',
    min: 'int',
    max: 'int',
    notes: 'string?',
    required: 'bool',
    compoundKeywords: 'CompoundKeyword[]'
  }
}

exports.BattalionWarscroll = {
  name: 'BattalionWarscroll',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    faction: 'string',
    allegiance: 'string[]',
    grandAlliance: 'string',
    about: 'string?',
    imageUrl: 'string',
    organisation: 'BattalionOrganisation[]',
    organisationFootnote: 'string?',
    abilities: 'Ability[]',
    commandAbilities: 'Ability[]',
    magicBlurb: 'string?',
    magicAbilities: 'Ability[]',
    artefactGroupTitle: 'string?',
    artefactBlurb: 'string?',
    artefacts: 'Ability[]',
    commandTraitBlurb: 'string?',
    commandTraits: 'Ability[]',
    points: 'int',
    notes: 'string?',
    legacyID: 'string?',
    requiredProducts: 'string[]',
    lastUpdated: 'double'
  }
}

exports.Battleplan = {
  name: 'Battleplan',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    blurb: 'string',
    imageUrl: 'string',
    ruleset: 'string',
    sections: 'Rule[]'
  }
}

exports.CommandTraitGroup = {
  name: 'CommandTraitGroup',
  primaryKey: 'id',
  properties: {
    id: 'string',
    groupTitle: 'string',
    keywords: 'CompoundKeyword[]',
    commandTraits: 'string[]'
  }
}

exports.CompoundKeyword = {
  name: 'CompoundKeyword',
  primaryKey: 'id',
  properties: {
    id: 'string',
    keywords: 'string[]'
  }
}

exports.DamageColumn = {
  name: 'DamageColumn',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    values: 'DamagePair[]'
  }
}

exports.DamagePair = {
  name: 'DamagePair',
  primaryKey: 'id',
  properties: {
    id: 'string',
    wounds: 'string',
    value: 'string'
  }
}

exports.Division = {
  name: 'Division',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    requiredArtefact: 'string?',
    requiredArtefactKeyword: 'string?',
    requiredCommandTrait: 'string?',
    requiredCommandTraitKeyword: 'string?'
  }
}

exports.EndlessSpell = {
  name: 'EndlessSpell',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    about: 'string?',
    imageUrl: 'string',
    specialRules: 'Rule[]',
    abilities: 'Ability[]',
    commandAbilities: 'Ability[]',
    magicAbilities: 'Ability[]',
    blurb: 'string',
    keywords: 'string[]',
    category: 'string',
    unitSizeMin: 'int',
    unitSizeMax: 'int',
    points: 'int',
    notes: 'string?',
    lastUpdated: 'double'
  }
}

exports.ExceptionalTraitGroup = {
  name: 'ExceptionalTraitGroup',
  primaryKey: 'id',
  properties: {
    id: 'string',
    groupTitle: 'string',
    keywords: 'CompoundKeyword[]',
    traits: 'string[]'
  }
}

exports.KharadronCode = {
  name: 'KharadronCode',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    type: 'string'
  }
}

exports.Mercenary = {
  name: 'Mercenary',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    exclusionKeywords: 'CompoundKeyword[]',
    organisation: 'BattalionOrganisation[]'
  }
}

exports.RealmAllegiance = {
  name: 'RealmAllegiance',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    allies: 'CompoundKeyword[]',
    keywords: 'string[]',
    exclusionKeywords: 'string[]',
    grandAlliance: 'string?',
    commandTraitGroups: 'CommandTraitGroup[]',
    artefactGroups: 'ArtefactGroup[]',
    divisionName: 'string?',
    divisions: 'Division[]',
    skyports: 'Skyport[]',
    spellGroups: 'ExceptionalTraitGroup[]',
    prayerGroups: 'ExceptionalTraitGroup[]',
    generalSpecificTraitGroups: 'ExceptionalTraitGroup[]',
    mountTraitGroups: 'ExceptionalTraitGroup[]'
  }
}

exports.RealmOfBattle = {
  name: 'RealmOfBattle',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    realmName: 'string',
    magic: 'Ability',
    commands: 'Ability[]',
    features: 'RealmscapeFeature[]',
    artefactGroups: 'ArtefactGroup[]'
  }
}

exports.RealmscapeFeature = {
  name: 'RealmscapeFeature',
  primaryKey: 'id',
  properties: {
    id: 'string',
    roll: 'int',
    feature: 'Ability'
  }
}

exports.Rule = {
  name: 'Rule',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    blurb: 'string'
  }
}

exports.SceneryWarscroll = {
  name: 'SceneryWarscroll',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    about: 'string?',
    imageUrl: 'string',
    blurb: 'string',
    sceneryRules: 'Ability[]',
    keywords: 'string[]',
    productURL: 'string?',
    lastUpdated: 'double',
    unitSizeMin: 'int',
    unitSizeMax: 'int',
    points: 'int',
    notes: 'string?'
  }
}

exports.Skyport = {
  name: 'Skyport',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    artefact: 'string?',
    commandTrait: 'string?',
    keyword: 'string?',
    artycle: 'KharadronCode',
    amendment: 'KharadronCode',
    footnote: 'KharadronCode'
  }
}

exports.UnitWarscroll = {
  name: 'UnitWarscroll',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    subName: 'string?',
    about: 'string?',
    imageUrl: 'string',
    move: 'string',
    bravery: 'string',
    wounds: 'string',
    save: 'string',
    specialRules: 'Rule[]',
    upgrades: 'Rule[]',
    abilities: 'Ability[]',
    minionAbilities: 'Ability[]',
    commandAbilities: 'Ability[]',
    magicBlurb: 'string?',
    magicAbilities: 'Ability[]',
    weapons: 'UnitWeapon[]',
    blurb: 'string',
    keywords: 'string[]',
    hiddenKeywords: 'string[]',
    grandAlliance: 'string',
    factions: 'string[]',
    unitSizeMin: 'int',
    unitSizeMax: 'int',
    points: 'int',
    pointsMax: 'int',
    battlefieldRoles: 'string[]',
    additionalNotes: 'string?',
    overriddenRoles: 'string[]',
    overrideAllegiance: 'string?',
    overrideGeneralKeywords: 'CompoundKeyword[]',
    nonGeneralCommonOverrideKeyword: 'string?',
    maxCount: 'int',
    maxAppliesToKeyword: 'string?',
    requiredIncludedKeyword: 'string?',
    legacyID: 'string?',
    productURL: 'string?',
    markOfChaos: 'bool',
    legionOfNagash: 'bool',
    damageTable: 'DamageColumn[]',
    warMachine: 'WarMachine',
    lastUpdated: 'double'
  }
}

exports.UnitWeapon = {
  name: 'UnitWeapon',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    missile: 'bool',
    range: 'string',
    attacks: 'string',
    hit: 'string',
    wound: 'string',
    rend: 'string',
    damage: 'string',
    upgrade: 'bool'
  }
}

exports.WarMachine = {
  name: 'WarMachine',
  primaryKey: 'id',
  properties: {
    id: 'string',
    move: 'string',
    bravery: 'string',
    wounds: 'string',
    save: 'string',
    weapons: 'UnitWeapon[]',
    crewTable: 'DamageColumn[]',
    keywords: 'string[]'
  }
}

