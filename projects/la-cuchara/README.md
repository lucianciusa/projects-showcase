# La Cuchara - AZCA Showcase Website

Interactive, bilingual project showcase for the La Cuchara / AZCA platform (AI restaurant discovery and demand forecasting).

## 1. Overview

- Goal: present the product story, architecture, feature set, and technical stack in a polished, recruiter-friendly web experience.
- Scope: this repository folder contains the showcase website only.
- Main product repository: https://github.com/adnanhamidoun/lacuchara
- Production URL: https://la-cuchara.vercel.app

## 2. Current Features

- Bilingual UI with runtime toggle: English and Spanish.
- Language-aware flowchart in architecture section:
	- English image when `EN` is selected.
	- Spanish image when `ES` is selected.
- Fully responsive navigation with compact mobile menu.
- Scroll-based reveal animations:
	- Section-level transitions.
	- Per-card/per-box staggered transitions.
- Team section with real contributor photos from `public/assets/team`.
- Consistent card border and hover styling system.

## 3. Tech Stack

- Framework: Next.js 14 (Pages Router)
- Language: TypeScript + React 18
- Styling: Tailwind CSS + custom global CSS
- Deployment: Vercel

## 4. Project Structure

```
projects/la-cuchara/
	components/
		layout/
			HeaderBar.tsx
			ProjectFooter.tsx
		sections/
			HeroSection.tsx
			ProblemSection.tsx
			SolutionSection.tsx
			FeaturesSection.tsx
			ArchitectureSection.tsx
			TechStackSection.tsx
			ScreenshotsSection.tsx
			TeamSection.tsx
	context/
		LanguageContext.tsx
	lib/
		translations.ts
	pages/
		index.tsx
		_app.tsx
		_document.tsx
	public/
		assets/
			diagrams/
			screenshots/
			team/
	styles/
		globals.css
```

## 5. Local Development

Prerequisites:

- Node.js 18+
- npm

Commands:

```bash
npm install
npm run dev
```

Local URL:

- http://localhost:3000

Production build check:

```bash
npm run build
npm start
```

## 6. Deployment (Vercel)

This app is already deployed to production:

- https://la-cuchara.vercel.app

To redeploy manually from this folder:

```bash
npm exec --yes vercel -- --prod --yes
```

Recommended dashboard setup:

1. Import repository in Vercel.
2. Set Root Directory to `projects/la-cuchara`.
3. Keep Framework preset as Next.js.
4. Enable automatic production deploys from your main branch.

## 7. Team

- Adnan Hamidoun
- Lucian Ciusa
- Mario Garcia Romero

## 8. Notes

- This project folder is one preview inside a multi-project showcase repository.
- Repository-level index and documentation are in the root `README.md`.
