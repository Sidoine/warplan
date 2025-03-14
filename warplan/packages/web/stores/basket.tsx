import { action, observable, toJS, computed, makeObservable } from "mobx";
import React, { createContext, useState } from "react";
import { Box, Model } from "../../common/data";
import { ArmyList, useArmyListStore } from "./army-list";
import { DataStore, useDataStore } from "./data";
import { OwnedStore, useOwnedStore } from "./owned";

export interface BasketElement {
    id: number;
    box: Box;
    count: number;
}

interface SerializedBasket {
    boxes: {
        boxId: string;
        count: number;
    }[];
}

export interface Missing {
    model: Model;
    count: number;
    inBasket: number;
    id: string;
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
            id: this.serial++,
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
            boxes: this.basket.map((x) => {
                return {
                    boxId: x.box.id,
                    count: x.count,
                };
            }),
        };
        localStorage.setItem(
            this.getBasketItem(name),
            JSON.stringify(serializedBasket)
        );

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
            const b = this.unitsStore.boxes.find((x) => x.id === box.boxId);
            if (b === undefined) continue;
            this.basket.push({
                count: box.count,
                box: b,
                id: this.serial++,
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
        const neededModels: Missing[] = [];

        const modelsInBasket = new Map<string, { count: number }[]>();

        for (const element of this.basket) {
            for (const unit of element.box.units) {
                const count = { count: unit.count * element.count };

                for (const model of unit.models) {
                    const m = modelsInBasket.get(model.id);
                    if (m) {
                        m.push(count);
                    } else {
                        modelsInBasket.set(model.id, [count]);
                    }
                }
            }
        }

        for (const unit of this.warscrollStore.units) {
            const count = unit.definition.size * unit.count;
            const basket = modelsInBasket.get(unit.definition.model.id);
            let basketCount = 0;
            if (basket) {
                for (const models of basket) {
                    const used = Math.min(models.count, count - basketCount);
                    basketCount += used;
                    models.count -= used;
                }
            }

            const existings = neededModels.find(
                (x) => x.model.id === unit.definition.model.id
            );
            if (existings === undefined) {
                neededModels.push({
                    model: unit.definition.model,
                    count: count,
                    id: unit.definition.model.id,
                    inBasket: basketCount,
                });
            } else {
                existings.count += count;
                existings.inBasket += basketCount;
            }
        }

        for (const model of this.ownedStore.ownedModels) {
            const neededModel = neededModels.find(
                (x) => x.model.id === model.model.id
            );
            if (neededModel !== undefined) {
                neededModel.count -= model.count;
            }
        }
        return neededModels.filter((x) => x.count > 0);
    }

    constructor(
        private unitsStore: DataStore,
        private warscrollStore: ArmyList,
        private ownedStore: OwnedStore
    ) {
        makeObservable(this);
        const baskets = localStorage.getItem("baskets");
        if (baskets !== null) {
            this.baskets = JSON.parse(baskets);
        }

        this.loadBasket();
    }
}

const BasketStoreContext = createContext<BasketStore | null>(null);

export function BasketStoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const dataStore = useDataStore();
    const armyListStore = useArmyListStore();
    const ownedStore = useOwnedStore();
    const [basketStore] = useState(
        () => new BasketStore(dataStore, armyListStore, ownedStore)
    );
    return (
        <BasketStoreContext.Provider value={basketStore}>
            {children}
        </BasketStoreContext.Provider>
    );
}

export function useBasketStore() {
    const dataStore = React.useContext(BasketStoreContext);
    if (!dataStore) {
        throw new Error(
            "useOwnedStore must be used within a OwnedStoreProvider"
        );
    }
    return dataStore;
}
