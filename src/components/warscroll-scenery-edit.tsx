import * as React from "react";
import { observer, inject } from "mobx-react";
import { WarscrollStore, WarscrollEndlessSpell } from "../stores/warscroll";
import {
    TableRow,
    TableCell,
    Button,
    IconButton,
    Modal
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { observable, action } from "mobx";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { EndlessSpellWarscroll } from "./endless-spell-warscroll";

export interface WarscrollSceneryEditProps {
    scenery: WarscrollEndlessSpell;
    warscrollStore?: WarscrollStore;
}

@inject("warscrollStore")
@observer
export class WarscrollSceneryEdit extends React.Component<
    WarscrollSceneryEditProps,
    {}
> {
    @observable private warscrollOpen: WarscrollEndlessSpell | null = null;
    @action private handleOpenWarscroll = (unit: WarscrollEndlessSpell) =>
        (this.warscrollOpen = unit);
    @action private handleCloseWarscroll = () => (this.warscrollOpen = null);

    render() {
        const scenery = this.props.scenery;
        return (
            <TableRow>
                <TableCell>
                    {scenery.definition.name}
                    <IconButton
                        onClick={() => this.handleOpenWarscroll(scenery)}
                        size="small"
                    >
                        <VisibilityIcon />
                    </IconButton>
                    <Modal
                        open={this.warscrollOpen !== null}
                        onClose={this.handleCloseWarscroll}
                    >
                        <>
                            <EndlessSpellWarscroll wes={this.warscrollOpen} />
                        </>
                    </Modal>
                </TableCell>
                <TableCell>{scenery.definition.points}</TableCell>
                <TableCell>
                    <Button
                        onClick={() =>
                            this.props.warscrollStore!.removeScenery(
                                this.props.scenery
                            )
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </TableCell>
            </TableRow>
        );
    }
}
