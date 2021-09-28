import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { RouteComponentProps } from "react-router";
import { List, ListItem, Badge } from "@material-ui/core";
import { ResponsiveDrawer } from "./responsive-drawer";
import { getPhaseName } from "../stores/battle";
import { useStores } from "../stores";

export interface MyNavbarProps {
    route: RouteComponentProps<{}>;
    children: React.ReactNode;
}

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
                    component="a"
                    button
                    selected={pathName === `/${x.path}`}
                    href={`#/${x.path}`}
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

function MyNavbar({ route, children }: MyNavbarProps) {
    const pathname = route.location.pathname;
    const { armyListStore: warscrollStore, battleStore, basketStore } = useStores();
    const state = useLocalObservable(() => ({
        get columns(): MenuItem[] {
            return [
                {
                    title: "List Builder",
                    badge: warscrollStore.warscroll.totalPoints,
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
            {children}
        </ResponsiveDrawer>
    );
}

export default observer(MyNavbar);
