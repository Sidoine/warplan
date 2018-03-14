import { action, observable } from "mobx";
import { Model, UnitsStore } from "./units";

interface SerializedOwned {
    models: {
        modelId: string;
        count: number;
    }[];
}

export interface OwnedModel {
    id: number;
    model: Model;
    count: number;
}

export class OwnedStore {
    serial: number = 0;

    @observable
    ownedModels: OwnedModel[] = [];

    @action
    addOwned(model: Model) {
        this.ownedModels.push({
            model: model,
            count: 1,
            id: this.serial++
        });
        this.saveOwned();
    }

    @action
    removeOwned(ownedModel: OwnedModel) {
        const ownedModels = this.ownedModels;
        ownedModels.splice(ownedModels.indexOf(ownedModel), 1);
        this.saveOwned();
    }

    @action
    setOwnedCount(ownedModel: OwnedModel, value: number) {
        ownedModel.count = value;
        this.saveOwned();
    } 
    
    @action
    loadOwned() {
        const serialized = localStorage.getItem("owned");
        if (serialized === null) return;

        this.ownedModels.splice(0);
        const owned: SerializedOwned = JSON.parse(serialized);
        for (const model of owned.models) {
            const m = this.unitsStore.modelsList.find(x => x.id === model.modelId);
            if (m === undefined) continue;
            this.ownedModels.push({
                id: this.serial++,
                count: model.count,
                model: m
            });
        }
    }

    saveOwned() {
        const serialized: SerializedOwned = {
            models: this.ownedModels.map(x => {
                return {
                    modelId: x.model.id,
                    count: x.count
                };
            })
        }
        localStorage.setItem("owned", JSON.stringify(serialized));
    }

    constructor(private unitsStore: UnitsStore) {
        this.loadOwned();
    }
}