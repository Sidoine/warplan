import * as React from "react";
import { UnitsStore, OwnedModel } from "../stores/units";
import { observer, inject } from "mobx-react";
import { Button, Glyphicon } from "react-bootstrap";
import { NumberControl } from "../atoms/number-control";

export interface OwnedModelEditProps {
    unitsStore?: UnitsStore;
    model: OwnedModel;
}

@inject('unitsStore')
@observer
export class OwnedModelEdit extends React.Component<OwnedModelEditProps, {}> {
    render() {
        const model = this.props.model;
        return <tr>
            <td>{model.model.name}</td>
            <td>
                <NumberControl value={model.count} min={0} onChange={this.onCountChange} />
            </td>
            <td>
                <Button onClick={this.remove}><Glyphicon glyph="remove"/></Button>
            </td>
        </tr>;
    }

    private remove = () => {
        const ownedModels = this.props.unitsStore!.ownedModels;
        ownedModels.splice(ownedModels.indexOf(this.props.model), 1);
    }

    private onCountChange = (value: number) => {
        this.props.model.count = value;
    }
}