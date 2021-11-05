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
} from "@mui/material";
import ResponsiveTable, {
    ResponsiveTableColumn
} from "../atoms/responsive-table";
import ClearIcon from "@mui/icons-material/Clear";
import { useStores } from "../stores";
import WarscrollButton from "../atoms/warscroll-button";
import DropdownValues from "../atoms/dropdown-values";
import { AbilityCategory, abilityCategoryName } from "../../common/data";

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

const allEnhancementTypes: AbilityCategory[] = [
    AbilityCategory.Artefact,
    AbilityCategory.Mount,
    AbilityCategory.Prayer,
    AbilityCategory.Spell,
    AbilityCategory.Triumph
];

function WarscrollBattalionsList() {
    const { armyListStore: warscrollStore } = useStores();
    const columns = useMemo<ResponsiveTableColumn<WarscrollBattalion>[]>(() => {
        return [
            {
                name: "Name",
                text: x => <BattalionName x={x} />
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
                name: "Enhancement",
                text: x =>
                    x.definition.abilities.some(
                        y => y.grantsExtraEnhancement
                    ) ? (
                        <DropdownValues
                            getText={x =>
                                abilityCategoryName.get(x) || "Unknown"
                            }
                            value={x.enhancement}
                            options={allEnhancementTypes}
                            onChange={x.setEnhancementType}
                        />
                    ) : (
                        ""
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

    const warscroll = warscrollStore.armyList;

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
