export const Ability = {
  name: 'Ability',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    blurb: 'string',
    lore: 'string?'
  }
}

export const ArtefactGroup = {
  name: 'ArtefactGroup',
  primaryKey: 'id',
  properties: {
    id: 'string',
    groupTitle: 'string',
    keyword: 'string?',
    artefacts: 'string[]'
  }
}

export const BattalionOrganisation = {
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

export const BattalionWarscroll = {
  name: 'BattalionWarscroll',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    allegiance: 'string',
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

export const Battleplan = {
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

export const CommandTraitGroup = {
  name: 'CommandTraitGroup',
  primaryKey: 'id',
  properties: {
    id: 'string',
    groupTitle: 'string',
    keyword: 'string?',
    commandTraits: 'string[]'
  }
}

export const CompoundKeyword = {
  name: 'CompoundKeyword',
  primaryKey: 'id',
  properties: {
    id: 'string',
    keywords: 'string[]'
  }
}

export const DamageColumn = {
  name: 'DamageColumn',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    values: 'DamagePair[]'
  }
}

export const DamagePair = {
  name: 'DamagePair',
  primaryKey: 'id',
  properties: {
    id: 'string',
    wounds: 'string',
    value: 'string'
  }
}

export const Division = {
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

export const EndlessSpell = {
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
    unitSizeMin: 'int',
    unitSizeMax: 'int',
    points: 'int',
    notes: 'string?',
    lastUpdated: 'double'
  }
}

export const ExceptionalTraitGroup = {
  name: 'ExceptionalTraitGroup',
  primaryKey: 'id',
  properties: {
    id: 'string',
    groupTitle: 'string',
    keywords: 'CompoundKeyword[]',
    traits: 'string[]'
  }
}

export const KharadronCode = {
  name: 'KharadronCode',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    type: 'string'
  }
}

export const RealmAllegiance = {
  name: 'RealmAllegiance',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    allies: 'CompoundKeyword[]',
    keyword: 'string',
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

export const RealmOfBattle = {
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

export const RealmscapeFeature = {
  name: 'RealmscapeFeature',
  primaryKey: 'id',
  properties: {
    id: 'string',
    roll: 'int',
    feature: 'Ability'
  }
}

export const Rule = {
  name: 'Rule',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    blurb: 'string'
  }
}

export const Skyport = {
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

export const UnitWarscroll = {
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
    commandAbilities: 'Ability[]',
    magicBlurb: 'string?',
    magicAbilities: 'Ability[]',
    weapons: 'UnitWeapon[]',
    blurb: 'string',
    keywords: 'string[]',
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
    overrideGeneralKeywords: 'string[]',
    maxCount: 'int',
    maxAppliesToKeyword: 'string?',
    requiredIncludedKeyword: 'string?',
    legacyID: 'string?',
    productURL: 'string?',
    markOfChaos: 'bool',
    legionOfNagash: 'bool',
    damageTable: 'DamageColumn[]',
    lastUpdated: 'double'
  }
}

export const UnitWeapon = {
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

