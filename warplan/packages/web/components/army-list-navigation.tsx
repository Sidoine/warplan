import { Fab } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { observer } from "mobx-react-lite";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useArmyListStore } from "../stores/army-list";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export const ArmyListNavigation = observer(function ArmyListNavigation() {
    const armyListStore = useArmyListStore();
    const armyList = armyListStore.armyList;
    const classes = useStyles();
    return (
        <Fab variant="extended" color="primary" className={classes.root}>
            <FavoriteIcon /> {armyList.totalPoints} points
        </Fab>
    );
});
