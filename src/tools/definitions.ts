export interface Ability {
    id: string;
    name: string;
    blurb: string;
    lore: string | null;
}

export interface ArtefactGroup {
    id: string;
    groupTitle: string;
    keywords: CompoundKeyword[];
    artefacts: string[];
}

export interface BattalionOrganisation {
    id: string;
    min: number;
    max: number;
    notes: string | null;
    required: boolean;
    compoundKeywords: CompoundKeyword[];
}

export interface BattalionWarscroll {
    id: string;
    name: string;
    faction: string;
    allegiance: string[];
    grandAlliance: string;
    about: string | null;
    imageUrl: string;
    organisation: BattalionOrganisation[];
    organisationFootnote: string | null;
    abilities: Ability[];
    commandAbilities: Ability[];
    magicBlurb: string | null;
    magicAbilities: Ability[];
    artefactGroupTitle: string | null;
    artefactBlurb: string | null;
    artefacts: Ability[];
    commandTraitBlurb: string | null;
    commandTraits: Ability[];
    points: number;
    notes: string | null;
    legacyID: string | null;
    requiredProducts: string[];
    lastUpdated: number;
}

export interface Battleplan {
    id: string;
    name: string;
    blurb: string;
    imageUrl: string;
    ruleset: string;
    sections: Rule[];
}

export interface CommandTraitGroup {
    id: string;
    groupTitle: string;
    keywords: CompoundKeyword[];
    commandTraits: string[];
}

export interface CompoundKeyword {
    id: string;
    keywords: string[];
}

export interface DamageColumn {
    id: string;
    name: string;
    values: DamagePair[];
}

export interface DamagePair {
    id: string;
    wounds: string;
    value: string;
}

export interface Division {
    id: string;
    name: string;
    requiredArtefact: string | null;
    requiredArtefactKeyword: string | null;
    requiredCommandTrait: string | null;
    requiredCommandTraitKeyword: string | null;
    addedAllies: CompoundKeyword[];
}

export interface EndlessSpell {
    id: string;
    name: string;
    about: string | null;
    imageUrl: string;
    specialRules: Rule[];
    abilities: Ability[];
    commandAbilities: Ability[];
    magicAbilities: Ability[];
    blurb: string;
    keywords: string[];
    category: string;
    unitSizeMin: number;
    unitSizeMax: number;
    points: number;
    notes: string | null;
    lastUpdated: number;
}

export interface ExceptionalTraitGroup {
    id: string;
    groupTitle: string;
    keywords: CompoundKeyword[];
    traits: string[];
}

export interface KharadronCode {
    id: string;
    name: string;
    type: string;
}

export interface RealmAllegiance {
    id: string;
    name: string;
    allies: CompoundKeyword[];
    keywords: string[];
    exclusionKeywords: string[];
    grandAlliance: string | null;
    commandTraitGroups: CommandTraitGroup[];
    artefactGroups: ArtefactGroup[];
    divisionName: string | null;
    divisions: Division[];
    skyports: Skyport[];
    spellGroups: ExceptionalTraitGroup[];
    prayerGroups: ExceptionalTraitGroup[];
    generalSpecificTraitGroups: ExceptionalTraitGroup[];
    mountTraitGroups: ExceptionalTraitGroup[];
}

export interface RealmOfBattle {
    id: string;
    name: string;
    realmName: string;
    magic: Ability;
    commands: Ability[];
    features: RealmscapeFeature[];
    artefactGroups: ArtefactGroup[];
}

export interface RealmscapeFeature {
    id: string;
    roll: number;
    feature: Ability;
}

export interface Rule {
    id: string;
    name: string;
    blurb: string;
}

export interface Skyport {
    id: string;
    name: string;
    artefact: string | null;
    commandTrait: string | null;
    keyword: string | null;
    artycle: KharadronCode;
    amendment: KharadronCode;
    footnote: KharadronCode;
}

export interface UnitWarscroll {
    id: string;
    name: string;
    subName: string | null;
    about: string | null;
    imageUrl: string;
    move: string;
    bravery: string;
    wounds: string;
    save: string;
    specialRules: Rule[];
    upgrades: Rule[];
    abilities: Ability[];
    minionAbilities: Ability[];
    commandAbilities: Ability[];
    magicBlurb: string | null;
    magicAbilities: Ability[];
    weapons: UnitWeapon[];
    blurb: string;
    keywords: string[];
    hiddenKeywords: string[];
    grandAlliance: string;
    factions: string[];
    unitSizeMin: number;
    unitSizeMax: number;
    points: number;
    pointsMax: number;
    battlefieldRoles: string[];
    additionalNotes: string | null;
    overriddenRoles: string[];
    overrideAllegiance: string | null;
    overrideGeneralKeywords: CompoundKeyword[];
    nonGeneralCommonOverrideKeyword: string | null;
    maxCount: number;
    maxAppliesToKeyword: string | null;
    requiredIncludedKeyword: string | null;
    legacyID: string | null;
    productURL: string | null;
    markOfChaos: boolean;
    legionOfNagash: boolean;
    damageTable: DamageColumn[];
    warMachine: WarMachine;
    lastUpdated: number;
}

export interface UnitWeapon {
    id: string;
    name: string;
    missile: boolean;
    range: string;
    attacks: string;
    hit: string;
    wound: string;
    rend: string;
    damage: string;
    upgrade: boolean;
}

export interface WarMachine {
    id: string;
    move: string;
    bravery: string;
    wounds: string;
    save: string;
    weapons: UnitWeapon[];
    crewTable: DamageColumn[];
    keywords: string[];
}
