import { observable } from "mobx";

export const enum Phase {
    Setup,
    Hero,
    Movement,
    Shooting,
    Charge,
    Combat,
    Battleshock
}

export interface Player {
    name: string;
}

export class BattleStore {
    @observable turn = 0;

    @observable phase = Phase.Setup;

    @observable players = new Array<Player>();

    @observable player: Player | null = null;

    
}