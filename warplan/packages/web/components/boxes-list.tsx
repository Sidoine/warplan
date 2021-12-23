import React, { useCallback } from "react";
import { Model, Box } from "../../common/data";
import { observer } from "mobx-react-lite";
import DropdownObjects from "../atoms/dropdown-objects";
import { useBasketStore } from "../stores/basket";
import { useDataStore } from "../stores/data";

export interface BoxesListProps {
    title: string;
    model: Model;
}

function BoxesList({ model, title }: BoxesListProps) {
    const basketStore = useBasketStore();
    const unitsStore = useDataStore();
    const handleChange = useCallback(
        (box: Box | null) => {
            if (box) basketStore.addBasketElement(box);
        },
        [basketStore]
    );

    const boxes = unitsStore.boxes.filter((x) =>
        x.units.some((y) => y.models.some((z) => z.id === model.id))
    );
    return (
        <DropdownObjects<Box>
            getText={(x) => x.name}
            options={boxes}
            value={null}
            onChange={handleChange}
            placeholder={title}
        />
    );
}

export default observer(BoxesList);
