import * as React from "react";
import * as ReactDOM from "react-dom";
import { WarscrollBuilder } from "./components/warscroll-builder";
import { UnitsStore } from "./stores/units";
import { Provider } from "mobx-react";
import { OwnedModelsList } from "./components/owned-models-list";
import { MissingsList } from "./components/missings-list";
import { Basket } from "./components/basket";
import { HashRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import { MyNavbar } from "./components/my-navbar";
import { UiStore } from "./stores/ui";
import { Popins } from "./components/popins";
import { BasketStore } from "./stores/basket";
import { WarscrollStore } from "./stores/warscroll";
import { OwnedStore } from "./stores/owned";
import { DataStoreImpl } from "./stores/imported-data";
import { Warscroll } from "./components/warscroll";
import { Markers } from "./components/markers";
import "./index.less";
import { MarkersStore } from "./stores/markers";
import { Stats } from "./components/stats";
import { WarscrollView } from "./components/warscroll-view";
import { Cards } from "./components/cards";
import { CardsStore } from "./stores/cards";
import { CheckList } from "./components/check-list";
import { BattlePlay } from "./components/battle-play";
import { BattleStore } from "./stores/battle";

const root = document.getElementById("root");

const dataStore = new DataStoreImpl();
const unitsStore = new UnitsStore(dataStore);
const uiStore = new UiStore(unitsStore);
const warscrollStore = new WarscrollStore(unitsStore);
const ownedStore = new OwnedStore(unitsStore);
const basketStore = new BasketStore(unitsStore, warscrollStore, ownedStore);
const markersStore = new MarkersStore();
const cardsStore = new CardsStore();
const battleStore = new BattleStore(unitsStore);

ReactDOM.render(
    <Provider ownedStore={ownedStore} cardsStore={cardsStore} unitsStore={unitsStore} uiStore={uiStore} basketStore={basketStore} warscrollStore={warscrollStore} markersStore={markersStore} battleStore={battleStore}>
        <HashRouter>
                <Popins/>    
                <Route render={ x => <MyNavbar route={x}>
                <Switch>
                    <Route exact path="/owned" component={OwnedModelsList}/>
                    <Route exact path="/" component={WarscrollBuilder} />
                    <Route exact path="/missing" component={MissingsList}/>
                    <Route exact path="/basket" component={Basket}/>
                    <Route exact path="/warscroll" component={Warscroll} />
                    <Route exact path="/markers" component={Markers}/>
                    <Route exact path="/stats" component={Stats}/>
                    <Route exact path="/list" component={WarscrollView} />
                    <Route exact path="/cards" component={Cards} />
                    <Route exact path="/cl" component={CheckList}/>
                    <Route exact path="/battle" component={BattlePlay}/>
                </Switch>
                </MyNavbar> }/>
                
        </HashRouter>
    </Provider>    
    ,
    root
);