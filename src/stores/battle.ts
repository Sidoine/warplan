import { observable } from "mobx";
import { Warscroll } from "./warscroll";
import { Phase, UnitsStore } from "./units";

export interface Player {
    name: string;
    warscroll: Warscroll;
}

export const phases = [ Phase.Any, Phase.Setup, Phase.Hero, Phase.Movement, Phase.Shooting, Phase.Charge, Phase.Combat, Phase.Battleshock ];

export function getPhaseName(phase: Phase) {
    switch (phase) {
        case Phase.Any:
            return "Any";
        case Phase.Setup:
            return "Setup";
        case Phase.Hero:
            return "Hero";
        case Phase.Movement:
            return "Movement";
        case Phase.Shooting:
            return "Shooting";
        case Phase.Charge:
            return "Charge";
        case Phase.Combat:
            return "Combat";
        case Phase.Battleshock:
            return "Battleshock";
    }
    return "Unknown phase";
}

export class BattleStore {
    @observable turn = 0;

    @observable phase = Phase.Setup;

    @observable players = new Array<Player>();

    @observable player: Player | null = null; 
    
    constructor(units: UnitsStore) {
        // const stormcastWarcroll = new Warscroll(units);
        // stormcastWarcroll.allegiance = units.getAllegiance("stormcastEternals");
        // stormcastWarcroll.units.push(new WarscrollUnit(stormcastWarcroll, units.getUnit("toto")))
        // const stormcast: Player = {
        //     name: "Stormcast",
        //     warscroll: stormcastWarcroll
        // }
    }
}