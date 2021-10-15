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
} from "../../common/data";
import { DataStore } from "./data";
import { ArmyList, ArmyListStore } from "./army-list";
import { getValue } from "./combat";

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

export interface EffectDescription {
    text: string;
    type: EffectType;
}

export function getTokenName(faction: Faction | null | undefined) {
    if (faction?.tokenName) return faction.tokenName;
    return "token";
}

export function getEffectCondition(
    condition: TargetCondition,
    unit: ItemWithAbilities
): string[] {
    const descriptions: string[] = [];
    if (condition.abilityId) {
        const ability = unit.abilities.find(
            (a) => a.id === condition.abilityId
        );
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
            `${condition.inRangeOf.range}" of ${
                condition.inRangeOf.friendly ? "friendly" : "enemy"
            } ${
                condition.inRangeOf.keyword
                    ? condition.inRangeOf.keyword.join(" and ")
                    : ""
            } `
        );
    }
    if (condition.keyword) {
        descriptions.push(condition.keyword);
    }
    if (condition.meleeWeapon) {
        descriptions.push("melee");
    }
    if (condition.minModels) {
        descriptions.push(`≥ ${getValue(condition.minModels)} models `);
    }
    if (condition.minWounds) {
        descriptions.push(`≥ ${condition.minWounds} Wd `);
    }
    if (condition.noKeyword) {
        descriptions.push(`not ${condition.noKeyword}`);
    }
    if (condition.rangedWeapon) {
        descriptions.push("missile");
    }
    if (condition.weaponId) {
        const attack = unit.attacks?.find(
            (x) => x.attack.id === condition.weaponId
        );
        if (attack?.attack.name) {
            descriptions.push(attack.attack.name);
        } else {
            descriptions.push(condition.weaponId);
        }
    }
    if (descriptions.length === 0) {
        return [`⚠️ ${JSON.stringify(condition)}`];
    }
    return descriptions;
}

export function getEffectText(
    effect: AbilityEffect,
    unit: ItemWithAbilities
): [condition: string | undefined, descriptions: EffectDescription[]] {
    if (effect.noEffect) {
        return ["", []];
    }
    const descriptions: EffectDescription[] = [];
    let condition: string | undefined;
    if (effect.attackAura) {
        // if (effect.attackAura.phase) {
        //     condition =
        //         effect.attackAura.phase === Phase.Shooting
        //             ? "Shooting"
        //             : "Combat";
        // }
        if (effect.attackAura.rerollHitsOn1) {
            descriptions.push({ text: "RR1 hit", type: EffectType.Buff });
        }
        if (effect.attackAura.bonusRend) {
            descriptions.push({
                text: `+${effect.attackAura.bonusRend} Rend`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.rerollFailedWounds) {
            descriptions.push({ text: "RR Wound", type: EffectType.Buff });
        }
        if (effect.attackAura.bonusWoundRoll) {
            descriptions.push({
                text: `+${getValue(effect.attackAura.bonusWoundRoll)} Wound`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.rerollFailedHits) {
            descriptions.push({ text: "RR failed Hit", type: EffectType.Buff });
        }
        if (effect.attackAura.malusHitRoll) {
            descriptions.push({
                text: `-${getValue(effect.attackAura.malusHitRoll)} Hit`,
                type: EffectType.Debuff,
            });
        }
        if (effect.attackAura.noPileIn) {
            descriptions.push({ text: "No pile-in", type: EffectType.Debuff });
        }
        if (effect.attackAura.bonusAttacks) {
            descriptions.push({
                text: `+${effect.attackAura.bonusAttacks} Atk`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.bonusHitRoll) {
            descriptions.push({
                text: `+${getValue(effect.attackAura.bonusHitRoll)} Hit`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.rerollHits) {
            descriptions.push({ text: "RR Hit", type: EffectType.Buff });
        }
        if (effect.attackAura.bonusDamageOnHitUnmodified6) {
            descriptions.push({
                text: `+${effect.attackAura.bonusDamageOnHitUnmodified6} Dmg on 6 Hit`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.mortalWoundsOnHitUnmodified5) {
            descriptions.push({
                text: `${effect.attackAura.mortalWoundsOnHitUnmodified5} MW on 5+ Hit`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.mortalWoundsOnHitUnmodified6) {
            descriptions.push({
                text: `${effect.attackAura.mortalWoundsOnHitUnmodified6} MW on 6 Hit`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.bonusMortalWoundsOnHitUnmodified6) {
            descriptions.push({
                text: `+${effect.attackAura.bonusMortalWoundsOnHitUnmodified6} MW on 6 Hit`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.attackId) {
            const attack = unit.attacks?.find(
                (x) => x.attack.id === effect.attackAura?.attackId
            );
            if (attack) {
                descriptions.push({
                    text: `Choose ${attack.attack.name}`,
                    type: EffectType.Buff,
                });
            }
        }
        if (effect.attackAura.pileInEverywhere) {
            descriptions.push({
                text: "Pile-in everywhere",
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.bonusPileInDistance) {
            descriptions.push({
                text: `+${getValue(
                    effect.attackAura.bonusPileInDistance
                )} Pile-in`,
                type: EffectType.Buff,
            });
        }
        if (effect.attackAura.pileInWithFly) {
            descriptions.push({
                text: "Pile-in with Fly",
                type: EffectType.Buff,
            });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: `attackAura: ${JSON.stringify(effect.attackAura)}`,
                type: EffectType.Unknown,
            });
        }
    }
    if (effect.battleShockAura) {
        if (effect.battleShockAura.malusBravery) {
            descriptions.push({
                text: `${effect.battleShockAura.malusBravery} Brav`,
                type: EffectType.Debuff,
            });
        }
        if (effect.battleShockAura.emotionalTransference) {
            descriptions.push({
                text: "Transfered losses",
                type: EffectType.Debuff,
            });
        }
        if (effect.battleShockAura.immune) {
            descriptions.push({
                text: `Battleshock immune`,
                type: EffectType.Buff,
            });
        }
        if (effect.battleShockAura.bonusBravery) {
            descriptions.push({
                text: `+${effect.battleShockAura.bonusBravery} Brav`,
                type: EffectType.Buff,
            });
        }
        if (effect.battleShockAura.rerollFails) {
            descriptions.push({
                text: "RR battleshocks",
                type: EffectType.Buff,
            });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: `battleShockAura: ${JSON.stringify(
                    effect.battleShockAura
                )}`,
                type: EffectType.Unknown,
            });
        }
    }
    if (effect.commandAura) {
        if (effect.commandAura.free) {
            descriptions.push({ text: "Free command", type: EffectType.Buff });
        }
        if (effect.commandAura.doublePrice) {
            descriptions.push({
                text: "CP cost ×2",
                type: EffectType.Debuff,
            });
        }
        if (effect.commandAura.copyCommand) {
            descriptions.push({
                text: "Copy command",
                type: EffectType.Buff,
            });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: `commandAura: ${JSON.stringify(effect.commandAura)}`,
                type: EffectType.Unknown,
            });
        }
    }
    if (effect.defenseAura) {
        if (effect.defenseAura.rerollFailedSaves) {
            descriptions.push({ text: "RR Save", type: EffectType.Buff });
        }
        if (effect.defenseAura.bonusSave) {
            descriptions.push({
                text: `+${effect.defenseAura.bonusSave} Save`,
                type: EffectType.Buff,
            });
        }
        if (effect.defenseAura.rerollSavesOn1) {
            descriptions.push({ text: "RR1 Save", type: EffectType.Buff });
        }
        if (effect.defenseAura.rerollHitOn1) {
            descriptions.push({
                text: "RR1 Enemy Hit",
                type: EffectType.Debuff,
            });
        }
        if (effect.defenseAura.rerollHitOn6) {
            descriptions.push({
                text: "RR6 Enemy Hit",
                type: EffectType.Debuff,
            });
        }
        if (effect.defenseAura.healOnSave7) {
            descriptions.push({
                text: `Save 7+: ${effect.defenseAura.healOnSave7} heal`,
                type: EffectType.Buff,
            });
        }
        if (effect.defenseAura.bonusHitRoll) {
            descriptions.push({
                text: `+${effect.defenseAura.bonusHitRoll} Enemy Hit`,
                type: EffectType.Debuff,
            });
        }
        if (effect.defenseAura.bonusWoundRoll) {
            descriptions.push({
                text: `+${effect.defenseAura.bonusWoundRoll} Enemy Wound`,
                type: EffectType.Debuff,
            });
        }
        if (effect.defenseAura.malusHitRoll) {
            descriptions.push({
                text: `-${effect.defenseAura.malusHitRoll} Enemy Hit`,
                type: EffectType.Buff,
            });
        }
        if (effect.defenseAura.negateWoundsOrMortalWoundsOn5) {
            descriptions.push({ text: "5+ ward", type: EffectType.Buff });
        }
        if (effect.defenseAura.phase) {
            condition =
                effect.defenseAura.phase === Phase.Shooting
                    ? "Shooting"
                    : "Combat";
        }
        if (effect.defenseAura.garrisoned) {
            descriptions.push({ text: "Garrisoned", type: EffectType.Buff });
        }
        if (effect.defenseAura.ignoreRendOfMinus1) {
            descriptions.push({
                text: "Ignore -1 Rend",
                type: EffectType.Buff,
            });
        }
        if (effect.defenseAura.guardianOn2) {
            descriptions.push({ text: "2+ Guardian", type: EffectType.Buff });
        }
        if (effect.defenseAura.visibleToCasterUnit) {
            descriptions.push({
                text: "Visible to caster unit",
                type: EffectType.Debuff,
            });
        }
        if (effect.defenseAura.ignoreSpellOn4) {
            descriptions.push({
                text: "4+ Ignore Spell",
                type: EffectType.Buff,
            });
        }
        if (effect.defenseAura.rerollHits) {
            descriptions.push({
                text: "RR Enemy Hits",
                type: EffectType.Debuff,
            });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: `defenseAura: ${JSON.stringify(effect.defenseAura)}`,
                type: EffectType.Unknown,
            });
        }
    }
    if (effect.movementAura) {
        if (effect.movementAura.allowChargeAfterRunOrRetreat) {
            descriptions.push({
                text: "Charge after Run/Retreat",
                type: EffectType.Buff,
            });
        }
        if (effect.movementAura.doubleMove) {
            descriptions.push({ text: "Move ×2", type: EffectType.Buff });
        }
        if (effect.movementAura.fly) {
            descriptions.push({ text: "Fly", type: EffectType.Buff });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: `movementAura: ${JSON.stringify(effect.movementAura)}`,
                type: EffectType.Unknown,
            });
        }
    }
    if (effect.chargeAura) {
        if (effect.chargeAura.bonus) {
            descriptions.push({
                text: `+${effect.chargeAura.bonus} Charge`,
                type: EffectType.Buff,
            });
        }
        if (effect.chargeAura.canChargeAfterRetreat) {
            descriptions.push({
                text: "Charge after Retreat",
                type: EffectType.Buff,
            });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: `ChargeAura: ${JSON.stringify(effect.chargeAura)}`,
                type: EffectType.Unknown,
            });
        }
    }
    if (effect.spellAura) {
        if (effect.spellAura.noCast) {
            descriptions.push({ text: "No cast", type: EffectType.Debuff });
        }
        if (effect.spellAura.rerollFailedCast) {
            descriptions.push({
                text: "RR failed cast",
                type: EffectType.Buff,
            });
        }
        if (effect.spellAura.rerollDispell) {
            descriptions.push({ text: "RR dispell", type: EffectType.Buff });
        }
        if (effect.spellAura.rerollUnbind) {
            descriptions.push({ text: "RR unbind", type: EffectType.Buff });
        }
        if (effect.spellAura.autoCast) {
            descriptions.push({ text: "Auto-cast 9", type: EffectType.Buff });
        }
        if (effect.spellAura.malusToAll) {
            descriptions.push({
                text: `-${effect.spellAura.malusToAll} to spell/unbind/dispell`,
                type: EffectType.Debuff,
            });
        }
        if (effect.spellAura.casts) {
            descriptions.push({
                text: `${effect.spellAura.casts} casts`,
                type: EffectType.Buff,
            });
        }
        if (effect.spellAura.unbinds) {
            descriptions.push({
                text: `${effect.spellAura.unbinds} unbinds`,
                type: EffectType.Buff,
            });
        }
        if (effect.spellAura.extraCast) {
            descriptions.push({
                text: `+${effect.spellAura.extraCast} extra cast`,
                type: EffectType.Buff,
            });
        }

        if (descriptions.length === 0) {
            descriptions.push({
                text: `SpellAura: ${JSON.stringify(effect.spellAura)}`,
                type: EffectType.Unknown,
            });
        }
    }
    if (effect.specialAura) {
        if (effect.specialAura.absorbDespair) {
            descriptions.push({
                text: "-1 Brav transfered to enemy",
                type: EffectType.Immediate,
            });
        }
        if (effect.specialAura.darknessOfSoul) {
            descriptions.push({
                text: "No action on 2D6>Brv",
                type: EffectType.Buff,
            });
        }
        if (effect.specialAura.pickTwoUnitsInCombat) {
            descriptions.push({
                text: "Pick 2 units (excl. strike 1st/last)",
                type: EffectType.Buff,
            });
        }
        if (effect.specialAura.blockVisibility) {
            descriptions.push({
                text: "Block visibility",
                type: EffectType.Buff,
            });
        }
        if (effect.specialAura.tectonicForce) {
            descriptions.push({
                text: 'Must move 2", >1" away',
                type: EffectType.Debuff,
            });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: `specialAura: ${JSON.stringify(effect.specialAura)}`,
                type: EffectType.Unknown,
            });
        }
    }
    if (effect.valueAura) {
        if (effect.valueAura.ignoreWounds) {
            descriptions.push({
                text: "Wds table: use 0 Wd",
                type: EffectType.Buff,
            });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: `valueAura: ${JSON.stringify(effect.valueAura)}`,
                type: EffectType.Unknown,
            });
        }
    }

    if (effect.immediate) {
        if (effect.immediate.mortalWounds) {
            descriptions.push({
                text: `${effect.immediate.mortalWounds} MW`,
                type: EffectType.Immediate,
            });
        }
        if (effect.immediate.mortalWoundsPerModel) {
            descriptions.push({
                text: `${effect.immediate.mortalWoundsPerModel} MW/model`,
                type: EffectType.Immediate,
            });
        }
        if (effect.immediate.allowInclusion) {
            descriptions.push({ text: "Include", type: EffectType.Immediate });
        }
        if (effect.immediate.gainCommandPoints) {
            descriptions.push({
                text: `${effect.immediate.gainCommandPoints} CP`,
                type: EffectType.Immediate,
            });
        }
        if (effect.immediate.setup) {
            descriptions.push({ text: "Setup", type: EffectType.Immediate });
        }
        if (effect.immediate.pileInMove) {
            descriptions.push({
                text: `${effect.immediate.pileInMove}" Pile-in move`,
                type: EffectType.Immediate,
            });
        }
        if (effect.immediate.heal) {
            descriptions.push({
                text: `Heal ${effect.immediate.heal} Wd`,
                type: EffectType.Immediate,
            });
        }
        if (effect.immediate.rerollSpellcast) {
            descriptions.push({
                text: "RR cast",
                type: EffectType.Immediate,
            });
        }
        if (effect.immediate.bonusSpellcast) {
            descriptions.push({
                text: `+${effect.immediate.bonusSpellcast} cast`,
                type: EffectType.Immediate,
            });
        }
        if (descriptions.length === 0) {
            descriptions.push({
                text: JSON.stringify(effect),
                type: EffectType.Unknown,
            });
        }
    }

    if (descriptions.length === 0) {
        descriptions.push({
            text: JSON.stringify(effect),
            type: EffectType.Unknown,
        });
    }
    return [condition, descriptions];
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

export function getEffectPhases(effect: AbilityEffect) {
    let phase = 0;
    if (effect.defenseAura) {
        if (effect.defenseAura.phase) phase |= effect.defenseAura.phase;
        else phase |= Phase.Combat | Phase.Shooting;
    }
    if (effect.attackAura) {
        if (effect.attackAura.phase) phase |= effect.attackAura.phase;
        else phase |= Phase.Combat | Phase.Shooting;
    }
    if (effect.valueAura || effect.specialAura) phase |= Phase.AnyInGame;
    if (effect.commandAura || effect.spellAura || effect.prayerAura)
        phase |= Phase.Hero;
    if (effect.movementAura) phase |= Phase.Movement;
    if (effect.chargeAura) phase |= Phase.Charge;
    if (effect.battleShockAura) phase |= Phase.Battleshock;
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
            unit.attacks.some((x) => !x.attack.melee)
        ) {
            return true;
        }
        if (
            phase === Phase.Combat &&
            unit.type === "unit" &&
            unit.attacks.some((x) => x.attack.melee)
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
