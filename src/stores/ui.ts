import { observable, action, computed, makeObservable } from "mobx";
import { GrandAlliance, UnitsStore } from "./units";
import { UnitStats, getUnitStats } from "./stats";

interface SerializedUi {
    grandAlliance: GrandAlliance;
    faction: string;
    keywordFilter?: string;
    enemySave?: number;
    enemyKeywords?: string;
    enemyCharged?: boolean;
}

export interface Enemy {
    save: number;
    keywords: string;
    charged: boolean;
}

export class UiStore {
    @observable
    keywordFilter = "";

    @observable
    basketPopin = false;

    @observable
    warscrollPopin = false;

    @observable
    exportPopin = false;

    @observable
    grandAlliance: GrandAlliance = GrandAlliance.order;

    @observable
    faction = this.unitsStore.factionsList[0];

    @computed
    get units() {
        const keywordFilter = this.keywordFilter.toUpperCase();
        if (keywordFilter.length > 2) {
            const grandAlliance = this.grandAlliance;
            return this.unitsStore.unitList.filter(
                (x) =>
                    x.factions.some((x) => x.grandAlliance === grandAlliance) &&
                    (x.model.name.toUpperCase().indexOf(keywordFilter) >= 0 ||
                        x.keywords.some((x) => x.indexOf(keywordFilter) >= 0))
            );
        }
        return this.unitsStore.unitList.filter((x) =>
            x.factions.some((x) => x.id === this.faction.id)
        );
    }

    @observable enemy: Enemy = { save: 5, keywords: "", charged: false };

    @computed
    get unitStats() {
        const result: UnitStats[] = [];
        for (const unit of this.units) {
            const stats = getUnitStats(unit, this.enemy);
            for (const stat of stats) {
                result.push(stat);
            }
        }
        return result;
    }

    @action
    setEnemy<T extends keyof Enemy>(key: T, value: Enemy[T]) {
        this.enemy[key] = value;
        this.saveUi();
    }

    constructor(private unitsStore: UnitsStore) {
        makeObservable(this);
        const ui: string | null = localStorage.getItem("ui");
        if (ui) {
            const serialized: SerializedUi = JSON.parse(ui);
            this.grandAlliance = serialized.grandAlliance;
            const faction = this.unitsStore.factions[serialized.faction];
            if (faction) {
                this.faction = faction;
            }
            this.keywordFilter = serialized.keywordFilter || "";
            if (serialized.enemySave) this.enemy.save = serialized.enemySave;
            if (serialized.enemyKeywords)
                this.enemy.keywords = serialized.enemyKeywords;
            if (serialized.enemyCharged)
                this.enemy.charged = serialized.enemyCharged;
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
    showBasketPopin = () => {
        this.basketPopin = true;
    };

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
        const faction = this.unitsStore!.factions[factionId];
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
            keywordFilter: this.keywordFilter,
            enemyKeywords: this.enemy.keywords,
            enemySave: this.enemy.save,
            enemyCharged: this.enemy.charged,
        };
        localStorage.setItem("ui", JSON.stringify(serialized));
    }
}
