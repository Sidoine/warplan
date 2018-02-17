import * as React from "react";
import { UnitsStore, Model } from "../stores/units";
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
                    this.props.unitsStore!.modelsList.map(x => <MenuItem key={x.id} onClick={() => this.addModel(x)}>{x.name}</MenuItem>)
                }
            </DropdownButton>;
    }

    private addModel(model: Model) {
        this.props.unitsStore!.ownedModels.push({
            model: model,
            count: 1,
            id: this.props.unitsStore!.serial++
        });
    }
}