import { Unit, ArmyListInterface } from "../../common/data";

export function hasKeywords(
    unit: { keywords: string[] },
    keywords?: string[][]
) {
    return (
        keywords === undefined ||
        keywords.length === 0 ||
        keywords.some(x => x.every(y => unit.keywords.indexOf(y) >= 0))
    );
}

export function hasKeywordInArmy(ws: ArmyListInterface, keywords: string[][]) {
    return ws.getUnitsWithKeywords(keywords).length > 0;
}

export function hasKeyword(unit: Unit, keyword: string) {
    return unit.keywords.indexOf(keyword) >= 0;
}
