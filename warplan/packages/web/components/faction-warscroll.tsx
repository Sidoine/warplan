import React from "react";
import { AbilityGroup, Faction } from "../../common/data";
import { SubWarscroll, Warscroll } from "../atoms/warscroll-components";
import { Abilities } from "./warscroll-abilities";

function AbilityGroupView({ group }: { group: AbilityGroup }) {
    return (
        <SubWarscroll title={group.name}>
            <Abilities
                key={group.id}
                abilities={group.abilities}
                unit={group}
            />
        </SubWarscroll>
    );
}

export function FactionWarscroll({ faction }: { faction: Faction }) {
    return (
        <Warscroll title={faction.name}>
            {faction.abilityGroups &&
                faction.abilityGroups.map((group) => (
                    <AbilityGroupView group={group} key={group.id} />
                ))}
        </Warscroll>
    );
}
