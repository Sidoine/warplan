import * as React from "react";
import { Input, Button, Icon, InputOnChangeData } from "semantic-ui-react";

export interface NumberControlProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
}

export class NumberControl extends React.Component<NumberControlProps, {}> {
    render() {
        return <Input type="text" action onChange={this.onCountChange} value={this.props.value}>
                    <input/>    
                    <Button onClick={this.plus}><Icon name="plus"/></Button>
                    <Button onClick={this.minus}><Icon name="minus"/></Button>
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