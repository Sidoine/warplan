import React, { useState, MouseEvent } from "react";
import { observer, useLocalStore } from "mobx-react";
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
    Popover
} from "@material-ui/core";
import { Ability, Attack, Value, Phase } from "../stores/units";
import {
    isAbilityInPhase,
    isUnitInPhase,
    isAttackInPhase,
    PhaseSide
} from "../stores/battle";
import { WarscrollUnit } from "../stores/warscroll";
import { value } from "../helpers/react";
import VisibilityIcon from "@material-ui/icons/Visibility";

export interface BattlePlayProps {}

export const BattleStart = observer(() => {
    const { battleStore, warscrollStore } = useStores();
    return (
        <Button
            color="primary"
            variant="contained"
            onClick={() => battleStore.start(warscrollStore.warscroll)}
        >
            {" "}
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
    const unit = wu.unit;
    const { battleStore } = useStores();
    const store = useLocalStore(() => ({
        get abilities() {
            return wu.abilities.filter(x =>
                isAbilityInPhase(x, battleStore.phase, wu, battleStore.side)
            );
        },
        used: false,
        toggleUsed() {
            store.used = !store.used;
        },
        get attacks() {
            return wu.attacks.filter(x =>
                isAttackInPhase(x.attack, battleStore.phase)
            );
        },
        anchorEl: null as null | Element,
        handleShowKeywords(event: MouseEvent) {
            store.anchorEl = event.currentTarget;
        },
        handleClose() {
            store.anchorEl = null;
        }
    }));
    return (
        <Card>
            <Popover
                open={store.anchorEl !== null}
                onClose={store.handleClose}
                anchorEl={store.anchorEl}
            >
                {wu.keywords.map(x => (
                    <Chip key={x} label={x} />
                ))}
            </Popover>
            <CardHeader
                title={unit.model.name}
                action={
                    <>
                        <IconButton onClick={store.handleShowKeywords}>
                            <VisibilityIcon />
                        </IconButton>{" "}
                        <Checkbox
                            checked={store.used}
                            onClick={store.toggleUsed}
                        />
                    </>
                }
            />
            <CardContent>
                {!store.used && (
                    <List>
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
                        {battleStore.side === PhaseSide.Attack &&
                            store.attacks.map(x => (
                                <AttackTable
                                    key={x.attack.id}
                                    attack={x.attack}
                                    count={x.count}
                                />
                            ))}
                        {store.abilities.map(x => (
                            <AbilityButton key={x.id} ability={x} />
                        ))}
                    </List>
                )}
            </CardContent>
        </Card>
    );
});

const PhasePage = observer(() => {
    const { battleStore } = useStores();
    const store = useLocalStore(() => ({
        get abilities() {
            return battleStore.abilities.filter(x =>
                isAbilityInPhase(x, battleStore.phase)
            );
        },
        get units() {
            return (
                battleStore.player?.warscroll.units.filter(x =>
                    isUnitInPhase(x, battleStore.phase, battleStore.side)
                ) || []
            );
        }
    }));
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Paper>
                    <List>
                        {store.abilities.map(x => (
                            <AbilityButton key={x.id} ability={x} />
                        ))}
                    </List>
                </Paper>
            </Grid>
            {store.units.map(x => (
                <Grid key={x.id} item>
                    <UnitCard wu={x} />
                </Grid>
            ))}
            <Grid item container spacing={1}>
                <Grid item>
                    {" "}
                    <Button variant="contained" onClick={battleStore.previous}>
                        Previous
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={battleStore.next}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
});

export const BattlePlay = observer((props: BattlePlayProps) => {
    const { battleStore } = useStores();
    if (!battleStore.phase) return <BattleStart />;
    return <PhasePage />;
});
