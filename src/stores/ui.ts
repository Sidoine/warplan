import { observable, action, computed } from "mobx";
import { GrandAlliance, UnitsStore, getUnitStats, UnitStats } from "./units";

interface SerializedUi {
    grandAlliance: GrandAlliance;
    faction: string;
    keywordFilter?: string;
}

export class UiStore {

    @observable
    keywordFilter = "";    

    @observable
    basketPopin: boolean = false;

    @observable
    warscrollPopin: boolean = false;

    @observable
    exportPopin: boolean = false;

    @observable
    grandAlliance: GrandAlliance = GrandAlliance.order;

    @observable
    faction = this.unitsStore.factionsList[0];

    @computed
    get units() {
        const keywordFilter = this.keywordFilter.toUpperCase();
        if (keywordFilter.length > 2) {
            const grandAlliance = this.grandAlliance;
            return this.unitsStore.unitList.filter(x => x.factions.some(x => x.grandAlliance === grandAlliance) && (x.model.name.toUpperCase().indexOf(keywordFilter) >= 0 || x.keywords.some(x => x.indexOf(keywordFilter) >= 0)));
        }
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
        return this.unitsStore.battalions.filter(x => x.allegiance.grandAlliance === this.grandAlliance);
    }

    constructor(private unitsStore: UnitsStore) {
        const ui: string | null = localStorage.getItem('ui');
        if (ui) {
            const serialized: SerializedUi = JSON.parse(ui);
            this.grandAlliance = serialized.grandAlliance;
            const faction = this.unitsStore.factions[serialized.faction];
            if (faction) {
                this.faction = faction;
            }
            this.keywordFilter = serialized.keywordFilter || "";
        }
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
    showExportPopin() {
        this.exportPopin = true;
    }

    @action
    closeExportPopin() {
        this.exportPopin = false;
    }

    @action
    showBasketPopin() {
        this.basketPopin = true;
    }

    @action
    closeBasketPopin() {
        this.basketPopin = false;
    }
    
    @action
    setKeywordFilter(keyword: string) {
        this.keywordFilter = keyword;
        this.saveUi();
    }

    @action
    setFaction(factionId: string) {
        const faction = this.unitsStore!.factions[factionId]
        if (faction) {
            this.faction = faction;
            this.keywordFilter = "";
            this.saveUi();
        }
    }
    
    @action
    setGrandAlliance(grandAlliance: GrandAlliance) {
        this.grandAlliance = grandAlliance;
        this.saveUi();
    }

    private saveUi() {
        const serialized: SerializedUi = {
            faction: this.faction.id,
            grandAlliance: this.grandAlliance,
            keywordFilter: this.keywordFilter
        }
        localStorage.setItem('ui', JSON.stringify(serialized));
    }
}