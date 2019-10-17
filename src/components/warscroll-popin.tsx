import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { UnitsStore } from "../stores/units";
import { observable } from "mobx";
import { Modal, Button, Input, Icon } from "semantic-ui-react";
import { WarscrollStore } from "../stores/warscroll";

export interface WarscrollPopinProps {
    uiStore?: UiStore;
    unitsStore?: UnitsStore;
    warscrollStore?: WarscrollStore;
}

@inject("uiStore", "unitsStore", "warscrollStore")
@observer    
export class WarscrollPopin extends React.Component<WarscrollPopinProps, {}> {
    @observable
    warscrollName: string = this.props.warscrollStore!.warscroll.description;

    render() {
        return <Modal onClose={this.handleClose} open={true}>
            <Modal.Header>Warscolls</Modal.Header>

            <Modal.Content>
                {
                    this.props.warscrollStore!.warscrolls.map(x => <div>{x}
                        <Button onClick={() => this.props.warscrollStore!.saveWarscroll(x)}>Update</Button>
                        <Button onClick={() => { this.props.warscrollStore!.loadWarscroll(x); this.handleClose(); }}>Load</Button>
                        <Button onClick={() => this.props.warscrollStore!.removeWarscroll(x)}><Icon name="remove"/></Button>
                    </div>)
                }
                    <Input type="text" value={this.warscrollName} onChange={(x,d) => this.warscrollName = d.value } />
                    <Button onClick={() => this.props.warscrollStore!.saveWarscroll(this.warscrollName)}>Add</Button>
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={this.handleClose}>Close</Button>
            </Modal.Actions>
        </Modal>
    }

    private handleClose = () => this.props.uiStore!.closeWarscrollPopin();
}