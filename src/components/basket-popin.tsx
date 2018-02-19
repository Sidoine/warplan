import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { Modal, Button, FormControl, FormGroup, Glyphicon } from "react-bootstrap";
import { UnitsStore } from "../stores/units";
import { observable } from "mobx";

export interface BasketPopinProps {
    uiStore?: UiStore;
    unitsStore?: UnitsStore;
}

@inject("uiStore", "unitsStore")
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
                    this.props.unitsStore!.baskets.map(x => <div>{x}
                        <Button onClick={() => this.props.unitsStore!.saveBasket(x)}>Update</Button>
                        <Button onClick={() => this.props.unitsStore!.loadBasket(x)}>Load</Button>
                        <Button onClick={() => this.props.unitsStore!.removeBasket(x)}><Glyphicon glyph="remove"/></Button>
                    </div>)
                }
                <FormGroup>
                    <FormControl type="text" value={this.basketName} onChange={x => this.basketName = (x.target as any).value } />
                    <Button onClick={() => this.props.unitsStore!.saveBasket(this.basketName)}>Add</Button>
                </FormGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    }

    private handleClose = () => this.props.uiStore!.closeBasketPopin();
}