import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { BasketElementEdit } from "./basket-element-edit";
import { UiStore } from "../stores/ui";
import { BasketStore } from "../stores/basket";
import { Table, Button, Header } from "semantic-ui-react";

export interface BasketProps {
    unitsStore?: UnitsStore;
    uiStore?: UiStore;
    basketStore?: BasketStore;
}

@inject('unitsStore', "uiStore", "basketStore")
@observer
export class Basket extends React.Component<BasketProps, {}> {
    render() {
        const basket = this.props.basketStore!.basket;
        return <div>
            <Header>Basket</Header>
            <Table>
                <Table.Header>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Count</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
            {
                basket.map(x => <BasketElementEdit key={x.id} basketElement={x}/>)
            }
                </Table.Body>
                <Table.Footer>
                <span>{basket.reduce((p, x) => x.count * x.box.price + p, 0)} €</span>
                <Button onClick={() => this.props.uiStore!.showBasketPopin()}>Manage baskets</Button>
            </Table.Footer>
            </Table>
        </div>;
    }
}