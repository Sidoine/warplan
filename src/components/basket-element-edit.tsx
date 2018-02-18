import * as React from "react";
import { UnitsStore, BasketElement } from "../stores/units";
import { observer, inject } from "mobx-react";
import { Button, Glyphicon } from "react-bootstrap";
import { NumberControl } from "../atoms/number-control";

export interface BasketElementEditProps {
    unitsStore?: UnitsStore;
    basketElement: BasketElement;
}

@inject('unitsStore')
@observer
export class BasketElementEdit extends React.Component<BasketElementEditProps, {}> {
    render() {
        const basketElement = this.props.basketElement;
        return <tr>
            <td>{basketElement.box.name}</td>
            <td><NumberControl value={basketElement.count} onChange={this.onCountChange} /></td>
            <td>{basketElement.box.price * basketElement.count}</td>
            <td>
            <Button onClick={() => this.props.unitsStore!.removeBasketElement(this.props.basketElement)}><Glyphicon glyph="remove"/></Button>
            </td></tr>;
    }

    private onCountChange = (value: number) => {
        this.props.unitsStore!.setBasketElementCount(this.props.basketElement, value);
    }
}