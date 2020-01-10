import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { BoxesList } from "./boxes-list";
import { BasketStore } from "../stores/basket";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

export interface MissingsListProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
}


@inject('unitsStore', "basketStore")
@observer
export class MissingsList extends React.Component<MissingsListProps, {}> {
    render() {
        const neededModels = this.props.basketStore!.missingModels;        

        return <div>
            <h1>Missings list</h1>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Count</TableCell>
                    <TableCell>In basket</TableCell>
                    <TableCell>Buy</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            {
                neededModels.map(x => <TableRow key={x.id}>
                    <TableCell>{x.model.name}</TableCell>
                    <TableCell>{x.count}</TableCell>
                    <TableCell>{x.inBasket}</TableCell>
                    <TableCell><BoxesList model={x.model} title="Buy" /></TableCell>
                </TableRow>)
            }
                </TableBody>
            </Table>
            </div>;
    }
}