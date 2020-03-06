import {
    Unit,
    AbilityCategory,
    WarscrollUnitInterface,
    WarscrollInterface
} from "./units";

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

export function hasKeyword(unit: Unit, keyword: string) {
    return unit.keywords.indexOf(keyword) >= 0;
}

export function canUseAbilityCategory(
    unit: WarscrollUnitInterface,
    ws: WarscrollInterface,
    ability: AbilityCategory | undefined
): boolean {
    switch (ability) {
        case AbilityCategory.Artefact:
            return (
                (unit.definition.isLeader
                    ? unit.definition.isLeader(ws)
                    : false) &&
                unit.definition.maxCount !== 1 &&
                ws.numberOfArtifacts < ws.maxArtifacts
            );
        case AbilityCategory.CommandTrait:
            return unit.isGeneral && unit.definition.maxCount !== 1;
        case AbilityCategory.Command:
            return unit.definition.isLeader
                ? unit.definition.isLeader(ws)
                : false;
        case AbilityCategory.Mount:
            return true;
        case AbilityCategory.Prayer:
            return hasKeyword(unit.definition, "PRIEST");
        case AbilityCategory.Spell:
            return hasKeyword(unit.definition, "WIZARD");
        default:
            return true;
    }
}
