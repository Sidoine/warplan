import * as React from "react";
import { UnitsStore, Box, Model } from "../stores/units";
import { observer, inject } from "mobx-react";
import { DropdownButton, MenuItem } from "react-bootstrap";

export interface BoxesListProps {
    unitsStore?: UnitsStore;
    title: string;
    model: Model;
}

@inject('unitsStore')
@observer
export class BoxesList extends React.Component<BoxesListProps, {}> {
    render() {
        const boxes = this.props.unitsStore!.boxes.filter(x => x.units.some(y => y.models.some(z => z.id === this.props.model.id)));
        return <DropdownButton title={this.props.title} id="units">
                {
                    boxes.map(x => <MenuItem key={x.id} onClick={() => this.addBox(x)}>{x.name}</MenuItem>)
                }
            </DropdownButton>;
    }

    private addBox(box: Box) {
        this.props.unitsStore!.basket.push({
            box: box,
            count: 1,
            id: this.props.unitsStore!.serial++
        });
    }
}