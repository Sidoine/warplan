import * as React from "react";
import { UiStore } from "../stores/ui";
import { inject, observer } from "mobx-react";
import { UnitsStore } from "../stores/units";
import { WarscrollStore } from "../stores/warscroll";
import {
    Dialog,
    DialogActions,
    Button,
    DialogContent,
    DialogTitle,
    Input
} from "@material-ui/core";

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
        return (
            <Dialog onClose={this.handleClose} open={true}>
                <DialogTitle>Warscolls</DialogTitle>

                <DialogContent>
                    <div>
                        <b>Allegiance: {warscroll.allegiance.name}</b>
                    </div>
                    {warscroll.units.map(x => (
                        <div key={x.id}>
                            <b>
                                {x.modelCount > 1 ? (
                                    <>{x.modelCount} x</>
                                ) : (
                                    <></>
                                )}{" "}
                                {x.unit.model.name}
                            </b>
                            ({x.points})
                            {x.isGeneral && (
                                <div>
                                    <i>- General</i>
                                </div>
                            )}
                            {x.models.map(y => (
                                <div key={y.id}>
                                    <i>
                                        - {y.count && <>{y.count} x </>}{" "}
                                        {y.name}{" "}
                                    </i>
                                </div>
                            ))}
                        </div>
                    ))}

                    {warscroll.battalions.map(x => (
                        <div key={x.id}>
                            <b>{x.battalion.name}</b>
                        </div>
                    ))}

                    <Input
                        type="text"
                        value={this.props.warscrollStore!.link}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        );
    }

    private handleClose = () => this.props.uiStore!.closeExportPopin();
}
