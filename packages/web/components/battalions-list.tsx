import React, { useCallback } from "react";
import { Battalion } from "../../common/data";
import { observer } from "mobx-react-lite";
import AddButton, { TableColumn } from "../atoms/add-button";
import { useStores } from "../stores";
import { AllAbilities } from "../atoms/warscroll-components";

export interface BattalionsListProps {
    title: string;
}

const columns: TableColumn<Battalion>[] = [
    { name: "Name", text: x => x.name },
    {
        name: "Description",
        text: b => b.units.map(y => y.name).join(" ― ")
    },
    {
        name: "Abilities",
        text: x => <AllAbilities abilities={x.abilities} />
    }
];

function BattalionsList({ title }: BattalionsListProps) {
    const { armyListStore } = useStores();
    const items = armyListStore.availableBattalions;
    const onChange = useCallback(
        (model: Battalion) => {
            armyListStore.addBattalion(model);
        },
        [armyListStore]
    );
    return (
        <AddButton
            variant="add"
            placeholder={title}
            columns={columns}
            options={items}
            onChange={onChange}
        />
    );
}

export default observer(BattalionsList);
