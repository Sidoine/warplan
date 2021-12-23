import { AbilityGroupDomain, KeywordCategory, Role } from "./definitions";

export const enum Material {
    Metal,
    Resin,
    Plastic,
    Mixed,
}

export interface Model {
    name: string;
    id: string;
    publicationYear?: number;
    material?: Material;
}

export interface BattalionGroup {
    id: string;
    name: string;
    battalions: Battalion[];
    description: string;
    restrictions?: string;
}

export interface Faction {
    id: string;
    name: string;
    allied?: string[];
    category: KeywordCategory;
    parent?: Faction;
    children: Faction[];
    icon?: string;
    abilityGroups?: AbilityGroup[];
    battalionGroups?: BattalionGroup[];
    tokenName?: string;
}

export const enum AbilityCategory {
    None,
    Spell,
    SpecialRule,
    Command,
    Prayer,
    Artefact,
    Mount,
    CommandTrait,
    Army,
    Unit,
    MeleeAttack,
    RangedAttack,
    BattleTrait,
    Champion,
    Triumph,
    GrandStrategy,
    UniqueEnhancement,
}

export interface AttackWithCount {
    attack: Attack;
    count: number;
}

export interface ItemWithAbilities {
    abilities?: Ability[];
    id: string;
    name: string;
    attacks?: Attack[];
    allegiance?: Faction | null;
}

export const abilityCategoryName = new Map<AbilityCategory, string>([
    [AbilityCategory.Spell, "Spell"],
    [AbilityCategory.Prayer, "Prayer"],
    [AbilityCategory.Artefact, "Artefact of Power"],
    [AbilityCategory.Mount, "Mount Trait"],
    [AbilityCategory.Triumph, "Triumph"],
    [AbilityCategory.CommandTrait, "Command Trait"],
    [AbilityCategory.GrandStrategy, "Grand Strategy"],
    [AbilityCategory.UniqueEnhancement, "Unique Enhancement"],
]);

export const enum Phase {
    Hero = 1,
    Movement = 2,
    Shooting = 4,
    Charge = 8,
    Combat = 16,
    Battleshock = 32,
    AnyInGame = 63,
    Setup = 64,
    ArmyList = 128,
    Any = 255,
}

export interface DefenseAura extends BaseAura {
    type: AuraType.Defense;
    phase?: Phase.Combat | Phase.Shooting | Phase.Hero;
    rerollSavesOn1?: boolean;
    bonusWoundRoll?: Value;
    mortalWoundsOnSucessfulSaveReroll?: Value; // In a 3" radius
    mortalWoundsOnWound?: Value;
    rerollFailedSaves?: boolean;
    bonusSave?: Value;
    negateWoundsOrMortalWoundsOn3?: boolean;
    negateWoundsOrMortalWoundsOn5?: boolean;
    negateWoundsOrMortalWoundsOn6?: boolean;
    negateWoundsOn5?: boolean;
    negateMortalWoundsOn5?: boolean;
    changeSaveRoll?: boolean;
    ethereal?: boolean;
    ignoreRendOfMinus1?: boolean;
    healOnSave7?: number;
    bonusHitRoll?: number;
    malusHitRoll?: Value;
    rerollHitOn1?: boolean;
    rerollHitOn6?: boolean;
    malusEnemyPileIn?: Value;
    ignoreSpellOn4?: boolean;
    rerollHits?: boolean;
    garrisoned?: boolean;
    guardianOn2?: boolean;
    visibleToCasterUnit?: Value;
}

export interface BattleshockAura extends BaseAura {
    type: AuraType.Battleshock;
    bonusBravery?: Value;
    malusBravery?: Value;
    immune?: boolean;
    rerollFails?: boolean;
    emotionalTransference?: boolean;
}

export interface MovementAura extends BaseAura {
    type: AuraType.Movement;
    rideTheWindDistance?: Value;
    fly?: boolean;
    doubleMove?: boolean;
    allowChargeAfterRunOrRetreat?: boolean;
    changeRunRoll?: boolean;
    windrider?: boolean;
    bonusMove?: Value;
    cannotRun?: boolean;
}

export interface ChargeAura extends BaseAura {
    type: AuraType.Charge;
    rerollCharge?: boolean;
    changeChargeRoll?: boolean;
    chargeDistance?: Value;
    chargeDices?: Value;
    bonus?: Value;
    canChargeAfterRetreat?: boolean;
    cannotCharge?: boolean;
}

export interface TargetCondition {
    minWounds?: number;
    maxWounds?: number;
    minModels?: Value;
    keyword?: string;
    noKeyword?: string;
    anyKeyword?: string[];
    allKeywords?: string[];
    hasCharged?: boolean;
    hasNotCharged?: boolean;
    hasMoved?: boolean;
    hasNotMoved?: boolean;
    inCover?: boolean;
    weaponId?: string;
    meleeWeapon?: boolean;
    rangedWeapon?: boolean;
    friendly?: boolean;
    enemy?: boolean;
    inRangeOf?: { range: Value } & TargetCondition;
    abilityId?: string;
    hasGarrison?: boolean;
    visible?: boolean;
    hasNotMount?: boolean;
    needBattleshockTest?: boolean;
    notInRangeOf?: { range: Value } & TargetCondition;
    hasArtefact?: boolean;
    slain?: boolean;
    isInGarrison?: boolean;
    setup?: boolean;
}

export interface AttackAuraValues {
    bonusHitRoll?: Value;
    malusHitRoll?: Value;
    bonusWoundRoll?: Value;
    bonusAttacks?: Value;
    bonusDamage?: Value;
    retreatAfterAttack?: Value;
    numberOfHitsOnUnmodified6?: Value;
    numberOfHitsOnHit?: Value;
    mortalWoundsOnHitUnmodified6?: Value;
    mortalWoundsOnHitUnmodified5?: Value;
    bonusMortalWoundsOnHitUnmodified6?: Value;
    mortalWounds?: Value;
    damageOnWoundUnmodified6?: Value;
    mortalWoundsOnHit?: Value;
    bonusDamageOnHitUnmodified6?: Value;
    bonusDamageOnWoundUnmodified6?: Value;
    bonusRend?: Value;
    rerollHitsOn1?: Value;
    rerollWoundsOn1?: Value;
    bonusRendOnWound6OrMore?: Value;
    rangeBonus?: Value;
    rerollFailedHits?: Value;
    bonusPileInDistance?: Value;
    malusPileInDistance?: Value;
    pileInDistance?: Value;
}

export interface AttackAuraBooleans {
    rerollFailedWounds?: boolean;
    changeHitRoll?: boolean;
    changeWoundRoll?: boolean;
    shootAfterRun?: boolean;
    noPileIn?: boolean;
    changeHitWoundSaveOrDamageRoll?: boolean;
    rerollHits?: boolean;
    pileInEverywhere?: boolean;
    pileInWithFly?: boolean;
}

export interface AttackAuraAbilityEffects {
    effectsOnHitUnmodified6?: AbilityEffect[];
}

export const enum AuraType {
    Attack,
    Defense,
    Spell,
    Prayer,
    Command,
    Movement,
    Charge,
    Value,
    Special,
    Battleshock,
}

interface BaseAura {
    // Aura duration
    duration?: EffectDuration;
    /** The aura is effective only after this delay */
    delay?: EffectDuration;
    targetCondition?: TargetCondition;
    condition?: TargetCondition;
}

export interface AttackAura
    extends AttackAuraValues,
        AttackAuraAbilityEffects,
        AttackAuraBooleans,
        BaseAura {
    phase?: Phase.Combat | Phase.Shooting;
    attackId?: string;
    type: AuraType.Attack;
}

export const enum SubPhase {
    Before,
    WhileBefore,
    While,
    WhileAfter,
    After,
}

export interface SpellAura extends BaseAura {
    type: AuraType.Spell;
    bonusUnbind?: Value;
    bonusToUnbind?: Value;
    autoUnbinds?: number;
    noCast?: boolean;
    rerollFailedCast?: boolean;
    rerollCast?: boolean;
    rerollDispell?: boolean;
    rerollUnbind?: boolean;
    autoCast?: Value;
    malusToAll?: Value;
    extraCast?: Value;
}

export interface PrayerAura extends BaseAura {
    type: AuraType.Prayer;
    bonusToChant?: Value;
}

export interface ValueAura extends BaseAura {
    type: AuraType.Value;
    ignoreWounds?: boolean;
}

export const enum TargetType {
    Unit = 0,
    Model = 1,
    Weapon = 2,
    Mount = 4,
    Enemy = 8,
    Friend = 16,
    Ability = 32,
    Terrain = 64,
    EnemyArmy = 128,
    Zone = 256,
    EnemyModel = 9,
    NotUnit = Model | Weapon | Mount | Ability | EnemyArmy,
}

export const enum EffectDuration {
    Phase,
    Turn,
    Round,
}

export const enum Turn {
    Your,
    Opponent,
    None,
}

export interface SpecialAura extends BaseAura {
    type: AuraType.Special;
    absorbDespair?: boolean;
    darknessOfSoul?: boolean;
    pickTwoUnitsInCombat?: boolean;
    blockVisibility?: boolean;
    tectonicForce?: boolean;
    loneAgent?: boolean;
}

export interface CommandAura extends BaseAura {
    type: AuraType.Command;
    free?: boolean;
    doublePrice?: boolean;
    copyCommand?: boolean;
}

export interface ImmediateEffect {
    type?: undefined;
    mortalWounds?: Value;
    mortalWoundsPerWound?: Value;
    heal?: Value;
    setUpAwayFromEnemy?: Value; // The distance to the enemy
    mortalWoundsPerModel?: Value;
    mortalWoundsPerChargeRoll?: Value;
    allowInclusion?: { maxCount?: number; each?: number };
    gainCommandPoints?: Value;
    setup?: boolean;
    pileInMove?: Value;
    rerollSpellcast?: boolean;
    rerollDispell?: boolean;
    rerollUnbind?: boolean;
    bonusSpellcast?: Value;
    normalMove?: Value;
    casts?: Value;
    unbinds?: Value;
}

export type Aura =
    | AttackAura
    | SpellAura
    | PrayerAura
    | ValueAura
    | SpecialAura
    | CommandAura
    | DefenseAura
    | MovementAura
    | ChargeAura
    | BattleshockAura;

export interface AbilityEffect {
    name?: string;

    // Cast
    /** At which phase the ability is *used* to add the effect */
    phase?: Phase;
    subPhase?: SubPhase;
    side?: Turn;
    timesPerBattle?: number;
    timesPerTurn?: number;

    // Cast range
    /** The range to the target. If undefined, only the unit itself can be targeted */
    targetRange?: Value;
    targetsCount?: Value;
    /** If the effect targets multiple units, the range around the target.  */
    targetRadius?: Value;
    whollyWithin?: boolean;
    /** If a point of the battlefield is targeted, instead of an unit, the range to this
     * point.
     */
    effectRange?: number;

    // Conditions
    targetType: TargetType;
    targetArea?: boolean;
    targetCondition?: TargetCondition;
    condition?: TargetCondition;
    spellCastingValue?: number;
    tokensCost?: number;
    commandPoints?: number;

    // Aura
    auras?: Aura[];

    // Combination with other effects
    ignoreOtherEffects?: boolean;
    choice?: string;
    prayerValue?: number;
    /** In case of random effects, the dice value must be in this range  */
    randomEffectRange?: { min: number; max: number };

    noEffect?: boolean;
    immediate?: ImmediateEffect;
}

export interface Ability {
    id: string;
    name: string;
    flavor?: string;
    description?: string;
    category?: AbilityCategory;
    spellCastingValue?: Value;
    effects?: AbilityEffect[];
    randomEffectDices?: string;
    restrictions?: {
        keywords?: string[];
    };
}

export interface Attack {
    id: string;
    melee: boolean;
    name: string;
    range: Value;
    attacks?: Value;
    toHit?: Value;
    toWound?: Value;
    rend?: Value;
    damage?: Value;
    // Unique string to allow to choose between multiple available weapon during play
    choice?: string;
}

export interface WeaponOption {
    id: string;
    name: string;
    abilities?: Ability[];
    attacks?: Attack[];
}

export const enum ModelOptionCategory {
    Weapon,
    Champion,
}

export const enum UnitOptionCategory {
    Main,
}

export interface ModelOption extends ItemWithAbilities {
    id: string;
    name: string;
    abilities?: Ability[];
    attacks?: Attack[];

    // A model can only have one option of this category
    modelCategory?: ModelOptionCategory;

    // An unit can't select another option of this category
    unitCategory?: UnitOptionCategory;
    ratio?: { count: number; every: number };
    champion?: boolean;

    isOptionValid?: (
        unit: UnitWarscrollInterface,
        model: WarscrollModelInterface
    ) => boolean;
}

export type Value =
    | number
    | string
    | DamageColumn
    | undefined
    | RatioValue
    | SumValue
    | TargetConditionValue
    | TargetPropertyValue
    | ConditionValue
    | OrValue;

export function getValueRatio(value: Value, ratio?: number): Value {
    if (ratio !== undefined && value !== undefined) {
        if (typeof value === "number") {
            return value * ratio;
        } else {
            return { ratio, value, type: ValueType.RatioValue };
        }
    }
    return value;
}

export function getSumValues(value1: Value, value2: Value): Value {
    if (value1 === undefined) return value2;
    if (value2 === undefined) return value1;
    if (typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    }
    return { value1, value2, type: ValueType.SumValue };
}

export interface DamageTable {
    id: string;
    ranges: string[];
    columns: DamageColumn[];
}

export const enum ValueType {
    DamageColumn,
    SumValue,
    RatioValue,
    TargetCondition,
    Or,
    Condition,
    TargetProperty,
}

export interface DamageColumn {
    type?: ValueType.DamageColumn;
    name: string;
    values: Value[];
}

export interface SumValue {
    type: ValueType.SumValue;
    value1: Value;
    value2: Value;
}

export interface RatioValue {
    type: ValueType.RatioValue;
    value: Value;
    ratio: number;
}

export interface TargetConditionValue {
    type: ValueType.TargetCondition;
    value: Value;
    defaultValue?: Value;
    targetCondition: TargetCondition;
}

export interface TargetPropertyValue {
    type: ValueType.TargetProperty;
    numberOfModelsWithin?: number;
}

export interface ConditionValue {
    type: ValueType.Condition;
    value: Value;
    condition: TargetCondition;
    defaultValue?: Value;
}

export interface OrValue {
    type: ValueType.Or;
    left: Value;
    right: Value;
}

export function isRatioValue(v: Value): v is RatioValue {
    return typeof v === "object" && v.type === ValueType.RatioValue;
}

export function isSumValue(v: Value): v is SumValue {
    return typeof v === "object" && v.type === ValueType.SumValue;
}

export function isDamageColumn(v: Value): v is DamageColumn {
    return (
        typeof v === "object" &&
        (v.type === ValueType.DamageColumn || v.type === undefined)
    );
}

export function isConditionValue(v: Value): v is ConditionValue {
    return typeof v === "object" && v.type === ValueType.Condition;
}

export function isTargetConditionValue(v: Value): v is TargetConditionValue {
    return typeof v === "object" && v.type === ValueType.TargetCondition;
}

export function isOrValue(v: Value): v is OrValue {
    return typeof v === "object" && v.type === ValueType.Or;
}

export function isTargetPropertyValue(v: Value): v is TargetPropertyValue {
    return typeof v === "object" && v.type === ValueType.TargetProperty;
}

export function targetConditionValue(
    targetCondition: TargetCondition,
    value: Value,
    defaultValue?: Value
): TargetConditionValue {
    return {
        type: ValueType.TargetCondition,
        value,
        targetCondition,
        defaultValue,
    };
}

export function conditionValue(
    condition: TargetCondition,
    value: Value,
    defaultValue?: Value
): ConditionValue {
    return {
        type: ValueType.Condition,
        value,
        condition,
        defaultValue,
    };
}

export function targetPropertyValue(
    props: Omit<TargetPropertyValue, "type">
): TargetPropertyValue {
    return {
        type: ValueType.TargetProperty,
        ...props,
    };
}

export function orValue(left: Value, right: Value): OrValue {
    return {
        type: ValueType.Or,
        left,
        right,
    };
}

export interface UnitInfos {
    abilities?: Ability[];
    attacks?: Attack[];
    commandAbilities?: Ability[];
}

export interface UnitStatModel {
    options: ModelOption[];
    count: number;
}

export interface UnitStatModels {
    name: string;
    models: UnitStatModel[];
    choice?: string;
}
export interface GrandStrategy {
    id: string;
    name: string;
    rules: string;
    grandStrategyGroupId: string;
}

export interface UnitRole {
    role: Role;
    faction?: Faction;
    generalKeyword?: string;
    enforced?: boolean;
}

export interface Unit extends UnitInfos {
    id: string;
    name: string;
    subName?: string;
    model: Model;
    size: number;
    maxSize?: number;
    maxPoints?: number;
    points: number;
    factions: Faction[];
    subType?: string;
    warscroll?: string;
    move?: Value;
    save?: Value;
    wounds?: Value;
    bravery?: Value;
    keywords: string[];
    damageTable?: DamageTable;
    description: string;
    flavor?: string;
    magicDescription?: string;
    options?: ModelOption[];
    pictureUrl?: string;
    roles: UnitRole[];
    unique?: boolean;
    single?: boolean;

    optionStats?: UnitStatModels[];
}

export interface BoxedModel {
    /** Un élément par type de modèle possible (en conversion) */
    models: Model[];
    count: number;
}

export interface Box {
    id: string;
    units: BoxedModel[];
    price: number;
    name: string;
    url?: string;
}

export interface BattalionUnit {
    id: string;
    name: string;
    restrictions: string;
    imageName: string;
    min: number;
    max: number;
    eitherOr: boolean;
    woundsLimit: number | null;
    order: number;
    requiredRoles?: Role[];
    excludedRoles?: Role[];
    keywords?: string[];
}

export interface Battalion {
    id: string;
    name: string;
    onePerArmy: boolean;
    units: BattalionUnit[];
    abilities: BattalionAbility[];
    // Only for warscroll
    subName?: string;
}

export interface BattalionAbility extends Ability {
    grantsExtraEnhancement: boolean;
}

export interface WarscrollBattalionUnitInterface {
    id: string;
    name: string;
    canAddUnit(unit: UnitWarscrollInterface): boolean;
    battalion: WarscrollBattalionInterface;
}

export interface WarscrollBattalionInterface {
    id: string;
    definition: Battalion;
    unitTypes: WarscrollBattalionUnitInterface[];
}

export interface ItemWithExtraAbilities {
    abilityCategories: AbilityCategory[];
    availableAbilityGroups: AbilityGroup[];
    extraAbilities: Ability[];
    removeExtraAbility(ability: Ability): void;
    addExtraAbility(ability: Ability): void;
    replaceExtraAbility(oldAbility: Ability, newAbility: Ability): void;
    isAvailableExtraAbility(ability: Ability): boolean;
    getMaxNumberOfEnhancements(category: AbilityCategory): number;
    getNumberOfEnhancements(category: AbilityCategory): number;
}

export interface UnitWarscrollInterface
    extends ItemWithAbilities,
        ItemWithExtraAbilities {
    definition: Unit;
    isGeneral: boolean;
    isLeader: boolean;
    extraAbilities: Ability[];
    models: WarscrollModelInterface[];
    modelCount: number;
    keywords: string[];
    armyList: ArmyListInterface;
    readonly role: Role;
}

export const enum PointMode {
    MatchedPlay,
    OpenPlay,
}
export interface WarscrollModelInterface {
    id: number;
    options: ModelOption[];
    count: number;
}

export interface ArmyListInterface extends ItemWithExtraAbilities {
    battalions: WarscrollBattalionInterface[];
    general: UnitWarscrollInterface | undefined;
    selectedExtraAbilities: Ability[];
    allegiance: Faction | null;
    maxArtifacts: number;
    numberOfArtifacts: number;
    armyType: Faction | null;
    subFaction: Faction | null;
    getUnitsWithKeywords(keywords: string[][]): UnitWarscrollInterface[];
    hasAnyUnitExtraAbility(ability: Ability): boolean;
    pointMode: PointMode;
    save(): void;
    units: UnitWarscrollInterface[];
    isRoleAvailable(role: UnitRole): boolean;
}

export interface ImportedDataStore {
    models: Record<string, Model>;
    factions: Record<string, Faction>;
    abilities: Record<string, Ability>;
    damageTables: Record<string, DamageTable>;
    options: Record<string, ModelOption>;
    attacks: Record<string, Attack>;
    units: Record<string, Unit>;
    battalions: Record<string, Battalion>;
    realms: Record<string, RealmOfBattle>;
    abilityGroups: Record<string, AbilityGroup>;
    genericAbilityGroups: AbilityGroup[];
    battalionUnits: Record<string, BattalionUnit>;
    battalionGroups: Record<string, BattalionGroup>;
    genericBattalionGroups: BattalionGroup[];
    battalionAbilities: Record<string, BattalionAbility>;
}

export interface AbilityGroup extends ItemWithAbilities {
    id: string;
    abilities: Ability[];
    name: string;
    category: AbilityCategory;
    allowUniqueUnits?: boolean;
    keywords?: string[];
    restrictions?: string;
    domain?: AbilityGroupDomain;
}

export interface RealmOfBattle {
    id: string;
    name: string;
    realmName: string;
    magic: Ability;
    commands: Ability[];
}
