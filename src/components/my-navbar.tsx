import * as React from "react";
import { Navbar, Nav, NavItem, Badge } from "react-bootstrap";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { BasketStore } from "../stores/basket";
import { WarscrollStore } from "../stores/warscroll";

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
        return <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>Warhammer</Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav activeHref={`#${this.props.route.location.pathname}`} >
                            <NavItem href="#/">Owned</NavItem>
                            <NavItem href="#/warscroll">Warscroll <Badge>{ this.props.warscrollStore!.warscroll.totalPoints }</Badge></NavItem>
                            <NavItem href="#/missing">Missing <Badge>{ this.props.basketStore!.missingModels.filter(x => x.inBasket < x.count).length }</Badge></NavItem>
                            <NavItem href="#/basket">Basket { this.props.basketStore!.basket.length > 0 && <Badge>{ this.props.basketStore!.basket.length }</Badge> }</NavItem>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
    }
}