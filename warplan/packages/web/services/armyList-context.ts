import {
    createServiceContext,
    createServiceMethodContext,
} from "folke-service-helpers";
import { ArmyListController } from "./armyList";

export const {
    ArmyListServiceContext,
    ArmyListServiceProvider,
    useArmyListService,
} = createServiceContext(ArmyListController, "ArmyList");

export const {
    ArmyListGetAllCacheContext,
    ArmyListGetAllCacheProvider,
    useArmyListGetAllCache,
} = createServiceMethodContext(useArmyListService, "ArmyList", "getAll");
