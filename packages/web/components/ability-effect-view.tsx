import React from "react";
import {
    AbilityEffect,
    EffectDuration,
    ItemWithAbilities,
    SubPhase,
    TargetCondition,
    TargetType,
} from "../../common/data";
import {
    EffectDescription,
    EffectType,
    getEffectCondition,
    getEffectText,
    getPhaseName,
    getTokenName,
} from "../stores/battle";
import { SkullIcon, SpellIcon, SwordIcon } from "../atoms/icons";
import SignalWifi2BarIcon from "@material-ui/icons/SignalWifi2Bar";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import Chip from "@material-ui/core/Chip";
import { Badge, makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getValueText } from "../stores/combat";

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
}));

function getEffectDuration(effect: AbilityEffect) {
    switch (effect.duration) {
        case EffectDuration.Phase:
            return "phase";
        case EffectDuration.Permanent:
            return "permanent";
        case EffectDuration.Turn:
            return "turn";
        case EffectDuration.Round:
            return "round";
    }
    if (effect.phase) return "phase";
    return "permanent";
}

function hasAura(effect: AbilityEffect) {
    return (
        effect.attackAura ||
        effect.battleShockAura ||
        effect.chargeAura ||
        effect.commandAura ||
        effect.defenseAura ||
        effect.movementAura ||
        effect.spellAura ||
        effect.prayerAura
    );
}

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
    return (
        <>
            {targetType === TargetType.Friend && <FavoriteIcon />}
            {targetType === TargetType.Model && <PersonIcon />}
            {targetType === TargetType.Unit && <GroupIcon />}
            {targetType === TargetType.Enemy && <SkullIcon />}
            {targetType === TargetType.Weapon && <SwordIcon />}
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
                        (x) => x.attack.id === effect.targetCondition?.weaponId
                    );
                    if (targetWeapon) return targetWeapon.attack.name;
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
    return <>{getEffectCondition(condition, unit)}</>;
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
                                {getValueText(effect.targetRange, unit)}
                            </>
                        )}
                        {effect.targetRadius && (
                            <>
                                <SignalWifi2BarIcon />{" "}
                                {getValueText(effect.targetRadius, unit)}
                            </>
                        )}
                    </>
                }
            />
        </>
    );
}

function EffectAuraDescription({ x }: { x: EffectDescription }) {
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
    const [condition, descriptions] = getEffectText(effect, unit);
    return (
        <>
            {descriptions.map((x, index) =>
                condition ? (
                    <Badge
                        key={index}
                        badgeContent={condition}
                        color="secondary"
                    >
                        <EffectAuraDescription x={x} />
                    </Badge>
                ) : (
                    <EffectAuraDescription key={index} x={x} />
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
            {hasAura(effect) && <>- Duration : {getEffectDuration(effect)}</>}{" "}
            {getTargetType(effect, unit)}
        </i>
    );
}
