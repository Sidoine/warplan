import * as React from "react";
import { observer, inject } from "mobx-react";
import './markers.less';
import { Input, InputOnChangeData, Button } from "semantic-ui-react";
import { MarkersStore, Marker, MarkerType } from "../stores/markers";
import { observable } from "mobx";

export interface MarkersProps {
    markersStore?: MarkersStore;
}

@inject("markersStore")
@observer
export class Markers extends React.Component<MarkersProps> {
    @observable
    edited: Marker = { id: 0, text: "", description:'', type: MarkerType.Terrain };    

    render() {
        return <div className="markers"> {
            this.props.markersStore!.markers.map(x => this.renderMarker(x))
        }{
            this.props.markersStore!.markers.map(x => this.renderMarker(x))
        }
            {/* <Button icon="plus" onClick={() => this.props.markersStore!.add()} /> */}
        </div>;
    }

    private renderMarker(marker: Marker) {
        let className: string;
        switch (marker.type) {
            default:
            case MarkerType.Terrain:
                className = "terrain";
                break;
            case MarkerType.Spell:
                className  = 'spell';
                break;
            case MarkerType.Command:
                className = 'command';
                break;
        } 
        return <div className={`marker marker--${className}`} key={marker.id} onClick={this.edited.id === marker.id ? undefined : this.handleClick(marker)}>
            {
                this.edited.id === marker.id && <>
                    <Button icon="remove" onClick={() => this.props.markersStore!.delete(marker)}></Button>    
                    <Input type="text" value={marker.text} action={{ content: "OK", onClick: this.handleClick(marker) }} placeholder="Text..." onChange={this.handleChange(marker)} />
                </>    
            }
            {this.edited.id === marker.id || <>
                <div className="marker__text">{marker.text}</div>
                { marker.condition && <div className="marker__condition">{marker.condition}</div> }
                <div className="marker__description">{marker.description}</div>
            </>}
        </div>;
    }

    handleClick(marker: Marker) {
       return () => {};
        //  return () => this.edited.id === marker.id ? this.edited = { id: 0, text: "", description: ''} : this.edited = marker;
    }

    handleChange(marker: Marker) {
        return (event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) => {
            this.props.markersStore!.setText(marker, data.value);
        };
    }
}