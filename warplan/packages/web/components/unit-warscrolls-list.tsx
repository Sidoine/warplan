/* eslint-disable react/display-name */
import React, { useMemo, useState } from "react";
import { ModelOption } from "../../common/data";
import { observer } from "mobx-react-lite";
import { UnitWarscrollAdd } from "./unit-warscroll-add";
import { UnitWarscroll, WarscrollModel } from "../stores/warscroll";
import {
    Card,
    CardContent,
    CardActions,
    CardHeader,
    IconButton,
    Tooltip,
    Checkbox,
    Modal,
} from "@mui/material";
import ResponsiveTable, {
    ResponsiveTableColumn,
} from "../atoms/responsive-table";

import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import ClearIcon from "@mui/icons-material/Clear";
import { UnitWarscrollView } from "./unit-warscroll";
import WarningIcon from "@mui/icons-material/Warning";
import AddButton, { TableColumn } from "../atoms/add-button";
import NumberControl from "../atoms/number-control";
import { join } from "../helpers/react";
import { Warning } from "../atoms/warning";
import { useCallback } from "react";
import { AllAbilities, AllAttacks } from "../atoms/warscroll-components";
import DropdownObjects from "../atoms/dropdown-objects";
import { Role } from "../../common/definitions";
import { ExtraAbilitiesEdit } from "./extra-abilities-edit";
import { useArmyListStore } from "../stores/army-list";

const modelColumns: TableColumn<ModelOption>[] = [
    { name: "Name", text: (x) => x.name },
    {
        name: "Attacks",
        text: (x) => x.attacks && <AllAttacks attacks={x.attacks} />,
    },
    {
        name: "Abilities",
        text: (x) => x.abilities && <AllAbilities abilities={x.abilities} />,
    },
];

const ModelCount = observer(({ unit }: { unit: UnitWarscroll }) => {
    return (
        <>
            {unit.definition.maxSize &&
                unit.modelCount > unit.definition.maxSize && (
                    <Warning
                        label={`Max model count is ${unit.definition.maxSize}`}
                    />
                )}
            {unit.modelCount}
        </>
    );
});

const ModelName = observer(
    ({
        unit,
        onOpenWarscroll,
    }: {
        unit: UnitWarscroll;
        onOpenWarscroll: (unit: UnitWarscroll) => void;
    }) => {
        const warscrollStore = useArmyListStore();
        const toggleGeneral = (checked: boolean) => {
            warscrollStore.setGeneral(checked ? unit : undefined);
        };

        return (
            <>
                <div>
                    {unit.name}
                    <IconButton
                        onClick={() => onOpenWarscroll(unit)}
                        size="small"
                    >
                        <VisibilityIcon />
                    </IconButton>
                </div>
                <div>
                    {unit.definition.size} <PeopleIcon />
                    {unit.isAllied && !unit.canBeAllied && (
                        <Tooltip title="Can't be allied">
                            <WarningIcon />
                        </Tooltip>
                    )}
                </div>
                <div>
                    <div>
                        <em>{unit.definition.subType}</em>
                    </div>
                    <div>
                        {!unit.isAllied && unit.isLeader && (
                            <>
                                <Checkbox
                                    checked={
                                        unit === warscrollStore.armyList.general
                                    }
                                    onChange={(_, c) => toggleGeneral(c)}
                                ></Checkbox>
                                General
                            </>
                        )}
                        {unit.isAllied && <>Allied</>}
                    </div>
                </div>
            </>
        );
    }
);

function RenderModelOption({
    model,
    option,
}: {
    model: WarscrollModel;
    option: ModelOption;
}) {
    const warscrollStore = useArmyListStore();
    const handleRemoveModelOption = useCallback(() => {
        warscrollStore.removeModelOption(model, option);
    }, [model, option, warscrollStore]);

    return (
        <span key={option.id}>
            {model.isOptionValid(option) || <WarningIcon />} {option.name}{" "}
            <IconButton onClick={handleRemoveModelOption} size="large">
                <ClearIcon />
            </IconButton>
        </span>
    );
}

const RenderModel = observer(
    ({ unit, model }: { unit: UnitWarscroll; model: WarscrollModel }) => {
        const warscrollStore = useArmyListStore();

        const handleAddModelOption = useCallback(
            (model: WarscrollModel) => {
                return (option: ModelOption) => {
                    warscrollStore.addModelOption(model, option);
                };
            },
            [warscrollStore]
        );

        const handleModelCountChange = useCallback(
            (unit: UnitWarscroll, model: WarscrollModel) => {
                return (value: number) => {
                    if (value === 0) {
                        warscrollStore.removeModel(unit, model);
                    } else {
                        warscrollStore.setModelCount(model, value);
                    }
                };
            },
            [warscrollStore]
        );
        return (
            <div key={model.id}>
                {!unit.definition.single && (
                    <NumberControl
                        value={model.count}
                        onChange={handleModelCountChange(unit, model)}
                    />
                )}
                {join(
                    model.options.map((x) => (
                        <RenderModelOption
                            key={x.id}
                            option={x}
                            model={model}
                        />
                    )),
                    ", "
                )}
                {model.availableOptions.length > 0 && (
                    <AddButton
                        variant="add"
                        columns={modelColumns}
                        options={model.availableOptions}
                        onChange={handleAddModelOption(model)}
                    />
                )}
            </div>
        );
    }
);

const ModelOptions = observer(({ unit }: { unit: UnitWarscroll }) => {
    const warscrollStore = useArmyListStore();

    const handleAddModel = useCallback(
        (unit: UnitWarscroll) => {
            return (option: ModelOption) => {
                warscrollStore.addModel(unit, option);
            };
        },
        [warscrollStore]
    );

    return (
        <>
            {unit.models.map((x) => (
                <RenderModel key={x.id} unit={unit} model={x} />
            ))}
            {!unit.definition.single && unit.availableOptions.length > 0 && (
                <AddButton
                    variant="add"
                    columns={modelColumns}
                    options={unit.availableOptions}
                    onChange={handleAddModel(unit)}
                />
            )}
        </>
    );
});

const UnitBattaillon = observer(function UnitBattaillon({
    unit,
}: {
    unit: UnitWarscroll;
}) {
    return (
        <DropdownObjects
            onChange={unit.setBattalionUnit}
            value={unit.battalionUnit}
            options={unit.availableBattalionUnits}
            getText={(x) => x.name}
        ></DropdownObjects>
    );
});

function UnitWarscrollsList({ role, title }: { role: Role; title: string }) {
    const [warscrollOpen, setWarscrollOpen] = useState<UnitWarscroll | null>(
        null
    );
    const handleOpenWarscroll = useCallback(
        (unit: UnitWarscroll) => setWarscrollOpen(unit),
        []
    );

    const warscrollStore = useArmyListStore();

    const handleCloseWarscroll = useCallback(() => setWarscrollOpen(null), []);

    const columns = useMemo<ResponsiveTableColumn<UnitWarscroll>[]>(() => {
        const columns: ResponsiveTableColumn<UnitWarscroll>[] = [
            {
                name: "Name",
                text: (x) => (
                    <ModelName unit={x} onOpenWarscroll={handleOpenWarscroll} />
                ),
            },
            {
                name: "Count",
                text: (unit) => <ModelCount unit={unit} />,
            },
            {
                name: "Models",
                text: (unit) => <ModelOptions unit={unit} />,
            },
            {
                name: "Extras",
                text: (unit) => <ExtraAbilitiesEdit unit={unit} />,
            },
            {
                name: "Points",
                text: (unit) => unit.points,
            },
            {
                name: "Battaillon",
                text: (unit) => <UnitBattaillon unit={unit} />,
            },
        ];

        columns.push({
            name: "Actions",
            text: (unit) => (
                <IconButton
                    onClick={() => warscrollStore.removeUnit(unit)}
                    size="large"
                >
                    <ClearIcon />
                </IconButton>
            ),
        });
        return columns;
    }, [handleOpenWarscroll, warscrollStore]);

    const warscroll = warscrollStore.armyList;
    return (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                <Modal
                    open={warscrollOpen !== null}
                    onClose={handleCloseWarscroll}
                >
                    <>
                        <UnitWarscrollView wu={warscrollOpen} />
                    </>
                </Modal>

                <ResponsiveTable
                    columns={columns}
                    rows={warscroll.units.filter((x) => x.role === role)}
                />
            </CardContent>
            <CardActions>
                <UnitWarscrollAdd role={role} />
            </CardActions>
        </Card>
    );
}

export default observer(UnitWarscrollsList);
