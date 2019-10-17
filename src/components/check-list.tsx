import * as React from "react";
import { WarscrollStore, WarscrollUnit, WarscrollScenery } from "../stores/warscroll";
import { inject, observer } from "mobx-react";
import { Phase, Ability, Attack, AbilityEffect, UnitsStore, Value, TargetType } from "../stores/units";
import { computed } from "mobx";
import { getPhaseName, phases } from "../stores/battle";
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

function distinct(array: {name: string}[]) {
    return array.filter((x, i) => !someFrom(array, i + 1, y => x.name === y.name));
}

const enum PhaseSide {
    Attack,
    Defense,
    None
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

    private isEffectInPhase(effect: AbilityEffect, phase: Phase, unit?: WarscrollUnit, side?: PhaseSide) {
        if (phase === Phase.Combat || phase === Phase.Shooting) {
            if (effect.phase !== undefined && effect.phase !== phase) return false;
            if (effect.defenseAura && side === PhaseSide.Defense) return true;
            if (effect.attackAura && effect.targetType !== TargetType.Enemy && side === PhaseSide.Attack) {
                if (!unit) return false;
                if (phase === Phase.Combat && unit.attacks.some(x => x.attack.melee)) return true;
                if (phase === Phase.Shooting && unit.attacks.some(x => !x.attack.melee)) return true;
            }
            if (effect.attackAura && effect.targetType === TargetType.Enemy && side === PhaseSide.Defense) {
                if (!unit) return false;
                return true;
            }
            if ((effect.mortalWounds || effect.mortalWoundsPerModel) && side === PhaseSide.Attack) return true;
            return false;
        }
        if (phase === Phase.Battleshock && effect.battleShockAura) return true;
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
        return <div key={index}><i>{ability.name} </i> { ability.description}
            {ability.effects && ability.effects.filter(x => this.isEffectInPhase(x, phase, unit)).map((x, index) => this.renderAbilityEffect(x, index))}
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
            
            { side === PhaseSide.Attack && unit.attacks.filter(x => this.isAttackInPhase(x.attack, phase)).map(x => this.renderAttack(x.attack, x.count))}
            { distinct(unit.abilities.filter(x => this.isAbilityInPhase(x, phase, unit, side))).map((x,i) => this.renderAbility(i, x, phase, unit))}
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
            <ul>{this.abilities.filter(x => this.isAbilityInPhase(x, phase, undefined, side)).map((x,i) => this.renderAbility(i, x, phase))}</ul>
        <div>{this.getPhaseUnits(phase, side).map(x => this.renderUnit(x, phase, side))}</div>
        <ul>{phase === Phase.Hero && this.props.warscrollStore!.warscroll.sceneries.map(x => this.renderScenery(x)) }</ul></section>;
    }

    private renderPhase(phase: Phase) {
        return <section key={phase}><h1>{getPhaseName(phase)}</h1>
            { phase === Phase.Setup && <div>{this.props.warscrollStore!.warscroll.description}</div>}
            {(phase === Phase.Shooting || phase === Phase.Combat) && <>{this.renderSubPhase(phase, PhaseSide.Attack)} {this.renderSubPhase(phase, PhaseSide.Defense)}</>}
            {(phase !== Phase.Shooting && phase !== Phase.Combat) && this.renderSubPhase(phase)}
        </section>;        
    }

    private renderOutOfPhaseAbilities() {
        return <section>
            <h1>Abilities without effect</h1>
            {this.abilities.filter(x => !x.effects).map((x,i) => <div key={i}><strong>{x.name}</strong> {x.description}</div>)}
            {this.units.reduce((prev, x) => prev.concat(x.abilities.filter(y => !y.effects).map(y => [x, y])), new Array<[WarscrollUnit, Ability]>()).map((x,i) => <div key={i}><i>{x[0].unit.model.name}</i><strong>{x[1].name}</strong> {x[1].description}</div>)}
        </section>
    }

    render(){
        return <div className="check-list"> {phases.map(x => this.renderPhase(x))} { this.renderOutOfPhaseAbilities() }</div>;
    }
}