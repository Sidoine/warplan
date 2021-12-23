import * as React from "react";
import { observer } from "mobx-react-lite";
import BasketElementEdit from "./basket-element-edit";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
} from "@mui/material";
import { useUiStore } from "../stores/ui";
import { useBasketStore } from "../stores/basket";

function Basket() {
    const uiStore = useUiStore();
    const basketStore = useBasketStore();
    const basket = basketStore.basket;
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
                    {basket.map((x) => (
                        <BasketElementEdit key={x.id} basketElement={x} />
                    ))}
                </TableBody>
            </Table>
            <span>
                {basket.reduce((p, x) => x.count * x.box.price + p, 0)} €
            </span>
            <Button onClick={uiStore.showBasketPopin}>Manage baskets</Button>
        </>
    );
}

export default observer(Basket);
