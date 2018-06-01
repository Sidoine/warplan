import * as React from "react";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { WarscrollStore, WarscrollUnit, WarscrollAltModel, WarscrollWeaponOptionCategory } from "../stores/warscroll";
import { Dropdown, Button, Table, Icon, Checkbox, CheckboxProps, DropdownProps, Popup, Grid } from "semantic-ui-react";
import { join } from "../helpers/react";

export interface WarscrollUnitEditProps {
    unit: WarscrollUnit;
    warscrollStore?: WarscrollStore;
}

interface Option {
    key: string | number;
    text: string;
    value: string | number;
}

function getInterval(maxValue: number) {
    const result: Option[] = [];
    for (let i = 0; i<=maxValue; i++) {
        result.push({ key: i, value: i, text: i.toString() });
    } 
    return result;
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
                    {unit.unit.warscroll && <a target="_blank" href={unit.unit.warscroll}><Icon name="help circle outline" /></a>}
                    {unit.nonAlliedUnits.length > 0 && <Icon name="warning" title={`Can't be allied with ${unit.nonAlliedUnits.map(x => x.unit.model.name).join(', ')}`}/>}            
                 </div>
                <div>
                    <div><em>{unit.unit.subType}</em></div>
                    <div>{(!unit.isAllied && unit.isLeader) && <><Checkbox toggle checked={unit === this.props.warscrollStore!.warscroll.general} onChange={this.toggleGeneral} ></Checkbox>General</> } 
                    {unit.isAllied && <>Allied</> }</div>
                </div>
            </Table.Cell>
            <Table.Cell><NumberControl value={unit.count} onChange={this.onCountChange} /></Table.Cell>
            <Table.Cell>
                { this.renderModelOptions() }
            </Table.Cell>
            <Table.Cell>{ unit.altModels && unit.altModels.map(model => this.renderAltModel(model))}</Table.Cell>
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

    private renderModelOptions() {
        return this.props.unit.weaponOptionCategories.map(x => this.renderWeaponOption(x, this.props.unit.defaultModelCount, this.props.unit.getDefaultCategoryCount(this.props.unit.defaultModelCount, this.props.unit.weaponOptionCategories)) );
    }

    private renderAltModel(altModel: WarscrollAltModel) {
        const weaponOptionCategories = altModel.weaponOptionCategories;
        
        return <Grid.Column>
            <Dropdown value={altModel.count} options={getInterval(altModel.model.maxCount || this.props.unit.modelCount)} onChange={this.handleAltModelCountChange(altModel)} /> { altModel.model.name }
            { weaponOptionCategories.map(x => this.renderWeaponOption(x, altModel.count, this.props.unit.getDefaultCategoryCount(altModel.count, weaponOptionCategories)))}
        </Grid.Column>;
    }

    private handleAltModelCountChange(altModel: WarscrollAltModel) {
        return (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            this.props.warscrollStore!.setAltModelCount(altModel, props.value as number);
        }
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

    private renderWeaponOption(wsCategory: WarscrollWeaponOptionCategory, modelCount: number, defaultCategoryCount: number) {
        const category = wsCategory.category;
        const options = category.options;
        const weaponOptions: Option[] | undefined = options ?
            options.map(x => { return { key: x.id, text: x.name, value: x.id } }) : undefined;
        return weaponOptions && <div key={options.map(x => x.id).join(',')}> 
            { category.maxCount && <Dropdown value={wsCategory.count !== null ? wsCategory.count : undefined} options={getInterval(Math.min(category.maxCount *  this.props.unit.count, modelCount))} onChange={this.handleWeaponOptionCategoryCountChange(wsCategory)}/> }
            { category.maxCount === undefined && defaultCategoryCount }
            <Dropdown selection value={ wsCategory.weaponOption ? wsCategory.weaponOption.id : undefined } options={weaponOptions} onChange={this.onWeaponOptionChange(wsCategory)}  ></Dropdown>
        </div>;
    }

    private handleWeaponOptionCategoryCountChange(wsCategory: WarscrollWeaponOptionCategory) {
        return (vent: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            this.props.warscrollStore!.setWeaponOptionCount(wsCategory, props.value as number);
        }
    }

    private onWeaponOptionChange(wsCategory: WarscrollWeaponOptionCategory) {
        return (vent: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            const category = wsCategory.category;
            const weaponOption = category ? category.options.find(x => x.id === props.value) : undefined;
            if (category && weaponOption) this.props.warscrollStore!.setWeaponOption(wsCategory, weaponOption);
        }
    }

    private toggleGeneral = (event: React.SyntheticEvent<HTMLElement>, props: CheckboxProps) => {
        this.props.warscrollStore!.setGeneral(props.checked ? this.props.unit : undefined);
    }

    private onCountChange = (value: number) => {
        this.props.warscrollStore!.setUnitCount(this.props.unit, value);
    }
}