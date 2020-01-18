import * as React from "react";
import { WarscrollStore, WarscrollUnit, WarscrollScenery } from "../stores/warscroll";
import { inject, observer } from "mobx-react";
import { Phase, Ability, Attack, AbilityEffect, UnitsStore, Value } from "../stores/units";
import { computed } from "mobx";
import { getPhaseName, phases, PhaseSide, isUnitInPhase, isEffectInPhase, isAttackInPhase, isAbilityInPhase } from "../stores/battle";
import "./check-list.less";
import { value } from "../helpers/react";

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

function distinct<T extends {id: string}>(array: T[]) {
    return array.filter((x, i) => !someFrom(array, i + 1, y => x.id === y.id));
}

function Stats(props: { name?: string, children: React.ReactNode}) {
    return <div className="stats">
        {props.name && <div className="stats__title">{props.name}</div> }
        {props.children}
    </div>
}

function Stat(props: { name: string, value: Value}) {
    return <><div className="stats__key">{props.name}</div><div className="stats__value">{value(props.value, "-")}</div></>;
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

    private getPhaseUnits(phase: Phase, side?: PhaseSide) {
        return this.units.filter(x => isUnitInPhase(x, phase, side));
    }

    private renderAttack(attack: Attack, count: number) {
        return <Stats key={attack.id} name={attack.name}>
            <Stat name="x" value={count}/>
            <Stat name="At" value={ attack.attacks }/>
            <Stat name="Rg" value={`${attack.range}"`}/>
            <Stat name="Hit" value={`${attack.toHit}+`}/>
            <Stat name="Wd" value={`${attack.toWound}+`}/>
            <Stat name="Rd" value={attack.rend}/>
            <Stat name="Dg" value={attack.damage}/>
        </Stats>;
    }

    private renderAbilityEffect(effect: AbilityEffect, index: number) {
        return <div key={index}></div>;
    }

    private renderAbility(index: number, ability: Ability, phase: Phase, unit?: WarscrollUnit) {
        return <div key={index}><i className="check-list__ability__name">{ability.name}</i> : { ability.description}
            {ability.effects && ability.effects.filter(x => isEffectInPhase(x, phase, unit)).map((x, index) => this.renderAbilityEffect(x, index))}
        </div>;
    }

    private renderUnit(unit: WarscrollUnit, phase: Phase, side?: PhaseSide) {
        return <div key={unit.id} className="check-list__unit">
            <div className="check-list__unit__title">{unit.unit.model.name}</div>
            <Stats>
            { phase === Phase.Movement && <Stat name="Mv" value={unit.unit.move}/>}
            { side === PhaseSide.Defense && <><Stat name="Wd" value={unit.unit.wounds}/><Stat name="Sv" value={unit.unit.save}/></>}
            { phase === Phase.Battleshock && <Stat name="Bv" value={unit.unit.bravery}/>}
            </Stats>
            
            { side === PhaseSide.Attack && unit.attacks.filter(x => isAttackInPhase(x.attack, phase)).map(x => this.renderAttack(x.attack, x.count))}
            { distinct(unit.abilities.filter(x => isAbilityInPhase(x, phase, unit, side))).map((x,i) => this.renderAbility(i, x, phase, unit))}
        </div>
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
            <ul>{this.abilities.filter(x => isAbilityInPhase(x, phase, undefined, side)).map((x,i) => this.renderAbility(i, x, phase))}</ul>
        <div>{this.getPhaseUnits(phase, side).map(x => this.renderUnit(x, phase, side))}</div>
        <ul>{phase === Phase.Hero && this.props.warscrollStore!.warscroll.sceneries.map(x => this.renderScenery(x)) }</ul></section>;
    }

    private hasSomethingIsSubPhase(phase: Phase, side?: PhaseSide) {
        return this.abilities.some(x => isAbilityInPhase(x, phase, undefined, side))
            || this.getPhaseUnits(phase, side).length > 0
            || phase === Phase.Hero && this.props.warscrollStore!.warscroll.sceneries.length > 0;
    }

    private renderPhase(phase: Phase) {
        if (phase !== Phase.Setup) {
            if (phase === Phase.Shooting || phase === Phase.Combat) {
                if (!this.hasSomethingIsSubPhase(phase, PhaseSide.Attack) && !this.hasSomethingIsSubPhase(phase, PhaseSide.Defense)) return;
            } else {
                if (!this.hasSomethingIsSubPhase(phase)) return;
            }
        }
        return <section key={phase}><h1>{getPhaseName(phase)}</h1>
            { phase === Phase.Setup && <div>{this.props.warscrollStore!.warscroll.description}</div>}
            {(phase === Phase.Shooting || phase === Phase.Combat) && <>{this.renderSubPhase(phase, PhaseSide.Attack)} {this.renderSubPhase(phase, PhaseSide.Defense)}</>}
            {(phase !== Phase.Shooting && phase !== Phase.Combat) && this.renderSubPhase(phase)}
        </section>;        
    }

    private renderOutOfPhaseAbilities() {
        return <section className="check-list__out">
            <h1>Abilities without effect</h1>
            {this.abilities.filter(x => !x.effects).map((x,i) => <div key={i}><strong>{x.name}</strong> {x.description}</div>)}
            {this.units.reduce((prev, x) => prev.concat(x.abilities.filter(y => !y.effects).map(y => [x, y])), new Array<[WarscrollUnit, Ability]>()).map((x,i) => <div key={i}><i>{x[0].unit.model.name}</i><strong>{x[1].name}</strong> {x[1].description}</div>)}
        </section>
    }

    render(){
        return <div className="check-list"> {phases.map(x => this.renderPhase(x))} { this.renderOutOfPhaseAbilities() }</div>;
    }
}