import { action, computed, observable } from "mobx";
import { Battalion, Unit, UnitsStore, WarscrollUnitInterface, WarscrollInterface, GrandAlliance, Allegiance } from "./units";

export interface WarscrollBattalion {
    id: number;
    battalion: Battalion; 
}

export class WarscrollUnit implements WarscrollUnitInterface {
    id: number;
    
    @observable
    count: number = 1;

    get isArtillery() {
        return this.unit.isArtillery && this.unit.isArtillery(this.warscroll);
    }

    get isLeader() {
        return this.unit.isLeader && this.unit.isLeader(this.warscroll);
    }

    get isBehemot() {
        return this.unit.isBehemot && this.unit.isBehemot(this.warscroll);
    }

    get isBattleline() {
        return this.unit.isBattleline && this.unit.isBattleline(this.warscroll);
    }

    get isGeneral() {
        return this.warscroll.general === this;
    }

    constructor(protected warscroll: Warscroll, public unit: Unit, count?: number) {
        this.id = warscroll.serial++;
        if (count !== undefined) {
            this.count = count;
        }
    }     
}

export class Warscroll implements WarscrollInterface {
    serial = 0;

    constructor(private unitsStore: UnitsStore) {
    }

    @observable
    grandAlliance: GrandAlliance = GrandAlliance.order;

    @observable
    allegiance: Allegiance = this.unitsStore.allegianceList[0];

    @observable
    name = "New Warscroll";

    @observable
    units: WarscrollUnit[] = [];

    @observable
    battalions: WarscrollBattalion[] = [];

    @observable
    general: WarscrollUnit | undefined = undefined;    

    @computed
    get unitsPoints() {
        return this.units.reduce((p, x) => x.count * x.unit.points + p, 0);
    }

    @computed
    get battalionsPoints() {
        return this.battalions.reduce((p, x) => x.battalion.points + p, 0);
    }

    @computed
    get totalPoints() {
        return this.unitsPoints + this.battalionsPoints;
    }

    @computed
    get numberOfLeaders() {
        return this.units.reduce((p, x) => x.isLeader ? p + 1 : p, 0);
    }

    @computed
    get numberOfBattelines() {
        return this.units.reduce((p, x) => x.isBattleline ? p + 1 : p, 0);
    }
    
    @computed
    get numberOfBehemots() {
        return this.units.reduce((p, x) => x.isBehemot ? p + 1 : p, 0);
    }
    
    @computed
    get numberOfArtillery() {
        return this.units.reduce((p, x) => x.isArtillery ? p + 1 : p, 0);
    }

    minLeaders = 1;
    
    @computed
    get maxLeaders() {
        return this.totalPoints <= 1000 ? 4 : (this.totalPoints <= 2000 ? 6 : 8);
    } 

    @computed
    get minBattlelines() {
        return this.totalPoints <= 1000 ? 2 : (this.totalPoints <= 20000 ? 3 : 4);
    }

    @computed
    get maxBattlelines() {
        return this.minBattlelines;
    }

    @computed
    get maxBehemots()
    {
        return this.totalPoints <= 1000 ? 2 : (this.totalPoints <= 2000 ? 4 : 5);
    }

    @computed
    get maxArtillery() {
        return this.totalPoints <= 1000 ? 2 : (this.totalPoints <= 2000 ? 4 : 5);
    }
    
    @computed
    get isLeadersValid() {
        return this.numberOfLeaders >= this.minLeaders && this.numberOfLeaders <= this.maxLeaders;
    }

    @computed
    get isBattelinesValid() {
        return this.numberOfBattelines === this.minBattlelines;
    }

    @computed
    get isBehemotsValid() {
        return this.numberOfBehemots <= this.maxBehemots;
    }

    @computed
    get isArtilleryValid() {
        return this.numberOfArtillery <= this.maxArtillery;
    }
}

interface SerializedWarscroll {
    name: string;
    units: {
        unitId: number;
        count: number;
        isGeneral?:boolean;
    }[];
    battalions: {
        battalionId: number;
    }[];
    grandAlliance: number;
    allegiance: number;
}

export class WarscrollStore {
    @observable
    warscrolls: string[] = [];

    @action
    addUnit(unit: Unit) {
        const warscroll = this.warscroll;
        warscroll.units.push(new WarscrollUnit(warscroll, unit));
        this.saveWarscroll();
    }

    @action
    setUnitCount(unit: WarscrollUnit, count: number) {
        unit.count = count;
        this.saveWarscroll();
    }

    @action
    removeUnit(unit: WarscrollUnit) {
        const units = this.warscroll.units;
        units.splice(units.indexOf(unit), 1);
    }

    @action
    addBattalion(battalion: Battalion) {
        this.warscroll.battalions.push({
            id: this.warscroll.serial++,
            battalion: battalion
        });
        this.saveWarscroll();
    }
    
    @action
    removeBattalion(battalion: WarscrollBattalion) {
        const battalions = this.warscroll.battalions;
        battalions.splice(battalions.indexOf(battalion), 1);
        this.saveWarscroll();
    }

    @action
    setGeneral(unit: WarscrollUnit | undefined) {
        this.warscroll.general = unit;
        this.saveWarscroll();
    }
    
    loadWarscroll(name?: string) {
        const serializedWarscroll = localStorage.getItem(this.getWarscrollItem(name));
        if (serializedWarscroll === null) return;
        const warscroll: SerializedWarscroll = JSON.parse(serializedWarscroll);
        this.warscroll.name = warscroll.name;
        this.warscroll.general = undefined;
        this.warscroll.units.splice(0);
        this.warscroll.battalions.splice(0);
        this.warscroll.grandAlliance = warscroll.grandAlliance;
        this.warscroll.allegiance = this.unitsStore.allegianceList.find(x => x.id === warscroll.allegiance) || this.unitsStore.allegianceList[0];

        for (const wu of warscroll.units) {
            const unit = this.unitsStore.getUnit(wu.unitId);
            if (unit === undefined) continue;
            const newUnit = new WarscrollUnit(this.warscroll, unit);
            newUnit.count = wu.count;
            if (wu.isGeneral) {
                this.warscroll.general = newUnit;
            }
            this.warscroll.units.push(newUnit);
        }

        for (const ba of warscroll.battalions) {
            const battalion = this.unitsStore.battalions.find(x => x.id === ba.battalionId);
            if (battalion === undefined) continue;
            this.warscroll.battalions.push({ id: this.warscroll.serial++, battalion: battalion });
        }
    }

    saveWarscroll(name?: string) {
        const warscroll: SerializedWarscroll = {
            name: this.warscroll.name,
            units: this.warscroll.units.map(x => {return {
                unitId: x.unit.id,
                count: x.count,
                isGeneral: x === this.warscroll.general
            }}),
            battalions: this.warscroll.battalions.map(x => {
                return {
                    battalionId: x.battalion.id
                };
            }),
            grandAlliance: this.warscroll.grandAlliance,
            allegiance: this.warscroll.allegiance.id
        };
        localStorage.setItem(this.getWarscrollItem(name), JSON.stringify(warscroll));
    }

    constructor(private unitsStore: UnitsStore) {
        const warscrolls = localStorage.getItem("warscrolls");
        if (warscrolls !== null) {
            this.warscrolls = JSON.parse(warscrolls);
        }

        this.loadWarscroll();
    }

    @observable
    warscroll = new Warscroll(this.unitsStore);

    private getWarscrollItem(name?: string) {
        return name ? `warscroll/${name}` : 'warscroll';
    }
}