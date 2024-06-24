# Changelog

## v-0.0.7

- Moved to ESLint version 9, which simplified a lot!
  - As a consequence, all styling information is gone, replaced by Prettier.
  - Also no dependency or usage of Babel anymore.
- Currently using `eslint:recommended` to see whether that's a good thing.
- Added "backups" to `ignores`. Most Speeding Planet classes use a file management system that creates a "backups" folder. No need to lint it.
