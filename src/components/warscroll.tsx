import * as React from "react";
import { WarscrollBattalionInterface } from "../stores/units";
import {
    AllAbilities,
    useWarscrollStyles
} from "../atoms/warscroll-components";
import { UnitWarscroll } from "./unit-warscoll";
import { useStores } from "../stores";
import { EndlessSpellWarscroll } from "./endless-spell-warscroll";

function BattalionView({
    battalion
}: {
    battalion: WarscrollBattalionInterface;
}) {
    const classes = useWarscrollStyles();

    return (
        <div className={classes.warscroll}>
            <div className={classes.header}>
                <div className={`${classes.title} ${classes.battalion}`}>
                    <div>{battalion.definition.name}</div>
                    <div className={classes.count}>
                        {battalion.definition.points} points
                    </div>
                </div>
            </div>
            <div className={classes.flavor}>
                {battalion.definition.description}
            </div>
            <div className={classes.abilities}>
                {battalion.definition.abilities && (
                    <AllAbilities
                        title="Abilities"
                        abilities={battalion.definition.abilities}
                    />
                )}
            </div>
            <div className={classes.keywords}>
                <div className={classes.keywordsHeader}>Units</div>
                <div>
                    {battalion.definition.units
                        .map(
                            x =>
                                `${x.countMin}${
                                    x.countMax > x.countMin
                                        ? `-${x.countMax}`
                                        : ""
                                } ${x.units.map(y => y.join(" - ")).join("/")}`
                        )
                        .join(", ")}
                </div>
            </div>
        </div>
    );
}

export function Warscroll() {
    const { warscrollStore } = useStores();
    const w = warscrollStore.warscroll;
    return (
        <div>
            <div>Allegiance: {w.allegiance.name}</div>
            {warscrollStore.armyOptions && w.armyOption && (
                <div>
                    {warscrollStore.armyOptions.name}: {w.armyOption.name}
                </div>
            )}
            <div>{w.totalPoints} points</div>
            <h1>Leaders</h1>
            {w.units
                .filter(x => x.isLeader)
                .sort((a, b) => (a.isGeneral ? 1 : 0) - (b.isGeneral ? 1 : 0))
                .map(x => (
                    <UnitWarscroll wu={x} key={x.id} />
                ))}

            <h1>Battelines</h1>
            {w.units
                .filter(x => x.isBattleline)
                .sort((a, b) =>
                    a.definition.model.name > b.definition.model.name ? 1 : -1
                )
                .map(x => (
                    <UnitWarscroll wu={x} key={x.id} />
                ))}

            <h1>Units</h1>
            {w.units
                .filter(x => !x.isBattleline && !x.isLeader)
                .sort((a, b) =>
                    a.definition.model.name > b.definition.model.name ? 1 : -1
                )
                .map(x => (
                    <UnitWarscroll wu={x} key={x.id} />
                ))}

            {w.battalions.length > 0 && (
                <>
                    <h1>Battalions</h1>
                    {w.battalions.map(x => (
                        <BattalionView key={x.id} battalion={x} />
                    ))}
                </>
            )}

            {w.endlessSpells.length > 0 && (
                <>
                    <h1>Sceneries</h1>
                    {w.endlessSpells.map(x => (
                        <EndlessSpellWarscroll wes={x} key={x.id} />
                    ))}
                </>
            )}
        </div>
    );
}
