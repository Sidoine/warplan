import * as React from "react";
import { UnitsStore, Model, Box } from "../stores/units";
import { observer, inject } from "mobx-react";
import { BasketStore } from "../stores/basket";
import { DropdownObjects } from "../atoms/dropdown-list";

export interface BoxesListProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
    title: string;
    model: Model;
}

@inject("unitsStore", "basketStore")
@observer
export class BoxesList extends React.Component<BoxesListProps, {}> {
    render() {
        const boxes = this.props.unitsStore!.boxes.filter(x =>
            x.units.some(y => y.models.some(z => z.id === this.props.model.id))
        );
        return (
            <DropdownObjects<Box>
                getText={x => x.name}
                options={boxes}
                value={null}
                onChange={this.onChange}
                placeholder={this.props.title}
            />
        );
    }

    private onChange = (box: Box | null) => {
        if (box) this.props.basketStore!.addBasketElement(box);
    };
}
