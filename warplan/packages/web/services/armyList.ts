/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-service-helpers";
import * as views from "./views";

export class ArmyListController {
	constructor(private client: helpers.ApiClient) {}

    create = (model: views.ArmyListEdit) => {
        return this.client.fetchJson<views.ArmyList>("api/army-list/", "POST", JSON.stringify(model));
    }

    delete = (id: number) => {
        return this.client.fetch(`api/army-list/${id}`, "DELETE", undefined);
    }

    getAll = () => {
        return this.client.fetchJson<views.ArmyList[]>("api/army-list/", "GET", undefined);
    }

    update = (id: number, model: views.ArmyListEdit) => {
        return this.client.fetch(`api/army-list/${id}`, "PUT", JSON.stringify(model));
    }
}

