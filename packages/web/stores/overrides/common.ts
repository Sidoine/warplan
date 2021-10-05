import { Phase, SubPhase, TargetType } from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { addEffect } from "./tools";
export function overrideCommon(data: ImportedDataStoreImpl) {
    addEffect(data.battalionAbilities.huntersOfTheHeartlandsExpertUnderdogs, {
        targetType: TargetType.Unit,
        phase: Phase.Hero,
        subPhase: SubPhase.Before
    });
}
