import * as React from "react";
import * as ReactDOM from "react-dom";
import ArmyListBuilder from "./components/army-list-builder";
import OwnedModelsList from "./components/owned-models-list";
import MissingsList from "./components/missings-list";
import Basket from "./components/basket";
import { HashRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import MyNavbar from "./components/my-navbar";
import Popins from "./components/popins";
import { ArmyListWarscrolls } from "./components/army-list-warscrolls";
import { Markers } from "./components/markers";
import Stats from "./components/stats";
import ArmyListText from "./components/army-list-text";
import { Cards } from "./components/cards";
import { CheckList } from "./components/check-list";
import { BattlePlay } from "./components/battle-play";
import pompeiRegular from "./assets/PompeiStd-Regular.woff2";
import pompeiBold from "./assets/PompeiStd-Bold.woff2";
import { createTheme, ThemeProvider } from "@material-ui/core";
const root = document.getElementById("root");

const theme = createTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "@font-face": [
                    {
                        fontFamily: "Pompei",
                        fontWeight: "normal",
                        src: `url(${pompeiRegular}) format('woff2')`
                    },
                    {
                        fontFamily: "Pompei",
                        fontWeight: "bold",
                        src: `url(${pompeiBold}) format('woff2')`
                    }
                ],
                html: {
                    "@media print": {
                        fontSize: "12px"
                    }
                }
            }
        },
        MuiCardHeader: {
            root: {
                paddingBottom: 0
            }
        },
        MuiSvgIcon: {
            root: {
                fontSize: "inherit"
            }
        }
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <HashRouter>
            <Popins />
            <Route
                render={x => (
                    <MyNavbar route={x}>
                        <Switch>
                            <Route
                                exact
                                path="/owned"
                                component={OwnedModelsList}
                            />
                            <Route exact path="/" component={ArmyListBuilder} />
                            <Route
                                exact
                                path="/missing"
                                component={MissingsList}
                            />
                            <Route exact path="/basket" component={Basket} />
                            <Route
                                exact
                                path="/warscroll"
                                component={ArmyListWarscrolls}
                            />
                            <Route exact path="/markers" component={Markers} />
                            <Route exact path="/stats" component={Stats} />
                            <Route
                                exact
                                path="/list"
                                component={ArmyListText}
                            />
                            <Route exact path="/cards" component={Cards} />
                            <Route exact path="/cl" component={CheckList} />
                            <Route
                                exact
                                path="/battle"
                                component={BattlePlay}
                            />
                        </Switch>
                    </MyNavbar>
                )}
            />
        </HashRouter>
    </ThemeProvider>,
    root
);
