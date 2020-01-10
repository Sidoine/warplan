import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { UnitsList } from "./units-list";
import { WarscrollUnitEdit } from "./warscroll-unit-edit";
import { WarscrollStore } from "../stores/warscroll";
import { Table, TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";

export interface WarscrollUnitsListProps {
    unitsStore?: UnitsStore;
    warscrollStore?: WarscrollStore;
}

@inject('unitsStore', "warscrollStore")
@observer
export class WarscrollUnitsList extends React.Component<WarscrollUnitsListProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        return <div>
            <h1>Units</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Models</TableCell>
                        <TableCell>Extras</TableCell>
                        <TableCell>Points</TableCell>
                        <TableCell></TableCell>    
                    </TableRow>
                </TableHead>
                <TableBody>
            {
                warscroll.units.map(x => <WarscrollUnitEdit key={x.id} unit={x}/>)
            }
                </TableBody>
            </Table>
            <div>
                <span>{warscroll.unitsPoints} points</span>
                <UnitsList title="Add..."/>
            </div>
            </div>;
    }
}