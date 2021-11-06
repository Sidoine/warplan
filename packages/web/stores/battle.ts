import { observable, action, computed, makeObservable } from "mobx";
import { UnitWarscroll, WarscrollItem } from "./warscroll";
import {
    Phase,
    AbilityEffect,
    Ability,
    Attack,
    AbilityCategory,
    Turn,
    ItemWithAbilities,
    SubPhase,
    TargetCondition,
    Faction,
    Value,
    isConditionValue,
    EffectDuration,
    AttackAura,
    Aura,
    AuraType,
    BattleshockAura,
    CommandAura,
    MovementAura,
    ChargeAura,
    SpellAura,
    ImmediateEffect,
    ValueAura,
    SpecialAura,
    DefenseAura,
    PrayerAura,
} from "../../common/data";
import { DataStore } from "./data";
import { ArmyList, ArmyListStore } from "./army-list";
import { getValueText } from "./combat";

export interface Player {
    name: string;
    armyList: ArmyList;
}

export const phases = [
    Phase.ArmyList,
    Phase.Any,
    Phase.Setup,
    Phase.Hero,
    Phase.Movement,
    Phase.Shooting,
    Phase.Charge,
    Phase.Combat,
    Phase.Battleshock,
];

export const enum EffectType {
    Buff,
    Debuff,
    Immediate,
    Unknown,
}

export interface AuraEntryDescription {
    text: string;
    type: EffectType;
}

export interface AuraDescription {
    descriptions: AuraEntryDescription[];
    condition?: string;
}

export function getTokenName(faction: Faction | null | undefined) {
    if (faction?.tokenName) return faction.tokenName;
    return "token";
}

function rangeDescription(
    inRangeOf: Exclude<TargetCondition["inRangeOf"], undefined>,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    return `${inRangeOf.range} of ${getEffectCondition(
        inRangeOf,
        unit,
        dataStore
    ).join(" and ")}`;
}

export function getEffectDurationName(duration: EffectDuration) {
    switch (duration) {
        case EffectDuration.Phase:
            return "phase";
        case EffectDuration.Turn:
            return "turn";
        case EffectDuration.Round:
            return "round";
    }
    return "⚠️";
}

export function hasAura(effect: AbilityEffect) {
    return effect.auras && effect.auras.length > 0;
}

export function getEffectCondition(
    condition: TargetCondition,
    unit: ItemWithAbilities,
    dataStore: DataStore
): string[] {
    const descriptions: string[] = [];
    if (condition.abilityId) {
        const ability = dataStore.getAbility(condition.abilityId);
        if (ability) {
            descriptions.push(ability.name);
        } else {
            descriptions.push(condition.abilityId);
        }
    }
    if (condition.allKeywords) {
        descriptions.push(condition.allKeywords.join(" and "));
    }
    if (condition.anyKeyword) {
        descriptions.push(condition.anyKeyword.join(" or "));
    }
    if (condition.hasCharged) {
        descriptions.push("has charged");
    }
    if (condition.hasMoved) {
        descriptions.push("has moved");
    }
    if (condition.hasNotCharged) {
        descriptions.push("has not charged");
    }
    if (condition.hasNotMoved) {
        descriptions.push("has not moved");
    }
    if (condition.inCover) {
        descriptions.push("in cover");
    }
    if (condition.inRangeOf) {
        descriptions.push(
            rangeDescription(condition.inRangeOf, unit, dataStore)
        );
    }
    if (condition.notInRangeOf) {
        descriptions.push(
            `not ${rangeDescription(condition.notInRangeOf, unit, dataStore)}`
        );
    }
    if (condition.keyword) {
        descriptions.push(condition.keyword);
    }
    if (condition.meleeWeapon) {
        descriptions.push("melee");
    }
    if (condition.minModels) {
        descriptions.push(
            `≥ ${getValueText(condition.minModels, unit, dataStore)} models`
        );
    }
    if (condition.hasArtefact) {
        descriptions.push("has artefact");
    }
    if (condition.slain) {
        descriptions.push("slain");
    }
    if (condition.minWounds) {
        descriptions.push(`≥ ${condition.minWounds} Wd`);
    }
    if (condition.maxWounds) {
        descriptions.push(`≤ ${condition.maxWounds} Wd`);
    }
    if (condition.noKeyword) {
        descriptions.push(`not ${condition.noKeyword}`);
    }
    if (condition.rangedWeapon) {
        descriptions.push("missile");
    }
    if (condition.weaponId) {
        const attack = dataStore.getAttack(condition.weaponId);
        if (attack?.name) {
            descriptions.push(attack.name);
        } else {
            descriptions.push(`⚠️ ${condition.weaponId}`);
        }
    }
    if (condition.hasGarrison) {
        descriptions.push("has garrison");
    }
    if (condition.visible) {
        descriptions.push("visible");
    }
    if (condition.hasNotMount) {
        descriptions.push("no mount");
    }
    if (condition.needBattleshockTest) {
        descriptions.push("need battleshock test");
    }
    if (condition.friendly) {
        descriptions.push("friendly");
    }
    if (condition.enemy) {
        descriptions.push("enemy");
    }
    if (condition.isInGarrison) {
        descriptions.push("in garrison");
    }
    if (condition.setup) {
        descriptions.push("setup");
    }
    if (descriptions.length === 0) {
        return [`⚠️ ${JSON.stringify(condition)}`];
    }
    return descriptions;
}

function getAttackAuraText(
    attackAura: AttackAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (attackAura.phase) {
        condition = attackAura.phase === Phase.Shooting ? "Missile" : "Melee";
    }
    if (attackAura.rerollHitsOn1) {
        descriptions.push({ text: "RR1 hit", type: EffectType.Buff });
    }
    if (attackAura.bonusRend) {
        descriptions.push({
            text: `+${attackAura.bonusRend} Rend`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.rerollFailedWounds) {
        descriptions.push({ text: "RR Wound", type: EffectType.Buff });
    }
    if (attackAura.bonusWoundRoll) {
        descriptions.push({
            text: `+${getValueText(
                attackAura.bonusWoundRoll,
                unit,
                dataStore
            )} Wound`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.rerollFailedHits) {
        descriptions.push({ text: "RR failed Hit", type: EffectType.Buff });
    }
    if (attackAura.malusHitRoll) {
        descriptions.push({
            text: `-${getValueText(
                attackAura.malusHitRoll,
                unit,
                dataStore
            )} Hit`,
            type: EffectType.Debuff,
        });
    }
    if (attackAura.noPileIn) {
        descriptions.push({ text: "No pile-in", type: EffectType.Debuff });
    }
    if (attackAura.bonusAttacks) {
        descriptions.push({
            text: `+${getValueText(
                attackAura.bonusAttacks,
                unit,
                dataStore
            )} Atk`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.bonusHitRoll) {
        descriptions.push({
            text: `+${getValueText(
                attackAura.bonusHitRoll,
                unit,
                dataStore
            )} Hit`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.rerollHits) {
        descriptions.push({ text: "RR Hit", type: EffectType.Buff });
    }
    if (attackAura.bonusDamageOnHitUnmodified6) {
        descriptions.push({
            text: `+${attackAura.bonusDamageOnHitUnmodified6} Dmg on 6 Hit`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.mortalWoundsOnHitUnmodified5) {
        descriptions.push({
            text: `${attackAura.mortalWoundsOnHitUnmodified5} MW on 5+ Hit`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.mortalWoundsOnHitUnmodified6) {
        descriptions.push({
            text: `${attackAura.mortalWoundsOnHitUnmodified6} MW on 6 Hit`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.bonusMortalWoundsOnHitUnmodified6) {
        descriptions.push({
            text: `+${attackAura.bonusMortalWoundsOnHitUnmodified6} MW on 6 Hit`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.attackId) {
        const attack = unit.attacks?.find((x) => x.id === attackAura?.attackId);
        if (attack) {
            descriptions.push({
                text: `Choose ${attack.name}`,
                type: EffectType.Buff,
            });
        }
    }
    if (attackAura.pileInEverywhere) {
        descriptions.push({
            text: "Pile-in everywhere",
            type: EffectType.Buff,
        });
    }
    if (attackAura.bonusPileInDistance) {
        descriptions.push({
            text: `+${getValueText(
                attackAura.bonusPileInDistance,
                unit,
                dataStore
            )} Pile-in`,
            type: EffectType.Buff,
        });
    }
    if (attackAura.malusPileInDistance) {
        descriptions.push({
            text: `-${getValueText(
                attackAura.malusPileInDistance,
                unit,
                dataStore
            )} Pile-in`,
            type: EffectType.Debuff,
        });
    }
    if (attackAura.pileInDistance) {
        descriptions.push({
            type: EffectType.Buff,
            text: `Pile-in ${getValueText(
                attackAura.pileInDistance,
                unit,
                dataStore
            )}`,
        });
    }
    if (attackAura.pileInWithFly) {
        descriptions.push({
            text: "Pile-in with Fly",
            type: EffectType.Buff,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `attackAura: ${JSON.stringify(attackAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

function getBattleshockAuraText(
    battleShockAura: BattleshockAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (battleShockAura.malusBravery) {
        descriptions.push({
            text: `${battleShockAura.malusBravery} Brav`,
            type: EffectType.Debuff,
        });
    }
    if (battleShockAura.emotionalTransference) {
        descriptions.push({
            text: "Transfered losses",
            type: EffectType.Debuff,
        });
    }
    if (battleShockAura.immune) {
        descriptions.push({
            text: `Battleshock immune`,
            type: EffectType.Buff,
        });
    }
    if (battleShockAura.bonusBravery) {
        descriptions.push({
            text: `+${battleShockAura.bonusBravery} Brav`,
            type: EffectType.Buff,
        });
    }
    if (battleShockAura.rerollFails) {
        descriptions.push({
            text: "RR battleshocks",
            type: EffectType.Buff,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `battleShockAura: ${JSON.stringify(battleShockAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

function getCommandAuraText(
    commandAura: CommandAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
): AuraDescription {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (commandAura.free) {
        descriptions.push({ text: "1 free command", type: EffectType.Buff });
    }
    if (commandAura.doublePrice) {
        descriptions.push({
            text: "CP cost ×2",
            type: EffectType.Debuff,
        });
    }
    if (commandAura.copyCommand) {
        descriptions.push({
            text: "Copy command",
            type: EffectType.Buff,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `commandAura: ${JSON.stringify(commandAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

function getDefenseAuraText(
    defenseAura: DefenseAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (defenseAura.rerollFailedSaves) {
        descriptions.push({ text: "RR Save", type: EffectType.Buff });
    }
    if (defenseAura.bonusSave) {
        descriptions.push({
            text: `+${getValueText(
                defenseAura.bonusSave,
                unit,
                dataStore
            )} Save`,
            type: EffectType.Buff,
        });
    }
    if (defenseAura.rerollSavesOn1) {
        descriptions.push({ text: "RR1 Save", type: EffectType.Buff });
    }
    if (defenseAura.rerollHitOn1) {
        descriptions.push({
            text: "RR1 Enemy Hit",
            type: EffectType.Debuff,
        });
    }
    if (defenseAura.rerollHitOn6) {
        descriptions.push({
            text: "RR6 Enemy Hit",
            type: EffectType.Debuff,
        });
    }
    if (defenseAura.healOnSave7) {
        descriptions.push({
            text: `Save 7+: ${defenseAura.healOnSave7} heal`,
            type: EffectType.Buff,
        });
    }
    if (defenseAura.bonusHitRoll) {
        descriptions.push({
            text: `+${defenseAura.bonusHitRoll} Enemy Hit`,
            type: EffectType.Debuff,
        });
    }
    if (defenseAura.bonusWoundRoll) {
        descriptions.push({
            text: `+${defenseAura.bonusWoundRoll} Enemy Wound`,
            type: EffectType.Debuff,
        });
    }
    if (defenseAura.malusHitRoll) {
        descriptions.push({
            text: `-${defenseAura.malusHitRoll} Enemy Hit`,
            type: EffectType.Buff,
        });
    }
    if (defenseAura.negateWoundsOrMortalWoundsOn5) {
        descriptions.push({ text: "5+ ward", type: EffectType.Buff });
    }
    if (defenseAura.phase) {
        condition =
            defenseAura.phase === Phase.Shooting
                ? "Shooting"
                : defenseAura.phase === Phase.Combat
                ? "Melee"
                : undefined;
    }
    if (defenseAura.garrisoned) {
        descriptions.push({ text: "Garrisoned", type: EffectType.Buff });
    }
    if (defenseAura.ignoreRendOfMinus1) {
        descriptions.push({
            text: "Ignore -1 Rend",
            type: EffectType.Buff,
        });
    }
    if (defenseAura.guardianOn2) {
        descriptions.push({ text: "2+ Guardian", type: EffectType.Buff });
    }
    if (defenseAura.visibleToCasterUnit) {
        descriptions.push({
            text: addCondition(
                "visible to caster unit",
                defenseAura.visibleToCasterUnit,
                unit,
                dataStore
            ),
            type: EffectType.Debuff,
        });
    }
    if (defenseAura.ignoreSpellOn4) {
        descriptions.push({
            text: "4+ Ignore Spell",
            type: EffectType.Buff,
        });
    }
    if (defenseAura.rerollHits) {
        descriptions.push({
            text: "RR Enemy Hits",
            type: EffectType.Debuff,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `defenseAura: ${JSON.stringify(defenseAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

function getMovementAuraText(
    movementAura: MovementAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (movementAura.allowChargeAfterRunOrRetreat) {
        descriptions.push({
            text: "Charge after Run/Retreat",
            type: EffectType.Buff,
        });
    }
    if (movementAura.doubleMove) {
        descriptions.push({ text: "Move ×2", type: EffectType.Buff });
    }
    if (movementAura.fly) {
        descriptions.push({ text: "Fly", type: EffectType.Buff });
    }
    if (movementAura.cannotRun) {
        descriptions.push({ text: "Cannot Run", type: EffectType.Debuff });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `movementAura: ${JSON.stringify(movementAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

export function getChargeAuraText(
    chargeAura: ChargeAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (chargeAura.bonus) {
        descriptions.push({
            text: `+${chargeAura.bonus} Charge`,
            type: EffectType.Buff,
        });
    }
    if (chargeAura.canChargeAfterRetreat) {
        descriptions.push({
            text: "Charge after Retreat",
            type: EffectType.Buff,
        });
    }
    if (chargeAura.cannotCharge) {
        descriptions.push({
            text: "Cannot Charge",
            type: EffectType.Debuff,
        });
    }
    if (chargeAura.rerollCharge) {
        descriptions.push({
            text: "RR charge",
            type: EffectType.Buff,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `ChargeAura: ${JSON.stringify(chargeAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

function getSpellAuraText(
    spellAura: SpellAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (spellAura.noCast) {
        descriptions.push({ text: "No cast", type: EffectType.Debuff });
    }
    if (spellAura.rerollFailedCast) {
        descriptions.push({
            text: "RR failed cast",
            type: EffectType.Buff,
        });
    }
    if (spellAura.rerollDispell) {
        descriptions.push({ text: "RR dispell", type: EffectType.Buff });
    }
    if (spellAura.rerollUnbind) {
        descriptions.push({ text: "RR unbind", type: EffectType.Buff });
    }
    if (spellAura.autoCast) {
        descriptions.push({ text: "Auto-cast 9", type: EffectType.Buff });
    }
    if (spellAura.malusToAll) {
        descriptions.push({
            text: `-${spellAura.malusToAll} to spell/unbind/dispell`,
            type: EffectType.Debuff,
        });
    }
    if (spellAura.extraCast) {
        descriptions.push({
            text: `+${spellAura.extraCast} extra cast`,
            type: EffectType.Buff,
        });
    }

    if (descriptions.length === 0) {
        descriptions.push({
            text: `SpellAura: ${JSON.stringify(spellAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

function getSpecialAuraText(
    specialAura: SpecialAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (specialAura.absorbDespair) {
        descriptions.push({
            text: "-1 Brav transfered to enemy",
            type: EffectType.Immediate,
        });
    }
    if (specialAura.darknessOfSoul) {
        descriptions.push({
            text: "No action on 2D6>Brv",
            type: EffectType.Buff,
        });
    }
    if (specialAura.pickTwoUnitsInCombat) {
        descriptions.push({
            text: "Pick 2 units (excl. strike 1st/last)",
            type: EffectType.Buff,
        });
    }
    if (specialAura.blockVisibility) {
        descriptions.push({
            text: "Block visibility",
            type: EffectType.Buff,
        });
    }
    if (specialAura.tectonicForce) {
        descriptions.push({
            text: 'Must move 2", >1" away',
            type: EffectType.Debuff,
        });
    }
    if (specialAura.loneAgent) {
        descriptions.push({
            text: 'Can be setup before first round, out of your territory, >3" from enemy units',
            type: EffectType.Immediate,
        });
        descriptions.push({
            text: "Objective taken on setup is kept while on it",
            type: EffectType.Buff,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `specialAura: ${JSON.stringify(specialAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

function getValueAuraText(
    valueAura: ValueAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (valueAura.ignoreWounds) {
        descriptions.push({
            text: "Wds table: use 0 Wd",
            type: EffectType.Buff,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `valueAura: ${JSON.stringify(valueAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

function getPrayerAuraText(
    prayerAura: PrayerAura,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (prayerAura.bonusToChant) {
        descriptions.push({
            text: `+${prayerAura.bonusToChant} to Chant`,
            type: EffectType.Buff,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: `valueAura: ${JSON.stringify(prayerAura)}`,
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

export function getAuraText(
    aura: Aura | ImmediateEffect,
    unit: ItemWithAbilities,
    dataStore: DataStore
): AuraDescription {
    switch (aura.type) {
        case undefined:
            return getImmediateText(aura, unit, dataStore);
        case AuraType.Attack:
            return getAttackAuraText(aura, unit, dataStore);
        case AuraType.Battleshock:
            return getBattleshockAuraText(aura, unit, dataStore);
        case AuraType.Charge:
            return getChargeAuraText(aura, unit, dataStore);
        case AuraType.Command:
            return getCommandAuraText(aura, unit, dataStore);
        case AuraType.Defense:
            return getDefenseAuraText(aura, unit, dataStore);
        case AuraType.Movement:
            return getMovementAuraText(aura, unit, dataStore);
        case AuraType.Prayer:
            return getPrayerAuraText(aura, unit, dataStore);
        case AuraType.Special:
            return getSpecialAuraText(aura, unit, dataStore);
        case AuraType.Spell:
            return getSpellAuraText(aura, unit, dataStore);
        case AuraType.Value:
            return getValueAuraText(aura, unit, dataStore);
    }
    return {
        descriptions: [
            {
                text: `Unknown aura type`,
                type: EffectType.Unknown,
            },
        ],
        condition: undefined,
    };
}

function getImmediateText(
    immediate: ImmediateEffect,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    const descriptions: AuraEntryDescription[] = [];
    let condition: string | undefined;
    if (immediate.mortalWounds) {
        descriptions.push({
            text: `${getValueText(immediate.mortalWounds, unit, dataStore)} MW`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.mortalWoundsPerWound) {
        descriptions.push({
            text: `${getValueText(
                immediate.mortalWoundsPerWound,
                unit,
                dataStore
            )} MW/Wd`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.mortalWoundsPerModel) {
        descriptions.push({
            text: `${immediate.mortalWoundsPerModel} MW/model`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.mortalWoundsPerChargeRoll) {
        descriptions.push({
            text: `${immediate.mortalWoundsPerChargeRoll} MW/charge roll`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.allowInclusion) {
        descriptions.push({ text: "1 per unit", type: EffectType.Immediate });
    }
    if (immediate.gainCommandPoints) {
        descriptions.push({
            text: `${immediate.gainCommandPoints} CP`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.setup) {
        descriptions.push({ text: "Setup", type: EffectType.Immediate });
    }
    if (immediate.pileInMove) {
        descriptions.push({
            text: `${immediate.pileInMove} Pile-in move`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.heal) {
        descriptions.push({
            text: `Heal ${immediate.heal} Wd`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.rerollSpellcast) {
        descriptions.push({
            text: "RR cast",
            type: EffectType.Immediate,
        });
    }
    if (immediate.rerollDispell) {
        descriptions.push({
            text: "RR dispell",
            type: EffectType.Immediate,
        });
    }
    if (immediate.rerollUnbind) {
        descriptions.push({
            text: "RR unbind",
            type: EffectType.Immediate,
        });
    }
    if (immediate.bonusSpellcast) {
        descriptions.push({
            text: `+${immediate.bonusSpellcast} cast`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.normalMove) {
        descriptions.push({
            text: `${immediate.normalMove} normal move`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.casts) {
        descriptions.push({
            text: `${immediate.casts} casts`,
            type: EffectType.Immediate,
        });
    }
    if (immediate.unbinds) {
        descriptions.push({
            text: `${immediate.unbinds} unbinds`,
            type: EffectType.Immediate,
        });
    }
    if (descriptions.length === 0) {
        descriptions.push({
            text: JSON.stringify(immediate),
            type: EffectType.Unknown,
        });
    }
    return { descriptions, condition };
}

export function getEffectText(
    effect: AbilityEffect,
    unit: ItemWithAbilities,
    dataStore: DataStore
) {
    if (effect.noEffect) {
        return [];
    }
    const descriptions: AuraDescription[] = [];

    if (effect.immediate) {
        descriptions.push(getImmediateText(effect.immediate, unit, dataStore));
    }

    if (effect.auras) {
        for (const aura of effect.auras) {
            descriptions.push(getAuraText(aura, unit, dataStore));
        }
    }

    if (descriptions.length === 0) {
        descriptions.push({
            descriptions: [
                {
                    text: JSON.stringify(effect),
                    type: EffectType.Unknown,
                },
            ],
        });
    }
    return descriptions;
}

export function getPhaseName(phase: Phase) {
    switch (phase) {
        case Phase.ArmyList:
            return "Choose army";
        case Phase.Any:
            return "Any";
        case Phase.Setup:
            return "Setup";
        case Phase.Hero:
            return "Hero";
        case Phase.Movement:
            return "Movement";
        case Phase.Shooting:
            return "Shooting";
        case Phase.Charge:
            return "Charge";
        case Phase.Combat:
            return "Combat";
        case Phase.Battleshock:
            return "Battleshock";
    }
    return "Battle";
}

export function getShortPhaseName(phase: Phase) {
    switch (phase) {
        case Phase.ArmyList:
            return "Choose army";
        case Phase.Any:
            return "Any";
        case Phase.Setup:
            return "Setup";
        case Phase.Hero:
            return "Hr";
        case Phase.Movement:
            return "Mv";
        case Phase.Shooting:
            return "Sh";
        case Phase.Charge:
            return "Ch";
        case Phase.Combat:
            return "Cb";
        case Phase.Battleshock:
            return "Bs";
    }
    return "Battle";
}

export function getPhaseSideName(side: Turn) {
    switch (side) {
        case Turn.Your:
            return "Your turn";
        case Turn.Opponent:
            return "Enemy's turn";
    }
    return "";
}

export function getSubPhaseName(subPhase: SubPhase) {
    switch (subPhase) {
        case SubPhase.After:
            return "end of ";
        case SubPhase.Before:
            return "start of ";
    }
    return "";
}

export function getSubPhaseFullName(subPhase: SubPhase) {
    switch (subPhase) {
        case SubPhase.After:
            return "End of phase";
        case SubPhase.Before:
            return "Start of phase";
        case SubPhase.While:
            return "During phase";
        case SubPhase.WhileAfter:
            return "After each activation";
        case SubPhase.WhileBefore:
            return "Before each activation";
    }
    return "";
}

export function getEffectPhases(effect: AbilityEffect) {
    let phase = 0;
    if (effect.auras) {
        for (const aura of effect.auras) {
            if (aura.type === AuraType.Defense) {
                if (aura.phase) phase |= aura.phase;
                else phase |= Phase.Combat | Phase.Shooting;
            }
            if (aura.type === AuraType.Attack) {
                if (aura.phase) phase |= aura.phase;
                else phase |= Phase.Combat | Phase.Shooting;
            }
            if (aura.type === AuraType.Value || aura.type === AuraType.Special)
                phase |= Phase.AnyInGame;
            if (
                aura.type === AuraType.Command ||
                aura.type === AuraType.Spell ||
                aura.type === AuraType.Prayer
            )
                phase |= Phase.Hero;
            if (aura.type === AuraType.Movement) phase |= Phase.Movement;
            if (aura.type === AuraType.Charge) phase |= Phase.Charge;
            if (aura.type === AuraType.Battleshock) phase |= Phase.Battleshock;
        }
    }

    return phase;
}

export function getAbilityPhases(ability: Ability) {
    let phase = 0;
    if (
        ability.category === AbilityCategory.Prayer ||
        ability.category === AbilityCategory.Spell
    )
        phase |= Phase.Hero;
    if (ability.effects) {
        for (const effect of ability.effects) {
            if (effect.phase) phase |= effect.phase;
        }
    }
    return phase;
}

export function isEffectInPhase(
    unit: ItemWithAbilities,
    effect: AbilityEffect,
    side: Turn,
    phase: Phase,
    subPhase?: SubPhase
) {
    if (
        (effect.side === undefined || effect.side === side) &&
        effect.phase === phase &&
        (subPhase === undefined || effect.subPhase === subPhase)
    ) {
        return true;
    }

    if (subPhase !== undefined && subPhase !== SubPhase.While) return false;

    return (getEffectPhases(effect) & phase) > 0;
}

export function isAbilityInPhase(
    unit: ItemWithAbilities,
    ability: Ability,
    side: Turn,
    phase: Phase,
    subPhase?: SubPhase
) {
    if (
        (ability.category === AbilityCategory.Spell ||
            ability.category === AbilityCategory.Prayer) &&
        (phase === Phase.Hero || phase === undefined) &&
        side === Turn.Your &&
        (subPhase === SubPhase.While || subPhase === undefined)
    )
        return true;

    if (ability.effects) {
        for (const effect of ability.effects) {
            if (isEffectInPhase(unit, effect, side, phase, subPhase))
                return true;
        }
    }
    return false;
}

export function isAttackInPhase(
    attack: Attack,
    phase: Phase,
    subPhase: SubPhase
) {
    if (
        phase === Phase.Shooting &&
        subPhase === SubPhase.While &&
        !attack.melee
    )
        return true;
    if (phase === Phase.Combat && subPhase === SubPhase.While && attack.melee)
        return true;
    return false;
}

export function isUnitInPhase(
    unit: WarscrollItem,
    side: Turn,
    phase: Phase,
    subPhase: SubPhase
) {
    if (subPhase === SubPhase.While) {
        if (
            (phase === Phase.Movement || phase === Phase.Battleshock) &&
            unit.type === "unit"
        )
            return true;
        if (
            phase === Phase.Shooting &&
            unit.type === "unit" &&
            unit.attacks?.some((x) => !x.melee)
        ) {
            return true;
        }
        if (
            phase === Phase.Combat &&
            unit.type === "unit" &&
            unit.attacks?.some((x) => x.melee)
        ) {
            return true;
        }
    }
    if (
        unit.abilities.some((x) =>
            isAbilityInPhase(unit, x, side, phase, subPhase)
        )
    )
        return true;
    return false;
}

interface BattleSerialized {
    phase: Phase;
    side: Turn;
    subPhase: SubPhase;
    armyListId?: string;
}

export class BattleStore {
    @observable turn = 0;

    @observable phase: Phase = 0;
    @observable side: Turn = Turn.None;
    @observable subPhase: SubPhase = SubPhase.Before;

    @observable player: Player | null = null;

    @observable checkedArmyAbilityIds: string[] = [];
    @observable checkedAbilities = new Map<string, string[]>();
    @observable skippedUnits = new Map<string, boolean>();

    constructor(
        public dataStore: DataStore,
        private armyListStore: ArmyListStore
    ) {
        makeObservable(this);
        const serialized = localStorage.getItem("battle");
        if (serialized) {
            this.deserialize(JSON.parse(serialized) as BattleSerialized);
        }
    }

    private serialize(): BattleSerialized {
        return {
            phase: this.phase,
            side: this.side,
            subPhase: this.subPhase,
            armyListId: this.player?.armyList.id,
        };
    }

    private save() {
        localStorage.setItem("battle", JSON.stringify(this.serialize()));
    }

    @action
    private deserialize(serialized: BattleSerialized) {
        if (serialized.armyListId) {
            this.phase = serialized.phase;
            this.side = serialized.side;
            this.subPhase = serialized.subPhase;
            const armyList = this.armyListStore.armyList;
            this.player = {
                name: armyList.name,
                armyList,
            };
        }
    }

    @computed
    get units() {
        return (
            this.player?.armyList.units.filter((x) =>
                isUnitInPhase(x, this.side, this.phase, this.subPhase)
            ) || []
        );
    }

    @computed private get allArmyAbilities() {
        if (!this.player) return [];
        // const w = this.player.armyList;
        // for (const group of this.dataStore.baseAbilities) {
        //     result = result.concat(group.abilities);
        // }
        // result = result.concat(w.abilities);
        // return result;
        return this.player.armyList.abilities;
    }

    @computed get armyAbilities() {
        return this.allArmyAbilities.filter((x) =>
            isAbilityInPhase(
                this.armyListStore.armyList,
                x,
                this.side,
                this.phase,
                this.subPhase
            )
        );
    }

    @computed get uncheckedArmyAbilities() {
        return this.armyAbilities.filter((x) => !this.isArmyAbilityChecked(x));
    }
    @computed get checkedArmyAbilities() {
        return this.armyAbilities.filter((x) => this.isArmyAbilityChecked(x));
    }

    @computed get numberOfUncheckedUnitsOrArmyAbilities() {
        return (
            this.armyAbilities.length -
            this.checkedArmyAbilities.length +
            this.units.reduce((p, c) => p + (this.isUnitHidden(c) ? 0 : 1), 0)
        );
    }

    @action
    start(warscroll: ArmyList) {
        this.player = {
            name: "Player",
            armyList: warscroll,
        };
        this.phase = Phase.Setup;
        this.side = Turn.Your;
        this.checkedAbilities.clear();
        this.save();
    }

    @action
    toggleSide = () => {
        this.side = this.side === Turn.Your ? Turn.Opponent : Turn.Your;
        this.save();
    };

    @computed
    get nextPhase() {
        switch (this.phase) {
            case Phase.Setup:
                return Phase.Hero;
            case Phase.Hero:
                return Phase.Movement;
            case Phase.Movement:
                return Phase.Shooting;
            case Phase.Shooting:
                return Phase.Charge;
            case Phase.Charge:
                return Phase.Combat;
            case Phase.Combat:
                return Phase.Battleshock;
            case Phase.Battleshock:
                return Phase.Hero;
        }
        return Phase.Setup;
    }

    next = () => {
        switch (this.subPhase) {
            case SubPhase.Before:
                this.goToPhase(this.side, this.phase, SubPhase.While);
                break;
            case SubPhase.While:
                this.goToPhase(this.side, this.phase, SubPhase.After);
                break;
            case SubPhase.After:
                if (this.phase === Phase.Battleshock) {
                    this.goToPhase(
                        this.side === Turn.Your ? Turn.Opponent : Turn.Your,
                        Phase.Hero,
                        SubPhase.Before
                    );
                } else {
                    this.goToPhase(this.side, this.nextPhase, SubPhase.Before);
                }
                break;
        }
    };

    previous = () => {
        switch (this.subPhase) {
            case SubPhase.Before:
                if (this.phase === Phase.Hero)
                    this.goToPhase(
                        this.side === Turn.Your ? Turn.Opponent : Turn.Your,
                        Phase.Battleshock,
                        SubPhase.After
                    );
                else
                    this.goToPhase(
                        this.side,
                        this.previousPhase,
                        SubPhase.After
                    );
                break;
            case SubPhase.While:
                this.goToPhase(this.side, this.phase, SubPhase.Before);
                break;
            case SubPhase.After:
                this.goToPhase(this.side, this.phase, SubPhase.While);
                break;
        }
    };

    @action private goToPhase(side: Turn, phase: Phase, subPhase: SubPhase) {
        this.checkedAbilities.clear();
        this.skippedUnits.clear();
        this.checkedArmyAbilityIds.splice(0);
        this.phase = phase;
        this.subPhase = subPhase;
        this.side = side;
        this.save();
    }

    @action
    toggleArmyAbility(ability: Ability) {
        const checked = this.checkedArmyAbilityIds;
        const index = checked.indexOf(ability.id);
        if (index < 0) checked.push(ability.id);
        else checked.splice(index, 1);
    }

    @action
    toggleUnitAbility(unit: UnitWarscroll, ability: Ability) {
        const checked = this.checkedAbilities.get(unit.id) || [];
        const index = checked.indexOf(ability.id);
        if (index < 0) checked.push(ability.id);
        else checked.splice(index, 1);
        this.checkedAbilities.set(unit.id, checked);
    }

    @action
    toggleSkippedUnit(unit: UnitWarscroll) {
        this.skippedUnits.set(
            unit.id,
            !(this.skippedUnits.get(unit.id) || false)
        );
    }

    private isUnitChecked(unit: UnitWarscroll) {
        const unitAbilities = this.checkedAbilities.get(unit.id);
        if (!unitAbilities) return false;
        return unit.abilities.every(
            (x) =>
                unitAbilities.includes(x.id) ||
                !isAbilityInPhase(unit, x, this.side, this.phase, this.subPhase)
        );
    }

    isUnitSkipped(unit: UnitWarscroll) {
        return this.skippedUnits.get(unit.id) || false;
    }

    isUnitHidden(unit: UnitWarscroll) {
        return this.isUnitSkipped(unit) || this.isUnitChecked(unit);
    }

    isArmyAbilityChecked(ability: Ability) {
        return this.checkedArmyAbilityIds.includes(ability.id);
    }

    isUnitAbilityChecked(unit: UnitWarscroll, ability: Ability) {
        return (
            this.checkedAbilities.get(unit.id)?.includes(ability.id) ?? false
        );
    }

    @computed
    get previousPhase() {
        switch (this.phase) {
            case Phase.Hero:
                return Phase.Battleshock;
            case Phase.Movement:
                return Phase.Hero;
            case Phase.Shooting:
                return Phase.Movement;
            case Phase.Charge:
                return Phase.Shooting;
            case Phase.Combat:
                return Phase.Charge;
            case Phase.Battleshock:
                return Phase.Combat;
        }
        return Phase.Setup;
    }
}
function addCondition(
    text: string,
    condition: Value,
    item: ItemWithAbilities,
    dataStore: DataStore
): string {
    if (condition === 0) return `not ${text}`;
    if (condition === 1) return text;
    if (isConditionValue(condition)) {
        return `${text} if ${getEffectCondition(
            condition.condition,
            item,
            dataStore
        )}`;
    }
    return `${text} ⚠️`;
}
