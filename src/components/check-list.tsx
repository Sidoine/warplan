import * as React from "react";
import { WarscrollStore, WarscrollUnit, WarscrollScenery } from "../stores/warscroll";
import { inject, observer } from "mobx-react";
import { Phase, Ability, Attack, AbilityEffect, UnitsStore } from "../stores/units";
import { computed } from "mobx";
import { getPhaseName, phases } from "../stores/battle";

export interface CheckListProps {
    warscrollStore?: WarscrollStore;
    unitsStore?: UnitsStore;
}

function someFrom<T>(array: T[], from: number, condition: (x:T) => boolean) {
    for (let i = from; i < array.length; i++) {
        if (condition(array[i])) return true;
    }
    return false;
}

function distinct(array: {name: string}[]) {
    return array.filter((x, i) => !someFrom(array, i + 1, y => x.name === y.name));
}

const enum PhaseSide {
    Attack,
    Defense,
    None
}

// TODO différencier la phase de l'ability (moment où on le lance) et la phase de l'aura
@inject("warscrollStore", "unitsStore")
@observer
export class CheckList extends React.Component<CheckListProps> {
    @computed get units() {
        return this.props.warscrollStore!.warscroll.units;
    }

    @computed
    get abilities() {
        let result: Ability[] = this.props.unitsStore!.baseAbilities;
        const w = this.props.warscrollStore!.warscroll;
        if (w.armyOption) {
            if (w.armyOption.abilities) result = result.concat(w.armyOption.abilities);
        }        
        if (w.allegiance.battleTraits) result = result.concat(w.allegiance.battleTraits);
        return result;
    }

    private isEffectInPhase(effect: AbilityEffect, phase: Phase, unit?: WarscrollUnit, side?: PhaseSide) {
        if (phase === Phase.Combat || phase === Phase.Shooting) {
            if (effect.phase !== undefined && effect.phase !== phase) return false;
            if (effect.defenseAura && side === PhaseSide.Defense) return true;
            if (effect.attackAura && side === PhaseSide.Attack) {
                if (!unit) return false;
                if (phase === Phase.Combat && unit.attacks.some(x => x.attack.melee)) return true;
                if (phase === Phase.Shooting && unit.attacks.some(x => !x.attack.melee)) return true;
            }
            return false;
        }
        if (phase === Phase.Movement && effect.movementAura) return true;
        if (phase === Phase.Charge && effect.chargeAura) return true;
        if (effect.phase !== undefined) return effect.phase === phase && side !== PhaseSide.Defense;
        return false;
    }

    private isAbilityInPhase(ability: Ability, phase: Phase, unit?: WarscrollUnit, side?: PhaseSide) {
        if (ability.effects) {
            for (const effect of ability.effects) {
                if (this.isEffectInPhase(effect, phase, unit, side)) return true;
            }
        }
        return false;
    }

    private isAttackInPhase(attack: Attack, phase: Phase) {
        if (phase === Phase.Shooting && !attack.melee) return true;
        if (phase === Phase.Combat && attack.melee) return true;
        return false;
    }

    private isUnitInPhase(unit: WarscrollUnit, phase: Phase, side?: PhaseSide) {
        if (phase === Phase.Movement || phase === Phase.Battleshock) return true;
        if (phase === Phase.Shooting && unit.attacks.some(x => !x.attack.melee)) {
            return true;
        }
        if (phase === Phase.Combat && unit.attacks.some(x => x.attack.melee)) {
            return true;
        }
        if (unit.abilities.some(x => this.isAbilityInPhase(x, phase, unit, side))) return true;
        return false;
    }

    private getPhaseUnits(phase: Phase, side?: PhaseSide) {
        return this.units.filter(x => this.isUnitInPhase(x, phase, side));
    }

    private renderAttack(attack: Attack, count: number) {
        return <div key={attack.id}>{attack.name}: {count}x [ { attack.attacks } AT, { attack.range}", { attack.toHit}+ HIT, {attack.toWound}+ WD, {attack.rend} RD ]</div>;
    }

    private renderAbilityEffect(effect: AbilityEffect, index: number) {
        return <div key={index}></div>;
    }

    private renderAbility(ability: Ability, phase: Phase, unit?: WarscrollUnit) {
        return <div key={ability.name}><i>{ability.name} </i> { ability.description}
            {ability.effects && ability.effects.filter(x => this.isEffectInPhase(x, phase, unit)).map((x, index) => this.renderAbilityEffect(x, index))}
        </div>;
    }

    private renderUnit(unit: WarscrollUnit, phase: Phase, side?: PhaseSide) {
        return <li key={unit.id}>
            <strong>{unit.unit.model.name}</strong> 
            { phase === Phase.Movement && <> {unit.unit.move}"</>}
            { side === PhaseSide.Defense && <> {unit.unit.wounds} WD, {unit.unit.save} SV</>}
            { phase === Phase.Battleshock && <> {unit.unit.bravery}</>}
            { side === PhaseSide.Attack && unit.attacks.filter(x => this.isAttackInPhase(x.attack, phase)).map(x => this.renderAttack(x.attack, x.count))}
            { distinct(unit.abilities.filter(x => this.isAbilityInPhase(x, phase, unit, side))).map(x => this.renderAbility(x, phase, unit))}
        </li>
    }

    private renderScenery(scenery: WarscrollScenery) {
        return <li key={scenery.scenery.name}><strong>{scenery.scenery.name}</strong>
            {scenery.scenery.description}
        </li>
    }

    private renderSubPhase(phase: Phase, side?:PhaseSide) {
        return <section>
            { side === PhaseSide.Defense === true && <h2>Defense</h2>}
            { side === PhaseSide.Attack && <h2>Attack</h2>}
            <ul>{this.abilities.filter(x => this.isAbilityInPhase(x, phase, undefined, side)).map(x => this.renderAbility(x, phase))}</ul>
        <ul>{this.getPhaseUnits(phase, side).map(x => this.renderUnit(x, phase, side))}</ul>
        <ul>{phase === Phase.Hero && this.props.warscrollStore!.warscroll.sceneries.map(x => this.renderScenery(x)) }</ul></section>;
    }

    private renderPhase(phase: Phase) {
        return <section key={phase}><h1>{getPhaseName(phase)}</h1>
            {(phase === Phase.Shooting || phase === Phase.Combat) && <>{this.renderSubPhase(phase, PhaseSide.Attack)} {this.renderSubPhase(phase, PhaseSide.Defense)}</>}
            {(phase !== Phase.Shooting && phase !== Phase.Combat) && this.renderSubPhase(phase)}
        </section>;        
    }

    private renderOutOfPhaseAbilities() {
        return <section>
            <h1>Abilities without effect</h1>
            {this.abilities.filter(x => !x.effects).map(x => <div key={x.name}><strong>{x.name}</strong> {x.description}</div>)}
            {this.units.reduce((prev, x) => prev.concat(x.abilities.filter(x => !x.effects)), new Array<Ability>()).map(x => <div key={x.name}><strong>{x.name}</strong> {x.description}</div>)}
        </section>
    }

    render(){
        return <div>{phases.map(x => this.renderPhase(x))} { this.renderOutOfPhaseAbilities() }</div>;
    }
}