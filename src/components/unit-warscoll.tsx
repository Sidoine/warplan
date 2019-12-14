import { WarscrollUnit } from "../stores/warscroll";
import * as React from "react";
import { toJS } from "mobx";
import { ModelOption, AbilityCategory } from "../stores/units";
import { value } from "../helpers/react";
import { Icon } from "semantic-ui-react";
import { AttackWithCount, AllAttacks, WoundEffects, AllAbilities } from "../atoms/warscroll-components";

export function UnitWarscroll({unit}: {unit: WarscrollUnit}) {
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

    return <div className="warscroll">
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
        {attacks.length > 0 && <AllAttacks attacks={attacks}/>}
        {unit.unit.damageTable && <WoundEffects damageTable={unit.unit.damageTable}/>}
            <div className="warscroll__abilities">
            <AllAbilities title="Description" abilities={specialRules} description={u.description}/>
            {normalAbilities.length > 0 && <AllAbilities title="Abilities" abilities={normalAbilities}/>}
            {u.commandAbilities && <AllAbilities title="Command abilities" abilities={u.commandAbilities}/>}
            {u.magicDescription && <AllAbilities title="Magic" abilities={magicAbilites} description={u.magicDescription}/>}
            </div>
            <div className="warscroll__keywords"><div className="warscroll__keywords__header">Keywords</div><div>{u.keywords && u.keywords.join(", ")}</div></div>
    </div>;
}