// Auto-generated TypeScript interfaces from OpenAPI spec
// Do not edit manually

export interface VersionGroupSummary {
  name: string;
  url: string;
}

export interface LanguageSummary {
  name: string;
  url: string;
}

export interface AbilityChangeEffectText {
  effect: string;
  language: LanguageSummary;
}

export interface AbilityChange {
  version_group: VersionGroupSummary;
  effect_entries: AbilityChangeEffectText[];
}

export interface GenerationSummary {
  name: string;
  url: string;
}

export interface AbilityName {
  name: string;
  language: LanguageSummary;
}

export interface AbilityEffectText {
  effect: string;
  short_effect: string;
  language: LanguageSummary;
}

export interface AbilityFlavorText {
  flavor_text: string;
  language: LanguageSummary;
  version_group: VersionGroupSummary;
}

export interface AbilityDetail {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: GenerationSummary;
  names: AbilityName[];
  effect_entries: AbilityEffectText[];
  effect_changes: AbilityChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: {
  is_hidden: boolean;
  slot: number;
  pokemon: {
  name: string;
  url: string;
};
}[];
}

export interface AbilitySummary {
  name: string;
  url: string;
}

export interface BerryFirmnessSummary {
  name: string;
  url: string;
}

export interface ItemSummary {
  name: string;
  url: string;
}

export interface TypeSummary {
  name: string;
  url: string;
}

export interface BerryDetail {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: BerryFirmnessSummary;
  flavors: {
  potency: number;
  flavor: {
  name: string;
  url: string;
};
}[];
  item: ItemSummary;
  natural_gift_type: TypeSummary;
}

export interface BerrySummary {
  name: string;
  url: string;
}

export interface BerryFirmnessName {
  name: string;
  language: LanguageSummary;
}

export interface BerryFirmnessDetail {
  id: number;
  name: string;
  berries: BerrySummary[];
  names: BerryFirmnessName[];
}

export interface ContestTypeSummary {
  name: string;
  url: string;
}

export interface BerryFlavorName {
  name: string;
  language: LanguageSummary;
}

export interface BerryFlavorDetail {
  id: number;
  name: string;
  berries: {
  potency: number;
  berry: {
  name: string;
  url: string;
};
}[];
  contest_type: ContestTypeSummary;
  names: BerryFlavorName[];
}

export interface BerryFlavorSummary {
  name: string;
  url: string;
}

export interface CharacteristicDescription {
  description: string;
  language: LanguageSummary;
}

export interface StatSummary {
  name: string;
  url: string;
}

export interface CharacteristicDetail {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  highest_stat: StatSummary;
  descriptions: CharacteristicDescription[];
}

export interface CharacteristicSummary {
  url: string;
}

export interface ContestEffectEffectText {
  effect: string;
  language: LanguageSummary;
}

export interface ContestEffectFlavorText {
  flavor_text: string;
  language: LanguageSummary;
}

export interface ContestEffectDetail {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: ContestEffectEffectText[];
  flavor_text_entries: ContestEffectFlavorText[];
}

export interface ContestEffectSummary {
  url: string;
}

export interface ContestTypeName {
  name: string;
  color: string;
  language: LanguageSummary;
}

export interface ContestTypeDetail {
  id: number;
  name: string;
  berry_flavor: BerryFlavorSummary;
  names: ContestTypeName[];
}

export interface EggGroupName {
  name: string;
  language: LanguageSummary;
}

export interface EggGroupDetail {
  id: number;
  name: string;
  names: EggGroupName[];
  pokemon_species: {
  name: string;
  url: string;
}[];
}

export interface EggGroupSummary {
  name: string;
  url: string;
}

export interface EncounterConditionValueSummary {
  name: string;
  url: string;
}

export interface EncounterConditionName {
  name: string;
  language: LanguageSummary;
}

export interface EncounterConditionDetail {
  id: number;
  name: string;
  values: EncounterConditionValueSummary[];
  names: EncounterConditionName[];
}

export interface EncounterConditionSummary {
  name: string;
  url: string;
}

export interface EncounterConditionValueName {
  name: string;
  language: LanguageSummary;
}

export interface EncounterConditionValueDetail {
  id: number;
  name: string;
  condition: EncounterConditionSummary;
  names: EncounterConditionValueName[];
}

export interface EncounterMethodName {
  name: string;
  language: LanguageSummary;
}

export interface EncounterMethodDetail {
  id: number;
  name: string;
  order: number;
  names: EncounterMethodName[];
}

export interface EncounterMethodSummary {
  name: string;
  url: string;
}

export interface EvolutionChainDetail {
  id: number;
  baby_trigger_item: ItemSummary;
  chain: {
  evolution_details: unknown[];
  evolves_to: {
  evolution_details: {
  gender: ({
  name: string;
  url: string;
}) | null;
  held_item: ({
  name: string;
  url: string;
}) | null;
  item: ({
  name: string;
  url: string;
}) | null;
  known_move: (unknown) | null;
  known_move_type: (unknown) | null;
  location: ({
  name: string;
  url: string;
}) | null;
  min_affection: (number) | null;
  min_beauty: (number) | null;
  min_happiness: (number) | null;
  min_level: (number) | null;
  needs_overworld_rain: (boolean) | null;
  party_species: (string) | null;
  party_type: (string) | null;
  relative_physical_stats: (string) | null;
  time_of_day: string;
  trade_species: (string) | null;
  trigger: {
  name: string;
  url: string;
};
  turn_upside_down: boolean;
}[];
  is_baby: boolean;
  species: {
  name: string;
  url: string;
};
}[];
  is_baby: boolean;
  species: {
  name: string;
  url: string;
};
};
}

export interface EvolutionChainSummary {
  url: string;
}

export interface EvolutionTriggerName {
  name: string;
  language: LanguageSummary;
}

export interface EvolutionTriggerDetail {
  id: number;
  name: string;
  names: EvolutionTriggerName[];
  pokemon_species: {
  name: string;
  url: string;
}[];
}

export interface EvolutionTriggerSummary {
  name: string;
  url: string;
}

export interface Experience {
  level: number;
  experience: number;
}

export interface GenderDetail {
  id: number;
  name: string;
  pokemon_species_details: {
  rate: number;
  pokemon_species: {
  name: string;
  url: string;
};
}[];
  required_for_evolution: {
  name: string;
  url: string;
}[];
}

export interface GenderSummary {
  name: string;
  url: string;
}

export interface RegionSummary {
  name: string;
  url: string;
}

export interface MoveSummary {
  name: string;
  url: string;
}

export interface GenerationName {
  name: string;
  language: LanguageSummary;
}

export interface PokemonSpeciesSummary {
  name: string;
  url: string;
}

export interface GenerationDetail {
  id: number;
  name: string;
  abilities: AbilitySummary[];
  main_region: RegionSummary;
  moves: MoveSummary[];
  names: GenerationName[];
  pokemon_species: PokemonSpeciesSummary[];
  types: TypeSummary[];
  version_groups: VersionGroupSummary[];
}

export interface GrowthRateDescription {
  description: string;
  language: LanguageSummary;
}

export interface GrowthRateDetail {
  id: number;
  name: string;
  formula: string;
  descriptions: GrowthRateDescription[];
  levels: Experience[];
  pokemon_species: PokemonSpeciesSummary[];
}

export interface GrowthRateSummary {
  name: string;
  url: string;
}

export interface ItemAttributeDescription {
  description: string;
  language: LanguageSummary;
}

export interface ItemAttributeName {
  name: string;
  language: LanguageSummary;
}

export interface ItemAttributeDetail {
  id: number;
  name: string;
  descriptions: ItemAttributeDescription[];
  items: {
  name: string;
  url: string;
}[];
  names: ItemAttributeName[];
}

export interface ItemAttributeSummary {
  name: string;
  url: string;
}

export interface ItemCategoryName {
  name: string;
  language: LanguageSummary;
}

export interface ItemPocketSummary {
  name: string;
  url: string;
}

export interface ItemCategoryDetail {
  id: number;
  name: string;
  items: ItemSummary[];
  names: ItemCategoryName[];
  pocket: ItemPocketSummary;
}

export interface ItemCategorySummary {
  name: string;
  url: string;
}

export interface ItemFlingEffectSummary {
  name: string;
  url: string;
}

export interface ItemEffectText {
  effect: string;
  short_effect: string;
  language: LanguageSummary;
}

export interface ItemFlavorText {
  text: string;
  version_group: VersionGroupSummary;
  language: LanguageSummary;
}

export interface ItemGameIndex {
  game_index: number;
  generation: GenerationSummary;
}

export interface ItemName {
  name: string;
  language: LanguageSummary;
}

export interface ItemDetail {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: ItemFlingEffectSummary;
  attributes: {
  name: string;
  url: string;
}[];
  category: ItemCategorySummary;
  effect_entries: ItemEffectText[];
  flavor_text_entries: ItemFlavorText[];
  game_indices: ItemGameIndex[];
  names: ItemName[];
  held_by_pokemon: {
  pokemon: {
  name: string;
  url: string;
};
  "version-details": {
  rarity: number;
  version: {
  name: string;
  url: string;
};
}[];
}[];
  sprites: {
  default: string;
};
  baby_trigger_for: {
  url: string;
};
  machines: {
  machine: string;
  version_group: {
  name: string;
  url: string;
};
}[];
}

export interface ItemFlingEffectEffectText {
  effect: string;
  language: LanguageSummary;
}

export interface ItemFlingEffectDetail {
  id: number;
  name: string;
  effect_entries: ItemFlingEffectEffectText[];
  items: ItemSummary[];
}

export interface ItemPocketName {
  name: string;
  language: LanguageSummary;
}

export interface ItemPocketDetail {
  id: number;
  name: string;
  categories: ItemCategorySummary[];
  names: ItemPocketName[];
}

export interface LanguageName {
  name: string;
  language: LanguageSummary;
}

export interface LanguageDetail {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: LanguageName[];
}

export interface LocationSummary {
  name: string;
  url: string;
}

export interface LocationAreaName {
  name: string;
  language: LanguageSummary;
}

export interface LocationAreaDetail {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: {
  encounter_method: {
  name: string;
  url: string;
};
  version_details: {
  rate: number;
  version: {
  name: string;
  url: string;
};
}[];
}[];
  location: LocationSummary;
  names: LocationAreaName[];
  pokemon_encounters: {
  pokemon: {
  name: string;
  url: string;
};
  version_details: {
  version: {
  name: string;
  url: string;
};
  max_chance: number;
  encounter_details: {
  min_level: number;
  max_level: number;
  condition_values: {
  name: string;
  url: string;
};
  chance: number;
  method: {
  name: string;
  url: string;
};
};
}[];
}[];
}

export interface LocationAreaSummary {
  name: string;
  url: string;
}

export interface LocationName {
  name: string;
  language: LanguageSummary;
}

export interface LocationGameIndex {
  game_index: number;
  generation: GenerationSummary;
}

export interface LocationDetail {
  id: number;
  name: string;
  region: RegionSummary;
  names: LocationName[];
  game_indices: LocationGameIndex[];
  areas: LocationAreaSummary[];
}

export interface MachineDetail {
  id: number;
  item: ItemSummary;
  version_group: VersionGroupSummary;
  move: MoveSummary;
}

export interface MachineSummary {
  url: string;
}

export interface MoveBattleStyleName {
  name: string;
  language: LanguageSummary;
}

export interface MoveBattleStyleDetail {
  id: number;
  name: string;
  names: MoveBattleStyleName[];
}

export interface MoveBattleStyleSummary {
  name: string;
  url: string;
}

export interface MoveChange {
  accuracy: number;
  power: number;
  pp: number;
  effect_chance: number;
  effect_entries: {
  effect: string;
  short_effect: string;
  language: {
  name: string;
  url: string;
};
}[];
  type: TypeSummary;
  version_group: VersionGroupSummary;
}

export interface MoveDamageClassDescription {
  description: string;
  language: LanguageSummary;
}

export interface MoveDamageClassName {
  name: string;
  language: LanguageSummary;
}

export interface MoveDamageClassDetail {
  id: number;
  name: string;
  descriptions: MoveDamageClassDescription[];
  moves: MoveSummary[];
  names: MoveDamageClassName[];
}

export interface MoveDamageClassSummary {
  name: string;
  url: string;
}

export interface MoveMetaAilmentSummary {
  name: string;
  url: string;
}

export interface MoveMetaCategorySummary {
  name: string;
  url: string;
}

export interface MoveMeta {
  ailment: MoveMetaAilmentSummary;
  category: MoveMetaCategorySummary;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

export interface MoveName {
  name: string;
  language: LanguageSummary;
}

export interface SuperContestEffectSummary {
  url: string;
}

export interface MoveTargetSummary {
  name: string;
  url: string;
}

export interface MoveFlavorText {
  flavor_text: string;
  language: LanguageSummary;
  version_group: VersionGroupSummary;
}

export interface MoveDetail {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: {
  normal: {
  use_before: ({
  name: string;
  url: string;
}[]) | null;
  use_after: ({
  name: string;
  url: string;
}[]) | null;
};
  super: {
  use_before: ({
  name: string;
  url: string;
}[]) | null;
  use_after: ({
  name: string;
  url: string;
}[]) | null;
};
};
  contest_type: ContestTypeSummary;
  contest_effect: ContestEffectSummary;
  damage_class: MoveDamageClassSummary;
  effect_entries: {
  effect: string;
  short_effect: string;
  language: {
  name: string;
  url: string;
};
}[];
  effect_changes: {
  effect_entries: {
  effect: string;
  language: {
  name: string;
  url: string;
};
}[];
  version_group: {
  name: string;
  url: string;
};
}[];
  generation: GenerationSummary;
  meta: MoveMeta;
  names: MoveName[];
  past_values: MoveChange[];
  stat_changes: {
  change: number;
  stat: {
  name: string;
  url: string;
};
}[];
  super_contest_effect: SuperContestEffectSummary;
  target: MoveTargetSummary;
  type: TypeSummary;
  machines: {
  machine: {
  url: string;
};
  version_group: {
  name: string;
  url: string;
};
}[];
  flavor_text_entries: MoveFlavorText[];
  learned_by_pokemon: {
  name: string;
  url: string;
}[];
}

export interface MoveLearnMethodDescription {
  description: string;
  language: LanguageSummary;
}

export interface MoveLearnMethodName {
  name: string;
  language: LanguageSummary;
}

export interface MoveLearnMethodDetail {
  id: number;
  name: string;
  names: MoveLearnMethodName[];
  descriptions: MoveLearnMethodDescription[];
  version_groups: {
  name: string;
  url: string;
}[];
}

export interface MoveLearnMethodSummary {
  name: string;
  url: string;
}

export interface MoveMetaAilmentName {
  name: string;
  language: LanguageSummary;
}

export interface MoveMetaAilmentDetail {
  id: number;
  name: string;
  moves: {
  name: string;
  url: string;
}[];
  names: MoveMetaAilmentName[];
}

export interface MoveMetaCategoryDescription {
  description: string;
  language: LanguageSummary;
}

export interface MoveMetaCategoryDetail {
  id: number;
  name: string;
  descriptions: MoveMetaCategoryDescription[];
  moves: {
  name: string;
  url: string;
}[];
}

export interface MoveTargetDescription {
  description: string;
  language: LanguageSummary;
}

export interface MoveTargetName {
  name: string;
  language: LanguageSummary;
}

export interface MoveTargetDetail {
  id: number;
  name: string;
  descriptions: MoveTargetDescription[];
  moves: MoveSummary[];
  names: MoveTargetName[];
}

export interface NatureBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: MoveBattleStyleSummary;
}

export interface NatureName {
  name: string;
  language: LanguageSummary;
}

export interface NatureDetail {
  id: number;
  name: string;
  decreased_stat: StatSummary;
  increased_stat: StatSummary;
  likes_flavor: BerryFlavorSummary;
  hates_flavor: BerryFlavorSummary;
  berries: BerrySummary[];
  pokeathlon_stat_changes: {
  max_change: number;
  pokeathlon_stat: {
  name: string;
  url: string;
};
}[];
  move_battle_style_preferences: NatureBattleStylePreference[];
  names: NatureName[];
}

export interface NatureSummary {
  name: string;
  url: string;
}

export interface PaginatedAbilitySummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: AbilitySummary[];
}

export interface PaginatedBerryFirmnessSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: BerryFirmnessSummary[];
}

export interface PaginatedBerryFlavorSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: BerryFlavorSummary[];
}

export interface PaginatedBerrySummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: BerrySummary[];
}

export interface PaginatedCharacteristicSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: CharacteristicSummary[];
}

export interface PaginatedContestEffectSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: ContestEffectSummary[];
}

export interface PaginatedContestTypeSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: ContestTypeSummary[];
}

export interface PaginatedEggGroupSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: EggGroupSummary[];
}

export interface PaginatedEncounterConditionSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: EncounterConditionSummary[];
}

export interface PaginatedEncounterConditionValueSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: EncounterConditionValueSummary[];
}

export interface PaginatedEncounterMethodSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: EncounterMethodSummary[];
}

export interface PaginatedEvolutionChainSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: EvolutionChainSummary[];
}

export interface PaginatedEvolutionTriggerSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: EvolutionTriggerSummary[];
}

export interface PaginatedGenderSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: GenderSummary[];
}

export interface PaginatedGenerationSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: GenerationSummary[];
}

export interface PaginatedGrowthRateSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: GrowthRateSummary[];
}

export interface PaginatedItemAttributeSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: ItemAttributeSummary[];
}

export interface PaginatedItemCategorySummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: ItemCategorySummary[];
}

export interface PaginatedItemFlingEffectSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: ItemFlingEffectSummary[];
}

export interface PaginatedItemPocketSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: ItemPocketSummary[];
}

export interface PaginatedItemSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: ItemSummary[];
}

export interface PaginatedLanguageSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: LanguageSummary[];
}

export interface PaginatedLocationAreaSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: LocationAreaSummary[];
}

export interface PaginatedLocationSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: LocationSummary[];
}

export interface PaginatedMachineSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: MachineSummary[];
}

export interface PaginatedMoveBattleStyleSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: MoveBattleStyleSummary[];
}

export interface PaginatedMoveDamageClassSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: MoveDamageClassSummary[];
}

export interface PaginatedMoveLearnMethodSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: MoveLearnMethodSummary[];
}

export interface PaginatedMoveMetaAilmentSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: MoveMetaAilmentSummary[];
}

export interface PaginatedMoveMetaCategorySummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: MoveMetaCategorySummary[];
}

export interface PaginatedMoveSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: MoveSummary[];
}

export interface PaginatedMoveTargetSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: MoveTargetSummary[];
}

export interface PaginatedNatureSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: NatureSummary[];
}

export interface PalParkAreaSummary {
  name: string;
  url: string;
}

export interface PaginatedPalParkAreaSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PalParkAreaSummary[];
}

export interface PokeathlonStatSummary {
  name: string;
  url: string;
}

export interface PaginatedPokeathlonStatSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PokeathlonStatSummary[];
}

export interface PokedexSummary {
  name: string;
  url: string;
}

export interface PaginatedPokedexSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PokedexSummary[];
}

export interface PokemonColorSummary {
  name: string;
  url: string;
}

export interface PaginatedPokemonColorSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PokemonColorSummary[];
}

export interface PokemonFormSummary {
  name: string;
  url: string;
}

export interface PaginatedPokemonFormSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PokemonFormSummary[];
}

export interface PokemonHabitatSummary {
  name: string;
  url: string;
}

export interface PaginatedPokemonHabitatSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PokemonHabitatSummary[];
}

export interface PokemonShapeSummary {
  name: string;
  url: string;
}

export interface PaginatedPokemonShapeSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PokemonShapeSummary[];
}

export interface PaginatedPokemonSpeciesSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PokemonSpeciesSummary[];
}

export interface PokemonSummary {
  name: string;
  url: string;
}

export interface PaginatedPokemonSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: PokemonSummary[];
}

export interface PaginatedRegionSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: RegionSummary[];
}

export interface PaginatedStatSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: StatSummary[];
}

export interface PaginatedSuperContestEffectSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: SuperContestEffectSummary[];
}

export interface PaginatedTypeSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: TypeSummary[];
}

export interface PaginatedVersionGroupSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: VersionGroupSummary[];
}

export interface VersionSummary {
  name: string;
  url: string;
}

export interface PaginatedVersionSummaryList {
  count: number;
  next: (string) | null;
  previous: (string) | null;
  results: VersionSummary[];
}

export interface PalParkAreaName {
  name: string;
  language: LanguageSummary;
}

export interface PalParkAreaDetail {
  id: number;
  name: string;
  names: PalParkAreaName[];
  pokemon_encounters: {
  base_score: number;
  "pokemon-species": {
  name: string;
  url: string;
};
  rate: number;
}[];
}

export interface PokeathlonStatName {
  name: string;
  language: LanguageSummary;
}

export interface PokeathlonStatDetail {
  id: number;
  name: string;
  affecting_natures: {
  decrease: {
  max_change: number;
  nature: {
  name: string;
  url: string;
};
}[];
  increase: {
  max_change: number;
  nature: {
  name: string;
  url: string;
};
}[];
};
  names: PokeathlonStatName[];
}

export interface PokedexDescription {
  description: string;
  language: LanguageSummary;
}

export interface PokedexName {
  name: string;
  language: LanguageSummary;
}

export interface PokedexDetail {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: PokedexDescription[];
  names: PokedexName[];
  pokemon_entries: {
  entry_number: number;
  pokemon_species: {
  name: string;
  url: string;
};
}[];
  region: RegionSummary;
  version_groups: {
  name: string;
  url: string;
}[];
}

export interface PokemonColorName {
  name: string;
  language: LanguageSummary;
}

export interface PokemonColorDetail {
  id: number;
  name: string;
  names: PokemonColorName[];
  pokemon_species: PokemonSpeciesSummary[];
}

export interface PokemonGameIndex {
  game_index: number;
  version: VersionSummary;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: StatSummary;
}

export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
  ability: {
  name: string;
  url: string;
};
  is_hidden: boolean;
  slot: number;
}[];
  past_abilities: {
  abilities: {
  ability: {
  name: string;
  url: string;
};
  is_hidden: boolean;
  slot: number;
}[];
  generation: {
  name: string;
  url: string;
};
}[];
  forms: PokemonFormSummary[];
  game_indices: PokemonGameIndex[];
  held_items: {
  item: {
  name: string;
  url: string;
};
  version_details: {
  rarity: number;
  version: {
  name: string;
  url: string;
};
}[];
}[];
  location_area_encounters: string;
  moves: {
  move: {
  name: string;
  url: string;
};
  version_group_details: {
  level_learned_at: number;
  move_learn_method: {
  name: string;
  url: string;
};
  version_group: {
  name: string;
  url: string;
};
}[];
}[];
  species: PokemonSpeciesSummary;
  sprites: {
  front_default: string;
  [key: string]: (string) | null;
};
  cries: {
  latest: string;
  legacy: string;
};
  stats: PokemonStat[];
  types: {
  slot: number;
  type: {
  name: string;
  url: string;
};
}[];
  past_types: {
  generation: {
  name: string;
  url: string;
};
  types: {
  slot: number;
  type: {
  name: string;
  url: string;
};
}[];
}[];
}

export interface PokemonDexEntry {
  entry_number: number;
  pokedex: PokedexSummary;
}

export interface PokemonFormDetail {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: PokemonSummary;
  sprites: {
  default: string;
  [key: string]: (string) | null;
};
  version_group: VersionGroupSummary;
  form_names: {
  language: {
  name: string;
  url: string;
};
  name: string;
}[];
  names: {
  language: {
  name: string;
  url: string;
};
  name: string;
}[];
  types: {
  slot: number;
  type: {
  name: string;
  url: string;
};
}[];
}

export interface PokemonHabitatName {
  name: string;
  language: LanguageSummary;
}

export interface PokemonHabitatDetail {
  id: number;
  name: string;
  names: PokemonHabitatName[];
  pokemon_species: PokemonSpeciesSummary[];
}

export interface PokemonShapeDetail {
  id: number;
  name: string;
  awesome_names: {
  awesome_name: string;
  language: {
  name: string;
  url: string;
};
}[];
  names: {
  url: string;
  name: string;
}[];
  pokemon_species: PokemonSpeciesSummary[];
}

export interface PokemonSpeciesDescription {
  description: string;
  language: LanguageSummary;
}

export interface PokemonSpeciesFlavorText {
  flavor_text: string;
  language: LanguageSummary;
  version: VersionSummary;
}

export interface PokemonSpeciesDetail {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: GrowthRateSummary;
  pokedex_numbers: PokemonDexEntry[];
  egg_groups: {
  name: string;
  url: string;
}[];
  color: PokemonColorSummary;
  shape: PokemonShapeSummary;
  evolves_from_species: PokemonSpeciesSummary;
  evolution_chain: EvolutionChainSummary;
  habitat: PokemonHabitatSummary;
  generation: GenerationSummary;
  names: {
  language: {
  name: string;
  url: string;
};
  name: string;
}[];
  pal_park_encounters: {
  area: {
  name: string;
  url: string;
};
  base_score: number;
  rate: number;
}[];
  form_descriptions: PokemonSpeciesDescription[];
  flavor_text_entries: PokemonSpeciesFlavorText[];
  genera: {
  genus: string;
  language: {
  name: string;
  url: string;
};
}[];
  varieties: {
  is_default: boolean;
  pokemon: {
  name: string;
  url: string;
};
}[];
}

export interface RegionName {
  name: string;
  language: LanguageSummary;
}

export interface RegionDetail {
  id: number;
  name: string;
  locations: LocationSummary[];
  main_generation: GenerationSummary;
  names: RegionName[];
  pokedexes: PokedexSummary[];
  version_groups: {
  name: string;
  url: string;
}[];
}

export interface StatName {
  name: string;
  language: LanguageSummary;
}

export interface StatDetail {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: {
  increase: {
  change: number;
  move: {
  name: string;
  url: string;
};
}[];
  decrease: {
  change: number;
  move: {
  name: string;
  url: string;
};
}[];
};
  affecting_natures: {
  increase: {
  name: string;
  url: string;
}[];
  decrease: {
  name: string;
  url: string;
}[];
};
  characteristics: CharacteristicSummary[];
  move_damage_class: MoveDamageClassSummary;
  names: StatName[];
}

export interface SuperContestEffectFlavorText {
  flavor_text: string;
  language: LanguageSummary;
}

export interface SuperContestEffectDetail {
  id: number;
  appeal: number;
  flavor_text_entries: SuperContestEffectFlavorText[];
  moves: MoveSummary[];
}

export interface TypeGameIndex {
  game_index: number;
  generation: GenerationSummary;
}

export interface TypeDetail {
  id: number;
  name: string;
  damage_relations: {
  no_damage_to: {
  name: string;
  url: string;
}[];
  half_damage_to: {
  name: string;
  url: string;
}[];
  double_damage_to: {
  name: string;
  url: string;
}[];
  no_damage_from: {
  name: string;
  url: string;
}[];
  half_damage_from: {
  name: string;
  url: string;
}[];
  double_damage_from: {
  name: string;
  url: string;
}[];
};
  past_damage_relations: {
  generation: {
  name: string;
  url: string;
};
  damage_relations: {
  no_damage_to: {
  name: string;
  url: string;
}[];
  half_damage_to: {
  name: string;
  url: string;
}[];
  double_damage_to: {
  name: string;
  url: string;
}[];
  no_damage_from: {
  name: string;
  url: string;
}[];
  half_damage_from: {
  name: string;
  url: string;
}[];
  double_damage_from: {
  name: string;
  url: string;
}[];
};
}[];
  game_indices: TypeGameIndex[];
  generation: GenerationSummary;
  move_damage_class: MoveDamageClassSummary;
  names: AbilityName[];
  pokemon: {
  slot: number;
  pokemon: {
  name: string;
  url: string;
};
}[];
  moves: MoveSummary[];
  sprites: Record<string, Record<string, {
  "name-icon": string;
}>>;
}

export interface VersionName {
  name: string;
  language: LanguageSummary;
}

export interface VersionDetail {
  id: number;
  name: string;
  names: VersionName[];
  version_group: VersionGroupSummary;
}

export interface VersionGroupDetail {
  id: number;
  name: string;
  order: number;
  generation: GenerationSummary;
  move_learn_methods: {
  name: string;
  url: string;
}[];
  pokedexes: {
  name: string;
  url: string;
}[];
  regions: {
  name: string;
  url: string;
}[];
  versions: VersionSummary[];
}

export type api_v2_ability_list_limit_param = number;

export type api_v2_ability_list_offset_param = number;

export type api_v2_ability_list_q_param = string;

export type api_v2_ability_retrieve_id_param = string;

export type api_v2_berry_list_limit_param = number;

export type api_v2_berry_list_offset_param = number;

export type api_v2_berry_list_q_param = string;

export type api_v2_berry_retrieve_id_param = string;

export type api_v2_berry_firmness_list_limit_param = number;

export type api_v2_berry_firmness_list_offset_param = number;

export type api_v2_berry_firmness_list_q_param = string;

export type api_v2_berry_firmness_retrieve_id_param = string;

export type api_v2_berry_flavor_list_limit_param = number;

export type api_v2_berry_flavor_list_offset_param = number;

export type api_v2_berry_flavor_list_q_param = string;

export type api_v2_berry_flavor_retrieve_id_param = string;

export type api_v2_characteristic_list_limit_param = number;

export type api_v2_characteristic_list_offset_param = number;

export type api_v2_characteristic_list_q_param = string;

export type api_v2_characteristic_retrieve_id_param = string;

export type api_v2_contest_type_list_limit_param = number;

export type api_v2_contest_type_list_offset_param = number;

export type api_v2_contest_type_list_q_param = string;

export type api_v2_contest_type_retrieve_id_param = string;

export type api_v2_contest_effect_list_limit_param = number;

export type api_v2_contest_effect_list_offset_param = number;

export type api_v2_contest_effect_list_q_param = string;

export type api_v2_contest_effect_retrieve_id_param = string;

export type api_v2_egg_group_list_limit_param = number;

export type api_v2_egg_group_list_offset_param = number;

export type api_v2_egg_group_list_q_param = string;

export type api_v2_egg_group_retrieve_id_param = string;

export type api_v2_encounter_method_list_limit_param = number;

export type api_v2_encounter_method_list_offset_param = number;

export type api_v2_encounter_method_list_q_param = string;

export type api_v2_encounter_method_retrieve_id_param = string;

export type api_v2_encounter_condition_list_limit_param = number;

export type api_v2_encounter_condition_list_offset_param = number;

export type api_v2_encounter_condition_list_q_param = string;

export type api_v2_encounter_condition_retrieve_id_param = string;

export type api_v2_encounter_condition_value_list_limit_param = number;

export type api_v2_encounter_condition_value_list_offset_param = number;

export type api_v2_encounter_condition_value_list_q_param = string;

export type api_v2_encounter_condition_value_retrieve_id_param = string;

export type api_v2_evolution_chain_list_limit_param = number;

export type api_v2_evolution_chain_list_offset_param = number;

export type api_v2_evolution_chain_list_q_param = string;

export type api_v2_evolution_chain_retrieve_id_param = string;

export type api_v2_evolution_trigger_list_limit_param = number;

export type api_v2_evolution_trigger_list_offset_param = number;

export type api_v2_evolution_trigger_list_q_param = string;

export type api_v2_evolution_trigger_retrieve_id_param = string;

export type api_v2_generation_list_limit_param = number;

export type api_v2_generation_list_offset_param = number;

export type api_v2_generation_list_q_param = string;

export type api_v2_generation_retrieve_id_param = string;

export type api_v2_gender_list_limit_param = number;

export type api_v2_gender_list_offset_param = number;

export type api_v2_gender_list_q_param = string;

export type api_v2_gender_retrieve_id_param = string;

export type api_v2_growth_rate_list_limit_param = number;

export type api_v2_growth_rate_list_offset_param = number;

export type api_v2_growth_rate_list_q_param = string;

export type api_v2_growth_rate_retrieve_id_param = string;

export type api_v2_item_list_limit_param = number;

export type api_v2_item_list_offset_param = number;

export type api_v2_item_list_q_param = string;

export type api_v2_item_retrieve_id_param = string;

export type api_v2_item_category_list_limit_param = number;

export type api_v2_item_category_list_offset_param = number;

export type api_v2_item_category_list_q_param = string;

export type api_v2_item_category_retrieve_id_param = string;

export type api_v2_item_attribute_list_limit_param = number;

export type api_v2_item_attribute_list_offset_param = number;

export type api_v2_item_attribute_list_q_param = string;

export type api_v2_item_attribute_retrieve_id_param = string;

export type api_v2_item_fling_effect_list_limit_param = number;

export type api_v2_item_fling_effect_list_offset_param = number;

export type api_v2_item_fling_effect_list_q_param = string;

export type api_v2_item_fling_effect_retrieve_id_param = string;

export type api_v2_item_pocket_list_limit_param = number;

export type api_v2_item_pocket_list_offset_param = number;

export type api_v2_item_pocket_list_q_param = string;

export type api_v2_item_pocket_retrieve_id_param = string;

export type api_v2_language_list_limit_param = number;

export type api_v2_language_list_offset_param = number;

export type api_v2_language_list_q_param = string;

export type api_v2_language_retrieve_id_param = string;

export type api_v2_location_list_limit_param = number;

export type api_v2_location_list_offset_param = number;

export type api_v2_location_list_q_param = string;

export type api_v2_location_retrieve_id_param = string;

export type api_v2_location_area_list_limit_param = number;

export type api_v2_location_area_list_offset_param = number;

export type api_v2_location_area_retrieve_id_param = number;

export type api_v2_machine_list_limit_param = number;

export type api_v2_machine_list_offset_param = number;

export type api_v2_machine_list_q_param = string;

export type api_v2_machine_retrieve_id_param = string;

export type api_v2_move_list_limit_param = number;

export type api_v2_move_list_offset_param = number;

export type api_v2_move_list_q_param = string;

export type api_v2_move_retrieve_id_param = string;

export type api_v2_move_ailment_list_limit_param = number;

export type api_v2_move_ailment_list_offset_param = number;

export type api_v2_move_ailment_list_q_param = string;

export type api_v2_move_ailment_retrieve_id_param = string;

export type api_v2_move_battle_style_list_limit_param = number;

export type api_v2_move_battle_style_list_offset_param = number;

export type api_v2_move_battle_style_list_q_param = string;

export type api_v2_move_battle_style_retrieve_id_param = string;

export type api_v2_move_category_list_limit_param = number;

export type api_v2_move_category_list_offset_param = number;

export type api_v2_move_category_list_q_param = string;

export type api_v2_move_category_retrieve_id_param = string;

export type api_v2_move_damage_class_list_limit_param = number;

export type api_v2_move_damage_class_list_offset_param = number;

export type api_v2_move_damage_class_list_q_param = string;

export type api_v2_move_damage_class_retrieve_id_param = string;

export type api_v2_move_learn_method_list_limit_param = number;

export type api_v2_move_learn_method_list_offset_param = number;

export type api_v2_move_learn_method_list_q_param = string;

export type api_v2_move_learn_method_retrieve_id_param = string;

export type api_v2_move_target_list_limit_param = number;

export type api_v2_move_target_list_offset_param = number;

export type api_v2_move_target_list_q_param = string;

export type api_v2_move_target_retrieve_id_param = string;

export type api_v2_nature_list_limit_param = number;

export type api_v2_nature_list_offset_param = number;

export type api_v2_nature_list_q_param = string;

export type api_v2_nature_retrieve_id_param = string;

export type api_v2_pal_park_area_list_limit_param = number;

export type api_v2_pal_park_area_list_offset_param = number;

export type api_v2_pal_park_area_list_q_param = string;

export type api_v2_pal_park_area_retrieve_id_param = string;

export type api_v2_pokedex_list_limit_param = number;

export type api_v2_pokedex_list_offset_param = number;

export type api_v2_pokedex_list_q_param = string;

export type api_v2_pokedex_retrieve_id_param = string;

export type api_v2_pokemon_list_limit_param = number;

export type api_v2_pokemon_list_offset_param = number;

export type api_v2_pokemon_list_q_param = string;

export type api_v2_pokemon_retrieve_id_param = string;

export type api_v2_pokemon_color_list_limit_param = number;

export type api_v2_pokemon_color_list_offset_param = number;

export type api_v2_pokemon_color_list_q_param = string;

export type api_v2_pokemon_color_retrieve_id_param = string;

export type api_v2_pokemon_form_list_limit_param = number;

export type api_v2_pokemon_form_list_offset_param = number;

export type api_v2_pokemon_form_list_q_param = string;

export type api_v2_pokemon_form_retrieve_id_param = string;

export type api_v2_pokemon_habitat_list_limit_param = number;

export type api_v2_pokemon_habitat_list_offset_param = number;

export type api_v2_pokemon_habitat_list_q_param = string;

export type api_v2_pokemon_habitat_retrieve_id_param = string;

export type api_v2_pokemon_shape_list_limit_param = number;

export type api_v2_pokemon_shape_list_offset_param = number;

export type api_v2_pokemon_shape_list_q_param = string;

export type api_v2_pokemon_shape_retrieve_id_param = string;

export type api_v2_pokemon_species_list_limit_param = number;

export type api_v2_pokemon_species_list_offset_param = number;

export type api_v2_pokemon_species_list_q_param = string;

export type api_v2_pokemon_species_retrieve_id_param = string;

export type api_v2_pokeathlon_stat_list_limit_param = number;

export type api_v2_pokeathlon_stat_list_offset_param = number;

export type api_v2_pokeathlon_stat_list_q_param = string;

export type api_v2_pokeathlon_stat_retrieve_id_param = string;

export type api_v2_region_list_limit_param = number;

export type api_v2_region_list_offset_param = number;

export type api_v2_region_list_q_param = string;

export type api_v2_region_retrieve_id_param = string;

export type api_v2_stat_list_limit_param = number;

export type api_v2_stat_list_offset_param = number;

export type api_v2_stat_list_q_param = string;

export type api_v2_stat_retrieve_id_param = string;

export type api_v2_super_contest_effect_list_limit_param = number;

export type api_v2_super_contest_effect_list_offset_param = number;

export type api_v2_super_contest_effect_list_q_param = string;

export type api_v2_super_contest_effect_retrieve_id_param = string;

export type api_v2_type_list_limit_param = number;

export type api_v2_type_list_offset_param = number;

export type api_v2_type_list_q_param = string;

export type api_v2_type_retrieve_id_param = string;

export type api_v2_version_list_limit_param = number;

export type api_v2_version_list_offset_param = number;

export type api_v2_version_list_q_param = string;

export type api_v2_version_retrieve_id_param = string;

export type api_v2_version_group_list_limit_param = number;

export type api_v2_version_group_list_offset_param = number;

export type api_v2_version_group_list_q_param = string;

export type api_v2_version_group_retrieve_id_param = string;

export type api_v2_pokemon_encounters_retrieve_pokemon_id_param = string;

export type ApiV2PokemonEncountersRetrieveResponse = {
  location_area: {
  name: string;
  url: string;
};
  version_details: {
  encounter_details: {
  chance: number;
  condition_values: {
  name: string;
  url: string;
}[];
  max_level: number;
  method: {
  name: string;
  url: string;
};
  min_level: number;
}[];
  max_chance: number;
  version: {
  name: string;
  url: string;
};
}[];
}[];
