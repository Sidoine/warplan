import * as React from "react";
import { WarscrollStore, WarscrollUnit, WarscrollScenery } from "../stores/warscroll";
import { observer, inject } from "mobx-react";
import { Header, Table, Icon, Segment } from "semantic-ui-react";
import { Attack, Ability, WarscrollBattalionInterface, DamageTable } from "../stores/units";
import { toJS } from "mobx";
import { join, value } from "../helpers/react";

export interface WarscrollProps {
    warscrollStore?: WarscrollStore;
}


interface AttackWithCount {
    attack: Attack;
    count?: number;
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

        {w.sceneries.length > 0 &&
           <Segment> 
                <Header>Sceneries</Header>
                <Table>
                    <Table.Body>
                        {
                            w.sceneries.map(x => this.renderScenery(x))
                        }
                    </Table.Body>
                </Table>
            </Segment>}    
        </div>;
    }

    renderBattalion(battalion: WarscrollBattalionInterface) {
        return <Table.Row key={battalion.id}>
            <Table.Cell>{battalion.battalion.name}</Table.Cell>    
            <Table.Cell>{battalion.battalion.description}</Table.Cell>
            <Table.Cell>
                { battalion.battalion.abilities && this.renderAllAbilities(battalion.battalion.abilities)}
            </Table.Cell>
        </Table.Row>    
    }

    renderScenery(scenery: WarscrollScenery) {
        return <Table.Row key={scenery.id}>
            <Table.Cell>{scenery.scenery.name}</Table.Cell>    
            <Table.Cell>{scenery.scenery.description}</Table.Cell>
        </Table.Row>    
    }

    renderUnit(unit: WarscrollUnit) {
        const u = unit.unit;
        const wo = unit.weaponOptionCategories;
        const modelCount = unit.modelCount;
        let attacks:AttackWithCount[] = (u.attacks && u.attacks.map(x => { return { count: undefined, attack: x }} )) ||[];
        let abilities = toJS(u.abilities || []).concat();
        // let totalWeapons = unit.count * u.size;

        for (const o of wo) {
            if (!o.weaponOption) continue;
            // if (o.count) totalWeapons -= o.count;
            if (o.weaponOption.attacks) {
                for (const a of o.weaponOption.attacks) {
                     const count = o.count !== null ? o.count : (unit.defaultCategoryCount !== modelCount ? unit.defaultCategoryCount : undefined) 
                    if (count !== 0) attacks.push({ count: count, attack: a });
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

        for (const altModel of unit.altModels) {
            if (altModel.count) {
                if (altModel.model.abilities) {
                    for (const ability of altModel.model.abilities) {
                        abilities.push(ability);
                    }
                }
                for (const woc of altModel.weaponOptionCategories) {
                    if (woc.count !== 0 && woc.weaponOption !== null) {
                        const wo = woc.weaponOption;
                        if (wo.attacks) {
                            for (const a of wo.attacks) {
                                const count = woc.count || unit.getDefaultCategoryCount(altModel.count, altModel.weaponOptionCategories);
                                const existing = attacks.find(x => x.attack.name === a.name);
                                if (existing) {
                                    if (existing.count) existing.count += count;
                                } else {
                                    attacks.push({ count: count, attack: a});
                                }                            
                            }
                        }
                    }
                }
            }
        }

        // for (const a of attacks) {
        //     if (a.count === 0) a.count = totalWeapons;
        // }
        
        return <Segment key={unit.id} className="unit"><Header as="h2">
            <div>{ unit.isGeneral && <Icon name="star"/> } {u.model.name}</div> {wo.length > 0 && <div> {join(wo.map((x, index) => <i key={index}>{x.weaponOption && x.weaponOption.name}</i>), ',')}</div>}
            </Header>
            <div>{unit.count * u.size} <Icon name="user"/>
            <span className="wounds">{u.move && <>{value(u.move)}" <Icon name="location arrow" /></>} {u.wounds} <Icon name="heart" /></span><br/><span className="wounds">{u.save && <> {value(u.save)} <Icon name="shield" /></>} {u.bravery && <> {value(u.bravery)} <Icon name="hand victory" /></>}</span></div>

                {attacks.length > 0 && this.renderAllAttacks(attacks)}
                {unit.unit.damageTable && this.renderWoundEffects(unit.unit.damageTable)}
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
                    <Table.Cell>{x.attack.name} { x.count !== undefined && <>(x{x.count})</> }</Table.Cell>
                    <Table.Cell>{value(x.attack.range)} </Table.Cell>
                    <Table.Cell>{value(x.attack.attacks)} </Table.Cell>
                    <Table.Cell>{value(x.attack.toHit)} </Table.Cell>
                    <Table.Cell>{value(x.attack.toWound)} </Table.Cell>
                    <Table.Cell>{value(x.attack.rend) || "-"} </Table.Cell>
                    <Table.Cell>{value(x.attack.damage)} </Table.Cell>
                </Table.Row>)}
            </Table.Body>
        </Table>;
    }

    renderWoundEffects(damageTable: DamageTable) {
        const ranges = damageTable.ranges;
        return <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Wounds Suffered</Table.HeaderCell>
                    {damageTable.columns.map(x => <Table.HeaderCell key={x.name}>{x.name}</Table.HeaderCell>)}
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {ranges.map((x, index) =>
            <Table.Row key={x}>
                 <Table.HeaderCell>{ index === ranges.length - 1 ? `${x}+` : `${x}-${ranges[index+1] -1 }` }</Table.HeaderCell>
                {damageTable.columns.map(x => <Table.Cell key={x.name}> { x.values[index] } </Table.Cell>)}
            </Table.Row>)}
            </Table.Body>
        </Table>
    }
}