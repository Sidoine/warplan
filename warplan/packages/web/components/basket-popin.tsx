import React, { ChangeEvent, useCallback, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Input,
    IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useBasketStore } from "../stores/basket";
import { useUiStore } from "../stores/ui";

function BasketItem({ x }: { x: string }) {
    const basketStore = useBasketStore();
    const handleUpdate = useCallback(() => {
        basketStore.saveBasket(x);
    }, [basketStore, x]);

    const handleLoad = useCallback(
        () => basketStore.loadBasket(x),
        [basketStore, x]
    );
    const handleDelete = useCallback(
        () => basketStore.removeBasket(x),
        [basketStore, x]
    );
    return (
        <div>
            {x}
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleLoad}>Load</Button>
            <IconButton onClick={handleDelete} size="large">
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

function BasketPopin() {
    const uiStore = useUiStore();
    const basketStore = useBasketStore();
    const [basketName, setBasketName] = useState("New basket");
    const handleClose = useCallback(
        () => uiStore.closeBasketPopin(),
        [uiStore]
    );
    const handleChange = useCallback(
        (x: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setBasketName(x.target.value);
        },
        []
    );
    const handleAdd = useCallback(
        () => basketStore.saveBasket(basketName),
        [basketName, basketStore]
    );

    return (
        <Dialog onClose={handleClose} open={true}>
            <DialogTitle>Baskets</DialogTitle>

            <DialogContent>
                {basketStore.baskets.map((x) => (
                    <BasketItem key={x} x={x} />
                ))}
                <Input type="text" value={basketName} onChange={handleChange} />
                <Button onClick={handleAdd}>Add</Button>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BasketPopin;
