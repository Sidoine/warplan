import React from "react";
import { observer } from "mobx-react-lite";
import {
    AllAbilities,
    useWarscrollStyles,
} from "../atoms/warscroll-components";
import { WarscrollBattalionInterface } from "../stores/units";

function BattalionWarscroll({
    battalion,
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
                            (x) =>
                                `${x.countMin}${
                                    x.countMax > x.countMin
                                        ? `-${x.countMax}`
                                        : ""
                                } ${x.units
                                    .map((y) => y.join(" - "))
                                    .join("/")}`
                        )
                        .join(", ")}
                </div>
            </div>
        </div>
    );
}

export default observer(BattalionWarscroll);
