import * as React from "react";
import { EndlessSpell } from "../stores/units";
import { observer } from "mobx-react-lite";
import AddButton, { TableColumn } from "../atoms/add-button";
import { useStores } from "../stores";

export interface SceneriesListProps {
    title: string;
}
const columns: TableColumn<EndlessSpell>[] = [
    { name: "Name", text: (x) => x.name },
    { name: "Description", text: (x) => x.description },
    { name: "Points", text: (x) => x.points },
];

function SceneriesList({ title }: SceneriesListProps) {
    const { warscrollStore, unitsStore } = useStores();
    const onChange = React.useCallback(
        (scenery: EndlessSpell) => {
            warscrollStore.addScenery(scenery);
        },
        [warscrollStore]
    );

    return (
        <AddButton
            columns={columns}
            placeholder={title}
            options={unitsStore.sceneryList}
            onChange={onChange}
        />
    );
}

export default observer(SceneriesList);
