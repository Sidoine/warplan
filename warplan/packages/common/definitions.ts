// npx quicktype .\assets\dump.json -o temp.ts

export interface Dump {
    artefact_of_power_group_keywords_keyword: ArtefactOfPowerGroupKeywordsKeyword[];
    artefact_of_power_group: ArtefactOfPowerGroupElement[];
    artefact_of_power_keywords_keyword: ArtefactOfPowerKeywordsKeyword[];
    artefact_of_power: ArtefactOfPower[];
    battalion_ability: BattalionAbility[];
    battle_tactic_group: ArtefactOfPowerGroupElement[];
    battle_tactic: BattleTactic[];
    battle_trait_excludes_sub_factions_faction: BattleTraitExcludesSubFactionsFaction[];
    battle_trait_group: ArtefactOfPowerGroupElement[];
    battle_trait_subtrait: BattleTactic[];
    battle_trait: BattleTrait[];
    coalition_ally_option: CoalitionAllyOption[];
    command_trait_group_keywords_keyword: CommandTraitGroupKeywordsKeyword[];
    command_trait_group: ArtefactOfPowerGroupElement[];
    command_trait_keywords_keyword: CommandTraitKeywordsKeyword[];
    command_trait: BattleTactic[];
    conditional_role_battlefield_role: ConditionalRoleBattlefieldRole[];
    conditional_role_general_keywords_keyword: ConditionalRoleLKeywordsKeyword[];
    conditional_role_required_warscroll_keywords_keyword: ConditionalRoleLKeywordsKeyword[];
    conditional_role: ConditionalRole[];
    core_battalion_group: CoreBattalionGroupElement[];
    core_battalion: CoreBattalion[];
    description_subsection: DescriptionSubsection[];
    enhancement_bonus_excludes_keywords_keyword: EnhancementBonusEsKeywordsKeyword[];
    enhancement_bonus_gains_additive_spells_spell_lore: EnhancementBonusGainsAdditiveSpellsSpellLore[];
    enhancement_bonus_requires_keywords_keyword: EnhancementBonusEsKeywordsKeyword[];
    enhancement_bonus: EnhancementBonus[];
    faction_allies_faction: FactionAlliesFaction[];
    faction_incompatible_factions_faction: FactionIncompatibleFactionsFaction[];
    faction: Faction[];
    grand_strategy_army_must_contain_keywords_keyword: GrandStrategyKeywordsKeyword[];
    grand_strategy_general_must_have_factions_faction: GrandStrategyGeneralMustHaveFactionsFaction[];
    grand_strategy_group: CoreBattalionGroupElement[];
    grand_strategy_keywords_keyword: GrandStrategyKeywordsKeyword[];
    grand_strategy: GrandStrategy[];
    keyword: Keyword[];
    migrations: Migration[];
    mount_trait_group_keywords_keyword: MountTraitGroupKeywordsKeyword[];
    mount_trait_group: ArtefactOfPowerGroupElement[];
    mount_trait_keywords_keyword: MountTraitKeywordsKeyword[];
    mount_trait: BattleTactic[];
    prayer_group_required_keywords_keyword: PrayerGroupRequiredKeywordsKeyword[];
    prayer_group: ArtefactOfPowerGroupElement[];
    prayer: Prayer[];
    publication: Publication[];
    role_modifier: RoleModifier[];
    spell_lore_group_required_keywords_keyword: SpellLoreGroupRequiredKeywordsKeyword[];
    spell_lore_group: ArtefactOfPowerGroupElement[];
    spell_lore: SpellLore[];
    table_cell: TableCell[];
    table_row: TableRow[];
    triumph_group: ArtefactOfPowerGroupElement[];
    triumph: BattleTactic[];
    typeorm_metadata: any[];
    unique_enhancement_group_keywords_keyword: UniqueEnhancementGroupKeywordsKeyword[];
    unique_enhancement_group: CoreBattalionGroupElement[];
    unique_enhancement_keywords_keyword: UniqueEnhancementKeywordsKeyword[];
    unique_enhancement: UniqueEnhancement[];
    unit_type_excluded_battlefield_role: UnitTypeEdBattlefieldRole[];
    unit_type_excluded_keywords_keyword: UnitTypeEdKeywordsKeyword[];
    unit_type_required_battlefield_role: UnitTypeEdBattlefieldRole[];
    unit_type_required_keywords_keyword: UnitTypeEdKeywordsKeyword[];
    unit_type: UnitType[];
    version_info: VersionInfo[];
    warscroll_ability_sub_ability: WarscrollAbilitySubAbility[];
    warscroll_ability: UniqueEnhancement[];
    warscroll_battlefield_role: WarscrollBattlefieldRole[];
    warscroll_excludes_other_warscrolls_warscroll: WarscrollExcludesOtherWarscrollsWarscroll[];
    warscroll_factions_faction: WarscrollFaction[];
    warscroll_keywords_keyword: WarscrollKeywordsKeyword[];
    warscroll_mark_of_chaos_options_faction: WarscrollFaction[];
    warscroll_mark_of_chaos_required_faction_faction: WarscrollFaction[];
    warscroll_option_gains_keywords_keyword: WarscrollOptionGainsKeywordsKeyword[];
    warscroll_option_group: WarscrollOptionGroup[];
    warscroll_option_requires_options_warscroll_option: WarscrollOptionRequiresOptionsWarscrollOption[];
    warscroll_option: WarscrollOption[];
    warscroll_requires_other_warscrolls_warscroll: WarscrollRequiresOtherWarscrollsWarscroll[];
    warscroll_requires_sub_factions_faction: WarscrollFaction[];
    warscroll_table: WarscrollTable[];
    warscroll_warmaster_factions_faction: WarscrollFaction[];
    warscroll: Warscroll[];
    weapon: Weapon[];
}

export interface ArtefactOfPower {
    id: string;
    name: string;
    lore: string;
    rules: string;
    requiresMeleeWeapon: boolean;
    requiresMissileWeapon: boolean;
    givesWizard: boolean;
    artefactOfPowerGroupId: string;
}

export interface ArtefactOfPowerGroupElement {
    id: string;
    name: string;
    restrictions?: string;
    publicationId: string;
    factionId: null | string;
    isHidden?: boolean;
    allowUniqueUnits?: boolean;
}

export interface ArtefactOfPowerGroupKeywordsKeyword {
    artefactOfPowerGroupId: string;
    keywordId: string;
}

export interface ArtefactOfPowerKeywordsKeyword {
    artefactOfPowerId: string;
    keywordId: string;
}

export interface BattalionAbility {
    id: string;
    header: string;
    rules: string;
    grantsExtraEnhancement: boolean;
    coreBattalionId: string;
    mutuallyExclusive: boolean;
}

export interface BattleTactic {
    id: string;
    name: string;
    lore: null | string;
    rules: string;
    battleTacticGroupId?: string;
    battleTraitId?: string;
    commandTraitGroupId?: string;
    mountTraitGroupId?: string;
    triumphGroupId?: string;
}

export interface BattleTrait {
    id: string;
    name: string;
    lore: string;
    rules: string;
    additionalArtefacts: number;
    battleTraitGroupId: string;
}

export interface BattleTraitExcludesSubFactionsFaction {
    battleTraitId: string;
    factionId: string;
}

export interface CoalitionAllyOption {
    id: string;
    xInFourLimit: number;
    factionId: string;
    requiredFactionId: string;
    excludedFactionId: null | string;
    requiredMarkOfChaosId: null;
}

export interface CommandTraitGroupKeywordsKeyword {
    commandTraitGroupId: string;
    keywordId: string;
}

export interface CommandTraitKeywordsKeyword {
    commandTraitId: string;
    keywordId: string;
}

export interface ConditionalRole {
    id: string;
    enforced: boolean;
    rosterFactionId: null | string;
    rosterTypeId: null | string;
    rosterSubfactionId: null | string;
    generalFactionId: null | string;
    allUnitsFactionId: null | string;
    warscrollId: string;
    requiresMatchingGeneralMarkOfChaos: boolean;
}

export interface ConditionalRoleBattlefieldRole {
    role: Role;
    conditionalRoleId: string;
}

export enum Role {
    Artillery = "artillery",
    Battleline = "battleline",
    Behemoth = "behemoth",
    EndlessSpell = "endlessSpell",
    Invocation = "invocation",
    Leader = "leader",
    Other = "other",
    Terrain = "terrain",
}

export interface ConditionalRoleLKeywordsKeyword {
    conditionalRoleId: string;
    keywordId: string;
}

export interface CoreBattalion {
    id: string;
    name: string;
    coreBattalionGroupId: string;
    isUnique: boolean;
    linkedBattlepacks: string[] | null;
}

export interface CoreBattalionGroupElement {
    id: string;
    name: string;
    rules: string;
    requiresBattlepack?: null | string;
    factionId: null | string;
    publicationId: string;
    restrictions?: string;
    domain?: string;
}

export interface DescriptionSubsection {
    id: string;
    header: string;
    rules: string;
    warscrollId: string;
}

export interface EnhancementBonus {
    id: string;
    bonusType: string;
    modifier: number;
    overridesLimit: boolean;
    requiresBearerItem: boolean;
    scope: Scope;
    artefactId: null | string;
    commandTraitId: null | string;
    battleTraitId: null | string;
    battleTraitSubtraitId: null | string;
    bonusArtefactGroupId: null | string;
    bonusSpellGroupId: null | string;
    bonusPrayerGroupId: null | string;
    bonusUniqueEnhancementGroupId: null | string;
    gainsKeywordId: null | string;
    bonusBattleTraitId: null | string;
    perArtefactOfPower: boolean;
    bonusMountTraitGroupId: null | string;
    warscrollOptionId: null | string;
}

export enum Scope {
    Army = "army",
    Bearer = "bearer",
    Unit = "unit",
}

export interface EnhancementBonusEsKeywordsKeyword {
    enhancementBonusId: string;
    keywordId: string;
}

export interface EnhancementBonusGainsAdditiveSpellsSpellLore {
    enhancementBonusId: string;
    spellLoreId: string;
}

export interface Faction {
    id: string;
    name: string;
    keywordCategory: KeywordCategory;
    restrictive: boolean;
    parentId: null | string;
    requiredGeneralKeywordId: null | string;
    confersToCoalitionAllies: boolean;
    grandAlliance: GrandAlliance | null;
    summary: null | string;
    lore: null | string;
}

export enum GrandAlliance {
    Chaos = "chaos",
    Death = "death",
    Destruction = "destruction",
    Expansion = "expansion",
    Order = "order",
}

export enum KeywordCategory {
    ArmyType = "armyType",
    Generic = "generic",
    RosterLevel = "rosterLevel",
    Subfaction = "subfaction",
}

export interface FactionAlliesFaction {
    factionId: string;
    alliedFactionId: string;
}

export interface FactionIncompatibleFactionsFaction {
    factionId: string;
    incompatibleFactionId: string;
}

export interface GrandStrategy {
    id: string;
    name: string;
    rules: string;
    grandStrategyGroupId: string;
    factionId: null | string;
}

export interface GrandStrategyKeywordsKeyword {
    grandStrategyId: string;
    keywordId: string;
}

export interface GrandStrategyGeneralMustHaveFactionsFaction {
    grandStrategyId: string;
    factionId: string;
}

export interface Keyword {
    id: string;
    name: string;
}

export interface Migration {
    id: number;
    timestamp: string;
    name: string;
}

export interface MountTraitGroupKeywordsKeyword {
    mountTraitGroupId: string;
    keywordId: string;
}

export interface MountTraitKeywordsKeyword {
    mountTraitId: string;
    keywordId: string;
}

export interface Prayer {
    id: string;
    name: string;
    lore: string;
    rules: string;
    prayerGroupId: string;
    requiredMarkOfChaosId: null | string;
}

export interface PrayerGroupRequiredKeywordsKeyword {
    prayerGroupId: string;
    keywordId: string;
}

export interface Publication {
    id: string;
    name: string;
    edition: number;
    productId: null | string;
    category: GrandAlliance | null;
}

export interface RoleModifier {
    id: string;
    role: Role;
    limitModifier: number;
    requiredAllUnitsKeywordId: null | string;
    battleTraitId: string;
}

export interface SpellLore {
    id: string;
    name: string;
    lore: string;
    rules: string;
    spellLoreGroupId: string;
    additive: boolean;
}

export interface SpellLoreGroupRequiredKeywordsKeyword {
    spellLoreGroupId: string;
    keywordId: string;
}

export interface TableCell {
    id: string;
    order: number;
    text: string;
    rowId: string;
}

export interface TableRow {
    id: string;
    order: number;
    tableId: string;
}

export interface UniqueEnhancement {
    id: string;
    name: string;
    lore: null | string;
    rules: string;
    uniqueEnhancementGroupId?: string;
    warscrollId: null | string;
}

export interface UniqueEnhancementGroupKeywordsKeyword {
    uniqueEnhancementGroupId: string;
    keywordId: string;
}

export interface UniqueEnhancementKeywordsKeyword {
    uniqueEnhancementId: string;
    keywordId: string;
}

export interface UnitType {
    id: string;
    name: string;
    restrictions: string;
    imageName: string;
    min: number;
    max: number;
    eitherOr: boolean;
    woundsLimit: number | null;
    coreBattalionId: string;
    order: number;
}

export interface UnitTypeEdBattlefieldRole {
    role: Role;
    unitTypeId: string;
}

export interface UnitTypeEdKeywordsKeyword {
    unitTypeId: string;
    keywordId: string;
}

export interface VersionInfo {
    id: string;
    dataVersion: number;
}

export interface Warscroll {
    id: string;
    name: string;
    subname: null | string;
    lore: string;
    points: number;
    unique: boolean;
    single: boolean;
    legends: boolean;
    unitSize: number | null;
    move: null | string;
    save: null | string;
    bravery: number | null;
    wounds: number | null;
    basicDescription: null | string;
    notes: null | string;
    referenceKeywords: string;
    ineligibleForGeneral: boolean;
    imageUrl: null | string;
    publicationId: string;
    markOfChaosRequired: boolean;
    disablesMercenaries: boolean;
    limitedWarscrollCount: number | null;
    limitedByWarscrollId: null | string;
    isHidden: boolean;
}

export interface WarscrollAbilitySubAbility {
    id: string;
    name: string;
    lore: null | string;
    rules: string;
    warscrollAbilityId: string;
    displayOrder: number;
}

export interface WarscrollBattlefieldRole {
    role: Role;
    warscrollId: string;
}

export interface WarscrollExcludesOtherWarscrollsWarscroll {
    warscrollId: string;
    excludedWarscrollId: string;
}

export interface WarscrollFaction {
    warscrollId: string;
    factionId: string;
}

export interface WarscrollKeywordsKeyword {
    warscrollId: string;
    keywordId: string;
}

export interface WarscrollOption {
    id: string;
    name: string;
    category: Category;
    pointsModifier: number | null;
    overridesRole: null;
    warscrollOptionGroupId: string;
    defaultLoadout: boolean;
    ineligibleForReinforcement: boolean;
    requiredArmyTypeFactionId: null | string;
}

export enum Category {
    CommandModel = "commandModel",
    UnitOption = "unitOption",
    Wargear = "wargear",
}

export interface WarscrollOptionGainsKeywordsKeyword {
    warscrollOptionId: string;
    keywordId: string;
}

export interface WarscrollOptionGroup {
    id: string;
    enforced: boolean;
    limit: number;
    limitReinforcedOnce: number | null;
    limitReinforcedTwice: number | null;
    warscrollId: string;
}

export interface WarscrollOptionRequiresOptionsWarscrollOption {
    warscrollOptionId: string;
    requiredWarscrollOptionId: string;
}

export interface WarscrollRequiresOtherWarscrollsWarscroll {
    warscrollId: string;
    requiredWarscrollId: string;
}

export interface WarscrollTable {
    id: string;
    name: Name;
    warscrollId: string;
}

export enum Name {
    Damage = "Damage",
    State = "State",
}

export interface Weapon {
    id: string;
    name: string;
    type: Type;
    range: string;
    attacks: string;
    hit: string;
    wound: string;
    rend: string;
    damage: string;
    warscrollId: string;
}

export enum Type {
    Melee = "melee",
    Missile = "missile",
}
