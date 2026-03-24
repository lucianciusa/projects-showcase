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

- La Cuchara (production): https://la-cuchara.vercel.app

## Current State (La Cuchara)

Implemented and documented in the project folder:

- Bilingual UI (`EN`/`ES`) with runtime language switch.
- Language-aware architecture flowchart image.
- Responsive top navigation with compact mobile menu.
- Scroll-driven reveal animations for sections and card boxes.
- Team member photos loaded from `public/assets/team`.
- Consistent border system and hover styling across cards.

See project details in `projects/la-cuchara/README.md`.

## How To Add A New Project Preview

1. Create a new folder: `projects/<project-slug>/`.
2. Copy `templates/project-README-template.md` into `projects/<project-slug>/README.md`.
3. Document architecture, stack, run/deploy, and current status.
4. Add project media under that project (`public/assets/...`) or shared root `assets/` if truly cross-project.
5. Add a new row to the Project Index table in this file.

## Documentation Rules

- Keep each project README up to date with implemented features.
- Keep run instructions copy-paste ready.
- Include deployment notes per project.
- Keep root README focused on repository-level navigation and index.

## GitHub Push

```bash
git add .
git commit -m "Update showcase docs"
git push
```
