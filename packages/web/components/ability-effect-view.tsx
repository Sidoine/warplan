import React, { ReactNode } from "react";
import {
    AbilityEffect,
    EffectDuration,
    ItemWithAbilities,
    SubPhase,
    TargetType,
} from "../../common/data";
import { EffectType, getEffectText, getPhaseName } from "../stores/battle";
import { SkullIcon, SpellIcon } from "../atoms/icons";
import SignalWifi2BarIcon from "@material-ui/icons/SignalWifi2Bar";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";

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

function BadgedIcon({
    badge,
    children,
}: {
    badge: ReactNode;
    children: ReactNode;
}) {
    const classes = useStyle();
    if (badge) {
        return (
            <span className={classes.badged}>
                {children}
                <span className={classes.badgedIcon}>{badge}</span>
            </span>
        );
    }
    return <>{children}</>;
}

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

function TargetView({ targetType }: { targetType: TargetType }) {
    const isUnit =
        (targetType &
            (TargetType.Model | TargetType.Mount | TargetType.Weapon)) ==
        0;
    return (
        <BadgedIcon
            badge={(targetType & TargetType.Enemy) > 0 && <SkullIcon />}
        >
            {isUnit && <GroupIcon />}
            {(targetType & TargetType.Model) > 0 && <PersonIcon />}
        </BadgedIcon>
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
    }
    return "unknown";
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
            {getTargetType(effect, unit)}
            <Chip
                size="medium"
                label={
                    <>
                        <TargetView targetType={effect.targetType} />
                        {effect.targetRange && (
                            <>
                                <VerticalAlignTopIcon />
                                {effect.targetRange}&quot;
                            </>
                        )}
                        {effect.targetRadius && (
                            <>
                                <SignalWifi2BarIcon /> {effect.targetRadius}
                                &quot;
                            </>
                        )}
                    </>
                }
            />
            {effect.spellCastingValue && (
                <>
                    <SpellIcon /> {effect.spellCastingValue}+
                </>
            )}
        </>
    );
}

export function AbilityEffectAuraView({
    effect,
    unit,
}: {
    effect: AbilityEffect;
    unit: ItemWithAbilities;
}) {
    const [condition, descriptions, type] = getEffectText(effect, unit);
    const classes = useStyle();
    return (
        <>
            <i>{condition}</i>

            <Chip
                className={
                    type === EffectType.Unknown ? classes.error : undefined
                }
                color={type === EffectType.Immediate ? "default" : "primary"}
                label={<>{descriptions.join(" - ")}</>}
            />
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
