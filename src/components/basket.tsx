import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { Panel, Table, Button } from "react-bootstrap";
import { BasketElementEdit } from "./basket-element-edit";
import { UiStore } from "../stores/ui";

export interface BasketProps {
    unitsStore?: UnitsStore;
    uiStore?: UiStore;
}

@inject('unitsStore', "uiStore")
@observer
export class Basket extends React.Component<BasketProps, {}> {
    render() {
        const basket = this.props.unitsStore!.basket;
        return <Panel>
            <Panel.Heading>Basket</Panel.Heading>
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
            {
                basket.map(x => <BasketElementEdit key={x.id} basketElement={x}/>)
            }
                </tbody>
            </Table>
            <Panel.Footer>
                <span>{basket.reduce((p, x) => x.count * x.box.price + p, 0)} €</span>
                <Button onClick={() => this.props.uiStore!.showBasketPopin()}>Manage baskets</Button>
            </Panel.Footer>
        </Panel>;
    }
}