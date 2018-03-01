import * as React from "react";
import { UnitsStore, Model } from "../stores/units";
import { observer, inject } from "mobx-react";
import { BasketStore } from "../stores/basket";
import { Dropdown, DropdownItemProps, DropdownProps } from "semantic-ui-react";

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
        const options: DropdownItemProps[] = boxes.map(x => { return { key: x.id, value: x.id, text: x.name } });
        return <Dropdown placeholder={this.props.title} search fluid selection options={options}
            onChange={this.onChange}>
            </Dropdown>;
    }

    private onChange = (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
        const box  = this.props.unitsStore!.boxes.find(x => x.id === props.value);
        if (box) this.props.basketStore!.addBasketElement(box);
    }
}