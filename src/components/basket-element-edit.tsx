import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { BasketStore, BasketElement } from "../stores/basket";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


export interface BasketElementEditProps {
    unitsStore?: UnitsStore;
    basketElement: BasketElement;
    basketStore?: BasketStore;
}

@inject('unitsStore', "basketStore")
@observer
export class BasketElementEdit extends React.Component<BasketElementEditProps, {}> {
    render() {
        const basketElement = this.props.basketElement;
        return <tr>
            <td>{basketElement.box.name}</td>
            <td><NumberControl value={basketElement.count} onChange={this.onCountChange} /></td>
            <td>{basketElement.box.price * basketElement.count}</td>
            <td>
            <IconButton onClick={() => this.props.basketStore!.removeBasketElement(this.props.basketElement)}><DeleteIcon/></IconButton>
            </td></tr>;
    }

    private onCountChange = (value: number) => {
        this.props.basketStore!.setBasketElementCount(this.props.basketElement, value);
    }
}