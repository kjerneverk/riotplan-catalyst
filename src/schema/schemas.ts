/**
 * Zod schemas for catalyst.yml and plan.yaml manifests
 */

import { z } from 'zod';

export const CatalystManifestSchema = z.object({
  id: z.string().describe('Catalyst identifier (e.g., @kjerneverk/catalyst-nodejs)'),
  name: z.string().describe('Human-readable name'),
  description: z.string().describe('What this catalyst provides'),
  version: z.string().describe('Semver version'),
  facets: z.object({
    questions: z.boolean().optional(),
    constraints: z.boolean().optional(),
    outputTemplates: z.boolean().optional(),
    domainKnowledge: z.boolean().optional(),
    processGuidance: z.boolean().optional(),
    validationRules: z.boolean().optional(),
  }).optional(),
});

export const PlanManifestSchema = z.object({
  id: z.string().describe('Plan identifier'),
  title: z.string().describe('Human-readable title'),
  catalysts: z.array(z.string()).optional().describe('Ordered list of catalyst IDs'),
  created: z.string().optional().describe('ISO timestamp'),
  metadata: z.record(z.string()).optional().describe('Extensible metadata'),
});
