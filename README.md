# ESLint Configuration for Speeding Planet courses

This is the default ESLint configuration for courses delivered or provided by Speeding Planet.

## Rationales

### JSON files

JSON files can be used by ECMAScript Module (ESM) or CommonJS based projects. 

### ESLint configuration

Start with [Standard JS](https://standardjs.com/) (or the TypeScript [equivalent](https://github.com/standard/eslint-config-standard-with-typescript)). Change most formatting rules to warnings to be a bit more student-friendly. Choose tabs over spaces for accessibility reasons.

### Babel configuration

Per Babel's config [overview](https://babeljs.io/docs/usage#overview) as well as details on the `[targets](https://babeljs.io/docs/options#targets)` config, specifying this target configuration here prevents the possibility that Babel would default to ES5 level output. 

Since, in theory, there should not be Babel transformations happening, I'm skipping an install of core-js at the moment. 
