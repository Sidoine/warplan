/* eslint-disable react/display-name */
import React, { useMemo, useState } from "react";
import {
    Model,
    ModelOption,
    Contingent,
    contingentName,
    Ability
} from "../../common/unit";
import { observer } from "mobx-react-lite";
import { UnitsList } from "./units-list";
import { WarscrollUnit, WarscrollModel, PointMode } from "../stores/warscroll";
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
import DropdownValues from "../atoms/dropdown-values";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PeopleIcon from "@material-ui/icons/People";
import ClearIcon from "@material-ui/icons/Clear";
import { UnitWarscroll } from "./unit-warscroll";
import WarningIcon from "@material-ui/icons/Warning";
import AddButton, { TableColumn } from "../atoms/add-button";
import NumberControl from "../atoms/number-control";
import { join } from "../helpers/react";
import { useStores } from "../stores";
import { Warning } from "../atoms/warning";
import { useCallback } from "react";

const modelColumns: TableColumn<Model>[] = [
    { name: "Name", text: x => x.name }
];

const extraAbilityColumns: TableColumn<Ability>[] = [
    { name: "Name", text: x => x.name },
    { name: "Description", text: x => x.description }
];

const ContingentList = observer(({ unit }: { unit: WarscrollUnit }) => {
    const { warscrollStore } = useStores();
    return (
        <DropdownValues
            options={[
                Contingent.Rearguard,
                Contingent.Main,
                Contingent.Spearhead
            ]}
            getText={contingentName}
            onChange={x => warscrollStore.setContingent(unit, x)}
            value={unit.contingent}
        />
    );
});

const ExtraAbilitiesView = observer(
    ({
        unit,
        onChange
    }: {
        unit: WarscrollUnit;
        onChange: (unit: WarscrollUnit, t: Ability) => void;
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

const ModelCount = observer(({ unit }: { unit: WarscrollUnit }) => {
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
        unit: WarscrollUnit;
        onOpenWarscroll: (unit: WarscrollUnit) => void;
    }) => {
        const { warscrollStore } = useStores();
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
                                        unit ===
                                        warscrollStore.warscroll.general
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

const RenderExtras = observer(({ unit }: { unit: WarscrollUnit }) => {
    const { warscrollStore } = useStores();

    const handleExtraAbilityChange = useCallback(
        (unit: WarscrollUnit, extraAbility: Ability) => {
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
    const { warscrollStore } = useStores();
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
    ({ unit, model }: { unit: WarscrollUnit; model: WarscrollModel }) => {
        const { warscrollStore } = useStores();

        const handleAddModelOption = useCallback(
            (model: WarscrollModel) => {
                return (option: ModelOption) => {
                    warscrollStore.addModelOption(model, option);
                };
            },
            [warscrollStore]
        );

        const handleModelCountChange = useCallback(
            (unit: WarscrollUnit, model: WarscrollModel) => {
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
                <NumberControl
                    value={model.count}
                    onChange={handleModelCountChange(unit, model)}
                />
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

const ModelOptions = observer(({ unit }: { unit: WarscrollUnit }) => {
    const { warscrollStore } = useStores();

    const handleAddModel = useCallback(
        (unit: WarscrollUnit) => {
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
            {unit.availableOptions.length > 0 && (
                <AddButton
                    columns={modelColumns}
                    options={unit.availableOptions}
                    onChange={handleAddModel(unit)}
                />
            )}
        </>
    );
});

function WarscrollUnitsList() {
    const [warscrollOpen, setWarscrollOpen] = useState<WarscrollUnit | null>(
        null
    );
    const handleOpenWarscroll = useCallback(
        (unit: WarscrollUnit) => setWarscrollOpen(unit),
        []
    );
    const { warscrollStore } = useStores();

    const handleCloseWarscroll = useCallback(() => setWarscrollOpen(null), []);

    const columns = useMemo<ResponsiveTableColumn<WarscrollUnit>[]>(() => {
        const columns: ResponsiveTableColumn<WarscrollUnit>[] = [
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
            }
        ];
        if (
            warscrollStore.warscroll.pointMode === PointMode.MeetingEngagements
        ) {
            columns.push({
                name: "Contingent",
                text: unit => <ContingentList unit={unit} />
            });
        }
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

    const warscroll = warscrollStore.warscroll;
    return (
        <Card>
            <CardHeader title="Units" />
            <CardContent>
                <Modal
                    open={warscrollOpen !== null}
                    onClose={handleCloseWarscroll}
                >
                    <>
                        <UnitWarscroll wu={warscrollOpen} />
                    </>
                </Modal>

                <ResponsiveTable columns={columns} rows={warscroll.units} />
            </CardContent>
            <CardActions>
                <span>{warscroll.unitsPoints} points</span>
                <UnitsList />
            </CardActions>
        </Card>
    );
}

export default observer(WarscrollUnitsList);
