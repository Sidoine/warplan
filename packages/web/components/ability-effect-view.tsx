import React from "react";
import {
    AbilityEffect,
    ItemWithAbilities,
    SubPhase,
    TargetCondition,
    TargetType,
} from "../../common/data";
import {
    AuraEntryDescription,
    EffectType,
    getEffectCondition,
    getEffectText,
    getPhaseName,
    getTokenName,
} from "../stores/battle";
import { BoltIcon, SkullIcon, SpellIcon, SwordIcon } from "../atoms/icons";
import SignalWifi2BarIcon from "@material-ui/icons/SignalWifi2Bar";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import Chip from "@material-ui/core/Chip";
import { Badge, makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getValueText } from "../stores/combat";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import { useStores } from "../stores";

const useStyle = makeStyles((theme) => ({
    badgedIcon: {
        fontSize: "75%",
        verticalAlign: "baseline",
        display: "inline-block",
    },
    badged: {
        fontSize: "1rem",
    },
    error: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
    secondSkull: {
        marginLeft: -10,
        color: theme.palette.background.default,
    },
    thirdSkull: {
        marginLeft: -12,
    },
}));

export function AbilityEffectPhaseView({ effect }: { effect: AbilityEffect }) {
    return (
        <>
            {effect.phase !== undefined && (
                <>
                    Cast{" "}
                    {effect.subPhase === SubPhase.After && "at the end of "}
                    {effect.subPhase === SubPhase.Before && "at the start of "}
                    {effect.subPhase === SubPhase.While ||
                        (effect.subPhase === undefined && "during")}
                    {effect.subPhase === SubPhase.WhileAfter && "during"}{" "}
                    {getPhaseName(effect.phase)}
                    {effect.subPhase === SubPhase.WhileAfter &&
                        " after all attacks "}
                    {effect.targetRange && (
                        <>Target range {effect.targetRange}</>
                    )}
                </>
            )}{" "}
        </>
    );
}

function TargetView({ effect }: { effect: AbilityEffect }) {
    const targetType = effect.targetType;
    const classes = useStyle();
    return (
        <>
            {targetType === TargetType.Friend && <FavoriteIcon />}
            {targetType === TargetType.Model && <PersonIcon />}
            {targetType === TargetType.Unit && <GroupIcon />}
            {targetType === TargetType.Enemy && (
                <>
                    <SkullIcon />
                    <SkullIcon className={classes.secondSkull} />
                    <SkullIcon className={classes.thirdSkull} />
                </>
            )}
            {targetType === TargetType.EnemyModel && <SkullIcon />}
            {targetType === TargetType.Weapon && <SwordIcon />}
            {targetType === TargetType.Terrain && <FilterHdrIcon />}
            {targetType === TargetType.Ability && <BoltIcon />}
        </>
    );
}

export function getTargetType(effect: AbilityEffect, unit: ItemWithAbilities) {
    switch (effect.targetType) {
        case TargetType.Enemy:
            return "enemy";
        case TargetType.Friend:
            return "friendly unit";
        case TargetType.Model:
            return "this model";
        case TargetType.Unit:
            return "this unit";
        case TargetType.Weapon:
            if (effect.targetCondition) {
                if (effect.targetCondition.weaponId) {
                    const targetWeapon = unit.attacks?.find(
                        (x) => x.id === effect.targetCondition?.weaponId
                    );
                    if (targetWeapon) return targetWeapon.name;
                    return `unknown ${effect.targetCondition.weaponId}`;
                }
                if (effect.targetCondition.meleeWeapon) {
                    return "melee weapons";
                }
                if (effect.targetCondition.rangedWeapon) {
                    return "missile weapons";
                }
            }

            return "all weapons";
        case TargetType.Ability:
            if (effect.targetCondition) {
                const targetAbility = unit.abilities?.find(
                    (x) => x.id === effect.targetCondition?.abilityId
                );
                if (targetAbility) {
                    return targetAbility.name;
                }
            }
            return "ability";
        case TargetType.EnemyArmy:
            return "enemy army";
    }
    return "unknown";
}

export function AbilityEffectCondition({
    condition,
    unit,
}: {
    condition: TargetCondition;
    unit: ItemWithAbilities;
}) {
    const { unitsStore } = useStores();
    return <>{getEffectCondition(condition, unit, unitsStore).join(", ")}</>;
}

export function AbilityEffectCost({
    effect,
    unit,
}: {
    effect: AbilityEffect;
    unit: ItemWithAbilities;
}) {
    return (
        <>
            {effect.timesPerBattle && (
                <>{effect.timesPerBattle} times per battle </>
            )}
            {effect.tokensCost && (
                <>
                    {effect.tokensCost} {getTokenName(unit.allegiance)}
                </>
            )}
            {effect.spellCastingValue && (
                <>
                    <SpellIcon /> {effect.spellCastingValue}+
                </>
            )}
            {effect.randomEffectRange && (
                <>
                    {effect.randomEffectRange.max == 6 && (
                        <>{effect.randomEffectRange.min}+</>
                    )}
                    {effect.randomEffectRange.max < 6 && (
                        <>
                            {effect.randomEffectRange.min}-
                            {effect.randomEffectRange.max}
                        </>
                    )}
                </>
            )}
            {effect.commandPoints && <>{effect.commandPoints} CP</>}
        </>
    );
}

export function AbilityEffectTarget({
    effect,
    unit,
}: {
    effect: AbilityEffect;
    unit: ItemWithAbilities;
}) {
    const { unitsStore: dataStore } = useStores();
    return (
        <>
            <Chip
                size="medium"
                label={
                    <>
                        <TargetView effect={effect} />
                        {effect.targetRange && (
                            <>
                                <VerticalAlignTopIcon />
                                {getValueText(
                                    effect.targetRange,
                                    unit,
                                    dataStore
                                )}
                            </>
                        )}
                        {effect.targetRadius && (
                            <>
                                <SignalWifi2BarIcon />{" "}
                                {getValueText(
                                    effect.targetRadius,
                                    unit,
                                    dataStore
                                )}
                            </>
                        )}
                    </>
                }
            />
        </>
    );
}

function EffectAuraDescription({ x }: { x: AuraEntryDescription }) {
    const classes = useStyle();

    return (
        <Chip
            className={
                x.type === EffectType.Unknown ? classes.error : undefined
            }
            color={
                x.type === EffectType.Immediate
                    ? "default"
                    : x.type === EffectType.Debuff
                    ? "secondary"
                    : "primary"
            }
            label={x.text}
        />
    );
}

export function AbilityEffectAuraView({
    effect,
    unit,
}: {
    effect: AbilityEffect;
    unit: ItemWithAbilities;
}) {
    const { unitsStore } = useStores();
    const descriptions = getEffectText(effect, unit, unitsStore);
    return (
        <>
            {descriptions.map((x, index) =>
                x.condition ? (
                    <Badge
                        key={index}
                        badgeContent={x.condition}
                        color="secondary"
                    >
                        {x.descriptions.map((y, i) => (
                            <EffectAuraDescription x={y} key={i} />
                        ))}
                    </Badge>
                ) : (
                    x.descriptions.map((y, i) => (
                        <EffectAuraDescription x={y} key={i} />
                    ))
                )
            )}
        </>
    );
}

export function AbilityEffectView({
    effect,
    unit,
}: {
    effect: AbilityEffect;
    unit: ItemWithAbilities;
}) {
    return (
        <i>
            <AbilityEffectPhaseView effect={effect} /> - Target:{" "}
            {getTargetType(effect, unit)}
        </i>
    );
}
