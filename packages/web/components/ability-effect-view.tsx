import React, { ReactNode } from "react";
import {
    AbilityEffect,
    EffectDuration,
    Phase,
    SubPhase,
    TargetType
} from "../../common/data";
import { getPhaseName } from "../stores/battle";
import {
    SkullIcon,
    SpellIcon,
    BullseyeArrowIcon,
    SwordIcon
} from "../atoms/icons";
import SignalWifi2BarIcon from "@material-ui/icons/SignalWifi2Bar";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    badgedIcon: {
        fontSize: "75%",
        verticalAlign: "baseline",
        display: "inline-block"
    },
    badged: {
        fontSize: "1rem"
    }
});

function BadgedIcon({
    badge,
    children
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

export function getTargetType(effect: AbilityEffect) {
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
            if (effect.targetCondition && effect.targetCondition.weaponId)
                return effect.targetCondition.weaponId;
            return "all weapons";
    }
    return "unknown";
}

export function AbilityEffectTarget({ effect }: { effect: AbilityEffect }) {
    return (
        <>
            {getTargetType(effect)}
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

export function AbilityEffectAuraView({ effect }: { effect: AbilityEffect }) {
    return (
        <>
            {effect.defenseAura && (
                <Chip
                    color="primary"
                    label={
                        <>
                            {effect.defenseAura.phase === Phase.Shooting && (
                                <BullseyeArrowIcon />
                            )}
                            {effect.defenseAura.phase === Phase.Combat && (
                                <SwordIcon />
                            )}
                            {effect.defenseAura.rerollSavesOn1 && "Rr save 1"}
                            {effect.defenseAura.bonusHitRoll &&
                                `+${effect.defenseAura.bonusHitRoll} hit from enemy`}
                            {effect.defenseAura.bonusSave &&
                                `+${effect.defenseAura.bonusSave} save`}
                            {effect.defenseAura.malusHitRoll &&
                                `-${effect.defenseAura.malusHitRoll} hit from enemy`}
                            {effect.defenseAura.negateWoundsOrMortalWoundsOn5 &&
                                "5+ ward"}
                        </>
                    }
                />
            )}
            {effect.attackAura && (
                <Chip
                    color="secondary"
                    label={
                        <>
                            {effect.attackAura.mortalWoundsOnHitUnmodified6 &&
                                `6 on hit ${effect.attackAura.mortalWoundsOnHitUnmodified6} MW and ends`}
                        </>
                    }
                />
            )}
        </>
    );
}

export function AbilityEffectView({ effect }: { effect: AbilityEffect }) {
    return (
        <i>
            <AbilityEffectPhaseView effect={effect} /> - Target:{" "}
            {hasAura(effect) && <>- Duration : {getEffectDuration(effect)}</>}{" "}
            {getTargetType(effect)}
        </i>
    );
}
