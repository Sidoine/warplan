import * as React from "react";
import { observer } from "mobx-react";
import { Dropdown, DropdownItemProps, DropdownProps } from "semantic-ui-react";
import { computed } from "mobx";

export interface HasId {
    id: string;
}

export interface DropdownObjectsProps<T extends HasId> {
    value: T;
    options: T[];
    onChange: (value: T) => void;
    getText: (value: T) => string;
}

@observer
export class DropdownObjects<T extends HasId> extends React.Component<DropdownObjectsProps<T>> {
    @computed
    private get options(): DropdownItemProps[] {
        return this.props.options.map(x => ({ key: x.id, text: this.props.getText(x), value: x.id }));
    }

    private handleChange = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        const item = this.props.options.find(x => x.id === data.value);
        if (item) this.props.onChange(item);
    }

    render() {
        return <Dropdown selection options={this.options} value={this.props.value.id} onChange={this.handleChange} />;
    }
}

export type Value = boolean | number | string;

export interface DropdownValuesProps<T extends Value> {
    value: T;
    options: T[];
    onChange: (value: T) => void;
    getText: (value: T) => string;
}

@observer
export class DropdownValues<T extends Value> extends React.Component<DropdownValuesProps<T>> {
    @computed
    private get options(): DropdownItemProps[] {
        return this.props.options.map(x => ({ key: x, text: this.props.getText(x), value: x }));
    }

    private handleChange = (x: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        const item = this.props.options.find(x => x === data.value);
        if (item !== undefined) {
            this.props.onChange(item);
        }
    }

    render() {
        return <Dropdown selection options={this.options} value={this.props.value} onChange={this.handleChange} />;
    }
}