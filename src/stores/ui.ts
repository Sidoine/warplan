import { observable, action, computed, makeObservable } from "mobx";
import { UnitStats, getUnitStats } from "./stats";
import { UnitsStore } from "./units";
import { Faction } from "./unit";

interface SerializedUi {
    grandAlliance?: string;
    faction?: string;
    keywordFilter?: string;
    enemySave?: number;
    enemyKeywords?: string;
    hasCharged?: boolean;
    hasMoved?: boolean;
    enemyCount?: number;
}

export interface CombatSettings {
    enemySave: number;
    enemyKeywords: string;
    hasCharged: boolean;
    hasMoved: boolean;
    enemyCount: number;
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
    grandAlliance: Faction | null = null;

    @observable.shallow
    faction: Faction | null = this.unitsStore.factionsList[0] || null;

    @computed
    get units() {
        const keywordFilter = this.keywordFilter.toUpperCase();
        if (keywordFilter.length > 2) {
            // const grandAlliance = this.grandAlliance;
            return this.unitsStore.unitList.filter(
                x =>
                    // x.factions.some((x) => x.grandAlliance === grandAlliance) &&
                    x.name.toUpperCase().indexOf(keywordFilter) >= 0 ||
                    x.keywords.some(x => x.indexOf(keywordFilter) >= 0)
            );
        }
        return this.unitsStore.unitList.filter(x =>
            x.factions.some(x => x.id === this.faction?.id)
        );
    }

    @observable combatSettings: CombatSettings = {
        enemySave: 5,
        enemyKeywords: "",
        hasCharged: false,
        hasMoved: true,
        enemyCount: 5
    };

    @computed
    get unitStats() {
        const result: UnitStats[] = [];
        for (const unit of this.units) {
            const stats = getUnitStats(unit, this.combatSettings);
            for (const stat of stats) {
                result.push(stat);
            }
        }
        return result;
    }

    @action
    setEnemy<T extends keyof CombatSettings>(key: T, value: CombatSettings[T]) {
        this.combatSettings[key] = value;
        this.saveUi();
    }

    constructor(private unitsStore: UnitsStore) {
        makeObservable(this);
        const ui: string | null = localStorage.getItem("ui");
        if (ui) {
            const serialized: SerializedUi = JSON.parse(ui);
            const grandAlliance =
                serialized.grandAlliance &&
                this.unitsStore.factions[serialized.grandAlliance];
            if (grandAlliance) {
                this.grandAlliance = grandAlliance;
            }
            const faction =
                serialized.faction &&
                this.unitsStore.factions[serialized.faction];
            if (faction) {
                this.faction = faction;
            }
            this.keywordFilter = serialized.keywordFilter || "";
            if (serialized.enemySave)
                this.combatSettings.enemySave = serialized.enemySave;
            if (serialized.enemyKeywords)
                this.combatSettings.enemyKeywords = serialized.enemyKeywords;
            if (serialized.hasCharged !== undefined)
                this.combatSettings.hasCharged = serialized.hasCharged;
            if (serialized.hasMoved !== undefined) {
                this.combatSettings.hasMoved = serialized.hasMoved;
            }
            this.combatSettings.enemyCount = serialized.enemyCount ?? 5;
        }
    }

    @action
    showWarscrollPopin = () => {
        this.warscrollPopin = true;
    };

    @action
    closeWarscrollPopin() {
        this.warscrollPopin = false;
    }

    @action
    showExportPopin = () => {
        this.exportPopin = true;
    };

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
    setFaction(faction: Faction) {
        this.faction = faction;
        this.keywordFilter = "";
        this.saveUi();
    }

    @action
    setGrandAlliance(grandAlliance: Faction) {
        this.grandAlliance = grandAlliance;
        this.saveUi();
    }

    private saveUi() {
        const serialized: SerializedUi = {
            faction: this.faction?.id,
            // grandAlliance: this.grandAlliance?.id,
            keywordFilter: this.keywordFilter,
            enemyKeywords: this.combatSettings.enemyKeywords,
            enemySave: this.combatSettings.enemySave,
            hasCharged: this.combatSettings.hasCharged,
            hasMoved: this.combatSettings.hasMoved,
            enemyCount: this.combatSettings.enemyCount
        };
        localStorage.setItem("ui", JSON.stringify(serialized));
    }
}
