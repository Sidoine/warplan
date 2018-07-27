import { DataStoreImpl } from "./imported-data";
import { overrideStormcast } from "./overrides/stormcast";
import { getValue } from "./combat";
import { overrideNurgle } from "./overrides/nurgle";
import { overrideKhorne } from "./overrides/khorne";
import { overrideDevotedOfSigmar } from "./overrides/devoted-of-sigmar";
import { overrideWanderers } from "./overrides/wanderers";
import { overrideIdonethDeepkins } from "./overrides/idoneth-deepkins";
import { overrideEverchosen } from "./overrides/everchosen";

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

export interface AttackAura {
    bonusHitRoll?: Value;
    bonusAttacks?: Value;
    rerollHitsOn?: number;
    numberOfHitsOn6?: Value;
    numberOfHitsOnHit?: Value;
    targetCondition?: TargetCondition;
    attack?: Attack;
    onlyMeleeAttacks?: boolean;
    onlyMissileAttacks?: boolean;
    mortalWoundsOnHitUnmodified6?: Value;
    mortalWounds?: Value;
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

export interface UnitState {
    hasCharged: boolean;
    hasMoved: boolean;
    unit: Unit;
    attackAuras: AuraState<AttackAura>[];
    defenseAura: AuraState<DefenseAura>[];
    wounds: number;
}

export interface AbilityEffect {
    name?: string;

    attackAura?: AttackAura;
    defenseAura?: DefenseAura;
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

export type Value = number | string | DamageColumn | undefined;

export interface DamageTable {
    ranges: number[];
    columns: DamageColumn[];
}

export interface DamageColumn {
    name: string;
    values: Value[];
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

function applyEffect(caster: UnitState, target: UnitState, effect: AbilityEffect, stats: UnitStats) {
    if (effect.condition && !checkCondition(effect.condition, caster)) return;
    if (effect.targetCondition && !checkCondition(effect.targetCondition, target)) return;
    let ratio: number|undefined;
    if (effect.randomEffectRange) {
        ratio = (effect.randomEffectRange.max - effect.randomEffectRange.min + 1) / 6;
    }
    if (effect.timesPerBattle) {
        ratio = (ratio || 1) * effect.timesPerBattle / 5;
    }    
    if (effect.attackAura) {
        target.attackAuras.push({ aura: effect.attackAura, effectRatio: ratio });
    }
    if (effect.mortalWounds) {
        stats.rangedDamage += getValue(effect.mortalWounds) * (ratio || 1);
    }
}

function checkCondition(condition: TargetCondition, target: UnitState) {
    if (condition.hasCharged && !target.hasCharged) return false;
    if (condition.hasMoved && !target.hasMoved) return false;
    if (condition.hasNotCharged && target.hasCharged) return false;
    if (condition.hasNotMoved && target.hasMoved) return false;
    if (condition.keyword && target.unit.keywords.indexOf(condition.keyword) < 0) return false;
    if (condition.minWounds && getValue(target.unit.wounds) < condition.minWounds) return false;
    return true;
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
                if (effect.targetEnemy) {
                    applyEffect(myState, enemyState, effect, stats);
                } else {
                    applyEffect(myState, myState, effect, stats);
                }
            }
        } else {
            if (stats.ignoredAbilities.find(x => x.name === ability.name) === undefined) {
                stats.ignoredAbilities.push(ability);
            }
        }
    }
    for (const attack of attacks) {
        let numberOfAttacks = getValue(attack.attacks) * model.count;
        let toHit = getValue(attack.toHit);
        let toWound = getValue(attack.toWound);
        let numberOfHitsOn6 = 0;
        let numberOfHitsOnHit = 1;
        let rerollHitsOn = 0;
        let rend = getValue(attack.rend);
        let enemySave = getValue(enemyState.unit.save);
        let mortalWoundsOnHitIsUnmodifed6 = 0;
        let numberOfMortalWounds = 0;
        
        if (!toHit) continue;
        for (const auraState of myState.attackAuras) {
            const aura = auraState.aura;
            const ratio = auraState.effectRatio || 1;
            if (aura.targetCondition && !checkCondition(aura.targetCondition, enemyState)) continue;
            
            if (aura.onlyMeleeAttacks && !attack.melee) continue;
            if (aura.onlyMissileAttacks && attack.melee) continue;

            if (aura.bonusHitRoll) {
                toHit += getValue(aura.bonusHitRoll) * ratio;
            }
            if (aura.bonusAttacks) {
                numberOfAttacks += getValue(aura.bonusAttacks) * ratio;
            }
            if (aura.numberOfHitsOn6) {
                numberOfHitsOn6 += getValue(aura.numberOfHitsOn6) * ratio;
            }
            if (aura.numberOfHitsOnHit) {
                numberOfHitsOnHit = (getValue(aura.numberOfHitsOnHit) - 1) * ratio + 1;
            }
            if (aura.rerollHitsOn) {
                rerollHitsOn = aura.rerollHitsOn * ratio;
            }
            if (aura.mortalWoundsOnHitUnmodified6) {
                mortalWoundsOnHitIsUnmodifed6 += getValue(aura.mortalWoundsOnHitUnmodified6) * ratio;
            }
            if (aura.mortalWounds) {
                numberOfMortalWounds += getValue(aura.mortalWounds) * ratio;
            }
        }

        let numberOfHits = numberOfAttacks * (7 - toHit) / 6;
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

        let numberOfWounds = numberOfHits * (7 - toWound) / 6;
        numberOfMortalWounds += (enemySave - rend < 7) ? numberOfWounds * (enemySave - rend - 1) / 6 : numberOfWounds;
        if (attack.melee) {
            stats.meleeDamage += numberOfMortalWounds;
        } else {
            stats.rangedDamage += numberOfMortalWounds;
        }
    }
}

function computeUnitStats(stats: UnitStats, unit: Unit, models: UnitStatModel[]) {
    const myState: UnitState = {
        unit: unit,
        hasCharged: false,
        hasMoved: false,
        attackAuras: [],
        defenseAura: [],
        wounds: 0
    };
    const enemyState: UnitState = {
        hasCharged: false,
        hasMoved: false,
        attackAuras: [],
        defenseAura: [],
        unit: { id: "enemy", model: { id: "enemy", name: "Enemy" }, size: 1, points: 0, wounds: 2, factions: [], keywords: [], save: 5 },
        wounds: 0
    }

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