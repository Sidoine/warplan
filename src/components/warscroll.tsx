import * as React from "react";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";
import { observer, inject } from "mobx-react";
import { Header, Table, Icon } from "semantic-ui-react";

export interface WarscrollProps {
    warscrollStore?: WarscrollStore;
}

@inject("warscrollStore")
@observer
export class Warscroll extends React.Component<WarscrollProps, {}>{
    render() {
        const w = this.props.warscrollStore!.warscroll;
        return <div>
            <div>Allegiance: {w.allegiance.name}</div>
            <Header>Leaders</Header>
            <Table>
            {
                w.units.filter(x => x.isLeader).sort((a, b) => (a.isGeneral ? 1 : 0) - (b.isGeneral ? 1: 0)).map(x => this.renderUnit(x))
            }
            </Table>

            <Header>Battelines</Header>
            <Table>
            {
                w.units.filter(x => x.isBattleline).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => this.renderUnit(x))
            }
            </Table>

            <Header>Units</Header>
            <Table>
            {
                w.units.filter(x => !x.isBattleline && !x.isLeader).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => this.renderUnit(x))
            }
            </Table>
        </div>;
    }

    renderUnit(unit: WarscrollUnit) {
        const u = unit.unit;
        return <Table.Row>
            <Table.Cell>{u.model.name}</Table.Cell>
            <Table.Cell>{unit.count * u.size} <Icon name="user"/></Table.Cell>
    <Table.Cell>{ u.move && <>{u.move}" <Icon name="location arrow"/></>} {u.wounds} <Icon name="heart"/> {u.save && <> {u.save} <Icon name="shield"/></>} {u.bravery && <> {u.bravery} <Icon name="hand victory"/></>} </Table.Cell>
        </Table.Row>;
    }
}