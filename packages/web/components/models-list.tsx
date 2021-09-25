import * as React from "react";
import { Model } from "../../common/unit";
import { observer } from "mobx-react-lite";
import AddButton, { TableColumn } from "../atoms/add-button";
import { useStores } from "../stores";

export interface ModelsListProps {
    title: string;
}
const columns: TableColumn<Model>[] = [{ name: "Name", text: x => x.name }];

function ModelsList({ title }: ModelsListProps) {
    const { ownedStore, unitsStore } = useStores();
    const onChange = React.useCallback(
        (model: Model) => {
            ownedStore.addOwned(model);
        },
        [ownedStore]
    );

    return (
        <AddButton
            columns={columns}
            placeholder={title}
            options={unitsStore.modelsList}
            onChange={onChange}
        />
    );
}

export default observer(ModelsList);
