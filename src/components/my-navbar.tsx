import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { BasketStore } from "../stores/basket";
import { WarscrollStore } from "../stores/warscroll";
import { Label, Menu } from 'semantic-ui-react';
import "./my-navbar.less";

export interface MyNavbarProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
    route: RouteComponentProps<any>;
    warscrollStore?: WarscrollStore;
}

@inject("unitsStore", "basketStore", "warscrollStore")
@observer
export class MyNavbar extends React.Component<MyNavbarProps, {}> {
    render() {
        const pathname = this.props.route.location.pathname;
        return <Menu className="my-navbar">
            <Menu.Item active={pathname === "/"} href="#/">Owned</Menu.Item>
            <Menu.Item active={pathname === "/wb"}  href="#/wb">Warscroll Builder <Label>{ this.props.warscrollStore!.warscroll.totalPoints }</Label></Menu.Item>
            <Menu.Item active={pathname === "/missing"}  href="#/missing">Missing <Label>{ this.props.basketStore!.missingModels.filter(x => x.inBasket < x.count).length }</Label></Menu.Item>
            <Menu.Item active={pathname === "/basket"}  href="#/basket">Basket { this.props.basketStore!.basket.length > 0 && <Label>{ this.props.basketStore!.basket.length }</Label> }</Menu.Item>
            <Menu.Item active={pathname === "/warscroll"} href="#/warscroll">Warscroll</Menu.Item>
            <Menu.Item active={pathname === "/markers"}  href="#/markers">Markers</Menu.Item>
        </Menu>
    }
}