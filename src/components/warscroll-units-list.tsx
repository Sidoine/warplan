import * as React from "react";
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
import { UnitWarscroll } from "./unit-warscoll";
import WarningIcon from "@material-ui/icons/Warning";
import { AddButton, TableColumn, DropdownValues } from "../atoms/dropdown-list";
import { NumberControl } from "../atoms/number-control";
import { join } from "../helpers/react";
import { useStores } from "../stores";

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

function ExtraAbilitiesView({
    unit,
    onChange
}: {
    unit: WarscrollUnit;
    onChange: (unit: WarscrollUnit, t: ExtraAbility) => void;
}) {
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

@inject("unitsStore", "warscrollStore")
@observer
export class WarscrollUnitsList extends React.Component<
    WarscrollUnitsListProps,
    {}
> {
    @observable private warscrollOpen: WarscrollUnit | null = null;
    @action private handleOpenWarscroll = (unit: WarscrollUnit) =>
        (this.warscrollOpen = unit);
    @action private handleCloseWarscroll = () => (this.warscrollOpen = null);

    @computed get columns(): ResponsiveTableColumn<WarscrollUnit>[] {
        const columns: ResponsiveTableColumn<WarscrollUnit>[] = [
            {
                name: "Name",
                text: this.renderModelName
            },
            {
                name: "Count",
                text: unit => unit.modelCount
            },
            {
                name: "Models",
                text: this.renderModelOptions
            },
            {
                name: "Extras",
                text: this.renderExtras
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

    private renderModelName = (unit: WarscrollUnit) => {
        return (
            <>
                <div>
                    {unit.definition.model.name}
                    <IconButton
                        onClick={() => this.handleOpenWarscroll(unit)}
                        size="small"
                    >
                        <VisibilityIcon />
                    </IconButton>
                </div>
                <div>
                    {unit.definition.size} <PeopleIcon />
                    {unit.nonAlliedUnits.length > 0 && (
                        <Tooltip
                            title={`Can't be allied with ${unit.nonAlliedUnits
                                .map(x => x.definition.model.name)
                                .join(", ")}`}
                        >
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
                                        this.props.warscrollStore!.warscroll
                                            .general
                                    }
                                    onChange={(_, c) =>
                                        this.toggleGeneral(unit, c)
                                    }
                                ></Checkbox>
                                General
                            </>
                        )}
                        {unit.isAllied && <>Allied</>}
                    </div>
                </div>
            </>
        );
    };

    private renderModelOptions = (unit: WarscrollUnit) => {
        return (
            <>
                {" "}
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

    private renderExtras = (unit: WarscrollUnit) => {
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
                                    this.props.warscrollStore!.removeExtraAbility(
                                        unit,
                                        x
                                    )
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
                    onChange={this.handleExtraAbilityChange}
                />
            </>
        );
    };
    private handleExtraAbilityChange = (
        unit: WarscrollUnit,
        extraAbility: ExtraAbility
    ) => {
        this.props.warscrollStore!.addExtraAbility(unit, extraAbility);
    };

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
                    <UnitsList title="Add..." />
                </CardActions>
            </Card>
        );
    }

    private toggleGeneral = (unit: WarscrollUnit, checked: boolean) => {
        this.props.warscrollStore!.setGeneral(checked ? unit : undefined);
    };
}
