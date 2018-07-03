import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollStore } from "../stores/warscroll";
import { Table } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { WarscrollSceneryEdit } from "./warscroll-scenery-edit";
import { SceneriesList } from "./sceneries-list";

export interface WarscrollSceneriesListProps {
    unitsStore?: UnitsStore;
    warscrollStore?: WarscrollStore;
}

@inject('unitsStore', "warscrollStore")
@observer
export class WarscrollSceneriesList extends React.Component<WarscrollSceneriesListProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        return <div>
            <Header>Endless spells</Header>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Points</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>    
                    </Table.Row>
                </Table.Header>
                <Table.Body>
            {
                warscroll.sceneries.map(x => <WarscrollSceneryEdit key={x.id} scenery={x}/>)
            }
                </Table.Body>
            </Table>
            <div>
                <span>{warscroll.unitsPoints} points</span>
                <SceneriesList title="Add..."/>
            </div>
            </div>;
    }
}