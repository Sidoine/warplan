import * as React from "react";
import { observer, inject } from "mobx-react";
import { BattalionsList } from "./battalions-list";
import { WarscrollStore } from "../stores/warscroll";
import { BattalionUnit } from "../stores/units";
import { join } from "../helpers/react";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Icon } from "@material-ui/core";

export interface WarscrollBattalionsListProps {
    warscrollStore?: WarscrollStore;
}

@inject('warscrollStore')
@observer
export class WarscrollBattalionsList extends React.Component<WarscrollBattalionsListProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        // const missingUnits = new Map<string, { count: number }[]>();
        const counts = new Map<string, { count: number }>();

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
            <h1>Battalions</h1>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Units</TableCell>
                    <TableCell>Points</TableCell>
                    <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            {
                warscroll.battalions.map(x => <TableRow key={x.id}>
                    <TableCell>{x.battalion.name}</TableCell>
                    <TableCell>{join(x.battalion.units.map(y => this.renderUnit(y, counts)), ", ")}</TableCell>
                    <TableCell>{x.battalion.points}</TableCell>
                    <TableCell><Button onClick={() => this.props.warscrollStore!.removeBattalion(x)}><Icon className="fa fa-remove"/></Button></TableCell>
                </TableRow>)
            }
                </TableBody>
            </Table>

                <span>{warscroll.battalionsPoints} points</span>
                <BattalionsList title="Add..."/>

            </div>;
    }

    private renderUnit(bu: BattalionUnit, counts: Map<string, { count: number }>) {
        const countsBu = counts.get(bu.id);
        if (countsBu !== undefined){
            const count = countsBu.count;
            if (count > 0) {
              //  return <span style={{ color:  'red' } } key={bu.id}>{ bu.count} { join(bu.units.map(x => <a key={x.id} href="" onClick={e => this.addUnit(x, e, count)}>{x.model.name}</a>), "/") } </span>;
              return <span style={{ color:  'red' } } key={bu.id}>{ bu.countMin} { bu.countMax !== bu.countMin && ` - ${bu.countMax} `} { bu.units.map(x => x.join(', ')).join("/") } </span>;
            }
        }

        return <span key={bu.id}>{ bu.countMin} { bu.countMax !== bu.countMin && ` - ${bu.countMax} `} { bu.units.map(x => x.join('/')).join(" or ") } </span>;
    }

    // private addUnit(unit: Unit, e: React.MouseEvent<HTMLAnchorElement>, count: number) {
    //     e.preventDefault();
    //     for (let i = 0; i< count; i++) {
    //         this.props.warscrollStore!.addUnit(unit);   
    //     }
    // }
}