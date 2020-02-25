import * as React from "react";
import { Unit } from "../stores/units";
import { AddButton, TableColumn } from "../atoms/dropdown-list";
import { useStores } from "../stores";
import { observer } from "mobx-react";

const columns: TableColumn<Unit>[] = [
    { name: "Name", text: x => x.model.name },
    { name: "Points", text: x => x.points }
];

export const UnitsList = observer(() => {
    const { warscrollStore } = useStores();
    return (
        <AddButton
            columns={columns}
            options={warscrollStore.availableUnits}
            onChange={unit => warscrollStore.addUnit(unit)}
        />
    );
});
