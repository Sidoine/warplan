import { DataStoreImpl } from "../imported-data";
// import { Ability, AbilityCategory, ArmyOption, Phase, TargetType } from "../unit";
// import { override, setAttackAsOption } from "./tools";

// function addBoxes(data: DataStoreImpl): void {
//     data.boxes.push({
//         id: "archaon",
//         name: "Archaon Everchosen",
//         units: [{ count: 1, models: [data.models.archaonTheEverchosen] }],
//         price: 130
//     });
// }

// function fixUnits(data: DataStoreImpl): void {
//     override<Ability>(
//         data.abilities.archaonTheEverchosenTheArmourOfMorkar,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     defenseAura: {phase: Phase.Combat}
//                 },
//                 {
//                     targetType: TargetType.Unit,
//                     defenseAura: {phase: Phase.Shooting}
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.archaonTheEverchosenTheCrownOfDomination,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     phase: Phase.Battleshock
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.archaonTheEverchosenTheEyeOfSheerian,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     defenseAura: {phase: Phase.Combat}
//                 },
//                 {
//                     targetType: TargetType.Unit,
//                     defenseAura: {phase: Phase.Shooting}
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.archaonTheEverchosenTheEverchosen,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     phase: Phase.Hero
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.archaonTheEverchosenTheSlayerOfKings,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Model,
//                     phase: Phase.Combat
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.archaonTheEverchosenThreeHeadedTitan,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Model,
//                     phase: Phase.Hero
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.archaonTheEverchosenWarlordWithoutEqual,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Model,
//                     phase: Phase.Hero
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.archaonTheEverchosenAllSeeingDominion,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Model,
//                     phase: Phase.Hero,
//                     defenseAura: {phase: Phase.Hero}
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.archaonTheEverchosenByMyWill,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Model,
//                     phase: Phase.Hero
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.varanguardDaemonbound,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     phase: Phase.Combat
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.varanguardFavouredOfTheEverchosen,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     phase: Phase.Combat
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.varanguardImpalingCharge,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     phase: Phase.Combat
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.varanguardMarkOfChaos,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     phase: Phase.Setup
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.varanguardWarpsteelShields,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     phase: Phase.Hero,
//                     defenseAura: {phase: Phase.Hero}
//                 },
//             ];
//         }
//     );

//     override<Ability>(
//         data.abilities.varanguardRelentlessKillers,
//         (x) => {
//             x.effects = [
//                 {
//                     targetType: TargetType.Unit,
//                     phase: Phase.Combat
//                 },
//             ];
//         }
//     );

//     setAttackAsOption(
//         data.units.varanguard,
//         data.attacks.varanguardDaemonforgedBlade,
//         undefined,
//         [data.abilities.varanguardDaemonbound],
//         "main"
//     );

//     setAttackAsOption(
//         data.units.varanguard,
//         data.attacks.varanguardFellspear,
//         undefined,
//         [data.abilities.varanguardImpalingCharge],
//         "main"
//     );

//     setAttackAsOption(
//         data.units.varanguard,
//         data.attacks.varanguardEnsorcelledWeapon,
//         undefined,
//         [],
//         "main"
//     );
// }

// function fixAllegiance(data: DataStoreImpl): void {
//     const tirelessConquerors: Ability = {
//         id: "khorne_tirelessconquerors",
//         name: "Tireless Conquerors",
//         flavor:
//             "Entire empires have crumbled beneath the relentless campaigns of the Goretide.",
//         description:
//             'You can re-roll wound rolls of 1 for attacks made with melee weapons by friendly GORETIDE MORTAL units wholly within 12" of an objective marker',
//         category: AbilityCategory.BattleTrait,
//         effects: [{ targetType: TargetType.Friend, phase: Phase.Combat }],
//     };
//     const everOnwards: Ability = {
//         id: "khorne_everonwards",
//         name: "Ever Onwards",
//         flavor:
//             "At a barked command, the Goretide’s battle line advances with startling rapidity to spill the blood of the foe.",
//         description:
//             'You can use this command ability before you make a run roll for 1 friendly GORETIDE BLOODREAVERS or GORETIDE BLOOD WARRIORS unit wholly within 16" of a friendly model with this command ability. If you do so, that run roll is treated as being 6. In addition, that unit can run and still charge later in the same turn.',
//         category: AbilityCategory.Command,
//         effects: [
//             {
//                 phase: Phase.Movement,
//                 targetType: TargetType.Friend
//             },
//         ],
//     };
//     override<ArmyOption>(
//         data.armyOptions.khorneGoretide,
//         (x) => (x.abilities = [tirelessConquerors, everOnwards])
//     );
// }

// function fixArtefacts(data: DataStoreImpl): void {
//     override<Ability>(
//         data.extraAbilities.khorneGoretideThronebreakerSTorc.ability,
//         x => {
//             x.description = 'Ignore modifiers (positive and negative) when making save rolls for attacks that target this model.',
//             x.effects = [{defenseAura: {phase: Phase.Combat}, targetType: TargetType.Model}, {defenseAura: {phase: Phase.Shooting}, targetType: TargetType.Model}]
//         }
//     );

//     override<Ability>(
//         data.extraAbilities.khorneTrophiesOfWarTheBloodForgedArmour.ability,
//         x => {
//             x.description = 'Roll a dice each time you allocate a mortal wound to the bearer. On a 5+ that mortal wound is negated.',
//             x.effects = [{defenseAura: {phase: Phase.Combat}, targetType: TargetType.Model}, {defenseAura: {phase: Phase.Shooting}, targetType: TargetType.Model}]
//         }
//     );
// }

// function fixCommandTraits(data: DataStoreImpl): void {
//     override<Ability>(
//         data.extraAbilities.khorneGoretideHewTheFoe.ability,
//         x => {
//             x.description = 'Add 1 to the Damage characteristic of this general’s melee weapons',
//             x.effects = [{phase: Phase.Combat, targetType: TargetType.Model}]
//         }
//     );
// }

// function fixBlessings(data: DataStoreImpl): void {
//     override<Ability>(
//         data.extraAbilities.khorneBloodBlessingsOfKhorneBronzedFlesh.ability,
//         x => {
//             x.description = 'On a 4+ the prayer is answered. If this prayer is answered, pick 1 friendly KHORNE unit wholly within 16" of the model chanting this prayer and visible to them. Add 1 to save rolls for that unit until the start of your next hero phase.',
//             x.effects = [{targetType: TargetType.Unit, defenseAura: {phase: Phase.Combat}}]
//         }
//     );
//     override<Ability>(
//         data.extraAbilities.khorneBloodBlessingsOfKhorneBrazenFury.ability,
//         x => {
//             x.description = 'On a 4+ the prayer is answered. If this prayer is answered, pick a friendly KHORNE unit wholly within 16" of the model chanting this prayer and visible to them. Do not take battleshock tests for that unit until your next hero phase.',
//             x.effects = [{targetType: TargetType.Unit, phase: Phase.Combat}]
//         }
//     );
// }

export function overrideEverchosen(data: DataStoreImpl): void {
    // addBoxes(data);
    // fixUnits(data);
    // fixAllegiance(data);
    // fixArtefacts(data);
    // fixCommandTraits(data);
    // fixBlessings(data);
}
