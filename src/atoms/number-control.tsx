import * as React from "react";
import { Input, Button, InputOnChangeData } from "semantic-ui-react";

export interface NumberControlProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
}

export class NumberControl extends React.Component<NumberControlProps, {}> {
    render() {
        return <Input type="text" action onChange={this.onCountChange} value={this.props.value} size="mini">
                    <input size={2} />    
                    <Button onClick={this.plus} size="tiny" icon="plus"/>
                    <Button onClick={this.minus} size="tiny" icon="minus"/>
                </Input>;
    }

    private onCountChange = (event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) => {
        const value = parseInt(data.value);
        if (this.props.min === undefined || value >= this.props.min) this.props.onChange(value);
    }

    private plus = () => this.props.onChange(this.props.value + 1);
    private minus = () => {
        if (this.props.min === undefined || this.props.value > this.props.min) this.props.onChange(this.props.value - 1);
    } 
}