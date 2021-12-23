import React from "react";
import { observer } from "mobx-react-lite";
import BoxesList from "./boxes-list";
import { Missing, useBasketStore } from "../stores/basket";
import ResponsiveTable, {
    ResponsiveTableColumn,
} from "../atoms/responsive-table";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { useOwnedStore } from "../stores/owned";

function AddToOwned({ missing }: { missing: Missing }) {
    const ownedStore = useOwnedStore();
    const handleClick = useCallback(() => {
        ownedStore.addOwned(missing.model, missing.count);
    }, [missing.count, missing.model, ownedStore]);
    return <Button onClick={handleClick}>Add</Button>;
}

const columns: ResponsiveTableColumn<Missing>[] = [
    {
        name: "Name",
        text: (x) => x.model.name,
    },
    {
        name: "Count",
        text: (x) => x.count,
    },
    {
        name: "In basket",
        text: (x) => x.inBasket,
    },
    {
        name: "Buy",
        // eslint-disable-next-line react/display-name
        text: (x) => <BoxesList model={x.model} title="Buy" />,
    },
    {
        name: "Add to owned",
        text: (x) => <AddToOwned missing={x} />,
    },
];

function MissingsList() {
    const basketStore = useBasketStore();
    const neededModels = basketStore.missingModels;

    return <ResponsiveTable columns={columns} rows={neededModels} />;
}

export default observer(MissingsList);
