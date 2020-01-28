import { Attack, DamageTable, Ability } from "../stores/units";
import * as React from "react";
import { value } from "../helpers/react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles
} from "@material-ui/core";
import warscrollMiddle from "../assets/warscroll-middle.png";
import warscrollLeft from "../assets/warscroll-left.png";
import warscrollRight from "../assets/warscroll-right.png";

export const useWarscrollStyles = makeStyles({
    wounds: {
        whiteSpace: "nowrap"
    },
    warscroll: {
        pageBreakInside: "avoid",
        margin: "10px",
        padding: "10px",
        borderRadius: "25px",
        border: "2px solid black",
        fontFamily: "serif",
        maxWidth: "900px",
        backgroundColor: "white"
    },
    count: {
        fontSize: "15px"
    },
    flavor: {
        fontWeight: "bold",
        textAlign: "center",
        fontStyle: "italic"
    },
    title: {
        backgroundImage: `url(${warscrollMiddle})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "100% 100%",
        height: "160px",
        /*width: 300px;*/
        flex: 1,
        paddingTop: "40px",
        lineHeight: "40px",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center"
    },
    option: {
        fontSize: "25px",
        fontStyle: "italic"
    },
    battalion: {
        height: "100px",
        backgroundPositionY: "-20px",
        backgroundSize: "100% 160px",
        paddingTop: "20px"
    },
    stats: {
        backgroundImage: `url(${warscrollLeft})`,
        width: "160px",
        height: "160px",
        backgroundSize: "100%",
        position: "relative",
        fontSize: "1.2em",
        fontWeight: "bold",
        textAlign: "center"
    },
    woundsStat: {
        position: "absolute",
        left: "45px",
        top: "70px"
    },
    moveStat: {
        position: "absolute",
        left: "70px",
        top: "40px"
    },
    saveStat: {
        position: "absolute",
        left: "100px",
        top: "70px"
    },
    braveryStat: {
        position: "absolute",
        left: "75px",
        top: "100px"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        fontVariant: "small-caps"
    },
    image: {
        width: "160px",
        height: "160px",
        background: `url(${warscrollRight})`,
        backgroundSize: "100%",
        position: "relative",
        backgroundRepeat: "no-repeat",
        ["& > img"]: {
            position: "absolute",
            left: "13px",
            top: "13px",
            width: "130px",
            height: "130px",
            borderRadius: "100px"
        }
    },
    sectionHeader: {
        fontVariant: "small-caps",
        fontSize: "1.4rem",
        marginTop: "1rem"
    },
    abilities: {
        columnCount: 3,
        ["& > header"]: {
            fontWeight: "bold"
        }
    },
    abilityName: {
        fontWeight: "bold"
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
        borderTop: "2px solid #b5ad82",
        borderBottom: "2px solid #b5ad82",
        marginTop: "5px",
        ["& > div"]: {
            padding: "5px"
        }
    },
    keywordsHeader: {
        backgroundColor: "#908149",
        textTransform: "uppercase"
    },
    woundTable: {
        textAlign: "center"
    }
});

export interface AttackWithCount {
    attack: Attack;
    count?: number;
}

export function AllAttacks({ attacks }: { attacks: AttackWithCount[] }) {
    return (
        <>
            {attacks.some(x => x.attack.melee) && (
                <Attacks
                    attacks={attacks.filter(x => x.attack.melee)}
                    name="Melee Weapons"
                />
            )}
            {attacks.some(x => !x.attack.melee) && (
                <Attacks
                    attacks={attacks.filter(x => !x.attack.melee)}
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
    attacks: AttackWithCount[];
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
                            {x.attack.name}{" "}
                            {x.count !== undefined && <>(x{x.count})</>}
                        </td>
                        <td>{value(x.attack.range)}" </td>
                        <td>{value(x.attack.attacks)} </td>
                        <td>{value(x.attack.toHit)} </td>
                        <td>{value(x.attack.toWound)} </td>
                        <td>{value(x.attack.rend) || "-"} </td>
                        <td>{value(x.attack.damage)} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export function AllAbilities({
    title,
    abilities,
    description
}: {
    title: string;
    abilities: Ability[];
    description?: string;
}) {
    const classes = useWarscrollStyles();
    return (
        <div>
            <header className={classes.sectionHeader}>{title}</header>
            {description && <div>{description}</div>}
            {abilities.map((x, index) => (
                <div key={index}>
                    <span className={classes.abilityName}>{x.name}:</span>
                    {x.flavor && (
                        <span className={classes.flavor}> {x.flavor}</span>
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
        <Table className={classes.woundTable}>
            <TableHead>
                <TableRow>
                    <TableCell>Wounds Suffered</TableCell>
                    {damageTable.columns.map(x => (
                        <TableCell key={x.name}>{x.name}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {ranges.map((x, index) => (
                    <TableRow key={x}>
                        <TableCell>{x}</TableCell>
                        {damageTable.columns.map(x => (
                            <TableCell key={x.name}>
                                {" "}
                                {x.values[index]}{" "}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
