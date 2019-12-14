import { Attack, DamageTable, Ability } from "../stores/units";
import * as React from "react";
import { value } from "../helpers/react";
import { Table } from "semantic-ui-react";

export interface AttackWithCount {
    attack: Attack;
    count?: number;
}

export function AllAttacks({ attacks }: { attacks: AttackWithCount[] }) {
    return <>
        {attacks.some(x => x.attack.melee) && <Attacks attacks={attacks.filter(x => x.attack.melee)} name="Melee Weapons"/>}
        {attacks.some(x => !x.attack.melee) && <Attacks attacks={attacks.filter(x => !x.attack.melee)} name="Missile Weapons"/>}
    </>;    
}

export function Attacks({ attacks, name }: { attacks: AttackWithCount[], name: string }) {
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

export function AllAbilities({ title, abilities, description }: { title: string, abilities: Ability[], description?: string }) {
    return <div><header className="warscroll__section-header">{title}</header>
            { description && <div>{description}</div>}  
            { abilities.map((x, index) => <div key={index}>
                <span className="warscroll__ability__name">{x.name}:</span>
                { x.flavor && <span className="warscroll__flavor"> {x.flavor}</span>}
                <div>{x.description}</div>    
    </div>) }</div>;
}

export function WoundEffects({ damageTable }: { damageTable: DamageTable }) {
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