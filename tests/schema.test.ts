import { describe, it, expect } from 'vitest';
import { CatalystManifestSchema, PlanManifestSchema } from '@/schema/schemas';

describe('Catalyst Schemas', () => {
  it('validates a valid catalyst manifest', () => {
    const manifest = {
      id: '@kjerneverk/catalyst-nodejs',
      name: 'Node.js Catalyst',
      description: 'Guidelines for Node.js development',
      version: '1.0.0',
    };
    
    const result = CatalystManifestSchema.safeParse(manifest);
    expect(result.success).toBe(true);
  });

  it('validates a valid plan manifest', () => {
    const plan = {
      id: 'my-plan',
      title: 'My Plan',
      catalysts: ['@kjerneverk/catalyst-nodejs'],
    };
    
    const result = PlanManifestSchema.safeParse(plan);
    expect(result.success).toBe(true);
  });

  it('rejects invalid catalyst manifest', () => {
    const manifest = {
      id: '@kjerneverk/catalyst-nodejs',
      // missing required fields
    };
    
    const result = CatalystManifestSchema.safeParse(manifest);
    expect(result.success).toBe(false);
  });
});
