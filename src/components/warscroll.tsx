import * as React from "react";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";
import { observer, inject } from "mobx-react";
import { Header, Table, Icon, Segment } from "semantic-ui-react";
import { Attack, Ability, WarscrollBattalion, WoundsEffect } from "../stores/units";
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
            <Segment><Header as="h1">Leaders</Header>
                {
                    w.units.filter(x => x.isLeader).sort((a, b) => (a.isGeneral ? 1 : 0) - (b.isGeneral ? 1: 0)).map(x => this.renderUnit(x))
                }
            </Segment>

            <Segment>
            <Header as="h1">Battelines</Header>
                {
                    w.units.filter(x => x.isBattleline).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => this.renderUnit(x))
                }
            </Segment>

            <Segment><Header as="h1">Units</Header>
               {
                    w.units.filter(x => !x.isBattleline && !x.isLeader).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => this.renderUnit(x))
                }</Segment>
            
        {w.battalions.length > 0 &&
           <Segment> 
                <Header>Battalions</Header>
                <Table>
                    <Table.Body>
                        {
                            w.battalions.map(x => this.renderBattalion(x))
                        }
                    </Table.Body>
                </Table>
            </Segment>}    
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
        
        return <Segment key={unit.id} className="unit"><Header as="h2">
            <div>{ unit.isGeneral && <Icon name="star"/> } {u.model.name}</div> {wo.length > 0 && <div> {join(wo.map((x, index) => <i key={index}>{x.weaponOption && x.weaponOption.name}</i>), ',')}</div>}
            </Header>
            <div>{unit.count * u.size} <Icon name="user"/>
            <span className="wounds">{u.move && <>{u.move}" <Icon name="location arrow" /></>} {u.wounds} <Icon name="heart" /></span><br/><span className="wounds">{u.save && <> {u.save} <Icon name="shield" /></>} {u.bravery && <> {u.bravery} <Icon name="hand victory" /></>}</span></div>

                {attacks.length > 0 && this.renderAllAttacks(attacks)}
                {unit.hasWoundEffects && this.renderWoundEffects(unit.attacksWithWoundEffects)}
                {abilities.length > 0 && this.renderAllAbilities(abilities)}
                {u.commandAbilities && unit.isGeneral && this.renderAllAbilities(u.commandAbilities)}
                <div>{u.keywords && u.keywords.join(", ")}</div>
        </Segment>;
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

    renderWoundEffects(attacks: Attack[]) {
        const attackNames = attacks.map(attack => attack.name);
        const woundEffects = attacks[0].woundsEffects as WoundsEffect[];

        return <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Wounds Allocated</Table.HeaderCell>
                    {attackNames.map(name => <Table.HeaderCell>{name}</Table.HeaderCell>)}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {woundEffects.map((woundEffect, i) => this.renderRow(woundEffect, attacks, i) )}
            </Table.Body>
        </Table>
    }

    renderRow(woundEffect: WoundsEffect, attacks: Attack[], i: number){
        return <Table.Row key={i}>
            
        { woundEffect.woundMax === undefined && <Table.Cell>{woundEffect.woundMin}+</Table.Cell> } 
        { woundEffect.woundMax !== undefined && <Table.Cell>{woundEffect.woundMin}-{woundEffect.woundMax}</Table.Cell> }
        { attacks.map(attack => this.renderEffect(attack, i)) }

        </Table.Row>
    }

    renderEffect(attack: Attack, i: number){
        const we = attack.woundsEffects as WoundsEffect[]; 

        return <Table.Cell>{we[i].effect.toWound}{we[i].effect.toHit}{we[i].effect.attacks}{we[i].effect.damage}</Table.Cell>
    }
}