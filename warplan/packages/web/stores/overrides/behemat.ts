import { Material } from "../../../common/data";
import { ImportedDataStoreImpl } from "../imported-data";
import { mergeModels } from "./tools";

export function overrideSonsOfBehemat(data: ImportedDataStoreImpl) {
    mergeModels(
        data.models,
        "Mega-Gargant",
        2020,
        Material.Plastic,
        data.units.bundoWhalebiterKrakenEaterMercenary,
        data.units.krakenEaterMegaGargant,
        data.units.warstomperMegaGargant,
        data.units.bonegrinderMegaGargant,
        data.units.gatebreakerMegaGargant
    );
}
