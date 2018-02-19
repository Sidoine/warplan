import { UiStore } from "../stores/ui";
import React = require("react");
import { inject, observer } from "mobx-react";
import { BasketPopin } from "./basket-popin";

export interface PopinsProps {
    uiStore?: UiStore;
}

@inject("uiStore")
@observer    
export class Popins extends React.Component<PopinsProps, {}> {
    render() {
        return <>
            { this.props.uiStore!.basketPopin && <BasketPopin/> }   
        </>;
    }
}