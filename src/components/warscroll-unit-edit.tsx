import * as React from "react";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { WarscrollStore, WarscrollUnit, WarscrollModel } from "../stores/warscroll";
import { Button, IconButton, Icon, Checkbox, Modal, TableRow, TableCell, Tooltip } from "@material-ui/core";
import { join } from "../helpers/react";
import { ModelOption, ExtraAbility } from "../stores/units";
import { UnitWarscroll } from "./unit-warscoll";
import { observable, action } from "mobx";
import "./warscroll-unit-edit.less";
import { AddButton } from "./dropdown-list";

export interface WarscrollUnitEditProps {
    unit: WarscrollUnit;
    warscrollStore?: WarscrollStore;
}

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
                <IconButton onClick={this.handleOpenWarscroll}><Icon className="fa fa-eye"></Icon></IconButton>
                <Modal open={this.warscrollOpen} onClose={this.handleCloseWarscroll}>
                    <UnitWarscroll wu={unit}/>
                </Modal> </div>
                <div>{ unit.unit.size } <Icon className="fa fa-user"/>
                    {unit.unit.warscroll && <a target="_blank" href={unit.unit.warscroll}><Icon className="fa fa-help-circle" /></a>}
                    {unit.nonAlliedUnits.length > 0 && <Icon className="fa fa-warning" title={`Can't be allied with ${unit.nonAlliedUnits.map(x => x.unit.model.name).join(', ')}`}/>}            
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
                        <Button onClick={() => this.props.warscrollStore!.removeExtraAbility(unit, x)} ><Icon className="fa fa-remove"/> </Button></span>),
                         ", ") }
                { this.renderExtraAbilities(unit)}
            </TableCell>
            <TableCell>{unit.points}</TableCell>
            <TableCell>
                <Button onClick={() => this.props.warscrollStore!.removeUnit(this.props.unit)}><Icon className="fa fa-remove"/></Button>
            </TableCell></TableRow>;
    }

    private handleAddModel = (option: ModelOption) => {
        this.props.warscrollStore!.addModel(this.props.unit, option);
    }

    private renderModelOptions() {
        const unit = this.props.unit;
        return <> {this.props.unit.models.map(x => this.renderModel(x))}
            {unit.availableOptions.length > 0 && <AddButton options={unit.availableOptions} onChange={this.handleAddModel} />}
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
            {join(model.options.map(x => <span key={x.id}>{model.isOptionValid(x) || <Icon className="fa fa-warning" />} {x.name} <Button onClick={this.handleRemoveModelOption(model, x)}><Icon className="fa fa-remove" /></Button></span>), ', ')}
            {model.availableOptions.length > 0 && <AddButton options={model.availableOptions} onChange={this.handleAddModelOption(model)} />}
        </div>;
    }

    private renderExtraAbilities(unit: WarscrollUnit) {
        return unit.availableExtraAbilities.length > 0 && <AddButton content={x => <><div>{x.ability.name}</div><div className="warscroll_unit_edit__description">{x.ability.description}</div></>}  options={unit.availableExtraAbilities} onChange={this.handleExtraAbilityChange(unit)} />;
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