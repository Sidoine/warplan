/* eslint-disable react/display-name */
import React, { useMemo, useState } from "react";
import { ModelOption, Ability } from "../../common/data";
import { observer } from "mobx-react-lite";
import { UnitsList } from "./units-list";
import { UnitWarscroll, WarscrollModel } from "../stores/warscroll";
import {
    Card,
    CardContent,
    CardActions,
    CardHeader,
    IconButton,
    Tooltip,
    Checkbox,
    Modal
} from "@material-ui/core";
import ResponsiveTable, {
    ResponsiveTableColumn
} from "../atoms/responsive-table";

import VisibilityIcon from "@material-ui/icons/Visibility";
import PeopleIcon from "@material-ui/icons/People";
import ClearIcon from "@material-ui/icons/Clear";
import { UnitWarscrollView } from "./unit-warscroll";
import WarningIcon from "@material-ui/icons/Warning";
import AddButton, { TableColumn } from "../atoms/add-button";
import NumberControl from "../atoms/number-control";
import { join } from "../helpers/react";
import { useStores } from "../stores";
import { Warning } from "../atoms/warning";
import { useCallback } from "react";
import { AllAbilities, AllAttacks } from "../atoms/warscroll-components";
import DropdownObjects from "../atoms/dropdown-objects";
import { Role } from "../../common/definitions";

const modelColumns: TableColumn<ModelOption>[] = [
    { name: "Name", text: x => x.name },
    {
        name: "Attacks",
        text: x => x.attacks && <AllAttacks attacks={x.attacks} />
    },
    {
        name: "Abilities",
        text: x => x.abilities && <AllAbilities abilities={x.abilities} />
    }
];

const extraAbilityColumns: TableColumn<Ability>[] = [
    { name: "Name", text: x => x.name },
    { name: "Description", text: x => x.description }
];

const ExtraAbilitiesView = observer(
    ({
        unit,
        onChange
    }: {
        unit: UnitWarscroll;
        onChange: (unit: UnitWarscroll, t: Ability) => void;
    }) => {
        return unit.availableExtraAbilities.length > 0 ? (
            <AddButton
                columns={extraAbilityColumns}
                options={unit.availableExtraAbilities}
                onChange={t => onChange(unit, t)}
            />
        ) : (
            <></>
        );
    }
);

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
        onOpenWarscroll
    }: {
        unit: UnitWarscroll;
        onOpenWarscroll: (unit: UnitWarscroll) => void;
    }) => {
        const { armyListStore: warscrollStore } = useStores();
        const toggleGeneral = (checked: boolean) => {
            warscrollStore.setGeneral(checked ? unit : undefined);
        };

        return (
            <>
                <div>
                    {unit.definition.name} {unit.definition.subName}
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

const RenderExtras = observer(({ unit }: { unit: UnitWarscroll }) => {
    const { armyListStore: warscrollStore } = useStores();

    const handleExtraAbilityChange = useCallback(
        (unit: UnitWarscroll, extraAbility: Ability) => {
            warscrollStore.addExtraAbility(unit, extraAbility);
        },
        [warscrollStore]
    );

    return (
        <>
            {join(
                unit.extraAbilities.map(x => (
                    <span key={x.id}>
                        <Tooltip title={x.description || ""}>
                            <span>{x.name}</span>
                        </Tooltip>
                        <IconButton
                            onClick={() =>
                                warscrollStore.removeExtraAbility(unit, x)
                            }
                        >
                            <ClearIcon />{" "}
                        </IconButton>
                    </span>
                )),
                ", "
            )}
            <ExtraAbilitiesView
                unit={unit}
                onChange={handleExtraAbilityChange}
            />
        </>
    );
});

function RenderModelOption({
    model,
    option
}: {
    model: WarscrollModel;
    option: ModelOption;
}) {
    const { armyListStore: warscrollStore } = useStores();
    const handleRemoveModelOption = useCallback(() => {
        warscrollStore.removeModelOption(model, option);
    }, [model, option, warscrollStore]);

    return (
        <span key={option.id}>
            {model.isOptionValid(option) || <WarningIcon />} {option.name}{" "}
            <IconButton onClick={handleRemoveModelOption}>
                <ClearIcon />
            </IconButton>
        </span>
    );
}

const RenderModel = observer(
    ({ unit, model }: { unit: UnitWarscroll; model: WarscrollModel }) => {
        const { armyListStore: warscrollStore } = useStores();

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
                    model.options.map(x => (
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
    const { armyListStore: warscrollStore } = useStores();

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
            {unit.models.map(x => (
                <RenderModel key={x.id} unit={unit} model={x} />
            ))}
            {!unit.definition.single && unit.availableOptions.length > 0 && (
                <AddButton
                    columns={modelColumns}
                    options={unit.availableOptions}
                    onChange={handleAddModel(unit)}
                />
            )}
        </>
    );
});

const UnitBattaillon = observer(function UnitBattaillon({
    unit
}: {
    unit: UnitWarscroll;
}) {
    return (
        <DropdownObjects
            onChange={unit.setBattalionUnit}
            value={unit.battalionUnit}
            options={unit.availableBattalionUnits}
            getText={x => x.name}
        ></DropdownObjects>
    );
});

function WarscrollUnitsList({ role, title }: { role: Role; title: string }) {
    const [warscrollOpen, setWarscrollOpen] = useState<UnitWarscroll | null>(
        null
    );
    const handleOpenWarscroll = useCallback(
        (unit: UnitWarscroll) => setWarscrollOpen(unit),
        []
    );
    const { armyListStore: warscrollStore } = useStores();

    const handleCloseWarscroll = useCallback(() => setWarscrollOpen(null), []);

    const columns = useMemo<ResponsiveTableColumn<UnitWarscroll>[]>(() => {
        const columns: ResponsiveTableColumn<UnitWarscroll>[] = [
            {
                name: "Name",
                text: x => (
                    <ModelName unit={x} onOpenWarscroll={handleOpenWarscroll} />
                )
            },
            {
                name: "Count",
                text: unit => <ModelCount unit={unit} />
            },
            {
                name: "Models",
                text: unit => <ModelOptions unit={unit} />
            },
            {
                name: "Extras",
                text: unit => <RenderExtras unit={unit} />
            },
            {
                name: "Points",
                text: unit => unit.points
            },
            {
                name: "Battaillon",
                text: unit => <UnitBattaillon unit={unit} />
            }
        ];

        columns.push({
            name: "Actions",
            text: unit => (
                <IconButton onClick={() => warscrollStore.removeUnit(unit)}>
                    <ClearIcon />
                </IconButton>
            )
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
                    rows={warscroll.units.filter(
                        x =>
                            x.definition.roles.includes(role) &&
                            (role === Role.Leader ||
                                !x.definition.roles.includes(Role.Leader))
                    )}
                />
            </CardContent>
            <CardActions>
                <UnitsList role={role} />
            </CardActions>
        </Card>
    );
}

export default observer(WarscrollUnitsList);
