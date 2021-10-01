import * as React from "react";
import { observer } from "mobx-react-lite";
import AddButton, { TableColumn } from "../atoms/add-button";
import { useStores } from "../stores";
import { AllAbilities } from "../atoms/warscroll-components";
import { Role } from "../../common/definitions";
import { Unit } from "../../common/data";

export interface SceneriesListProps {
    title: string;
    role: Role;
}
const columns: TableColumn<Unit>[] = [
    { name: "Name", text: x => x.name },
    {
        name: "Abilities",
        text: x => x.abilities && <AllAbilities abilities={x.abilities} />
    },
    { name: "Points", text: x => x.points }
];

function EndlessSpellsList({ title, role }: SceneriesListProps) {
    const { armyListStore, uiStore } = useStores();

    return (
        <AddButton
            columns={columns}
            placeholder={title}
            options={uiStore.warscrolls.filter(x => x.roles.includes(role))}
            onChange={armyListStore.addUnit}
        />
    );
}

export default observer(EndlessSpellsList);
