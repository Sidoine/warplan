import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { OwnedStore } from "../stores/owned";
import { Dropdown, DropdownProps } from "semantic-ui-react";

export interface ModelsListProps {
    unitsStore?: UnitsStore;
    title: string;
    ownedStore?: OwnedStore;
}

@inject('unitsStore', "ownedStore")
@observer
export class ModelsList extends React.Component<ModelsListProps, {}> {
    render() {
        const options = this.props.unitsStore!.modelsList.map(x => { return { key: x.id, text: x.name, value: x.id } });
        return <Dropdown text={this.props.title} search selection options={options} onChange={this.onChange}>
          </Dropdown>;    
    }

    private onChange = (event: React.SyntheticEvent<HTMLElement>, props: DropdownProps) => {
        const model  = this.props.unitsStore!.modelsList.find(x => x.id === props.value);
        if (model) this.props.ownedStore!.addOwned(model);
    }
}