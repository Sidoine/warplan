import { action, observable, makeObservable } from "mobx";
import { Model, ModelOption, Unit } from "../../common/unit";
import { DataStore } from "./data";

interface SerializedOwned {
    models: {
        modelId: string;
        configuration?: {
            unitId: string;
            options?: string[];
        };
        count: number;
    }[];
}

export interface OwnedModelConfiguration {
    unit?: Unit;
    options?: ModelOption[];
}

export interface OwnedModel {
    id: number;
    model: Model;
    configuration: OwnedModelConfiguration;
    count: number;
}

export class OwnedStore {
    serial = 0;

    @observable
    ownedModels: OwnedModel[] = [];

    @action
    addOwned(model: Model, count = 1) {
        this.ownedModels.push({
            model: model,
            count,
            id: this.serial++,
            configuration: {}
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
            const m = this.unitsStore.modelsList.find(
                x => x.id === model.modelId
            );
            if (m === undefined) continue;
            const configuration = model.configuration;
            let u;
            let options: ModelOption[] | undefined;
            if (configuration) {
                u = this.unitsStore.unitList.find(
                    x => x.id === configuration.unitId
                );
                if (u && u.options && configuration.options) {
                    options = [];
                    for (const option of configuration.options) {
                        const o = u.options.find(x => x.id === option);
                        if (o) {
                            options.push(o);
                        }
                    }
                }
            }
            this.ownedModels.push({
                id: this.serial++,
                count: model.count,
                model: m,
                configuration: { options, unit: u }
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
        };
        localStorage.setItem("owned", JSON.stringify(serialized));
    }

    constructor(private unitsStore: DataStore) {
        makeObservable(this);
        this.loadOwned();
    }
}
