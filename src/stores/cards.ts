import { observable, action, makeObservable } from "mobx";

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
                .filter(x => x[1])
                .map(x => x[0])
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
