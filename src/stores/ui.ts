import { observable, action, computed } from "mobx";
import { GrandAlliance, UnitsStore } from "./units";

export class UiStore {
    constructor(private unitsStore: UnitsStore) {
    }

    @observable
    basketPopin: boolean = false;

    @observable
    warscrollPopin: boolean = false;

    @observable
    grandAlliance: GrandAlliance = GrandAlliance.order;

    @observable
    faction = this.unitsStore.factions["STORMCASTETERNALS"];

    @action
    setFaction(factionId: string) {
        this.faction = this.faction;
    }

    @computed
    get units() {
        return this.unitsStore.unitList.filter(x => x.factions.some(x => x.id === this.faction.id));
    }

    @computed
    get battalions() {
        return this.unitsStore.battalions.filter(x => x.factions.some(x => x.id === this.faction.id));
    }

    @action
    showWarscrollPopin() {
        this.warscrollPopin = true;
    }

    @action
    closeWarscrollPopin() {
        this.warscrollPopin = false;
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