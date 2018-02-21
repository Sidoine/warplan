import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { UnitsStore } from "../stores/units";
import { observable } from "mobx";
import { BasketStore } from "../stores/basket";
import { Modal, Button, Input, Icon } from "semantic-ui-react";

export interface BasketPopinProps {
    uiStore?: UiStore;
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
}

@inject("uiStore", "unitsStore", "basketStore")
@observer    
export class BasketPopin extends React.Component<BasketPopinProps, {}> {
    @observable
    basketName: string = "New basket";

    render() {
        return <Modal onClose={this.handleClose} open={true}>
            <Modal.Header closeButton>Baskets</Modal.Header>

            <Modal.Content>
                {
                    this.props.basketStore!.baskets.map(x => <div>{x}
                        <Button onClick={() => this.props.basketStore!.saveBasket(x)}>Update</Button>
                        <Button onClick={() => this.props.basketStore!.loadBasket(x)}>Load</Button>
                        <Button onClick={() => this.props.basketStore!.removeBasket(x)}><Icon glyph="remove"/></Button>
                    </div>)
                }
                    <Input type="text" value={this.basketName} onChange={(x,d) => this.basketName = d.value } />
                    <Button onClick={() => this.props.basketStore!.saveBasket(this.basketName)}>Add</Button>
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={this.handleClose}>Close</Button>
            </Modal.Actions>
        </Modal>
    }

    private handleClose = () => this.props.uiStore!.closeBasketPopin();
}