import React from "react";
import { observer } from "mobx-react-lite";
import WarscrollSceneryEdit from "./scenery-warscroll-edit";
import SceneryWarscrollAdd from "./scenery-warscroll-add";
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
} from "@mui/material";
import { Role } from "../../common/definitions";
import { useArmyListStore } from "../stores/army-list";

function WarscrollSceneriesList({
    role,
    title,
}: {
    role: Role;
    title: string;
}) {
    const warscroll = useArmyListStore();
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
                            .filter((x) => x.role === role)
                            .map((x) => (
                                <WarscrollSceneryEdit key={x.id} scenery={x} />
                            ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardActions>
                <SceneryWarscrollAdd role={role} title="Add..." />
            </CardActions>
        </Card>
    );
}

export default observer(WarscrollSceneriesList);
