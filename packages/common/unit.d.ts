import { KeywordCategory, Role } from "./definitions";
export declare const enum Material {
    Metal = 0,
    Resin = 1,
    Plastic = 2,
    Mixed = 3
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
    abilities?: Ability[];
    battleTraits?: Ability[];
}
export declare const enum AbilityCategory {
    None = 0,
    Spell = 1,
    SpecialRule = 2,
    Command = 3,
    Prayer = 4,
    Artefact = 5,
    Mount = 6,
    CommandTrait = 7,
    Army = 8,
    Unit = 9,
    MeleeAttack = 10,
    RangedAttack = 11,
    BattleTrait = 12,
    Champion = 13
}
export declare const enum Phase {
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
    mortalWoundsOnSucessfulSaveReroll?: Value;
    mortalWoundsOnWound?: Value;
    rerollFailedSaves?: boolean;
    bonusSave?: number;
    negateWoundsOrMortalWoundsOn3?: boolean;
    negateWoundsOrMortalWoundsOn5?: boolean;
    negateWoundsOrMortalWoundsOn6?: boolean;
    negateWoundsOn5?: boolean;
    changeSaveRoll?: boolean;
    ignoreRend?: boolean;
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
    inRangeOf?: {
        friendly: boolean;
        keyword: string[];
        range: number;
    };
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
export interface AttackAura extends AttackAuraValues, AttackAuraAbilityEffects, AttackAuraBooleans {
    phase?: Phase.Combat | Phase.Shooting;
}
export declare const enum SubPhase {
    Before = 0,
    While = 1,
    WhileAfter = 2,
    After = 3
}
export interface SpellAura {
    bonusUnbind?: Value;
    bonusToUnbind?: Value;
    autoUnbinds?: number;
    noCast?: boolean;
}
export declare const enum TargetType {
    Unit = 0,
    Friend = 0,
    Model = 1,
    Weapon = 2,
    Mount = 4,
    Enemy = 8,
    NotUnit = 7
}
export declare const enum EffectDuration {
    Phase = 0,
    Turn = 1,
    Round = 2,
    Permanent = 3
}
export interface AbilityEffect {
    name?: string;
    castMode?: "passive" | "skill" | "prayer" | "spell" | "command";
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
    prayerValue?: number;
    mortalWounds?: Value;
    heal?: Value;
    setUpAwayFromEnemy?: Value;
    mortalWoundsPerModel?: Value;
    duration?: EffectDuration;
    /** In case of random effects, the dice value must be in this range  */
    randomEffectRange?: {
        min: number;
        max: number;
    };
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
export interface ModelOption {
    id: string;
    name: string;
    abilities?: Ability[];
    attacks?: Attack[];
    modelCategory?: string;
    unitCategory?: string;
    isOptionValid?: (unit: WarscrollUnitInterface, model: WarscrollModelInterface) => boolean;
}
export declare type Value = number | string | DamageColumn | undefined | RatioValue | SumValue | TargetConditionValue | ConditionValue | OrValue;
export declare function getValueRatio(value: Value, ratio?: number): Value;
export declare function getSumValues(value1: Value, value2: Value): Value;
export interface DamageTable {
    id: string;
    ranges: string[];
    columns: DamageColumn[];
}
export declare const enum ValueType {
    DamageColumn = 0,
    SumValue = 1,
    RatioValue = 2,
    TargetCondition = 3,
    Or = 4,
    Condition = 5
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
export declare function isRatioValue(v: Value): v is RatioValue;
export declare function isSumValue(v: Value): v is SumValue;
export declare function isDamageColumn(v: Value): v is DamageColumn;
export declare function isConditionValue(v: Value): v is ConditionValue;
export declare function isTargetConditionValue(v: Value): v is TargetConditionValue;
export declare function isOrValue(v: Value): v is OrValue;
export declare function targetConditionValue(targetCondition: TargetCondition, value: Value, defaultValue?: Value): TargetConditionValue;
export declare function conditionValue(condition: TargetCondition, value: Value): ConditionValue;
export declare function orValue(left: Value, right: Value): OrValue;
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
    description?: string;
    flavor?: string;
    magicDescription?: string;
    options?: ModelOption[];
    pictureUrl?: string;
    role?: Role;
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
export declare enum Contingent {
    Spearhead = 0,
    Main = 1,
    Rearguard = 2
}
export declare const contingentName: (contingent: Contingent) => "Spearhead" | "Rearguard" | "Main body";
export interface WarscrollUnitInterface {
    definition: Unit;
    isGeneral: boolean;
    isLeader: boolean;
    extraAbilities: ExtraAbility[];
    models: WarscrollModelInterface[];
    modelCount: number;
    keywords: string[];
    contingent: Contingent;
    warscroll: WarscrollInterface;
}
export interface WarscrollModelInterface {
    id: number;
    options: ModelOption[];
    count: number;
}
export interface WarscrollInterface {
    battalions: WarscrollBattalionInterface[];
    general: WarscrollUnitInterface | undefined;
    extraAbilities: ExtraAbility[];
    allegiance: Faction | null;
    maxArtifacts: number;
    numberOfArtifacts: number;
    armyType: Faction | null;
    subFaction: Faction | null;
    getUnitsWithKeywords(keywords: string[][]): WarscrollUnitInterface[];
}
export interface DataStore {
    models: Record<string, Model>;
    factions: Record<string, Faction>;
    abilities: Record<string, Ability>;
    damageTables: Record<string, DamageTable>;
    options: Record<string, ModelOption>;
    attacks: Record<string, Attack>;
    units: Record<string, Unit>;
    extraAbilities: Record<string, ExtraAbility>;
    armyOptions: Record<string, ArmyOption>;
    battalions: Record<string, Battalion>;
    sceneries: Record<string, EndlessSpell>;
    realms: Record<string, RealmOfBattle>;
}
export declare type ExtraAbilityTest = (unit: WarscrollUnitInterface, warscroll: WarscrollInterface) => boolean;
export interface ExtraAbility {
    id: string;
    ability: Ability;
    allegianceKeyword?: string;
    category: string;
    armyOptionKeyword?: string;
    realmId?: string;
    keywords?: string[][];
}
export interface RealmOfBattle {
    id: string;
    name: string;
    realmName: string;
    magic: Ability;
    commands: Ability[];
}
export interface ArmyOption {
    id: string;
    name: string;
    keyword?: string;
    requiredArtifact?: ExtraAbility;
    requiredArtifactKeyword?: string;
    requiredCommandTrait?: ExtraAbility;
    requiredCommandTraitKeyword?: string;
    abilities?: Ability[];
    commandAbilities?: Ability[];
}
export interface ArmyOptions {
    name: string;
    values: ArmyOption[];
}
