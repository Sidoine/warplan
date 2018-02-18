import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { DropdownButton, MenuItem } from "react-bootstrap";

export interface ModelsListProps {
    unitsStore?: UnitsStore;
    title: string;
}

@inject('unitsStore')
@observer
export class ModelsList extends React.Component<ModelsListProps, {}> {
    render() {
        return <DropdownButton title={this.props.title} id="units">
                {
                    this.props.unitsStore!.modelsList.map(x => <MenuItem key={x.id} onClick={() => this.props.unitsStore!.addOwned(x)}>{x.name}</MenuItem>)
                }
            </DropdownButton>;
    }

}