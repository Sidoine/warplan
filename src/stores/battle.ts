import { observable } from "mobx";
import { Warscroll, WarscrollUnit } from "./warscroll";
import { Ability, Phase } from "./units";

export interface UnitAura {
    ability: Ability;
}

export class UnitState {
    @observable wounds = 0;

    public (unit: WarscrollUnit) {
    }
}

export interface Player {
    name: string;
    warscroll: Warscroll;
}

export class BattleStore {
    @observable turn = 0;

    @observable phase = Phase.Setup;

    @observable players = new Array<Player>();

    @observable player: Player | null = null;

    
}