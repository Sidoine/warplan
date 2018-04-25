import * as React from "react";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";
import { observer, inject } from "mobx-react";
import { Header, Table, Icon } from "semantic-ui-react";
import { Attack, Ability, WarscrollBattalion } from "../stores/units";
import { toJS } from "mobx";
import { join } from "../helpers/react";

export interface WarscrollProps {
    warscrollStore?: WarscrollStore;
}


interface AttackWithCount {
    attack: Attack;
    count: number;
}

@inject("warscrollStore")
@observer
export class Warscroll extends React.Component<WarscrollProps>{
    render() {
        const store = this.props.warscrollStore!;
        const w = this.props.warscrollStore!.warscroll;
        return <div>
            <div>Allegiance: {w.allegiance.name}</div>
            {store.armyOptions && w.armyOption && <div>{store.armyOptions.name}: {w.armyOption}</div>}
            <div>{w.totalPoints} points</div>
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

        {w.battalions.length > 0 &&
           <> 
                <Header>Battalions</Header>
                <Table>
                    <Table.Body>
                        {
                            w.battalions.map(x => this.renderBattalion(x))
                        }
                    </Table.Body>
                </Table>
            </>}    
        </div>;
    }

    renderBattalion(battalion: WarscrollBattalion) {
        return <Table.Row key={battalion.id}>
            <Table.Cell>{battalion.battalion.name}</Table.Cell>    
            <Table.Cell>{battalion.battalion.description}</Table.Cell>
            <Table.Cell>
                { battalion.battalion.abilities && this.renderAllAbilities(battalion.battalion.abilities)}
            </Table.Cell>
        </Table.Row>    
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
            <Table.Cell> { unit.isGeneral && <Icon name="star"/> } {u.model.name} {wo.length > 0 && <div> {join(wo.map((x, index) => <i key={index}>{x.weaponOption && x.weaponOption.name}</i>), ',')}</div>}</Table.Cell>
            <Table.Cell>{unit.count * u.size} <Icon name="user"/></Table.Cell>
            <Table.Cell><span className="wounds">{u.move && <>{u.move}" <Icon name="location arrow" /></>} {u.wounds} <Icon name="heart" /></span><br/><span className="wounds">{u.save && <> {u.save} <Icon name="shield" /></>} {u.bravery && <> {u.bravery} <Icon name="hand victory" /></>}</span></Table.Cell>
            <Table.Cell>
                {attacks.length > 0 && this.renderAllAttacks(attacks)}
                {abilities.length > 0 && this.renderAllAbilities(abilities)}
                {u.commandAbilities && unit.isGeneral && this.renderAllAbilities(u.commandAbilities)}
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