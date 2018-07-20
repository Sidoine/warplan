import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { Table, Icon } from "semantic-ui-react";
import { UnitStats } from "../stores/units";
import { observable, action, computed } from "mobx";
import { join, value } from "../helpers/react";
import { Filter } from "./filter";
import { WarscrollStore } from "../stores/warscroll";
import { getValue } from "../stores/combat";

export interface StatsProps {
    uiStore?: UiStore;
    warscrollStore?: WarscrollStore;
}

const enum Columns {
    Name,
    Points,
    Move,
    Bravery,
    Wounds,
    Save,
    SavedWounds,
    MeleeDamage,
    RangedDamage,
    TotalDamage
}

@inject("uiStore", "warscrollStore")
@observer
export class Stats extends React.Component<StatsProps> {
    @observable
    sorted = Columns.Name;

    @observable
    direction: "ascending" | "descending" = "ascending";

    @action
    handleSort(column: Columns) {
        return () => {
            this.setColumn(column);
        }
    }

    @action
    setColumn(column: Columns) {
        if (column !== this.sorted) {
            this.sorted = column;
            this.direction = "ascending";
        } else {
            this.direction = (this.direction === "ascending" ? "descending" : "ascending");
        }   
    }

    @computed
    get sortedData() {
        let data = this.props.uiStore!.unitStats;
        const one = this.direction === "ascending" ? 1 : -1;
        const min = this.direction === "ascending" ? -1 : 1;
        switch (this.sorted) {
            case Columns.Name:
                data = data.sort((a, b) => a.unit.model.name > b.unit.model.name ? one : min);
                break;
            case Columns.Points:
                data = data.sort((a, b) => a.unit.points > b.unit.points ? one : min);
                break;
            case Columns.Move:
                data = data.sort((a, b) => (a.unit.move || 0) > (b.unit.move || 0) ? one : min);
                break;
            case Columns.Bravery:
                data = data.sort((a, b) => (a.unit.bravery || 0) > (b.unit.bravery || 0) ? one : min);
                break;
            case Columns.Wounds:
                data = data.sort((a, b) => (a.unit.wounds || 0) > (b.unit.wounds || 0) ? one : min);
                break;
            case Columns.Save:
                data = data.sort((a, b) => (a.save || 0) > (b.save || 0) ? one : min);
                break;
            case Columns.SavedWounds:
                data = data.sort((a, b) => a.savedWounds / a.unit.points > b.savedWounds / b.unit.points ? one : min);
                break;
            case Columns.MeleeDamage:
                data = data.sort((a, b) => a.meleeDamage / a.unit.points > b.meleeDamage / b.unit.points ? one : min);
                break;
            case Columns.RangedDamage:
                data = data.sort((a, b) => a.rangedDamage / a.unit.points > b.rangedDamage / b.unit.points ? one : min);
                break;
            case Columns.TotalDamage:
                data = data.sort((a, b) => a.totalDamage / a.unit.points > b.totalDamage / b.unit.points ? one : min);
                break;
        }
        return data;
    }

    render() {

        return <>
            <Filter/>
            <Table sortable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell onClick={this.handleSort(Columns.Name)} sorted={this.sorted === Columns.Name ? this.direction : undefined}>Name</Table.HeaderCell>
                    <Table.HeaderCell>Option</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.Points)} sorted={this.sorted === Columns.Points ? this.direction : undefined}>Points</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.Move)} sorted={this.sorted === Columns.Move ? this.direction : undefined}>Move</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.Bravery)} sorted={this.sorted === Columns.Bravery ? this.direction : undefined}>Bravery</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.Wounds)} sorted={this.sorted === Columns.Wounds ? this.direction : undefined}>Wounds</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.Save)} sorted={this.sorted === Columns.Save ? this.direction : undefined}>Save</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.SavedWounds)} sorted={this.sorted === Columns.SavedWounds ? this.direction : undefined}>Saved wounds</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.MeleeDamage)} sorted={this.sorted === Columns.MeleeDamage ? this.direction : undefined}>Melee Damage</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.RangedDamage)} sorted={this.sorted === Columns.RangedDamage ? this.direction : undefined}>Ranged Damage</Table.HeaderCell>
                    <Table.HeaderCell onClick={this.handleSort(Columns.TotalDamage)} sorted={this.sorted === Columns.TotalDamage ? this.direction : undefined}>Melee x 1.5 + Ranged</Table.HeaderCell>
                    <Table.HeaderCell>Other abilities</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    this.sortedData.map(x => this.renderCombination(x))
                }
            </Table.Body>
        </Table></>;
    }

    renderCombination(unitStats: UnitStats) {
        const unit = unitStats.unit;
        const wounds = getValue(unit.wounds) * unit.size;
        const points = unit.points / 100;
        const count = this.props.warscrollStore!.warscroll.units.reduce((c, x) => x.unit.id === unit.id ? x.count + c : c, 0);
        return <Table.Row key={unit.id + unitStats.name}>
            <Table.HeaderCell>{unit.model.name} { count > 0 && `(${count})`} <Icon name="add circle" onClick={() => this.props.warscrollStore!.addUnit(unit)}/> { unit.warscroll && <a href={unit.warscroll}><Icon name="help circle"/></a> }</Table.HeaderCell>
            <Table.Cell>{unitStats.name}</Table.Cell>
            <Table.Cell>{unit.points}</Table.Cell>
            <Table.Cell>{value(unit.move)}</Table.Cell>
            <Table.Cell>{unit.bravery}</Table.Cell>
            <Table.Cell>{wounds} ({(wounds / points).toFixed(2)}) </Table.Cell>
            <Table.Cell>{unitStats.save}</Table.Cell>
            <Table.Cell>{unitStats.savedWounds.toFixed()} ({(unitStats.savedWounds / points).toFixed(2)})</Table.Cell>
            <Table.Cell>{unitStats.meleeDamage.toFixed(2)} ({(unitStats.meleeDamage / points).toFixed(2)}) </Table.Cell>
            <Table.Cell>{unitStats.rangedDamage.toFixed(2)} ({(unitStats.rangedDamage / points).toFixed(2)}) </Table.Cell>
            <Table.Cell>{unitStats.totalDamage.toFixed(2)} ({(unitStats.totalDamage / points).toFixed(2)}) </Table.Cell>
            <Table.Cell>{ join(unitStats.ignoredAbilities.map(x => <span key={x.name} title={x.description}>{x.name}</span>), ", ") }</Table.Cell>
        </Table.Row>;
    }
}