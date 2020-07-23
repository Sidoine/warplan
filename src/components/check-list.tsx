import * as React from "react";
import {
    WarscrollStore,
    WarscrollUnit,
    Warscroll,
    WarscrollItem
} from "../stores/warscroll";
import {
    Phase,
    Ability,
    Attack,
    AbilityEffect,
    UnitsStore,
    Value,
    TargetType
} from "../stores/units";
import {
    getPhaseName,
    phases,
    PhaseSide,
    isUnitInPhase,
    isAttackInPhase,
    isAbilityInPhase
} from "../stores/battle";
import { value } from "../helpers/react";
import { Chip, makeStyles, Badge } from "@material-ui/core";
import SignalWifi2BarIcon from "@material-ui/icons/SignalWifi2Bar";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import ReplayIcon from "@material-ui/icons/Replay";
import { useStores } from "../stores";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import { distinct } from "../helpers/algo";
import { SkullIcon, SpellIcon, SaveIcon } from "../atoms/icons";

const useStyle = makeStyles({
    section: {
        breakBefore: "right",
        ["&:first-of-type"]: {
            breakBefore: "avoid"
        }
    },
    unitTitle: {
        fontWeight: "bold"
    },
    unit: {
        marginBottom: "0.5rem"
    },
    abilityName: {
        color: "darkblue"
    },
    out: {},
    "@media print": {
        out: {
            display: "none"
        }
    },
    stats: {
        display: "flex",
        flexWrap: "wrap"
    },
    statsTitle: {
        width: "10rem"
    },
    statKey: {
        backgroundColor: "#e6dccb",
        width: "2rem",
        border: "1px solid #e6dccb"
    },
    statValue: {
        width: "2rem",
        border: "1px solid #e6dccb"
    }
});

export interface CheckListProps {
    warscrollStore?: WarscrollStore;
    unitsStore?: UnitsStore;
}

function Stats(props: { name?: string; children: React.ReactNode }) {
    const classes = useStyle();
    return (
        <div className={classes.stats}>
            {props.name && (
                <div className={classes.statsTitle}>{props.name}</div>
            )}
            {props.children}
        </div>
    );
}

function Stat(props: { name: string; value: Value }) {
    const classes = useStyle();
    return (
        <>
            <div className={classes.statKey}>{props.name}</div>
            <div className={classes.statValue}>{value(props.value, "-")}</div>
        </>
    );
}

function TargetView({ targetType }: { targetType: TargetType }) {
    const isUnit =
        (targetType &
            (TargetType.Model | TargetType.Mount | TargetType.Weapon)) ==
        0;
    return (
        <Badge
            badgeContent={(targetType & TargetType.Enemy) > 0 && <SkullIcon />}
        >
            {isUnit && <GroupIcon />}
            {(targetType & TargetType.Model) > 0 && <PersonIcon />}
        </Badge>
    );
}

export function AbilityEffectView({ effect }: { effect: AbilityEffect }) {
    return (
        <>
            <Chip
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
                        {effect.spellCastingValue && (
                            <>
                                <SpellIcon /> {effect.spellCastingValue}+
                            </>
                        )}
                    </>
                }
            />
            {effect.defenseAura && (
                <Chip
                    color="primary"
                    label={
                        <>
                            {effect.defenseAura.rerollSavesOn1 && (
                                <>
                                    <SaveIcon />
                                    <ReplayIcon />1
                                </>
                            )}
                        </>
                    }
                />
            )}
        </>
    );
}

function AttackStats({ attack, count }: { attack: Attack; count: number }) {
    return (
        <Stats key={attack.id} name={attack.name}>
            <Stat name="x" value={count} />
            <Stat name="At" value={attack.attacks} />
            <Stat name="Rg" value={`${attack.range}"`} />
            <Stat name="Hit" value={`${attack.toHit}+`} />
            <Stat name="Wd" value={`${attack.toWound}+`} />
            <Stat name="Rd" value={attack.rend} />
            <Stat name="Dg" value={attack.damage} />
        </Stats>
    );
}

function AbilityInfo({
    ability,
    phase,
    unit,
    side
}: {
    ability: Ability;
    phase: Phase;
    unit?: WarscrollUnit;
    side?: PhaseSide;
}) {
    const classes = useStyle();
    return (
        <div>
            <i className={classes.abilityName}>{ability.name}</i> :{" "}
            {ability.description}
            {/* {ability.effects &&
                ability.effects
                    .filter(x => isEffectInPhase(x, phase, unit, side))
                    .map((x, index) => (
                        <AbilityEffectView key={index} effect={x} />
                    ))} */}
        </div>
    );
}

function UnitInfo({
    unit,
    phase,
    side
}: {
    unit: WarscrollItem;
    phase: Phase;
    side?: PhaseSide;
}) {
    const classes = useStyle();
    return (
        <div className={classes.unit}>
            <div className={classes.unitTitle}>
                {unit.definition.name} {unit.definition.subName}
            </div>
            {unit.type === "unit" && (
                <Stats>
                    {phase === Phase.Movement && (
                        <Stat name="Mv" value={unit.definition.move} />
                    )}
                    {side === PhaseSide.Defense && (
                        <>
                            <Stat name="Wd" value={unit.definition.wounds} />
                            <Stat name="Sv" value={unit.definition.save} />
                        </>
                    )}
                    {phase === Phase.Battleshock && (
                        <Stat name="Bv" value={unit.definition.bravery} />
                    )}
                </Stats>
            )}

            {unit.type === "unit" &&
                phase === Phase.Hero &&
                unit.definition.magicDescription && (
                    <div>{unit.definition.magicDescription}</div>
                )}

            {unit.type === "unit" &&
                side === PhaseSide.Attack &&
                unit.attacks
                    .filter(x => isAttackInPhase(x.attack, phase))
                    .map(x => (
                        <AttackStats
                            key={x.attack.id}
                            attack={x.attack}
                            count={x.count}
                        />
                    ))}
            {distinct(
                unit.abilities.filter(x =>
                    isAbilityInPhase(x, phase, unit, side)
                )
            ).map(x => (
                <AbilityInfo key={x.id} phase={phase} ability={x} side={side} />
            ))}
        </div>
    );
}

function getPhaseUnits(units: WarscrollItem[], phase: Phase, side?: PhaseSide) {
    return units
        .filter(x => isUnitInPhase(x, phase, side))
        .sort((a, b) => (a.definition.name > b.definition.name ? 1 : -1));
}

function SubPhaseInfo({
    warscroll,
    phase,
    side
}: {
    warscroll: Warscroll;
    phase: Phase;
    side?: PhaseSide;
}) {
    return (
        <section>
            {(side === PhaseSide.Defense) === true && <h2>Defense</h2>}
            {side === PhaseSide.Attack && <h2>Attack</h2>}
            <ul>
                {warscroll.abilities
                    .filter(x => isAbilityInPhase(x, phase, undefined, side))
                    .map(x => (
                        <AbilityInfo
                            key={x.id}
                            side={side}
                            ability={x}
                            phase={phase}
                        />
                    ))}
            </ul>
            <div>
                {getPhaseUnits(warscroll.items, phase, side).map(x => (
                    <UnitInfo key={x.id} unit={x} phase={phase} side={side} />
                ))}
            </div>
        </section>
    );
}

function hasSomethingIsSubPhase(
    warscroll: Warscroll,
    phase: Phase,
    side?: PhaseSide
) {
    return (
        warscroll.abilities.some(x =>
            isAbilityInPhase(x, phase, undefined, side)
        ) ||
        getPhaseUnits(warscroll.units, phase, side).length > 0 ||
        (phase === Phase.Hero && warscroll.endlessSpells.length > 0)
    );
}

function PhaseInfo({
    phase,
    warscroll
}: {
    phase: Phase;
    warscroll: Warscroll;
}) {
    if (phase !== Phase.Setup) {
        if (phase === Phase.Shooting || phase === Phase.Combat) {
            if (
                !hasSomethingIsSubPhase(warscroll, phase, PhaseSide.Attack) &&
                !hasSomethingIsSubPhase(warscroll, phase, PhaseSide.Defense)
            )
                return <></>;
        } else {
            if (!hasSomethingIsSubPhase(warscroll, phase)) return <></>;
        }
    }
    return (
        <section key={phase}>
            <h1>{getPhaseName(phase)}</h1>
            {phase === Phase.Setup && <div>{warscroll.description}</div>}
            {(phase === Phase.Shooting || phase === Phase.Combat) && (
                <>
                    {" "}
                    <SubPhaseInfo
                        warscroll={warscroll}
                        phase={phase}
                        side={PhaseSide.Attack}
                    />
                    <SubPhaseInfo
                        warscroll={warscroll}
                        phase={phase}
                        side={PhaseSide.Defense}
                    />
                </>
            )}
            {phase !== Phase.Shooting && phase !== Phase.Combat && (
                <SubPhaseInfo warscroll={warscroll} phase={phase} />
            )}
        </section>
    );
}

function OutOfPhaseAbilities({ warscroll }: { warscroll: Warscroll }) {
    const classes = useStyle();
    return (
        <section className={classes.out}>
            <h1>Abilities without effect</h1>
            {warscroll.abilities
                .filter(x => !x.effects)
                .map((x, i) => (
                    <div key={i}>
                        <strong>{x.name}</strong> {x.description}
                    </div>
                ))}
            {warscroll.items
                .reduce(
                    (prev, x) =>
                        prev.concat(
                            x.abilities.filter(y => !y.effects).map(y => [x, y])
                        ),
                    new Array<[WarscrollItem, Ability]>()
                )
                .map((x, i) => (
                    <div key={i}>
                        <i>{x[0].definition.name}</i>
                        <strong>{x[1].name}</strong> {x[1].description}
                    </div>
                ))}
        </section>
    );
}

export function CheckList() {
    const { warscrollStore } = useStores();
    return (
        <div>
            {phases.map(x => (
                <PhaseInfo
                    warscroll={warscrollStore.warscroll}
                    phase={x}
                    key={x}
                />
            ))}
            <OutOfPhaseAbilities warscroll={warscrollStore.warscroll} />
        </div>
    );
}
