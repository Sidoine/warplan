import * as React from "react";
import { Model } from "../../common/data";
import { observer } from "mobx-react-lite";
import AddButton, { TableColumn } from "../atoms/add-button";
import { useStores } from "../stores";

export interface ModelsListProps {
    title: string;
}
const columns: TableColumn<Model>[] = [{ name: "Name", text: x => x.name }];

function ModelsList({ title }: ModelsListProps) {
    const { ownedStore, unitsStore } = useStores();
    return (
        <AddButton
            variant="add"
            columns={columns}
            placeholder={title}
            options={unitsStore.modelsList}
            onChange={ownedStore.addOwned}
        />
    );
}

export default observer(ModelsList);
