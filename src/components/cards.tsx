import * as React from "react";
import { WarscrollStore } from "../stores/warscroll";
import { inject, observer } from "mobx-react";
import { computed } from "mobx";
import { AbilityCard, CardContent } from "./ability-card";
import { CardsStore } from "../stores/cards";
import { HiddenCard } from "./hidden-card";
import { AbilityCategory, Ability, Unit, Attack } from "../stores/units";
import { value } from "../helpers/react";

export interface CardsProps {
    warscrollStore?: WarscrollStore;
    cardsStore?: CardsStore;
}

@inject("warscrollStore", "cardsStore")
@observer
export class Cards extends React.Component<CardsProps> {
    private getUnitAbilities(u: Unit, attacks: Attack[] | undefined, abilities: Ability[] | undefined, result: CardContent[]) {
        if (abilities) result = result.concat(abilities
            .filter(x => !u.attacks || u.attacks.every(y => y.name !== x.name)).map(x => ({
            name: x.name,
            category: x.category,
            description: x.description,
                flavor: x.flavor,
            group: u.model.name,
            effects: x.effects,
                keywords: [[u.model.name]],
                imageUrl: u.pictureUrl
        } as CardContent)));
        if (attacks) result = result.concat(attacks.map(x => {
            const ability = abilities ? abilities.find(y => y.name === x.name) : undefined;
            return {
                name: x.name,
                group: u.model.name,
                category: x.melee ? AbilityCategory.MeleeAttack : AbilityCategory.RangedAttack,
                description: ability && ability.description,
                flavor: ability && ability.flavor,
                keywords: [[u.model.name]],
                values: [{ key: "RG", value: value(x.range) + '"' }, { key: "AT", value: value(x.attacks) }, { key: "HT", value: value(x.toHit) + "+" }, { key: "WO", value: value(x.toWound) + "+" }, { key: "DG", value: value(x.damage) }, { key: "RD", value: value(x.rend) }],
                imageUrl: u.pictureUrl
            } as CardContent
        }));
        return result;
    }

    @computed
    get abilities() {
        let result: CardContent[] = [];
        const w = this.props.warscrollStore!.warscroll;
        if (w.armyOption) {
            if (w.armyOption.abilities) result = result.concat(w.armyOption.abilities);
        }        
        if (w.allegiance.battleTraits) result = result.concat(w.allegiance.battleTraits);

        for (const unit of w.units) {
            if (unit.extraAbilities) result = result.concat(unit.extraAbilities.map(x => x.ability));
            const u = unit.unit;
            if (result.every(x => x.name !== u.model.name)) {
                result.push({
                    name: u.model.name,
                    category: AbilityCategory.Unit,
                    description: u.description,
                    flavor: u.flavor,
                    keywords: [u.keywords],
                    values: [{ key: "MV", value: value(u.move) }, { key: "WO", value: value(u.wounds) }, { key: "SV", value: value(u.save)+"+" }, { key: "BR", value: value(u.bravery) }],
                    imageUrl: u.pictureUrl,
                    group: u.model.name,
                } as CardContent);
                result = this.getUnitAbilities(u, u.attacks, u.abilities, result);
                if (u.options) {
                    for (const option of u.options) {
                        result = this.getUnitAbilities(u, option.attacks, option.abilities, result);
                    }
                }
            }            
        }
        return result;
    }


    render() {
        const cardsStore = this.props.cardsStore!;
        return <div className="cards"><div className="cards__visible">{this.abilities.filter(x => !cardsStore.isHidden(x.group || x.name)).map((x,i) => <AbilityCard key={i} onClick={this.handleShownAbilityClick} ability={x} />)}</div>
        <div className="cards__hidden">{Array.from(cardsStore.names).filter(x => x[1]).map(([name]) => <HiddenCard key={name} name={name} onClick={this.handleHiddenAbilityClick} />)}</div></div>;
    }

    private handleShownAbilityClick = (name: string) => {
        this.props.cardsStore!.setAbilityHidden(name, true);
    }

    private handleHiddenAbilityClick = (name: string) => {
        this.props.cardsStore!.setAbilityHidden(name, false);
    }
}