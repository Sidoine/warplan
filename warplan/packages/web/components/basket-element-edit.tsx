import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import NumberControl from "../atoms/number-control";
import { BasketElement, useBasketStore } from "../stores/basket";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export interface BasketElementEditProps {
    basketElement: BasketElement;
}

function BasketElementEdit({ basketElement }: BasketElementEditProps) {
    const basketStore = useBasketStore();
    const onCountChange = (value: number) => {
        basketStore.setBasketElementCount(basketElement, value);
    };

    const handleRemove = useCallback(() => {
        basketStore.removeBasketElement(basketElement);
    }, [basketElement, basketStore]);

    return (
        <tr>
            <td>{basketElement.box.name}</td>
            <td>
                <NumberControl
                    value={basketElement.count}
                    onChange={onCountChange}
                />
            </td>
            <td>{basketElement.box.price * basketElement.count}</td>
            <td>
                <IconButton onClick={handleRemove} size="large">
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
}

export default observer(BasketElementEdit);
