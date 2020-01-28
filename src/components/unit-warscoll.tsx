import { WarscrollUnit } from "../stores/warscroll";
import * as React from "react";
import { toJS } from "mobx";
import { ModelOption, AbilityCategory, Unit } from "../stores/units";
import { value } from "../helpers/react";
import { AttackWithCount, AllAttacks, WoundEffects, AllAbilities, useWarscrollStyles } from "../atoms/warscroll-components";
import StarIcon from '@material-ui/icons/Star';
import PeopleIcon from '@material-ui/icons/People';



export function UnitWarscroll({wu, unit }: {wu?: WarscrollUnit | null, unit?: Unit}) {
    const classes = useWarscrollStyles();
    const u = unit || wu?.unit;
    const models = wu?.models;
    if (!u) return <div></div>;
    let attacks:AttackWithCount[] = (u.attacks && u.attacks.map(x => { return { count: undefined, attack: x }} )) ||[];
    let abilities = toJS(u.abilities || []).concat();
    let mainOption: ModelOption | undefined;
    if (models) {
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
    }
    
    if (wu) {
        for (const ability of wu.extraAbilities) {
            abilities.push(ability.ability);
        }
    }
    const normalAbilities = abilities.filter(x => x.category === undefined);
    const specialRules = abilities.filter(x => x.category === AbilityCategory.SpecialRule);
    const magicAbilites = abilities.filter(x => x.category === AbilityCategory.Spell);
    const keywords = wu?.keywords || u.keywords;

    return <div className={classes.warscroll}>
    <div className={classes.header}>
        <div className={classes.stats}>
            <div className={classes.moveStat}>{u.move && <>{value(u.move)}"</>}</div>
            <div className={classes.woundsStat}>{u.wounds}</div>
            <div className={classes.saveStat}>{u.save && <> {value(u.save)}</>}</div>
            <div className={classes.braveryStat}>{u.bravery && <> {value(u.bravery)}</>}</div>
        </div>
        <div className={classes.title}>
            <div>{ wu?.isGeneral && <StarIcon/> } {u.model.name}</div> { models && models.length > 0 && <div className={classes.option}> {mainOption && mainOption.name}</div>}
            <div className={classes.count}>{wu?.modelCount} <PeopleIcon/> {wu?.points} points</div>
        </div>
        <div className={classes.image}><img src={u.pictureUrl}/></div>
    </div>
    {u.flavor && <div className={classes.flavor}>{u.flavor}</div>}
        {attacks.length > 0 && <AllAttacks attacks={attacks}/>}
        {u.damageTable && <WoundEffects damageTable={u.damageTable}/>}
            <div className={classes.abilities}>
            <AllAbilities title="Description" abilities={specialRules} description={u.description}/>
            {normalAbilities.length > 0 && <AllAbilities title="Abilities" abilities={normalAbilities}/>}
            {u.commandAbilities && <AllAbilities title="Command abilities" abilities={u.commandAbilities}/>}
            {u.magicDescription && <AllAbilities title="Magic" abilities={magicAbilites} description={u.magicDescription}/>}
            </div>
            <div className={classes.keywords}><div className={classes.keywordsHeader}>Keywords</div><div>{keywords && keywords.join(", ")}</div></div>
    </div>;
}