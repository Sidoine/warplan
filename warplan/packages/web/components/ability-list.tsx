import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { Ability, ItemWithAbilities, Phase } from "../../common/data";
import { getEffectPhases, getPhaseName, phases } from "../stores/battle";
import {
    AbilityEffectAurasView,
    AbilityEffectCondition,
    AbilityEffectCost,
    AbilityEffectPhaseView,
    AbilityEffectTarget,
} from "./ability-effect-view";
import { Warning } from "../atoms/warning";
import { useArmyListStore } from "../stores/army-list";

function getEffectPhaseNames(phaseBits: number) {
    const phaseNames: string[] = [];
    for (const phase of phases) {
        if (phase !== Phase.Any && phase & phaseBits) {
            phaseNames.push(getPhaseName(phase));
        }
    }
    return phaseNames;
}

function AbilityRows({
    ability,
    unit,
}: {
    ability: Ability;
    unit: ItemWithAbilities;
}) {
    if (!ability.effects) {
        return (
            <TableRow>
                <TableCell>
                    <Typography>
                        <Warning label="No effect" /> {ability.name}{" "}
                    </Typography>
                    <Typography variant="caption">{ability.id}</Typography>
                </TableCell>
                <TableCell>{unit.name}</TableCell>
                <TableCell>{ability.description}</TableCell>
            </TableRow>
        );
    }
    const effects = ability.effects;
    return (
        <>
            {effects.map((effect, index) => (
                <TableRow key={index}>
                    {index === 0 && (
                        <>
                            <TableCell rowSpan={effects.length}>
                                <Tooltip title={ability.id}>
                                    <Typography>{ability.name}</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell rowSpan={effects.length}>
                                {unit.name}
                            </TableCell>
                            <TableCell rowSpan={effects.length}>
                                {ability.description}
                            </TableCell>
                        </>
                    )}
                    <TableCell>
                        <AbilityEffectPhaseView effect={effect} />
                    </TableCell>
                    <TableCell>
                        {effect.condition && (
                            <AbilityEffectCondition
                                condition={effect.condition}
                                unit={unit}
                            >
                                <AbilityEffectCost
                                    effect={effect}
                                    unit={unit}
                                />
                            </AbilityEffectCondition>
                        )}
                    </TableCell>
                    <TableCell>
                        <AbilityEffectCondition
                            condition={effect.targetCondition}
                            unit={unit}
                        >
                            <AbilityEffectTarget unit={unit} effect={effect} />
                        </AbilityEffectCondition>
                    </TableCell>
                    <TableCell>
                        <AbilityEffectAurasView effect={effect} unit={unit} />
                    </TableCell>
                    <TableCell>
                        {getEffectPhaseNames(getEffectPhases(effect)).join(
                            ", "
                        )}
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
}

export const AbilityList = observer(function AbilityList() {
    const armyList = useArmyListStore();
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Caster</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Cast phase</TableCell>
                        <TableCell>Condition</TableCell>
                        <TableCell>Target</TableCell>
                        <TableCell>Effect</TableCell>
                        <TableCell>Effect phase</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {armyList.armyAndUnitsAbilities.map(
                        ({ item, ability }, index) => (
                            <AbilityRows
                                unit={item}
                                key={index}
                                ability={ability}
                            />
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
});
