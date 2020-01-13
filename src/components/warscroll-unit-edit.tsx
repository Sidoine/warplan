import * as React from "react";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { WarscrollStore, WarscrollUnit, WarscrollModel } from "../stores/warscroll";
import { IconButton, Checkbox, Modal, TableRow, TableCell, Tooltip } from "@material-ui/core";
import { join } from "../helpers/react";
import { ModelOption, ExtraAbility, Model } from "../stores/units";
import { UnitWarscroll } from "./unit-warscoll";
import { observable, action } from "mobx";
import "./warscroll-unit-edit.less";
import { AddButton, TableColumn } from "../atoms/dropdown-list";
import VisibilityIcon from '@material-ui/icons/Visibility';
import PeopleIcon from '@material-ui/icons/People';
import ClearIcon from '@material-ui/icons/Clear';
import WarningIcon from '@material-ui/icons/Warning';

export interface WarscrollUnitEditProps {
    unit: WarscrollUnit;
    warscrollStore?: WarscrollStore;
}

const modelColumns: TableColumn<Model>[] = [
    { name: "Name", text: x => x.name }
];

const extraAbilityColumns: TableColumn<ExtraAbility>[] = [
    { name: "Name", text: x => x.ability.name },
    { name: "Description", text: x => x.ability.description }
]

@inject("warscrollStore")
@observer
export class WarscrollUnitEdit extends React.Component<WarscrollUnitEditProps, {}> {
    @observable private warscrollOpen = false;
    @action private handleOpenWarscroll = () => this.warscrollOpen = true;
    @action private handleCloseWarscroll = () => this.warscrollOpen = false;

    render() {
        const unit = this.props.unit;
        return <TableRow>
            <TableCell>
                <div>{unit.unit.model.name} 
                <IconButton onClick={this.handleOpenWarscroll} size="small"><VisibilityIcon/></IconButton>
                <Modal open={this.warscrollOpen} onClose={this.handleCloseWarscroll}>
                    <UnitWarscroll wu={unit}/>
                </Modal> </div>
                <div>{ unit.unit.size } <PeopleIcon/>
                    {unit.nonAlliedUnits.length > 0 && <Tooltip title={`Can't be allied with ${unit.nonAlliedUnits.map(x => x.unit.model.name).join(', ')}`}><WarningIcon /></Tooltip>}            
                 </div>
                <div>
                    <div><em>{unit.unit.subType}</em></div>
                    <div>{(!unit.isAllied && unit.isLeader) && <><Checkbox checked={unit === this.props.warscrollStore!.warscroll.general} onChange={this.toggleGeneral} ></Checkbox>General</> } 
                    {unit.isAllied && <>Allied</> }</div>
                </div>
            </TableCell>
            <TableCell>{unit.modelCount}</TableCell>
            <TableCell>
                { this.renderModelOptions() }
            </TableCell>
            <TableCell>{ join(unit.extraAbilities.map(x => <span key={x.id}>
                        <Tooltip title={x.ability.description}><span>{x.ability.name}</span></Tooltip>
                        <IconButton onClick={() => this.props.warscrollStore!.removeExtraAbility(unit, x)} ><ClearIcon/> </IconButton></span>),
                         ", ") }
                { this.renderExtraAbilities(unit)}
            </TableCell>
            <TableCell>{unit.points}</TableCell>
            <TableCell>
                <IconButton onClick={() => this.props.warscrollStore!.removeUnit(this.props.unit)}><ClearIcon/></IconButton>
            </TableCell></TableRow>;
    }

    private handleAddModel = (option: ModelOption) => {
        this.props.warscrollStore!.addModel(this.props.unit, option);
    }

    private renderModelOptions() {
        const unit = this.props.unit;
        return <> {this.props.unit.models.map(x => this.renderModel(x))}
            {unit.availableOptions.length > 0 && <AddButton columns={modelColumns} options={unit.availableOptions} onChange={this.handleAddModel} />}
        </>;
    }

    private handleAddModelOption(model: WarscrollModel) {
        return (option: ModelOption) => {
            this.props.warscrollStore!.addModelOption(model, option);
        }
    }

    private handleRemoveModelOption(model: WarscrollModel, option: ModelOption) {
        return (event: React.SyntheticEvent<HTMLElement>) => {
            this.props.warscrollStore!.removeModelOption(model, option);
        }
    }

    private handleModelCountChange(model: WarscrollModel) {
        return (value: number) => {
            if (value === 0) {
                this.props.warscrollStore!.removeModel(this.props.unit, model);
            } else {
                this.props.warscrollStore!.setModelCount(model, value);
            }
        }
    }

    private renderModel(model: WarscrollModel) {
        return <div key={model.id}>
            <NumberControl value={model.count} onChange={this.handleModelCountChange(model)}/>
            {join(model.options.map(x => <span key={x.id}>{model.isOptionValid(x) || <WarningIcon />} {x.name} <IconButton onClick={this.handleRemoveModelOption(model, x)}><ClearIcon /></IconButton></span>), ', ')}
            {model.availableOptions.length > 0 && <AddButton columns={modelColumns} options={model.availableOptions} onChange={this.handleAddModelOption(model)} />}
        </div>;
    }

    private renderExtraAbilities(unit: WarscrollUnit) {
        return unit.availableExtraAbilities.length > 0 && <AddButton columns={extraAbilityColumns} content={x => <><div>{x.ability.name}</div><div className="warscroll_unit_edit__description">{x.ability.description}</div></>}  options={unit.availableExtraAbilities} onChange={this.handleExtraAbilityChange(unit)} />;
    }

    private handleExtraAbilityChange(unit: WarscrollUnit) {
        return (extraAbility: ExtraAbility) => {
            if (extraAbility) this.props.warscrollStore!.addExtraAbility(unit, extraAbility);
        }
    }

    private toggleGeneral = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        this.props.warscrollStore!.setGeneral(checked ? this.props.unit : undefined);
    }
}