import * as React from "react";
import { Navbar, Nav, NavItem, Badge } from "react-bootstrap";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from "react-router";

export interface MyNavbarProps {
    unitsStore?: UnitsStore;
    route: RouteComponentProps<any>;
}

@inject("unitsStore")
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
                            <NavItem href="#/warscroll">Warscroll <Badge>{ this.props.unitsStore!.warscroll.totalPoints }</Badge></NavItem>
                            <NavItem href="#/missing">Missing <Badge>{ this.props.unitsStore!.missingModels.length }</Badge></NavItem>
                            <NavItem href="#/basket">Basket</NavItem>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
    }
}