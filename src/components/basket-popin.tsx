import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { Modal, Button, FormControl, FormGroup, Glyphicon } from "react-bootstrap";
import { UnitsStore } from "../stores/units";
import { observable } from "mobx";
import { BasketStore } from "../stores/basket";

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
        return <Modal onHide={this.handleClose} show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Baskets</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    this.props.basketStore!.baskets.map(x => <div>{x}
                        <Button onClick={() => this.props.basketStore!.saveBasket(x)}>Update</Button>
                        <Button onClick={() => this.props.basketStore!.loadBasket(x)}>Load</Button>
                        <Button onClick={() => this.props.basketStore!.removeBasket(x)}><Glyphicon glyph="remove"/></Button>
                    </div>)
                }
                <FormGroup>
                    <FormControl type="text" value={this.basketName} onChange={x => this.basketName = (x.target as any).value } />
                    <Button onClick={() => this.props.basketStore!.saveBasket(this.basketName)}>Add</Button>
                </FormGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    }

    private handleClose = () => this.props.uiStore!.closeBasketPopin();
}