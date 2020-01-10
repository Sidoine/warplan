import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { UnitsStore } from "../stores/units";
import { observable } from "mobx";
import { BasketStore } from "../stores/basket";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Icon, Input } from "@material-ui/core";

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
        return <Dialog onClose={this.handleClose} open={true}>
            <DialogTitle>Baskets</DialogTitle>

            <DialogContent>
                {
                    this.props.basketStore!.baskets.map(x => <div>{x}
                        <Button onClick={() => this.props.basketStore!.saveBasket(x)}>Update</Button>
                        <Button onClick={() => this.props.basketStore!.loadBasket(x)}>Load</Button>
                        <Button onClick={() => this.props.basketStore!.removeBasket(x)}><Icon className="fa fa-remove"/></Button>
                    </div>)
                }
                    <Input type="text" value={this.basketName} onChange={x => this.basketName = x.target.value } />
                    <Button onClick={() => this.props.basketStore!.saveBasket(this.basketName)}>Add</Button>
            </DialogContent>

            <DialogActions>
                <Button onClick={this.handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    }

    private handleClose = () => this.props.uiStore!.closeBasketPopin();
}