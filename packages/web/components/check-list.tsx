import React, { ReactNode } from "react";
import { WarscrollItem } from "../stores/warscroll";
import {
    Phase,
    Ability,
    Attack,
    AbilityEffect,
    Value,
    TargetType,
    SubPhase,
    EffectDuration,
    PhaseSide,
    ItemWithAbilities
} from "../../common/data";
import {
    getPhaseName,
    phases,
    isAttackInPhase,
    isAbilityInPhase,
    isEffectInPhase,
    getSubPhaseName,
    getPhaseSideName
} from "../stores/battle";
import { join, value } from "../helpers/react";
import { Chip, makeStyles } from "@material-ui/core";
import SignalWifi2BarIcon from "@material-ui/icons/SignalWifi2Bar";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import ReplayIcon from "@material-ui/icons/Replay";
import { useStores } from "../stores";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import { distinct } from "../helpers/algo";
import {
    SkullIcon,
    SpellIcon,
    SaveIcon,
    BullseyeArrowIcon,
    SwordIcon
} from "../atoms/icons";
import warscrollSeparator from "../assets/ws-separator.png";
import { DataStore } from "../stores/data";
import { ArmyList, ArmyListStore } from "../stores/army-list";

const useStyle = makeStyles({
    section: {
        breakBefore: "right",
        ["&:first-of-type"]: {
            breakBefore: "avoid"
        }
    },
    subSectionContent: {
        columnCount: 2,
        fontSize: "1rem"
    },
    unitTitle: {
        fontWeight: "bold",
        fontVariant: "small-caps",
        "&::before": {
            content: "' '",
            backgroundImage: `url(${warscrollSeparator})`,
            backgroundSize: "100%",
            width: "6px",
            height: "6px",
            display: "inline-block",
            marginRight: "5px",
            marginBottom: "1px"
        }
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
        flexWrap: "wrap",
        "&:odd": {
            backgroundColor: "#d0c89a"
        }
    },
    statsTitle: {
        width: "6rem",
        backgroundColor: "#e6dccb",
        padding: "0.05rem",
        textAlign: "right",
        fontVariant: "small-caps"
    },
    statKey: {
        backgroundColor: "#e6dccb",
        width: "1.2rem",
        border: "1px solid #e6dccb",
        padding: "0.05rem",
        textAlign: "center",
        fontSize: "0.8rem"
    },
    statValue: {
        width: "1.5rem",
        border: "1px solid #e6dccb",
        padding: "0.05rem",
        textAlign: "center"
    },
    badgedIcon: {
        fontSize: "75%",
        verticalAlign: "baseline",
        display: "inline-block"
    },
    badged: {
        fontSize: "1rem"
    }
});

export interface CheckListProps {
    warscrollStore?: ArmyListStore;
    unitsStore?: DataStore;
}

interface ItemWithAbilityInPhase {
    item: ItemWithAbilities;
    abilities: Ability[];
}

function getWithAbilitiesInPhase(
    item: ItemWithAbilities,
    side: PhaseSide,
    phase: Phase
): ItemWithAbilityInPhase {
    return {
        item,
        abilities: item.abilities.filter(a =>
            isAbilityInPhase(item, a, side, phase)
        )
    };
}

function mapPhaseSide(
    item: ItemWithAbilityInPhase,
    side: PhaseSide,
    phase: Phase,
    subPhase: SubPhase
): ItemWithAbilityInPhase {
    return {
        item: item.item,
        abilities: item.abilities.filter(a =>
            isAbilityInPhase(item.item, a, side, phase, subPhase)
        )
    };
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

function getTargetType(effect: AbilityEffect) {
    switch (effect.targetType) {
        case TargetType.Enemy:
            return "enemy";
        case TargetType.Friend:
            return "friendly unit";
        case TargetType.Model:
            return "self";
        case TargetType.Unit:
            return "this unit";
        case TargetType.Weapon:
            if (effect.targetCondition && effect.targetCondition.weaponId)
                return effect.targetCondition.weaponId;
            return "all weapons";
    }
    return "unknown";
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

export function AbilityEffectView({ effect }: { effect: AbilityEffect }) {
    return (
        <i>
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
            - Target: {getTargetType(effect)}
            {hasAura(effect) && <>- Duration : {getEffectDuration(effect)}</>}
            {1 == 1 + 1 && (
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
                            {effect.spellCastingValue && (
                                <>
                                    <SpellIcon /> {effect.spellCastingValue}+
                                </>
                            )}
                        </>
                    }
                />
            )}
            {1 == 1 + 1 && effect.defenseAura && (
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
        </i>
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
    abilityModel: abilityModel,
    phase,
    unit,
    side,
    subPhase
}: {
    abilityModel: Ability;
    phase: Phase;
    unit: ItemWithAbilities;
    side: PhaseSide;
    subPhase: SubPhase;
}) {
    const classes = useStyle();
    const ability = abilityModel;
    return (
        <div>
            <i className={classes.abilityName}>{ability.name}</i> :{" "}
            {/* {abilityModel.warscrollModel && (
                <>
                    (
                    {abilityModel.warscrollModel
                        .map(x => x.options.map(y => y.name).join("-"))
                        .join(", ")}
                    )
                </>
            )} */}
            {ability.description}
            {ability.effects &&
                join(
                    ability.effects
                        .filter(x =>
                            isEffectInPhase(unit, x, side, phase, subPhase)
                        )
                        .map((x, index) => (
                            <AbilityEffectView key={index} effect={x} />
                        )),
                    ", "
                )}
        </div>
    );
}

function UnitInfo({
    unit: item,
    phase,
    side,
    subPhase
}: {
    unit: ItemWithAbilityInPhase;
    phase: Phase;
    subPhase: SubPhase;
    side: PhaseSide;
}) {
    const classes = useStyle();
    const unit = item.item;
    return (
        <div className={classes.unit}>
            <div className={classes.unitTitle}>{unit.name}</div>
            {/* {unit.type === "unit" && (
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
            )} */}

            {/* {unit.type === "unit" &&
                phase === Phase.Hero &&
                unit.definition.magicDescription && (
                    <div>{unit.definition.magicDescription}</div>
                )} */}

            {unit.attacks &&
                side === PhaseSide.Attack &&
                unit.attacks
                    .filter(x => isAttackInPhase(x.attack, phase, subPhase))
                    .map(x => (
                        <AttackStats
                            key={x.attack.id}
                            attack={x.attack}
                            count={x.count}
                        />
                    ))}
            {distinct(item.abilities).map(x => (
                <AbilityInfo
                    key={x.id}
                    phase={phase}
                    abilityModel={x}
                    side={side}
                    unit={unit}
                    subPhase={subPhase}
                />
            ))}
        </div>
    );
}

function SubPhaseInfo({
    items,
    side,
    phase,
    subPhase
}: {
    items: ItemWithAbilityInPhase[];
    side: PhaseSide;
    phase: Phase;
    subPhase: SubPhase;
}) {
    const classes = useStyle();
    if (items.length === 0) return <></>;
    return (
        <section>
            <h3>{getSubPhaseName(subPhase)}</h3>
            <div className={classes.subSectionContent}>
                <div>
                    {items.map(x => (
                        <UnitInfo
                            key={x.item.id}
                            unit={x}
                            phase={phase}
                            side={side}
                            subPhase={subPhase}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const subPhases = [SubPhase.Before, SubPhase.While, SubPhase.After];

function PhaseInfo({
    phase,
    items,
    phaseSide
}: {
    phase: Phase;
    phaseSide: PhaseSide;
    items: ItemWithAbilityInPhase[];
}) {
    const classes = useStyle();
    if (items.length === 0) return <></>;
    return (
        <section className={classes.section}>
            <h1>{getPhaseName(phase)}</h1>
            {subPhases.map(subPhase => (
                <SubPhaseInfo
                    items={items
                        .map(x => mapPhaseSide(x, phaseSide, phase, subPhase))
                        .filter(x => x.abilities.length > 0)}
                    phase={phase}
                    side={phaseSide}
                    subPhase={subPhase}
                    key={subPhase}
                />
            ))}
        </section>
    );
    // if (phase !== Phase.Setup) {
    //     if (phase === Phase.Shooting || phase === Phase.Combat) {
    //         if (
    //             !hasSomethingInPhaseSide(armyList, phase, PhaseSide.Attack) &&
    //             !hasSomethingInPhaseSide(armyList, phase, PhaseSide.Defense)
    //         )
    //             return <></>;
    //     } else {
    //         if (!hasSomethingInPhaseSide(armyList, phase)) return <></>;
    //     }
    // }
    // return (
    //     <section className={classes.section}>
    //         <h1>{getPhaseName(phase)}</h1>
    //         {phase === Phase.Setup && <div>{armyList.description}</div>}
    //         {(phase === Phase.Shooting || phase === Phase.Combat) && (
    //             <>
    //                 <SubPhaseInfo
    //                     armyList={armyList}
    //                     phase={phase}
    //                     side={PhaseSide.Attack}
    //                 />
    //                 <SubPhaseInfo
    //                     armyList={armyList}
    //                     phase={phase}
    //                     side={PhaseSide.Defense}
    //                 />
    //             </>
    //         )}
    //         {phase !== Phase.Shooting && phase !== Phase.Combat && (
    //             <SubPhaseInfo armyList={armyList} phase={phase} />
    //         )}
    //     </section>
    // );
}

function OutOfPhaseAbilities({ warscroll }: { warscroll: ArmyList }) {
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
                .map(([item, ability], i) => (
                    <div key={i}>
                        <i>{item.name}</i> <strong>{ability.name}</strong>{" "}
                        {ability.description}
                    </div>
                ))}
        </section>
    );
}

function PhaseSideInfo({ phaseSide }: { phaseSide: PhaseSide }) {
    const { armyListStore } = useStores();
    const armyList = armyListStore.armyList;
    return (
        <div>
            <h1>{getPhaseSideName(phaseSide)}</h1>
            {phases.map(x => (
                <PhaseInfo
                    items={armyList.itemsWithAbilities
                        .map(y => getWithAbilitiesInPhase(y, phaseSide, x))
                        .filter(y => y.abilities.length > 0)}
                    phase={x}
                    phaseSide={phaseSide}
                    key={x}
                />
            ))}
        </div>
    );
}

export function CheckList() {
    const { armyListStore } = useStores();
    return (
        <div>
            <PhaseSideInfo phaseSide={PhaseSide.Attack} />
            <PhaseSideInfo phaseSide={PhaseSide.Defense} />
            <OutOfPhaseAbilities warscroll={armyListStore.armyList} />
        </div>
    );
}
