import * as React from "react";
import * as ReactDOM from "react-dom";
import ArmyListBuilder from "./components/army-list-builder";
import OwnedModelsList from "./components/owned-models-list";
import MissingsList from "./components/missings-list";
import Basket from "./components/basket";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import MyNavbar from "./components/my-navbar";
import Popins from "./components/popins";
import { ArmyListWarscrolls } from "./components/army-list-warscrolls";
import { Markers } from "./components/markers";
import Stats from "./components/stats";
import ArmyListText from "./components/army-list-text";
import { Cards } from "./components/cards";
import { CheckList } from "./components/check-list";
import { BattlePlay } from "./components/battle-play";
import {
    createTheme,
    ThemeProvider,
    Theme,
    StyledEngineProvider,
} from "@mui/material";
import { AbilityList } from "./components/ability-list";
import {
    AuthorizeProvider,
    ApiAuthorizationRoutes,
    ProviderList,
} from "folke-service-helpers";
import { ArmyListStoreProvider } from "./stores/army-list";
import { DataStoreProvider } from "./stores/data";
import { MarkersStoreProvider } from "./stores/markers";
import { UiStoreProvider } from "./stores/ui";
import { CardsStoreProvider } from "./stores/cards";
import { OwnedStoreProvider } from "./stores/owned";
import { BasketStoreProvider } from "./stores/basket";
import { BattleStoreProvider } from "./stores/battle";
import { ArmyListsStoreProvider } from "./stores/army-lists";

declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

const root = document.getElementById("root");

const theme = createTheme();

ReactDOM.render(
    <BrowserRouter>
        <AuthorizeProvider applicationName="warplan">
            <ProviderList
                providers={[
                    DataStoreProvider,
                    UiStoreProvider,
                    ArmyListStoreProvider,
                    ArmyListsStoreProvider,
                    MarkersStoreProvider,
                    CardsStoreProvider,
                    OwnedStoreProvider,
                    BasketStoreProvider,
                    BattleStoreProvider,
                ]}
            >
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <Popins />
                        <Routes>
                            <Route path="/" element={<MyNavbar />}>
                                <Route
                                    path="owned"
                                    element={<OwnedModelsList />}
                                />
                                <Route index element={<ArmyListBuilder />} />
                                <Route
                                    path="missing"
                                    element={<MissingsList />}
                                />
                                <Route path="basket" element={<Basket />} />
                                <Route
                                    path="warscroll"
                                    element={<ArmyListWarscrolls />}
                                />
                                <Route path="markers" element={<Markers />} />
                                <Route path="stats" element={<Stats />} />
                                <Route path="list" element={<ArmyListText />} />
                                <Route path="cards" element={<Cards />} />
                                <Route path="cl" element={<CheckList />} />
                                <Route path="battle" element={<BattlePlay />} />
                                <Route
                                    path="abilities"
                                    element={<AbilityList />}
                                />
                                <Route
                                    path="authentication/*"
                                    element={<ApiAuthorizationRoutes />}
                                />
                            </Route>
                        </Routes>
                    </ThemeProvider>
                </StyledEngineProvider>
            </ProviderList>
        </AuthorizeProvider>
    </BrowserRouter>,
    root
);
