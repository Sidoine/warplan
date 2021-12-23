import {
    Hidden,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    List,
    Collapse,
    ListItem,
    ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { HasId } from "./add-button";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { observer } from "mobx-react-lite";

export interface ResponsiveTableColumn<T> {
    text: (x: T) => JSX.Element | JSX.Element[] | string | number | undefined;
    name: string;
}

export interface ResponsiveTableProps<T> {
    columns: ResponsiveTableColumn<T>[];
    rows: T[];
}

function ResponsiveTableInnner<T extends HasId>({
    columns,
    rows,
}: ResponsiveTableProps<T>) {
    const [open, setOpen] = useState("");
    const firstColumn = columns[0];
    const otherColumns = columns.slice(1);
    return <>
        <Hidden implementation="js" smDown>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((x, index) => (
                                <TableCell key={x.name || index}>
                                    {x.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((x) => (
                            <TableRow key={x.id}>
                                {columns.map((y) => (
                                    <TableCell key={y.name}>
                                        {y.text(x)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Hidden>
        <Hidden implementation="js" smUp>
            <List>
                {rows.map((x) => (
                    <React.Fragment key={x.id}>
                        <ListItem
                            button
                            onClick={() =>
                                open === x.id ? setOpen("") : setOpen(x.id)
                            }
                        >
                            <ListItemText>
                                {firstColumn.text(x)}
                            </ListItemText>
                            {x.id === open ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItem>
                        <Collapse in={x.id === open}>
                            <Table>
                                <TableBody>
                                    {otherColumns.map((y) => (
                                        <TableRow key={y.name}>
                                            <TableCell variant="head">
                                                {y.name}
                                            </TableCell>
                                            <TableCell>
                                                {y.text(x)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Collapse>
                    </React.Fragment>
                ))}
            </List>
        </Hidden>
    </>;
}

export default observer(ResponsiveTableInnner);
