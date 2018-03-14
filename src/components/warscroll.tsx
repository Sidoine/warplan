import * as React from "react";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";
import { observer, inject } from "mobx-react";
import { Header, Table, Icon } from "semantic-ui-react";
import { Attack, Ability } from "../stores/units";
import { toJS } from "mobx";

export interface WarscrollProps {
    warscrollStore?: WarscrollStore;
}


interface AttackWithCount {
    attack: Attack;
    count: number;
}

@inject("warscrollStore")
@observer
export class Warscroll extends React.Component<WarscrollProps, {}>{
    render() {
        const w = this.props.warscrollStore!.warscroll;
        return <div>
            <div>Allegiance: {w.allegiance.name}</div>
            <Header>Leaders</Header>
            <Table>
                <Table.Body>
                {
                    w.units.filter(x => x.isLeader).sort((a, b) => (a.isGeneral ? 1 : 0) - (b.isGeneral ? 1: 0)).map(x => this.renderUnit(x))
                }
                </Table.Body>        
            </Table>

            <Header>Battelines</Header>
            <Table>
                <Table.Body>
                {
                    w.units.filter(x => x.isBattleline).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => this.renderUnit(x))
                }
                </Table.Body>        
            </Table>

            <Header>Units</Header>
            <Table>
                <Table.Body>
                {
                    w.units.filter(x => !x.isBattleline && !x.isLeader).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => this.renderUnit(x))
                }
                </Table.Body>        
            </Table>
        </div>;
    }

    renderUnit(unit: WarscrollUnit) {
        const u = unit.unit;
        const wo = unit.weaponOption;
        let attacks:AttackWithCount[] = (u.attacks && u.attacks.map(x => { return { count: 0, attack: x }} )) ||[];
        let abilities = toJS(u.abilities || []);
        // let totalWeapons = unit.count * u.size;

        for (const o of wo) {
            if (!o.weaponOption) continue;
            // if (o.count) totalWeapons -= o.count;
            if (o.weaponOption.attacks) {
                for (const a of o.weaponOption.attacks) {
                    const existing = attacks.find(x => x.attack.name === a.name);
                    if (existing) {
                        if (o.count && existing.count) existing.count += o.count;
                        else existing.count = 0;
                    }
                    else {
                        attacks.push({ count: o.count || 0, attack: a });
                    }
                }
            }
            if (o.weaponOption.abilities) {
                for (const a of o.weaponOption.abilities) {
                    if (!abilities.some(x => x.name === a.name)) abilities.push(a);
                }
            } 
        }

        for (const ability of unit.extraAbilities) {
            abilities.push(ability.ability);
        }

        // for (const a of attacks) {
        //     if (a.count === 0) a.count = totalWeapons;
        // }
        
        return <Table.Row key={unit.id}>
            <Table.Cell>{u.model.name}</Table.Cell>
            <Table.Cell>{unit.count * u.size} <Icon name="user"/></Table.Cell>
            <Table.Cell>{u.move && <>{u.move}" <Icon name="location arrow" /></>} {u.wounds} <Icon name="heart" /> {u.save && <> {u.save} <Icon name="shield" /></>} {u.bravery && <> {u.bravery} <Icon name="hand victory" /></>} </Table.Cell>
            <Table.Cell>
                {attacks && this.renderAllAttacks(attacks)}
                {abilities && this.renderAllAbilities(abilities)}
                <div>{u.keywords && u.keywords.join(", ")}</div></Table.Cell>        
        </Table.Row>;
    }

    renderAllAbilities(abilities: Ability[]) {
        return <Table>
            <Table.Body>
                {abilities.map((x, index) => <Table.Row key={index}>
                    <Table.HeaderCell>{x.name}</Table.HeaderCell>    
                    <Table.Cell>{x.description}</Table.Cell>    
                    </Table.Row>)}
            </Table.Body>
        </Table>;
    }

    renderAllAttacks(attacks: AttackWithCount[]) {
        return <>
            {attacks.some(x => x.attack.melee) && this.renderAttacks(attacks.filter(x => x.attack.melee), "Melee Weapons")}
            {attacks.some(x => !x.attack.melee) && this.renderAttacks(attacks.filter(x => !x.attack.melee), "Missile Weapons")}
        </>;    
    }

    renderAttacks(attacks: AttackWithCount[], name: string) {
        return <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{name}</Table.HeaderCell>
                    <Table.HeaderCell>Range</Table.HeaderCell>
                    <Table.HeaderCell>Attacks</Table.HeaderCell>
                    <Table.HeaderCell>To Hit</Table.HeaderCell>
                    <Table.HeaderCell>To Wound</Table.HeaderCell>
                    <Table.HeaderCell>Rend</Table.HeaderCell>
                    <Table.HeaderCell>Damage</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {attacks.map((x, index) => <Table.Row key={index} >
                    <Table.Cell>{x.attack.name} { x.count > 0 && <>(x{x.count})</> }</Table.Cell>
                    <Table.Cell>{x.attack.range} </Table.Cell>
                    <Table.Cell>{x.attack.attacks} </Table.Cell>
                    <Table.Cell>{x.attack.toHit} </Table.Cell>
                    <Table.Cell>{x.attack.toWound} </Table.Cell>
                    <Table.Cell>{x.attack.rend || "-"} </Table.Cell>
                    <Table.Cell>{x.attack.damage} </Table.Cell>
                </Table.Row>)}
            </Table.Body>
        </Table>;
    }
}