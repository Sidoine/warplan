import * as React from "react";
import { BattleStore, getPhaseName } from "../stores/battle";
import { observer, inject } from "mobx-react";

export interface BattlePlayProps {
    battleStore?: BattleStore;
}

@inject("battleStore")
@observer
export class BattlePlay extends React.Component<BattlePlayProps> {
    public render() {
        return <div>{getPhaseName(this.props.battleStore!.phase)}</div>
    }
}