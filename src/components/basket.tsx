import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { BasketElementEdit } from "./basket-element-edit";
import { UiStore } from "../stores/ui";
import { BasketStore } from "../stores/basket";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button
} from "@material-ui/core";

export interface BasketProps {
    unitsStore?: UnitsStore;
    uiStore?: UiStore;
    basketStore?: BasketStore;
}

@inject("unitsStore", "uiStore", "basketStore")
@observer
export class Basket extends React.Component<BasketProps, {}> {
    render() {
        const basket = this.props.basketStore!.basket;
        return (
            <>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Count</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.map(x => (
                            <BasketElementEdit key={x.id} basketElement={x} />
                        ))}
                    </TableBody>
                </Table>
                <span>
                    {basket.reduce((p, x) => x.count * x.box.price + p, 0)} €
                </span>
                <Button onClick={() => this.props.uiStore!.showBasketPopin()}>
                    Manage baskets
                </Button>
            </>
        );
    }
}
