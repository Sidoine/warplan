import { action, computed, observable, toJS } from "mobx";
import { Battalion, Unit, UnitsStore, WarscrollUnitInterface, WarscrollInterface, Allegiance, WeaponOption, ExtraAbility, WarscrollBattalion, Attack } from "./units";

export interface WarscrollWeaponOption {
    weaponOption?: WeaponOption;
    count?: number;
}

function areAllied(unit1: Unit, unit2: Unit) {
    for (const faction1 of unit1.factions) {
        for (const faction2 of unit2.factions) {
            if (faction1 === faction2) return true;
            if (faction1.allied && faction1.allied.indexOf(faction2.id) >= 0) return true;
        }
    }
    return false;
}

export class WarscrollUnit implements WarscrollUnitInterface {
    id: number;
    
    @observable
    count: number = 1;

    @observable
    weaponOption: WarscrollWeaponOption[] = [];

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
    get attacksWithWoundEffects(): Attack[] {
        let woundEffect: Attack[] = [];

        if (this.unit.attacks !== undefined) {
            const woundEffects = this.unit.attacks.filter(attack => attack.woundsEffects !== undefined);
            woundEffect = woundEffect.concat(woundEffects);
        }

        if (this.unit.weaponOptions !== undefined) {
            this.unit.weaponOptions.forEach(wo => {
                wo.options.forEach(option => {
                    if (option.attacks === undefined) return;
                    
                    option.attacks.forEach(attack => {
                        if(attack.woundsEffects !== undefined){
                            woundEffect.push(attack);
                        }
                    })
                })
            });
        }

        return woundEffect;
    }

    @computed
    get hasWoundEffects(): boolean {
        const attackHasWoundEffect: boolean = this.unit.attacks !== undefined && this.unit.attacks.some((attack) => attack.woundsEffects !== undefined) ;
        const weaponOptionHasWoundEffect: boolean = this.unit.weaponOptions !== undefined && this.unit.weaponOptions.some((wo) => wo.options.some(opt => opt.attacks !== undefined && opt.attacks.some(att => att.woundsEffects !== undefined)));

        return attackHasWoundEffect || weaponOptionHasWoundEffect;
    }

    constructor(protected warscroll: Warscroll, public unit: Unit, count?: number) {
        this.id = warscroll.serial++;
        if (count !== undefined) {
            this.count = count;
        }
        if (unit.weaponOptions) {
            for (const {} of unit.weaponOptions) {
                this.weaponOption.push({ weaponOption: undefined });
            }
        }
    }     
}

export class Warscroll implements WarscrollInterface {
    serial = 0;

    constructor(public unitsStore: UnitsStore) {
    }

    @observable
    extraAbilities: ExtraAbility[] = [];

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

    @computed
    get unitsPoints() {
        return this.units.reduce((p, x) => x.points + p, 0);
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
        count: number;
        isGeneral?:boolean;
        weaponOptions?: { option: string | undefined, count?: number }[];
        extraAbilities?: string[];
    }[];
    battalions: {
        battalionId: string;
    }[];
    allegiance: string;
    armyOption: string;
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
        this.saveWarscroll();
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

    @action
    setWeaponOption(unit: WarscrollUnit, index: number, weaponOption: WeaponOption, count?: number) {
        unit.weaponOption[index] = { weaponOption, count: count };
        this.saveWarscroll();
    }

    @action
    addExtraAbility(unit: WarscrollUnit, ability: ExtraAbility) {
        unit.extraAbilities.push(ability);
        this.warscroll.extraAbilities.push(ability);
        this.saveWarscroll();
    }

    @action
    removeExtraAbility(unit: WarscrollUnit, ability: ExtraAbility) {
        unit.extraAbilities.splice(unit.extraAbilities.indexOf(ability), 1);
        this.warscroll.extraAbilities.splice(unit.extraAbilities.indexOf(ability), 1);
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
        this.warscroll.name = warscroll.name;
        this.warscroll.general = undefined;
        this.warscroll.units.splice(0);
        this.warscroll.battalions.splice(0);
        this.warscroll.allegiance = this.unitsStore.allegianceList.find(x => x.id === warscroll.allegiance) || this.unitsStore.allegianceList[0];
        this.warscroll.extraAbilities.splice(0);
        this.warscroll.armyOption = warscroll.armyOption;
        
        for (const wu of warscroll.units) {
            const unit = this.unitsStore.getUnit(wu.unitId);
            if (unit === undefined) continue;
            const newUnit = new WarscrollUnit(this.warscroll, unit);
            newUnit.count = wu.count;
            if (wu.isGeneral) {
                this.warscroll.general = newUnit;
            }
            if (wu.weaponOptions && unit.weaponOptions) {
                const wo = unit.weaponOptions;
                for (let i = 0; i < wu.weaponOptions.length; i++) {
                    const woId = wu.weaponOptions[i];
                    if (!woId) continue;

                    newUnit.weaponOption[i].weaponOption = wo[i].options.find(y => y.id === woId.option);
                    newUnit.weaponOption[i].count = woId.count;
                }
            }
            if (wu.extraAbilities) {
                for (const e of wu.extraAbilities) {
                    const ability = this.unitsStore.getExtraAbility(e);
                    if (ability) {
                        newUnit.extraAbilities.push(ability);
                        this.warscroll.extraAbilities.push(ability);
                    }
                } 
            }
            this.warscroll.units.push(newUnit);
        }

        for (const ba of warscroll.battalions) {
            const battalion = this.unitsStore.battalions.find(x => x.id === ba.battalionId);
            if (battalion === undefined) continue;
            this.warscroll.battalions.push({ id: this.warscroll.serial++, battalion: battalion });
        }
    }

    @action
    saveWarscroll(name?: string) {
        if (name && this.warscrolls.indexOf(name) < 0) this.warscrolls.push(name);
        const warscroll: SerializedWarscroll = {
            name: this.warscroll.name,
            units: this.warscroll.units.map(x => {return {
                unitId: x.unit.id,
                count: x.count,
                isGeneral: x === this.warscroll.general,
                weaponOptions: x.weaponOption ? x.weaponOption.map(y => { return { option: y.weaponOption && y.weaponOption.id, count: y.count } }) : undefined,
                extraAbilities: x.extraAbilities.map(x => x.id)
            }}),
            battalions: this.warscroll.battalions.map(x => {
                return {
                    battalionId: x.battalion.id
                };
            }),
            allegiance: this.warscroll.allegiance.id,
            armyOption: this.warscroll.armyOption
        };
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
    }


    private saveWarscrolls() {
        localStorage.setItem("warscrolls", JSON.stringify(toJS(this.warscrolls)));
    }

    @observable
    warscroll = new Warscroll(this.unitsStore);

    private getWarscrollItem(name?: string) {
        return name ? `warscroll/${name}` : 'warscroll';
    }
}