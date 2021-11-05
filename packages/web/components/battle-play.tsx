import React, { useState, MouseEvent, useCallback } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useStores } from "../stores";
import {
    Button,
    ListItem,
    ListItemText,
    List,
    Paper,
    Checkbox,
    Card,
    CardHeader,
    Grid,
    CardContent,
    Chip,
    Avatar,
    Badge,
    IconButton,
    BottomNavigation,
    BottomNavigationAction,
    Modal,
    Fab,
    ListItemSecondaryAction,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { Ability, Attack, Value, Phase, Turn } from "../../common/data";
import {
    isAbilityInPhase,
    isAttackInPhase,
    getPhaseName,
    getPhaseSideName,
    getSubPhaseName,
} from "../stores/battle";
import { UnitWarscroll } from "../stores/warscroll";
import { value } from "../helpers/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SwordIcon, SaveIcon } from "../atoms/icons";
import { UnitWarscrollView } from "./unit-warscroll";

const useStyles = makeStyles((x) => ({
    navigation: {
        position: "fixed",
        bottom: x.spacing(1),
        left: "50%",
        transform: "translatex(-50%)",
    },
    root: {
        marginBottom: x.spacing(6),
    },
    remaining: {
        position: "fixed",
        bottom: x.spacing(2),
        right: x.spacing(2),
    },
}));

export const BattleStart = observer(() => {
    const { battleStore, armyListStore: warscrollStore } = useStores();
    return (
        <Button
            color="primary"
            variant="contained"
            onClick={() => battleStore.start(warscrollStore.armyList)}
        >
            Start
        </Button>
    );
});

const AbilityButton = observer(function AbilityButton({
    ability,
    wu,
}: {
    ability: Ability;
    wu?: UnitWarscroll;
}) {
    const { battleStore } = useStores();
    const handleClick = useCallback(() => {
        if (wu) battleStore.toggleUnitAbility(wu, ability);
        else battleStore.toggleArmyAbility(ability);
    }, [ability, battleStore, wu]);
    const used = wu
        ? battleStore.isUnitAbilityChecked(wu, ability)
        : battleStore.isArmyAbilityChecked(ability);
    return (
        <ListItem button onClick={handleClick}>
            <ListItemText
                primary={ability.name}
                secondary={!used && ability.description}
            ></ListItemText>
            <ListItemSecondaryAction>
                <Checkbox edge="start" checked={used} onClick={handleClick} />
            </ListItemSecondaryAction>
        </ListItem>
    );
});

function Stats(props: {
    name?: string;
    count?: number;
    children: React.ReactNode;
}) {
    return (
        <ListItem>
            {props.name && (
                <ListItemText
                    secondary={props.children}
                    primary={
                        <Badge badgeContent={props.count} color="primary">
                            {props.name}
                        </Badge>
                    }
                ></ListItemText>
            )}
            {!props.name && <ListItemText>{props.children}</ListItemText>}
        </ListItem>
    );
}

function Stat(props: { name: string; value: Value }) {
    return (
        <Chip
            label={value(props.value, "-")}
            avatar={<Avatar>{props.name}</Avatar>}
        />
    );
}

function AttackTable({ attack, count }: { attack: Attack; count: number }) {
    return (
        <Stats count={count} name={attack.name}>
            <Stat name="At" value={attack.attacks} />
            <Stat name="Rg" value={`${attack.range}"`} />
            <Stat name="Hit" value={`${attack.toHit}+`} />
            <Stat name="Wd" value={`${attack.toWound}+`} />
            <Stat name="Rd" value={attack.rend} />
            <Stat name="Dg" value={attack.damage} />
        </Stats>
    );
}

const UnitCard = observer(({ wu }: { wu: UnitWarscroll }) => {
    const unit = wu.definition;
    const { battleStore } = useStores();
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);

    const store = useLocalObservable(() => ({
        get abilities() {
            return wu.abilities.filter((x) =>
                isAbilityInPhase(
                    wu,
                    x,
                    battleStore.side,
                    battleStore.phase,
                    battleStore.subPhase
                )
            );
        },
        get attacks() {
            return wu.attackWithCounts.filter((x) =>
                isAttackInPhase(
                    x.attack,
                    battleStore.phase,
                    battleStore.subPhase
                )
            );
        },
    }));

    const toggleUsed = useCallback(() => {
        battleStore.toggleSkippedUnit(wu);
    }, [battleStore, wu]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleShowKeywords = useCallback((event: MouseEvent) => {
        setAnchorEl(event.currentTarget);
    }, []);

    return (
        <Card>
            <Modal open={anchorEl !== null} onClose={handleClose}>
                <UnitWarscrollView noFlavor wu={wu} />
            </Modal>
            <CardHeader
                title={unit.name}
                action={
                    <>
                        <IconButton onClick={handleShowKeywords} size="large">
                            <VisibilityIcon />
                        </IconButton>{" "}
                        <Checkbox
                            checked={battleStore.isUnitSkipped(wu)}
                            onClick={toggleUsed}
                        />
                    </>
                }
            />
            <CardContent>
                {!battleStore.isUnitHidden(wu) && (
                    <List>
                        {(battleStore.phase === Phase.Movement ||
                            battleStore.side === Turn.Opponent ||
                            battleStore.phase === Phase.Battleshock) && (
                            <Stats>
                                {battleStore.phase === Phase.Movement && (
                                    <Stat name="Mv" value={unit.move} />
                                )}
                                {battleStore.side === Turn.Opponent && (
                                    <>
                                        <Stat name="Wd" value={unit.wounds} />
                                        <Stat name="Sv" value={unit.save} />
                                    </>
                                )}
                                {battleStore.phase === Phase.Battleshock && (
                                    <Stat name="Bv" value={unit.bravery} />
                                )}
                            </Stats>
                        )}
                        {battleStore.side === Turn.Your &&
                            store.attacks.map((x) => (
                                <AttackTable
                                    key={x.attack.id}
                                    attack={x.attack}
                                    count={x.count}
                                />
                            ))}
                        {store.abilities.map((x) => (
                            <AbilityButton key={x.id} ability={x} wu={wu} />
                        ))}
                    </List>
                )}
            </CardContent>
        </Card>
    );
});

const PhasePage = observer(() => {
    const { battleStore } = useStores();
    const compareUnits = (a: UnitWarscroll, b: UnitWarscroll) => {
        const aHidden = battleStore.isUnitHidden(a);
        const bHidden = battleStore.isUnitHidden(b);
        if (aHidden && !bHidden) {
            return 1;
        } else if (!aHidden && bHidden) {
            return -1;
        }
        return a.name.localeCompare(b.name);
    };
    return (
        <Grid container direction="column" spacing={2}>
            {battleStore.uncheckedArmyAbilities.length > 0 && (
                <Grid item>
                    <Paper>
                        <List>
                            {battleStore.uncheckedArmyAbilities.map((x) => (
                                <AbilityButton key={x.id} ability={x} />
                            ))}
                        </List>
                    </Paper>
                </Grid>
            )}
            {battleStore.units.sort(compareUnits).map((x) => (
                <Grid key={x.id} item>
                    <UnitCard wu={x} />
                </Grid>
            ))}
            {battleStore.checkedArmyAbilities.length > 0 && (
                <Grid item>
                    <Paper>
                        <List>
                            {battleStore.checkedArmyAbilities.map((x) => (
                                <AbilityButton key={x.id} ability={x} />
                            ))}
                        </List>
                    </Paper>
                </Grid>
            )}
        </Grid>
    );
});

export const BattlePlay = observer(() => {
    const { battleStore } = useStores();
    const classes = useStyles();
    if (!battleStore.phase) return <BattleStart />;
    return (
        <div className={classes.root}>
            <PhasePage />
            <BottomNavigation showLabels className={classes.navigation}>
                <BottomNavigationAction
                    label="Previous"
                    icon={<ArrowBackIcon />}
                    onClick={battleStore.previous}
                />
                <BottomNavigationAction
                    label="Next"
                    icon={<ArrowForwardIcon />}
                    onClick={battleStore.next}
                />
                <BottomNavigationAction
                    label={
                        battleStore.side === Turn.Your
                            ? "Your turn"
                            : "Enemy turn"
                    }
                    icon={
                        battleStore.side === Turn.Your ? (
                            <SwordIcon />
                        ) : (
                            <SaveIcon />
                        )
                    }
                    onClick={battleStore.toggleSide}
                />
            </BottomNavigation>
            <Fab
                variant="extended"
                color={
                    battleStore.numberOfUncheckedUnitsOrArmyAbilities === 0
                        ? "primary"
                        : "default"
                }
                className={classes.remaining}
                onClick={battleStore.next}
            >
                <Badge
                    badgeContent={
                        battleStore.numberOfUncheckedUnitsOrArmyAbilities
                    }
                    color="secondary"
                >
                    {getPhaseSideName(battleStore.side)}
                    {" - "}
                    {getSubPhaseName(battleStore.subPhase)}{" "}
                    {getPhaseName(battleStore.phase)} phase
                </Badge>
            </Fab>
        </div>
    );
});
