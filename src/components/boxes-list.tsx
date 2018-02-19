import * as React from "react";
import { UnitsStore, Model } from "../stores/units";
import { observer, inject } from "mobx-react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { BasketStore } from "../stores/basket";

export interface BoxesListProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
    title: string;
    model: Model;
}

@inject('unitsStore', "basketStore")
@observer
export class BoxesList extends React.Component<BoxesListProps, {}> {
    render() {
        const boxes = this.props.unitsStore!.boxes.filter(x => x.units.some(y => y.models.some(z => z.id === this.props.model.id)));
        return <DropdownButton title={this.props.title} id="units">
                {
                    boxes.map(x => <MenuItem key={x.id} onClick={() => this.props.basketStore!.addBasketElement(x)}>{x.name}</MenuItem>)
                }
            </DropdownButton>;
    }
}