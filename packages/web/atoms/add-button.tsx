import React, { useState, useCallback, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import AddIcon from "@material-ui/icons/Add";
import {
    IconButton,
    Dialog,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    DialogContent,
    DialogTitle
} from "@material-ui/core";

export interface HasId {
    id: string;
}

export interface TableColumn<T> {
    text: (x: T) => ReactNode;
    name: string;
}

export interface AddButtonProps<T extends HasId> {
    options: T[];
    onChange: (t: T) => void;
    placeholder?: string;
    columns: TableColumn<T>[];
}

export function OptionRow<T extends HasId>({
    value,
    onClick,
    columns
}: {
    onClick: (option: T) => void;
    value: T;
    columns: TableColumn<T>[];
}) {
    const handleClick = useCallback(() => {
        onClick(value);
    }, [onClick, value]);
    return (
        <TableRow hover onClick={handleClick}>
            {columns.map(y => (
                <TableCell key={y.name}>{y.text(value)}</TableCell>
            ))}
        </TableRow>
    );
}

function AddButton<T extends HasId>({
    placeholder,
    columns,
    options,
    onChange
}: AddButtonProps<T>) {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback((e: React.MouseEvent) => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => setOpen(false), []);

    const handleClick = useCallback(
        (option: T) => {
            onChange(option);
            setOpen(false);
        },
        [onChange]
    );
    return (
        <>
            <IconButton color="primary" onClick={handleOpen}>
                <AddIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                {placeholder && <DialogTitle>{placeholder}</DialogTitle>}
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map(x => (
                                    <TableCell key={x.name}>{x.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {options.map(x => (
                                <OptionRow
                                    columns={columns}
                                    onClick={handleClick}
                                    value={x}
                                    key={x.id}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default observer(AddButton);
