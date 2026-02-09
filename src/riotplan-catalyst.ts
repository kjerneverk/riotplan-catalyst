/**
 * @packageDocumentation
 * Catalyst system for RiotPlan - composable, layerable guidance packages for plan creation
 */

// Type exports
export type { 
  Catalyst, 
  CatalystManifest, 
  CatalystFacets, 
  FacetContent,
  CatalystLoadResult,
  CatalystLoadOptions,
  FacetDirectoryMap,
  PlanManifest,
} from './types';

// Schema exports
export { 
  CatalystManifestSchema, 
  PlanManifestSchema,
  FacetsDeclarationSchema,
  FACET_DIRECTORIES,
  FACET_TYPES,
} from '@/schema/schemas';

export type {
  FacetType,
  CatalystManifestInput,
  CatalystManifestOutput,
  PlanManifestInput,
  PlanManifestOutput,
  FacetsDeclaration,
} from '@/schema/schemas';

// Loader exports
export { 
  loadCatalyst, 
  loadCatalystSafe,
  resolveCatalysts,
} from '@/loader/catalyst-loader';

// Merger exports
export { 
  mergeCatalysts, 
  renderFacet,
  renderAllFacets,
  summarizeMerge,
} from '@/merger/facet-merger';
export type { MergedCatalyst, AttributedContent, MergedFacets } from '@/merger/facet-merger';

// Plan manifest exports
export { 
  readPlanManifest, 
  writePlanManifest, 
  updatePlanManifest,
  addCatalystToManifest,
  removeCatalystFromManifest,
} from '@/loader/plan-manifest';
