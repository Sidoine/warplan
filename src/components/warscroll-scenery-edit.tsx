import * as React from "react";
import { observer, inject } from "mobx-react";
import { WarscrollStore, WarscrollScenery } from "../stores/warscroll";
import { TableRow, TableCell, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export interface WarscrollSceneryEditProps {
    scenery: WarscrollScenery;
    warscrollStore?: WarscrollStore;
}

@inject("warscrollStore")
@observer
export class WarscrollSceneryEdit extends React.Component<
    WarscrollSceneryEditProps,
    {}
> {
    render() {
        const scenery = this.props.scenery;
        return (
            <TableRow>
                <TableCell>{scenery.scenery.name}</TableCell>
                <TableCell>{scenery.scenery.points}</TableCell>
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
