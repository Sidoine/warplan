import * as React from "react";
import { MarkersStore, Marker, MarkerType } from "../stores/markers";
import { useStores } from "../stores";
import { makeStyles } from "@material-ui/core";
import terrainImage from "../assets/objective.png";
import spellImage from "../assets/gambitspell.png";
import commandImage from "../assets/ploy.png";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export interface MarkersProps {
    markersStore?: MarkersStore;
}

const textContent: CSSProperties = {
    display: "flex",
    textAlign: "center",
    textShadow:
        "0px 0px 4px white, 0px 0px 8px white, 0px 0px 4px white, 0px 0px 4px white, 0px 0px 10px white",
    fontWeight: "bold"
};

const useStyle = makeStyles({
    markers: {
        flexDirection: "row",
        flexWrap: "wrap",
        display: "flex",
        breakInside: "avoid"
    },
    marker: {
        fontFamily: "droid_serifregular",
        width: "100px",
        height: "100px",
        borderRadius: "50px",
        border: "2px solid #EEE",
        boxShadow: "0px 0px 5px black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px"
    },
    terrain: {
        backgroundImage: `url(${terrainImage})`
    },
    spell: {
        backgroundImage: `url(${spellImage})`
    },
    command: {
        backgroundImage: `url(${commandImage})`
    },
    text: Object.assign(
        {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "12px"
        },
        textContent
    ),
    condition: Object.assign(
        {
            fontWeight: "bold",
            fontSize: "10px",
            fontStyle: "italic"
        },
        textContent
    ),
    description: textContent
});

function MarkerView({ marker }: { marker: Marker }) {
    let className: string;
    const classes = useStyle();
    switch (marker.type) {
        default:
        case MarkerType.Terrain:
            className = classes.terrain;
            break;
        case MarkerType.Spell:
            className = classes.terrain;
            break;
        case MarkerType.Command:
            className = classes.command;
            break;
    }
    return (
        <div className={`${classes.marker} ${className}`}>
            <div className={classes.text}>{marker.text}</div>
            {marker.condition && (
                <div className={classes.condition}>{marker.condition}</div>
            )}
            <div className={classes.description}>{marker.description}</div>
        </div>
    );
}

export function Markers() {
    const { markersStore } = useStores();
    const classes = useStyle();
    return (
        <div className={classes.markers}>
            {" "}
            {markersStore.markers.map(x => (
                <MarkerView key={x.id} marker={x} />
            ))}
            {markersStore.markers.map(x => (
                <MarkerView key={x.id} marker={x} />
            ))}
        </div>
    );
}
