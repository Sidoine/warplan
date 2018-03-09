import * as React from "react";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";
import { Dropdown, Button, Table, Icon, Checkbox, CheckboxProps, DropdownProps, Popup } from "semantic-ui-react";
import { WeaponOption } from "../stores/units";
import { join } from "../helpers/react";

export interface WarscrollUnitEditProps {
    unit: WarscrollUnit;
    warscrollStore?: WarscrollStore;
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
                { unit.unit.warscroll && <a target="_blank" href={unit.unit.warscroll}><Icon name="help circle outline"/></a>}
                 </div>
                <div>
                    <div><em>{unit.unit.subType}</em></div>
                    <div>{unit.isLeader && <><Checkbox toggle checked={unit === this.props.warscrollStore!.warscroll.general} onChange={this.toggleGeneral} ></Checkbox>General</> } </div>
                </div>
            </Table.Cell>
            <Table.Cell><NumberControl value={unit.count} onChange={this.onCountChange} /></Table.Cell>
                    <Table.Cell> {unit.unit.weaponOptions && unit.unit.weaponOptions.map((x, index) => this.renderWeaponOption(x.options, index) ) } 
                    { join(unit.extraAbilities.map(x => <><Popup content={<>{x.ability.description}</>} trigger={<span>{x.ability.name}</span>}/><Button onClick={() => this.props.warscrollStore!.removeExtraAbility(unit, x)} ><Icon name="remove"/> </Button></>), ", ") }
                        { this.renderExtraAbilities(unit)}
                    </Table.Cell>
            <Table.Cell>{unit.unit.points * unit.count}</Table.Cell>
            <Table.Cell>
                <Button onClick={() => this.props.warscrollStore!.removeUnit(this.props.unit)}><Icon name="remove"/></Button>
            </Table.Cell></Table.Row>;
    }

    private renderExtraAbilities(unit: WarscrollUnit) {
        const options = unit.availableExtraAbilities.map(x => { return { key: x.id, text: x.ability.name, value: x.id }});
        return unit.availableExtraAbilities.length > 0 && <Dropdown className="icon" icon="plus" button options={options} onChange={this.handleExtraAbilityChange(unit)} />;
    }

    private handleExtraAbilityChange(unit: WarscrollUnit) {
        return (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            const extraAbility = unit.availableExtraAbilities.find(x => x.id === props.value);
            if (extraAbility) this.props.warscrollStore!.addExtraAbility(unit, extraAbility);
        }
    }

    private renderWeaponOption(weaponList: WeaponOption[], index: number) {
        const weaponOptions = weaponList ?
            weaponList.map(x => { return { key: x.id, text: x.name, value: x.id } }) : undefined;
        const selected = this.props.unit.weaponOption[index];
        return weaponOptions && <Dropdown key={index} selection value={ selected.weaponOption && selected.weaponOption.id } options={weaponOptions} onChange={this.onWeaponOptionChange(index)}  ></Dropdown>;
    }

    private onWeaponOptionChange(index: number) {
        return (vent: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
            const unit = this.props.unit;
            const category = unit.unit.weaponOptions ? unit.unit.weaponOptions[index] : undefined;
            const weaponOption = category ? category.options.find(x => x.id === props.value) : undefined;
            if (category && weaponOption) this.props.warscrollStore!.setWeaponOption(unit, index, weaponOption, category.maxCount);
        }
    }

    private toggleGeneral = (event: React.SyntheticEvent<HTMLElement>, props: CheckboxProps) => {
        this.props.warscrollStore!.setGeneral(props.checked ? this.props.unit : undefined);
    }

    private onCountChange = (value: number) => {
        this.props.warscrollStore!.setUnitCount(this.props.unit, value);
    }
}