import * as React from "react";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { WarscrollStore, WarscrollUnit, WarscrollModel } from "../stores/warscroll";
import { Dropdown, Button, Table, Icon, Checkbox, CheckboxProps, DropdownProps, Popup, Segment } from "semantic-ui-react";
import { join } from "../helpers/react";
import { ModelOption } from "../stores/units";

export interface WarscrollUnitEditProps {
    unit: WarscrollUnit;
    warscrollStore?: WarscrollStore;
}

interface Option {
    key: string | number;
    text: string;
    value: string | number;
}

@inject("warscrollStore")
@observer
export class WarscrollUnitEdit extends React.Component<WarscrollUnitEditProps, {}> {
    render() {
        const unit = this.props.unit;
                return <Table.Row>
            <Table.Cell>
                <div>{unit.unit.model.name}</div>
                <div>{ unit.unit.size } <Icon name="user"/>
                    {unit.unit.warscroll && <a target="_blank" href={unit.unit.warscroll}><Icon name="help circle" /></a>}
                    {unit.nonAlliedUnits.length > 0 && <Icon name="warning" title={`Can't be allied with ${unit.nonAlliedUnits.map(x => x.unit.model.name).join(', ')}`}/>}            
                 </div>
                <div>
                    <div><em>{unit.unit.subType}</em></div>
                    <div>{(!unit.isAllied && unit.isLeader) && <><Checkbox toggle checked={unit === this.props.warscrollStore!.warscroll.general} onChange={this.toggleGeneral} ></Checkbox>General</> } 
                    {unit.isAllied && <>Allied</> }</div>
                </div>
            </Table.Cell>
            <Table.Cell>{unit.modelCount}</Table.Cell>
            <Table.Cell>
                { this.renderModelOptions() }
            </Table.Cell>
            <Table.Cell>{ join(unit.extraAbilities.map(x => <span key={x.id}>
                        <Popup content={<>{x.ability.description}</>} trigger={<span>{x.ability.name}</span>}/>
                        <Button onClick={() => this.props.warscrollStore!.removeExtraAbility(unit, x)} ><Icon name="remove"/> </Button></span>),
                         ", ") }
                { this.renderExtraAbilities(unit)}
            </Table.Cell>
            <Table.Cell>{unit.points}</Table.Cell>
            <Table.Cell>
                <Button onClick={() => this.props.warscrollStore!.removeUnit(this.props.unit)}><Icon name="remove"/></Button>
            </Table.Cell></Table.Row>;
    }

    private handleAddModel = (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
        const option = this.props.unit.availableOptions.find(x => x.id === props.value);
        this.props.warscrollStore!.addModel(this.props.unit, option);
    }

    private renderModelOptions() {
        const unit = this.props.unit;
        const options: Option[] = unit.availableOptions.map(x => { return { key: x.id, text: x.name, value: x.id } });
        if (unit.models.length === 0 && options.length === 0) {
            options.push({ key: 0, text: "Add", value: 0 });
        }
        return <> {this.props.unit.models.map(x => this.renderModel(x))}
            {options.length > 0 && <Dropdown className="icon" icon="plus" button options={options} onChange={this.handleAddModel} />}
        </>;
    }

    private handleAddModelOption(model: WarscrollModel) {
        return (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            const option = model.availableOptions.find(x => x.id === props.value);
            if (option) this.props.warscrollStore!.addModelOption(model, option);
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
        const options: Option[] = model.availableOptions.map(x => { return { key: x.id, text: x.name, value: x.id } });
        return <Segment>
            <NumberControl value={model.count} onChange={this.handleModelCountChange(model)}/>
            {join(model.options.map(x => <span key={x.id}>{model.isOptionValid(x) || <Icon name="warning" />} {x.name} <Button icon="remove" onClick={this.handleRemoveModelOption(model, x)} /></span>), ', ')}
            {options.length > 0 && <Dropdown className="icon" icon="plus" button options={options} value={0} onChange={this.handleAddModelOption(model)} />}
        </Segment>;
    }

    private renderExtraAbilities(unit: WarscrollUnit) {
        const options:Option[] = unit.availableExtraAbilities.map(x => { return { key: x.id, text: x.ability.name, value: x.id }});
        return unit.availableExtraAbilities.length > 0 && <Dropdown className="icon" icon="plus" button options={options} onChange={this.handleExtraAbilityChange(unit)} />;
    }

    private handleExtraAbilityChange(unit: WarscrollUnit) {
        return (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            const extraAbility = unit.availableExtraAbilities.find(x => x.id === props.value);
            if (extraAbility) this.props.warscrollStore!.addExtraAbility(unit, extraAbility);
        }
    }

    private toggleGeneral = (event: React.SyntheticEvent<HTMLElement>, props: CheckboxProps) => {
        this.props.warscrollStore!.setGeneral(props.checked ? this.props.unit : undefined);
    }
}