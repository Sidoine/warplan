import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { BasketStore } from "../stores/basket";
import { WarscrollStore } from "../stores/warscroll";
import "./my-navbar.less";
import { List,ListItem, Badge } from "@material-ui/core";
import { ResponsiveDrawer } from "./responsive-drawer";

export interface MyNavbarProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
    route: RouteComponentProps<any>;
    warscrollStore?: WarscrollStore;
}

@inject("unitsStore", "basketStore", "warscrollStore")
@observer
export class MyNavbar extends React.Component<MyNavbarProps, {}> {
    private renderDrawer() {
        const pathname = this.props.route.location.pathname;
        return <List>
        <ListItem component="a" button selected={pathname === "/wb"}  href="#/wb"><Badge color="primary" badgeContent={ this.props.warscrollStore!.warscroll.totalPoints } max={9999}>Warscroll Builder </Badge></ListItem>
        <ListItem component="a" button selected={pathname === "/warscroll"} href="#/warscroll">Warscroll</ListItem>
        <ListItem component="a" button selected={pathname === "/battle"} href="#/battle">Battle</ListItem>
        <ListItem component="a" button selected={pathname === "/list"} href="#/list">List</ListItem>
        <ListItem component="a" button selected={pathname === "/cards"}  href="#/cards">Cards</ListItem>
        <ListItem component="a" button selected={pathname === "/markers"}  href="#/markers">Markers</ListItem>
        <ListItem component="a" button selected={pathname === "/stats"}  href="#/stats">Stats</ListItem>
        <ListItem component="a" button selected={pathname === "/cl"} href="#/cl">Checklist</ListItem>
        <ListItem component="a" button selected={pathname === "/"} href="#/">Owned</ListItem>
        <ListItem component="a" button selected={pathname === "/missing"}  href="#/missing"><Badge color="primary" badgeContent={ this.props.basketStore!.missingModels.filter(x => x.inBasket < x.count).length }>Missing </Badge></ListItem>
        <ListItem component="a" button selected={pathname === "/basket"}  href="#/basket"><Badge  color="primary" badgeContent={ this.props.basketStore!.basket.length }>Basket</Badge></ListItem>
        </List>;
    }

    render() {
        return  <ResponsiveDrawer menu={this.renderDrawer()}>
                {this.props.children}
                </ResponsiveDrawer>
        ;
        
    }
}