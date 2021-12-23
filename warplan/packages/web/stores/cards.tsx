import { observable, action, makeObservable } from "mobx";
import React, { createContext, useState } from "react";

interface CardsSerialized {
    names: string[];
}

export class CardsStore {
    @observable
    names = new Map<string, boolean>();
    isHidden(name: string) {
        return this.names.get(name);
    }

    constructor() {
        makeObservable(this);
        this.deserialize();
    }

    @action
    setAbilityHidden(name: string, hidden: boolean) {
        this.names.set(name, hidden);
        this.serialize();
    }

    private serialize() {
        const serialized: CardsSerialized = {
            names: Array.from(this.names.entries())
                .filter((x) => x[1])
                .map((x) => x[0]),
        };
        localStorage.setItem("cards", JSON.stringify(serialized));
    }

    private deserialize() {
        const serialized = localStorage.getItem("cards");
        if (serialized) {
            const cards: CardsSerialized = JSON.parse(serialized);
            for (const ability of cards.names) {
                this.names.set(ability, true);
            }
        }
    }
}

const CardsStoreContext = createContext<CardsStore | null>(null);

export function CardsStoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [data] = useState(() => new CardsStore());
    return (
        <CardsStoreContext.Provider value={data}>
            {children}
        </CardsStoreContext.Provider>
    );
}

export function useCardsStore() {
    const dataStore = React.useContext(CardsStoreContext);
    if (!dataStore) {
        throw new Error(
            "useCardsStore must be used within a CardsStoreProvider"
        );
    }
    return dataStore;
}
