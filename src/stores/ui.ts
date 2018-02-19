import { observable, action } from "mobx";

export class UiStore {
    @observable
    basketPopin: boolean = false;

    @action
    showBasketPopin() {
        this.basketPopin = true;
    }

    @action
    closeBasketPopin() {
        this.basketPopin = false;
    }
}