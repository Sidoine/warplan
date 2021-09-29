import { Attack, DamageTable, Ability } from "../../common/data";
import * as React from "react";
import { value } from "../helpers/react";
import { makeStyles } from "@material-ui/core";
import warscrollMiddle from "../assets/ws-header.png";
import warscrollLeft from "../assets/ws-left.png";
import warscrollRight from "../assets/ws-right.png";
import warscrollBackground from "../assets/ws-background.png";
import warscrollSeparator from "../assets/ws-separator.png";

export const useWarscrollStyles = makeStyles({
    wounds: {
        whiteSpace: "nowrap"
    },
    warscroll: {
        pageBreakInside: "avoid",
        margin: "10px",
        padding: "10px",
        maxWidth: "900px",
        backgroundImage: `url(${warscrollBackground})`,
        backgroundSize: "100%",
        fontFamily: "Pompei",
        fontSize: "0.8rem",

        "@media (max-width: 600px)": {
            maxHeight: "95vh",
            overflow: "auto"
        },
        "@media print": {
            maxWidth: "15cm"
        }
    },
    type: {
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
            marginBottom: "1px"
        },
        "&::after": {
            content: "' '",
            backgroundImage: `url(${warscrollSeparator})`,
            backgroundSize: "100%",
            width: "6px",
            height: "6px",
            display: "inline-block",
            marginLeft: "5px",
            marginBottom: "1px"
        }
    },
    count: {
        fontSize: "1rem"
    },
    flavor: {
        fontWeight: "bold",
        lineHeight: "0.9rem",
        textAlign: "center",
        marginBottom: "8px"
    },
    title: {
        flex: 1,
        paddingTop: "20px"
    },
    name: {
        backgroundImage: `url(${warscrollMiddle})`,
        backgroundSize: "100% 100%",
        marginLeft: "-4rem",
        paddingLeft: "4rem",
        marginRight: "-4rem",
        paddingRight: "4rem",
        marginBottom: "0.6rem",
        border: "2px solid #8a7c32",
        lineHeight: "1.6rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
        fontVariant: "small-caps",
        "@media (max-width: 600px)": {
            marginLeft: 0,
            marginRight: 0
        }
    },
    subName: {
        fontSize: "1rem",
        marginTop: "-0.5rem"
    },
    option: {
        fontSize: "1.1rem",
        fontStyle: "italic"
    },
    battalion: {
        minHeight: "80px",
        backgroundPositionY: "-20px",
        backgroundSize: "100% 160px",
        paddingTop: "20px",
        "& > $name": {
            marginLeft: 0,
            marginRight: 0
        }
    },
    endlessSpell: {
        "& $name": {
            marginLeft: 0
        }
    },
    stats: {
        backgroundImage: `url(${warscrollLeft})`,
        backgroundRepeat: "no-repeat",
        width: "128px",
        height: "128px",
        backgroundSize: "100%",
        position: "relative",
        fontSize: "14px",
        fontWeight: "bold",
        textAlign: "center",
        "@media (max-width: 600px)": {
            display: "float",
            transform: "scale(0.75)",
            margin: "-40px",
            marginTop: "-30px"
        }
    },
    woundsStat: {
        position: "absolute",
        left: "36px",
        top: "56px"
    },
    moveStat: {
        position: "absolute",
        left: "64px",
        top: "28px",
        transform: "translate(-50%)"
    },
    saveStat: {
        position: "absolute",
        left: "80px",
        top: "56px"
    },
    braveryStat: {
        position: "absolute",
        left: "64px",
        top: "80px",
        transform: "translate(-50%)"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "center"
        }
    },
    image: {
        width: "128px",
        height: "128px",
        background: `url(${warscrollRight})`,
        backgroundSize: "100%",
        position: "relative",
        backgroundRepeat: "no-repeat",
        ["& > img"]: {
            position: "absolute",
            left: "9px",
            top: "22px",
            width: "96px",
            height: "96px",
            borderRadius: "96px"
        },
        "@media (max-width: 600px)": {
            display: "none"
        }
    },
    sectionHeader: {
        fontVariant: "small-caps",
        fontSize: "1rem",
        ["& + &"]: {
            marginTop: "1rem"
        },
        breakAfter: "avoid-column"
    },
    abilities: {
        columnCount: 3,
        ["& > header"]: {
            fontWeight: "bold"
        },
        "@media (max-width: 600px)": {
            columnCount: 1
        },
        fontSize: "0.75rem"
    },
    abilityName: {
        fontWeight: "bold"
    },
    abilityFlavor: {
        fontStyle: "italic"
    },
    attack: {
        margin: "8px",
        width: "calc(100% - 16px)",
        borderCollapse: "collapse",
        borderBottom: "2px solid #b5ad82",
        fontWeight: "bold",
        textAlign: "center",
        ["& > thead"]: {
            backgroundColor: "#e6dccb",
            borderTop: "2px solid #b5ad82",
            borderBottom: "2px solid #b5ad82"
        }
    },
    attackName: {
        textTransform: "uppercase"
    },
    keywords: {
        display: "flex",
        border: "2px solid #8a7c32",
        marginTop: "5px",
        fontSize: "0.75rem",
        ["& > div"]: {
            padding: "5px"
        }
    },
    keywordsHeader: {
        backgroundColor: "#8a7c32",
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    woundTable: {
        textTransform: "uppercase",
        backgroundColor: "#d0c89a"
    }
});

export function AllAttacks({ attacks }: { attacks: Attack[] }) {
    return (
        <>
            {attacks.some(x => x.melee) && (
                <Attacks
                    attacks={attacks.filter(x => x.melee)}
                    name="Melee Weapons"
                />
            )}
            {attacks.some(x => !x.melee) && (
                <Attacks
                    attacks={attacks.filter(x => !x.melee)}
                    name="Missile Weapons"
                />
            )}
        </>
    );
}

export function Attacks({
    attacks,
    name
}: {
    attacks: Attack[];
    name: string;
}) {
    const classes = useWarscrollStyles();
    return (
        <table className={classes.attack}>
            <thead>
                <tr>
                    <td className={classes.attackName}>{name}</td>
                    <td>Range</td>
                    <td>Attacks</td>
                    <td>To Hit</td>
                    <td>To Wound</td>
                    <td>Rend</td>
                    <td>Damage</td>
                </tr>
            </thead>
            <tbody>
                {attacks.map((x, index) => (
                    <tr key={index}>
                        <td>
                            {x.name}
                        </td>
                        <td>{value(x.range)}&quot; </td>
                        <td>{value(x.attacks)} </td>
                        <td>{value(x.toHit)} </td>
                        <td>{value(x.toWound)} </td>
                        <td>{value(x.rend) || "-"} </td>
                        <td>{value(x.damage)} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export function AllAbilities({
    title,
    abilities,
    description,
    noFlavor
}: {
    title?: string;
    abilities: Ability[];
    description?: string;
    noFlavor?: boolean;
}) {
    const classes = useWarscrollStyles();
    return (
        <div>
            {title && <header className={classes.sectionHeader}>{title}</header>}
            {description && <div>{description}</div>}
            {abilities.map((x, index) => (
                <div key={index}>
                    <span className={classes.abilityName}>{x.name}:</span>
                    {x.flavor && !noFlavor && (
                        <span className={classes.abilityFlavor}>
                            {" "}
                            {x.flavor}
                        </span>
                    )}
                    <div>{x.description}</div>
                </div>
            ))}
        </div>
    );
}

export function WoundEffects({ damageTable }: { damageTable: DamageTable }) {
    const ranges = damageTable.ranges;
    const classes = useWarscrollStyles();
    return (
        <table className={classes.attack}>
            <thead>
                <tr>
                    <th
                        colSpan={damageTable.columns.length + 1}
                        className={classes.woundTable}
                    >
                        Damage Table
                    </th>
                </tr>
                <tr>
                    <th>Wounds Suffered</th>
                    {damageTable.columns.map(x => (
                        <th key={x.name}>{x.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {ranges.map((x, index) => (
                    <tr key={x}>
                        <td>{x}</td>
                        {damageTable.columns.map(x => (
                            <td key={x.name}>{x.values[index]} </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
