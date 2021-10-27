import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { AbilityEffect, ItemWithAbilities, Ability } from "../../common/data";
import {
    AbilityEffectPhaseView,
    AbilityEffectCondition,
    AbilityEffectCost,
    AbilityEffectTarget,
    AbilityEffectAurasView,
} from "./ability-effect-view";

function EffectLine({
    effect,
    unit,
}: {
    effect: AbilityEffect;
    unit: ItemWithAbilities;
}) {
    return (
        <Grid container direction="row" spacing={1}>
            {effect.phase !== undefined && (
                <Grid item>
                    <AbilityEffectPhaseView effect={effect} />
                </Grid>
            )}
            <Grid item>
                <AbilityEffectCondition
                    condition={effect.condition}
                    unit={unit}
                >
                    <AbilityEffectCost effect={effect} unit={unit} />
                </AbilityEffectCondition>
            </Grid>
            <Grid item>
                <AbilityEffectCondition
                    condition={effect.targetCondition}
                    unit={unit}
                >
                    <AbilityEffectTarget unit={unit} effect={effect} />
                </AbilityEffectCondition>
            </Grid>
            <Grid item>
                <AbilityEffectAurasView effect={effect} unit={unit} />
            </Grid>
        </Grid>
    );
}

function AbilityLine({
    unit,
    ability,
}: {
    unit: ItemWithAbilities;
    ability: Ability;
}) {
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography variant="caption">{ability.name}</Typography>
            </Grid>
            {ability.effects && (
                <Grid item>
                    <Grid container direction="column" spacing={1}>
                        {ability.effects.map((effect, index) => (
                            <Grid item key={index}>
                                <EffectLine unit={unit} effect={effect} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}

export function Abilities({
    unit,
    abilities,
}: {
    unit: ItemWithAbilities;
    abilities: Ability[];
}) {
    return (
        <Grid container direction="column" spacing={1}>
            {abilities.map((x) => (
                <Grid item key={x.id}>
                    <AbilityLine unit={unit} ability={x} />
                </Grid>
            ))}
        </Grid>
    );
}
