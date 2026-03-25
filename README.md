# Projects Showcase Repository

Monorepo-style portfolio for multiple project previews. Each project has its own runnable codebase and project-specific README.

## Repository Layout

- `projects/`: independent project previews/apps.
- `templates/`: templates for creating new project documentation.
- `assets/`: shared, repository-level media.
- `docs/`: shared documentation standards and writing guidelines.

## Project Index

| Project | Type | Stack | Status | Path |
|---|---|---|---|---|
| La Cuchara | Interactive project showcase website | Next.js, React, Tailwind CSS | Live | `projects/la-cuchara` |

## Live Deployments

- La Cuchara (production): https://cuisineaml-preview.vercel.app/

## Current State (La Cuchara)

Implemented and documented in the project folder:

- Bilingual UI (`EN`/`ES`) with runtime language switch.
- Language-aware architecture flowchart image.
- Responsive top navigation with compact mobile menu.
- Scroll-driven reveal animations for sections and card boxes.
- Team member photos loaded from `public/assets/team`.
- Consistent border system and hover styling across cards.

See project details in `projects/la-cuchara/README.md`.

## Maintainer Docs

For contributor workflows (how to add projects, documentation standards, and update routine), see `docs/project-writing-guidelines.md`.
