import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { BoxesList } from "./boxes-list";
import { BasketStore, Missing } from "../stores/basket";
import { ResponsiveTableColumn, ResponsiveTable } from "../atoms/responsive-table";

export interface MissingsListProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
}

const columns: ResponsiveTableColumn<Missing>[] = [
    {
        name: 'Name',
        text: x => x.model.name
    }, {
        name: 'Count',
        text: x => x.count
    }, {
        name: 'In basket',
        text: x => x.inBasket
    }, {
        name: 'Buy',
        text: x => <BoxesList model={x.model} title="Buy" />
    }
]

@inject('unitsStore', "basketStore")
@observer
export class MissingsList extends React.Component<MissingsListProps, {}> {
    render() {
        const neededModels = this.props.basketStore!.missingModels;        

        return <ResponsiveTable columns={columns} rows={neededModels}/>;
    }
}