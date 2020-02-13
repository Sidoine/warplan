import * as React from "react";
import { observer, useLocalStore } from "mobx-react";
import { AbilityCard, CardContent, CardColor } from "./ability-card";
import { HiddenCard } from "./hidden-card";
import { ExtraAbility, ArmyOption, Ability } from "../stores/units";
import { useStores } from "../stores";
import { makeStyles } from "@material-ui/core";

export interface CardsProps {}

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

function mapExtraAbility(x: ExtraAbility): CardContent {
    return {
        name: x.ability.name,
        category: x.ability.category,
        flavor: x.ability.flavor,
        description: x.ability.description,
        keywords: x.keywords,
        group:
            x.category === "CommandTrait" || x.category === "Artefact"
                ? undefined
                : x.category,
        color: x.requiredByArmyOption ? "armyOption" : "allegiance"
    };
}

function mapArmyOption(x: Ability, o: ArmyOption): CardContent {
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
        display: "flex",
        flexWrap: "wrap"
    }
});

export const Cards = observer((props: CardsProps) => {
    const { warscrollStore, unitsStore, cardsStore } = useStores();
    const classes = useStyles();
    const store = useLocalStore(() => ({
        get abilities() {
            let result: CardContent[] = unitsStore.baseAbilities.map(x =>
                mapAbility(x, "common")
            );
            const w = warscrollStore.warscroll;
            if (w.allegiance.armyOptions) {
                for (const armyOption of w.allegiance.armyOptions.values) {
                    if (armyOption.abilities)
                        result = result.concat(
                            armyOption.abilities.map(x =>
                                mapArmyOption(x, armyOption)
                            )
                        );
                }
            }
            if (w.allegiance.battleTraits)
                result = result.concat(
                    w.allegiance.battleTraits.map(x =>
                        mapAbility(x, "allegiance")
                    )
                );

            result = result.concat(
                w.availableExtraAbilities.map(x => mapExtraAbility(x))
            );
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
