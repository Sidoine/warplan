import { observable } from "mobx";
import { Warscroll, WarscrollUnit } from "./warscroll";
import { Phase, UnitsStore } from "./units";

export interface Player {
    name: string;
    warscroll: Warscroll;
}

export class BattleStore {
    @observable turn = 0;

    @observable phase = Phase.Setup;

    @observable players = new Array<Player>();

    @observable player: Player | null = null; 
    
    constructor(units: UnitsStore) {
        const stormcastWarcroll = new Warscroll(units);
        stormcastWarcroll.allegiance = units.getAllegiance("stormcastEternals");
        stormcastWarcroll.units.push(new WarscrollUnit(stormcastWarcroll, units.getUnit("toto")))
        // const stormcast: Player = {
        //     name: "Stormcast",
        //     warscroll: stormcastWarcroll
        // }
    }
}