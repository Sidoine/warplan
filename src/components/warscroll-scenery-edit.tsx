import * as React from "react";
import { observer, inject } from "mobx-react";
import { WarscrollStore, WarscrollScenery } from "../stores/warscroll";
import { Button, Table, Icon } from "semantic-ui-react";

export interface WarscrollSceneryEditProps {
    scenery: WarscrollScenery;
    warscrollStore?: WarscrollStore;
}

@inject("warscrollStore")
@observer
export class WarscrollSceneryEdit extends React.Component<WarscrollSceneryEditProps, {}> {
    render() {
        const scenery = this.props.scenery;
                return <Table.Row>
            <Table.Cell>{scenery.scenery.name}</Table.Cell>
            <Table.Cell>{scenery.scenery.points}</Table.Cell>
            <Table.Cell>
                <Button onClick={() => this.props.warscrollStore!.removeScenery(this.props.scenery)}><Icon name="remove"/></Button>
            </Table.Cell></Table.Row>;
    }
}