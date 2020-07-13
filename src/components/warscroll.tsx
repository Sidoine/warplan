import * as React from "react";
import { WarscrollBattalionInterface } from "../stores/units";
import {
    AllAbilities,
    useWarscrollStyles
} from "../atoms/warscroll-components";
import { UnitWarscroll } from "./unit-warscroll";
import { useStores } from "../stores";
import { EndlessSpellWarscroll } from "./endless-spell-warscroll";
import { distinct } from "../helpers/algo";

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
                    <div className={classes.type}>Battalion Warscroll</div>
                    <div className={classes.name}>
                        {battalion.definition.name}
                    </div>
                    {/* <div className={classes.count}>
                        {battalion.definition.points} points
                    </div> */}
                </div>
            </div>
            {battalion.definition.description && (
                <div className={classes.flavor}>
                    {battalion.definition.description}
                </div>
            )}
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
        <>
            {distinct(w.units.map(x => x.definition))
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map(x => (
                    <UnitWarscroll unit={x} key={x.id} />
                ))}

            {w.battalions.length > 0 &&
                w.battalions.map(x => (
                    <BattalionView key={x.id} battalion={x} />
                ))}

            {w.endlessSpells.length > 0 &&
                w.endlessSpells.map(x => (
                    <EndlessSpellWarscroll wes={x} key={x.id} />
                ))}
        </>
    );
}
