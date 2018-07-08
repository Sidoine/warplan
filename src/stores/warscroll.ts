import { action, computed, observable, toJS } from "mobx";
import { Battalion, Unit, UnitsStore, WarscrollUnitInterface, WarscrollInterface, Allegiance, ExtraAbility, WarscrollBattalionInterface, WarscrollModelInterface, Scenery, ModelOption } from "./units";
import { deflate, inflate } from "pako";

function areAllied(unit1: Unit, unit2: Unit) {
    for (const faction1 of unit1.factions) {
        for (const faction2 of unit2.factions) {
            if (faction1 === faction2) return true;
            if (faction1.allied && faction1.allied.indexOf(faction2.id) >= 0) return true;
        }
    }
    return false;
}

export class WarscrollModel implements WarscrollModelInterface {
    id: number;

    @observable
    options: ModelOption[] = [];
    
    @observable
    count = 1;

    constructor(private warscrollUnit: WarscrollUnit, warscroll: Warscroll) {
        this.id = warscroll.serial++;
    }

    @computed
    get availableOptions() {
        const options = this.warscrollUnit.unit.options;
        if (!options) return [];
        return options.filter(x => this.isOptionAvailable(x));
    }

    isOptionAvailable(option: ModelOption) {
        if (this.options.some(x => x.id === option.id)) return false;
        if (option.isOptionValid) {
            if (!option.isOptionValid(this.warscrollUnit, this)) return false;
        }
        return this.checkOptionAvailable(option);       
    }

    isOptionValid(option: ModelOption) {
        if (!this.checkOptionAvailable(option)) return false;
        if (option.isOptionValid) {
            if (!option.isOptionValid(this.warscrollUnit, this)) return false;
        }
        return true;
    }

    private checkOptionAvailable(option: ModelOption) {
        if (option.modelCategory) {
            if (this.options.some(x => x.modelCategory === option.modelCategory && x.id !== option.id)) return false;
        }
    
        if (option.unitCategory) {
            if (this.warscrollUnit.models.some(x => x.options.some(y => y.unitCategory === option.unitCategory && option.id !== y.id))) return false;
        }

        return true;
    }

    @computed
    get name() {
        return this.options.map(x => x.name).join(', ');
    }
}

export class WarscrollUnit implements WarscrollUnitInterface {
    id: number;
    
    @observable
    models: WarscrollModel[] = [];

    @observable
    battalion: WarscrollBattalionInterface | null = null;

    @computed
    get count() {
        return Math.ceil(this.modelCount / this.unit.size);
    }

    @computed
    get modelCount() {
        return this.models.reduce((p, x) => p + x.count, 0);
    }

    @observable
    extraAbilities: ExtraAbility[] = [];

    @computed
    get isAllied() {
        return !this.unit.keywords || this.unit.keywords.indexOf(this.warscroll.allegiance.keyword) < 0;
    }

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

    @computed
    get availableExtraAbilities() {
        return this.warscroll.unitsStore.extraAbilities.filter(x => (x.allegiance === undefined || x.allegiance.id === this.warscroll.allegiance.id)
            && x.isAvailable(this, this.warscroll));
    }

    @computed
    get points(): number {
        if(this.count * this.unit.size === this.unit.maxSize && this.unit.maxPoints) return this.unit.maxPoints;

        return this.count * this.unit.points;
    }

    @computed
    get nonAlliedUnits() {
        return this.warscroll.units.filter(x => !areAllied(this.unit, x.unit));
    }

    @computed
    get availableOptions() {
        if (!this.unit.options) return [];
        return this.unit.options;
    }

    constructor(protected warscroll: Warscroll, public unit: Unit) {
        this.id = warscroll.serial++;
    }     
}

export class WarscrollScenery {
    id: number;

    constructor(public warscroll: Warscroll, public scenery: Scenery) {
        this.id = warscroll.serial++;
    }
}

export class WarscrollBattalion implements WarscrollBattalionInterface {
    id: number;

    constructor(public warscroll: Warscroll, public battalion: Battalion) {
        this.id = warscroll.serial++;
    }

    @computed get units() {
        return this.warscroll.units.filter(x => x.battalion !== null && x.battalion.id === this.id);
    }
}

export class Warscroll implements WarscrollInterface {
    serial = 0;

    constructor(public unitsStore: UnitsStore) {
    }

    @computed
    get extraAbilities() {
        const result: ExtraAbility[] = [];
        for (const unit of this.units) {
            for (const ability of unit.extraAbilities) {
                result.push(ability);
            }
        }
        return result;
    }

    @observable
    allegiance: Allegiance = this.unitsStore.allegianceList[0];

    @observable
    armyOption: string = "";

    @observable
    name = "New Warscroll";

    @observable
    units: WarscrollUnit[] = [];

    @observable
    battalions: WarscrollBattalion[] = [];

    @observable
    general: WarscrollUnit | undefined = undefined;   
    
    @observable
    sceneries: WarscrollScenery[] = [];

    @computed
    get unitsPoints() {
        return this.units.reduce((p, x) => x.points + p, 0);
    }

    @computed
    get sceneryPoints() {
        return this.sceneries.reduce((p, x) => x.scenery.points + p, 0);
    }

    @computed
    get battalionsPoints() {
        return this.battalions.reduce((p, x) => x.battalion.points + p, 0);
    }

    @computed
    get totalPoints() {
        return this.unitsPoints + this.battalionsPoints + this.sceneryPoints;
    }

    @computed
    get alliedPoints() {
        return this.units.filter(x => x.isAllied).reduce((p, x) => x.count * x.unit.points + p, 0)
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
    get maxAlliedPoints() {
        return this.totalPoints <= 1000 ? 200 : (this.totalPoints <= 2000 ? 400 : 500);
    }

    @computed
    get isAlliedValid() {
        return this.alliedPoints < this.maxAlliedPoints;
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
        unitId: string;
        isGeneral?:boolean;
        extraAbilities?: string[];
        models?: { count: number, options: string[] }[];
        battalionIndex?:number;
    }[];
    battalions: {
        battalionId: string;
    }[];
    allegiance: string;
    armyOption: string;
    sceneries?: string[];
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
    addScenery(scenery: Scenery) {
        this.warscroll.sceneries.push(new WarscrollScenery(this.warscroll, scenery));
        this.saveWarscroll();
    }

    @action
    removeScenery(scenery: WarscrollScenery) {
        const sceneries = this.warscroll.sceneries;
        sceneries.splice(sceneries.indexOf(scenery), 1);
        this.saveWarscroll();
    }

    @action
    removeUnit(unit: WarscrollUnit) {
        const units = this.warscroll.units;
        units.splice(units.indexOf(unit), 1);
        this.saveWarscroll();
    }

    @action
    addBattalion(battalion: Battalion) {
        this.warscroll.battalions.push(new WarscrollBattalion(this.warscroll, battalion));
        this.saveWarscroll();
    }
    
    @action
    removeBattalion(battalion: WarscrollBattalionInterface) {
        const battalions = this.warscroll.battalions;
        battalions.splice(battalions.findIndex(x => x.id === battalion.id), 1);
        this.saveWarscroll();
    }

    @action
    setGeneral(unit: WarscrollUnit | undefined) {
        this.warscroll.general = unit;
        this.saveWarscroll();
    }

    @action
    addExtraAbility(unit: WarscrollUnit, ability: ExtraAbility) {
        unit.extraAbilities.push(ability);
        this.saveWarscroll();
    }

    @action
    removeExtraAbility(unit: WarscrollUnit, ability: ExtraAbility) {
        unit.extraAbilities.splice(unit.extraAbilities.indexOf(ability), 1);
        this.saveWarscroll();
    }

    @computed
    get armyOptions() {
        return this.unitsStore.armyOptions.get(this.warscroll.allegiance.id);
    }

    @action
    setArmyOption(option: string){
        this.warscroll.armyOption = option;
        this.saveWarscroll();
    }
    
    loadWarscroll(name?: string) {
        const serializedWarscroll = localStorage.getItem(this.getWarscrollItem(name));
        if (serializedWarscroll === null) return;
        const warscroll: SerializedWarscroll = JSON.parse(serializedWarscroll);
        this.loadSerializedWarscroll(warscroll);
    }

    loadSerializedWarscroll(warscroll: SerializedWarscroll) {
        this.warscroll.name = warscroll.name;
        this.warscroll.general = undefined;
        this.warscroll.units.splice(0);
        this.warscroll.battalions.splice(0);
        this.warscroll.allegiance = this.unitsStore.allegianceList.find(x => x.id === warscroll.allegiance) || this.unitsStore.allegianceList[0];
        this.warscroll.armyOption = warscroll.armyOption;
        
        for (const ba of warscroll.battalions) {
            const battalion = this.unitsStore.battalions.find(x => x.id === ba.battalionId);
            if (battalion === undefined) continue;
            this.warscroll.battalions.push(new WarscrollBattalion(this.warscroll, battalion));
        }

        if (warscroll.sceneries) {
            for (const id of warscroll.sceneries) {
                const scenery = this.unitsStore.sceneryList.find(x => x.id === id);
                if (scenery === undefined) continue;
                this.warscroll.sceneries.push(new WarscrollScenery(this.warscroll, scenery));
            }
        }
        
        for (const wu of warscroll.units) {
            const unit = this.unitsStore.getUnit(wu.unitId);
            if (unit === undefined) continue;
            const newUnit = new WarscrollUnit(this.warscroll, unit);
            if (wu.isGeneral) {
                this.warscroll.general = newUnit;
            }
            if (wu.extraAbilities) {
                for (const e of wu.extraAbilities) {
                    const ability = this.unitsStore.getExtraAbility(e);
                    if (ability) {
                        newUnit.extraAbilities.push(ability);
                    }
                } 
            }
            if (wu.models) {
                for (const loadedModel of wu.models) {
                    const model = new WarscrollModel(newUnit, this.warscroll);
                    for (const loadedOption of loadedModel.options) {
                        if (unit.options) {
                            const option = unit.options.find(x => x.id === loadedOption);
                            if (option) {
                                model.options.push(option);
                            }
                        }
                    }
                    model.count = loadedModel.count;
                    newUnit.models.push(model);
                }
            }
            if (wu.battalionIndex && this.warscroll.battalions[wu.battalionIndex]) {
                newUnit.battalion = this.warscroll.battalions[wu.battalionIndex];
            }
            this.warscroll.units.push(newUnit);
        }
    }

    getSerializedWarscroll(): SerializedWarscroll {
        return {
            name: this.warscroll.name,
            units: this.warscroll.units.map(x => {return {
                unitId: x.unit.id,
                isGeneral: x === this.warscroll.general,
                extraAbilities: x.extraAbilities.map(x => x.id),
                models: x.models.map(x => { return { count: x.count, options: x.options.map(y => y.id) } }),
                battalionIndex: x.battalion === null ? undefined : this.warscroll.battalions.findIndex(y => x.battalion !== null && y.id === x.battalion.id)
            }}),
            battalions: this.warscroll.battalions.map(x => {
                return {
                    battalionId: x.battalion.id
                };
            }),
            allegiance: this.warscroll.allegiance.id,
            armyOption: this.warscroll.armyOption,
            sceneries: this.warscroll.sceneries.map(x => x.scenery.id)
        };
    }

    @computed
    get link() {
        const ws = btoa(deflate(JSON.stringify(this.getSerializedWarscroll()), { to: 'string' }));
        return `${document.location.protocol}//${document.location.host}${document.location.pathname}#?ws=${ws}`;
    }

    @action
    loadLink() {
        const hash = location.hash.match(/ws=(.*)/);
        if (hash) {
            const ws = hash[1];
            this.loadSerializedWarscroll(JSON.parse(inflate(atob(ws), {to: 'string'})))
            location.hash= "/wb";
        }
    }

    // http://localhost:8080/#/wb?ws=eJytkTFPxDAMhf8K8twFxm4nDgELsN2AbvClprXkOsVxVKSq/520Q+kAEkJMsZyXz+85Eyj2BDU80Xh1QkvBoghUkJU9Qf06rdVjUyRI3pGNrG0qghCzOtTXFXC6JyVDgfoNJVEFI+EQ9XlwjrpAzhXQhxseLizsTGtvrnbsQELJUf3FuPj5Ae+W/0SXaM3hPXM5/935YDFRyB4tndi72zUIozxg35PtNnXzm3kTxLXeVrKRjrk8WyZvgtZQm2693KWav7dcuhd0R/kKhiLUMmpY/j+VAH3A5HdOpsUczJ8lx78z

    @action
    saveWarscroll(name?: string) {
        if (name && this.warscrolls.indexOf(name) < 0) this.warscrolls.push(name);
        const warscroll = this.getSerializedWarscroll();
        localStorage.setItem(this.getWarscrollItem(name), JSON.stringify(warscroll));
        this.saveWarscrolls();
    }

    @action
    removeWarscroll(name: string){
        localStorage.removeItem(this.getWarscrollItem(name));
        this.warscrolls.splice(this.warscrolls.indexOf(name), 1);
        this.saveWarscrolls();
    }

    constructor(private unitsStore: UnitsStore) {
        const warscrolls = localStorage.getItem("warscrolls");
        if (warscrolls !== null) {
            this.warscrolls = JSON.parse(warscrolls);
        }

        this.loadWarscroll();
        this.loadLink();
    }


    private saveWarscrolls() {
        localStorage.setItem("warscrolls", JSON.stringify(toJS(this.warscrolls)));
    }

    @observable
    warscroll = new Warscroll(this.unitsStore);

    private getWarscrollItem(name?: string) {
        return name ? `warscroll/${name}` : 'warscroll';
    }

    @action
    setModelCount(altModel: WarscrollModel, count: number) {
        altModel.count = count;
        this.saveWarscroll();
    }

    @action
    addModelOption(model: WarscrollModel, option: ModelOption) {
        model.options.push(option);
        this.saveWarscroll();
    }

    @action
    removeModelOption(model: WarscrollModel, option: ModelOption) {
        model.options.splice(model.options.indexOf(option), 1);
        this.saveWarscroll();
    }

    @action
    addModel(unit: WarscrollUnit, option: ModelOption | undefined) {
        const model = new WarscrollModel(unit, this.warscroll);
        unit.models.push(model);
        if (option) model.options.push(option);        
        this.saveWarscroll();
    }

    @action
    removeModel(unit: WarscrollUnit, model: WarscrollModel) {
        unit.models.splice(unit.models.indexOf(model), 1);
        this.saveWarscroll();
    }
}