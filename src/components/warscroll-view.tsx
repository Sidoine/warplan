import { inject, observer } from "mobx-react";
import * as React from "react";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";

export interface WarscrollViewProps {
    warscrollStore?: WarscrollStore;
}

@inject("warscrollStore")
@observer
export class WarscrollView extends React.Component<WarscrollViewProps>{
    private renderUnit(unit: WarscrollUnit, includeCount: boolean) {
        return <li key={unit.id} >{ includeCount && <>{unit.modelCount} × </>} {unit.unit.model.name} ({unit.points})
        {unit.isGeneral && <><br/>- <em>General</em></>}
        {unit.extraAbilities.map(x =>  <React.Fragment key={x.id}><br/>- <em>{x.ability.name}</em></React.Fragment>)}
        </li>
    }

    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        return <div>
            <div>Allegiance: { warscroll.allegiance.name }</div>
            <h3>Leaders</h3>
            <ul>
            { warscroll.units.filter(x => x.isLeader).map(x => this.renderUnit(x, false))}
            </ul>
            <h3>Battleline</h3>
            <ul>
            { warscroll.units.filter(x => x.isBattleline).map(x => this.renderUnit(x, true))}
            </ul>
            { warscroll.numberOfArtillery > 0 && <><h3>Artillery</h3>
            <ul>
            { warscroll.units.filter(x => x.isArtillery).map(x => this.renderUnit(x, true))}
            </ul></>}
            { warscroll.numberOfBehemots > 0 && <> <h3>Behemots</h3>
            <ul>
            { warscroll.units.filter(x => x.isBehemot).map(x => this.renderUnit(x, false))}
            </ul></>}
            <h3>Units</h3>
            <ul>
            { warscroll.units.filter(x => !x.isLeader && !x.isBattleline && !x.isBehemot && !x.isArtillery).map(x => this.renderUnit(x, true))}
            </ul>
            <div>
                <dl>
                    <dt>Total</dt>
                    <dd>{warscroll.totalPoints} / {warscroll.maxPoints}</dd>
                </dl>
                <dl>
                    <dt>Extra Command Points</dt>
                    <dd>{warscroll.extraCommandPoints}</dd>
                </dl>
            </div>
            </div>;
    }
}