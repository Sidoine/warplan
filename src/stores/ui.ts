import { observable, action, computed } from "mobx";
import { GrandAlliance, UnitsStore } from "./units";

export class UiStore {
    constructor(private unitsStore: UnitsStore) {
    }

    @observable
    basketPopin: boolean = false;

    @observable
    grandAlliance: GrandAlliance = GrandAlliance.order;

    @observable
    faction = this.unitsStore.factions.find(x => x.id === "STORMCASTETERNALS")!;

    @action
    setFaction(factionId: string) {
        this.faction = this.faction;
    }

    @computed
    get units() {
        return this.unitsStore.unitList.filter(x => x.factions.indexOf(this.faction) >= 0);
    }

    @action
    showBasketPopin() {
        this.basketPopin = true;
    }

    @action
    closeBasketPopin() {
        this.basketPopin = false;
    }
}