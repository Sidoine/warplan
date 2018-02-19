import { action, observable, toJS, computed } from "mobx";
import { Box, UnitsStore, Model } from "./units";
import { WarscrollStore } from "./warscroll";
import { OwnedStore } from "./owned";

export interface BasketElement {
    id: number;
    box: Box;
    count: number;
}

interface SerializedBasket {
    boxes: {
        boxId: number;
        count: number;
    }[];
}

interface Missing {
    model: Model;
    count: number;
    inBasket: number;
    id: number;
}

export class BasketStore {
    private serial = 0;

    @observable
    basket: BasketElement[] = [];

    @observable
    baskets: string[] = [];

    @action
    addBasketElement(box: Box) {
        this.basket.push({
            box: box,
            count: 1,
            id: this.serial++
        });
        this.saveBasket();
    }

    @action
    removeBasketElement(basketElement: BasketElement) {
        const basketElements = this.basket;
        basketElements.splice(basketElements.indexOf(basketElement), 1);
        this.saveBasket();
    }

    @action
    setBasketElementCount(basketElement: BasketElement, count: number) {
        basketElement.count = count;
        this.saveBasket();
    }
    

    saveBasket(name?: string) {
        const serializedBasket: SerializedBasket = {
            boxes: this.basket.map(x => {
                return {
                    boxId: x.box.id,
                    count: x.count
                };
            })
        };
        localStorage.setItem(this.getBasketItem(name), JSON.stringify(serializedBasket));

        if (name !== undefined) {
            if (this.baskets.indexOf(name) < 0) {
                this.baskets.push(name);
                this.saveBaskets();
            }
        }
    }

    private getBasketItem(name?: string) {
        return name ? `basket/${name}` : "basket";
    }

    private saveBaskets() {
        localStorage.setItem("baskets", JSON.stringify(toJS(this.baskets)));
    }

    @action
    loadBasket(name?: string) {
        const storage = localStorage.getItem(this.getBasketItem(name));
        if (storage === null) return;
        const serializedBasket: SerializedBasket = JSON.parse(storage);
        this.basket.splice(0);
        for (const box of serializedBasket.boxes) {
            const b = this.unitsStore.boxes.find(x => x.id === box.boxId);
            if (b === undefined) continue;
            this.basket.push({
                count: box.count,
                box: b,
                id: this.serial++
            });
        }
    }

    @action
    removeBasket(name: string) {
        localStorage.removeItem(this.getBasketItem(name));
        this.baskets.splice(this.baskets.indexOf(name), 1);
        this.saveBaskets();
    }    
    
    @computed
    get missingModels() {
        const neededModels:Missing[] = [];
        
        for (const unit of this.warscrollStore.warscroll.units) {
            const count = unit.unit.size * unit.count;
            const existings = neededModels.find(x => x.model === unit.unit.model);
            if (existings === undefined) {
                neededModels.push({ 
                    model: unit.unit.model, 
                    count: count, 
                    id: unit.unit.model.id, 
                    inBasket: this.basket.reduce((c, x) => c + x.count * x.box.units.reduce((d, y) => y.models.reduce((e, z) => z.id === unit.unit.model.id ? e + 1: e, 0) * y.count + d, 0) , 0)
                });
            } else {
                existings.count += count;
            }
        }

        for (const model of this.ownedStore.ownedModels) {
            const neededModel = neededModels.find(x => x.model === model.model);
            if (neededModel !== undefined) {
                neededModel.count -= model.count;
            }
        }
        return neededModels.filter(x => x.count > 0);
    }
    
    constructor(private unitsStore: UnitsStore, private warscrollStore: WarscrollStore, private ownedStore: OwnedStore) {        
        const baskets = localStorage.getItem("baskets");
        if (baskets !== null) {
            this.baskets = JSON.parse(baskets);
        }

        this.loadBasket();
    }
}