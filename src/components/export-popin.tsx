import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { UnitsStore } from "../stores/units";
import { Modal, Button, Input } from "semantic-ui-react";
import { WarscrollStore } from "../stores/warscroll";

export interface ExportPopinProps {
    uiStore?: UiStore;
    unitsStore?: UnitsStore;
    warscrollStore?: WarscrollStore;
}

@inject("uiStore", "unitsStore", "warscrollStore")
@observer    
export class ExportPopin extends React.Component<ExportPopinProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        return <Modal onClose={this.handleClose} open={true}>
            <Modal.Header>Warscolls</Modal.Header>

            <Modal.Content>
                <div><b>Allegiance: { warscroll.allegiance.name}</b></div>
                { warscroll.units.map(x => <div key={x.id}>
                <b>{ x.modelCount > 1 ? <>{x.modelCount} x</> : <></> } {x.unit.model.name}</b>  
                ({x.points})
                {x.isGeneral && <div><i>- General</i></div>}
                {x.weaponOption.map(y => y.weaponOption && <div key={y.weaponOption.id}><i>- {y.count && <>{y.count} x </> } {y.weaponOption.name} </i></div>)}
                    </div>) }
                
                { warscroll.battalions.map(x => <div key={x.id}><b>{x.battalion.name}</b></div>)}

                <Input type="text" value={this.props.warscrollStore!.link} fluid/>
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={this.handleClose}>Close</Button>
            </Modal.Actions>
        </Modal>
    }

    private handleClose = () => this.props.uiStore!.closeExportPopin();
}