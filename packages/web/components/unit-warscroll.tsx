import { UnitWarscroll } from "../stores/warscroll";
import * as React from "react";
import { toJS } from "mobx";
import {
    ModelOption,
    AbilityCategory,
    Unit,
    UnitOptionCategory,
    Ability,
    ItemWithAbilities,
    AbilityEffect,
} from "../../common/data";
import { value } from "../helpers/react";
import {
    AllAttacks,
    WoundEffects,
    AllAbilities,
    useWarscrollStyles,
} from "../atoms/warscroll-components";
import StarIcon from "@material-ui/icons/Star";
import { distinct } from "../helpers/algo";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import {
    AbilityEffectAurasView,
    AbilityEffectCondition,
    AbilityEffectCost,
    AbilityEffectTarget,
} from "./ability-effect-view";
import {
    getPhaseSideName,
    getSubPhaseName,
    getPhaseName,
} from "../stores/battle";

function EffectLine({
    effect,
    unit,
}: {
    effect: AbilityEffect;
    unit: ItemWithAbilities;
}) {
    return (
        <Grid container direction="row">
            <Grid item>
                {effect.side !== undefined && getPhaseSideName(effect.side)}{" "}
                {effect.subPhase !== undefined &&
                    getSubPhaseName(effect.subPhase)}{" "}
                {effect.phase !== undefined && getPhaseName(effect.phase)}
            </Grid>
            <Grid item>
                <AbilityEffectCost effect={effect} unit={unit} />
                {effect.condition && (
                    <AbilityEffectCondition
                        condition={effect.condition}
                        unit={unit}
                    />
                )}
            </Grid>
            <Grid item>
                <AbilityEffectTarget unit={unit} effect={effect} />
                {effect.targetCondition && (
                    <AbilityEffectCondition
                        condition={effect.targetCondition}
                        unit={unit}
                    />
                )}
            </Grid>
            <Grid item>
                <AbilityEffectAurasView effect={effect} unit={unit} />
            </Grid>
        </Grid>
    );
}

function AbilityLine({
    unit,
    ability,
}: {
    unit: ItemWithAbilities;
    ability: Ability;
}) {
    return (
        <Grid container direction="row">
            <Grid item>{ability.name}</Grid>
            {ability.effects && (
                <Grid item>
                    <Grid container direction="column">
                        {ability.effects.map((effect, index) => (
                            <Grid item key={index}>
                                <EffectLine unit={unit} effect={effect} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}

function Abilities({
    unit,
    abilities,
}: {
    unit: ItemWithAbilities;
    abilities: Ability[];
}) {
    return (
        <Grid container direction="column">
            {abilities.map((x) => (
                <Grid item key={x.id}>
                    <AbilityLine unit={unit} ability={x} />
                </Grid>
            ))}
        </Grid>
    );
}

function UnitOption({ unit, option }: { unit: Unit; option: ModelOption }) {
    return (
        <>
            <Typography variant="h6" color="textSecondary">
                {option.name}
            </Typography>
            {option.abilities && (
                <Abilities abilities={option.abilities} unit={option} />
            )}
        </>
    );
}

export function UnitWarscrollEx({ unit }: { unit: Unit }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {unit.name}
                </Typography>
                {unit.abilities && (
                    <Abilities abilities={unit.abilities} unit={unit} />
                )}
                {unit.options &&
                    unit.options.map((x) => (
                        <UnitOption unit={unit} option={x} key={x.id} />
                    ))}
            </CardContent>
        </Card>
    );
}

export function UnitWarscrollView({
    wu,
    unit,
    noFlavor,
}: {
    wu?: UnitWarscroll | null;
    unit?: Unit;
    noFlavor?: boolean;
}) {
    const classes = useWarscrollStyles();
    const u = unit || wu?.definition;
    const models = wu?.models;
    if (!u) return <div></div>;
    const attacks = u.attacks || [];
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
        if (option.unitCategory === UnitOptionCategory.Main)
            mainOption = option;

        if (option.attacks) {
            for (const a of option.attacks) {
                if (count !== 0) attacks.push(a);
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
            abilities.push(ability);
        }
    }
    const normalAbilities = abilities.filter((x) => x.category === undefined);
    const specialRules = abilities.filter(
        (x) =>
            x.category === AbilityCategory.SpecialRule ||
            x.category === AbilityCategory.Champion
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
                {magicAbilites.length > 0 && (
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
