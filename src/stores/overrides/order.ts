import { DataStoreImpl } from "../imported-data";
import { addAbilityEffect } from "./tools";
import { TargetType, Phase, SubPhase } from "../unit";

export function overrideOrder(data: DataStoreImpl) {
    addAbilityEffect(data.abilities.gotrekGurnissonAvatarOfGrimnir, {
        targetType: TargetType.Model,
        defenseAura: {},
    });
    addAbilityEffect(data.abilities.gotrekGurnissonKragBlackhammerSMasterRune, {
        targetType: TargetType.Model,
        attackAura: {
            rerollFailedHits: 1,
            rerollFailedWounds: true,
            mortalWoundsOnHitUnmodified6: "D6",
        },
    });
    addAbilityEffect(data.abilities.gotrekGurnissonUnstoppableBattleFury, {
        targetType: TargetType.Model,
        phase: Phase.Combat,
        subPhase: SubPhase.After,
        attackAura: {},
    });
    addAbilityEffect(data.abilities.gotrekGurnissonShoulderPlateOfEdassa, {
        targetType: TargetType.Model,
        defenseAura: { negateWoundsOrMortalWoundsOn3: true },
    });
    const temp = data.abilities.gotrekGurnissonShoulderPlateOfEdassa.flavor;
    data.abilities.gotrekGurnissonShoulderPlateOfEdassa.flavor =
        data.abilities.gotrekGurnissonShoulderPlateOfEdassa.description;
    data.abilities.gotrekGurnissonShoulderPlateOfEdassa.description = temp;
}
