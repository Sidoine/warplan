import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import NumberControl from "../atoms/number-control";
import { BasketElement } from "../stores/basket";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStores } from "../stores";

export interface BasketElementEditProps {
    basketElement: BasketElement;
}

function BasketElementEdit({ basketElement }: BasketElementEditProps) {
    const { basketStore } = useStores();
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
                <IconButton onClick={handleRemove}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
}

export default observer(BasketElementEdit);
