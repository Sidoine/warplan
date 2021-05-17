import React, { useCallback } from "react";
import { Model, Box } from "../stores/unit";
import { observer } from "mobx-react-lite";
import DropdownObjects from "../atoms/dropdown-objects";
import { useStores } from "../stores";

export interface BoxesListProps {
    title: string;
    model: Model;
}

function BoxesList({ model, title }: BoxesListProps) {
    const { basketStore, unitsStore } = useStores();
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
