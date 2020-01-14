import * as React from "react";
import { observer, inject } from "mobx-react";
import { BattalionsList } from "./battalions-list";
import { WarscrollStore, WarscrollBattalion } from "../stores/warscroll";
import { BattalionUnit } from "../stores/units";
import { join } from "../helpers/react";
import { Button, Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import { ResponsiveTableColumn, ResponsiveTable } from "../atoms/responsive-table";
import { computed } from "mobx";
import ClearIcon from '@material-ui/icons/Clear';
export interface WarscrollBattalionsListProps {
    warscrollStore?: WarscrollStore;
}

@inject('warscrollStore')
@observer
export class WarscrollBattalionsList extends React.Component<WarscrollBattalionsListProps, {}> {
    @computed
    get columns(): ResponsiveTableColumn<WarscrollBattalion>[] {
        const counts = new Map<string, { count: number }>();
        return [
            {
                name: "Name",
                text: x => x.battalion.name,
            }, {
                name: "Units",
                text: x => join(x.battalion.units.map(y => this.renderUnit(y, counts)), ", ")
            }, {
                name: "Points",
                text: x => x.battalion.points
            }, {
                name: "Actions",
                text: x => <Button onClick={() => this.props.warscrollStore!.removeBattalion(x)}><ClearIcon/></Button>
            }
        ];    
    }

    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        
        return <Card>
            <CardHeader title="Battalions" />
            <CardContent>
                <ResponsiveTable rows={warscroll.battalions} columns={this.columns}></ResponsiveTable>
            </CardContent>
            <CardActions>
                <span>{warscroll.battalionsPoints} points</span>
                <BattalionsList title="Add..."/>
            </CardActions>
            </Card>;
    }

    private renderUnit(bu: BattalionUnit, counts: Map<string, { count: number }>) {
        const countsBu = counts.get(bu.id);
        if (countsBu !== undefined){
            const count = countsBu.count;
            if (count > 0) {
              //  return <span style={{ color:  'red' } } key={bu.id}>{ bu.count} { join(bu.units.map(x => <a key={x.id} href="" onClick={e => this.addUnit(x, e, count)}>{x.model.name}</a>), "/") } </span>;
              return <span style={{ color:  'red' } } key={bu.id}>{ bu.countMin} { bu.countMax !== bu.countMin && ` - ${bu.countMax} `} { bu.units.map(x => x.join(', ')).join("/") } </span>;
            }
        }

        return <span key={bu.id}>{ bu.countMin} { bu.countMax !== bu.countMin && ` - ${bu.countMax} `} { bu.units.map(x => x.join('/')).join(" or ") } </span>;
    }

    // private addUnit(unit: Unit, e: React.MouseEvent<HTMLAnchorElement>, count: number) {
    //     e.preventDefault();
    //     for (let i = 0; i< count; i++) {
    //         this.props.warscrollStore!.addUnit(unit);   
    //     }
    // }
}