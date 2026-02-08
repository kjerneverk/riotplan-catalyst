/**
 * TypeScript interfaces for the catalyst system
 */

export interface FacetContent {
  filename: string;
  content: string;
}

export interface CatalystFacets {
  questions?: FacetContent[];
  constraints?: FacetContent[];
  outputTemplates?: FacetContent[];
  domainKnowledge?: FacetContent[];
  processGuidance?: FacetContent[];
  validationRules?: FacetContent[];
}

export interface CatalystManifest {
  id: string;
  name: string;
  description: string;
  version: string;
  facets?: {
    questions?: boolean;
    constraints?: boolean;
    outputTemplates?: boolean;
    domainKnowledge?: boolean;
    processGuidance?: boolean;
    validationRules?: boolean;
  };
}

export interface Catalyst {
  manifest: CatalystManifest;
  facets: CatalystFacets;
  directoryPath: string;
}
