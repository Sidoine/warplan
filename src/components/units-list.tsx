import * as React from "react";
import { Unit } from "../stores/units";
import { AddButton, TableColumn } from "../atoms/dropdown-list";
import { useStores } from "../stores";

const columns: TableColumn<Unit>[] = [
    { name: "Name", text: x => x.model.name },
    { name: "Points", text: x => x.points }
];

export function UnitsList() {
    const { warscrollStore } = useStores();
    return (
        <AddButton
            columns={columns}
            options={warscrollStore.availableUnits}
            onChange={unit => warscrollStore.addUnit(unit)}
        />
    );
}
