import { Hidden, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, List, Collapse, ListItem, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import { HasId } from "./dropdown-list";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export interface ResponsiveTableColumn<T> {
    text: (x: T) => JSX.Element | JSX.Element[] | string | number | undefined;
    name: string;
}

export interface ResponsiveTableProps<T> {
    columns: ResponsiveTableColumn<T>[];
    rows: T[];
}
export function ResponsiveTable<T extends HasId>({ columns, rows }: ResponsiveTableProps<T>) {
    const [open, setOpen] = useState('');
    const firstColumn = columns[0];
    const otherColumns = columns.slice(1);
    return <><Hidden implementation="js" xsDown>
        <TableContainer>
            <Table>
                <TableHead>
                    { columns.map(x =>  <TableCell key={x.name}></TableCell>)}
                </TableHead>
                <TableBody>
                    { rows.map(x => <TableRow key={x.id}>
                    { columns.map(y => <TableCell key={y.name}>{y.text(x)}</TableCell>)}
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </Hidden>
    <Hidden implementation="js" smUp>
        <List>
              { rows.map(x => <>
              <ListItem button onClick={() => open === x.id ? setOpen('') : setOpen(x.id)}>
                  <ListItemText>{firstColumn.text(x)}</ListItemText>
                  { x.id === open ? <ExpandLess /> : <ExpandMore/>}
              </ListItem>
              <Collapse in={x.id === open}>
                  <Table>
                    <TableBody>
                    {otherColumns.map(y => <TableRow>
                        <TableCell variant="head">{y.name}</TableCell> <TableCell>{y.text(x)}</TableCell>
                    </TableRow>)}
                    </TableBody>
                  </Table>
              </Collapse>
              </>)}
        </List>
    </Hidden>
    </>;
}