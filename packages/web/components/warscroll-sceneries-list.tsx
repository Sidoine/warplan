import React from "react";
import { observer } from "mobx-react-lite";
import WarscrollSceneryEdit from "./warscroll-scenery-edit";
import EndlessSpellsList from "./endless-spells-list";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    CardContent,
    CardActions,
    Card,
    CardHeader
} from "@material-ui/core";
import { useStores } from "../stores";
import { Role } from "../../common/definitions";

function WarscrollSceneriesList({
    role,
    title
}: {
    role: Role;
    title: string;
}) {
    const { armyListStore: warscrollStore } = useStores();
    const warscroll = warscrollStore.armyList;
    return (
        <Card>
            <CardHeader title={title} />
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
                        {warscroll.units
                            .filter(x => x.definition.roles.includes(role))
                            .map(x => (
                                <WarscrollSceneryEdit key={x.id} scenery={x} />
                            ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardActions>
                <EndlessSpellsList role={role} title="Add..." />
            </CardActions>
        </Card>
    );
}

export default observer(WarscrollSceneriesList);
