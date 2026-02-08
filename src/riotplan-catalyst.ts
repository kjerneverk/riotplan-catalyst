/**
 * @packageDocumentation
 * Catalyst system for RiotPlan - composable, layerable guidance packages for plan creation
 */

export type { Catalyst, CatalystManifest, CatalystFacets, FacetContent } from './types';
export { CatalystManifestSchema, PlanManifestSchema } from '@/schema/schemas';
export { loadCatalyst } from '@/loader/catalyst-loader';
export { mergeCatalysts, renderFacet } from '@/merger/facet-merger';
export type { MergedCatalyst } from '@/merger/facet-merger';
export { readPlanManifest, writePlanManifest, updatePlanManifest } from '@/loader/plan-manifest';
export type { PlanManifest } from '@/loader/plan-manifest';
