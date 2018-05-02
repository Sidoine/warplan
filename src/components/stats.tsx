import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { Table } from "semantic-ui-react";
import { UnitStats, WeaponOptionCombinationStats } from "../stores/units";

export interface StatsProps {
    uiStore?: UiStore;
}

@inject("uiStore")
@observer
export class Stats extends React.Component<StatsProps> {
    render() {
        return <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Points</Table.HeaderCell>
                    <Table.HeaderCell>Move</Table.HeaderCell>
                    <Table.HeaderCell>Bravery</Table.HeaderCell>
                    <Table.HeaderCell>Wounds</Table.HeaderCell>
                    <Table.HeaderCell>Save</Table.HeaderCell>
                    <Table.HeaderCell>Saved wounds</Table.HeaderCell>
                    <Table.HeaderCell>Melee Damage</Table.HeaderCell>
                    <Table.HeaderCell>Ranged Damage</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    this.props.uiStore!.unitStats.map(x => x.combinations ? 
                            x.combinations.map(y => this.renderCombination(x, y))
                        : this.renderCombination(x, x.base))
                }
            </Table.Body>
        </Table>;
    }

    renderCombination(unitStats: UnitStats, combination: WeaponOptionCombinationStats) {
        const unit = unitStats.unit;
        const wounds = (unit.wounds || 0) * unit.size;
        const savedWounds = unitStats.savedWounds * unit.size;
        const points = unit.points / 100;
        return <Table.Row id={unit.id + combination.name}>
            <Table.HeaderCell>{unit.model.name} <i>{combination.name}</i></Table.HeaderCell>
            <Table.Cell>{unit.points}</Table.Cell>
            <Table.Cell>{unit.move}</Table.Cell>
            <Table.Cell>{unit.bravery}</Table.Cell>
            <Table.Cell>{wounds} ({(wounds / points).toFixed(2)}) </Table.Cell>
            <Table.Cell>{unitStats.save}</Table.Cell>
            <Table.Cell>{savedWounds.toFixed()} ({(savedWounds / points).toFixed(2)})</Table.Cell>
            <Table.Cell>{combination.meleeDamage.toFixed(2)} ({(combination.meleeDamage / points).toFixed(2)}) </Table.Cell>
            <Table.Cell>{combination.rangedDamage.toFixed(2)} ({(combination.rangedDamage / points).toFixed(2)}) </Table.Cell>
        </Table.Row>;
    }
}