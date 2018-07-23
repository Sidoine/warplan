import * as React from "react";
import { WarscrollStore, WarscrollUnit, WarscrollScenery } from "../stores/warscroll";
import { observer, inject } from "mobx-react";
import { Header, Table, Icon, Segment } from "semantic-ui-react";
import { Attack, Ability, WarscrollBattalionInterface, DamageTable, ModelOption, AbilityCategory } from "../stores/units";
import { toJS } from "mobx";
import { value } from "../helpers/react";

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
            <Header as="h1">Leaders</Header>
                {
                    w.units.filter(x => x.isLeader).sort((a, b) => (a.isGeneral ? 1 : 0) - (b.isGeneral ? 1: 0)).map(x => this.renderUnit(x))
                }
            
            <Header as="h1">Battelines</Header>
                {
                    w.units.filter(x => x.isBattleline).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => this.renderUnit(x))
                }
            
            <Header as="h1">Units</Header>
            {
                w.units.filter(x => !x.isBattleline && !x.isLeader).sort((a, b) => a.unit.model.name > b.unit.model.name ? 1 : -1).map(x => this.renderUnit(x))
            }
            
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
                { battalion.battalion.abilities && this.renderAllAbilities("Abilities", battalion.battalion.abilities)}
            </Table.Cell>
        </Table.Row>    
    }

    renderScenery(scenery: WarscrollScenery) {
        return <Table.Row key={scenery.id}>
            <Table.Cell>{scenery.scenery.name}</Table.Cell>    
            <Table.Cell>{scenery.scenery.description}</Table.Cell>
            <Table.Cell>
                { scenery.scenery.abilities && this.renderAllAbilities("Abilities", scenery.scenery.abilities)}
            </Table.Cell>
        </Table.Row>    
    }

    renderUnit(unit: WarscrollUnit) {
        const u = unit.unit;
        const models = unit.models;
        let attacks:AttackWithCount[] = (u.attacks && u.attacks.map(x => { return { count: undefined, attack: x }} )) ||[];
        let abilities = toJS(u.abilities || []).concat();
        let mainOption: ModelOption | undefined;
        for (const model of models) {
            if (!model.count) continue;
            for (const option of model.options) {
                if (option.unitCategory === "main") mainOption = option;

                if (option.attacks) {
                    for (const a of option.attacks) {
                        const count = model.count;
                        if (count !== 0) attacks.push({ count: count, attack: a });
                    }
                }
                if (option.abilities) {
                    for (const a of option.abilities) {
                        if (!abilities.some(x => x.name === a.name)) abilities.push(a);
                    }
                } 
            }
        }

        for (const ability of unit.extraAbilities) {
            abilities.push(ability.ability);
        }
        const normalAbilities = abilities.filter(x => x.category === undefined);
        const specialRules = abilities.filter(x => x.category === AbilityCategory.SpecialRule);
        const magicAbilites = abilities.filter(x => x.category === AbilityCategory.Magic);

        return <Segment key={unit.id} className="unit">
            { unit.unit.pictureUrl && <img className="warscroll__image" src={unit.unit.pictureUrl}/>}
            <div className="unit__title"><Header as="h2">
            <div>{ unit.isGeneral && <Icon name="star"/> } {u.model.name}</div> {models.length > 0 && <div> {mainOption && mainOption.name}</div>}
            </Header>
            <div className="unit__stats">{unit.modelCount} <Icon name="user"/></div>
            <div className="unit__stats"> 
            <span className="wounds">{u.move && <>{value(u.move)}" <Icon name="location arrow" /></>} {u.wounds} <Icon name="heart" /></span><br/><span className="wounds">{u.save && <> {value(u.save)} <Icon name="shield" /></>} {u.bravery && <> {value(u.bravery)} <Icon name="hand victory" /></>}</span></div>
        </div>
        {unit.unit.flavor && <div className="unit__flavor">{unit.unit.flavor}</div>}
                {attacks.length > 0 && this.renderAllAttacks(attacks)}
                {unit.unit.damageTable && this.renderWoundEffects(unit.unit.damageTable)}
                <div className="warscroll__abilities">
                    { this.renderAllAbilities("Description", specialRules, u.description)}
                    {normalAbilities.length > 0 && this.renderAllAbilities("Abilities", normalAbilities)}
                    {u.commandAbilities && this.renderAllAbilities("Command abilities", u.commandAbilities)}
                    {u.magicDescription && this.renderAllAbilities("Magic", magicAbilites, u.magicDescription)}
                </div>
                <div><strong>Keywords</strong> {u.keywords && u.keywords.join(", ")}</div>
        </Segment>;
    }

    renderAllAbilities(title: string, abilities: Ability[], description?: string) {
        return <div><header className="warscroll__section-header">{title}</header>
                { description && <div>{description}</div>}  
                { abilities.map((x, index) => <div key={index}>
                    <header>{x.name}</header>  
                    <div>
                    { x.flavor && <div className="warscroll__flavor">{x.flavor}</div>}
                    {x.description}</div>    
        </div>) }</div>;
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
                    <Table.Cell>{value(x.attack.range)}" </Table.Cell>
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