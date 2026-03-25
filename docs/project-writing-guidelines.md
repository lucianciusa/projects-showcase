# Project Writing Guidelines

Use these principles to make each project documentation recruiter-friendly and technically strong.

## Keep It Concrete

- Show measurable outcomes (latency, accuracy, throughput, adoption).
- Name exact technologies and versions when relevant.

## Explain Decisions

- Document why you chose a given architecture/model/tool.
- Mention alternatives considered and trade-offs.

## Show Engineering Quality

- Include folder structure and module responsibilities.
- Include testing/validation strategy.
- Include deployment/run steps.

## Tell The Story

- Problem -> Approach -> Results -> Lessons Learned.
- Keep each section short and clear.

## Visuals

- Add at least one architecture diagram.
- Add 2-4 screenshots for UI/data outputs when relevant.

## Multi-Project Repository Workflow

Use this checklist when adding or updating projects in this showcase repository.

### Add A New Project Preview

1. Create a new folder: `projects/<project-slug>/`.
2. Copy `templates/project-README-template.md` to `projects/<project-slug>/README.md`.
3. Document:
- Overview, stack, architecture, run instructions, deployment status.
- Links to live demo and source repository (if available).
4. Place media in either:
- `projects/<project-slug>/public/assets/...` for project-specific media.
- Root `assets/` only for truly shared media.
5. Update root `README.md` project index with name, type, stack, status, and path.

### Root README Scope

Keep root `README.md` primarily viewer-facing:

- Repository purpose.
- Project index.
- Live deployment links.
- High-level current state.

Move maintainer/process details into `docs/` files.

### Project README Minimum Standard

Each `projects/<project-slug>/README.md` should include:

- What the project is and why it exists.
- Current implemented features.
- Tech stack.
- Folder structure (high level).
- Local run steps.
- Deployment notes and live URL.
- Team/contributor attribution (accurate names).

### Update And Push Routine

```bash
git add .
git commit -m "docs: update project and repository readmes"
git push
```
