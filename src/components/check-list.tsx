import * as React from "react";
import {
    WarscrollStore,
    WarscrollUnit,
    WarscrollScenery,
    Warscroll
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
    isEffectInPhase,
    isAttackInPhase,
    isAbilityInPhase
} from "../stores/battle";
import { value } from "../helpers/react";
import { Chip, SvgIcon, makeStyles } from "@material-ui/core";
import SignalWifi2BarIcon from "@material-ui/icons/SignalWifi2Bar";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import ReplayIcon from "@material-ui/icons/Replay";
import { useStores } from "../stores";

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
    "@media": {
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

function someFrom<T>(array: T[], from: number, condition: (x: T) => boolean) {
    for (let i = from; i < array.length; i++) {
        if (condition(array[i])) return true;
    }
    return false;
}

function distinct<T extends { id: string }>(array: T[]) {
    return array.filter((x, i) => !someFrom(array, i + 1, y => x.id === y.id));
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

function SaveIcon() {
    return (
        <SvgIcon>
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
        </SvgIcon>
    );
}

function TargetView({ targetType }: { targetType: TargetType }) {
    const isUnit =
        (targetType &
            (TargetType.Model | TargetType.Mount | TargetType.Weapon)) ==
        0;
    return (
        <>
            {isUnit && <GroupIcon />}
            {(targetType & TargetType.Model) > 0 && <PersonIcon />}
        </>
    );
}

function AbilityEffectView({ effect }: { effect: AbilityEffect }) {
    return (
        <>
            <Chip
                label={
                    <>
                        <TargetView targetType={effect.targetType} />
                        {effect.targetRange && (
                            <>
                                <SignalWifi2BarIcon /> {effect.targetRange}"
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
            {ability.effects &&
                ability.effects
                    .filter(x => isEffectInPhase(x, phase, unit, side))
                    .map((x, index) => (
                        <AbilityEffectView key={index} effect={x} />
                    ))}
        </div>
    );
}

function UnitInfo({
    unit,
    phase,
    side
}: {
    unit: WarscrollUnit;
    phase: Phase;
    side?: PhaseSide;
}) {
    const classes = useStyle();
    return (
        <div className={classes.unit}>
            <div className={classes.unitTitle}>{unit.unit.model.name}</div>
            <Stats>
                {phase === Phase.Movement && (
                    <Stat name="Mv" value={unit.unit.move} />
                )}
                {side === PhaseSide.Defense && (
                    <>
                        <Stat name="Wd" value={unit.unit.wounds} />
                        <Stat name="Sv" value={unit.unit.save} />
                    </>
                )}
                {phase === Phase.Battleshock && (
                    <Stat name="Bv" value={unit.unit.bravery} />
                )}
            </Stats>

            {side === PhaseSide.Attack &&
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

function SceneryInfo({ scenery }: { scenery: WarscrollScenery }) {
    return (
        <li>
            <strong>{scenery.scenery.name}</strong>
            {scenery.scenery.description}
        </li>
    );
}

function getPhaseUnits(units: WarscrollUnit[], phase: Phase, side?: PhaseSide) {
    return units.filter(x => isUnitInPhase(x, phase, side));
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
                {getPhaseUnits(warscroll.units, phase, side).map(x => (
                    <UnitInfo key={x.id} unit={x} phase={phase} side={side} />
                ))}
            </div>
            <ul>
                {phase === Phase.Hero &&
                    warscroll.endlessSpells.map(x => (
                        <SceneryInfo scenery={x} key={x.id} />
                    ))}
            </ul>
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
            {warscroll.units
                .reduce(
                    (prev, x) =>
                        prev.concat(
                            x.abilities.filter(y => !y.effects).map(y => [x, y])
                        ),
                    new Array<[WarscrollUnit, Ability]>()
                )
                .map((x, i) => (
                    <div key={i}>
                        <i>{x[0].unit.model.name}</i>
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
            {" "}
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
