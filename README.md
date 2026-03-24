# Lucian Project Showcase

Technical portfolio repository for AI, Data, and Azure projects.

## Structure

- `projects/`: one folder per project
- `templates/`: reusable templates for new project documentation
- `assets/`: screenshots, diagrams, gifs
- `docs/`: shared architecture and methodology notes

## Project Index

| Project | Focus | Stack | Status | Repo Folder |
|---|---|---|---|---|
| La Cuchara | AI Product | Python, Azure, APIs | In Progress | `projects/la-cuchara` |

## How To Add A New Project

1. Copy `templates/project-README-template.md` into `projects/<project-slug>/README.md`.
2. Fill every section with concrete technical details.
3. Add screenshots/diagrams to `assets/<project-slug>/`.
4. Update the Project Index table above.

## Recommended Quality Checklist

- Problem and business context are explicit.
- Architecture diagram included.
- Data flow and model/evaluation details documented.
- Reproducible run steps are provided.
- Key lessons learned and next steps are captured.

## Publish To GitHub

```bash
git init
git add .
git commit -m "Initial showcase repository scaffold"
git branch -M main
git remote add origin <YOUR_NEW_REPO_URL>
git push -u origin main
```
