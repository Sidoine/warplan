import { WarscrollUnit } from "../stores/warscroll";
import * as React from "react";
import { toJS } from "mobx";
import { ModelOption, AbilityCategory, Unit } from "../stores/unit";
import { value } from "../helpers/react";
import {
    AttackWithCount,
    AllAttacks,
    WoundEffects,
    AllAbilities,
    useWarscrollStyles,
} from "../atoms/warscroll-components";
import StarIcon from "@material-ui/icons/Star";
import { distinct } from "../helpers/algo";

export function UnitWarscroll({
    wu,
    unit,
    noFlavor,
}: {
    wu?: WarscrollUnit | null;
    unit?: Unit;
    noFlavor?: boolean;
}) {
    const classes = useWarscrollStyles();
    const u = unit || wu?.definition;
    const models = wu?.models;
    if (!u) return <div></div>;
    const attacks: AttackWithCount[] =
        (u.attacks &&
            u.attacks.map((x) => {
                return { count: undefined, attack: x, id: x.id };
            })) ||
        [];
    const abilities = toJS(u.abilities || []).concat();
    let mainOption: ModelOption | undefined;
    const modelOptions: [ModelOption, number?][] = [];
    if (models) {
        for (const model of models) {
            if (!model.count) continue;
            for (const option of model.options) {
                modelOptions.push([option, model.count]);
            }
        }
    } else if (u.options) {
        for (const option of u.options) {
            modelOptions.push([option]);
        }
    }
    for (const [option, count] of modelOptions) {
        if (option.unitCategory === "main") mainOption = option;

        if (option.attacks) {
            for (const a of option.attacks) {
                if (count !== 0)
                    attacks.push({ count: count, attack: a, id: a.id });
            }
        }
        if (option.abilities) {
            for (const a of option.abilities) {
                if (!abilities.some((x) => x.name === a.name))
                    abilities.push(a);
            }
        }
    }

    if (wu) {
        for (const ability of wu.extraAbilities) {
            abilities.push(ability.ability);
        }
    }
    const normalAbilities = abilities.filter((x) => x.category === undefined);
    const specialRules = abilities.filter(
        (x) => x.category === AbilityCategory.SpecialRule || x.category === AbilityCategory.Champion
    );
    const magicAbilites = abilities.filter(
        (x) => x.category === AbilityCategory.Spell
    );
    const keywords = wu?.keywords || u.keywords;

    return (
        <div className={classes.warscroll}>
            <div className={classes.header}>
                <div className={classes.stats}>
                    <div className={classes.moveStat}>
                        {u.move && (
                            <>
                                {value(u.move)}
                                {value(u.move) !== "✹" && <>&quot;</>}
                            </>
                        )}
                    </div>
                    <div className={classes.woundsStat}>{u.wounds}</div>
                    <div className={classes.saveStat}>
                        {(value(u.save) && <> {value(u.save)}+</>) || "-"}
                    </div>
                    <div className={classes.braveryStat}>
                        {u.bravery && <> {value(u.bravery)}</>}
                    </div>
                </div>
                <div className={classes.title}>
                    <div className={classes.type}>Unit warscroll</div>
                    <div className={classes.name}>
                        {wu?.isGeneral && <StarIcon />} {u.name}
                        {u.subName && (
                            <div className={classes.subName}>{u.subName}</div>
                        )}
                    </div>{" "}
                    {models && models.length > 0 && (
                        <div className={classes.option}>
                            {" "}
                            {mainOption && mainOption.name}
                        </div>
                    )}
                    {/* <div className={classes.count}>
                        {wu && (
                            <>
                                {wu.modelCount} <PeopleIcon />
                            </>
                        )}{" "}
                    </div> */}
                    {u.flavor && !noFlavor && (
                        <div className={classes.flavor}>{u.flavor}</div>
                    )}
                </div>
                <div className={classes.image}>
                    <img src={u.pictureUrl} />
                </div>
            </div>
            {attacks.length > 0 && <AllAttacks attacks={distinct(attacks)} />}
            {u.damageTable && <WoundEffects damageTable={u.damageTable} />}
            <div className={classes.abilities}>
                <AllAbilities
                    title="Description"
                    abilities={specialRules}
                    description={u.description}
                    noFlavor={noFlavor}
                />
                {normalAbilities.length > 0 && (
                    <AllAbilities
                        title="Abilities"
                        abilities={normalAbilities}
                        noFlavor={noFlavor}
                    />
                )}
                {u.commandAbilities && (
                    <AllAbilities
                        title="Command abilities"
                        abilities={u.commandAbilities}
                        noFlavor={noFlavor}
                    />
                )}
                {u.magicDescription && (
                    <AllAbilities
                        title="Magic"
                        abilities={magicAbilites}
                        description={u.magicDescription}
                        noFlavor={noFlavor}
                    />
                )}
            </div>
            <div className={classes.keywords}>
                <div className={classes.keywordsHeader}>Keywords</div>
                <div>{keywords && keywords.join(", ")}</div>
            </div>
        </div>
    );
}
