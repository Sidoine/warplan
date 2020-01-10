import * as React from "react";
import { UnitsStore, Model } from "../stores/units";
import { observer, inject } from "mobx-react";
import { OwnedStore } from "../stores/owned";
import { AddButton } from "./dropdown-list";

export interface ModelsListProps {
    unitsStore?: UnitsStore;
    title: string;
    ownedStore?: OwnedStore;
}

@inject('unitsStore', "ownedStore")
@observer
export class ModelsList extends React.Component<ModelsListProps, {}> {
    render() {
        return <AddButton placeholder={this.props.title} options={this.props.unitsStore!.modelsList} onChange={this.onChange}/>;    
    }

    private onChange = (model: Model) => {
        this.props.ownedStore!.addOwned(model);
    }
}