import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollUnitsList } from "./warscroll-units-list";
import { WarscrollBattalionsList } from "./warscroll-battalions-list";
import { WarscrollSummary } from "./warscroll-summary";
import { Button } from "semantic-ui-react";
import { UiStore } from "../stores/ui";
import { Filter } from "./filter";
import { WarscrollSceneriesList } from "./warscroll-sceneries-list";

export interface WarscrollBuilderProps {
    unitsStore?: UnitsStore;
    uiStore?: UiStore;
}

@inject('unitsStore', 'uiStore')
@observer
export class WarscrollBuilder extends React.Component<WarscrollBuilderProps, {}> {
    render() {
        return <>
            <Filter/>    
            <WarscrollSummary/>
            <WarscrollBattalionsList/>
            <WarscrollUnitsList/>
            <WarscrollSceneriesList/>
            <Button onClick={() => this.props.uiStore!.showWarscrollPopin()}>Manage warscrolls</Button>
            <Button onClick={() => this.props.uiStore!.showExportPopin()}>Export</Button>
        </>;
    }
}