import { KeywordCategory, Role } from "./definitions";

export const enum Material {
    Metal,
    Resin,
    Plastic,
    Mixed
}

export interface Model {
    name: string;
    id: string;
    publicationYear?: number;
    material?: Material;
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
    Triumph
}

export const enum Phase {
    Setup = 1,
    Hero = 2,
    Movement = 4,
    Shooting = 8,
    Charge = 16,
    Combat = 32,
    Battleshock = 64,
    Any = 127
}

export interface DefenseAura {
    phase?: Phase.Combat | Phase.Shooting | Phase.Hero;
    rerollSavesOn1?: boolean;
    bonusWoundRoll?: Value;
    mortalWoundsOnSucessfulSaveReroll?: Value; // In a 3" radius
    mortalWoundsOnWound?: Value;
    rerollFailedSaves?: boolean;
    bonusSave?: number;
    negateWoundsOrMortalWoundsOn3?: boolean;
    negateWoundsOrMortalWoundsOn5?: boolean;
    negateWoundsOrMortalWoundsOn6?: boolean;
    negateWoundsOn5?: boolean;
    changeSaveRoll?: boolean;
    ethereal?: boolean;
    ignoreRendOfMinus1?: boolean;
    healOnSave7?: number;
    bonusHitRoll?: number;
    malusHitRoll?: number;
    rerollHitOn1?: boolean;
    rerollHitOn6?: boolean;
    malusEnemyPileIn?: Value;
}

export interface BattleshockAura {
    bonusBravery?: Value;
    immune?: boolean;
    rerollFails?: boolean;
}

export interface MovementAura {
    rideTheWindDistance?: Value;
    fly?: boolean;
    allowChargeAfterRunOrRetreat?: boolean;
    changeRunRoll?: boolean;
    windrider?: boolean;
    bonusMove?: Value;
}

export interface ChargeAura {
    rerollCharge?: boolean;
    changeChargeRoll?: boolean;
    chargeDistance?: Value;
    chargeDices?: Value;
    bonus?: Value;
}

export interface TargetCondition {
    minWounds?: number;
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
    inRangeOf?: { friendly: boolean; keyword: string[]; range: number };
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
}

export interface AttackAuraBooleans {
    rerollFailedWounds?: boolean;
    changeHitRoll?: boolean;
    changeWoundRoll?: boolean;
    shootAfterRun?: boolean;
    noPileIn?: boolean;
    changeHitWoundSaveOrDamageRoll?: boolean;
}

export interface AttackAuraAbilityEffects {
    effectsOnHitUnmodified6?: AbilityEffect[];
}

export interface AttackAura
    extends AttackAuraValues,
        AttackAuraAbilityEffects,
        AttackAuraBooleans {
    phase?: Phase.Combat | Phase.Shooting;
}

export const enum SubPhase {
    Before,
    While,
    WhileAfter,
    After
}

export interface SpellAura {
    bonusUnbind?: Value;
    bonusToUnbind?: Value;
    autoUnbinds?: number;
    noCast?: boolean;
}

export interface PrayerAura {
    bonusToChant?: Value;
}

export const enum TargetType {
    Unit = 0,
    Friend = 0,
    Model = 1,
    Weapon = 2,
    Mount = 4,
    Enemy = 8,
    NotUnit = Model | Weapon | Mount
}

export const enum EffectDuration {
    Phase,
    Turn,
    Round,
    Permanent
}

export interface AbilityEffect {
    name?: string;
    castMode?: "passive" | "skill" | "prayer" | "spell" | "command"; // default is passive
    attackAura?: AttackAura;
    defenseAura?: DefenseAura;
    battleShockAura?: BattleshockAura;
    movementAura?: MovementAura;
    chargeAura?: ChargeAura;
    targetRange?: Value;
    targetRadius?: Value;
    whollyWithin?: boolean;
    targetType: TargetType;
    targetArea?: boolean;
    targetCondition?: TargetCondition;
    effectRange?: number;
    /** At which phase the ability is *used* to add the effect */
    phase?: Phase;
    spellAura?: SpellAura;
    commandAura?: {};
    subPhase?: SubPhase;
    condition?: TargetCondition;
    timesPerBattle?: number;
    ignoreOtherEffects?: boolean;
    choice?: string;
    spellCastingValue?: number;
    prayerAura?: PrayerAura;
    prayerValue?: number;
    mortalWounds?: Value;
    heal?: Value;
    setUpAwayFromEnemy?: Value; // The distance to the enemy
    mortalWoundsPerModel?: Value;
    duration?: EffectDuration;

    /** In case of random effects, the dice value must be in this range  */
    randomEffectRange?: { min: number; max: number };
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

export interface EndlessSpell {
    id: string;
    name: string;
    subName?: string;
    points: number;
    description?: string;
    abilities?: Ability[];
    commandAbilities?: Ability[];
    keywords?: string[];
    pictureUrl?: string;
    flavor?: string;
}

export const enum ModelOptionCategory {
    Weapon,
    Champion
}

export const enum UnitOptionCategory {
    Main
}

export interface ModelOption {
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
    Condition
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

export interface ConditionValue {
    type: ValueType.Condition;
    value: Value;
    condition: TargetCondition;
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

export function targetConditionValue(
    targetCondition: TargetCondition,
    value: Value,
    defaultValue?: Value
): TargetConditionValue {
    return {
        type: ValueType.TargetCondition,
        value,
        targetCondition,
        defaultValue
    };
}

export function conditionValue(
    condition: TargetCondition,
    value: Value
): ConditionValue {
    return {
        type: ValueType.Condition,
        value,
        condition
    };
}

export function orValue(left: Value, right: Value): OrValue {
    return {
        type: ValueType.Or,
        left,
        right
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

export interface Unit extends UnitInfos {
    id: string;
    name: string;
    subName?: string;
    model: Model;
    size: number;
    maxSize?: number;
    maxPoints?: number;
    maxCount?: number;
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
    role?: Role;
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
    // Outer is and, inner is or (keywords)
    units: string[][];
    countMin: number;
    countMax: number;
}

export interface Battalion {
    id: string;
    name: string;
    subName?: string;
    units: BattalionUnit[];
    description?: string;
    pictureUrl?: string;
    points: number;
    allegiances: Faction[];
    abilities?: Ability[];
}

export interface WarscrollBattalionInterface {
    id: string;
    definition: Battalion;
}

export interface UnitWarscrollInterface {
    definition: Unit;
    isGeneral: boolean;
    isLeader: boolean;
    extraAbilities: Ability[];
    models: WarscrollModelInterface[];
    modelCount: number;
    keywords: string[];
    warscroll: ArmyListInterface;
}

export interface WarscrollModelInterface {
    id: number;
    options: ModelOption[];
    count: number;
}

export interface ArmyListInterface {
    battalions: WarscrollBattalionInterface[];
    general: UnitWarscrollInterface | undefined;
    selectedExtraAbilities: Ability[];
    allegiance: Faction | null;
    maxArtifacts: number;
    numberOfArtifacts: number;
    armyType: Faction | null;
    subFaction: Faction | null;
    getUnitsWithKeywords(keywords: string[][]): UnitWarscrollInterface[];
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
    sceneries: Record<string, EndlessSpell>;
    realms: Record<string, RealmOfBattle>;
    abilityGroups: Record<string, AbilityGroup>;
    genericAbilityGroups: AbilityGroup[];
}

export interface AbilityGroup {
    id: string;
    abilities: Ability[];
    name: string;
    category: AbilityCategory;
    allowUniqueUnits?: boolean;
    keywords?: string[];
    restrictions?: string;
}

export interface RealmOfBattle {
    id: string;
    name: string;
    realmName: string;
    magic: Ability;
    commands: Ability[];
}
