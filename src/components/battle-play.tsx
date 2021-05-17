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
    ListItemSecondaryAction,
    Card,
    CardHeader,
    Grid,
    CardContent,
    Chip,
    Avatar,
    Badge,
    IconButton,
    BottomNavigation,
    makeStyles,
    BottomNavigationAction,
    Modal,
} from "@material-ui/core";
import { Ability, Attack, Value, Phase } from "../stores/unit";
import {
    isAbilityInPhase,
    isUnitInPhase,
    isAttackInPhase,
    PhaseSide,
    getPhaseName,
} from "../stores/battle";
import { WarscrollUnit } from "../stores/warscroll";
import { value } from "../helpers/react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { SwordIcon, SaveIcon } from "../atoms/icons";
import { UnitWarscroll } from "./unit-warscroll";

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
}));

export const BattleStart = observer(() => {
    const { battleStore, warscrollStore } = useStores();
    return (
        <Button
            color="primary"
            variant="contained"
            onClick={() => battleStore.start(warscrollStore.warscroll)}
        >
            Start
        </Button>
    );
});

function AbilityButton({ ability }: { ability: Ability }) {
    const [used, setUsed] = useState(false);
    return (
        <ListItem button onClick={() => setUsed(!used)}>
            <ListItemText
                primary={ability.name}
                secondary={!used && ability.description}
            ></ListItemText>
            <ListItemSecondaryAction>
                <Checkbox
                    edge="start"
                    checked={used}
                    onClick={() => setUsed(!used)}
                />
            </ListItemSecondaryAction>
        </ListItem>
    );
}

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

const UnitCard = observer(({ wu }: { wu: WarscrollUnit }) => {
    const unit = wu.definition;
    const { battleStore } = useStores();
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const [used, setUsed] = useState(false);

    const store = useLocalObservable(() => ({
        get abilities() {
            return wu.abilities.filter((x) =>
                isAbilityInPhase(
                    x.ability,
                    battleStore.phase,
                    wu,
                    battleStore.side
                )
            );
        },
        get attacks() {
            return wu.attacks.filter((x) =>
                isAttackInPhase(x.attack, battleStore.phase)
            );
        },
    }));

    const toggleUsed = useCallback(() => {
        setUsed((x) => !x);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleShowKeywords = useCallback((event: MouseEvent) => {
        setAnchorEl(event.currentTarget);
    }, []);

    return (
        <Card>
            <Modal open={anchorEl !== null} onClose={handleClose}>
                <UnitWarscroll noFlavor wu={wu} />
            </Modal>
            <CardHeader
                title={unit.model.name}
                action={
                    <>
                        <IconButton onClick={handleShowKeywords}>
                            <VisibilityIcon />
                        </IconButton>{" "}
                        <Checkbox checked={used} onClick={toggleUsed} />
                    </>
                }
            />
            <CardContent>
                {!used && (
                    <List>
                        {(battleStore.phase === Phase.Movement ||
                            battleStore.side === PhaseSide.Defense ||
                            battleStore.phase === Phase.Battleshock) && (
                            <Stats>
                                {battleStore.phase === Phase.Movement && (
                                    <Stat name="Mv" value={unit.move} />
                                )}
                                {battleStore.side === PhaseSide.Defense && (
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
                        {battleStore.side === PhaseSide.Attack &&
                            store.attacks.map((x) => (
                                <AttackTable
                                    key={x.attack.id}
                                    attack={x.attack}
                                    count={x.count}
                                />
                            ))}
                        {store.abilities.map((x) => (
                            <AbilityButton key={x.id} ability={x.ability} />
                        ))}
                    </List>
                )}
            </CardContent>
        </Card>
    );
});

const PhasePage = observer(() => {
    const { battleStore } = useStores();
    const store = useLocalObservable(() => ({
        get abilities() {
            return battleStore.abilities.filter((x) =>
                isAbilityInPhase(x, battleStore.phase)
            );
        },
        get units() {
            return (
                battleStore.player?.warscroll.units.filter((x) =>
                    isUnitInPhase(x, battleStore.phase, battleStore.side)
                ) || []
            );
        },
    }));
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Paper>
                    <List>
                        {store.abilities.map((x) => (
                            <AbilityButton key={x.id} ability={x} />
                        ))}
                    </List>
                </Paper>
            </Grid>
            {store.units.map((x) => (
                <Grid key={x.id} item>
                    <UnitCard wu={x} />
                </Grid>
            ))}
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
                    label={getPhaseName(battleStore.previousPhase)}
                    icon={<ArrowBackIcon />}
                    onClick={battleStore.previous}
                />
                <BottomNavigationAction
                    label={getPhaseName(battleStore.nextPhase)}
                    icon={<ArrowForwardIcon />}
                    onClick={battleStore.next}
                />
                <BottomNavigationAction
                    label={
                        battleStore.side === PhaseSide.Attack
                            ? "Attack"
                            : "Defense"
                    }
                    icon={
                        battleStore.side === PhaseSide.Attack ? (
                            <SwordIcon />
                        ) : (
                            <SaveIcon />
                        )
                    }
                    onClick={battleStore.toggleSide}
                />
            </BottomNavigation>
        </div>
    );
});
