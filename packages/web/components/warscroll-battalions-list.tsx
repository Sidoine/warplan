import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";
import BattalionsList from "./battalions-list";
import { WarscrollBattalion } from "../stores/warscroll";
import { BattalionUnit } from "../../common/data";
import { join } from "../helpers/react";
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions
} from "@material-ui/core";
import ResponsiveTable, {
    ResponsiveTableColumn
} from "../atoms/responsive-table";
import ClearIcon from "@material-ui/icons/Clear";
import { useStores } from "../stores";
import WarscrollButton from "../atoms/warscroll-button";

function RenderUnit({
    bu,
    counts
}: {
    bu: BattalionUnit;
    counts: Map<string, { count: number }>;
}) {
    const countsBu = counts.get(bu.id);
    if (countsBu !== undefined) {
        const count = countsBu.count;
        if (count > 0) {
            //  return <span style={{ color:  'red' } } key={bu.id}>{ bu.count} { join(bu.units.map(x => <a key={x.id} href="" onClick={e => addUnit(x, e, count)}>{x.model.name}</a>), "/") } </span>;
            return (
                <span style={{ color: "red" }} key={bu.id}>
                    {bu.min}{" "}
                    {bu.max !== bu.min && ` - ${bu.max} `}{" "}
                    {bu.name}{" "}
                </span>
            );
        }
    }

    return (
        <span key={bu.id}>
            {bu.min} {bu.max !== bu.min && ` - ${bu.max} `}{" "}
            {bu.name}{" "}
        </span>
    );
}

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
        const counts = new Map<string, { count: number }>();
        return [
            {
                name: "Name",
                text: x => <BattalionName key={x.id} x={x} />
            },
            {
                name: "Units",
                text: x =>
                    join(
                        x.definition.units.map(y => (
                            <RenderUnit key={y.id} bu={y} counts={counts} />
                        )),
                        ", "
                    )
            },
            {
                name: "Actions",
                // eslint-disable-next-line react/display-name
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
