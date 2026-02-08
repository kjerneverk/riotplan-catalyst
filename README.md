# @kjerneverk/riotplan-catalyst

Catalyst system for RiotPlan - composable, layerable guidance packages that shape the entire planning process.

## What is a Catalyst?

A catalyst is a collection of resources that affects the questions asked and the process used to come up with a plan. It provides guidance through six facets:

- **Questions** - Things to consider during exploration
- **Constraints** - Rules the plan must satisfy
- **Output Templates** - Expected deliverables
- **Domain Knowledge** - Context about the domain
- **Process Guidance** - How to approach the planning process
- **Validation Rules** - Post-creation checks

## Installation

```bash
npm install @kjerneverk/riotplan-catalyst
```

## Usage

See [API Documentation](./docs/api.md) for detailed usage.

```typescript
import { loadCatalyst, mergeCatalysts } from '@kjerneverk/riotplan-catalyst';

// Load a catalyst from a directory
const catalyst = await loadCatalyst('./my-catalyst');

// Load and merge multiple catalysts
const catalysts = [
  await loadCatalyst('./catalyst-1'),
  await loadCatalyst('./catalyst-2'),
];
const merged = mergeCatalysts(catalysts);
```

## Catalyst Directory Structure

```
my-catalyst/
  catalyst.yml              # Manifest
  questions/
    exploration.md          # Questions for idea phase
  constraints/
    testing.md              # Testing requirements
  output-templates/
    press-release.md        # Press release template
  domain-knowledge/
    overview.md             # Domain context
  process-guidance/
    lifecycle.md            # Process guidance
  validation-rules/
    checklist.md            # Validation checklist
```

## License

Apache-2.0
