import * as React from "react";
import { WarscrollStore, WarscrollUnit, WarscrollScenery } from "../stores/warscroll";
import { observer, inject } from "mobx-react";
import { Header, Table, Icon, Segment } from "semantic-ui-react";
import { Attack, Ability, WarscrollBattalionInterface, DamageTable, ModelOption, AbilityCategory } from "../stores/units";
import { toJS } from "mobx";
import { value } from "../helpers/react";
import "./warscroll.less";

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
            {store.armyOptions && w.armyOption && <div>{store.armyOptions.name}: {w.armyOption.name}</div>}
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
            <><Header>Battalions</Header>
                    {
                        w.battalions.map(x => this.renderBattalion(x))
                    }
            </>}    

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
        return <div key={battalion.id} className="warscroll">
            <div className="warscroll__header">
                <div className="warscroll__title battalion">
                    <div>{battalion.battalion.name}</div>
                    <div className="warscroll__count">{battalion.battalion.points} points</div>
                </div>
            </div>
            <div className="warscroll__flavor">{battalion.battalion.description}</div>
            <div className="warscroll__abilities">
            { battalion.battalion.abilities && this.renderAllAbilities("Abilities", battalion.battalion.abilities)}
            </div>
            <div className="warscroll__keywords">
            <div className="warscroll__keywords__header">Units</div>
            <div>{battalion.battalion.units.map(x => `${x.countMin}${x.countMax > x.countMin ? `-${x.countMax}`: ''} ${x.units.map(y => y.join(' - ')).join('/')}`).join(", ")}</div>
            </div>
        </div>    
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
        const magicAbilites = abilities.filter(x => x.category === AbilityCategory.Spell);

        return <div key={unit.id} className="warscroll">
        <div className="warscroll__header">
            <div className="warscroll__stats">
                <div className="move">{u.move && <>{value(u.move)}"</>}</div>
                <div className="wounds">{u.wounds}</div>
                <div className="save">{u.save && <> {value(u.save)}</>}</div>
                <div className="bravery">{u.bravery && <> {value(u.bravery)}</>}</div>
            </div>
            <div className="warscroll__title">
                <div>{ unit.isGeneral && <Icon name="star"/> } {u.model.name}</div> {models.length > 0 && <div className="warscroll__title__option"> {mainOption && mainOption.name}</div>}
                <div className="warscroll__count">{unit.modelCount} <Icon name="user"/> {unit.points} points</div>
            </div>
            <div className="warscroll__image"><img src={unit.unit.pictureUrl}/></div>
        </div>
        {unit.unit.flavor && <div className="warscroll__flavor">{unit.unit.flavor}</div>}
                {attacks.length > 0 && this.renderAllAttacks(attacks)}
                {unit.unit.damageTable && this.renderWoundEffects(unit.unit.damageTable)}
                <div className="warscroll__abilities">
                    { this.renderAllAbilities("Description", specialRules, u.description)}
                    {normalAbilities.length > 0 && this.renderAllAbilities("Abilities", normalAbilities)}
                    {u.commandAbilities && this.renderAllAbilities("Command abilities", u.commandAbilities)}
                    {u.magicDescription && this.renderAllAbilities("Magic", magicAbilites, u.magicDescription)}
                </div>
                <div className="warscroll__keywords"><div className="warscroll__keywords__header">Keywords</div><div>{u.keywords && u.keywords.join(", ")}</div></div>
        </div>;
    }

    renderAllAbilities(title: string, abilities: Ability[], description?: string) {
        return <div><header className="warscroll__section-header">{title}</header>
                { description && <div>{description}</div>}  
                { abilities.map((x, index) => <div key={index}>
                    <span className="warscroll__ability__name">{x.name}:</span>
                    { x.flavor && <span className="warscroll__flavor"> {x.flavor}</span>}
                    <div>{x.description}</div>    
        </div>) }</div>;
    }

    renderAllAttacks(attacks: AttackWithCount[]) {
        return <>
            {attacks.some(x => x.attack.melee) && this.renderAttacks(attacks.filter(x => x.attack.melee), "Melee Weapons")}
            {attacks.some(x => !x.attack.melee) && this.renderAttacks(attacks.filter(x => !x.attack.melee), "Missile Weapons")}
        </>;    
    }

    renderAttacks(attacks: AttackWithCount[], name: string) {
        return <table className="warscroll__attack">
            <thead>
                <tr>
                    <td className="warscroll__attack__name">{name}</td>
                    <td>Range</td>
                    <td>Attacks</td>
                    <td>To Hit</td>
                    <td>To Wound</td>
                    <td>Rend</td>
                    <td>Damage</td>
                </tr>
            </thead>
            <tbody>
                {attacks.map((x, index) => <tr key={index} >
                    <td>{x.attack.name} { x.count !== undefined && <>(x{x.count})</> }</td>
                    <td>{value(x.attack.range)}" </td>
                    <td>{value(x.attack.attacks)} </td>
                    <td>{value(x.attack.toHit)} </td>
                    <td>{value(x.attack.toWound)} </td>
                    <td>{value(x.attack.rend) || "-"} </td>
                    <td>{value(x.attack.damage)} </td>
                </tr>)}
            </tbody>
        </table>;
    }

    renderWoundEffects(damageTable: DamageTable) {
        const ranges = damageTable.ranges;
        return <Table className="warscroll__wound-table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Wounds Suffered</Table.HeaderCell>
                    {damageTable.columns.map(x => <Table.HeaderCell key={x.name}>{x.name}</Table.HeaderCell>)}
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {ranges.map((x, index) =>
            <Table.Row key={x}>
                 <Table.HeaderCell>{x}</Table.HeaderCell>
                {damageTable.columns.map(x => <Table.Cell key={x.name}> { x.values[index] } </Table.Cell>)}
            </Table.Row>)}
            </Table.Body>
        </Table>
    }
}