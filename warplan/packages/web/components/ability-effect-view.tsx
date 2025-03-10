import React, { ReactNode } from "react";
import {
    AbilityEffect,
    Aura,
    ImmediateEffect,
    ItemWithAbilities,
    Phase,
    SubPhase,
    TargetCondition,
    TargetType,
    Turn,
} from "../../common/data";
import {
    AuraEntryDescription,
    EffectType,
    getAuraText,
    getEffectCondition,
    getEffectDurationName,
    getShortPhaseName,
    getTokenName,
} from "../stores/battle";
import {
    BoltIcon,
    SkullIcon,
    SpellIcon,
    SwordIcon,
    TargetIcon,
} from "../atoms/icons";
import SignalWifi2BarIcon from "@mui/icons-material/SignalWifi2Bar";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import Chip from "@mui/material/Chip";
import makeStyles from "@mui/styles/makeStyles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getValueText } from "../stores/combat";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Stack } from "@mui/material";
import { useDataStore } from "../stores/data";
const heroColor = "#ffd700";
const shootColor = "#D08000";
const movementColor = "#0000ff";
const combatColor = "#ff8000";
const battleShockColor = "#ffa500";

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
    conditionBadge: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.getContrastText(theme.palette.grey[100]),
        fontSize: theme.typography.overline.fontSize,
        padding: theme.spacing(0.5),
        marginLeft: theme.spacing(-1),
    },
    conditionRoot: {
        display: "inline-block",
    },
}));

function Condition({
    children,
    badgeContent,
}: {
    children: ReactNode;
    badgeContent: ReactNode;
}) {
    const classes = useStyle();
    return (
        <div className={classes.conditionRoot}>
            <span>{children}</span>
            <span className={classes.conditionBadge}>{badgeContent}</span>
        </div>
    );
}

function getPhaseColor(phase: Phase | undefined) {
    switch (phase) {
        case Phase.Hero:
            return heroColor;
        case Phase.Shooting:
            return shootColor;
        case Phase.Movement:
            return movementColor;
        case Phase.Combat:
            return combatColor;
        case Phase.Battleshock:
            return battleShockColor;
        default:
            return "#000";
    }
}

const usePhaseStyles = makeStyles((theme) => ({
    phase: {
        backgroundColor: ({ phase }: { phase?: Phase }) => getPhaseColor(phase),
        color: ({ phase }: { phase?: Phase }) =>
            phase
                ? theme.palette.getContrastText(getPhaseColor(phase))
                : "inherit",
    },
}));

export function AbilityEffectPhaseView({ effect }: { effect: AbilityEffect }) {
    const classes = usePhaseStyles({ phase: effect.phase });
    if (!effect.phase) return <></>;
    return (
        <Chip
            className={classes.phase}
            label={
                <>
                    {effect.side === Turn.Your && <FavoriteIcon />}
                    {effect.side === Turn.Opponent && <SkullIcon />}{" "}
                    {effect.subPhase === SubPhase.Before && (
                        <SkipPreviousIcon />
                    )}{" "}
                    {effect.subPhase === SubPhase.WhileBefore && (
                        <NavigateBeforeIcon />
                    )}{" "}
                    {getShortPhaseName(effect.phase)}{" "}
                    {effect.subPhase === SubPhase.After && <SkipNextIcon />}{" "}
                    {effect.subPhase === SubPhase.WhileAfter && (
                        <NavigateNextIcon />
                    )}
                </>
            }
        />
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
            {targetType === TargetType.Zone && <ControlPointIcon />}
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
    children,
}: {
    condition?: TargetCondition;
    unit: ItemWithAbilities;
    children: ReactNode;
}) {
    const dataStore = useDataStore();
    if (!condition) return <>{children}</>;
    return (
        <Condition
            badgeContent={getEffectCondition(condition, unit, dataStore).join(
                " | "
            )}
        >
            {children}
        </Condition>
    );
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
    const dataStore = useDataStore();
    return (
        <>
            <Chip
                size="medium"
                icon={<TargetIcon />}
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
    const unitsStore = useDataStore();
    if (
        !condition &&
        (aura.type === undefined ||
            (aura.delay === undefined &&
                aura.duration === undefined &&
                aura.targetCondition === undefined &&
                aura.condition === undefined))
    )
        return <>{children}</>;
    return (
        <Condition
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
                    {aura.type !== undefined && aura.condition && (
                        <>
                            {aura.duration !== undefined ||
                            aura.delay !== undefined
                                ? " | "
                                : ""}
                            {getEffectCondition(
                                aura.condition,
                                unit,
                                unitsStore
                            )}
                        </>
                    )}
                </>
            }
        >
            {children}
        </Condition>
    );
}

function AbilityEffectAuraView({
    aura,
    unit,
}: {
    aura: Aura | ImmediateEffect;
    unit: ItemWithAbilities;
}) {
    const unitsStore = useDataStore();
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
        <Stack direction="row" spacing={1}>
            <AbilityEffectPhaseView effect={effect} />
            <AbilityEffectCondition condition={effect.condition} unit={unit}>
                <AbilityEffectCost effect={effect} unit={unit} />
            </AbilityEffectCondition>
            <AbilityEffectCondition
                condition={effect.targetCondition}
                unit={unit}
            >
                <AbilityEffectTarget unit={unit} effect={effect} />
            </AbilityEffectCondition>
            <AbilityEffectAurasView effect={effect} unit={unit} />
        </Stack>
    );
}
