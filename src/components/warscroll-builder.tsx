import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollUnitsList } from "./warscroll-units-list";
import { WarscrollBattalionsList } from "./warscroll-battalions-list";
import { WarscrollSummary } from "./warscroll-summary";
import { Button } from "semantic-ui-react";
import { UiStore } from "../stores/ui";

export interface WarscrollBuilderProps {
    unitsStore?: UnitsStore;
    uiStore?: UiStore;
}

@inject('unitsStore', 'uiStore')
@observer
export class WarscrollBuilder extends React.Component<WarscrollBuilderProps, {}> {
    render() {
        return <>
            <WarscrollSummary/>
            <WarscrollBattalionsList/>
            <WarscrollUnitsList/>
            <Button onClick={() => this.props.uiStore!.showWarscrollPopin()}>Manage warscrolls</Button>
        </>;
    }
}