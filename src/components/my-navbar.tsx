import * as React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { UnitsStore } from "../stores/units";

export interface MyNavbarProps {
    unitsStore?: UnitsStore;
}

export class MyNavbar extends React.Component<MyNavbarProps, {}> {
    render() {
        return <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>Warhammer</Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="#/">Owned</NavItem>
                            <NavItem href="#/warscroll">Warscroll</NavItem>
                            <NavItem href="#/missing">Missing</NavItem>
                            <NavItem href="#/basket">Basket</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    }
}