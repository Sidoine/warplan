import * as React from "react";
import { AbilityCategory } from "../../common/data";
import makeStyles from "@mui/styles/makeStyles";
import background from "../assets/ws-background.png";
import header from "../assets/ws-header.png";
import warscrollSeparator from "../assets/ws-separator.png";
import { Faction } from "../../common/data";
import { FactionIcon } from "./faction-icon";

export type CardColor = "allegiance" | "common" | "armyOption";

export interface CardContent {
    name: string;
    category?: AbilityCategory;
    flavor?: string;
    description?: string;
    keywords?: string[][];
    values?: { key: string; value: string | number | undefined }[];
    imageUrl?: string;
    group?: string;
    color: CardColor;
    faction?: Faction;
}

export interface AbilityCardProps {
    ability: CardContent;
    onClick: (group: string) => void;
}

function capitalizeFirst(name: string) {
    return name[0].toLocaleUpperCase() + name.substring(1);
}

const useStyle = makeStyles({
    abilityCard: {
        background: `url(${background})`,
        backgroundSize: "100% 100%",
        breakInside: "avoid",
        display: "inline-block",
        margin: 0,
        width: "63mm",
        height: "88mm",
        position: "relative",
        border: "2px solid #a29966",
        padding: "2mm",
        fontSize: "3mm",
        overflow: "hidden",
        fontFamily: "Pompei",
    },
    image: {
        position: "absolute",
        zIndex: -1,
        width: "100%",
        top: 0,
        left: 0,
    },
    header: {
        // borderRadius: "0.3rem",
        padding: "0.2rem",
        marginLeft: "0.1rem",
        marginRight: "0.1rem",
        marginBottom: "0.4rem",
    },
    title: {
        border: "2px solid #8a7c32",
        background: `url(${header})`,
        backgroundSize: "100% 100%",
        fontSize: "5mm",
        fontWeight: "bold",
        textAlign: "center",
        fontVariant: "small-caps",
    },
    description: {
        padding: "2mm",
        // backgroundColor: "rgba(220, 200, 120, 0.7)",
        lineHeight: "100%",
        textAlign: "justify",
        // borderRadius: "0.2rem"
    },
    group: {
        textAlign: "center",
        fontStyle: "italic",
    },
    flavor: {
        // borderRadius: "0.2rem",
        fontStyle: "italic",
        fontSize: "3mm",
        lineHeight: "100%",
        // color: "white",
        padding: "2mm",
        marginTop: "2mm",
        textAlign: "center",
        // backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    category: {
        fontSize: "3mm",
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: "0.5rem",
        "&::before": {
            content: "' '",
            backgroundImage: `url(${warscrollSeparator})`,
            backgroundSize: "100%",
            width: "6px",
            height: "6px",
            display: "inline-block",
            marginRight: "5px",
            marginBottom: "1px",
        },
        "&::after": {
            content: "' '",
            backgroundImage: `url(${warscrollSeparator})`,
            backgroundSize: "100%",
            width: "6px",
            height: "6px",
            display: "inline-block",
            marginLeft: "5px",
            marginBottom: "1px",
        },
    },
    keywords: {
        position: "absolute",
        left: 0,
        bottom: 0,
        padding: "1mm",
        width: "63mm",
        fontWeight: "bold",
        color: "#555",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        textAlign: "center",
    },
    values: {
        position: "absolute",
        left: 0,
        height: "100%",
        borderRight: "2px solid #b5ad82",
        top: 0,
        div: {
            paddingLeft: "1mm",
        },
        ["div:nth-child(even)"]: {
            backgroundColor: "#b5ad82",
        },
        ["div:nth-child(odd)"]: {
            backgroundColor: "white",
        },
    },
});

function getAbilityCategory(type: AbilityCategory | undefined) {
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
        case AbilityCategory.BattleTrait:
            return "Battle Trait";
        case AbilityCategory.Triumph:
            return "Triumph";
        case AbilityCategory.UniqueEnhancement:
            return "Unique Enhancement";
        case AbilityCategory.GrandStrategy:
            return "Grand Strategy";
    }
}

// function color(c: CardColor) {
//     switch (c) {
//         case "common":
//             return "rgba(255, 255, 255, 0.8)";
//         case "allegiance":
//             return "rgba(230, 230, 255, 0.8)";
//         case "armyOption":
//             return "rgba(255, 220, 230, 0.8)";
//     }
// }

export function AbilityCard({ ability, onClick }: AbilityCardProps) {
    const classes = useStyle();
    return (
        <div
            className={classes.abilityCard}
            onClick={() => onClick(ability.group || ability.name)}
        >
            {!ability.description && !ability.flavor && ability.imageUrl && (
                <img className={classes.image} src={ability.imageUrl} />
            )}
            <div
                className={classes.header}
                // style={{ backgroundColor: color(ability.color) }}
            >
                {ability.category && (
                    <div className={classes.category}>
                        {getAbilityCategory(ability.category)}
                    </div>
                )}
                <div className={classes.title}>{ability.name}</div>
                {ability.group && (
                    <div className={classes.group}>
                        {capitalizeFirst(ability.group)}
                    </div>
                )}
            </div>
            {ability.values && (
                <div className={classes.values}>
                    {ability.values.map((x) => (
                        <React.Fragment key={x.key}>
                            <div>{x.key}</div>
                            <div>{x.value}</div>
                        </React.Fragment>
                    ))}
                </div>
            )}
            {ability.description && (
                <div className={classes.description}>{ability.description}</div>
            )}
            {ability.flavor && (
                <div className={classes.flavor}>{ability.flavor}</div>
            )}
            {(ability.keywords && ability.keywords.length > 0) ||
                (ability.faction && (
                    <div className={classes.keywords}>
                        {ability.faction && (
                            <FactionIcon
                                faction={ability.faction}
                                size="small"
                            />
                        )}
                        {ability.keywords &&
                            ability.keywords
                                .map((x) => x.join(", "))
                                .join(" or ")}
                    </div>
                ))}
        </div>
    );
}
