import React from "react";
import { observer } from "mobx-react-lite";
import WarscrollSceneryEdit from "./warscroll-scenery-edit";
import SceneriesList from "./sceneries-list";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    CardContent,
    CardActions,
    Card,
    CardHeader,
} from "@material-ui/core";
import { useStores } from "../stores";

function WarscrollSceneriesList() {
    const { armyListStore: warscrollStore } = useStores();
    const warscroll = warscrollStore.warscroll;
    return (
        <Card>
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
                        {warscroll.endlessSpells.map((x) => (
                            <WarscrollSceneryEdit key={x.id} scenery={x} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardActions>
                <span>{warscroll.sceneryPoints} points</span>
                <SceneriesList title="Add..." />
            </CardActions>
        </Card>
    );
}

export default observer(WarscrollSceneriesList);
