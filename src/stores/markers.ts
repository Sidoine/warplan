import { observable, action } from "mobx";

export interface Marker {
    text: string;
    id: number;
}

interface SerializedMarkers {
    markers: { text: string; }[];
}

export class MarkersStore {
    serial = 1;

    @observable
    markers: Marker[] = [{
        id: this.serial++,    
        text: "Deadly",
    },{
        id: this.serial++,    
        text: "Deadly",
    },{
        id: this.serial++,    
        text: "Deadly",
    },{
        id: this.serial++,    
        text: "Mystical",
    },{
        id: this.serial++,    
        text: "Mystical",
    },{
        id: this.serial++,    
        text: "Mystical",
    },{
        id: this.serial++,    
        text: "Sinister",
    },{
        id: this.serial++,    
        text: "Sinister",
    },{
        id: this.serial++,    
        text: "Sinister",
    },{
        id: this.serial++,    
        text: "Arcane",
    },{
        id: this.serial++,    
        text: "Arcane",
    },{
        id: this.serial++,    
        text: "Arcane",
    },{
        id: this.serial++,    
        text: "Damned",
    },{
        id: this.serial++,    
        text: "Damned",
    },{
        id: this.serial++,    
        text: "Damned",
    },{
        id: this.serial++,    
        text: "Inspiring",
    },{
        id: this.serial++,    
        text: "Inspiring",
    },{
        id: this.serial++,    
        text: "Inspiring",
    }];   

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
        const serialized = localStorage.getItem("markers");
        if (serialized === null) return;

        this.markers.splice(0);
        const markers: SerializedMarkers = JSON.parse(serialized);
        for (const marker of markers.markers) {
            this.markers.push({
                id: this.serial++,
                text: marker.text
            })
        }
    }

    save() {
        const serialized: SerializedMarkers = {
            markers: this.markers.map(x => {
                return {
                    text: x.text
                };
            })
        }
        localStorage.setItem("markers", JSON.stringify(serialized));
    }

    @action
    delete(marker: Marker) {
        this.markers.splice(this.markers.indexOf(marker), 1);
        this.save();
    }

    @action
    add() {
        this.markers.push({ id: this.serial++, text: "" });
        this.save();
    }
}