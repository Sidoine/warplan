import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { WarscrollSceneryEdit } from "./warscroll-scenery-edit";
import { SceneriesList } from "./sceneries-list";
import { Table, TableHead, TableRow, TableCell, TableBody, CardContent, CardActions, Card, CardHeader } from "@material-ui/core";

export interface WarscrollSceneriesListProps {
    unitsStore?: UnitsStore;
    warscrollStore?: WarscrollStore;
}

@inject('unitsStore', "warscrollStore")
@observer
export class WarscrollSceneriesList extends React.Component<WarscrollSceneriesListProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        return <Card>
            <CardHeader title="Endless spells" />
            <CardContent>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Points</TableCell>
                        <TableCell></TableCell>    
                    </TableRow>
                </TableHead>
                <TableBody>
            {
                warscroll.endlessSpells.map(x => <WarscrollSceneryEdit key={x.id} scenery={x}/>)
            }
                </TableBody>
                </Table>
                </CardContent>
            <CardActions>
                <span>{warscroll.sceneryPoints} points</span>
                <SceneriesList title="Add..."/>
            </CardActions>
            </Card>;
    }
}