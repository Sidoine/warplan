import { AuraType, conditionValue, TargetType } from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { addEffect } from "./tools";

export function overrideStormcast(data: ImportedDataStoreImpl): void {
    addEffect(data.abilities.blazeOfGlory, {
        targetType: TargetType.Enemy,
        condition: {
            slain: true,
            inRangeOf: {
                enemy: true,
                range: '1"',
            },
        },
        targetRange: '1"',
        immediate: {
            mortalWounds: conditionValue({ keyword: "THUNDERSTRIKE" }, "1(6+)"),
            mortalWoundsPerWound: "1(6+)",
        },
    });

    addEffect(
        data.abilities.annihilatorsWithMeteoricGrandhammersBlazingImpact,
        {
            targetType: TargetType.Enemy,
            targetRadius: '10"',
            immediate: {
                mortalWounds: "D3(3+)",
            },
        }
    );
    addEffect(
        data.abilities.annihilatorsWithMeteoricGrandhammersBlazingImpact,
        {
            targetType: TargetType.Unit,
            auras: [
                {
                    type: AuraType.Charge,
                    condition: {
                        setup: true,
                    },
                    rerollCharge: true,
                },
            ],
        }
    );
}
