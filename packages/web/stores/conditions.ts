import {
    Unit,
    AbilityCategory,
    UnitWarscrollInterface,
    ArmyListInterface
} from "../../common/data";

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

export function canAddAbilityCategory(
    unit: UnitWarscrollInterface,
    ws: ArmyListInterface,
    ability: AbilityCategory | undefined
): boolean {
    switch (ability) {
        case AbilityCategory.Artefact:
            return (
                unit.isLeader &&
                !unit.definition.unique &&
                ws.numberOfArtifacts < ws.maxArtifacts
            );
        case AbilityCategory.CommandTrait:
            return unit.isGeneral && !unit.definition.unique;
        case AbilityCategory.Command:
            return unit.isLeader;
        case AbilityCategory.Mount:
            return hasKeyword(unit.definition, "HERO");
        case AbilityCategory.Prayer:
            return hasKeyword(unit.definition, "PRIEST");
        case AbilityCategory.Spell:
            return hasKeyword(unit.definition, "WIZARD");
        case AbilityCategory.BattleTrait:
        case AbilityCategory.Triumph:
        case AbilityCategory.GrandStrategy:
            return false;
        default:
            return true;
    }
}
