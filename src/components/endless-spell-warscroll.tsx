import { WarscrollEndlessSpell } from "../stores/warscroll";
import * as React from "react";
import { toJS } from "mobx";
import { AbilityCategory, EndlessSpell } from "../stores/units";
import {
    AllAbilities,
    useWarscrollStyles
} from "../atoms/warscroll-components";

export function EndlessSpellWarscroll({
    wes,
    endlessSpell
}: {
    wes?: WarscrollEndlessSpell | null;
    endlessSpell?: EndlessSpell;
}) {
    const classes = useWarscrollStyles();
    const u = endlessSpell || wes?.definition;
    if (!u) return <div></div>;
    let abilities = toJS(u.abilities || []);

    const normalAbilities = abilities.filter(x => x.category === undefined);
    const specialRules = abilities.filter(
        x => x.category === AbilityCategory.SpecialRule
    );
    const magicAbilites = abilities.filter(
        x => x.category === AbilityCategory.Spell
    );
    const keywords = u.keywords;

    return (
        <div className={classes.warscroll}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <div>{u.name}</div>{" "}
                </div>
                <div className={classes.image}>
                    <img src={u.pictureUrl} />
                </div>
            </div>
            {u.flavor && <div className={classes.flavor}>{u.flavor}</div>}
            <div className={classes.abilities}>
                <AllAbilities
                    title="Description"
                    abilities={specialRules}
                    description={u.description}
                />
                {normalAbilities.length > 0 && (
                    <AllAbilities
                        title="Abilities"
                        abilities={normalAbilities}
                    />
                )}
                {u.commandAbilities && (
                    <AllAbilities
                        title="Command abilities"
                        abilities={u.commandAbilities}
                    />
                )}
                {magicAbilites.length > 0 && (
                    <AllAbilities title="Magic" abilities={magicAbilites} />
                )}
            </div>
            <div className={classes.keywords}>
                <div className={classes.keywordsHeader}>Keywords</div>
                <div>{keywords && keywords.join(", ")}</div>
            </div>
        </div>
    );
}
