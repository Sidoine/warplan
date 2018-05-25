import * as React from "react";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";
import { Dropdown, Button, Table, Icon, Checkbox, CheckboxProps, DropdownProps, Popup } from "semantic-ui-react";
import { WeaponOptionCategory } from "../stores/units";
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
                    <Table.Cell> {unit.unit.weaponOptionCategories && unit.unit.weaponOptionCategories.map((x, index) => this.renderWeaponOption(x, index, unit.count) ) } 
                    { join(unit.extraAbilities.map(x => <span key={x.id}><Popup content={<>{x.ability.description}</>} trigger={<span>{x.ability.name}</span>}/><Button onClick={() => this.props.warscrollStore!.removeExtraAbility(unit, x)} ><Icon name="remove"/> </Button></span>), ", ") }
                        { this.renderExtraAbilities(unit)}
                    </Table.Cell>
            <Table.Cell>{unit.points}</Table.Cell>
            <Table.Cell>
                <Button onClick={() => this.props.warscrollStore!.removeUnit(this.props.unit)}><Icon name="remove"/></Button>
            </Table.Cell></Table.Row>;
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

    private renderWeaponOption(category: WeaponOptionCategory, index: number, unitCount: number) {
        const options = category.options;
        const weaponOptions: Option[] | undefined = options ?
            options.map(x => { return { key: x.id, text: x.name, value: x.id } }) : undefined;
        const selected = this.props.unit.weaponOptionCategories[index];
        return weaponOptions && <div key={index}> 
            { category.maxCount && <Dropdown value={selected.count !== null ? selected.count : undefined} options={getInterval(category.maxCount *  unitCount)} onChange={this.handleWeaponOptionCategoryCountChange(index)}/> }
            { category.maxCount === undefined && this.props.unit.defaultCategoryCount }
            <Dropdown selection value={ selected.weaponOption ? selected.weaponOption.id : undefined } options={weaponOptions} onChange={this.onWeaponOptionChange(index)}  ></Dropdown>
        </div>;
    }

    private handleWeaponOptionCategoryCountChange(index: number) {
        return (vent: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            const unit = this.props.unit;
            this.props.warscrollStore!.setWeaponOptionCount(unit, index, props.value as number);
        }
    }

    private onWeaponOptionChange(index: number) {
        return (vent: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            const unit = this.props.unit;
            const category = unit.unit.weaponOptionCategories ? unit.unit.weaponOptionCategories[index] : undefined;
            const weaponOption = category ? category.options.find(x => x.id === props.value) : undefined;
            if (category && weaponOption) this.props.warscrollStore!.setWeaponOption(unit, index, weaponOption);
        }
    }

    private toggleGeneral = (event: React.SyntheticEvent<HTMLElement>, props: CheckboxProps) => {
        this.props.warscrollStore!.setGeneral(props.checked ? this.props.unit : undefined);
    }

    private onCountChange = (value: number) => {
        this.props.warscrollStore!.setUnitCount(this.props.unit, value);
    }
}