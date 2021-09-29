import React, { useCallback } from "react";
import { Battalion } from "../../common/data";
import { observer } from "mobx-react-lite";
import AddButton, { TableColumn } from "../atoms/add-button";
import { useStores } from "../stores";

export interface BattalionsListProps {
    title: string;
}

const columns: TableColumn<Battalion>[] = [
    { name: "Points", text: x => x.points },
    { name: "Name", text: x => x.name },
    {
        name: "Description",
        text: b =>
            b.units
                .map(y => y.units.map(x => x.join("-")).join("/"))
                .join(" ― ")
    }
];

function BattalionsList({ title }: BattalionsListProps) {
    const { armyListStore: warscrollStore } = useStores();
    const items = warscrollStore.availableBattalions;
    const onChange = useCallback(
        (model: Battalion) => {
            warscrollStore.addBattalion(model);
        },
        [warscrollStore]
    );
    return (
        <AddButton
            placeholder={title}
            columns={columns}
            options={items}
            onChange={onChange}
        />
    );
}

export default observer(BattalionsList);
