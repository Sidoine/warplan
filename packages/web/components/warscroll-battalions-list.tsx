import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";
import BattalionsList from "./battalions-list";
import {
    WarscrollBattalion,
    WarscrollBattalionUnit
} from "../stores/warscroll";
import { join } from "../helpers/react";
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Tooltip
} from "@material-ui/core";
import ResponsiveTable, {
    ResponsiveTableColumn
} from "../atoms/responsive-table";
import ClearIcon from "@material-ui/icons/Clear";
import { useStores } from "../stores";
import WarscrollButton from "../atoms/warscroll-button";

const UnitTypeView = observer(function UnitTypeView({
    battalionUnit
}: {
    battalionUnit: WarscrollBattalionUnit;
}) {
    const definition = battalionUnit.definition;

    return (
        <Tooltip title={definition.restrictions}>
            <span>
                {definition.min}{" "}
                {definition.max !== definition.min && ` - ${definition.max} `}{" "}
                {definition.name}{" "}
                {battalionUnit.units.length > 0 && (
                    <>
                        (
                        {battalionUnit.units
                            .map(x => x.definition.name)
                            .join(", ")}
                        )
                    </>
                )}
            </span>
        </Tooltip>
    );
});

function BattalionName({ x }: { x: WarscrollBattalion }) {
    return (
        <>
            {x.definition.name} <WarscrollButton item={x} />
        </>
    );
}

function WarscrollBattalionsList() {
    const { armyListStore: warscrollStore } = useStores();
    const columns = useMemo<ResponsiveTableColumn<WarscrollBattalion>[]>(() => {
        return [
            {
                name: "Name",
                text: x => <BattalionName key={x.id} x={x} />
            },
            {
                name: "Units",
                text: x =>
                    join(
                        x.unitTypes.map(y => (
                            <UnitTypeView key={y.id} battalionUnit={y} />
                        )),
                        ", "
                    )
            },
            {
                name: "Actions",
                text: x => (
                    <Button onClick={() => warscrollStore.removeBattalion(x)}>
                        <ClearIcon />
                    </Button>
                )
            }
        ];
    }, [warscrollStore]);

    const warscroll = warscrollStore.warscroll;

    return (
        <Card>
            <CardHeader title="Battalions" />
            <CardContent>
                <ResponsiveTable
                    rows={warscroll.battalions}
                    columns={columns}
                ></ResponsiveTable>
            </CardContent>
            <CardActions>
                <BattalionsList title="Add..." />
            </CardActions>
        </Card>
    );
}

export default observer(WarscrollBattalionsList);
