import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { BasketStore } from "../stores/basket";
import { WarscrollStore } from "../stores/warscroll";
import { Label, Menu, Sidebar, Container, Button, Icon } from 'semantic-ui-react';
import "./my-navbar.less";
import { observable, action } from "mobx";

export interface MyNavbarProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
    route: RouteComponentProps<any>;
    warscrollStore?: WarscrollStore;
}

@inject("unitsStore", "basketStore", "warscrollStore")
@observer
export class MyNavbar extends React.Component<MyNavbarProps, {}> {
    @observable
    private visibleSidebar = true;

    // @action
    // private handleHideSidebar = () => {
    //     this.visibleSidebar = false;
    // }

    @action
    private handleBurgerClick = () => {
        this.visibleSidebar = true;
    }

    render() {
        const pathname = this.props.route.location.pathname;
        return <Sidebar.Pushable>
            <Sidebar as={Menu} visible={this.visibleSidebar} inverted vertical width="thin"> 
            {/* { onHide={this.handleHideSidebar}} */}
            
            <Menu.Item active={pathname === "/wb"}  href="#/wb">Warscroll Builder <Label>{ this.props.warscrollStore!.warscroll.totalPoints }</Label></Menu.Item>
            <Menu.Item active={pathname === "/warscroll"} href="#/warscroll">Warscroll</Menu.Item>
            <Menu.Item active={pathname === "/battle"} href="#/battle">Battle</Menu.Item>
            <Menu.Item active={pathname === "/list"} href="#/list">List</Menu.Item>
            <Menu.Item active={pathname === "/cards"}  href="#/cards">Cards</Menu.Item>
            <Menu.Item active={pathname === "/markers"}  href="#/markers">Markers</Menu.Item>
            <Menu.Item active={pathname === "/stats"}  href="#/stats">Stats</Menu.Item>
            <Menu.Item active={pathname === "/cl"} href="#/cl">Checklist</Menu.Item>
            <Menu.Item active={pathname === "/"} href="#/">Owned</Menu.Item>
            <Menu.Item active={pathname === "/missing"}  href="#/missing">Missing <Label>{ this.props.basketStore!.missingModels.filter(x => x.inBasket < x.count).length }</Label></Menu.Item>
            <Menu.Item active={pathname === "/basket"}  href="#/basket">Basket { this.props.basketStore!.basket.length > 0 && <Label>{ this.props.basketStore!.basket.length }</Label> }</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
            <Container className="my-navbar__container">
                {!this.visibleSidebar && <Button onClick={this.handleBurgerClick}><Icon name="bars"/></Button>}
            {this.props.children}
            </Container>
        </Sidebar.Pusher>
        </Sidebar.Pushable> ;
    }
}