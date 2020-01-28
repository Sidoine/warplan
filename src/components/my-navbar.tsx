import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { BasketStore } from "../stores/basket";
import { WarscrollStore } from "../stores/warscroll";
import { List,ListItem, Badge } from "@material-ui/core";
import { ResponsiveDrawer } from "./responsive-drawer";
import { computed } from "mobx";
import { BattleStore, getPhaseName } from "../stores/battle";

export interface MyNavbarProps {
    unitsStore?: UnitsStore;
    basketStore?: BasketStore;
    route: RouteComponentProps<any>;
    warscrollStore?: WarscrollStore;
    battleStore?: BattleStore;
}

interface MenuItem {
    title: string;
    badge?: number;
    path: string;
}

@inject("unitsStore", "basketStore", "warscrollStore", "battleStore")
@observer
export class MyNavbar extends React.Component<MyNavbarProps, {}> {

    @computed
    private get columns() :MenuItem[] {
        return [
            { title: "Warscroll Builder", badge: this.props.warscrollStore!.warscroll.totalPoints, path: '' },
            { title: "Warscrolls", path: "warscroll"},
            { title: getPhaseName(this.props.battleStore!.phase), path: "battle"},
            { title: "List", path: "list"},
            { title: "Cards", path: "cards"},
            { title: 'Markers', path: 'markers'},
            { title: "Statistics", path: "stats"},
            { title: "Checklist", path: "cl"},
            { title: "Owned", path: "owned"},
            { title: "Missing", path: "missing", badge: this.props.basketStore!.missingModels.filter(x => x.inBasket < x.count).length },
            {title: "Basket", path: "basket", badge: this.props.basketStore!.basket.length }
        ]
    }

    private renderDrawer() {
        const pathname = this.props.route.location.pathname;
        return <List>
            {this.columns.map(x => <ListItem key={x.path} component="a" button selected={pathname === `/${x.path}`} href={`#/${x.path}`}>
                {x.badge !== undefined && x.badge > 0 && <Badge color="primary" badgeContent={x.badge} max={9999} >{x.title}</Badge>}
                {!x.badge && x.title}
            </ListItem>)}
        </List>;
    }

    render() {
        const pathname = this.props.route.location.pathname;
        const title = this.columns.find(x => `/${x.path}` === pathname)?.title ?? "Warplan";
        return <ResponsiveDrawer title={title} menu={this.renderDrawer()}>
                {this.props.children}
                </ResponsiveDrawer>;
        
    }
}