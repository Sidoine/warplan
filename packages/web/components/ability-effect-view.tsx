import React, { ReactNode } from "react";
import {
    AbilityEffect,
    Aura,
    ImmediateEffect,
    ItemWithAbilities,
    SubPhase,
    TargetCondition,
    TargetType,
} from "../../common/data";
import {
    AuraEntryDescription,
    EffectType,
    getAuraText,
    getEffectCondition,
    getEffectDurationName,
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
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AvTimerIcon from "@material-ui/icons/AvTimer";

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
            {effect.targetsCount}
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
            {effect.choice && <>&quot;{effect.choice}&quot; </>}
            {effect.timesPerBattle && (
                <>{effect.timesPerBattle} times per battle </>
            )}
            {effect.timesPerTurn && <>{effect.timesPerTurn} times per turn </>}
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

function AbilityEffectAuraCondition({
    condition,
    aura,
    children,
    unit,
}: {
    condition?: string;
    unit: ItemWithAbilities;
    aura: Aura | ImmediateEffect;
    children: ReactNode;
}) {
    const { unitsStore } = useStores();
    if (
        !condition &&
        (aura.type === undefined ||
            (aura.delay === undefined &&
                aura.duration === undefined &&
                aura.targetCondition === undefined))
    )
        return <>{children}</>;
    return (
        <Badge
            badgeContent={
                <>
                    {condition}
                    {aura.type !== undefined && aura.duration !== undefined && (
                        <>
                            <AccessAlarmIcon />{" "}
                            {getEffectDurationName(aura.duration)}
                        </>
                    )}
                    {aura.type !== undefined && aura.delay !== undefined && (
                        <>
                            <AvTimerIcon /> {getEffectDurationName(aura.delay)}
                        </>
                    )}
                    {aura.type !== undefined && aura.targetCondition && (
                        <>
                            target{" "}
                            {getEffectCondition(
                                aura.targetCondition,
                                unit,
                                unitsStore
                            )}
                        </>
                    )}
                </>
            }
            color="secondary"
        >
            {children}
        </Badge>
    );
}

function AbilityEffectAuraView({
    aura,
    unit,
}: {
    aura: Aura | ImmediateEffect;
    unit: ItemWithAbilities;
}) {
    const { unitsStore } = useStores();
    const { descriptions, condition } = getAuraText(aura, unit, unitsStore);
    return (
        <AbilityEffectAuraCondition
            aura={aura}
            condition={condition}
            unit={unit}
        >
            {descriptions.map((y, i) => (
                <EffectAuraDescription x={y} key={i} />
            ))}
        </AbilityEffectAuraCondition>
    );
}

export function AbilityEffectAurasView({
    effect,
    unit,
}: {
    effect: AbilityEffect;
    unit: ItemWithAbilities;
}) {
    return (
        <>
            {effect.auras?.map((x, i) => (
                <AbilityEffectAuraView key={i} aura={x} unit={unit} />
            ))}
            {effect.immediate && (
                <AbilityEffectAuraView aura={effect.immediate} unit={unit} />
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
