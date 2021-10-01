import { observable, action, computed, makeObservable } from "mobx";
import { UnitStats, getUnitStats } from "./stats";
import { DataStore } from "./data";
import { Faction } from "../../common/data";
import { Role } from "../../common/definitions";

interface SerializedUi {
    faction?: string;
    keywordFilter?: string;
    enemySave?: number;
    enemyKeywords?: string;
    hasCharged?: boolean;
    hasMoved?: boolean;
    enemyCount?: number;
    includeFactionLess?: boolean;
    includeAllies?: boolean;
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

    @observable.shallow
    faction: Faction | null = this.unitsStore.factionsList[0] || null;

    @observable
    includeAllies = false;

    @observable
    includeFactionLess = false;

    @computed
    get warscrolls() {
        const keywordFilter = this.keywordFilter.toUpperCase();
        if (keywordFilter.length > 2) {
            return this.unitsStore.unitList.filter(
                x =>
                    x.name.toUpperCase().indexOf(keywordFilter) >= 0 ||
                    x.keywords.some(x => x.indexOf(keywordFilter) >= 0)
            );
        }
        return this.unitsStore.unitList.filter(
            x =>
                x.factions.some(x => x.id === this.faction?.id) ||
                (this.includeFactionLess && x.factions.length === 0)
        );
    }

    @computed
    get endlessSpells() {
        return this.warscrolls.filter(x => x.roles.includes(Role.EndlessSpell));
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
        for (const unit of this.warscrolls) {
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

    constructor(private unitsStore: DataStore) {
        makeObservable(this);
        const ui: string | null = localStorage.getItem("ui");
        if (ui) {
            const serialized: SerializedUi = JSON.parse(ui);
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
            if (serialized.includeAllies !== undefined) {
                this.includeAllies = serialized.includeAllies;
            }
            if (serialized.includeFactionLess !== undefined) {
                this.includeFactionLess = serialized.includeFactionLess;
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
    toggleIncludeAllies = () => {
        this.includeAllies = !this.includeAllies;
        this.saveUi();
    };

    @action
    toggleIncludeFactionLess = () => {
        this.includeFactionLess = !this.includeFactionLess;
        this.saveUi();
    };

    private saveUi() {
        const serialized: SerializedUi = {
            faction: this.faction?.id,
            // grandAlliance: this.grandAlliance?.id,
            keywordFilter: this.keywordFilter,
            enemyKeywords: this.combatSettings.enemyKeywords,
            enemySave: this.combatSettings.enemySave,
            hasCharged: this.combatSettings.hasCharged,
            hasMoved: this.combatSettings.hasMoved,
            enemyCount: this.combatSettings.enemyCount,
            includeAllies: this.includeAllies,
            includeFactionLess: this.includeFactionLess
        };
        localStorage.setItem("ui", JSON.stringify(serialized));
    }
}
