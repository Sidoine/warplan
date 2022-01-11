import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router";
import { List, ListItem, Badge } from "@mui/material";
import { ResponsiveDrawer } from "./responsive-drawer";
import { getPhaseName, useBattleStore } from "../stores/battle";
import { Link } from "react-router-dom";
import { useArmyListStore } from "../stores/army-list";
import { useBasketStore } from "../stores/basket";

export interface MyNavbarProps {}

interface MenuItem {
    title: string;
    badge?: number;
    path: string;
}

function MyDrawer({
    pathName,
    columns,
}: {
    pathName: string;
    columns: MenuItem[];
}) {
    return (
        <List>
            {columns.map((x) => (
                <ListItem
                    key={x.path}
                    component={Link}
                    selected={pathName === `/${x.path}`}
                    to={`/${x.path}`}
                >
                    {x.badge !== undefined && x.badge > 0 && (
                        <Badge
                            color="primary"
                            badgeContent={x.badge}
                            max={9999}
                        >
                            {x.title}
                        </Badge>
                    )}
                    {!x.badge && x.title}
                </ListItem>
            ))}
        </List>
    );
}

function MyNavbar({}: MyNavbarProps) {
    const location = useLocation();
    const pathname = location.pathname;
    const warscrollStore = useArmyListStore();
    const battleStore = useBattleStore();
    const basketStore = useBasketStore();
    const state = useLocalObservable(() => ({
        get columns(): MenuItem[] {
            return [
                {
                    title: "List Builder",
                    badge: warscrollStore.totalPoints,
                    path: "",
                },
                { title: "Warscrolls", path: "warscroll" },
                {
                    title: getPhaseName(battleStore.phase),
                    path: "battle",
                },
                { title: "List", path: "list" },
                { title: "Cards", path: "cards" },
                { title: "Markers", path: "markers" },
                { title: "Statistics", path: "stats" },
                { title: "Checklist", path: "cl" },
                { title: "Owned", path: "owned" },
                {
                    title: "Missing",
                    path: "missing",
                    badge: basketStore.missingModels.filter(
                        (x) => x.inBasket < x.count
                    ).length,
                },
                {
                    title: "Basket",
                    path: "basket",
                    badge: basketStore.basket.length,
                },
                { title: "Abilities", path: "abilities" },
            ];
        },
    }));
    const title =
        state.columns.find((x) => `/${x.path}` === pathname)?.title ??
        "Warplan";
    return (
        <ResponsiveDrawer
            title={title}
            menu={<MyDrawer columns={state.columns} pathName={pathname} />}
        >
            <Outlet />
        </ResponsiveDrawer>
    );
}

export default observer(MyNavbar);
