import React, { useMemo } from "react";
import { useDataStore } from "../stores/data";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { count, distinct } from "../helpers/algo";
import { Material } from "../../common/data";

type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];

interface GridColumnDefinition<T> extends Omit<GridColDef, "field"> {
    field: KeysOfType<T, string | number>;
}

interface FactionRow {
    id: string;
    name: string;
    numberOfWarcrolls: number;
    models: number;
    plasticModels: number;
    unknownModels: string;
}

const columns: GridColumnDefinition<FactionRow>[] = [
    {
        field: "id",
        headerName: "",
        renderCell: (row: GridRenderCellParams<string>) => <></>,
    },
    {
        field: "name",
        headerName: "Name",
        width: 200,
    },
    {
        field: "numberOfWarcrolls",
        headerName: "Warcrolls",
    },
    {
        field: "models",
        headerName: "Models",
    },
    {
        field: "plasticModels",
        headerName: "Plastic Models",
    },
    {
        field: "unknownModels",
        headerName: "Unknown Models",
        width: 400,
    },
];

export default function Allegiances() {
    const data = useDataStore();
    const allegiances = data.allegiances;
    const rows = useMemo<FactionRow[]>(
        () =>
            allegiances
                .map((allegiance) => {
                    const warscrolls = data.unitList.filter((unit) =>
                        unit.factions.some((f) => f.id === allegiance.id)
                    );
                    const models = distinct(warscrolls.map((x) => x.model));
                    const plasticModels = count(
                        models,
                        (x) => x.material === Material.Plastic
                    );
                    const unknownModels = models
                        .filter((x) => x.material === undefined)
                        .slice(0, 5)
                        .map((x) => x.name)
                        .join(", ");
                    return {
                        id: allegiance.id,
                        name: allegiance.name,
                        numberOfWarcrolls: warscrolls.length,
                        models: models.length,
                        plasticModels,
                        unknownModels,
                    };
                })
                .filter((x) => x.plasticModels > 0),
        [allegiances]
    );
    return <DataGrid autoHeight rows={rows} columns={columns} />;
}
