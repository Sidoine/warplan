import * as React from "react";
import { WarscrollStore, WarscrollScenery } from "../stores/warscroll";
import { observer, inject } from "mobx-react";
import { Header, Table, Segment } from "semantic-ui-react";
import { WarscrollBattalionInterface } from "../stores/units";
import "./warscroll.less";
import { AllAbilities } from "../atoms/warscroll-components";
import { UnitWarscroll } from "./unit-warscoll";

export interface WarscrollProps {
    warscrollStore?: WarscrollStore;
}

@inject("warscrollStore")
@observer
export class Warscroll extends React.Component<WarscrollProps>{
    render() {
        const store = this.props.warscrollStore!;
        const w = this.props.warscrollStore!.warscroll;
        return <div>
            <div>Allegiance: {w.allegiance.name}</div>
            {store.armyOptions && w.armyOption && <div>{store.armyOptions.name}: {w.armyOption.name}</div>}
            <div>{w.totalPoints} points</div>
            <Header as="h1">Leaders</Header>
                {
                w.units.filter(x => x.isLeader).sort((a, b) => (a.isGeneral ? 1 : 0) - (b.isGeneral ? 1 : 0)).map(x => <UnitWarscroll wu={x} key={x.id} />)
                }
            
            <Header as="h1">Battelines</Header>
                {
                w.units.filter(x => x.isBattleline).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => <UnitWarscroll wu={x} key={x.id}/>)
                }
            
            <Header as="h1">Units</Header>
            {
                w.units.filter(x => !x.isBattleline && !x.isLeader).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => <UnitWarscroll wu={x} key={x.id}/>)
            }
            
        {w.battalions.length > 0 &&
            <><Header>Battalions</Header>
                    {
                        w.battalions.map(x => this.renderBattalion(x))
                    }
            </>}    

        {w.sceneries.length > 0 &&
           <Segment> 
                <Header>Sceneries</Header>
                <Table>
                    <Table.Body>
                        {
                            w.sceneries.map(x => this.renderScenery(x))
                        }
                    </Table.Body>
                </Table>
            </Segment>}    
        </div>;
    }

    renderBattalion(battalion: WarscrollBattalionInterface) {
        return <div key={battalion.id} className="warscroll">
            <div className="warscroll__header">
                <div className="warscroll__title battalion">
                    <div>{battalion.battalion.name}</div>
                    <div className="warscroll__count">{battalion.battalion.points} points</div>
                </div>
            </div>
            <div className="warscroll__flavor">{battalion.battalion.description}</div>
            <div className="warscroll__abilities">
            { battalion.battalion.abilities && <AllAbilities title="Abilities" abilities={battalion.battalion.abilities}/>}
            </div>
            <div className="warscroll__keywords">
            <div className="warscroll__keywords__header">Units</div>
            <div>{battalion.battalion.units.map(x => `${x.countMin}${x.countMax > x.countMin ? `-${x.countMax}`: ''} ${x.units.map(y => y.join(' - ')).join('/')}`).join(", ")}</div>
            </div>
        </div>    
    }

    renderScenery(scenery: WarscrollScenery) {
        return <Table.Row key={scenery.id}>
            <Table.Cell>{scenery.scenery.name}</Table.Cell>    
            <Table.Cell>{scenery.scenery.description}</Table.Cell>
            <Table.Cell>
                {scenery.scenery.abilities && <AllAbilities title="Abilities" abilities={scenery.scenery.abilities}/>}
            </Table.Cell>
        </Table.Row>    
    }

}