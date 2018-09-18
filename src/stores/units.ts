import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";
import { getValue } from "./combat";
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
    Magic,
    SpecialRule,
    Command
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
    rerollCharge?: boolean;
}

export interface TargetCondition {
    minWounds?: number;
    keyword?: string;
    hasCharged?: boolean;
    hasNotCharged?: boolean;
    hasMoved?: boolean;
    hasNotMoved?: boolean;
}

export interface AttackCondition {
    attack?: Attack;
    onlyMeleeAttacks?: boolean;
    onlyMissileAttacks?: boolean;
}

export interface AttackAuraValues {
    bonusHitRoll?: Value;
    bonusAttacks?: Value;
    numberOfHitsOn6?: Value;
    numberOfExtraHitsOnHit?: Value;
    mortalWoundsOnHitUnmodified6?: Value;
    mortalWounds?: Value;
    damageOnWoundUnmodified6?: Value;
}

type AttackAuraValueKey = keyof AttackAuraValues;
const attackAuraValueKeys: AttackAuraValueKey[] = ["bonusHitRoll", "bonusAttacks", "numberOfHitsOn6", "numberOfExtraHitsOnHit", "mortalWoundsOnHitUnmodified6", "mortalWounds", "damageOnWoundUnmodified6"];

export interface AttackAuraNumbers {
    rerollHitsOn?: number;
}

const attackAuraNumberKeys: (keyof AttackAuraNumbers)[] = ["rerollHitsOn"];

export interface AttackAuraAbilityEffects {
    effectsOnHitUnmodified6?: AbilityEffect[];
}
const attackAuraAbilityEffectKeys: (keyof AttackAuraAbilityEffects)[] = ["effectsOnHitUnmodified6"];

export interface AttackAura extends AttackAuraValues, AttackAuraNumbers, AttackAuraAbilityEffects {
    
    targetCondition?: TargetCondition;
    attackCondition?: AttackCondition;
}

export const enum SubPhase {
    Before,
    While,
    After
}

export interface AuraState<T> {
    aura: T;
    effectRatio?: number;
    duration?: number;
}

export class UnitState {
    hasCharged: boolean = false;
    hasMoved: boolean = false;
    private attackAuras: AuraState<AttackAura>[] = [];
    attackAura: AttackAura = {};
    defenseAura: AuraState<DefenseAura>[] = [];
    debuffAuras: AuraState<DebuffAura>[] = [];
    wounds: number = 0;
    constructor(public unit: Unit) {
    }

    addAttackAura(auraState: AuraState<AttackAura>) {
        this.attackAuras.push(auraState);
        const aura = auraState.aura;
        const sum = this.attackAura;
        for (const key of attackAuraValueKeys) {
            if (aura[key]) {
                sum[key] = getSumValues(sum[key], getValueRatio(aura[key], auraState.effectRatio));
            }
        }
        for (const key of attackAuraNumberKeys) {
            const a = aura[key];
            if (a) {
                sum[key] = a * (auraState.effectRatio || 1);
            }
        }
        for (const key of attackAuraAbilityEffectKeys) {
            const a = aura[key]
            if (a) {
                // TODO ratio?
                const effects = sum[key] || [];
                sum[key] = effects.concat(a);
            }
        }
    }
}

export interface DebuffAura {
    noPileIn?: boolean;
}

export interface AbilityEffect {
    name?: string;

    attackAura?: AttackAura;
    defenseAura?: DefenseAura;
    targetAura?: DebuffAura;
    targetRange?: Value;
    targetRadius?: Value;
    whollyWithin?: boolean;
    targetEnemy?: boolean;
    targetArea?: boolean;
    targetKeyword?: string;
    targetCondition?: TargetCondition;
    effectRange?: number;
    phase?: Phase;
    subPhase?: SubPhase;
    condition?: TargetCondition;
    timesPerBattle?: number;

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
}

export interface Attack {
    melee: boolean;
    name: string;
    range: Value;
    attacks?: Value;
    toHit?: Value;
    toWound?: Value;
    rend?: Value;
    damage?: Value;
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

export type Value = number | string | DamageColumn | undefined | RatioValue | SumValue;

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
    ranges: number[];
    columns: DamageColumn[];
}

export const enum ValueType {
    DamageColumn,
    SumValue,
    RatioValue
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

export function isRatioValue(v: Value): v is RatioValue {
    return typeof(v) === "object" && v.type === ValueType.RatioValue;
}

export function isSumValue(v: Value): v is SumValue {
    return typeof(v) === "object" && v.type === ValueType.SumValue;
}

export function isDamageColumn(v: Value): v is DamageColumn {
    return typeof(v) === "object" && (v.type === ValueType.DamageColumn || v.type === undefined);
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

export interface UnitStats {
    name?: string;
    meleeDamage: number;
    rangedDamage: number;
    unit: Unit;
    save: number | undefined;
    savedWounds: number;
    totalDamage: number;
    ignoredAbilities: Ability[];
}

function applyEffect(caster: UnitState, target: UnitState, effect: AbilityEffect, stats: UnitStats, ratio?: number) {
    if (!targetEnemy(effect)) target = caster;
    if (effect.condition && !checkCondition(effect.condition, caster)) return;
    if (effect.targetCondition && !checkCondition(effect.targetCondition, target)) return;
    if (effect.randomEffectRange) {
        ratio = (effect.randomEffectRange.max - effect.randomEffectRange.min + 1) / 6;
    }
    if (effect.timesPerBattle) {
        ratio = (ratio || 1) * effect.timesPerBattle / 5;
    }    
    if (effect.attackAura) {
        target.addAttackAura({ aura: effect.attackAura, effectRatio: ratio });
    }
    if (effect.mortalWounds) {
        const mortalWounds = getValue(effect.mortalWounds) * (ratio || 1);
        if (effect.targetRange) {
            stats.rangedDamage += mortalWounds;
        } else {
            stats.meleeDamage += mortalWounds;
        }
    }
}

export function checkCondition(condition: TargetCondition, target: UnitState) {
    if (condition.hasCharged && !target.hasCharged) return false;
    if (condition.hasMoved && !target.hasMoved) return false;
    if (condition.hasNotCharged && target.hasCharged) return false;
    if (condition.hasNotMoved && target.hasMoved) return false;
    if (condition.keyword && target.unit.keywords.indexOf(condition.keyword) < 0) return false;
    if (condition.minWounds && getValue(target.unit.wounds) < condition.minWounds) return false;
    return true;
}

function checkAttackCondition(condition: AttackCondition, attack: Attack) {
    if (condition.onlyMeleeAttacks && !attack.melee) return false;
    if (condition.onlyMissileAttacks && attack.melee) return false;
    return true;
}

export function targetEnemy(effect: AbilityEffect) {
    return effect.targetEnemy || effect.targetAura || effect.mortalWounds;
}

function computeModelStats(myState: UnitState, enemyState: UnitState, unit: Unit, model: UnitStatModel, stats: UnitStats) {
    let abilities = unit.abilities || [];
    let attacks = unit.attacks || [];
    for (const option of model.options) {
        if (option.abilities) abilities = abilities.concat(option.abilities)
        if (option.attacks) attacks = attacks.concat(option.attacks);
    }
    
    for (const ability of abilities) {
        if (ability.effects) {
            for (const effect of ability.effects) {
                applyEffect(myState, enemyState, effect, stats);
            }
        } else {
            if (stats.ignoredAbilities.find(x => x.name === ability.name) === undefined) {
                stats.ignoredAbilities.push(ability);
            }
        }
    }
    for (const attack of attacks) {
        const attackAura = myState.attackAura;
        if (attackAura.attackCondition && !checkAttackCondition(attackAura.attackCondition, attack)) continue;
        let numberOfAttacks = (getValue(attack.attacks) + getValue(attackAura.bonusAttacks)) * model.count;
        let toHit = getValue(attack.toHit) + getValue(attackAura.bonusHitRoll);
        let toWound = getValue(attack.toWound);
        let damage = getValue(attack.damage);
        let numberOfHitsOn6 = getValue(attackAura.numberOfHitsOn6);
        let numberOfHitsOnHit = 1 + getValue(attackAura.numberOfExtraHitsOnHit);
        let rerollHitsOn = getValue(attackAura.rerollHitsOn);
        let rend = getValue(attack.rend);
        let enemySave = getValue(enemyState.unit.save);
        let mortalWoundsOnHitIsUnmodifed6 = getValue(attackAura.mortalWoundsOnHitUnmodified6);
        let numberOfMortalWounds = getValue(attackAura.mortalWounds);
        let effectsOnHitUnmodified6 = attackAura.effectsOnHitUnmodified6 || [];
        let damageOnWoundUnmodified6 = getValue(attackAura.damageOnWoundUnmodified6);
        
        if (!toHit) continue;
        
        let numberOfHits = numberOfAttacks * (7 - toHit) / 6;
        if (effectsOnHitUnmodified6) {
            for (const effect of effectsOnHitUnmodified6) {
                applyEffect(myState, enemyState, effect, stats, numberOfAttacks * 1 / 6);
            }
        }

        if (mortalWoundsOnHitIsUnmodifed6) {
            numberOfHits -= numberOfAttacks * 1/6;
            numberOfMortalWounds += 1/6 * numberOfAttacks * mortalWoundsOnHitIsUnmodifed6;
        }

        if (rerollHitsOn) {
            numberOfHits *= rerollHitsOn / 6;
        }
        if (numberOfHitsOn6) {
            numberOfHits += 1 / 6 * (numberOfHitsOn6 - 1);
        }
        numberOfHits *= numberOfHitsOnHit;

        if (damageOnWoundUnmodified6 > 0) {
            damage = (damage * (6 - toWound) + damageOnWoundUnmodified6) / (7 - toWound);
        }
        let numberOfWounds = numberOfHits * (7 - toWound) / 6;
        numberOfMortalWounds += damage * ((enemySave - rend < 7) ? numberOfWounds * (enemySave - rend - 1) / 6 : numberOfWounds);
        if (attack.melee) {
            stats.meleeDamage += numberOfMortalWounds;
        } else {
            stats.rangedDamage += numberOfMortalWounds;
        }
    }
}

function computeUnitStats(stats: UnitStats, unit: Unit, models: UnitStatModel[]) {
    const myState = new UnitState(unit);
    const enemyState = new UnitState({ id: "enemy", model: { id: "enemy", name: "Enemy" }, size: 1, points: 0, wounds: 2, factions: [], keywords: [], save: 5 });

    for (const model of models) {
        computeModelStats(myState, enemyState, unit, model, stats);
    }
}

export function getUnitStats(unit: Unit): UnitStats[] {
    let modelStats = unit.modelStats;
    if (!modelStats) {
        if (unit.options && unit.options.length > 0) {
            modelStats = unit.options.filter(x => x.unitCategory === "main").map<UnitStatModels>(x => {
                return {
                    name: x.name,
                    models: [{ count: unit.size, options: [x] }]
                }
            });
        }
        else {
            modelStats = [{ name: "Main", models: [{ count: unit.size, options: [] }] }]
        }
    }

    return modelStats.map(x => {
        const result: UnitStats = {
            name: x.name,
            meleeDamage: 0,
            rangedDamage: 0,
            save: 0,
            savedWounds: 0,
            unit: unit,
            totalDamage: 0,
            ignoredAbilities: []
        };
        computeUnitStats(result, unit, x.models);
        result.totalDamage = result.meleeDamage * 1.5 + result.rangedDamage;
        return result;
    });
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
    allegiance: Allegiance;
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
}

export type ExtraAbilityTest = (unit: WarscrollUnitInterface, warscroll: WarscrollInterface) => boolean;

export interface ExtraAbility {
    id: string;
    ability: Ability;
    allegiance?: Allegiance;
    category: string;
    isAvailable: ExtraAbilityTest;
}

export interface ArmyOptions {
    name: string;
    values: string[];
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
    armyOptions: Map<string, ArmyOptions>;
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

        const battalions: { [key: string]: Battalion } = data.battalions;
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

        this.armyOptions = data.armyOptions;

        const sceneries: {[key: string]: Scenery} = data.sceneries;
        for (const key in sceneries) {
            this.sceneryList.push(sceneries[key]);
        }

        this.addAlliances(data);
    }

    getUnit(id: string) {
        return this.unitList.find(x => x.id === id);
    }

    getExtraAbility(id: string) {
        return this.extraAbilities.find(x => x.id === id);
    }

    private addAlliances(data: DataStoreImpl) {
    }
}