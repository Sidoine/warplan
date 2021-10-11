import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores";
import { Ability, ItemWithAbilities, Phase } from "../../common/data";
import {
    getEffectPhases,
    getPhaseName,
    getPhaseSideName,
    getSubPhaseName,
    phases,
} from "../stores/battle";
import {
    AbilityEffectAuraView,
    AbilityEffectTarget,
} from "./ability-effect-view";
import { Warning } from "../atoms/warning";

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
                                <Typography>{ability.name}</Typography>{" "}
                                <Typography variant="caption">
                                    {ability.id}
                                </Typography>
                            </TableCell>
                            <TableCell rowSpan={effects.length}>
                                {ability.description}
                            </TableCell>
                        </>
                    )}
                    <TableCell>
                        {effect.side !== undefined &&
                            getPhaseSideName(effect.side)}{" "}
                        {effect.subPhase !== undefined &&
                            getSubPhaseName(effect.subPhase)}{" "}
                        {effect.phase !== undefined &&
                            getPhaseName(effect.phase)}
                    </TableCell>
                    <TableCell>
                        <AbilityEffectAuraView effect={effect} unit={unit} />
                    </TableCell>
                    <TableCell>
                        {getEffectPhaseNames(getEffectPhases(effect)).join(
                            ", "
                        )}
                    </TableCell>
                    <TableCell>
                        <AbilityEffectTarget unit={unit} effect={effect} />
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
}

export const AbilityList = observer(function AbilityList() {
    const armyList = useStores().armyListStore.armyList;
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Cast phase</TableCell>
                        <TableCell>Effect</TableCell>
                        <TableCell>Effect phase</TableCell>
                        <TableCell>Target</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {armyList.armyAndUnitsAbilities.map(({ item, ability }) => (
                        <AbilityRows
                            unit={item}
                            key={ability.id}
                            ability={ability}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});
