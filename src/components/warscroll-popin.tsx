import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { UnitsStore } from "../stores/units";
import { observable } from "mobx";
import { WarscrollStore } from "../stores/warscroll";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
    Input
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
        return (
            <Dialog onClose={this.handleClose} open={true}>
                <DialogTitle>Warscolls</DialogTitle>

                <DialogContentText>
                    {this.props.warscrollStore!.warscrolls.map(x => (
                        <div>
                            {x}
                            <Button
                                onClick={() =>
                                    this.props.warscrollStore!.saveWarscroll(x)
                                }
                            >
                                Update
                            </Button>
                            <Button
                                onClick={() => {
                                    this.props.warscrollStore!.loadWarscroll(x);
                                    this.handleClose();
                                }}
                            >
                                Load
                            </Button>
                            <Button
                                onClick={() =>
                                    this.props.warscrollStore!.removeWarscroll(
                                        x
                                    )
                                }
                            >
                                <DeleteIcon />
                            </Button>
                        </div>
                    ))}
                    <Input
                        type="text"
                        value={this.warscrollName}
                        onChange={x => (this.warscrollName = x.target.value)}
                    />
                    <Button
                        onClick={() =>
                            this.props.warscrollStore!.saveWarscroll(
                                this.warscrollName
                            )
                        }
                    >
                        Add
                    </Button>
                </DialogContentText>

                <DialogActions>
                    <Button onClick={this.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        );
    }

    private handleClose = () => this.props.uiStore!.closeWarscrollPopin();
}
