import { oc } from "@orpc/contract";
import { z } from "zod";
import * as zodTypes from "./zod-types.gen";

const apiV2AbilityList = oc
  .route({
    method: "GET",
    path: "/api/v2/ability/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedAbilitySummaryListSchema
  }));

const apiV2AbilityRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/ability/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.AbilityDetailSchema
  }));

const apiV2BerryList = oc
  .route({
    method: "GET",
    path: "/api/v2/berry/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedBerrySummaryListSchema
  }));

const apiV2BerryRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/berry/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.BerryDetailSchema
  }));

const apiV2BerryFirmnessList = oc
  .route({
    method: "GET",
    path: "/api/v2/berry-firmness/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedBerryFirmnessSummaryListSchema
  }));

const apiV2BerryFirmnessRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/berry-firmness/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.BerryFirmnessDetailSchema
  }));

const apiV2BerryFlavorList = oc
  .route({
    method: "GET",
    path: "/api/v2/berry-flavor/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedBerryFlavorSummaryListSchema
  }));

const apiV2BerryFlavorRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/berry-flavor/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.BerryFlavorDetailSchema
  }));

const apiV2CharacteristicList = oc
  .route({
    method: "GET",
    path: "/api/v2/characteristic/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedCharacteristicSummaryListSchema
  }));

const apiV2CharacteristicRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/characteristic/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.CharacteristicDetailSchema
  }));

const apiV2ContestTypeList = oc
  .route({
    method: "GET",
    path: "/api/v2/contest-type/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedContestTypeSummaryListSchema
  }));

const apiV2ContestTypeRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/contest-type/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ContestTypeDetailSchema
  }));

const apiV2ContestEffectList = oc
  .route({
    method: "GET",
    path: "/api/v2/contest-effect/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedContestEffectSummaryListSchema
  }));

const apiV2ContestEffectRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/contest-effect/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ContestEffectDetailSchema
  }));

const apiV2EggGroupList = oc
  .route({
    method: "GET",
    path: "/api/v2/egg-group/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedEggGroupSummaryListSchema
  }));

const apiV2EggGroupRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/egg-group/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.EggGroupDetailSchema
  }));

const apiV2EncounterMethodList = oc
  .route({
    method: "GET",
    path: "/api/v2/encounter-method/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedEncounterMethodSummaryListSchema
  }));

const apiV2EncounterMethodRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/encounter-method/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.EncounterMethodDetailSchema
  }));

const apiV2EncounterConditionList = oc
  .route({
    method: "GET",
    path: "/api/v2/encounter-condition/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedEncounterConditionSummaryListSchema
  }));

const apiV2EncounterConditionRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/encounter-condition/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.EncounterConditionDetailSchema
  }));

const apiV2EncounterConditionValueList = oc
  .route({
    method: "GET",
    path: "/api/v2/encounter-condition-value/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedEncounterConditionValueSummaryListSchema
  }));

const apiV2EncounterConditionValueRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/encounter-condition-value/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.EncounterConditionValueDetailSchema
  }));

const apiV2EvolutionChainList = oc
  .route({
    method: "GET",
    path: "/api/v2/evolution-chain/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedEvolutionChainSummaryListSchema
  }));

const apiV2EvolutionChainRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/evolution-chain/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.EvolutionChainDetailSchema
  }));

const apiV2EvolutionTriggerList = oc
  .route({
    method: "GET",
    path: "/api/v2/evolution-trigger/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedEvolutionTriggerSummaryListSchema
  }));

const apiV2EvolutionTriggerRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/evolution-trigger/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.EvolutionTriggerDetailSchema
  }));

const apiV2GenerationList = oc
  .route({
    method: "GET",
    path: "/api/v2/generation/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedGenerationSummaryListSchema
  }));

const apiV2GenerationRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/generation/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.GenerationDetailSchema
  }));

const apiV2GenderList = oc
  .route({
    method: "GET",
    path: "/api/v2/gender/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedGenderSummaryListSchema
  }));

const apiV2GenderRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/gender/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.GenderDetailSchema
  }));

const apiV2GrowthRateList = oc
  .route({
    method: "GET",
    path: "/api/v2/growth-rate/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedGrowthRateSummaryListSchema
  }));

const apiV2GrowthRateRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/growth-rate/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.GrowthRateDetailSchema
  }));

const apiV2ItemList = oc
  .route({
    method: "GET",
    path: "/api/v2/item/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedItemSummaryListSchema
  }));

const apiV2ItemRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/item/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ItemDetailSchema
  }));

const apiV2ItemCategoryList = oc
  .route({
    method: "GET",
    path: "/api/v2/item-category/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedItemCategorySummaryListSchema
  }));

const apiV2ItemCategoryRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/item-category/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ItemCategoryDetailSchema
  }));

const apiV2ItemAttributeList = oc
  .route({
    method: "GET",
    path: "/api/v2/item-attribute/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedItemAttributeSummaryListSchema
  }));

const apiV2ItemAttributeRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/item-attribute/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ItemAttributeDetailSchema
  }));

const apiV2ItemFlingEffectList = oc
  .route({
    method: "GET",
    path: "/api/v2/item-fling-effect/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedItemFlingEffectSummaryListSchema
  }));

const apiV2ItemFlingEffectRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/item-fling-effect/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ItemFlingEffectDetailSchema
  }));

const apiV2ItemPocketList = oc
  .route({
    method: "GET",
    path: "/api/v2/item-pocket/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedItemPocketSummaryListSchema
  }));

const apiV2ItemPocketRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/item-pocket/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ItemPocketDetailSchema
  }));

const apiV2LanguageList = oc
  .route({
    method: "GET",
    path: "/api/v2/language/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedLanguageSummaryListSchema
  }));

const apiV2LanguageRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/language/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.LanguageDetailSchema
  }));

const apiV2LocationList = oc
  .route({
    method: "GET",
    path: "/api/v2/location/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedLocationSummaryListSchema
  }));

const apiV2LocationRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/location/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.LocationDetailSchema
  }));

const apiV2LocationAreaList = oc
  .route({
    method: "GET",
    path: "/api/v2/location-area/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedLocationAreaSummaryListSchema
  }));

const apiV2LocationAreaRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/location-area/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.coerce.number().int()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.LocationAreaDetailSchema
  }));

const apiV2MachineList = oc
  .route({
    method: "GET",
    path: "/api/v2/machine/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedMachineSummaryListSchema
  }));

const apiV2MachineRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/machine/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.MachineDetailSchema
  }));

const apiV2MoveList = oc
  .route({
    method: "GET",
    path: "/api/v2/move/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedMoveSummaryListSchema
  }));

const apiV2MoveRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/move/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.MoveDetailSchema
  }));

const apiV2MoveAilmentList = oc
  .route({
    method: "GET",
    path: "/api/v2/move-ailment/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedMoveMetaAilmentSummaryListSchema
  }));

const apiV2MoveAilmentRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/move-ailment/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.MoveMetaAilmentDetailSchema
  }));

const apiV2MoveBattleStyleList = oc
  .route({
    method: "GET",
    path: "/api/v2/move-battle-style/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedMoveBattleStyleSummaryListSchema
  }));

const apiV2MoveBattleStyleRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/move-battle-style/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.MoveBattleStyleDetailSchema
  }));

const apiV2MoveCategoryList = oc
  .route({
    method: "GET",
    path: "/api/v2/move-category/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedMoveMetaCategorySummaryListSchema
  }));

const apiV2MoveCategoryRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/move-category/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.MoveMetaCategoryDetailSchema
  }));

const apiV2MoveDamageClassList = oc
  .route({
    method: "GET",
    path: "/api/v2/move-damage-class/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedMoveDamageClassSummaryListSchema
  }));

const apiV2MoveDamageClassRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/move-damage-class/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.MoveDamageClassDetailSchema
  }));

const apiV2MoveLearnMethodList = oc
  .route({
    method: "GET",
    path: "/api/v2/move-learn-method/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedMoveLearnMethodSummaryListSchema
  }));

const apiV2MoveLearnMethodRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/move-learn-method/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.MoveLearnMethodDetailSchema
  }));

const apiV2MoveTargetList = oc
  .route({
    method: "GET",
    path: "/api/v2/move-target/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedMoveTargetSummaryListSchema
  }));

const apiV2MoveTargetRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/move-target/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.MoveTargetDetailSchema
  }));

const apiV2NatureList = oc
  .route({
    method: "GET",
    path: "/api/v2/nature/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedNatureSummaryListSchema
  }));

const apiV2NatureRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/nature/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.NatureDetailSchema
  }));

const apiV2PalParkAreaList = oc
  .route({
    method: "GET",
    path: "/api/v2/pal-park-area/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPalParkAreaSummaryListSchema
  }));

const apiV2PalParkAreaRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pal-park-area/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PalParkAreaDetailSchema
  }));

const apiV2PokedexList = oc
  .route({
    method: "GET",
    path: "/api/v2/pokedex/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPokedexSummaryListSchema
  }));

const apiV2PokedexRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokedex/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PokedexDetailSchema
  }));

const apiV2PokemonList = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPokemonSummaryListSchema
  }));

const apiV2PokemonRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PokemonDetailSchema
  }));

const apiV2PokemonColorList = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-color/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPokemonColorSummaryListSchema
  }));

const apiV2PokemonColorRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-color/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PokemonColorDetailSchema
  }));

const apiV2PokemonFormList = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-form/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPokemonFormSummaryListSchema
  }));

const apiV2PokemonFormRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-form/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PokemonFormDetailSchema
  }));

const apiV2PokemonHabitatList = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-habitat/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPokemonHabitatSummaryListSchema
  }));

const apiV2PokemonHabitatRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-habitat/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PokemonHabitatDetailSchema
  }));

const apiV2PokemonShapeList = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-shape/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPokemonShapeSummaryListSchema
  }));

const apiV2PokemonShapeRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-shape/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PokemonShapeDetailSchema
  }));

const apiV2PokemonSpeciesList = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-species/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPokemonSpeciesSummaryListSchema
  }));

const apiV2PokemonSpeciesRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon-species/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PokemonSpeciesDetailSchema
  }));

const apiV2PokeathlonStatList = oc
  .route({
    method: "GET",
    path: "/api/v2/pokeathlon-stat/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedPokeathlonStatSummaryListSchema
  }));

const apiV2PokeathlonStatRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokeathlon-stat/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PokeathlonStatDetailSchema
  }));

const apiV2RegionList = oc
  .route({
    method: "GET",
    path: "/api/v2/region/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedRegionSummaryListSchema
  }));

const apiV2RegionRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/region/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.RegionDetailSchema
  }));

const apiV2StatList = oc
  .route({
    method: "GET",
    path: "/api/v2/stat/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedStatSummaryListSchema
  }));

const apiV2StatRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/stat/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.StatDetailSchema
  }));

const apiV2SuperContestEffectList = oc
  .route({
    method: "GET",
    path: "/api/v2/super-contest-effect/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedSuperContestEffectSummaryListSchema
  }));

const apiV2SuperContestEffectRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/super-contest-effect/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.SuperContestEffectDetailSchema
  }));

const apiV2TypeList = oc
  .route({
    method: "GET",
    path: "/api/v2/type/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedTypeSummaryListSchema
  }));

const apiV2TypeRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/type/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.TypeDetailSchema
  }));

const apiV2VersionList = oc
  .route({
    method: "GET",
    path: "/api/v2/version/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedVersionSummaryListSchema
  }));

const apiV2VersionRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/version/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.VersionDetailSchema
  }));

const apiV2VersionGroupList = oc
  .route({
    method: "GET",
    path: "/api/v2/version-group/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      limit: z.number().int().optional(),
      offset: z.number().int().optional(),
      q: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PaginatedVersionGroupSummaryListSchema
  }));

const apiV2VersionGroupRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/version-group/{id}/",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.VersionGroupDetailSchema
  }));

const apiV2PokemonEncountersRetrieve = oc
  .route({
    method: "GET",
    path: "/api/v2/pokemon/{pokemon_id}/encounters",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      pokemon_id: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ApiV2PokemonEncountersRetrieveResponseSchema
  }));

export const contract = oc.router({
  pokemon: {
    apiV2AbilityList,
    apiV2AbilityRetrieve,
    apiV2CharacteristicList,
    apiV2CharacteristicRetrieve,
    apiV2EggGroupList,
    apiV2EggGroupRetrieve,
    apiV2GenderList,
    apiV2GenderRetrieve,
    apiV2GrowthRateList,
    apiV2GrowthRateRetrieve,
    apiV2MoveDamageClassList,
    apiV2MoveDamageClassRetrieve,
    apiV2NatureList,
    apiV2NatureRetrieve,
    apiV2PokemonList,
    apiV2PokemonRetrieve,
    apiV2PokemonColorList,
    apiV2PokemonColorRetrieve,
    apiV2PokemonFormList,
    apiV2PokemonFormRetrieve,
    apiV2PokemonHabitatList,
    apiV2PokemonHabitatRetrieve,
    apiV2PokemonShapeList,
    apiV2PokemonShapeRetrieve,
    apiV2PokemonSpeciesList,
    apiV2PokemonSpeciesRetrieve,
    apiV2PokeathlonStatList,
    apiV2PokeathlonStatRetrieve,
    apiV2StatList,
    apiV2StatRetrieve,
    apiV2TypeList,
    apiV2TypeRetrieve,
  },
  berries: {
    apiV2BerryList,
    apiV2BerryRetrieve,
    apiV2BerryFirmnessList,
    apiV2BerryFirmnessRetrieve,
    apiV2BerryFlavorList,
    apiV2BerryFlavorRetrieve,
  },
  contests: {
    apiV2ContestTypeList,
    apiV2ContestTypeRetrieve,
    apiV2ContestEffectList,
    apiV2ContestEffectRetrieve,
    apiV2SuperContestEffectList,
    apiV2SuperContestEffectRetrieve,
  },
  encounters: {
    apiV2EncounterMethodList,
    apiV2EncounterMethodRetrieve,
    apiV2EncounterConditionList,
    apiV2EncounterConditionRetrieve,
    apiV2EncounterConditionValueList,
    apiV2EncounterConditionValueRetrieve,
    apiV2PokemonEncountersRetrieve,
  },
  evolution: {
    apiV2EvolutionChainList,
    apiV2EvolutionChainRetrieve,
    apiV2EvolutionTriggerList,
    apiV2EvolutionTriggerRetrieve,
  },
  games: {
    apiV2GenerationList,
    apiV2GenerationRetrieve,
    apiV2PokedexList,
    apiV2PokedexRetrieve,
    apiV2VersionList,
    apiV2VersionRetrieve,
    apiV2VersionGroupList,
    apiV2VersionGroupRetrieve,
  },
  items: {
    apiV2ItemList,
    apiV2ItemRetrieve,
    apiV2ItemCategoryList,
    apiV2ItemCategoryRetrieve,
    apiV2ItemAttributeList,
    apiV2ItemAttributeRetrieve,
    apiV2ItemFlingEffectList,
    apiV2ItemFlingEffectRetrieve,
    apiV2ItemPocketList,
    apiV2ItemPocketRetrieve,
  },
  utility: {
    apiV2LanguageList,
    apiV2LanguageRetrieve,
  },
  location: {
    apiV2LocationList,
    apiV2LocationRetrieve,
    apiV2LocationAreaList,
    apiV2LocationAreaRetrieve,
    apiV2PalParkAreaList,
    apiV2PalParkAreaRetrieve,
    apiV2RegionList,
    apiV2RegionRetrieve,
  },
  machines: {
    apiV2MachineList,
    apiV2MachineRetrieve,
  },
  moves: {
    apiV2MoveList,
    apiV2MoveRetrieve,
    apiV2MoveAilmentList,
    apiV2MoveAilmentRetrieve,
    apiV2MoveBattleStyleList,
    apiV2MoveBattleStyleRetrieve,
    apiV2MoveCategoryList,
    apiV2MoveCategoryRetrieve,
    apiV2MoveLearnMethodList,
    apiV2MoveLearnMethodRetrieve,
    apiV2MoveTargetList,
    apiV2MoveTargetRetrieve,
  },
});
