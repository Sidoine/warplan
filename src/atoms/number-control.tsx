import * as React from "react";
import { IconButton, TextField, InputAdornment } from "@material-ui/core";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { observer } from "mobx-react";

export interface NumberControlProps {
    value: number;
    onChange: (value: number) => void;
    label?: string;
    min?: number;
    max?: number;
}

@observer
export class NumberControl extends React.Component<NumberControlProps, {}> {
    render() {
        return (
            <TextField
                type="text"
                label={this.props.label}
                onChange={this.onCountChange}
                value={this.props.value}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                color="primary"
                                size="small"
                                onClick={this.plus}
                            >
                                <ArrowDropUp />
                            </IconButton>
                            <IconButton
                                color="secondary"
                                size="small"
                                onClick={this.minus}
                            >
                                <ArrowDropDown />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        );
    }

    private onCountChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = parseInt(event.target.value);
        if (this.props.min === undefined || value >= this.props.min)
            this.props.onChange(value);
    };

    private plus = () => {
        if (this.props.max === undefined || this.props.value < this.props.max)
            this.props.onChange(this.props.value + 1);
    };
    private minus = () => {
        if (this.props.min === undefined || this.props.value > this.props.min)
            this.props.onChange(this.props.value - 1);
    };
}
