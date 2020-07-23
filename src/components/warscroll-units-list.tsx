import React from "react";
import {
    UnitsStore,
    Model,
    ExtraAbility,
    ModelOption,
    Contingent,
    contingentName
} from "../stores/units";
import { observer, inject } from "mobx-react";
import { UnitsList } from "./units-list";
import {
    WarscrollStore,
    WarscrollUnit,
    WarscrollModel,
    PointMode
} from "../stores/warscroll";
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
import { computed, observable, action } from "mobx";
import {
    ResponsiveTableColumn,
    ResponsiveTable
} from "../atoms/responsive-table";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PeopleIcon from "@material-ui/icons/People";
import ClearIcon from "@material-ui/icons/Clear";
import { UnitWarscroll } from "./unit-warscroll";
import WarningIcon from "@material-ui/icons/Warning";
import { AddButton, TableColumn, DropdownValues } from "../atoms/dropdown-list";
import { NumberControl } from "../atoms/number-control";
import { join } from "../helpers/react";
import { useStores } from "../stores";
import { Warning } from "../atoms/warning";
import { useCallback } from "react";

export interface WarscrollUnitsListProps {
    unitsStore?: UnitsStore;
    warscrollStore?: WarscrollStore;
}

const modelColumns: TableColumn<Model>[] = [
    { name: "Name", text: x => x.name }
];

const extraAbilityColumns: TableColumn<ExtraAbility>[] = [
    { name: "Name", text: x => x.ability.name },
    { name: "Description", text: x => x.ability.description }
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
        onChange: (unit: WarscrollUnit, t: ExtraAbility) => void;
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
                    {unit.definition.model.name}
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
        (unit: WarscrollUnit, extraAbility: ExtraAbility) => {
            warscrollStore.addExtraAbility(unit, extraAbility);
        },
        [warscrollStore]
    );

    return (
        <>
            {join(
                unit.extraAbilities.map(x => (
                    <span key={x.id}>
                        <Tooltip title={x.ability.description}>
                            <span>{x.ability.name}</span>
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

@inject("unitsStore", "warscrollStore")
@observer
export class WarscrollUnitsList extends React.Component<
    WarscrollUnitsListProps,
    {}
> {
    @action private handleOpenWarscroll = (unit: WarscrollUnit) =>
        (this.warscrollOpen = unit);

    @observable private warscrollOpen: WarscrollUnit | null = null;
    @action private handleCloseWarscroll = () => (this.warscrollOpen = null);

    @computed get columns(): ResponsiveTableColumn<WarscrollUnit>[] {
        const columns: ResponsiveTableColumn<WarscrollUnit>[] = [
            {
                name: "Name",
                text: x => (
                    <ModelName
                        unit={x}
                        onOpenWarscroll={this.handleOpenWarscroll}
                    />
                )
            },
            {
                name: "Count",
                text: unit => <ModelCount unit={unit} />
            },
            {
                name: "Models",
                text: this.renderModelOptions
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
            this.props.warscrollStore!.warscroll.pointMode ===
            PointMode.MeetingEngagements
        ) {
            columns.push({
                name: "Contingent",
                text: unit => <ContingentList unit={unit} />
            });
        }
        columns.push({
            name: "Actions",
            text: unit => (
                <IconButton
                    onClick={() => this.props.warscrollStore!.removeUnit(unit)}
                >
                    <ClearIcon />
                </IconButton>
            )
        });
        return columns;
    }

    private renderModelOptions = (unit: WarscrollUnit) => {
        return (
            <>
                {unit.models.map(x => this.renderModel(unit, x))}
                {unit.availableOptions.length > 0 && (
                    <AddButton
                        columns={modelColumns}
                        options={unit.availableOptions}
                        onChange={this.handleAddModel(unit)}
                    />
                )}
            </>
        );
    };

    private renderModel(unit: WarscrollUnit, model: WarscrollModel) {
        return (
            <div key={model.id}>
                <NumberControl
                    value={model.count}
                    onChange={this.handleModelCountChange(unit, model)}
                />
                {join(
                    model.options.map(x => (
                        <span key={x.id}>
                            {model.isOptionValid(x) || <WarningIcon />} {x.name}{" "}
                            <IconButton
                                onClick={this.handleRemoveModelOption(model, x)}
                            >
                                <ClearIcon />
                            </IconButton>
                        </span>
                    )),
                    ", "
                )}
                {model.availableOptions.length > 0 && (
                    <AddButton
                        columns={modelColumns}
                        options={model.availableOptions}
                        onChange={this.handleAddModelOption(model)}
                    />
                )}
            </div>
        );
    }

    private handleModelCountChange(unit: WarscrollUnit, model: WarscrollModel) {
        return (value: number) => {
            if (value === 0) {
                this.props.warscrollStore!.removeModel(unit, model);
            } else {
                this.props.warscrollStore!.setModelCount(model, value);
            }
        };
    }

    private handleAddModelOption(model: WarscrollModel) {
        return (option: ModelOption) => {
            this.props.warscrollStore!.addModelOption(model, option);
        };
    }

    private handleRemoveModelOption(
        model: WarscrollModel,
        option: ModelOption
    ) {
        return () => {
            this.props.warscrollStore!.removeModelOption(model, option);
        };
    }

    private handleAddModel(unit: WarscrollUnit) {
        return (option: ModelOption) => {
            this.props.warscrollStore!.addModel(unit, option);
        };
    }

    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        return (
            <Card>
                <CardHeader title="Units" />
                <CardContent>
                    <Modal
                        open={this.warscrollOpen !== null}
                        onClose={this.handleCloseWarscroll}
                    >
                        <>
                            <UnitWarscroll wu={this.warscrollOpen} />
                        </>
                    </Modal>

                    <ResponsiveTable
                        columns={this.columns}
                        rows={warscroll.units}
                    />
                </CardContent>
                <CardActions>
                    <span>{warscroll.unitsPoints} points</span>
                    <UnitsList />
                </CardActions>
            </Card>
        );
    }
}
