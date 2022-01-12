import React, { useState, useCallback, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import AddIcon from "@mui/icons-material/Add";
import {
    IconButton,
    Dialog,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    DialogContent,
    DialogTitle,
    ButtonGroup,
    Button,
    Tooltip,
    Stack,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export interface HasId {
    id: string;
}

export interface TableColumn<T> {
    text: (x: T) => ReactNode;
    name: string;
}

interface AddButtonBaseProps<T extends HasId> {
    options: T[];
    placeholder?: string;
    columns: TableColumn<T>[];
}

export interface AddButtonProps<T extends HasId> extends AddButtonBaseProps<T> {
    variant: "add";
    onChange: (t: T) => void;
}

export interface ClearableButtonProps<T extends HasId>
    extends AddButtonBaseProps<T> {
    variant: "clearable";
    value: T | null;
    onChange: (t: T | null) => void;
}

export function OptionRow<T extends HasId>({
    value,
    onClick,
    columns,
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
            {columns.map((y) => (
                <TableCell key={y.name}>{y.text(value)}</TableCell>
            ))}
        </TableRow>
    );
}

function AddButton<T extends HasId>(
    props: AddButtonProps<T> | ClearableButtonProps<T>
) {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback((e: React.MouseEvent) => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => setOpen(false), []);

    const { onChange, variant, placeholder, columns, options } = props;

    const handleClick = useCallback(
        (option: T) => {
            onChange(option);
            setOpen(false);
        },
        [onChange]
    );
    const handleClear = useCallback(() => {
        if (variant === "clearable") onChange(null as unknown as T);
    }, [variant, onChange]);

    return (
        <>
            {props.variant === "add" && (
                <IconButton color="primary" onClick={handleOpen} size="large">
                    <AddIcon />
                </IconButton>
            )}
            {props.variant === "clearable" && props.value && (
                <ButtonGroup variant="outlined">
                    <Tooltip
                        title={
                            <Stack>
                                {columns.map((x, index) => (
                                    <div key={index}>
                                        {props.value && x.text(props.value)}
                                    </div>
                                ))}
                            </Stack>
                        }
                    >
                        <Button onClick={handleOpen}>
                            {columns[0].text(props.value)}
                        </Button>
                    </Tooltip>
                    <Button onClick={handleClear}>
                        <ClearIcon />
                    </Button>
                </ButtonGroup>
            )}
            {props.variant === "clearable" && !props.value && (
                <Button variant="outlined" onClick={handleOpen}>
                    {placeholder}
                </Button>
            )}
            <Dialog open={open} onClose={handleClose}>
                {placeholder && <DialogTitle>{placeholder}</DialogTitle>}
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((x) => (
                                    <TableCell key={x.name}>{x.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {options.map((x) => (
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
