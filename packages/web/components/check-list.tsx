import React from "react";
import { WarscrollItem } from "../stores/warscroll";
import {
    Phase,
    Ability,
    Attack,
    Value,
    SubPhase,
    Turn,
    ItemWithAbilities,
} from "../../common/data";
import {
    getPhaseName,
    phases,
    isAttackInPhase,
    isAbilityInPhase,
    isEffectInPhase,
    getSubPhaseName,
    getPhaseSideName,
} from "../stores/battle";
import { join, value } from "../helpers/react";
import { makeStyles } from "@material-ui/core";

import { useStores } from "../stores";
import { distinct } from "../helpers/algo";

import warscrollSeparator from "../assets/ws-separator.png";
import { DataStore } from "../stores/data";
import { ArmyList, ArmyListStore } from "../stores/army-list";
import { AbilityEffectView } from "./ability-effect-view";

const useStyle = makeStyles({
    section: {
        breakBefore: "right",
        ["&:first-of-type"]: {
            breakBefore: "avoid",
        },
    },
    subSectionContent: {
        columnCount: 2,
        fontSize: "1rem",
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
            marginBottom: "1px",
        },
    },
    unit: {
        marginBottom: "0.5rem",
    },
    abilityName: {
        color: "darkblue",
    },
    out: {},
    "@media print": {
        out: {
            display: "none",
        },
    },
    stats: {
        display: "flex",
        flexWrap: "wrap",
        "&:odd": {
            backgroundColor: "#d0c89a",
        },
    },
    statsTitle: {
        width: "6rem",
        backgroundColor: "#e6dccb",
        padding: "0.05rem",
        textAlign: "right",
        fontVariant: "small-caps",
    },
    statKey: {
        backgroundColor: "#e6dccb",
        width: "1.2rem",
        border: "1px solid #e6dccb",
        padding: "0.05rem",
        textAlign: "center",
        fontSize: "0.8rem",
    },
    statValue: {
        width: "1.5rem",
        border: "1px solid #e6dccb",
        padding: "0.05rem",
        textAlign: "center",
    },
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
    side: Turn,
    phase: Phase
): ItemWithAbilityInPhase {
    return {
        item,
        abilities:
            item.abilities?.filter((a) =>
                isAbilityInPhase(item, a, side, phase)
            ) ?? [],
    };
}

function mapPhaseSide(
    item: ItemWithAbilityInPhase,
    side: Turn,
    phase: Phase,
    subPhase: SubPhase
): ItemWithAbilityInPhase {
    return {
        item: item.item,
        abilities: item.abilities.filter((a) =>
            isAbilityInPhase(item.item, a, side, phase, subPhase)
        ),
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

function AttackStats({ attack }: { attack: Attack }) {
    return (
        <Stats key={attack.id} name={attack.name}>
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
    subPhase,
}: {
    abilityModel: Ability;
    phase: Phase;
    unit: ItemWithAbilities;
    side: Turn;
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
                        .filter((x) =>
                            isEffectInPhase(unit, x, side, phase, subPhase)
                        )
                        .map((x, index) => (
                            <AbilityEffectView
                                key={index}
                                unit={unit}
                                effect={x}
                            />
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
    subPhase,
}: {
    unit: ItemWithAbilityInPhase;
    phase: Phase;
    subPhase: SubPhase;
    side: Turn;
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
                side === Turn.Your &&
                unit.attacks
                    .filter((x) => isAttackInPhase(x, phase, subPhase))
                    .map((x) => <AttackStats key={x.id} attack={x} />)}
            {distinct(item.abilities).map((x) => (
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
    subPhase,
}: {
    items: ItemWithAbilityInPhase[];
    side: Turn;
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
                    {items.map((x) => (
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
    phaseSide,
}: {
    phase: Phase;
    phaseSide: Turn;
    items: ItemWithAbilityInPhase[];
}) {
    const classes = useStyle();
    if (items.length === 0) return <></>;
    return (
        <section className={classes.section}>
            <h1>{getPhaseName(phase)}</h1>
            {subPhases.map((subPhase) => (
                <SubPhaseInfo
                    items={items
                        .map((x) => mapPhaseSide(x, phaseSide, phase, subPhase))
                        .filter((x) => x.abilities.length > 0)}
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
                .filter((x) => !x.effects)
                .map((x, i) => (
                    <div key={i}>
                        <strong>{x.name}</strong> {x.description}
                    </div>
                ))}
            {warscroll.items
                .reduce(
                    (prev, x) =>
                        prev.concat(
                            x.abilities
                                .filter((y) => !y.effects)
                                .map((y) => [x, y])
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

function PhaseSideInfo({ phaseSide }: { phaseSide: Turn }) {
    const { armyListStore } = useStores();
    const armyList = armyListStore.armyList;
    return (
        <div>
            <h1>{getPhaseSideName(phaseSide)}</h1>
            {phases.map((x) => (
                <PhaseInfo
                    items={armyList.itemsWithAbilities
                        .map((y) => getWithAbilitiesInPhase(y, phaseSide, x))
                        .filter((y) => y.abilities.length > 0)}
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
            <PhaseSideInfo phaseSide={Turn.Your} />
            <PhaseSideInfo phaseSide={Turn.Opponent} />
            <OutOfPhaseAbilities warscroll={armyListStore.armyList} />
        </div>
    );
}
