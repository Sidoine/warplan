import React from "react";
import { observer } from "mobx-react-lite";
import {
    AllAbilities,
    useWarscrollStyles
} from "../atoms/warscroll-components";
import { WarscrollBattalionInterface } from "../../common/data";

function BattalionWarscroll({
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
                </div>
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
                                `${x.min}${
                                    x.max > x.min
                                        ? `-${x.max}`
                                        : ""
                                } ${x.name}`
                        )
                        .join(", ")}
                </div>
            </div>
        </div>
    );
}

export default observer(BattalionWarscroll);
