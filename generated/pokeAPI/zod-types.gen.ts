import { z } from "zod";

export const VersionGroupSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type VersionGroupSummary = z.infer<typeof VersionGroupSummarySchema>;

export const LanguageSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type LanguageSummary = z.infer<typeof LanguageSummarySchema>;

export const AbilityChangeEffectTextSchema = z.object({
  effect: z.string().max(6000),
  language: LanguageSummarySchema
});
export type AbilityChangeEffectText = z.infer<typeof AbilityChangeEffectTextSchema>;

export const AbilityChangeSchema = z.object({
  version_group: VersionGroupSummarySchema,
  effect_entries: z.array(AbilityChangeEffectTextSchema)
});
export type AbilityChange = z.infer<typeof AbilityChangeSchema>;

export const GenerationSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type GenerationSummary = z.infer<typeof GenerationSummarySchema>;

export const AbilityNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type AbilityName = z.infer<typeof AbilityNameSchema>;

export const AbilityEffectTextSchema = z.object({
  effect: z.string().max(6000),
  short_effect: z.string().max(300),
  language: LanguageSummarySchema
});
export type AbilityEffectText = z.infer<typeof AbilityEffectTextSchema>;

export const AbilityFlavorTextSchema = z.object({
  flavor_text: z.string(),
  language: LanguageSummarySchema,
  version_group: VersionGroupSummarySchema
});
export type AbilityFlavorText = z.infer<typeof AbilityFlavorTextSchema>;

export const AbilityDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  is_main_series: z.boolean().optional(),
  generation: GenerationSummarySchema,
  names: z.array(AbilityNameSchema),
  effect_entries: z.array(AbilityEffectTextSchema),
  effect_changes: z.array(AbilityChangeSchema),
  flavor_text_entries: z.array(AbilityFlavorTextSchema),
  pokemon: z.array(z.object({
  is_hidden: z.boolean(),
  slot: z.number().int(),
  pokemon: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
});
export type AbilityDetail = z.infer<typeof AbilityDetailSchema>;

export const AbilitySummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type AbilitySummary = z.infer<typeof AbilitySummarySchema>;

export const BerryFirmnessSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type BerryFirmnessSummary = z.infer<typeof BerryFirmnessSummarySchema>;

export const ItemSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type ItemSummary = z.infer<typeof ItemSummarySchema>;

export const TypeSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type TypeSummary = z.infer<typeof TypeSummarySchema>;

export const BerryDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  growth_time: z.number().int(),
  max_harvest: z.number().int(),
  natural_gift_power: z.number().int(),
  size: z.number().int(),
  smoothness: z.number().int(),
  soil_dryness: z.number().int(),
  firmness: BerryFirmnessSummarySchema,
  flavors: z.array(z.object({
  potency: z.number().int(),
  flavor: z.object({
  name: z.string().optional(),
  url: z.string().url().optional()
})
})),
  item: ItemSummarySchema,
  natural_gift_type: TypeSummarySchema
});
export type BerryDetail = z.infer<typeof BerryDetailSchema>;

export const BerrySummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type BerrySummary = z.infer<typeof BerrySummarySchema>;

export const BerryFirmnessNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type BerryFirmnessName = z.infer<typeof BerryFirmnessNameSchema>;

export const BerryFirmnessDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  berries: z.array(BerrySummarySchema),
  names: z.array(BerryFirmnessNameSchema)
});
export type BerryFirmnessDetail = z.infer<typeof BerryFirmnessDetailSchema>;

export const ContestTypeSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type ContestTypeSummary = z.infer<typeof ContestTypeSummarySchema>;

export const BerryFlavorNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type BerryFlavorName = z.infer<typeof BerryFlavorNameSchema>;

export const BerryFlavorDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  berries: z.array(z.object({
  potency: z.number().int(),
  berry: z.object({
  name: z.string().optional(),
  url: z.string().url().optional()
})
})),
  contest_type: ContestTypeSummarySchema,
  names: z.array(BerryFlavorNameSchema)
});
export type BerryFlavorDetail = z.infer<typeof BerryFlavorDetailSchema>;

export const BerryFlavorSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type BerryFlavorSummary = z.infer<typeof BerryFlavorSummarySchema>;

export const CharacteristicDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type CharacteristicDescription = z.infer<typeof CharacteristicDescriptionSchema>;

export const StatSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type StatSummary = z.infer<typeof StatSummarySchema>;

export const CharacteristicDetailSchema = z.object({
  id: z.number().int(),
  gene_modulo: z.number().int(),
  possible_values: z.array(z.number().int()),
  highest_stat: StatSummarySchema,
  descriptions: z.array(CharacteristicDescriptionSchema)
});
export type CharacteristicDetail = z.infer<typeof CharacteristicDetailSchema>;

export const CharacteristicSummarySchema = z.object({
  url: z.string().url()
});
export type CharacteristicSummary = z.infer<typeof CharacteristicSummarySchema>;

export const ContestEffectEffectTextSchema = z.object({
  effect: z.string().max(6000),
  language: LanguageSummarySchema
});
export type ContestEffectEffectText = z.infer<typeof ContestEffectEffectTextSchema>;

export const ContestEffectFlavorTextSchema = z.object({
  flavor_text: z.string().max(500),
  language: LanguageSummarySchema
});
export type ContestEffectFlavorText = z.infer<typeof ContestEffectFlavorTextSchema>;

export const ContestEffectDetailSchema = z.object({
  id: z.number().int(),
  appeal: z.number().int(),
  jam: z.number().int(),
  effect_entries: z.array(ContestEffectEffectTextSchema),
  flavor_text_entries: z.array(ContestEffectFlavorTextSchema)
});
export type ContestEffectDetail = z.infer<typeof ContestEffectDetailSchema>;

export const ContestEffectSummarySchema = z.object({
  url: z.string().url()
});
export type ContestEffectSummary = z.infer<typeof ContestEffectSummarySchema>;

export const ContestTypeNameSchema = z.object({
  name: z.string().max(200),
  color: z.string().max(10),
  language: LanguageSummarySchema
});
export type ContestTypeName = z.infer<typeof ContestTypeNameSchema>;

export const ContestTypeDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  berry_flavor: BerryFlavorSummarySchema,
  names: z.array(ContestTypeNameSchema)
});
export type ContestTypeDetail = z.infer<typeof ContestTypeDetailSchema>;

export const EggGroupNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type EggGroupName = z.infer<typeof EggGroupNameSchema>;

export const EggGroupDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  names: z.array(EggGroupNameSchema),
  pokemon_species: z.array(z.object({
  name: z.string().optional(),
  url: z.string().url().optional()
}))
});
export type EggGroupDetail = z.infer<typeof EggGroupDetailSchema>;

export const EggGroupSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type EggGroupSummary = z.infer<typeof EggGroupSummarySchema>;

export const EncounterConditionValueSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type EncounterConditionValueSummary = z.infer<typeof EncounterConditionValueSummarySchema>;

export const EncounterConditionNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type EncounterConditionName = z.infer<typeof EncounterConditionNameSchema>;

export const EncounterConditionDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  values: z.array(EncounterConditionValueSummarySchema),
  names: z.array(EncounterConditionNameSchema)
});
export type EncounterConditionDetail = z.infer<typeof EncounterConditionDetailSchema>;

export const EncounterConditionSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type EncounterConditionSummary = z.infer<typeof EncounterConditionSummarySchema>;

export const EncounterConditionValueNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type EncounterConditionValueName = z.infer<typeof EncounterConditionValueNameSchema>;

export const EncounterConditionValueDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  condition: EncounterConditionSummarySchema,
  names: z.array(EncounterConditionValueNameSchema)
});
export type EncounterConditionValueDetail = z.infer<typeof EncounterConditionValueDetailSchema>;

export const EncounterMethodNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type EncounterMethodName = z.infer<typeof EncounterMethodNameSchema>;

export const EncounterMethodDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  order: z.number().int().optional(),
  names: z.array(EncounterMethodNameSchema)
});
export type EncounterMethodDetail = z.infer<typeof EncounterMethodDetailSchema>;

export const EncounterMethodSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type EncounterMethodSummary = z.infer<typeof EncounterMethodSummarySchema>;

export const EvolutionChainDetailSchema = z.object({
  id: z.number().int(),
  baby_trigger_item: ItemSummarySchema,
  chain: z.object({
  evolution_details: z.array(z.unknown()),
  evolves_to: z.array(z.object({
  evolution_details: z.array(z.object({
  gender: z.object({
  name: z.string(),
  url: z.string().url()
}).nullable(),
  held_item: z.object({
  name: z.string(),
  url: z.string().url()
}).nullable(),
  item: z.object({
  name: z.string(),
  url: z.string().url()
}).nullable(),
  known_move: z.unknown().nullable(),
  known_move_type: z.unknown().nullable(),
  location: z.object({
  name: z.string(),
  url: z.string().url()
}).nullable(),
  min_affection: z.number().int().nullable(),
  min_beauty: z.number().int().nullable(),
  min_happiness: z.number().int().nullable(),
  min_level: z.number().int().nullable(),
  needs_overworld_rain: z.boolean().nullable(),
  party_species: z.string().nullable(),
  party_type: z.string().nullable(),
  relative_physical_stats: z.string().nullable(),
  time_of_day: z.string(),
  trade_species: z.string().nullable(),
  trigger: z.object({
  name: z.string(),
  url: z.string().url()
}),
  turn_upside_down: z.boolean()
})),
  is_baby: z.boolean(),
  species: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  is_baby: z.boolean(),
  species: z.object({
  name: z.string(),
  url: z.string().url()
})
})
});
export type EvolutionChainDetail = z.infer<typeof EvolutionChainDetailSchema>;

export const EvolutionChainSummarySchema = z.object({
  url: z.string().url()
});
export type EvolutionChainSummary = z.infer<typeof EvolutionChainSummarySchema>;

export const EvolutionTriggerNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type EvolutionTriggerName = z.infer<typeof EvolutionTriggerNameSchema>;

export const EvolutionTriggerDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  names: z.array(EvolutionTriggerNameSchema),
  pokemon_species: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
});
export type EvolutionTriggerDetail = z.infer<typeof EvolutionTriggerDetailSchema>;

export const EvolutionTriggerSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type EvolutionTriggerSummary = z.infer<typeof EvolutionTriggerSummarySchema>;

export const ExperienceSchema = z.object({
  level: z.number().int(),
  experience: z.number().int()
});
export type Experience = z.infer<typeof ExperienceSchema>;

export const GenderDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  pokemon_species_details: z.array(z.object({
  rate: z.number().int(),
  pokemon_species: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  required_for_evolution: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
});
export type GenderDetail = z.infer<typeof GenderDetailSchema>;

export const GenderSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type GenderSummary = z.infer<typeof GenderSummarySchema>;

export const RegionSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type RegionSummary = z.infer<typeof RegionSummarySchema>;

export const MoveSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type MoveSummary = z.infer<typeof MoveSummarySchema>;

export const GenerationNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type GenerationName = z.infer<typeof GenerationNameSchema>;

export const PokemonSpeciesSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PokemonSpeciesSummary = z.infer<typeof PokemonSpeciesSummarySchema>;

export const GenerationDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  abilities: z.array(AbilitySummarySchema),
  main_region: RegionSummarySchema,
  moves: z.array(MoveSummarySchema),
  names: z.array(GenerationNameSchema),
  pokemon_species: z.array(PokemonSpeciesSummarySchema),
  types: z.array(TypeSummarySchema),
  version_groups: z.array(VersionGroupSummarySchema)
});
export type GenerationDetail = z.infer<typeof GenerationDetailSchema>;

export const GrowthRateDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type GrowthRateDescription = z.infer<typeof GrowthRateDescriptionSchema>;

export const GrowthRateDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  formula: z.string().max(500),
  descriptions: z.array(GrowthRateDescriptionSchema),
  levels: z.array(ExperienceSchema),
  pokemon_species: z.array(PokemonSpeciesSummarySchema)
});
export type GrowthRateDetail = z.infer<typeof GrowthRateDetailSchema>;

export const GrowthRateSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type GrowthRateSummary = z.infer<typeof GrowthRateSummarySchema>;

export const ItemAttributeDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type ItemAttributeDescription = z.infer<typeof ItemAttributeDescriptionSchema>;

export const ItemAttributeNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type ItemAttributeName = z.infer<typeof ItemAttributeNameSchema>;

export const ItemAttributeDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  descriptions: z.array(ItemAttributeDescriptionSchema),
  items: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  names: z.array(ItemAttributeNameSchema)
});
export type ItemAttributeDetail = z.infer<typeof ItemAttributeDetailSchema>;

export const ItemAttributeSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type ItemAttributeSummary = z.infer<typeof ItemAttributeSummarySchema>;

export const ItemCategoryNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type ItemCategoryName = z.infer<typeof ItemCategoryNameSchema>;

export const ItemPocketSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type ItemPocketSummary = z.infer<typeof ItemPocketSummarySchema>;

export const ItemCategoryDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  items: z.array(ItemSummarySchema),
  names: z.array(ItemCategoryNameSchema),
  pocket: ItemPocketSummarySchema
});
export type ItemCategoryDetail = z.infer<typeof ItemCategoryDetailSchema>;

export const ItemCategorySummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type ItemCategorySummary = z.infer<typeof ItemCategorySummarySchema>;

export const ItemFlingEffectSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type ItemFlingEffectSummary = z.infer<typeof ItemFlingEffectSummarySchema>;

export const ItemEffectTextSchema = z.object({
  effect: z.string().max(6000),
  short_effect: z.string().max(300),
  language: LanguageSummarySchema
});
export type ItemEffectText = z.infer<typeof ItemEffectTextSchema>;

export const ItemFlavorTextSchema = z.object({
  text: z.string(),
  version_group: VersionGroupSummarySchema,
  language: LanguageSummarySchema
});
export type ItemFlavorText = z.infer<typeof ItemFlavorTextSchema>;

export const ItemGameIndexSchema = z.object({
  game_index: z.number().int(),
  generation: GenerationSummarySchema
});
export type ItemGameIndex = z.infer<typeof ItemGameIndexSchema>;

export const ItemNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type ItemName = z.infer<typeof ItemNameSchema>;

export const ItemDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  cost: z.number().int().optional(),
  fling_power: z.number().int().optional(),
  fling_effect: ItemFlingEffectSummarySchema,
  attributes: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  category: ItemCategorySummarySchema,
  effect_entries: z.array(ItemEffectTextSchema),
  flavor_text_entries: z.array(ItemFlavorTextSchema),
  game_indices: z.array(ItemGameIndexSchema),
  names: z.array(ItemNameSchema),
  held_by_pokemon: z.array(z.object({
  pokemon: z.object({
  name: z.string(),
  url: z.string().url()
}),
  "version-details": z.array(z.object({
  rarity: z.number().int(),
  version: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
})),
  sprites: z.object({
  default: z.string().url()
}),
  baby_trigger_for: z.object({
  url: z.string().url()
}),
  machines: z.array(z.object({
  machine: z.string().url(),
  version_group: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
});
export type ItemDetail = z.infer<typeof ItemDetailSchema>;

export const ItemFlingEffectEffectTextSchema = z.object({
  effect: z.string().max(6000),
  language: LanguageSummarySchema
});
export type ItemFlingEffectEffectText = z.infer<typeof ItemFlingEffectEffectTextSchema>;

export const ItemFlingEffectDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  effect_entries: z.array(ItemFlingEffectEffectTextSchema),
  items: z.array(ItemSummarySchema)
});
export type ItemFlingEffectDetail = z.infer<typeof ItemFlingEffectDetailSchema>;

export const ItemPocketNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type ItemPocketName = z.infer<typeof ItemPocketNameSchema>;

export const ItemPocketDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  categories: z.array(ItemCategorySummarySchema),
  names: z.array(ItemPocketNameSchema)
});
export type ItemPocketDetail = z.infer<typeof ItemPocketDetailSchema>;

export const LanguageNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type LanguageName = z.infer<typeof LanguageNameSchema>;

export const LanguageDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  official: z.boolean().optional(),
  iso639: z.string().max(10),
  iso3166: z.string().max(2),
  names: z.array(LanguageNameSchema)
});
export type LanguageDetail = z.infer<typeof LanguageDetailSchema>;

export const LocationSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type LocationSummary = z.infer<typeof LocationSummarySchema>;

export const LocationAreaNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type LocationAreaName = z.infer<typeof LocationAreaNameSchema>;

export const LocationAreaDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  game_index: z.number().int(),
  encounter_method_rates: z.array(z.object({
  encounter_method: z.object({
  name: z.string(),
  url: z.string().url()
}),
  version_details: z.array(z.object({
  rate: z.number().int(),
  version: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
})),
  location: LocationSummarySchema,
  names: z.array(LocationAreaNameSchema),
  pokemon_encounters: z.array(z.object({
  pokemon: z.object({
  name: z.string(),
  url: z.string().url()
}),
  version_details: z.array(z.object({
  version: z.object({
  name: z.string(),
  url: z.string().url()
}),
  max_chance: z.number().int(),
  encounter_details: z.object({
  min_level: z.number().int(),
  max_level: z.number().int(),
  condition_values: z.object({
  name: z.string(),
  url: z.string().url()
}).optional(),
  chance: z.number().int(),
  method: z.object({
  name: z.string(),
  url: z.string().url()
})
})
}))
}))
});
export type LocationAreaDetail = z.infer<typeof LocationAreaDetailSchema>;

export const LocationAreaSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type LocationAreaSummary = z.infer<typeof LocationAreaSummarySchema>;

export const LocationNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type LocationName = z.infer<typeof LocationNameSchema>;

export const LocationGameIndexSchema = z.object({
  game_index: z.number().int(),
  generation: GenerationSummarySchema
});
export type LocationGameIndex = z.infer<typeof LocationGameIndexSchema>;

export const LocationDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  region: RegionSummarySchema,
  names: z.array(LocationNameSchema),
  game_indices: z.array(LocationGameIndexSchema),
  areas: z.array(LocationAreaSummarySchema)
});
export type LocationDetail = z.infer<typeof LocationDetailSchema>;

export const MachineDetailSchema = z.object({
  id: z.number().int(),
  item: ItemSummarySchema,
  version_group: VersionGroupSummarySchema,
  move: MoveSummarySchema
});
export type MachineDetail = z.infer<typeof MachineDetailSchema>;

export const MachineSummarySchema = z.object({
  url: z.string().url()
});
export type MachineSummary = z.infer<typeof MachineSummarySchema>;

export const MoveBattleStyleNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type MoveBattleStyleName = z.infer<typeof MoveBattleStyleNameSchema>;

export const MoveBattleStyleDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  names: z.array(MoveBattleStyleNameSchema)
});
export type MoveBattleStyleDetail = z.infer<typeof MoveBattleStyleDetailSchema>;

export const MoveBattleStyleSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type MoveBattleStyleSummary = z.infer<typeof MoveBattleStyleSummarySchema>;

export const MoveChangeSchema = z.object({
  accuracy: z.number().int().optional(),
  power: z.number().int().optional(),
  pp: z.number().int().optional(),
  effect_chance: z.number().int(),
  effect_entries: z.array(z.object({
  effect: z.string(),
  short_effect: z.string(),
  language: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  type: TypeSummarySchema,
  version_group: VersionGroupSummarySchema
});
export type MoveChange = z.infer<typeof MoveChangeSchema>;

export const MoveDamageClassDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type MoveDamageClassDescription = z.infer<typeof MoveDamageClassDescriptionSchema>;

export const MoveDamageClassNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type MoveDamageClassName = z.infer<typeof MoveDamageClassNameSchema>;

export const MoveDamageClassDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  descriptions: z.array(MoveDamageClassDescriptionSchema),
  moves: z.array(MoveSummarySchema),
  names: z.array(MoveDamageClassNameSchema)
});
export type MoveDamageClassDetail = z.infer<typeof MoveDamageClassDetailSchema>;

export const MoveDamageClassSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type MoveDamageClassSummary = z.infer<typeof MoveDamageClassSummarySchema>;

export const MoveMetaAilmentSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type MoveMetaAilmentSummary = z.infer<typeof MoveMetaAilmentSummarySchema>;

export const MoveMetaCategorySummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type MoveMetaCategorySummary = z.infer<typeof MoveMetaCategorySummarySchema>;

export const MoveMetaSchema = z.object({
  ailment: MoveMetaAilmentSummarySchema,
  category: MoveMetaCategorySummarySchema,
  min_hits: z.number().int().optional(),
  max_hits: z.number().int().optional(),
  min_turns: z.number().int().optional(),
  max_turns: z.number().int().optional(),
  drain: z.number().int().optional(),
  healing: z.number().int().optional(),
  crit_rate: z.number().int().optional(),
  ailment_chance: z.number().int().optional(),
  flinch_chance: z.number().int().optional(),
  stat_chance: z.number().int().optional()
});
export type MoveMeta = z.infer<typeof MoveMetaSchema>;

export const MoveNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type MoveName = z.infer<typeof MoveNameSchema>;

export const SuperContestEffectSummarySchema = z.object({
  url: z.string().url()
});
export type SuperContestEffectSummary = z.infer<typeof SuperContestEffectSummarySchema>;

export const MoveTargetSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type MoveTargetSummary = z.infer<typeof MoveTargetSummarySchema>;

export const MoveFlavorTextSchema = z.object({
  flavor_text: z.string(),
  language: LanguageSummarySchema,
  version_group: VersionGroupSummarySchema
});
export type MoveFlavorText = z.infer<typeof MoveFlavorTextSchema>;

export const MoveDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  accuracy: z.number().int().optional(),
  effect_chance: z.number().int(),
  pp: z.number().int().optional(),
  priority: z.number().int().optional(),
  power: z.number().int().optional(),
  contest_combos: z.object({
  normal: z.object({
  use_before: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})).nullable(),
  use_after: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})).nullable()
}),
  super: z.object({
  use_before: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})).nullable(),
  use_after: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})).nullable()
})
}),
  contest_type: ContestTypeSummarySchema,
  contest_effect: ContestEffectSummarySchema,
  damage_class: MoveDamageClassSummarySchema,
  effect_entries: z.array(z.object({
  effect: z.string(),
  short_effect: z.string(),
  language: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  effect_changes: z.array(z.object({
  effect_entries: z.array(z.object({
  effect: z.string(),
  language: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  version_group: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  generation: GenerationSummarySchema,
  meta: MoveMetaSchema,
  names: z.array(MoveNameSchema),
  past_values: z.array(MoveChangeSchema),
  stat_changes: z.array(z.object({
  change: z.number().int(),
  stat: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  super_contest_effect: SuperContestEffectSummarySchema,
  target: MoveTargetSummarySchema,
  type: TypeSummarySchema,
  machines: z.array(z.object({
  machine: z.object({
  url: z.string().url()
}),
  version_group: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  flavor_text_entries: z.array(MoveFlavorTextSchema),
  learned_by_pokemon: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
});
export type MoveDetail = z.infer<typeof MoveDetailSchema>;

export const MoveLearnMethodDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type MoveLearnMethodDescription = z.infer<typeof MoveLearnMethodDescriptionSchema>;

export const MoveLearnMethodNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type MoveLearnMethodName = z.infer<typeof MoveLearnMethodNameSchema>;

export const MoveLearnMethodDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  names: z.array(MoveLearnMethodNameSchema),
  descriptions: z.array(MoveLearnMethodDescriptionSchema),
  version_groups: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
});
export type MoveLearnMethodDetail = z.infer<typeof MoveLearnMethodDetailSchema>;

export const MoveLearnMethodSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type MoveLearnMethodSummary = z.infer<typeof MoveLearnMethodSummarySchema>;

export const MoveMetaAilmentNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type MoveMetaAilmentName = z.infer<typeof MoveMetaAilmentNameSchema>;

export const MoveMetaAilmentDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  moves: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  names: z.array(MoveMetaAilmentNameSchema)
});
export type MoveMetaAilmentDetail = z.infer<typeof MoveMetaAilmentDetailSchema>;

export const MoveMetaCategoryDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type MoveMetaCategoryDescription = z.infer<typeof MoveMetaCategoryDescriptionSchema>;

export const MoveMetaCategoryDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  descriptions: z.array(MoveMetaCategoryDescriptionSchema),
  moves: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
});
export type MoveMetaCategoryDetail = z.infer<typeof MoveMetaCategoryDetailSchema>;

export const MoveTargetDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type MoveTargetDescription = z.infer<typeof MoveTargetDescriptionSchema>;

export const MoveTargetNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type MoveTargetName = z.infer<typeof MoveTargetNameSchema>;

export const MoveTargetDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  descriptions: z.array(MoveTargetDescriptionSchema),
  moves: z.array(MoveSummarySchema),
  names: z.array(MoveTargetNameSchema)
});
export type MoveTargetDetail = z.infer<typeof MoveTargetDetailSchema>;

export const NatureBattleStylePreferenceSchema = z.object({
  low_hp_preference: z.number().int(),
  high_hp_preference: z.number().int(),
  move_battle_style: MoveBattleStyleSummarySchema
});
export type NatureBattleStylePreference = z.infer<typeof NatureBattleStylePreferenceSchema>;

export const NatureNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type NatureName = z.infer<typeof NatureNameSchema>;

export const NatureDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  decreased_stat: StatSummarySchema,
  increased_stat: StatSummarySchema,
  likes_flavor: BerryFlavorSummarySchema,
  hates_flavor: BerryFlavorSummarySchema,
  berries: z.array(BerrySummarySchema),
  pokeathlon_stat_changes: z.array(z.object({
  max_change: z.number().int(),
  pokeathlon_stat: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  move_battle_style_preferences: z.array(NatureBattleStylePreferenceSchema),
  names: z.array(NatureNameSchema)
});
export type NatureDetail = z.infer<typeof NatureDetailSchema>;

export const NatureSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type NatureSummary = z.infer<typeof NatureSummarySchema>;

export const PaginatedAbilitySummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(AbilitySummarySchema).optional()
});
export type PaginatedAbilitySummaryList = z.infer<typeof PaginatedAbilitySummaryListSchema>;

export const PaginatedBerryFirmnessSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(BerryFirmnessSummarySchema).optional()
});
export type PaginatedBerryFirmnessSummaryList = z.infer<typeof PaginatedBerryFirmnessSummaryListSchema>;

export const PaginatedBerryFlavorSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(BerryFlavorSummarySchema).optional()
});
export type PaginatedBerryFlavorSummaryList = z.infer<typeof PaginatedBerryFlavorSummaryListSchema>;

export const PaginatedBerrySummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(BerrySummarySchema).optional()
});
export type PaginatedBerrySummaryList = z.infer<typeof PaginatedBerrySummaryListSchema>;

export const PaginatedCharacteristicSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(CharacteristicSummarySchema).optional()
});
export type PaginatedCharacteristicSummaryList = z.infer<typeof PaginatedCharacteristicSummaryListSchema>;

export const PaginatedContestEffectSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(ContestEffectSummarySchema).optional()
});
export type PaginatedContestEffectSummaryList = z.infer<typeof PaginatedContestEffectSummaryListSchema>;

export const PaginatedContestTypeSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(ContestTypeSummarySchema).optional()
});
export type PaginatedContestTypeSummaryList = z.infer<typeof PaginatedContestTypeSummaryListSchema>;

export const PaginatedEggGroupSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(EggGroupSummarySchema).optional()
});
export type PaginatedEggGroupSummaryList = z.infer<typeof PaginatedEggGroupSummaryListSchema>;

export const PaginatedEncounterConditionSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(EncounterConditionSummarySchema).optional()
});
export type PaginatedEncounterConditionSummaryList = z.infer<typeof PaginatedEncounterConditionSummaryListSchema>;

export const PaginatedEncounterConditionValueSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(EncounterConditionValueSummarySchema).optional()
});
export type PaginatedEncounterConditionValueSummaryList = z.infer<typeof PaginatedEncounterConditionValueSummaryListSchema>;

export const PaginatedEncounterMethodSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(EncounterMethodSummarySchema).optional()
});
export type PaginatedEncounterMethodSummaryList = z.infer<typeof PaginatedEncounterMethodSummaryListSchema>;

export const PaginatedEvolutionChainSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(EvolutionChainSummarySchema).optional()
});
export type PaginatedEvolutionChainSummaryList = z.infer<typeof PaginatedEvolutionChainSummaryListSchema>;

export const PaginatedEvolutionTriggerSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(EvolutionTriggerSummarySchema).optional()
});
export type PaginatedEvolutionTriggerSummaryList = z.infer<typeof PaginatedEvolutionTriggerSummaryListSchema>;

export const PaginatedGenderSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(GenderSummarySchema).optional()
});
export type PaginatedGenderSummaryList = z.infer<typeof PaginatedGenderSummaryListSchema>;

export const PaginatedGenerationSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(GenerationSummarySchema).optional()
});
export type PaginatedGenerationSummaryList = z.infer<typeof PaginatedGenerationSummaryListSchema>;

export const PaginatedGrowthRateSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(GrowthRateSummarySchema).optional()
});
export type PaginatedGrowthRateSummaryList = z.infer<typeof PaginatedGrowthRateSummaryListSchema>;

export const PaginatedItemAttributeSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(ItemAttributeSummarySchema).optional()
});
export type PaginatedItemAttributeSummaryList = z.infer<typeof PaginatedItemAttributeSummaryListSchema>;

export const PaginatedItemCategorySummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(ItemCategorySummarySchema).optional()
});
export type PaginatedItemCategorySummaryList = z.infer<typeof PaginatedItemCategorySummaryListSchema>;

export const PaginatedItemFlingEffectSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(ItemFlingEffectSummarySchema).optional()
});
export type PaginatedItemFlingEffectSummaryList = z.infer<typeof PaginatedItemFlingEffectSummaryListSchema>;

export const PaginatedItemPocketSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(ItemPocketSummarySchema).optional()
});
export type PaginatedItemPocketSummaryList = z.infer<typeof PaginatedItemPocketSummaryListSchema>;

export const PaginatedItemSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(ItemSummarySchema).optional()
});
export type PaginatedItemSummaryList = z.infer<typeof PaginatedItemSummaryListSchema>;

export const PaginatedLanguageSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(LanguageSummarySchema).optional()
});
export type PaginatedLanguageSummaryList = z.infer<typeof PaginatedLanguageSummaryListSchema>;

export const PaginatedLocationAreaSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(LocationAreaSummarySchema).optional()
});
export type PaginatedLocationAreaSummaryList = z.infer<typeof PaginatedLocationAreaSummaryListSchema>;

export const PaginatedLocationSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(LocationSummarySchema).optional()
});
export type PaginatedLocationSummaryList = z.infer<typeof PaginatedLocationSummaryListSchema>;

export const PaginatedMachineSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(MachineSummarySchema).optional()
});
export type PaginatedMachineSummaryList = z.infer<typeof PaginatedMachineSummaryListSchema>;

export const PaginatedMoveBattleStyleSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(MoveBattleStyleSummarySchema).optional()
});
export type PaginatedMoveBattleStyleSummaryList = z.infer<typeof PaginatedMoveBattleStyleSummaryListSchema>;

export const PaginatedMoveDamageClassSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(MoveDamageClassSummarySchema).optional()
});
export type PaginatedMoveDamageClassSummaryList = z.infer<typeof PaginatedMoveDamageClassSummaryListSchema>;

export const PaginatedMoveLearnMethodSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(MoveLearnMethodSummarySchema).optional()
});
export type PaginatedMoveLearnMethodSummaryList = z.infer<typeof PaginatedMoveLearnMethodSummaryListSchema>;

export const PaginatedMoveMetaAilmentSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(MoveMetaAilmentSummarySchema).optional()
});
export type PaginatedMoveMetaAilmentSummaryList = z.infer<typeof PaginatedMoveMetaAilmentSummaryListSchema>;

export const PaginatedMoveMetaCategorySummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(MoveMetaCategorySummarySchema).optional()
});
export type PaginatedMoveMetaCategorySummaryList = z.infer<typeof PaginatedMoveMetaCategorySummaryListSchema>;

export const PaginatedMoveSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(MoveSummarySchema).optional()
});
export type PaginatedMoveSummaryList = z.infer<typeof PaginatedMoveSummaryListSchema>;

export const PaginatedMoveTargetSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(MoveTargetSummarySchema).optional()
});
export type PaginatedMoveTargetSummaryList = z.infer<typeof PaginatedMoveTargetSummaryListSchema>;

export const PaginatedNatureSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(NatureSummarySchema).optional()
});
export type PaginatedNatureSummaryList = z.infer<typeof PaginatedNatureSummaryListSchema>;

export const PalParkAreaSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PalParkAreaSummary = z.infer<typeof PalParkAreaSummarySchema>;

export const PaginatedPalParkAreaSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PalParkAreaSummarySchema).optional()
});
export type PaginatedPalParkAreaSummaryList = z.infer<typeof PaginatedPalParkAreaSummaryListSchema>;

export const PokeathlonStatSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PokeathlonStatSummary = z.infer<typeof PokeathlonStatSummarySchema>;

export const PaginatedPokeathlonStatSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PokeathlonStatSummarySchema).optional()
});
export type PaginatedPokeathlonStatSummaryList = z.infer<typeof PaginatedPokeathlonStatSummaryListSchema>;

export const PokedexSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PokedexSummary = z.infer<typeof PokedexSummarySchema>;

export const PaginatedPokedexSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PokedexSummarySchema).optional()
});
export type PaginatedPokedexSummaryList = z.infer<typeof PaginatedPokedexSummaryListSchema>;

export const PokemonColorSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PokemonColorSummary = z.infer<typeof PokemonColorSummarySchema>;

export const PaginatedPokemonColorSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PokemonColorSummarySchema).optional()
});
export type PaginatedPokemonColorSummaryList = z.infer<typeof PaginatedPokemonColorSummaryListSchema>;

export const PokemonFormSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PokemonFormSummary = z.infer<typeof PokemonFormSummarySchema>;

export const PaginatedPokemonFormSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PokemonFormSummarySchema).optional()
});
export type PaginatedPokemonFormSummaryList = z.infer<typeof PaginatedPokemonFormSummaryListSchema>;

export const PokemonHabitatSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PokemonHabitatSummary = z.infer<typeof PokemonHabitatSummarySchema>;

export const PaginatedPokemonHabitatSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PokemonHabitatSummarySchema).optional()
});
export type PaginatedPokemonHabitatSummaryList = z.infer<typeof PaginatedPokemonHabitatSummaryListSchema>;

export const PokemonShapeSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PokemonShapeSummary = z.infer<typeof PokemonShapeSummarySchema>;

export const PaginatedPokemonShapeSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PokemonShapeSummarySchema).optional()
});
export type PaginatedPokemonShapeSummaryList = z.infer<typeof PaginatedPokemonShapeSummaryListSchema>;

export const PaginatedPokemonSpeciesSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PokemonSpeciesSummarySchema).optional()
});
export type PaginatedPokemonSpeciesSummaryList = z.infer<typeof PaginatedPokemonSpeciesSummaryListSchema>;

export const PokemonSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type PokemonSummary = z.infer<typeof PokemonSummarySchema>;

export const PaginatedPokemonSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(PokemonSummarySchema).optional()
});
export type PaginatedPokemonSummaryList = z.infer<typeof PaginatedPokemonSummaryListSchema>;

export const PaginatedRegionSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(RegionSummarySchema).optional()
});
export type PaginatedRegionSummaryList = z.infer<typeof PaginatedRegionSummaryListSchema>;

export const PaginatedStatSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(StatSummarySchema).optional()
});
export type PaginatedStatSummaryList = z.infer<typeof PaginatedStatSummaryListSchema>;

export const PaginatedSuperContestEffectSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(SuperContestEffectSummarySchema).optional()
});
export type PaginatedSuperContestEffectSummaryList = z.infer<typeof PaginatedSuperContestEffectSummaryListSchema>;

export const PaginatedTypeSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(TypeSummarySchema).optional()
});
export type PaginatedTypeSummaryList = z.infer<typeof PaginatedTypeSummaryListSchema>;

export const PaginatedVersionGroupSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(VersionGroupSummarySchema).optional()
});
export type PaginatedVersionGroupSummaryList = z.infer<typeof PaginatedVersionGroupSummaryListSchema>;

export const VersionSummarySchema = z.object({
  name: z.string().max(200),
  url: z.string().url()
});
export type VersionSummary = z.infer<typeof VersionSummarySchema>;

export const PaginatedVersionSummaryListSchema = z.object({
  count: z.number().int().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(VersionSummarySchema).optional()
});
export type PaginatedVersionSummaryList = z.infer<typeof PaginatedVersionSummaryListSchema>;

export const PalParkAreaNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type PalParkAreaName = z.infer<typeof PalParkAreaNameSchema>;

export const PalParkAreaDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  names: z.array(PalParkAreaNameSchema),
  pokemon_encounters: z.array(z.object({
  base_score: z.number().int(),
  "pokemon-species": z.object({
  name: z.string(),
  url: z.string().url()
}),
  rate: z.number().int()
}))
});
export type PalParkAreaDetail = z.infer<typeof PalParkAreaDetailSchema>;

export const PokeathlonStatNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type PokeathlonStatName = z.infer<typeof PokeathlonStatNameSchema>;

export const PokeathlonStatDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  affecting_natures: z.object({
  decrease: z.array(z.object({
  max_change: z.number().int().max(-1),
  nature: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  increase: z.array(z.object({
  max_change: z.number().int().min(1),
  nature: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
}),
  names: z.array(PokeathlonStatNameSchema)
});
export type PokeathlonStatDetail = z.infer<typeof PokeathlonStatDetailSchema>;

export const PokedexDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type PokedexDescription = z.infer<typeof PokedexDescriptionSchema>;

export const PokedexNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type PokedexName = z.infer<typeof PokedexNameSchema>;

export const PokedexDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  is_main_series: z.boolean().optional(),
  descriptions: z.array(PokedexDescriptionSchema),
  names: z.array(PokedexNameSchema),
  pokemon_entries: z.array(z.object({
  entry_number: z.number().int(),
  pokemon_species: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  region: RegionSummarySchema,
  version_groups: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
});
export type PokedexDetail = z.infer<typeof PokedexDetailSchema>;

export const PokemonColorNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type PokemonColorName = z.infer<typeof PokemonColorNameSchema>;

export const PokemonColorDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  names: z.array(PokemonColorNameSchema),
  pokemon_species: z.array(PokemonSpeciesSummarySchema)
});
export type PokemonColorDetail = z.infer<typeof PokemonColorDetailSchema>;

export const PokemonGameIndexSchema = z.object({
  game_index: z.number().int(),
  version: VersionSummarySchema
});
export type PokemonGameIndex = z.infer<typeof PokemonGameIndexSchema>;

export const PokemonStatSchema = z.object({
  base_stat: z.number().int(),
  effort: z.number().int(),
  stat: StatSummarySchema
});
export type PokemonStat = z.infer<typeof PokemonStatSchema>;

export const PokemonDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  base_experience: z.number().int().optional(),
  height: z.number().int().optional(),
  is_default: z.boolean().optional(),
  order: z.number().int().optional(),
  weight: z.number().int().optional(),
  abilities: z.array(z.object({
  ability: z.object({
  name: z.string(),
  url: z.string().url()
}),
  is_hidden: z.boolean(),
  slot: z.number().int()
})),
  past_abilities: z.array(z.object({
  abilities: z.array(z.object({
  ability: z.object({
  name: z.string(),
  url: z.string().url()
}),
  is_hidden: z.boolean(),
  slot: z.number().int()
})),
  generation: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  forms: z.array(PokemonFormSummarySchema),
  game_indices: z.array(PokemonGameIndexSchema),
  held_items: z.array(z.object({
  item: z.object({
  name: z.string(),
  url: z.string().url()
}),
  version_details: z.array(z.object({
  rarity: z.number().int(),
  version: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
})),
  location_area_encounters: z.string(),
  moves: z.array(z.object({
  move: z.object({
  name: z.string(),
  url: z.string().url()
}),
  version_group_details: z.array(z.object({
  level_learned_at: z.number().int(),
  move_learn_method: z.object({
  name: z.string(),
  url: z.string().url()
}),
  version_group: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
})),
  species: PokemonSpeciesSummarySchema,
  sprites: z.object({
  front_default: z.string().url().optional()
}).passthrough(),
  cries: z.object({
  latest: z.string().url(),
  legacy: z.string().url()
}),
  stats: z.array(PokemonStatSchema),
  types: z.array(z.object({
  slot: z.number().int(),
  type: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  past_types: z.array(z.object({
  generation: z.object({
  name: z.string(),
  url: z.string().url()
}),
  types: z.array(z.object({
  slot: z.number().int(),
  type: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
}))
});
export type PokemonDetail = z.infer<typeof PokemonDetailSchema>;

export const PokemonDexEntrySchema = z.object({
  entry_number: z.number().int(),
  pokedex: PokedexSummarySchema
});
export type PokemonDexEntry = z.infer<typeof PokemonDexEntrySchema>;

export const PokemonFormDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  order: z.number().int().optional(),
  form_order: z.number().int().optional(),
  is_default: z.boolean().optional(),
  is_battle_only: z.boolean().optional(),
  is_mega: z.boolean().optional(),
  form_name: z.string().max(30),
  pokemon: PokemonSummarySchema,
  sprites: z.object({
  default: z.string().url().optional()
}).passthrough(),
  version_group: VersionGroupSummarySchema,
  form_names: z.array(z.object({
  language: z.object({
  name: z.string(),
  url: z.string().url()
}),
  name: z.string()
})),
  names: z.array(z.object({
  language: z.object({
  name: z.string(),
  url: z.string().url()
}),
  name: z.string()
})),
  types: z.array(z.object({
  slot: z.number().int(),
  type: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
});
export type PokemonFormDetail = z.infer<typeof PokemonFormDetailSchema>;

export const PokemonHabitatNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type PokemonHabitatName = z.infer<typeof PokemonHabitatNameSchema>;

export const PokemonHabitatDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  names: z.array(PokemonHabitatNameSchema),
  pokemon_species: z.array(PokemonSpeciesSummarySchema)
});
export type PokemonHabitatDetail = z.infer<typeof PokemonHabitatDetailSchema>;

export const PokemonShapeDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  awesome_names: z.array(z.object({
  awesome_name: z.string(),
  language: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  names: z.array(z.object({
  url: z.string().url(),
  name: z.string()
})),
  pokemon_species: z.array(PokemonSpeciesSummarySchema)
});
export type PokemonShapeDetail = z.infer<typeof PokemonShapeDetailSchema>;

export const PokemonSpeciesDescriptionSchema = z.object({
  description: z.string().max(1000).optional(),
  language: LanguageSummarySchema
});
export type PokemonSpeciesDescription = z.infer<typeof PokemonSpeciesDescriptionSchema>;

export const PokemonSpeciesFlavorTextSchema = z.object({
  flavor_text: z.string(),
  language: LanguageSummarySchema,
  version: VersionSummarySchema
});
export type PokemonSpeciesFlavorText = z.infer<typeof PokemonSpeciesFlavorTextSchema>;

export const PokemonSpeciesDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  order: z.number().int().optional(),
  gender_rate: z.number().int().optional(),
  capture_rate: z.number().int().optional(),
  base_happiness: z.number().int().optional(),
  is_baby: z.boolean().optional(),
  is_legendary: z.boolean().optional(),
  is_mythical: z.boolean().optional(),
  hatch_counter: z.number().int().optional(),
  has_gender_differences: z.boolean().optional(),
  forms_switchable: z.boolean().optional(),
  growth_rate: GrowthRateSummarySchema,
  pokedex_numbers: z.array(PokemonDexEntrySchema),
  egg_groups: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  color: PokemonColorSummarySchema,
  shape: PokemonShapeSummarySchema,
  evolves_from_species: PokemonSpeciesSummarySchema,
  evolution_chain: EvolutionChainSummarySchema,
  habitat: PokemonHabitatSummarySchema,
  generation: GenerationSummarySchema,
  names: z.array(z.object({
  language: z.object({
  name: z.string(),
  url: z.string().url()
}),
  name: z.string()
})),
  pal_park_encounters: z.array(z.object({
  area: z.object({
  name: z.string(),
  url: z.string().url()
}),
  base_score: z.number().int(),
  rate: z.number().int()
})),
  form_descriptions: z.array(PokemonSpeciesDescriptionSchema),
  flavor_text_entries: z.array(PokemonSpeciesFlavorTextSchema),
  genera: z.array(z.object({
  genus: z.string(),
  language: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  varieties: z.array(z.object({
  is_default: z.boolean(),
  pokemon: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
});
export type PokemonSpeciesDetail = z.infer<typeof PokemonSpeciesDetailSchema>;

export const RegionNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type RegionName = z.infer<typeof RegionNameSchema>;

export const RegionDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  locations: z.array(LocationSummarySchema),
  main_generation: GenerationSummarySchema,
  names: z.array(RegionNameSchema),
  pokedexes: z.array(PokedexSummarySchema),
  version_groups: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
});
export type RegionDetail = z.infer<typeof RegionDetailSchema>;

export const StatNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type StatName = z.infer<typeof StatNameSchema>;

export const StatDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  game_index: z.number().int(),
  is_battle_only: z.boolean().optional(),
  affecting_moves: z.object({
  increase: z.array(z.object({
  change: z.number().int(),
  move: z.object({
  name: z.string(),
  url: z.string().url()
})
})),
  decrease: z.array(z.object({
  change: z.number().int(),
  move: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
}),
  affecting_natures: z.object({
  increase: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  decrease: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
}),
  characteristics: z.array(CharacteristicSummarySchema),
  move_damage_class: MoveDamageClassSummarySchema,
  names: z.array(StatNameSchema)
});
export type StatDetail = z.infer<typeof StatDetailSchema>;

export const SuperContestEffectFlavorTextSchema = z.object({
  flavor_text: z.string().max(500),
  language: LanguageSummarySchema
});
export type SuperContestEffectFlavorText = z.infer<typeof SuperContestEffectFlavorTextSchema>;

export const SuperContestEffectDetailSchema = z.object({
  id: z.number().int(),
  appeal: z.number().int(),
  flavor_text_entries: z.array(SuperContestEffectFlavorTextSchema),
  moves: z.array(MoveSummarySchema)
});
export type SuperContestEffectDetail = z.infer<typeof SuperContestEffectDetailSchema>;

export const TypeGameIndexSchema = z.object({
  game_index: z.number().int(),
  generation: GenerationSummarySchema
});
export type TypeGameIndex = z.infer<typeof TypeGameIndexSchema>;

export const TypeDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  damage_relations: z.object({
  no_damage_to: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  half_damage_to: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  double_damage_to: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  no_damage_from: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  half_damage_from: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  double_damage_from: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
}),
  past_damage_relations: z.array(z.object({
  generation: z.object({
  name: z.string(),
  url: z.string().url()
}),
  damage_relations: z.object({
  no_damage_to: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  half_damage_to: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  double_damage_to: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  no_damage_from: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  half_damage_from: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  double_damage_from: z.array(z.object({
  name: z.string(),
  url: z.string().url()
}))
})
})),
  game_indices: z.array(TypeGameIndexSchema),
  generation: GenerationSummarySchema,
  move_damage_class: MoveDamageClassSummarySchema,
  names: z.array(AbilityNameSchema),
  pokemon: z.array(z.object({
  slot: z.number().int().optional(),
  pokemon: z.object({
  name: z.string().optional(),
  url: z.string().url().optional()
}).optional()
})),
  moves: z.array(MoveSummarySchema),
  sprites: z.record(z.string(), z.record(z.string(), z.object({
  "name-icon": z.string().url().optional()
})))
});
export type TypeDetail = z.infer<typeof TypeDetailSchema>;

export const VersionNameSchema = z.object({
  name: z.string().max(200),
  language: LanguageSummarySchema
});
export type VersionName = z.infer<typeof VersionNameSchema>;

export const VersionDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  names: z.array(VersionNameSchema),
  version_group: VersionGroupSummarySchema
});
export type VersionDetail = z.infer<typeof VersionDetailSchema>;

export const VersionGroupDetailSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200),
  order: z.number().int().optional(),
  generation: GenerationSummarySchema,
  move_learn_methods: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  pokedexes: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  regions: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  versions: z.array(VersionSummarySchema)
});
export type VersionGroupDetail = z.infer<typeof VersionGroupDetailSchema>;

export const api_v2_ability_list_limit_paramSchema = z.number().int();
export type api_v2_ability_list_limit_param = z.infer<typeof api_v2_ability_list_limit_paramSchema>;

export const api_v2_ability_list_offset_paramSchema = z.number().int();
export type api_v2_ability_list_offset_param = z.infer<typeof api_v2_ability_list_offset_paramSchema>;

export const api_v2_ability_list_q_paramSchema = z.string();
export type api_v2_ability_list_q_param = z.infer<typeof api_v2_ability_list_q_paramSchema>;

export const api_v2_ability_retrieve_id_paramSchema = z.string();
export type api_v2_ability_retrieve_id_param = z.infer<typeof api_v2_ability_retrieve_id_paramSchema>;

export const api_v2_berry_list_limit_paramSchema = z.number().int();
export type api_v2_berry_list_limit_param = z.infer<typeof api_v2_berry_list_limit_paramSchema>;

export const api_v2_berry_list_offset_paramSchema = z.number().int();
export type api_v2_berry_list_offset_param = z.infer<typeof api_v2_berry_list_offset_paramSchema>;

export const api_v2_berry_list_q_paramSchema = z.string();
export type api_v2_berry_list_q_param = z.infer<typeof api_v2_berry_list_q_paramSchema>;

export const api_v2_berry_retrieve_id_paramSchema = z.string();
export type api_v2_berry_retrieve_id_param = z.infer<typeof api_v2_berry_retrieve_id_paramSchema>;

export const api_v2_berry_firmness_list_limit_paramSchema = z.number().int();
export type api_v2_berry_firmness_list_limit_param = z.infer<typeof api_v2_berry_firmness_list_limit_paramSchema>;

export const api_v2_berry_firmness_list_offset_paramSchema = z.number().int();
export type api_v2_berry_firmness_list_offset_param = z.infer<typeof api_v2_berry_firmness_list_offset_paramSchema>;

export const api_v2_berry_firmness_list_q_paramSchema = z.string();
export type api_v2_berry_firmness_list_q_param = z.infer<typeof api_v2_berry_firmness_list_q_paramSchema>;

export const api_v2_berry_firmness_retrieve_id_paramSchema = z.string();
export type api_v2_berry_firmness_retrieve_id_param = z.infer<typeof api_v2_berry_firmness_retrieve_id_paramSchema>;

export const api_v2_berry_flavor_list_limit_paramSchema = z.number().int();
export type api_v2_berry_flavor_list_limit_param = z.infer<typeof api_v2_berry_flavor_list_limit_paramSchema>;

export const api_v2_berry_flavor_list_offset_paramSchema = z.number().int();
export type api_v2_berry_flavor_list_offset_param = z.infer<typeof api_v2_berry_flavor_list_offset_paramSchema>;

export const api_v2_berry_flavor_list_q_paramSchema = z.string();
export type api_v2_berry_flavor_list_q_param = z.infer<typeof api_v2_berry_flavor_list_q_paramSchema>;

export const api_v2_berry_flavor_retrieve_id_paramSchema = z.string();
export type api_v2_berry_flavor_retrieve_id_param = z.infer<typeof api_v2_berry_flavor_retrieve_id_paramSchema>;

export const api_v2_characteristic_list_limit_paramSchema = z.number().int();
export type api_v2_characteristic_list_limit_param = z.infer<typeof api_v2_characteristic_list_limit_paramSchema>;

export const api_v2_characteristic_list_offset_paramSchema = z.number().int();
export type api_v2_characteristic_list_offset_param = z.infer<typeof api_v2_characteristic_list_offset_paramSchema>;

export const api_v2_characteristic_list_q_paramSchema = z.string();
export type api_v2_characteristic_list_q_param = z.infer<typeof api_v2_characteristic_list_q_paramSchema>;

export const api_v2_characteristic_retrieve_id_paramSchema = z.string();
export type api_v2_characteristic_retrieve_id_param = z.infer<typeof api_v2_characteristic_retrieve_id_paramSchema>;

export const api_v2_contest_type_list_limit_paramSchema = z.number().int();
export type api_v2_contest_type_list_limit_param = z.infer<typeof api_v2_contest_type_list_limit_paramSchema>;

export const api_v2_contest_type_list_offset_paramSchema = z.number().int();
export type api_v2_contest_type_list_offset_param = z.infer<typeof api_v2_contest_type_list_offset_paramSchema>;

export const api_v2_contest_type_list_q_paramSchema = z.string();
export type api_v2_contest_type_list_q_param = z.infer<typeof api_v2_contest_type_list_q_paramSchema>;

export const api_v2_contest_type_retrieve_id_paramSchema = z.string();
export type api_v2_contest_type_retrieve_id_param = z.infer<typeof api_v2_contest_type_retrieve_id_paramSchema>;

export const api_v2_contest_effect_list_limit_paramSchema = z.number().int();
export type api_v2_contest_effect_list_limit_param = z.infer<typeof api_v2_contest_effect_list_limit_paramSchema>;

export const api_v2_contest_effect_list_offset_paramSchema = z.number().int();
export type api_v2_contest_effect_list_offset_param = z.infer<typeof api_v2_contest_effect_list_offset_paramSchema>;

export const api_v2_contest_effect_list_q_paramSchema = z.string();
export type api_v2_contest_effect_list_q_param = z.infer<typeof api_v2_contest_effect_list_q_paramSchema>;

export const api_v2_contest_effect_retrieve_id_paramSchema = z.string();
export type api_v2_contest_effect_retrieve_id_param = z.infer<typeof api_v2_contest_effect_retrieve_id_paramSchema>;

export const api_v2_egg_group_list_limit_paramSchema = z.number().int();
export type api_v2_egg_group_list_limit_param = z.infer<typeof api_v2_egg_group_list_limit_paramSchema>;

export const api_v2_egg_group_list_offset_paramSchema = z.number().int();
export type api_v2_egg_group_list_offset_param = z.infer<typeof api_v2_egg_group_list_offset_paramSchema>;

export const api_v2_egg_group_list_q_paramSchema = z.string();
export type api_v2_egg_group_list_q_param = z.infer<typeof api_v2_egg_group_list_q_paramSchema>;

export const api_v2_egg_group_retrieve_id_paramSchema = z.string();
export type api_v2_egg_group_retrieve_id_param = z.infer<typeof api_v2_egg_group_retrieve_id_paramSchema>;

export const api_v2_encounter_method_list_limit_paramSchema = z.number().int();
export type api_v2_encounter_method_list_limit_param = z.infer<typeof api_v2_encounter_method_list_limit_paramSchema>;

export const api_v2_encounter_method_list_offset_paramSchema = z.number().int();
export type api_v2_encounter_method_list_offset_param = z.infer<typeof api_v2_encounter_method_list_offset_paramSchema>;

export const api_v2_encounter_method_list_q_paramSchema = z.string();
export type api_v2_encounter_method_list_q_param = z.infer<typeof api_v2_encounter_method_list_q_paramSchema>;

export const api_v2_encounter_method_retrieve_id_paramSchema = z.string();
export type api_v2_encounter_method_retrieve_id_param = z.infer<typeof api_v2_encounter_method_retrieve_id_paramSchema>;

export const api_v2_encounter_condition_list_limit_paramSchema = z.number().int();
export type api_v2_encounter_condition_list_limit_param = z.infer<typeof api_v2_encounter_condition_list_limit_paramSchema>;

export const api_v2_encounter_condition_list_offset_paramSchema = z.number().int();
export type api_v2_encounter_condition_list_offset_param = z.infer<typeof api_v2_encounter_condition_list_offset_paramSchema>;

export const api_v2_encounter_condition_list_q_paramSchema = z.string();
export type api_v2_encounter_condition_list_q_param = z.infer<typeof api_v2_encounter_condition_list_q_paramSchema>;

export const api_v2_encounter_condition_retrieve_id_paramSchema = z.string();
export type api_v2_encounter_condition_retrieve_id_param = z.infer<typeof api_v2_encounter_condition_retrieve_id_paramSchema>;

export const api_v2_encounter_condition_value_list_limit_paramSchema = z.number().int();
export type api_v2_encounter_condition_value_list_limit_param = z.infer<typeof api_v2_encounter_condition_value_list_limit_paramSchema>;

export const api_v2_encounter_condition_value_list_offset_paramSchema = z.number().int();
export type api_v2_encounter_condition_value_list_offset_param = z.infer<typeof api_v2_encounter_condition_value_list_offset_paramSchema>;

export const api_v2_encounter_condition_value_list_q_paramSchema = z.string();
export type api_v2_encounter_condition_value_list_q_param = z.infer<typeof api_v2_encounter_condition_value_list_q_paramSchema>;

export const api_v2_encounter_condition_value_retrieve_id_paramSchema = z.string();
export type api_v2_encounter_condition_value_retrieve_id_param = z.infer<typeof api_v2_encounter_condition_value_retrieve_id_paramSchema>;

export const api_v2_evolution_chain_list_limit_paramSchema = z.number().int();
export type api_v2_evolution_chain_list_limit_param = z.infer<typeof api_v2_evolution_chain_list_limit_paramSchema>;

export const api_v2_evolution_chain_list_offset_paramSchema = z.number().int();
export type api_v2_evolution_chain_list_offset_param = z.infer<typeof api_v2_evolution_chain_list_offset_paramSchema>;

export const api_v2_evolution_chain_list_q_paramSchema = z.string();
export type api_v2_evolution_chain_list_q_param = z.infer<typeof api_v2_evolution_chain_list_q_paramSchema>;

export const api_v2_evolution_chain_retrieve_id_paramSchema = z.string();
export type api_v2_evolution_chain_retrieve_id_param = z.infer<typeof api_v2_evolution_chain_retrieve_id_paramSchema>;

export const api_v2_evolution_trigger_list_limit_paramSchema = z.number().int();
export type api_v2_evolution_trigger_list_limit_param = z.infer<typeof api_v2_evolution_trigger_list_limit_paramSchema>;

export const api_v2_evolution_trigger_list_offset_paramSchema = z.number().int();
export type api_v2_evolution_trigger_list_offset_param = z.infer<typeof api_v2_evolution_trigger_list_offset_paramSchema>;

export const api_v2_evolution_trigger_list_q_paramSchema = z.string();
export type api_v2_evolution_trigger_list_q_param = z.infer<typeof api_v2_evolution_trigger_list_q_paramSchema>;

export const api_v2_evolution_trigger_retrieve_id_paramSchema = z.string();
export type api_v2_evolution_trigger_retrieve_id_param = z.infer<typeof api_v2_evolution_trigger_retrieve_id_paramSchema>;

export const api_v2_generation_list_limit_paramSchema = z.number().int();
export type api_v2_generation_list_limit_param = z.infer<typeof api_v2_generation_list_limit_paramSchema>;

export const api_v2_generation_list_offset_paramSchema = z.number().int();
export type api_v2_generation_list_offset_param = z.infer<typeof api_v2_generation_list_offset_paramSchema>;

export const api_v2_generation_list_q_paramSchema = z.string();
export type api_v2_generation_list_q_param = z.infer<typeof api_v2_generation_list_q_paramSchema>;

export const api_v2_generation_retrieve_id_paramSchema = z.string();
export type api_v2_generation_retrieve_id_param = z.infer<typeof api_v2_generation_retrieve_id_paramSchema>;

export const api_v2_gender_list_limit_paramSchema = z.number().int();
export type api_v2_gender_list_limit_param = z.infer<typeof api_v2_gender_list_limit_paramSchema>;

export const api_v2_gender_list_offset_paramSchema = z.number().int();
export type api_v2_gender_list_offset_param = z.infer<typeof api_v2_gender_list_offset_paramSchema>;

export const api_v2_gender_list_q_paramSchema = z.string();
export type api_v2_gender_list_q_param = z.infer<typeof api_v2_gender_list_q_paramSchema>;

export const api_v2_gender_retrieve_id_paramSchema = z.string();
export type api_v2_gender_retrieve_id_param = z.infer<typeof api_v2_gender_retrieve_id_paramSchema>;

export const api_v2_growth_rate_list_limit_paramSchema = z.number().int();
export type api_v2_growth_rate_list_limit_param = z.infer<typeof api_v2_growth_rate_list_limit_paramSchema>;

export const api_v2_growth_rate_list_offset_paramSchema = z.number().int();
export type api_v2_growth_rate_list_offset_param = z.infer<typeof api_v2_growth_rate_list_offset_paramSchema>;

export const api_v2_growth_rate_list_q_paramSchema = z.string();
export type api_v2_growth_rate_list_q_param = z.infer<typeof api_v2_growth_rate_list_q_paramSchema>;

export const api_v2_growth_rate_retrieve_id_paramSchema = z.string();
export type api_v2_growth_rate_retrieve_id_param = z.infer<typeof api_v2_growth_rate_retrieve_id_paramSchema>;

export const api_v2_item_list_limit_paramSchema = z.number().int();
export type api_v2_item_list_limit_param = z.infer<typeof api_v2_item_list_limit_paramSchema>;

export const api_v2_item_list_offset_paramSchema = z.number().int();
export type api_v2_item_list_offset_param = z.infer<typeof api_v2_item_list_offset_paramSchema>;

export const api_v2_item_list_q_paramSchema = z.string();
export type api_v2_item_list_q_param = z.infer<typeof api_v2_item_list_q_paramSchema>;

export const api_v2_item_retrieve_id_paramSchema = z.string();
export type api_v2_item_retrieve_id_param = z.infer<typeof api_v2_item_retrieve_id_paramSchema>;

export const api_v2_item_category_list_limit_paramSchema = z.number().int();
export type api_v2_item_category_list_limit_param = z.infer<typeof api_v2_item_category_list_limit_paramSchema>;

export const api_v2_item_category_list_offset_paramSchema = z.number().int();
export type api_v2_item_category_list_offset_param = z.infer<typeof api_v2_item_category_list_offset_paramSchema>;

export const api_v2_item_category_list_q_paramSchema = z.string();
export type api_v2_item_category_list_q_param = z.infer<typeof api_v2_item_category_list_q_paramSchema>;

export const api_v2_item_category_retrieve_id_paramSchema = z.string();
export type api_v2_item_category_retrieve_id_param = z.infer<typeof api_v2_item_category_retrieve_id_paramSchema>;

export const api_v2_item_attribute_list_limit_paramSchema = z.number().int();
export type api_v2_item_attribute_list_limit_param = z.infer<typeof api_v2_item_attribute_list_limit_paramSchema>;

export const api_v2_item_attribute_list_offset_paramSchema = z.number().int();
export type api_v2_item_attribute_list_offset_param = z.infer<typeof api_v2_item_attribute_list_offset_paramSchema>;

export const api_v2_item_attribute_list_q_paramSchema = z.string();
export type api_v2_item_attribute_list_q_param = z.infer<typeof api_v2_item_attribute_list_q_paramSchema>;

export const api_v2_item_attribute_retrieve_id_paramSchema = z.string();
export type api_v2_item_attribute_retrieve_id_param = z.infer<typeof api_v2_item_attribute_retrieve_id_paramSchema>;

export const api_v2_item_fling_effect_list_limit_paramSchema = z.number().int();
export type api_v2_item_fling_effect_list_limit_param = z.infer<typeof api_v2_item_fling_effect_list_limit_paramSchema>;

export const api_v2_item_fling_effect_list_offset_paramSchema = z.number().int();
export type api_v2_item_fling_effect_list_offset_param = z.infer<typeof api_v2_item_fling_effect_list_offset_paramSchema>;

export const api_v2_item_fling_effect_list_q_paramSchema = z.string();
export type api_v2_item_fling_effect_list_q_param = z.infer<typeof api_v2_item_fling_effect_list_q_paramSchema>;

export const api_v2_item_fling_effect_retrieve_id_paramSchema = z.string();
export type api_v2_item_fling_effect_retrieve_id_param = z.infer<typeof api_v2_item_fling_effect_retrieve_id_paramSchema>;

export const api_v2_item_pocket_list_limit_paramSchema = z.number().int();
export type api_v2_item_pocket_list_limit_param = z.infer<typeof api_v2_item_pocket_list_limit_paramSchema>;

export const api_v2_item_pocket_list_offset_paramSchema = z.number().int();
export type api_v2_item_pocket_list_offset_param = z.infer<typeof api_v2_item_pocket_list_offset_paramSchema>;

export const api_v2_item_pocket_list_q_paramSchema = z.string();
export type api_v2_item_pocket_list_q_param = z.infer<typeof api_v2_item_pocket_list_q_paramSchema>;

export const api_v2_item_pocket_retrieve_id_paramSchema = z.string();
export type api_v2_item_pocket_retrieve_id_param = z.infer<typeof api_v2_item_pocket_retrieve_id_paramSchema>;

export const api_v2_language_list_limit_paramSchema = z.number().int();
export type api_v2_language_list_limit_param = z.infer<typeof api_v2_language_list_limit_paramSchema>;

export const api_v2_language_list_offset_paramSchema = z.number().int();
export type api_v2_language_list_offset_param = z.infer<typeof api_v2_language_list_offset_paramSchema>;

export const api_v2_language_list_q_paramSchema = z.string();
export type api_v2_language_list_q_param = z.infer<typeof api_v2_language_list_q_paramSchema>;

export const api_v2_language_retrieve_id_paramSchema = z.string();
export type api_v2_language_retrieve_id_param = z.infer<typeof api_v2_language_retrieve_id_paramSchema>;

export const api_v2_location_list_limit_paramSchema = z.number().int();
export type api_v2_location_list_limit_param = z.infer<typeof api_v2_location_list_limit_paramSchema>;

export const api_v2_location_list_offset_paramSchema = z.number().int();
export type api_v2_location_list_offset_param = z.infer<typeof api_v2_location_list_offset_paramSchema>;

export const api_v2_location_list_q_paramSchema = z.string();
export type api_v2_location_list_q_param = z.infer<typeof api_v2_location_list_q_paramSchema>;

export const api_v2_location_retrieve_id_paramSchema = z.string();
export type api_v2_location_retrieve_id_param = z.infer<typeof api_v2_location_retrieve_id_paramSchema>;

export const api_v2_location_area_list_limit_paramSchema = z.number().int();
export type api_v2_location_area_list_limit_param = z.infer<typeof api_v2_location_area_list_limit_paramSchema>;

export const api_v2_location_area_list_offset_paramSchema = z.number().int();
export type api_v2_location_area_list_offset_param = z.infer<typeof api_v2_location_area_list_offset_paramSchema>;

export const api_v2_location_area_retrieve_id_paramSchema = z.number().int();
export type api_v2_location_area_retrieve_id_param = z.infer<typeof api_v2_location_area_retrieve_id_paramSchema>;

export const api_v2_machine_list_limit_paramSchema = z.number().int();
export type api_v2_machine_list_limit_param = z.infer<typeof api_v2_machine_list_limit_paramSchema>;

export const api_v2_machine_list_offset_paramSchema = z.number().int();
export type api_v2_machine_list_offset_param = z.infer<typeof api_v2_machine_list_offset_paramSchema>;

export const api_v2_machine_list_q_paramSchema = z.string();
export type api_v2_machine_list_q_param = z.infer<typeof api_v2_machine_list_q_paramSchema>;

export const api_v2_machine_retrieve_id_paramSchema = z.string();
export type api_v2_machine_retrieve_id_param = z.infer<typeof api_v2_machine_retrieve_id_paramSchema>;

export const api_v2_move_list_limit_paramSchema = z.number().int();
export type api_v2_move_list_limit_param = z.infer<typeof api_v2_move_list_limit_paramSchema>;

export const api_v2_move_list_offset_paramSchema = z.number().int();
export type api_v2_move_list_offset_param = z.infer<typeof api_v2_move_list_offset_paramSchema>;

export const api_v2_move_list_q_paramSchema = z.string();
export type api_v2_move_list_q_param = z.infer<typeof api_v2_move_list_q_paramSchema>;

export const api_v2_move_retrieve_id_paramSchema = z.string();
export type api_v2_move_retrieve_id_param = z.infer<typeof api_v2_move_retrieve_id_paramSchema>;

export const api_v2_move_ailment_list_limit_paramSchema = z.number().int();
export type api_v2_move_ailment_list_limit_param = z.infer<typeof api_v2_move_ailment_list_limit_paramSchema>;

export const api_v2_move_ailment_list_offset_paramSchema = z.number().int();
export type api_v2_move_ailment_list_offset_param = z.infer<typeof api_v2_move_ailment_list_offset_paramSchema>;

export const api_v2_move_ailment_list_q_paramSchema = z.string();
export type api_v2_move_ailment_list_q_param = z.infer<typeof api_v2_move_ailment_list_q_paramSchema>;

export const api_v2_move_ailment_retrieve_id_paramSchema = z.string();
export type api_v2_move_ailment_retrieve_id_param = z.infer<typeof api_v2_move_ailment_retrieve_id_paramSchema>;

export const api_v2_move_battle_style_list_limit_paramSchema = z.number().int();
export type api_v2_move_battle_style_list_limit_param = z.infer<typeof api_v2_move_battle_style_list_limit_paramSchema>;

export const api_v2_move_battle_style_list_offset_paramSchema = z.number().int();
export type api_v2_move_battle_style_list_offset_param = z.infer<typeof api_v2_move_battle_style_list_offset_paramSchema>;

export const api_v2_move_battle_style_list_q_paramSchema = z.string();
export type api_v2_move_battle_style_list_q_param = z.infer<typeof api_v2_move_battle_style_list_q_paramSchema>;

export const api_v2_move_battle_style_retrieve_id_paramSchema = z.string();
export type api_v2_move_battle_style_retrieve_id_param = z.infer<typeof api_v2_move_battle_style_retrieve_id_paramSchema>;

export const api_v2_move_category_list_limit_paramSchema = z.number().int();
export type api_v2_move_category_list_limit_param = z.infer<typeof api_v2_move_category_list_limit_paramSchema>;

export const api_v2_move_category_list_offset_paramSchema = z.number().int();
export type api_v2_move_category_list_offset_param = z.infer<typeof api_v2_move_category_list_offset_paramSchema>;

export const api_v2_move_category_list_q_paramSchema = z.string();
export type api_v2_move_category_list_q_param = z.infer<typeof api_v2_move_category_list_q_paramSchema>;

export const api_v2_move_category_retrieve_id_paramSchema = z.string();
export type api_v2_move_category_retrieve_id_param = z.infer<typeof api_v2_move_category_retrieve_id_paramSchema>;

export const api_v2_move_damage_class_list_limit_paramSchema = z.number().int();
export type api_v2_move_damage_class_list_limit_param = z.infer<typeof api_v2_move_damage_class_list_limit_paramSchema>;

export const api_v2_move_damage_class_list_offset_paramSchema = z.number().int();
export type api_v2_move_damage_class_list_offset_param = z.infer<typeof api_v2_move_damage_class_list_offset_paramSchema>;

export const api_v2_move_damage_class_list_q_paramSchema = z.string();
export type api_v2_move_damage_class_list_q_param = z.infer<typeof api_v2_move_damage_class_list_q_paramSchema>;

export const api_v2_move_damage_class_retrieve_id_paramSchema = z.string();
export type api_v2_move_damage_class_retrieve_id_param = z.infer<typeof api_v2_move_damage_class_retrieve_id_paramSchema>;

export const api_v2_move_learn_method_list_limit_paramSchema = z.number().int();
export type api_v2_move_learn_method_list_limit_param = z.infer<typeof api_v2_move_learn_method_list_limit_paramSchema>;

export const api_v2_move_learn_method_list_offset_paramSchema = z.number().int();
export type api_v2_move_learn_method_list_offset_param = z.infer<typeof api_v2_move_learn_method_list_offset_paramSchema>;

export const api_v2_move_learn_method_list_q_paramSchema = z.string();
export type api_v2_move_learn_method_list_q_param = z.infer<typeof api_v2_move_learn_method_list_q_paramSchema>;

export const api_v2_move_learn_method_retrieve_id_paramSchema = z.string();
export type api_v2_move_learn_method_retrieve_id_param = z.infer<typeof api_v2_move_learn_method_retrieve_id_paramSchema>;

export const api_v2_move_target_list_limit_paramSchema = z.number().int();
export type api_v2_move_target_list_limit_param = z.infer<typeof api_v2_move_target_list_limit_paramSchema>;

export const api_v2_move_target_list_offset_paramSchema = z.number().int();
export type api_v2_move_target_list_offset_param = z.infer<typeof api_v2_move_target_list_offset_paramSchema>;

export const api_v2_move_target_list_q_paramSchema = z.string();
export type api_v2_move_target_list_q_param = z.infer<typeof api_v2_move_target_list_q_paramSchema>;

export const api_v2_move_target_retrieve_id_paramSchema = z.string();
export type api_v2_move_target_retrieve_id_param = z.infer<typeof api_v2_move_target_retrieve_id_paramSchema>;

export const api_v2_nature_list_limit_paramSchema = z.number().int();
export type api_v2_nature_list_limit_param = z.infer<typeof api_v2_nature_list_limit_paramSchema>;

export const api_v2_nature_list_offset_paramSchema = z.number().int();
export type api_v2_nature_list_offset_param = z.infer<typeof api_v2_nature_list_offset_paramSchema>;

export const api_v2_nature_list_q_paramSchema = z.string();
export type api_v2_nature_list_q_param = z.infer<typeof api_v2_nature_list_q_paramSchema>;

export const api_v2_nature_retrieve_id_paramSchema = z.string();
export type api_v2_nature_retrieve_id_param = z.infer<typeof api_v2_nature_retrieve_id_paramSchema>;

export const api_v2_pal_park_area_list_limit_paramSchema = z.number().int();
export type api_v2_pal_park_area_list_limit_param = z.infer<typeof api_v2_pal_park_area_list_limit_paramSchema>;

export const api_v2_pal_park_area_list_offset_paramSchema = z.number().int();
export type api_v2_pal_park_area_list_offset_param = z.infer<typeof api_v2_pal_park_area_list_offset_paramSchema>;

export const api_v2_pal_park_area_list_q_paramSchema = z.string();
export type api_v2_pal_park_area_list_q_param = z.infer<typeof api_v2_pal_park_area_list_q_paramSchema>;

export const api_v2_pal_park_area_retrieve_id_paramSchema = z.string();
export type api_v2_pal_park_area_retrieve_id_param = z.infer<typeof api_v2_pal_park_area_retrieve_id_paramSchema>;

export const api_v2_pokedex_list_limit_paramSchema = z.number().int();
export type api_v2_pokedex_list_limit_param = z.infer<typeof api_v2_pokedex_list_limit_paramSchema>;

export const api_v2_pokedex_list_offset_paramSchema = z.number().int();
export type api_v2_pokedex_list_offset_param = z.infer<typeof api_v2_pokedex_list_offset_paramSchema>;

export const api_v2_pokedex_list_q_paramSchema = z.string();
export type api_v2_pokedex_list_q_param = z.infer<typeof api_v2_pokedex_list_q_paramSchema>;

export const api_v2_pokedex_retrieve_id_paramSchema = z.string();
export type api_v2_pokedex_retrieve_id_param = z.infer<typeof api_v2_pokedex_retrieve_id_paramSchema>;

export const api_v2_pokemon_list_limit_paramSchema = z.number().int();
export type api_v2_pokemon_list_limit_param = z.infer<typeof api_v2_pokemon_list_limit_paramSchema>;

export const api_v2_pokemon_list_offset_paramSchema = z.number().int();
export type api_v2_pokemon_list_offset_param = z.infer<typeof api_v2_pokemon_list_offset_paramSchema>;

export const api_v2_pokemon_list_q_paramSchema = z.string();
export type api_v2_pokemon_list_q_param = z.infer<typeof api_v2_pokemon_list_q_paramSchema>;

export const api_v2_pokemon_retrieve_id_paramSchema = z.string();
export type api_v2_pokemon_retrieve_id_param = z.infer<typeof api_v2_pokemon_retrieve_id_paramSchema>;

export const api_v2_pokemon_color_list_limit_paramSchema = z.number().int();
export type api_v2_pokemon_color_list_limit_param = z.infer<typeof api_v2_pokemon_color_list_limit_paramSchema>;

export const api_v2_pokemon_color_list_offset_paramSchema = z.number().int();
export type api_v2_pokemon_color_list_offset_param = z.infer<typeof api_v2_pokemon_color_list_offset_paramSchema>;

export const api_v2_pokemon_color_list_q_paramSchema = z.string();
export type api_v2_pokemon_color_list_q_param = z.infer<typeof api_v2_pokemon_color_list_q_paramSchema>;

export const api_v2_pokemon_color_retrieve_id_paramSchema = z.string();
export type api_v2_pokemon_color_retrieve_id_param = z.infer<typeof api_v2_pokemon_color_retrieve_id_paramSchema>;

export const api_v2_pokemon_form_list_limit_paramSchema = z.number().int();
export type api_v2_pokemon_form_list_limit_param = z.infer<typeof api_v2_pokemon_form_list_limit_paramSchema>;

export const api_v2_pokemon_form_list_offset_paramSchema = z.number().int();
export type api_v2_pokemon_form_list_offset_param = z.infer<typeof api_v2_pokemon_form_list_offset_paramSchema>;

export const api_v2_pokemon_form_list_q_paramSchema = z.string();
export type api_v2_pokemon_form_list_q_param = z.infer<typeof api_v2_pokemon_form_list_q_paramSchema>;

export const api_v2_pokemon_form_retrieve_id_paramSchema = z.string();
export type api_v2_pokemon_form_retrieve_id_param = z.infer<typeof api_v2_pokemon_form_retrieve_id_paramSchema>;

export const api_v2_pokemon_habitat_list_limit_paramSchema = z.number().int();
export type api_v2_pokemon_habitat_list_limit_param = z.infer<typeof api_v2_pokemon_habitat_list_limit_paramSchema>;

export const api_v2_pokemon_habitat_list_offset_paramSchema = z.number().int();
export type api_v2_pokemon_habitat_list_offset_param = z.infer<typeof api_v2_pokemon_habitat_list_offset_paramSchema>;

export const api_v2_pokemon_habitat_list_q_paramSchema = z.string();
export type api_v2_pokemon_habitat_list_q_param = z.infer<typeof api_v2_pokemon_habitat_list_q_paramSchema>;

export const api_v2_pokemon_habitat_retrieve_id_paramSchema = z.string();
export type api_v2_pokemon_habitat_retrieve_id_param = z.infer<typeof api_v2_pokemon_habitat_retrieve_id_paramSchema>;

export const api_v2_pokemon_shape_list_limit_paramSchema = z.number().int();
export type api_v2_pokemon_shape_list_limit_param = z.infer<typeof api_v2_pokemon_shape_list_limit_paramSchema>;

export const api_v2_pokemon_shape_list_offset_paramSchema = z.number().int();
export type api_v2_pokemon_shape_list_offset_param = z.infer<typeof api_v2_pokemon_shape_list_offset_paramSchema>;

export const api_v2_pokemon_shape_list_q_paramSchema = z.string();
export type api_v2_pokemon_shape_list_q_param = z.infer<typeof api_v2_pokemon_shape_list_q_paramSchema>;

export const api_v2_pokemon_shape_retrieve_id_paramSchema = z.string();
export type api_v2_pokemon_shape_retrieve_id_param = z.infer<typeof api_v2_pokemon_shape_retrieve_id_paramSchema>;

export const api_v2_pokemon_species_list_limit_paramSchema = z.number().int();
export type api_v2_pokemon_species_list_limit_param = z.infer<typeof api_v2_pokemon_species_list_limit_paramSchema>;

export const api_v2_pokemon_species_list_offset_paramSchema = z.number().int();
export type api_v2_pokemon_species_list_offset_param = z.infer<typeof api_v2_pokemon_species_list_offset_paramSchema>;

export const api_v2_pokemon_species_list_q_paramSchema = z.string();
export type api_v2_pokemon_species_list_q_param = z.infer<typeof api_v2_pokemon_species_list_q_paramSchema>;

export const api_v2_pokemon_species_retrieve_id_paramSchema = z.string();
export type api_v2_pokemon_species_retrieve_id_param = z.infer<typeof api_v2_pokemon_species_retrieve_id_paramSchema>;

export const api_v2_pokeathlon_stat_list_limit_paramSchema = z.number().int();
export type api_v2_pokeathlon_stat_list_limit_param = z.infer<typeof api_v2_pokeathlon_stat_list_limit_paramSchema>;

export const api_v2_pokeathlon_stat_list_offset_paramSchema = z.number().int();
export type api_v2_pokeathlon_stat_list_offset_param = z.infer<typeof api_v2_pokeathlon_stat_list_offset_paramSchema>;

export const api_v2_pokeathlon_stat_list_q_paramSchema = z.string();
export type api_v2_pokeathlon_stat_list_q_param = z.infer<typeof api_v2_pokeathlon_stat_list_q_paramSchema>;

export const api_v2_pokeathlon_stat_retrieve_id_paramSchema = z.string();
export type api_v2_pokeathlon_stat_retrieve_id_param = z.infer<typeof api_v2_pokeathlon_stat_retrieve_id_paramSchema>;

export const api_v2_region_list_limit_paramSchema = z.number().int();
export type api_v2_region_list_limit_param = z.infer<typeof api_v2_region_list_limit_paramSchema>;

export const api_v2_region_list_offset_paramSchema = z.number().int();
export type api_v2_region_list_offset_param = z.infer<typeof api_v2_region_list_offset_paramSchema>;

export const api_v2_region_list_q_paramSchema = z.string();
export type api_v2_region_list_q_param = z.infer<typeof api_v2_region_list_q_paramSchema>;

export const api_v2_region_retrieve_id_paramSchema = z.string();
export type api_v2_region_retrieve_id_param = z.infer<typeof api_v2_region_retrieve_id_paramSchema>;

export const api_v2_stat_list_limit_paramSchema = z.number().int();
export type api_v2_stat_list_limit_param = z.infer<typeof api_v2_stat_list_limit_paramSchema>;

export const api_v2_stat_list_offset_paramSchema = z.number().int();
export type api_v2_stat_list_offset_param = z.infer<typeof api_v2_stat_list_offset_paramSchema>;

export const api_v2_stat_list_q_paramSchema = z.string();
export type api_v2_stat_list_q_param = z.infer<typeof api_v2_stat_list_q_paramSchema>;

export const api_v2_stat_retrieve_id_paramSchema = z.string();
export type api_v2_stat_retrieve_id_param = z.infer<typeof api_v2_stat_retrieve_id_paramSchema>;

export const api_v2_super_contest_effect_list_limit_paramSchema = z.number().int();
export type api_v2_super_contest_effect_list_limit_param = z.infer<typeof api_v2_super_contest_effect_list_limit_paramSchema>;

export const api_v2_super_contest_effect_list_offset_paramSchema = z.number().int();
export type api_v2_super_contest_effect_list_offset_param = z.infer<typeof api_v2_super_contest_effect_list_offset_paramSchema>;

export const api_v2_super_contest_effect_list_q_paramSchema = z.string();
export type api_v2_super_contest_effect_list_q_param = z.infer<typeof api_v2_super_contest_effect_list_q_paramSchema>;

export const api_v2_super_contest_effect_retrieve_id_paramSchema = z.string();
export type api_v2_super_contest_effect_retrieve_id_param = z.infer<typeof api_v2_super_contest_effect_retrieve_id_paramSchema>;

export const api_v2_type_list_limit_paramSchema = z.number().int();
export type api_v2_type_list_limit_param = z.infer<typeof api_v2_type_list_limit_paramSchema>;

export const api_v2_type_list_offset_paramSchema = z.number().int();
export type api_v2_type_list_offset_param = z.infer<typeof api_v2_type_list_offset_paramSchema>;

export const api_v2_type_list_q_paramSchema = z.string();
export type api_v2_type_list_q_param = z.infer<typeof api_v2_type_list_q_paramSchema>;

export const api_v2_type_retrieve_id_paramSchema = z.string();
export type api_v2_type_retrieve_id_param = z.infer<typeof api_v2_type_retrieve_id_paramSchema>;

export const api_v2_version_list_limit_paramSchema = z.number().int();
export type api_v2_version_list_limit_param = z.infer<typeof api_v2_version_list_limit_paramSchema>;

export const api_v2_version_list_offset_paramSchema = z.number().int();
export type api_v2_version_list_offset_param = z.infer<typeof api_v2_version_list_offset_paramSchema>;

export const api_v2_version_list_q_paramSchema = z.string();
export type api_v2_version_list_q_param = z.infer<typeof api_v2_version_list_q_paramSchema>;

export const api_v2_version_retrieve_id_paramSchema = z.string();
export type api_v2_version_retrieve_id_param = z.infer<typeof api_v2_version_retrieve_id_paramSchema>;

export const api_v2_version_group_list_limit_paramSchema = z.number().int();
export type api_v2_version_group_list_limit_param = z.infer<typeof api_v2_version_group_list_limit_paramSchema>;

export const api_v2_version_group_list_offset_paramSchema = z.number().int();
export type api_v2_version_group_list_offset_param = z.infer<typeof api_v2_version_group_list_offset_paramSchema>;

export const api_v2_version_group_list_q_paramSchema = z.string();
export type api_v2_version_group_list_q_param = z.infer<typeof api_v2_version_group_list_q_paramSchema>;

export const api_v2_version_group_retrieve_id_paramSchema = z.string();
export type api_v2_version_group_retrieve_id_param = z.infer<typeof api_v2_version_group_retrieve_id_paramSchema>;

export const api_v2_pokemon_encounters_retrieve_pokemon_id_paramSchema = z.string().regex(/^\d+$/);
export type api_v2_pokemon_encounters_retrieve_pokemon_id_param = z.infer<typeof api_v2_pokemon_encounters_retrieve_pokemon_id_paramSchema>;

export const ApiV2PokemonEncountersRetrieveResponseSchema = z.array(z.object({
  location_area: z.object({
  name: z.string(),
  url: z.string().url()
}),
  version_details: z.array(z.object({
  encounter_details: z.array(z.object({
  chance: z.number(),
  condition_values: z.array(z.object({
  name: z.string(),
  url: z.string().url()
})),
  max_level: z.number(),
  method: z.object({
  name: z.string(),
  url: z.string().url()
}),
  min_level: z.number()
})),
  max_chance: z.number(),
  version: z.object({
  name: z.string(),
  url: z.string().url()
})
}))
}));
export type ApiV2PokemonEncountersRetrieveResponse = z.infer<typeof ApiV2PokemonEncountersRetrieveResponseSchema>;
