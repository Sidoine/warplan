import * as React from "react";
import { Input, IconButton } from "@material-ui/core";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { observer } from "mobx-react";

export interface NumberControlProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
}

@observer
export class NumberControl extends React.Component<NumberControlProps, {}> {
    render() {
        return <Input type="text" onChange={this.onCountChange} value={this.props.value}
        endAdornment={
                    <><IconButton color="primary" size="small" onClick={this.plus}><ArrowDropUp/></IconButton>
                    <IconButton color="secondary" size="small" onClick={this.minus}><ArrowDropDown/></IconButton></>
        }>
                </Input>;                
    }

    private onCountChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = parseInt(event.target.value);
        if (this.props.min === undefined || value >= this.props.min) this.props.onChange(value);
    }

    private plus = () => {
        if (this.props.max === undefined || this.props.value < this.props.max) this.props.onChange(this.props.value + 1);
    }
    private minus = () => {
        if (this.props.min === undefined || this.props.value > this.props.min) this.props.onChange(this.props.value - 1);
    } 
}