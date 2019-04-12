import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";
import { overrideNurgle } from "./overrides/nurgle";
import { overrideKhorne } from "./overrides/khorne";
import { overrideDevotedOfSigmar } from "./overrides/devoted-of-sigmar";
import { overrideWanderers } from "./overrides/wanderers";
import { overrideIdonethDeepkins } from "./overrides/idoneth-deepkins";
import { overrideEverchosen } from "./overrides/everchosen";
import { overrideSylvaneth } from "./overrides/sylvaneth";

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
    RangedAttack
}

export const enum Phase {
    Setup,
    Hero,
    Movement,
    Shooting,
    Charge,
    Combat,
    Battleshock
}

export interface DefenseAura {
    rerollSavesOn?: number;
    rerollFailedSaves?: boolean;
    rerollCharge?: boolean;
    bonusSave?: number;
}

export interface TargetCondition {
    minWounds?: number;
    minModels?: Value;
    keyword?: string;
    anyKeyword?: string[];
    hasCharged?: boolean;
    hasNotCharged?: boolean;
    hasMoved?: boolean;
    hasNotMoved?: boolean;
    inCover?: boolean;
    weaponId?: string;
    meleeWeapon?: boolean;
    rangedWeapon?: boolean;
}

export interface AttackAuraValues {
    bonusHitRoll?: Value;
    bonusAttacks?: Value;
    numberOfHitsOnUnmodified6?: Value;
    numberOfHitsOnHit?: Value;
    mortalWoundsOnHitUnmodified6?: Value;
    mortalWounds?: Value;
    damageOnWoundUnmodified6?: Value;
    bonusRend?: Value;
    rerollHitsOn1?: Value;
}

export interface AttackAuraNumbers {
}

export interface AttackAuraBooleans {
    rerollFailedHits?: boolean;
}

export interface AttackAuraAbilityEffects {
    effectsOnHitUnmodified6?: AbilityEffect[];
}

export interface AttackAura extends AttackAuraValues, AttackAuraNumbers, AttackAuraAbilityEffects, AttackAuraBooleans {
}

export const enum SubPhase {
    Before,
    While,
    After
}

export interface DebuffAura {
    noPileIn?: boolean;
}

export const enum TargetType {
    Unit = 0,
    Friend = 0,
    Model = 1,
    Weapon = 2,
    Mount = 4,
    Enemy = 8
}

export interface AbilityEffect {
    name?: string;

    attackAura?: AttackAura;
    defenseAura?: DefenseAura;
    targetAura?: DebuffAura;
    targetRange?: Value;
    targetRadius?: Value;
    whollyWithin?: boolean;
    targetType: TargetType;
    targetArea?: boolean;
    targetCondition?: TargetCondition;
    effectRange?: number;
    phase?: Phase;
    subPhase?: SubPhase;
    condition?: TargetCondition;
    timesPerBattle?: number;
    ignoreOtherEffects?: boolean;
    choice?: string;

    mortalWounds?: Value;
    setUpAwayFromEnemy?: Value; // The distance to the enemy

    /** In case of random effects, the dice value must be in this range  */
    randomEffectRange?: { min: number; max: number };
}

export interface Ability {
    name: string;
    flavor?: string;
    description?: string;
    category?: AbilityCategory;
    effects?: AbilityEffect[];
    randomEffectDices?: string;
    keywords?: string[][];
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

export interface Scenery {
    id: string;
    name: string;
    points: number;
    description?: string;
    abilities?: Ability[];
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
    isOptionValid?: (unit: WarscrollUnitInterface, model: WarscrollModelInterface) => boolean;
}

export type Value = number | string | DamageColumn | undefined | RatioValue | SumValue | ConditionValue;

export function getValueRatio(value: Value, ratio?: number): Value {
    if (ratio !== undefined && value !== undefined) {
        if (typeof(value) === "number") {
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
    if (typeof (value1) === "number" && typeof (value2) === "number") {
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

export interface ConditionValue {
    type: ValueType.Condition;
    value: Value;
    targetCondition: TargetCondition;
}

export function isRatioValue(v: Value): v is RatioValue {
    return typeof(v) === "object" && v.type === ValueType.RatioValue;
}

export function isSumValue(v: Value): v is SumValue {
    return typeof(v) === "object" && v.type === ValueType.SumValue;
}

export function isDamageColumn(v: Value): v is DamageColumn {
    return typeof(v) === "object" && (v.type === ValueType.DamageColumn || v.type === undefined);
}

export function isConditionValue(v: Value): v is ConditionValue {
    return typeof (v) === "object" && v.type === ValueType.Condition;
}

export function conditionValue(targetCondition: TargetCondition, value: Value) : ConditionValue {
    return { type: ValueType.Condition, value: value, targetCondition: targetCondition };
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
    description?: string;
    flavor?: string;
    magicDescription?: string;
    options?: ModelOption[];
    pictureUrl?: string;

    modelStats?: UnitStatModels[];

    isLeader?: (warscroll: WarscrollInterface) => boolean;
    isBattleline?: (warscroll: WarscrollInterface) => (boolean | undefined);
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
    units: BattalionUnit[];
    description?: string;
    points: number;
    allegiances: Allegiance[];
    abilities?: Ability[];
}

export interface WarscrollBattalionInterface {
    id: number;
    battalion: Battalion; 
}

export interface WarscrollUnitInterface {
    unit: Unit;
    isGeneral: boolean;
    extraAbilities: ExtraAbility[];
    models: WarscrollModelInterface[];
    modelCount: number;
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
}

export interface DataStore {
    models: {[key:string]: Model};
    units: {[key:string]: Unit};
    factions: {[key:string]: Faction};
}

export interface Allegiance {
    id: string;
    grandAlliance: GrandAlliance;
    name: string;
    keyword: string;
    armyOptions?: ArmyOptions;
    battleTraits?: Ability[];
}

export type ExtraAbilityTest = (unit: WarscrollUnitInterface, warscroll: WarscrollInterface) => boolean;

export interface ExtraAbility {
    id: string;
    ability: Ability;
    allegianceKeyword?: string;
    category: string;
    isAvailable: ExtraAbilityTest;
}

export interface ArmyOption {
    id: string;
    name: string;
    keyword?: string;
    requiredArtifact?: Ability;
    requiredArtifactKeyword?: string;
    requiredCommandTrait?: Ability;
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
    sceneryList: Scenery[] = [];
    
    constructor(data: DataStoreImpl) {   
        overrideStormcast(data);   
        overrideNurgle(data);
        overrideSylvaneth(data);
        overrideEverchosen(data);
        overrideKhorne(data);
        overrideDevotedOfSigmar(data);
        overrideWanderers(data);
        overrideIdonethDeepkins(data);

        const models: {[key: string]: Model} = data.models;  
        for (const key in models) {
            this.modelsList.push(models[key]);
        }
        this.modelsList = this.modelsList.sort((a, b) => a.name > b.name ? 1 : -1);

        const units: { [key: string]: Unit } = data.units;
        for (const key in units) {
            this.unitList.push(units[key]);
        }
        this.unitList = this.unitList.sort((a, b) => a.model.name > b.model.name ? 1: -1);

        const battalions: { [key: string]: Battalion } = <any>data.battalions;
        for (const key in battalions) {
            this.battalions.push(battalions[key]);
        }

        this.boxes = [];
        this.factions = data.factions;

        for (const key in this.factions) {
            this.factionsList.push(this.factions[key]);
        }

        const allegiances: {[key: string]: Allegiance} = data.allegiances;
        for (const key in allegiances) {
            this.allegianceList.push(allegiances[key]);
        }
        this.allegianceList = this.allegianceList.sort((a, b) => a.name > b.name ? 1 : -1);

        const extraAbilities: {[key: string]: ExtraAbility} = data.extraAbilities;
        for (const key in extraAbilities) {
            this.extraAbilities.push(extraAbilities[key]);
        }

        // this.armyOptions = data.armyOptions;

        const sceneries: {[key: string]: Scenery} = data.sceneries;
        for (const key in sceneries) {
            this.sceneryList.push(sceneries[key]);
        }

        this.addAlliances(data);
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

    private addAlliances(data: DataStoreImpl) {
    }
}