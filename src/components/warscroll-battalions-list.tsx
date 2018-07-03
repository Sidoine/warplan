import * as React from "react";
import { observer, inject } from "mobx-react";
import { BattalionsList } from "./battalions-list";
import { WarscrollStore } from "../stores/warscroll";
import { Header, Table, Button, Icon } from "semantic-ui-react";
import { BattalionUnit, Unit } from "../stores/units";
import { join } from "../helpers/react";

export interface WarscrollBattalionsListProps {
    warscrollStore?: WarscrollStore;
}

@inject('warscrollStore')
@observer
export class WarscrollBattalionsList extends React.Component<WarscrollBattalionsListProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        // const missingUnits = new Map<string, { count: number }[]>();
        const counts = new Map<number, { count: number }>();

        // for (const battalion of warscroll.battalions) {
        //     const warscrollUnits = warscroll.units.filter(x => x.battalion !== null && x.battalion.id === battalion.id);
        //     for (const battalionUnit of battalion.battalion.units) {
        //         let count = 0;
        //         for (const warscrollUnit of warscrollUnits) {
        //             if (battalionUnit.unit.find(x => x.id === warscrollUnit.unit.id)) {
        //                 count++;
        //             }
        //         }
        //     }
        // }

        return <div>
            <Header>Battalions</Header>
            <Table>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Units</Table.HeaderCell>
                    <Table.HeaderCell>Points</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <tbody>
            {
                warscroll.battalions.map(x => <tr key={x.id}>
                    <td>{x.battalion.name}</td>
                    <td>{join(x.battalion.units.map(y => this.renderUnit(y, counts)), ", ")}</td>
                    <td>{x.battalion.points}</td>
                    <td><Button onClick={() => this.props.warscrollStore!.removeBattalion(x)}><Icon name="remove"/></Button></td>
                </tr>)
            }
                </tbody>
            </Table>

                <span>{warscroll.battalionsPoints} points</span>
                <BattalionsList title="Add..."/>

            </div>;
    }

    private renderUnit(bu: BattalionUnit, counts: Map<number, { count: number }>) {
        const countsBu = counts.get(bu.id);
        if (countsBu !== undefined){
            const count = countsBu.count;
            if (count > 0) {
                return <span style={{ color:  'red' } } key={bu.id}>{ bu.count} { join(bu.unit.map(x => <a key={x.id} href="" onClick={e => this.addUnit(x, e, count)}>{x.model.name}</a>), "/") } </span>;
            }
        }

        return <span key={bu.id}>{ bu.count} { bu.unit.map(x => x.model.name).join("/") } </span>;
    }

    private addUnit(unit: Unit, e: React.MouseEvent<HTMLAnchorElement>, count: number) {
        e.preventDefault();
        for (let i = 0; i< count; i++) {
            this.props.warscrollStore!.addUnit(unit);   
        }
    }
}