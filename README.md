# ESLint Configuration for Speeding Planet courses

This is the default ESLint configuration for courses delivered or provided by Speeding Planet.

## Rationales

### JSON files

JSON files can be used by ECMAScript Module (ESM) or CommonJS based projects.

### ESLint configuration

Start with [Standard JS](https://standardjs.com/) (or the TypeScript [equivalent](https://github.com/standard/eslint-config-standard-with-typescript)). Change most formatting rules to warnings to be a bit more student-friendly. Choose tabs over spaces for accessibility reasons.

### Babel configuration

Removed. There were unpatched security risks, and I wasn't using Babel.
