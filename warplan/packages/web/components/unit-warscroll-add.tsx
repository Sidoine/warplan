import React, { useCallback } from "react";
import { Unit } from "../../common/data";
import AddButton, { TableColumn } from "../atoms/add-button";
import { observer } from "mobx-react-lite";
import { Role } from "../../common/definitions";
import { useArmyListStore } from "../stores/army-list";

const columns: TableColumn<Unit>[] = [
    { name: "Name", text: (x) => x.name },
    { name: "Points", text: (x) => x.points },
];

export const UnitWarscrollAdd = observer(({ role }: { role: Role }) => {
    const warscrollStore = useArmyListStore();
    const handleChange = useCallback(
        (unit: Unit) => warscrollStore.addUnit(unit),
        [warscrollStore]
    );

    return (
        <AddButton
            variant="add"
            columns={columns}
            options={warscrollStore.getAvailableUnitsOfRole(role)}
            onChange={handleChange}
        />
    );
});
