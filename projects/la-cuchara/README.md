# AZCA - AI Restaurant Demand Forecasting Platform (Showcase Website)

This is the **showcase website** for AZCA, deployed on Vercel. The main project repository is at [github.com/adnanhamidoun/lacuchara](https://github.com/adnanhamidoun/lacuchara).

## Overview

**AZCA** (AI Restaurant Demand Forecasting Platform) solves the dining bottleneck in Madrid's Azca zone:
- **Problem**: 27,000 employees must eat during the same 2-hour window with only ~70 restaurants available
- **Solution**: A two-phase platform combining intelligent restaurant discovery with AI demand forecasting
- **Target Users**: Employees seeking diverse dining options + Restaurants optimizing operations
- **Status**: Production-ready code (requires Azure deployment)

## Project Structure (Showcase Website)

```
├── pages/               # Next.js pages
│   ├── index.tsx       # Main showcase page
│   ├── _app.tsx        # App wrapper
│   └── _document.tsx   # HTML document wrapper
├── components/         # React components
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Hero section
│   ├── Problem.tsx     # Problem statement
│   ├── Solution.tsx    # Solution overview
│   ├── Features.tsx    # Key features
│   ├── Architecture.tsx# System architecture
│   ├── TechStack.tsx   # Technology stack
│   ├── Screenshots.tsx # App screenshots
│   ├── Team.tsx        # Team info
│   └── Footer.tsx      # Footer
├── styles/             # Tailwind CSS & globals
└── public/            # Static assets
```

## Tech Stack (Showcase)

- **Framework**: Next.js 14 + React 18
- **Styling**: Tailwind CSS 3 + Custom CSS
- **hosting**: Vercel (optimized)
- **Fonts**: Poppins (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Deployment on Vercel

This project is optimized for Vercel:

```bash
# Via CLI
vercel --prod

# Or push to GitHub and auto-deploy via Vercel Dashboard
```

## Design System

- **Primary**: Dark Navy `#1a1f2e`
- **Accent**: Warm Orange `#E8754F`
- **Font**: Poppins
- **Approach**: Mobile-first responsive design

## AZCA Full Project Details

### Problem Statement

27,000 employees in Madrid's Azca zone must eat lunch between 14:00-16:00. With only ~70 restaurants available:
- Severe queue bottlenecks occur
- Employees stuck in repetitive dining patterns
- Limited menu discovery (restaurants print daily menus on paper)
- Restaurants can't optimize staffing/inventory without demand visibility

### Solution Phases

**Phase 1: Smart Discovery**
- Restaurants upload daily menu photos
- AI extracts and classifies dishes
- Employees filter by location, cuisine, price, ratings
- Community-driven ratings system

**Phase 2: Demand Forecasting**
- XGBoost ML model predicts daily service volumes
- Features: Restaurant data, weather, calendar, historical trends
- Actionable insights for restaurant optimization

### Tech Stack (Full Project)

**Frontend**: React + Vite + Tailwind CSS  
**Backend**: FastAPI + SQLAlchemy + Python 3.10  
**Database**: Azure SQL Server  
**ML**: XGBoost + Azure AutoML + 30+ engineered features  
**APIs**: Open-Meteo (weather), Document Intelligence  
**Infrastructure**: Azure SQL, Logic Apps, Functions  

## Key Features

✅ Photo-based menu uploads with AI extraction  
✅ Smart search & filtering (cuisine, price, location, ratings)  
✅ Community dish ratings & rankings  
✅ ML-powered demand predictions  
✅ Weather integration for accuracy  
✅ Calendar-aware forecasting (holidays, payroll periods)  
✅ Production-ready error handling & audit logs  
✅ Mobile-responsive UI  

## Links

- **Full AZCA Repository**: [github.com/adnanhamidoun/lacuchara](https://github.com/adnanhamidoun/lacuchara)
- **View on Vercel**: (deployed URL will go here)
- **Documentation**: See `/docs` in main repository

## Team

- Adnan Hamidoun (Lead Developer)
- Lucian (Full Stack)
- Mariioogrciia (Developer)
- AzCA Team Contributors

## License

This showcase website is part of the AZCA project.

---

**Made with ❤️ in Madrid** | Solving real-world problems with AI and cloud technology
