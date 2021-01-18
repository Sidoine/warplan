import * as React from "react";
import { observer } from "mobx-react";
import AddIcon from "@material-ui/icons/Add";
import {
    Select,
    MenuItem,
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
import { observable, action } from "mobx";

export interface HasId {
    id: string;
}

export interface DropdownObjectsProps<T extends HasId> {
    value: T | null;
    options: T[];
    onChange: (value: T | null) => void;
    getText: (value: T) => string;
    placeholder?: string;
    clearable?: boolean;
}

@observer
export class DropdownObjects<T extends HasId> extends React.Component<
    DropdownObjectsProps<T>
> {
    private handleChange = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        if (event.target.value) {
            const item = this.props.options.find(
                x => x.id === event.target.value
            );
            if (item) this.props.onChange(item);
            else this.props.onChange(null);
        }
    };

    render() {
        return (
            <Select
                value={(this.props.value && this.props.value.id) || ""}
                onChange={this.handleChange}
            >
                {this.props.clearable && <MenuItem value="">None</MenuItem>}
                {this.props.options.map(x => (
                    <MenuItem value={x.id} key={x.id}>
                        {this.props.getText(x)}
                    </MenuItem>
                ))}
            </Select>
        );
    }
}

export type Value = number | string;

export interface DropdownValuesProps<T extends Value> {
    value: T;
    options: T[];
    onChange: (value: T) => void;
    getText: (value: T) => string;
}

@observer
export class DropdownValues<T extends Value> extends React.Component<
    DropdownValuesProps<T>
> {
    private handleChange = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        const item = this.props.options.find(x => x === event.target.value);
        if (item !== undefined) {
            this.props.onChange(item);
        }
    };
    render() {
        return (
            <Select value={this.props.value} onChange={this.handleChange}>
                {this.props.options.map(x => (
                    <MenuItem key={x} value={x}>
                        {this.props.getText(x)}
                    </MenuItem>
                ))}
            </Select>
        );
    }
}

export interface TableColumn<T> {
    text: (x: T) => string | undefined | null | number;
    name: string;
}

export interface AddButtonProps<T extends HasId> {
    options: T[];
    onChange: (t: T) => void;
    placeholder?: string;
    columns: TableColumn<T>[];
}

@observer
export class AddButton<T extends HasId> extends React.Component<
    AddButtonProps<T>
> {
    @observable open = false;
    render() {
        return (
            <>
                <IconButton color="primary" onClick={this.handleOpen}>
                    <AddIcon />
                </IconButton>
                <Dialog open={this.open} onClose={this.handleClose}>
                    {this.props.placeholder && (
                        <DialogTitle>{this.props.placeholder}</DialogTitle>
                    )}
                    <DialogContent>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {this.props.columns.map(x => (
                                        <TableCell key={x.name}>
                                            {x.name}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.options.map(x => (
                                    <TableRow
                                        key={x.id}
                                        hover
                                        onClick={() => {
                                            this.open = false;
                                            this.props.onChange(x);
                                        }}
                                    >
                                        {this.props.columns.map(y => (
                                            <TableCell key={y.name}>
                                                {y.text(x)}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </DialogContent>
                </Dialog>
            </>
        );
    }

    @action
    private handleOpen = (e: React.MouseEvent) => {
        this.open = true;
    };
    @action private handleClose = () => (this.open = false);
}
