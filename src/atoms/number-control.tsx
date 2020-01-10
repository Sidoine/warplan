import * as React from "react";
import { Input, IconButton, Icon } from "@material-ui/core";

export interface NumberControlProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
}

export class NumberControl extends React.Component<NumberControlProps, {}> {
    render() {
        return <Input type="text" onChange={this.onCountChange} value={this.props.value}
        endAdornment={
                    <><IconButton onClick={this.plus}><Icon className="fa fa-plus"/></IconButton>
                    <IconButton onClick={this.minus}><Icon className="fa fa-minus"/></IconButton></>
        }>
                </Input                >;
                /*                     <input size={2} />    
                    
*/
    }

    private onCountChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = parseInt(event.target.value);
        if (this.props.min === undefined || value >= this.props.min) this.props.onChange(value);
    }

    private plus = () => this.props.onChange(this.props.value + 1);
    private minus = () => {
        if (this.props.min === undefined || this.props.value > this.props.min) this.props.onChange(this.props.value - 1);
    } 
}