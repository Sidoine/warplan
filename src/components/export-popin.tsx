import * as React from "react";
import { observer } from "mobx-react-lite";
import {
    Dialog,
    DialogActions,
    Button,
    DialogContent,
    DialogTitle,
    Input,
} from "@material-ui/core";
import { useStores } from "../stores";

function ExportPopin() {
    const { warscrollStore, uiStore } = useStores();

    const handleClose = React.useCallback(() => uiStore.closeExportPopin(), [
        uiStore,
    ]);
    const warscroll = warscrollStore.warscroll;
    return (
        <Dialog onClose={handleClose} open={true}>
            <DialogTitle>Warscolls</DialogTitle>

            <DialogContent>
                <div>
                    <b>Allegiance: {warscroll.allegiance.name}</b>
                </div>
                {warscroll.units.map((x) => (
                    <div key={x.id}>
                        <b>
                            {x.modelCount > 1 ? <>{x.modelCount} x</> : <></>}{" "}
                            {x.definition.model.name}
                        </b>
                        ({x.points})
                        {x.isGeneral && (
                            <div>
                                <i>- General</i>
                            </div>
                        )}
                        {x.models.map((y) => (
                            <div key={y.id}>
                                <i>
                                    - {y.count && <>{y.count} x </>} {y.name}{" "}
                                </i>
                            </div>
                        ))}
                    </div>
                ))}

                {warscroll.battalions.map((x) => (
                    <div key={x.id}>
                        <b>{x.definition.name}</b>
                    </div>
                ))}

                <Input type="text" value={warscrollStore.link} />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default observer(ExportPopin);
