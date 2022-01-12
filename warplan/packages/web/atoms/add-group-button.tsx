import React, { ReactNode, useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Grid,
    Typography,
    ButtonGroup,
    Tooltip,
    Stack,
} from "@mui/material";
import { HasId, TableColumn, OptionRow } from "./add-button";
import ClearIcon from "@mui/icons-material/Clear";

export const AddGroupButton = observer(function AddGroupButton<
    G extends HasId,
    T extends HasId
>({
    label,
    value,
    getText,
    onChange,
    columns,
    options,
    getValues,
    getGroupLabel,
}: {
    label: string;
    value: T | null;
    getText: (value: T) => ReactNode;
    onChange: (value: T | null) => void;
    columns: TableColumn<T>[];
    options: G[];
    getValues: (option: G) => T[];
    getGroupLabel: (value: G) => ReactNode;
}) {
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
    const handleClear = useCallback(() => onChange(null), [onChange]);
    if (options.length === 0) return <></>;
    return (
        <>
            {value && (
                <Tooltip
                    title={
                        <Stack>
                            {columns.map((column) => (
                                <Typography key={column.name}>
                                    {column.text(value)}
                                </Typography>
                            ))}
                        </Stack>
                    }
                >
                    <ButtonGroup variant="outlined">
                        <Button onClick={handleOpen}>{getText(value)}</Button>
                        <Button onClick={handleClear}>
                            <ClearIcon />
                        </Button>
                    </ButtonGroup>
                </Tooltip>
            )}
            {!value && (
                <Button variant="outlined" onClick={handleOpen}>
                    {label}
                </Button>
            )}
            <Dialog open={open} onClose={handleClose}>
                {label && <DialogTitle>{label}</DialogTitle>}
                <DialogContent>
                    <Grid container spacing={1}>
                        {options.map((option) => (
                            <Grid item key={option.id}>
                                <Typography variant="h6">
                                    {getGroupLabel(option)}
                                </Typography>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((x) => (
                                                <TableCell key={x.name}>
                                                    {x.name}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {getValues(option).map((x) => (
                                            <OptionRow
                                                columns={columns}
                                                onClick={handleClick}
                                                value={x}
                                                key={x.id}
                                            />
                                        ))}
                                    </TableBody>
                                </Table>
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
});
