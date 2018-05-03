import { observable, action, computed } from "mobx";
import { GrandAlliance, UnitsStore, getUnitStats, UnitStats } from "./units";

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
    get unitStats() {
        const result: UnitStats[] = [];
        for (const unit of this.units) {
            const stats = getUnitStats(unit);
            for (const stat of stats) {
                result.push(stat);
            }
        }
        return result;
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