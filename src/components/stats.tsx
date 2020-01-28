import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { UnitStats } from "../stores/stats";
import { observable, action, computed } from "mobx";
import { join, value } from "../helpers/react";
import { Filter } from "./filter";
import { WarscrollStore } from "../stores/warscroll";
import { getValue } from "../stores/combat";
import { UnitWarscroll } from "./unit-warscoll";
import { Unit } from "../stores/units";
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
    IconButton
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export interface StatsProps {
    uiStore?: UiStore;
    warscrollStore?: WarscrollStore;
}

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
    TotalDamage
}

@inject("uiStore", "warscrollStore")
@observer
export class Stats extends React.Component<StatsProps> {
    @observable
    sorted = Columns.Name;

    @observable
    direction: "asc" | "desc" = "asc";
    @observable private warscrollOpen: Unit | null = null;
    @action private handleOpenWarscroll = (unit: Unit) =>
        (this.warscrollOpen = unit);
    @action private handleCloseWarscroll = () => (this.warscrollOpen = null);

    @action
    handleSort(column: Columns) {
        return () => {
            this.setColumn(column);
        };
    }

    @action
    setColumn(column: Columns) {
        if (column !== this.sorted) {
            this.sorted = column;
            this.direction = "asc";
        } else {
            this.direction = this.direction === "asc" ? "desc" : "asc";
        }
    }

    @computed
    get sortedData() {
        let data = this.props.uiStore!.unitStats;
        const one = this.direction === "asc" ? 1 : -1;
        const min = this.direction === "asc" ? -1 : 1;
        switch (this.sorted) {
            case Columns.Name:
                data = data.sort((a, b) =>
                    a.unit.model.name > b.unit.model.name ? one : min
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
                    (a.unit.bravery || 0) > (b.unit.bravery || 0) ? one : min
                );
                break;
            case Columns.Wounds:
                data = data.sort((a, b) =>
                    (a.unit.wounds || 0) > (b.unit.wounds || 0) ? one : min
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
    }

    @action
    private handleEnemySaveChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        this.props.uiStore!.enemy.save = parseInt(e.target.value);
    };

    renderTableHeaderCell(column: Columns, title: string) {
        return (
            <TableCell
                onClick={this.handleSort(column)}
                sortDirection={
                    this.sorted === column ? this.direction : undefined
                }
            >
                <TableSortLabel
                    active={this.sorted === column}
                    direction={
                        this.sorted === column ? this.direction : undefined
                    }
                >
                    {title}
                </TableSortLabel>
            </TableCell>
        );
    }

    render() {
        return (
            <Grid container spacing={2} direction="column" wrap="nowrap">
                <Grid item>
                    {" "}
                    <Filter />
                </Grid>
                <Grid item>
                    {" "}
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>Enemy</Grid>
                                <Grid item>
                                    {" "}
                                    <TextField
                                        label="Save"
                                        value={this.props.uiStore!.enemy.save}
                                        onChange={this.handleEnemySaveChange}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {
                    <Dialog
                        open={this.warscrollOpen !== null}
                        onClose={this.handleCloseWarscroll}
                    >
                        {this.warscrollOpen && (
                            <UnitWarscroll unit={this.warscrollOpen} />
                        )}
                        {!this.warscrollOpen && <></>}
                    </Dialog>
                }
                <Grid item>
                    <TableContainer>
                        <Table style={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    {this.renderTableHeaderCell(
                                        Columns.Name,
                                        "Name"
                                    )}
                                    <TableCell>Option</TableCell>
                                    {this.renderTableHeaderCell(
                                        Columns.Points,
                                        "Points"
                                    )}
                                    {this.renderTableHeaderCell(
                                        Columns.Move,
                                        "Move"
                                    )}
                                    {this.renderTableHeaderCell(
                                        Columns.Bravery,
                                        "Bravery"
                                    )}
                                    {this.renderTableHeaderCell(
                                        Columns.Wounds,
                                        "Wounds"
                                    )}
                                    {this.renderTableHeaderCell(
                                        Columns.Save,
                                        "Save"
                                    )}
                                    {this.renderTableHeaderCell(
                                        Columns.SavedWounds,
                                        "Saved wounds"
                                    )}
                                    {this.renderTableHeaderCell(
                                        Columns.MeleeDamage,
                                        "Melee Damage"
                                    )}
                                    {this.renderTableHeaderCell(
                                        Columns.RangedDamage,
                                        "Ranged Damage"
                                    )}
                                    {this.renderTableHeaderCell(
                                        Columns.TotalDamage,
                                        "Melee x 1.5 + Ranged"
                                    )}
                                    <TableCell>Other abilities</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.sortedData.map(x =>
                                    this.renderCombination(x)
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        );
    }

    renderCombination(unitStats: UnitStats) {
        const unit = unitStats.unit;
        const wounds = getValue(unit.wounds) * unit.size;
        const points = unit.points / 100;
        const count = this.props.warscrollStore!.warscroll.units.reduce(
            (c, x) => (x.unit.id === unit.id ? x.count + c : c),
            0
        );
        return (
            <TableRow key={unit.id + unitStats.name}>
                <TableCell>
                    {unit.model.name} {count > 0 && `(${count})`}
                    <IconButton
                        onClick={() => this.props.warscrollStore!.addUnit(unit)}
                    >
                        {" "}
                        <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => this.handleOpenWarscroll(unit)}>
                        <HelpOutlineIcon />
                    </IconButton>
                </TableCell>
                <TableCell>{unitStats.name}</TableCell>
                <TableCell>{unit.points}</TableCell>
                <TableCell>{value(unit.move)}</TableCell>
                <TableCell>{unit.bravery}</TableCell>
                <TableCell>
                    {wounds} ({(wounds / points).toFixed(2)}){" "}
                </TableCell>
                <TableCell>{unitStats.save}</TableCell>
                <TableCell>
                    {unitStats.savedWounds.toFixed()} (
                    {(unitStats.savedWounds / points).toFixed(2)})
                </TableCell>
                <TableCell>
                    {unitStats.meleeDamage.toFixed(2)} (
                    {(unitStats.meleeDamage / points).toFixed(2)}){" "}
                </TableCell>
                <TableCell>
                    {unitStats.rangedDamage.toFixed(2)} (
                    {(unitStats.rangedDamage / points).toFixed(2)}){" "}
                </TableCell>
                <TableCell>
                    {unitStats.totalDamage.toFixed(2)} (
                    {(unitStats.totalDamage / points).toFixed(2)}){" "}
                </TableCell>
                <TableCell>
                    {join(
                        unitStats.ignoredAbilities.map(x => (
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
}
