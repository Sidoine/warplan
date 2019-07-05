import * as React from "react";
import { AbilityCategory } from "../stores/units";
import "./ability-card.less";

export interface CardContent {
    name: string;
    category?: AbilityCategory;
    flavor?: string;
    description?: string;
    keywords?: string[][];
    values?: { key: string, value: string | number | undefined }[];
    imageUrl?: string;
    group?: string;
}

export interface AbilityCardProps {
    ability: CardContent;
    onClick: (group: string) => void;
}

export class AbilityCard extends React.Component<AbilityCardProps> {
    render() {
        const ability = this.props.ability;
        return <div className="ability-card" onClick={() => this.props.onClick(ability.group || ability.name)}>
            {!ability.description && !ability.flavor && ability.imageUrl && <img className="ability-card__image" src={ability.imageUrl}/>}
            <div className="ability-card__header">
            {ability.category && <div className="ability-card__category">· {this.getAbilityCategory(ability.category)} ·</div>}
            <div className="ability-card__title">{ability.name}</div>
            </div>
            {ability.values && <div className="ability-card__values">{ability.values.map(x => <React.Fragment key={x.key}><div>{x.key}</div><div>{x.value}</div></React.Fragment>)}</div>}
            {ability.description && <div className="ability-card__description">{ability.description}</div>}
            {ability.flavor && <div className="ability-card__flavor">{ability.flavor}</div>}
            {ability.keywords && ability.keywords.length > 0 && <div className="ability-card__keywords">{ability.keywords.map(x => x.join(', ')).join(' or ')}</div>}
        </div>;
    }

    getAbilityCategory(type: AbilityCategory | undefined) {
        switch (type) {
            case AbilityCategory.Command:
                return "Command ability";
            case AbilityCategory.Army:
                return "Army ability";
            case AbilityCategory.Spell:
                return "Spell";
            case AbilityCategory.CommandTrait:
                return "Command trait";
            case AbilityCategory.Mount:
                return "Mount trait";
            case AbilityCategory.Artefact:
                return "Artefact";
            case AbilityCategory.Prayer:
                return "Prayer";  
            case AbilityCategory.RangedAttack:
                return "Ranged attack";
            case AbilityCategory.Unit:
                return "Unit";
            case AbilityCategory.MeleeAttack:
                return "Melee attack";
            
        }
    }
}