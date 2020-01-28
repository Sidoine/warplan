import { observable, action } from "mobx";

export const enum MarkerType {
    Terrain,
    Spell,
    Command
}

export interface Marker {
    text: string;
    condition?: string;
    description: string;
    id: number;
    type: MarkerType;
}

// interface SerializedMarkers {
//     markers: { text: string; }[];
// }

export class MarkersStore {
    serial = 1;

    @observable
    markers: Marker[] = [];

    constructor() {
        this.load();
    }

    @action
    setText(marker: Marker, text: string) {
        marker.text = text;
        this.save();
    }

    @action
    load() {
        this.markers = [
            {
                id: this.serial++,
                text: "Damned",
                condition: "Sacrifice",
                description: "D3 MW/RR1 hit",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Arcane",
                description: "+1 casting",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Inspiring",
                description: "+1 bravery",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Deadly",
                condition: "Move",
                description: "1: D3 MW",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Mystical",
                condition: "W/MW",
                description: "6+: negated",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Overgrown",
                condition: "On ground",
                description: "Cut visibility",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Entangling",
                description: "-2 run/charge",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Volcalnic",
                description: "6: D3 MW",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Commanding",
                description: "+1 CP",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Healing",
                description: "6: D3 heal",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Nullification",
                condition: "HEROES",
                description: "+1 unbind",
                type: MarkerType.Terrain
            },
            {
                id: this.serial++,
                text: "Mystic shield",
                description: "RR1 Save",
                type: MarkerType.Spell
            },
            {
                id: this.serial++,
                text: "All-out Attack",
                description: "RR1 Hit",
                type: MarkerType.Command
            },
            {
                id: this.serial++,
                text: "All-out Defence",
                description: "RR1 Save",
                type: MarkerType.Command
            },
            {
                id: this.serial++,
                text: "Volley Fire",
                description: "RR1 Hit",
                type: MarkerType.Command
            },
            {
                id: this.serial++,
                text: "Lightshard",
                condition: '12"',
                description: "RR Hit",
                type: MarkerType.Spell
            },
            {
                id: this.serial++,
                text: "Soul Cage",
                description: "Fight last/No retreat",
                type: MarkerType.Spell
            },
            {
                id: this.serial++,
                text: "Reaping Scythe",
                description: "RR Hit/RR Wound",
                type: MarkerType.Spell
            },
            {
                id: this.serial++,
                text: "Shademist",
                description: "-1 Wound",
                type: MarkerType.Spell
            },
            {
                id: this.serial++,
                text: "Spectral Overseer",
                condition: '12"',
                description: "+1 Hit",
                type: MarkerType.Command
            },
            {
                id: this.serial++,
                text: "Lord of Gheists",
                description: "+1 Attacks",
                type: MarkerType.Command
            }
        ];
        // const serialized = localStorage.getItem("markers");
        // if (serialized === null) return;

        // this.markers.splice(0);
        // const markers: SerializedMarkers = JSON.parse(serialized);
        // for (const marker of markers.markers) {
        //     this.markers.push({
        //         id: this.serial++,
        //         text: marker.text
        //     })
        // }
    }

    save() {
        // const serialized: SerializedMarkers = {
        //     markers: this.markers.map(x => {
        //         return {
        //             text: x.text
        //         };
        //     })
        // }
        // localStorage.setItem("markers", JSON.stringify(serialized));
    }

    @action
    delete(marker: Marker) {
        this.markers.splice(this.markers.indexOf(marker), 1);
        this.save();
    }

    @action
    add() {
        this.save();
    }
}
