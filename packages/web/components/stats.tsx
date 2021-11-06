import React, { useCallback, ChangeEvent, useState, useMemo } from "react";
import { UiStore } from "../stores/ui";
import { observer } from "mobx-react-lite";
import { UnitStats } from "../stores/stats";
import { computed } from "mobx";
import { join, value } from "../helpers/react";
import Filter from "./filter";
import { getValue } from "../stores/combat";
import { UnitWarscrollView } from "./unit-warscroll";
import { Unit } from "../../common/data";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Dialog,
    TableSortLabel,
    Card,
    CardContent,
    TextField,
    Grid,
    TableContainer,
    IconButton,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStores } from "../stores";
import NumberControl from "../atoms/number-control";
import { ArmyListStore } from "../stores/army-list";

export interface StatsProps {
    uiStore?: UiStore;
    warscrollStore?: ArmyListStore;
}

const EnemyConfiguration = observer(({}) => {
    const { uiStore } = useStores();
    const handleSave = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            uiStore.setEnemy("enemySave", parseInt(e.target.value));
        },
        [uiStore]
    );
    const handleKeywords = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            uiStore.setEnemy("enemyKeywords", e.target.value);
        },
        [uiStore]
    );
    const handleCharged = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            uiStore.setEnemy("hasCharged", e.target.checked);
        },
        [uiStore]
    );
    const handleMoved = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            uiStore.setEnemy("hasMoved", e.target.checked);
        },
        [uiStore]
    );
    const handleCount = useCallback(
        (value: number) => {
            uiStore.setEnemy("enemyCount", value);
        },
        [uiStore]
    );
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>Settings</Grid>
                    <Grid item>
                        <TextField
                            label="Target Save"
                            value={uiStore.combatSettings.enemySave}
                            onChange={handleSave}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Target Keywords"
                            value={uiStore.combatSettings.enemyKeywords}
                            onChange={handleKeywords}
                        />
                    </Grid>
                    <Grid item>
                        <NumberControl
                            label="Target count"
                            value={uiStore.combatSettings.enemyCount}
                            onChange={handleCount}
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={uiStore.combatSettings.hasCharged}
                                    onChange={handleCharged}
                                />
                            }
                            label="Charged"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={uiStore.combatSettings.hasMoved}
                                    onChange={handleMoved}
                                />
                            }
                            label="Moved"
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
});

const enum Columns {
    Name,
    Points,
    Move,
    Bravery,
    Wounds,
    Save,
    SavedWounds,
    MeleeDamage,
    RangedDamage,
    TotalDamage,
}

function StatsTableHeaderCell({
    column,
    title,
    onClick,
    sorted,
    direction,
}: {
    direction: "asc" | "desc";
    sorted: Columns;
    column: Columns;
    title: string;
    onClick: (column: Columns) => void;
}) {
    const handleClick = useCallback(() => {
        onClick(column);
    }, [column, onClick]);
    return (
        <TableCell
            onClick={handleClick}
            sortDirection={sorted === column ? direction : undefined}
        >
            <TableSortLabel
                active={sorted === column}
                direction={sorted === column ? direction : undefined}
            >
                {title}
            </TableSortLabel>
        </TableCell>
    );
}

function Combination({
    unitStats,
    onOpenWarscroll,
}: {
    unitStats: UnitStats;
    onOpenWarscroll: (unit: Unit) => void;
}) {
    const { armyListStore: warscrollStore } = useStores();
    const unit = unitStats.unit;
    const wounds = getValue(unit.wounds) * unit.size;
    const points = unit.points / 100;
    const count = warscrollStore.armyList.units.reduce(
        (c, x) => (x.definition.id === unit.id ? x.count + c : c),
        0
    );
    const handleClick = useCallback(
        () => warscrollStore.addUnit(unit),
        [unit, warscrollStore]
    );
    const handleEyeClick = useCallback(
        () => onOpenWarscroll(unit),
        [onOpenWarscroll, unit]
    );
    return (
        <TableRow>
            <TableCell>
                {unit.name} {unit.subName} {count > 0 && `(${count})`}
                <IconButton onClick={handleClick} size="large">
                    <AddIcon />
                </IconButton>
                <IconButton onClick={handleEyeClick} size="large">
                    <HelpOutlineIcon />
                </IconButton>
            </TableCell>
            <TableCell>{unitStats.name}</TableCell>
            <TableCell>{unit.points}</TableCell>
            <TableCell>{value(unit.move)}</TableCell>
            <TableCell>{unit.bravery}</TableCell>
            <TableCell>
                {wounds} ({(wounds / points).toFixed(2)})
            </TableCell>
            <TableCell>{unitStats.save}</TableCell>
            <TableCell>
                {unitStats.savedWounds.toFixed()} (
                {(unitStats.savedWounds / points).toFixed(2)})
            </TableCell>
            <TableCell>
                {unitStats.meleeDamage.toFixed(2)} (
                {(unitStats.meleeDamage / points).toFixed(2)})
            </TableCell>
            <TableCell>
                {unitStats.rangedDamage.toFixed(2)} (
                {(unitStats.rangedDamage / points).toFixed(2)})
            </TableCell>
            <TableCell>
                {unitStats.totalDamage.toFixed(2)} (
                {(unitStats.totalDamage / points).toFixed(2)})
            </TableCell>
            <TableCell>
                {join(
                    unitStats.ignoredAbilities.map((x) => (
                        <span key={x.name} title={x.description}>
                            {x.name}
                        </span>
                    )),
                    ", "
                )}
            </TableCell>
        </TableRow>
    );
}

function Stats() {
    const { uiStore } = useStores();
    const [sorted, setSorted] = useState(Columns.Name);
    const [direction, setDirection] = useState<"asc" | "desc">("asc");
    const [warscrollOpen, setWarcrollOpen] = useState<Unit | null>(null);
    const handleOpenWarscroll = useCallback(
        (unit: Unit) => setWarcrollOpen(unit),
        []
    );
    const handleCloseWarscroll = useCallback(() => setWarcrollOpen(null), []);

    const handleSort = useCallback(
        (column: Columns) => {
            if (column !== sorted) {
                setSorted(column);
                setDirection("asc");
            } else {
                setDirection((direction) =>
                    direction === "asc" ? "desc" : "asc"
                );
            }
        },
        [sorted]
    );

    const sortedData = useMemo(
        () =>
            computed(() => {
                let data = uiStore.unitStats;
                const one = direction === "asc" ? 1 : -1;
                const min = direction === "asc" ? -1 : 1;
                switch (sorted) {
                    case Columns.Name:
                        data = data.sort((a, b) =>
                            a.unit.name > b.unit.name ? one : min
                        );
                        break;
                    case Columns.Points:
                        data = data.sort((a, b) =>
                            a.unit.points > b.unit.points ? one : min
                        );
                        break;
                    case Columns.Move:
                        data = data.sort((a, b) =>
                            (a.unit.move || 0) > (b.unit.move || 0) ? one : min
                        );
                        break;
                    case Columns.Bravery:
                        data = data.sort((a, b) =>
                            (a.unit.bravery || 0) > (b.unit.bravery || 0)
                                ? one
                                : min
                        );
                        break;
                    case Columns.Wounds:
                        data = data.sort((a, b) =>
                            (a.unit.wounds || 0) > (b.unit.wounds || 0)
                                ? one
                                : min
                        );
                        break;
                    case Columns.Save:
                        data = data.sort((a, b) =>
                            (a.save || 0) > (b.save || 0) ? one : min
                        );
                        break;
                    case Columns.SavedWounds:
                        data = data.sort((a, b) =>
                            a.savedWounds / a.unit.points >
                            b.savedWounds / b.unit.points
                                ? one
                                : min
                        );
                        break;
                    case Columns.MeleeDamage:
                        data = data.sort((a, b) =>
                            a.meleeDamage / a.unit.points >
                            b.meleeDamage / b.unit.points
                                ? one
                                : min
                        );
                        break;
                    case Columns.RangedDamage:
                        data = data.sort((a, b) =>
                            a.rangedDamage / a.unit.points >
                            b.rangedDamage / b.unit.points
                                ? one
                                : min
                        );
                        break;
                    case Columns.TotalDamage:
                        data = data.sort((a, b) =>
                            a.totalDamage / a.unit.points >
                            b.totalDamage / b.unit.points
                                ? one
                                : min
                        );
                        break;
                }
                return data;
            }).get(),
        [direction, sorted, uiStore.unitStats]
    );

    const sortOptions = { sorted, direction, onClick: handleSort };
    return (
        <Grid container spacing={2} direction="column" wrap="nowrap">
            <Grid item>
                <Filter />
            </Grid>
            <Grid item>
                <EnemyConfiguration />
            </Grid>
            {
                <Dialog
                    open={warscrollOpen !== null}
                    onClose={handleCloseWarscroll}
                >
                    {warscrollOpen && (
                        <UnitWarscrollView unit={warscrollOpen} />
                    )}
                    {!warscrollOpen && <></>}
                </Dialog>
            }
            <Grid item>
                <TableContainer>
                    <Table style={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <StatsTableHeaderCell
                                    column={Columns.Name}
                                    title="Name"
                                    {...sortOptions}
                                />
                                <TableCell>Option</TableCell>
                                <StatsTableHeaderCell
                                    column={Columns.Points}
                                    title="Points"
                                    {...sortOptions}
                                />
                                <StatsTableHeaderCell
                                    column={Columns.Move}
                                    title="Move"
                                    {...sortOptions}
                                />
                                <StatsTableHeaderCell
                                    column={Columns.Bravery}
                                    title="Bravery"
                                    {...sortOptions}
                                />
                                <StatsTableHeaderCell
                                    column={Columns.Wounds}
                                    title="Wounds"
                                    {...sortOptions}
                                />
                                <StatsTableHeaderCell
                                    column={Columns.Save}
                                    title="Save"
                                    {...sortOptions}
                                />
                                <StatsTableHeaderCell
                                    column={Columns.SavedWounds}
                                    title="Saved Wounds"
                                    {...sortOptions}
                                />
                                <StatsTableHeaderCell
                                    column={Columns.MeleeDamage}
                                    title="Melee Damage"
                                    {...sortOptions}
                                />
                                <StatsTableHeaderCell
                                    column={Columns.RangedDamage}
                                    title="Ranged Damage"
                                    {...sortOptions}
                                />
                                <StatsTableHeaderCell
                                    column={Columns.TotalDamage}
                                    title="Melee x 1.5 + Ranged"
                                    {...sortOptions}
                                />
                                <TableCell>Other abilities</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedData.map((x, index) => (
                                <Combination
                                    key={index}
                                    onOpenWarscroll={handleOpenWarscroll}
                                    unitStats={x}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default observer(Stats);
