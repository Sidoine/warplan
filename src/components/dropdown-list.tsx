import * as React from "react";
import { observer } from "mobx-react";
import AddIcon from "@material-ui/icons/Add";
import { Select, MenuItem } from "@material-ui/core";
import { observable } from "mobx";

export interface HasId {
    id: string;
}

export interface DropdownObjectsProps<T extends HasId> {
    value: T | null;
    options: T[];
    onChange: (value: T | null) => void;
    getText: (value: T) => string;
    placeholder?: string;
}

@observer
export class DropdownObjects<T extends HasId> extends React.Component<DropdownObjectsProps<T>> {
    private handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const item = event.target.value && this.props.options.find(x => x.id === event.target.value);
        if (item) this.props.onChange(item); else this.props.onChange(null);
    }

    render() {
        return <Select value={(this.props.value && this.props.value.id) || ""} onChange={this.handleChange}>
                {this.props.options.map(x => <MenuItem value={x.id} key={x.id}>{this.props.getText(x)}</MenuItem>)}
            </Select>;
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
export class DropdownValues<T extends Value> extends React.Component<DropdownValuesProps<T>> {
    private handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const item = this.props.options.find(x => x === event.target.value);
        if (item !== undefined) {
            this.props.onChange(item);
        }
    }
    render() {
        return <Select value={this.props.value} onChange={this.handleChange}>
            { this.props.options.map(x => <MenuItem key={x} value={x}>{ this.props.getText(x) }</MenuItem>)}
            </Select>;
    }
}

export interface AddButtonProps<T extends HasId> {
    options: T[];
    content?: (t: T) => JSX.Element;
    onChange: (t: T) => void;
    placeholder?: string;
}

@observer
export class AddButton<T extends HasId> extends React.Component<AddButtonProps<T>> {
    @observable open = false;
    render() {
        return <AddIcon />;
    }
}