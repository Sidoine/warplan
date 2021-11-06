import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { AbilityCard, CardContent, CardColor } from "./ability-card";
import { HiddenCard } from "./hidden-card";
import { Ability, Faction } from "../../common/data";
import { useStores } from "../stores";
import makeStyles from '@mui/styles/makeStyles';

function mapAbility(
    x: Ability,
    color: CardColor,
    keywords?: string[][]
): CardContent {
    return {
        name: x.name,
        category: x.category,
        flavor: x.flavor,
        description: x.description,
        color,
        keywords
    };
}

function mapArmyOption(x: Ability, o: Faction): CardContent {
    return {
        name: x.name,
        category: x.category,
        flavor: x.flavor,
        description: x.description,
        keywords: [[o.name]],
        color: "armyOption"
    };
}

const useStyles = makeStyles({
    root: {
        display: "block"
    }
});

export const Cards = observer(() => {
    const {
        armyListStore: warscrollStore,
        unitsStore,
        cardsStore
    } = useStores();
    const classes = useStyles();
    const store = useLocalObservable(() => ({
        get abilities() {
            let result: CardContent[] = [];
            for (const group of unitsStore.baseAbilities) {
                result = result.concat(
                    group.abilities.map(x => mapAbility(x, "common"))
                );
            }
            const w = warscrollStore.armyList;
            if (w.allegiance?.children) {
                for (const armyOption of w.allegiance.children) {
                    if (armyOption.abilityGroups)
                        for (const group of armyOption.abilityGroups) {
                            result = result.concat(
                                group.abilities.map(x =>
                                    mapArmyOption(x, armyOption)
                                )
                            );
                        }
                }
            }
            if (w.allegiance?.abilityGroups)
                for (const group of w.allegiance.abilityGroups) {
                    result = result.concat(
                        group.abilities.map(x => mapAbility(x, "allegiance"))
                    );
                }

            return result;
        },

        handleShownAbilityClick(name: string) {
            cardsStore.setAbilityHidden(name, true);
        },

        handleHiddenAbilityClick(name: string) {
            cardsStore.setAbilityHidden(name, false);
        }
    }));

    return (
        <div>
            <div className={classes.root}>
                {store.abilities
                    .filter(x => !cardsStore.isHidden(x.group || x.name))
                    .map((x, i) => (
                        <AbilityCard
                            key={i}
                            onClick={store.handleShownAbilityClick}
                            ability={x}
                        />
                    ))}
            </div>
            <div>
                {Array.from(cardsStore.names)
                    .filter(x => x[1])
                    .map(([name]) => (
                        <HiddenCard
                            key={name}
                            name={name}
                            onClick={store.handleHiddenAbilityClick}
                        />
                    ))}
            </div>
        </div>
    );
});
