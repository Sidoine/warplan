import * as React from "react";
import { Button, FormControl, InputGroup, Glyphicon } from "react-bootstrap";

export interface NumberControlProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
}

export class NumberControl extends React.Component<NumberControlProps, {}> {
    render() {
        return <InputGroup>
                    <FormControl type="text" value={this.props.value} onChange={this.onCountChange} />
                    <InputGroup.Button>
                        <Button onClick={this.plus}><Glyphicon glyph="plus"/></Button>
                        <Button onClick={this.minus}><Glyphicon glyph="minus"/></Button>
                    </InputGroup.Button>
                </InputGroup>;
    }

    private onCountChange = (event: React.FormEvent<FormControl>) => {
        const value = parseInt((event.target as any).value);
        if (this.props.min === undefined || value >= this.props.min) this.props.onChange(value);
    }

    private plus = () => this.props.onChange(this.props.value + 1);
    private minus = () => {
        if (this.props.min === undefined || this.props.value > this.props.min) this.props.onChange(this.props.value - 1);
    } 
}