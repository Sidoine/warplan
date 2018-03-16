import * as React from "react";
import { observer, inject } from "mobx-react";
import './markers.less';
import { Input, InputOnChangeData, Button } from "semantic-ui-react";
import { MarkersStore, Marker } from "../stores/markers";
import { observable } from "mobx";

export interface MarkersProps {
    markersStore?: MarkersStore;
}

@inject("markersStore")
@observer
export class Markers extends React.Component<MarkersProps> {
    @observable
    edited: Marker = { id: 0, text: "" };    

    render() {
        return <div className="markers"> {
            this.props.markersStore!.markers.map(x => this.renderMarker(x))
        }
            <Button icon="plus" onClick={() => this.props.markersStore!.add()} />
        </div>;
    }

    private renderMarker(marker: Marker) {
        return <div className="marker" key={marker.id} onClick={this.edited.id === marker.id ? undefined : this.handleClick(marker)}>
            {
                this.edited.id === marker.id && <>
                    <Button icon="remove" onClick={() => this.props.markersStore!.delete(marker)}></Button>    
                    <Input type="text" value={marker.text} action={{ content: "OK", onClick: this.handleClick(marker) }} placeholder="Text..." onChange={this.handleChange(marker)} />
                </>    
            }
            {this.edited.id === marker.id || <span>{marker.text}</span>}
        </div>;
    }

    handleClick(marker: Marker) {
        return () => this.edited.id === marker.id ? this.edited = { id: 0, text: ""} : this.edited = marker;
    }

    handleChange(marker: Marker) {
        return (event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) => {
            this.props.markersStore!.setText(marker, data.value);
        };
    }
}