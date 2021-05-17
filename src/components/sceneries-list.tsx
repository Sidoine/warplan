import * as React from "react";
import { EndlessSpell } from "../stores/unit";
import { observer } from "mobx-react-lite";
import AddButton, { TableColumn } from "../atoms/add-button";
import { useStores } from "../stores";

export interface SceneriesListProps {
    title: string;
}
const columns: TableColumn<EndlessSpell>[] = [
    { name: "Name", text: (x) => x.name },
    { name: "Flavor", text: (x) => x.flavor },
    { name: "Points", text: (x) => x.points },
];

function SceneriesList({ title }: SceneriesListProps) {
    const { warscrollStore } = useStores();

    return (
        <AddButton
            columns={columns}
            placeholder={title}
            options={warscrollStore.availableEndlessSpells}
            onChange={warscrollStore.addScenery}
        />
    );
}

export default observer(SceneriesList);
