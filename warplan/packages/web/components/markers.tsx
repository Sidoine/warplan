import React, { useState, ReactNode } from "react";
import {
    MarkersStore,
    Marker,
    MarkerType,
    useMarkersStore,
} from "../stores/markers";
import { Card, CardContent, Switch, FormControlLabel } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import terrainImage from "../assets/objective.png";
import spellImage from "../assets/gambitspell.png";
import commandImage from "../assets/ploy.png";
import NumberControl from "../atoms/number-control";
import { observer } from "mobx-react-lite";
import { CSSProperties } from "@mui/styles";

export interface MarkersProps {
    markersStore?: MarkersStore;
}

const textContent: CSSProperties = {
    display: "flex",
    textAlign: "center",
    textShadow:
        "0px 0px 4px white, 0px 0px 8px white, 0px 0px 4px white, 0px 0px 4px white, 0px 0px 10px white",
    fontWeight: "bold",
};

const useStyle = makeStyles({
    filter: {
        "@media print": {
            display: "none",
        },
    },
    markers: {
        display: "block",
    },
    wrapper: {
        display: "inline-block",
        width: "100px",
        height: "100px",
        position: "relative",
        borderRadius: "50px",
        backgroundColor: "gray",
        margin: "10px",
    },
    marker: {
        top: 0,
        left: 0,
        position: "absolute",
        fontFamily: "droid_serifregular",
        width: "100px",
        height: "100px",
        borderRadius: "50px",
        border: "2px solid #EEE",
        backgroundPositionX: "-2px",
        backgroundPositionY: "-2px",
        boxShadow: "0px 0px 5px black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        breakInside: "avoid",
    },
    terrain: {
        backgroundImage: `url(${terrainImage})`,
    },
    spell: {
        backgroundImage: `url(${spellImage})`,
    },
    command: {
        backgroundImage: `url(${commandImage})`,
    },
    custom: {},
    text: Object.assign(
        {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "12px",
        },
        textContent
    ),
    condition: Object.assign(
        {
            fontWeight: "bold",
            fontSize: "10px",
            fontStyle: "italic",
        },
        textContent
    ),
    description: textContent,
    hiddenMarker: {
        opacity: 0.5,
        "@media print": {
            display: "none",
        },
    },
    background: {
        position: "absolute",
        left: "5px",
        top: "5px",
        width: "90px",
        height: "90px",
    },
});

const MarkerView = observer(({ marker }: { marker: Marker }) => {
    let className = "";
    const classes = useStyle();
    const markersStore = useMarkersStore();
    switch (marker.type) {
        case MarkerType.Terrain:
            className = classes.terrain;
            break;
        case MarkerType.Spell:
            className = classes.spell;
            break;
        case MarkerType.Command:
            className = classes.command;
            break;
        case undefined:
            className = classes.custom;
            break;
    }
    return (
        <div
            className={`${classes.wrapper} ${
                markersStore.hiddenMarkers.get(marker.id) &&
                classes.hiddenMarker
            }`}
            onClick={() => markersStore.toggleMarker(marker)}
        >
            {marker.image && (
                <img src={marker.image} className={classes.background} />
            )}
            <div
                className={`${classes.marker} ${className}`}
                title={marker.tooltip}
            >
                <div className={classes.text}>{marker.text}</div>
                {marker.condition && (
                    <div className={classes.condition}>{marker.condition}</div>
                )}
                <div className={classes.description}>{marker.description}</div>
            </div>
        </div>
    );
});

function Repeat({ children, count }: { children: ReactNode; count: number }) {
    const result: ReactNode[] = [];
    for (let i = 0; i < count; i++) {
        result.push(<React.Fragment key={i}>{children}</React.Fragment>);
    }
    return <>{result}</>;
}

export const Markers = observer(function Markers() {
    const markersStore = useMarkersStore();
    const classes = useStyle();
    const [repeat, setRepeat] = useState(1);
    return (
        <>
            <Card className={classes.filter}>
                <CardContent>
                    <NumberControl
                        label="Repeat"
                        value={repeat}
                        onChange={setRepeat}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={markersStore.showTerrains}
                                onChange={markersStore.toggleShowTerrains}
                            />
                        }
                        label="Terrains"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={markersStore.showGenerics}
                                onChange={markersStore.toggleShowGenerics}
                            />
                        }
                        label="Generic abilities"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={markersStore.showWarscrolls}
                                onChange={markersStore.toggleShowWarscrolls}
                            />
                        }
                        label="Warscroll abilities"
                    />
                </CardContent>
            </Card>

            <div className={classes.markers}>
                {markersStore.showTerrains &&
                    markersStore.terrainMarkers.map((x) => (
                        <Repeat key={x.id} count={repeat}>
                            <MarkerView marker={x} />
                        </Repeat>
                    ))}
                {markersStore.showGenerics &&
                    markersStore.genericMarkers.map((x) => (
                        <Repeat key={x.id} count={repeat}>
                            <MarkerView marker={x} />
                        </Repeat>
                    ))}
                {markersStore.showWarscrolls &&
                    markersStore.markers.map((x) => (
                        <Repeat key={x.id} count={repeat}>
                            <MarkerView marker={x} />
                        </Repeat>
                    ))}
            </div>
        </>
    );
});
