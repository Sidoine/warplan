import { DataStoreImpl } from "../imported-data";
// import { overrideAbility } from "./tools";
// import { Phase, TargetType } from "../unit";

// function overrideEndlessSpells(data: DataStoreImpl) {
//     overrideAbility(data.abilities.suffocatingGravetideNecroticTide, (x) => {
//         x.effects = [{ phase: Phase.Hero, targetType: TargetType.Model }];
//     });
//     overrideAbility(
//         data.abilities.suffocatingGravetidePulledToTheGrave,
//         (x) => {
//             x.effects = [{ phase: Phase.Hero, targetType: TargetType.Unit }];
//         }
//     );
//     overrideAbility(
//         data.abilities.suffocatingGravetideRoilingBarricade,
//         (x) => {
//             x.effects = [
//                 { phase: Phase.Shooting, targetType: TargetType.Unit },
//             ];
//         }
//     );
//     overrideAbility(
//         data.abilities.suffocatingGravetideEmpoweredByShyish,
//         (x) => {
//             x.effects = [{ phase: Phase.Hero, targetType: TargetType.Model }];
//         }
//     );
//     overrideAbility(data.abilities.suffocatingGravetidePredatory, (x) => {
//         x.effects = [{ phase: Phase.Hero, targetType: TargetType.Model }];
//     });
//     overrideAbility(
//         data.abilities.suffocatingGravetideSummonSuffocatingGravetide,
//         (x) => {
//             x.effects = [{ phase: Phase.Hero, targetType: TargetType.Model }];
//         }
//     );
// }

// function overrideRealms(data: DataStoreImpl) {}

export function overrideCommon(data: DataStoreImpl) {
    // overrideEndlessSpells(data);
    // overrideRealms(data);
}
