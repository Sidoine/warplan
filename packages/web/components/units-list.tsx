import React, { useCallback } from "react";
import { Unit } from "../../common/unit";
import AddButton, { TableColumn } from "../atoms/add-button";
import { useStores } from "../stores";
import { observer } from "mobx-react-lite";

const columns: TableColumn<Unit>[] = [
    { name: "Name", text: x => x.name },
    { name: "Points", text: x => x.points }
];

export const UnitsList = observer(() => {
    const { warscrollStore } = useStores();
    const handleChange = useCallback(
        (unit: Unit) => warscrollStore.addUnit(unit),
        [warscrollStore]
    );

    return (
        <AddButton
            columns={columns}
            options={warscrollStore.availableUnits}
            onChange={handleChange}
        />
    );
});
