import { Unit, ExtraAbilityTest, AbilityCategory, Allegiance, WarscrollUnitInterface, WarscrollInterface } from "./units";

export function hasKeywords(unit: Unit, keywords?: string[][]) {
    return keywords === undefined || keywords.length === 0 || keywords.some(x => x.every(y => unit.keywords.indexOf(y) >= 0));
}

export function hasKeyword(unit: Unit, keyword: string) {
    return unit.keywords.indexOf(keyword) >= 0;
}

export function hasAllegiance(unit: Unit, allegiance: Allegiance) {
    return unit.keywords.indexOf(allegiance.keyword) >= 0;
}

export function isAloneInCategory(unit: WarscrollUnitInterface, category: AbilityCategory) {
    return unit.extraAbilities.every(x => x.ability.category !== category);
}

export const commandTraitAvailable: ExtraAbilityTest = (unit, ws) => unit.isGeneral && ws.extraAbilities.every(x => x.category !== "command");

export function commandTraitWithKeywordAvailable(keywords: string[][]): ExtraAbilityTest {
    return (unit, ws) => commandTraitAvailable(unit, ws) && hasKeywords(unit.unit, keywords);
}

export const artifactAvailable: ExtraAbilityTest = (unit, ws) => !!unit.unit.isLeader && isAloneInCategory(unit, AbilityCategory.Artefact)  
    && ws.numberOfArtifacts < ws.maxArtifacts;
         
function notUsed(ws: WarscrollInterface, abilityName: string) {
    return ws.extraAbilities.every(x => x.ability.name !== abilityName);
}

function canUseAbilityCategory(unit: WarscrollUnitInterface, ws: WarscrollInterface, ability: AbilityCategory, name: string): boolean {
    switch (ability) {
        case AbilityCategory.Artefact:
            return (unit.unit.isLeader ? unit.unit.isLeader(ws) : false) && ws.numberOfArtifacts < ws.maxArtifacts && notUsed(ws, name);
        case AbilityCategory.CommandTrait:
            return unit.isGeneral;
        case AbilityCategory.Command:
            return unit.unit.isLeader ? unit.unit.isLeader(ws) : false;
        case AbilityCategory.Mount:
            return notUsed(ws, name);
        case AbilityCategory.Prayer:
            return hasKeyword(unit.unit, "PRIEST") && notUsed(ws, name);
        case AbilityCategory.Spell:
            return hasKeyword(unit.unit, "WIZARD") && notUsed(ws, name);
        default:
            return true;
    }
}

export function canUseAbility(name: string, category: AbilityCategory, allegianceKeyword: string, keywords?: string[][]): ExtraAbilityTest {
    return (unit, ws) => unit.extraAbilities.every(x => x.ability.category !== category)  && canUseAbilityCategory(unit, ws, category, name) && unit.unit.keywords.indexOf(allegianceKeyword) >= 0 && hasKeywords(unit.unit, keywords);
}
 
export function canUseArmyOptionAbility(name: string, category: AbilityCategory, allegianceKeyword: string, armyOptionName: string, keywords?: string[][]): ExtraAbilityTest {
    return (unit, ws) => ws.armyOption !== null && ws.armyOption.name === armyOptionName && unit.extraAbilities.every(x => x.ability.category !== category) && canUseAbilityCategory(unit, ws, category, name) && unit.unit.keywords.indexOf(allegianceKeyword) >= 0 && hasKeywords(unit.unit, keywords);
}

// function keywordAvailable(category: string, allegianceKeyword: string, keyword: string): ExtraAbilityTest {
//     return (unit, ws) => unit.extraAbilities.every(x => x.category !== category) && unit.unit.keywords.indexOf(allegianceKeyword) >= 0 && unit.unit.keywords.indexOf(keyword) >= 0;
// }
