import * as React from "react";
import { observer } from "mobx-react-lite";
import {
    Dialog,
    DialogActions,
    Button,
    DialogContent,
    DialogTitle,
    Input,
} from "@mui/material";
import { useArmyListStore } from "../stores/army-list";
import { useUiStore } from "../stores/ui";

function ExportPopin() {
    const warscroll = useArmyListStore();
    const uiStore = useUiStore();

    const handleClose = React.useCallback(
        () => uiStore.closeExportPopin(),
        [uiStore]
    );
    return (
        <Dialog onClose={handleClose} open={true}>
            <DialogTitle>Warscrolls</DialogTitle>

            <DialogContent>
                {warscroll.allegiance && (
                    <div>
                        <b>Allegiance: {warscroll.allegiance.name}</b>
                    </div>
                )}
                {warscroll.armyType && (
                    <div>
                        <b>Army Type : {warscroll.armyType.name}</b>
                    </div>
                )}
                {warscroll.subFaction && (
                    <div>
                        <b>Sub-faction : {warscroll.subFaction.name}</b>
                    </div>
                )}
                {warscroll.realm && (
                    <div>
                        <b>Realm: {warscroll.realm.name}</b>
                    </div>
                )}
                {warscroll.units.map((x) => (
                    <div key={x.id}>
                        <b>
                            {x.modelCount > 1 ? <>{x.modelCount} x</> : <></>}{" "}
                            {x.definition.name}
                        </b>{" "}
                        ({x.points})
                        {x.isGeneral && (
                            <div>
                                <i>- General</i>
                            </div>
                        )}
                        {x.models
                            .filter((y) => y.options.length > 0)
                            .map((y) => (
                                <div key={y.id}>
                                    <i>
                                        - {y.count && <>{y.count} x </>}{" "}
                                        {y.name}
                                    </i>
                                </div>
                            ))}
                        {x.extraAbilities.map((y) => (
                            <div key={y.id}>
                                <i>- {y.name}</i>
                            </div>
                        ))}
                    </div>
                ))}

                {warscroll.battalions.map((x) => (
                    <div key={x.id}>
                        <b>{x.definition.name}</b>
                    </div>
                ))}

                <Input type="text" value={warscroll.link} />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default observer(ExportPopin);
