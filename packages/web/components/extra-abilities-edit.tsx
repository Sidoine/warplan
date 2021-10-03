import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { UnitWarscroll } from "../stores/warscroll";
import {
    Ability,
    AbilityCategory,
    abilityCategoryName,
    AbilityGroup
} from "../../common/data";
import { TableColumn } from "../atoms/add-button";
import { AddGroupButton } from "../atoms/add-group-button";

const extraAbilityColumns: TableColumn<Ability>[] = [
    { name: "Name", text: x => x.name },
    { name: "Description", text: x => x.description }
];

const ExtraAbility = observer(
    ({
        index,
        category,
        unit
    }: {
        index: number;
        category: AbilityCategory;
        unit: UnitWarscroll;
    }) => {
        const oldAbility = unit.extraAbilities.filter(
            x => x.category === category
        )[index];
        const handleChange = useCallback(
            (ability: Ability | null) => {
                if (ability === null) {
                    unit.removeExtraAbility(oldAbility);
                } else if (oldAbility) {
                    unit.replaceExtraAbility(oldAbility, ability);
                } else {
                    unit.addExtraAbility(ability);
                }
            },
            [oldAbility, unit]
        );
        return (
            <AddGroupButton<AbilityGroup, Ability>
                options={unit.availableAbilityGroups.filter(
                    x => x.category === category
                )}
                columns={extraAbilityColumns}
                getGroupLabel={x => x.name}
                getText={x => x.name}
                getValues={x => x.abilities}
                label={abilityCategoryName.get(category) ?? "?"}
                onChange={handleChange}
                value={oldAbility ?? null}
                key={index}
            />
        );
    }
);

const ExtraAbilityGroup = observer(function ExtraAbilityGroup({
    category,
    unit
}: {
    category: AbilityCategory;
    unit: UnitWarscroll;
}) {
    return (
        <>
            {[
                ...Array(
                    Math.max(
                        unit.getMaxNumberOfEnhancements(category),
                        unit.getNumberOfEnhancements(category)
                    )
                )
            ].map((_, index) => (
                <ExtraAbility
                    category={category}
                    index={index}
                    unit={unit}
                    key={index}
                />
            ))}
        </>
    );
});

export const ExtraAbilitiesEdit = observer(function ExtraAbilitiesEdit({
    unit
}: {
    unit: UnitWarscroll;
}) {
    return (
        <>
            {unit.abilityCategories.map(category => (
                <ExtraAbilityGroup
                    key={category}
                    category={category}
                    unit={unit}
                />
            ))}
        </>
    );
});
