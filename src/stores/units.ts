import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";
import { overrideNurgle } from "./overrides/nurgle";
import { overrideKhorne } from "./overrides/khorne";
import { overrideDevotedOfSigmar } from "./overrides/devoted-of-sigmar";
import { overrideWanderers } from "./overrides/wanderers";
import { overrideIdonethDeepkins } from "./overrides/idoneth-deepkins";
import { overrideEverchosen } from "./overrides/everchosen";
import { overrideSylvaneth } from "./overrides/sylvaneth";
import { overrideNighthaunt } from "./overrides/nighthaunt";
import { overrideLegionOfGrief } from "./overrides/legion-of-grief";
import { overrideOrder } from "./overrides/order";
import { overrideCommon } from "./overrides/common";
import { overrideOrruks } from "./overrides/orruks";
import { overrideGitz } from "./overrides/gitz";

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

export const enum GrandAlliance {
    chaos,
    order,
    death,
    destruction
}

export interface Faction {
    id: string;
    grandAlliance: GrandAlliance;
    name: string;
    allied?: string[];
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
    BattleTrait
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
    phase?: Phase.Combat | Phase.Shooting;
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

export const enum TargetType {
    Unit = 0,
    Friend = 0,
    Model = 1,
    Weapon = 2,
    Mount = 4,
    Enemy = 8,
    NotUnit = Model | Weapon | Mount
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
    prayerValue?: number;
    mortalWounds?: Value;
    heal?: Value;
    setUpAwayFromEnemy?: Value; // The distance to the enemy
    mortalWoundsPerModel?: Value;

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

export interface ModelOption {
    id: string;
    name: string;
    abilities?: Ability[];
    attacks?: Attack[];

    // A model can only have one option of this category
    modelCategory?: string;

    // An unit can't select another option of this category
    unitCategory?: string;
    isOptionValid?: (
        unit: WarscrollUnitInterface,
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
    return typeof v === "object" && v.type === ValueType.TargetCondition;
}

export function isTargetConditionValue(v: Value): v is TargetConditionValue {
    return typeof v === "object" && v.type === ValueType.Condition;
}

export function isOrValue(v: Value): v is OrValue {
    return typeof v === "object" && v.type === ValueType.Or;
}

export function targetConditionValue(
    targetCondition: TargetCondition,
    value: Value
): TargetConditionValue {
    return {
        type: ValueType.TargetCondition,
        value: value,
        targetCondition: targetCondition
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
    description?: string;
    flavor?: string;
    magicDescription?: string;
    options?: ModelOption[];
    pictureUrl?: string;

    optionStats?: UnitStatModels[];

    isLeader?: (warscroll: WarscrollInterface) => boolean;
    isBattleline?: (warscroll: WarscrollInterface) => boolean | undefined;
    isBehemot?: (warscroll: WarscrollInterface) => boolean;
    isArtillery?: (warscroll: WarscrollInterface) => boolean;
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
    points: number;
    allegiances: Allegiance[];
    abilities?: Ability[];
}

export interface WarscrollBattalionInterface {
    id: string;
    definition: Battalion;
}

export enum Contingent {
    Spearhead,
    Main,
    Rearguard
}

export const contingentName = (contingent: Contingent) => {
    switch (contingent) {
        case Contingent.Spearhead:
            return "Spearhead";
        case Contingent.Rearguard:
            return "Rearguard";
    }
    return "Main body";
};

export interface WarscrollUnitInterface {
    definition: Unit;
    isGeneral: boolean;
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
    allegiance: Allegiance;
    maxArtifacts: number;
    numberOfArtifacts: number;
    armyOption: ArmyOption | null;
    getUnitsWithKeywords(keywords: string[][]): WarscrollUnitInterface[];
}

export interface DataStore {
    models: { [key: string]: Model };
    units: { [key: string]: Unit };
    factions: { [key: string]: Faction };
}

export interface Allegiance {
    id: string;
    grandAlliance: GrandAlliance;
    name: string;
    keywords: string[];
    armyOptions?: ArmyOptions;
    battleTraits?: Ability[];
    alliesKeywords?: string[][];
}

export type ExtraAbilityTest = (
    unit: WarscrollUnitInterface,
    warscroll: WarscrollInterface
) => boolean;

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

export class UnitsStore {
    serial = 100;

    extraAbilities: ExtraAbility[] = [];
    modelsList: Model[] = [];
    unitList: Unit[] = [];
    battalions: Battalion[] = [];
    boxes: Box[];
    factions: { [key: string]: Faction };
    factionsList: Faction[] = [];
    allegianceList: Allegiance[] = [];
    sceneryList: EndlessSpell[] = [];
    baseAbilities: Ability[] = [];

    realms: RealmOfBattle[] = [];
    constructor(data: DataStoreImpl) {
        overrideStormcast(data);
        overrideNurgle(data);
        overrideSylvaneth(data);
        overrideEverchosen(data);
        overrideKhorne(data);
        overrideDevotedOfSigmar(data);
        overrideWanderers(data);
        overrideIdonethDeepkins(data);
        overrideNighthaunt(data);
        overrideLegionOfGrief(data);
        overrideOrder(data);
        overrideCommon(data);
        overrideOrruks(data);
        overrideGitz(data);

        const models: { [key: string]: Model } = data.models;
        for (const key in models) {
            this.modelsList.push(models[key]);
        }
        this.modelsList = this.modelsList.sort((a, b) =>
            a.name > b.name ? 1 : -1
        );

        const units: { [key: string]: Unit } = data.units;
        for (const key in units) {
            this.unitList.push(units[key]);
        }
        this.unitList = this.unitList.sort((a, b) =>
            a.model.name > b.model.name ? 1 : -1
        );

        const battalions: { [key: string]: Battalion } = data.battalions;
        for (const key in battalions) {
            this.battalions.push(battalions[key]);
        }

        const realms: { [key: string]: RealmOfBattle } = data.realms;
        for (const key in realms) {
            this.realms.push(realms[key]);
        }

        this.boxes = [];
        this.factions = data.factions;

        for (const key in this.factions) {
            this.factionsList.push(this.factions[key]);
        }

        const allegiances: { [key: string]: Allegiance } = data.allegiances;
        for (const key in allegiances) {
            this.allegianceList.push(allegiances[key]);
        }
        this.allegianceList = this.allegianceList.sort((a, b) =>
            a.name > b.name ? 1 : -1
        );

        const extraAbilities: { [key: string]: ExtraAbility } =
            data.extraAbilities;
        for (const key in extraAbilities) {
            this.extraAbilities.push(extraAbilities[key]);
        }

        this.fillBaseAbilities();
        // this.armyOptions = data.armyOptions;

        const sceneries: { [key: string]: EndlessSpell } = data.sceneries;
        for (const key in sceneries) {
            this.sceneryList.push(sceneries[key]);
        }
    }

    private fillBaseAbilities() {
        this.baseAbilities.push({
            id: "at_the_double",
            name: "At the double",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability after you make a run roll for a friendly unit that is within 6" of a friendly Hero, or 12" of a friendly Hero that is a general. If you do so, the run roll is treated as being a 6.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Movement }]
        });
        this.baseAbilities.push({
            id: "forward_to_victory",
            name: "Forward to Victory",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability after you make a charge roll for a friendly unit that is within 6" of a friendly Hero, or 12" of a friendly Hero that is a general. If you do so, re-roll the charge roll.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Charge }]
        });
        this.baseAbilities.push({
            id: "inspiring_presence",
            name: "Inspiring Presence",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability at the start of the battleshock phase. If you do so, pick a friendly unit that is within 6" of friendly Hero, or 12" of a friendly Hero that is a general. That unit does not have to take battleshock tests in that phase.',
            effects: [
                { targetType: TargetType.Friend, phase: Phase.Battleshock }
            ]
        });
        this.baseAbilities.push({
            id: "allout_attack",
            name: "All-out Attack",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit wholly within 12" of a friendly HERO, or wholly within 18" of a friendly HERO that is a general. You can re-roll hit rolls of 1 for attacks made by that unit until the end of that phase.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Combat }]
        });
        this.baseAbilities.push({
            id: "allout_defence",
            name: "All-out Defence",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit that is wholly within 12" of a friendly HERO, or wholly within 18" of a friendly HERO that is a general. You can re-roll save rolls of 1 for attacks that target that unit until the end of that phase.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Combat }]
        });
        this.baseAbilities.push({
            id: "volleyfire",
            name: "Volley Fire",
            category: AbilityCategory.Command,
            description:
                'You can use this command ability at the start of your shooting phase. If you do so, pick 1 friendly unit that is wholly within 12" of a friendly HERO, or wholly within 18" of a friendly HERO that is a general. You can re-roll hit rolls of 1 for attacks made by that unit until the end of that phase.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Shooting }]
        });
        this.baseAbilities.push({
            id: "lookoutsir",
            name: "Look out, Sir!",
            category: AbilityCategory.Army,
            description:
                'You must subtract 1 from hit rolls made for missile weapons if the target of the attack is an enemy Hero that is within 3" of an enemy unit that has 3 or more models. The Look Out, Sir! rule does not apply if the target Hero is a Monster.',
            effects: [{ targetType: TargetType.Friend, phase: Phase.Shooting }]
        });
        this.baseAbilities.push({
            id: "cover",
            name: "Cover",
            category: AbilityCategory.Army,
            description:
                "Add 1 to save rolls for a unit if all of its models are wholly on or within a terrain feature when the rolls are made. This modifier does not apply in the combat phase if the unit you are making save rolls for made a charge move in the same turn, and never applies to units containing models with the Monster or War Machinekeyword that have a Wounds characteristic of 8 or more.",
            effects: [
                {
                    targetType: TargetType.Friend,
                    phase: Phase.Shooting | Phase.Combat
                }
            ]
        });
        this.baseAbilities.push({
            id: "arcanebolt",
            name: "Arcane Bolt",
            category: AbilityCategory.Spell,
            description:
                'Arcane Bolt has a casting value of 5. If successfully cast, pick an enemy unit within 18" of the caster that is visible to them. That unit suffers 1 mortal wound. If the casting roll was 10 or more, the unit suffers D3 mortal wounds instead.',
            effects: [
                {
                    spellCastingValue: 5,
                    targetRange: 18,
                    targetType: TargetType.Enemy,
                    phase: Phase.Hero
                }
            ]
        });
        this.baseAbilities.push({
            id: "mysticshield",
            name: "Mystic Shield",
            category: AbilityCategory.Spell,
            description:
                'Mystic Shield has a casting value of 6. If successfully cast, pick a friendly unit within 18" of the caster that is visible to them. Re-roll save rolls of 1 for that unit until your next hero phase.',
            effects: [
                {
                    targetType: TargetType.Friend,
                    spellCastingValue: 6,
                    targetRange: 18,
                    phase: Phase.Hero,
                    defenseAura: { rerollSavesOn1: true }
                }
            ]
        });
    }

    findUnit(id: string) {
        return this.unitList.find(x => x.id === id);
    }

    getUnit(id: string) {
        const unit = this.findUnit(id);
        if (!unit) throw Error(`Unit ${id} does not exist`);
        return unit;
    }

    getAllegiance(id: string) {
        const allegiance = this.allegianceList.find(x => x.id === id);
        if (!allegiance) throw Error(`Allegiance ${id} does not exist`);
        return allegiance;
    }

    getExtraAbility(id: string) {
        return this.extraAbilities.find(x => x.id === id);
    }
}
