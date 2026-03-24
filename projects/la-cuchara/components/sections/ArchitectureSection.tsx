import React from 'react'

function ArchitectureIcon({ kind }: { kind: 'frontend' | 'backend' | 'ml' | 'db' | 'weather' | 'calendar' | 'history' }) {
  const cls = 'w-6 h-6 text-orange-accent'
  if (kind === 'frontend') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8" />
      </svg>
    )
  }
  if (kind === 'backend') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    )
  }
  if (kind === 'ml') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <circle cx="6" cy="12" r="2" />
        <circle cx="12" cy="6" r="2" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M8 12h8M12 8v8M8 10l2.5-2.5M16 10l-2.5-2.5M8 14l2.5 2.5M16 14l-2.5 2.5" />
      </svg>
    )
  }
  if (kind === 'db') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <ellipse cx="12" cy="5" rx="7" ry="2.5" />
        <path d="M5 5v8c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
      </svg>
    )
  }
  if (kind === 'weather') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <path d="M6 16a4 4 0 1 1 .6-7.95A5 5 0 0 1 16 9a3.5 3.5 0 1 1 .5 7H6z" />
      </svg>
    )
  }
  if (kind === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 3 2 4-5" />
    </svg>
  )
}

export default function Architecture() {
  return (
    <section className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            System <span className="text-orange-accent">Architecture</span>
          </h2>
          <p className="text-text-secondary text-lg">Production-ready infrastructure built on Azure</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Frontend */}
          <div className="glass p-8 rounded-xl border border-orange-accent/30">
            <div className="mb-4"><ArchitectureIcon kind="frontend" /></div>
            <h3 className="text-xl font-bold mb-4 text-orange-accent">Frontend</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>✓ React + Vite</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ Mobile-responsive</li>
              <li>✓ Real-time updates</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="glass p-8 rounded-xl border border-orange-accent/30">
            <div className="mb-4"><ArchitectureIcon kind="backend" /></div>
            <h3 className="text-xl font-bold mb-4 text-orange-accent">Backend</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>✓ FastAPI + Python</li>
              <li>✓ SQLAlchemy ORM</li>
              <li>✓ RESTful APIs</li>
              <li>✓ Audit logging</li>
            </ul>
          </div>

          {/* ML/Data */}
          <div className="glass p-8 rounded-xl border border-orange-accent/30">
            <div className="mb-4"><ArchitectureIcon kind="ml" /></div>
            <h3 className="text-xl font-bold mb-4 text-orange-accent">ML Pipeline</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>✓ XGBoost model</li>
              <li>✓ AutoML Studio</li>
              <li>✓ 30+ features engineered</li>
              <li>✓ Azure Logic Apps</li>
            </ul>
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-dark-secondary p-8 rounded-xl border border-dark-tertiary">
          <h3 className="text-2xl font-bold mb-6">Data Sources & Enrichment</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-accent/20 flex items-center justify-center"><ArchitectureIcon kind="db" /></div>
              <div>
                <p className="font-semibold mb-1">Azure SQL Database</p>
                <p className="text-text-secondary text-sm">Restaurant details & historical services</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-accent/20 flex items-center justify-center"><ArchitectureIcon kind="weather" /></div>
              <div>
                <p className="font-semibold mb-1">Open-Meteo API</p>
                <p className="text-text-secondary text-sm">Real-time weather data</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-accent/20 flex items-center justify-center"><ArchitectureIcon kind="calendar" /></div>
              <div>
                <p className="font-semibold mb-1">Calendar Features</p>
                <p className="text-text-secondary text-sm">Holidays & payroll periods</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-accent/20 flex items-center justify-center"><ArchitectureIcon kind="history" /></div>
              <div>
                <p className="font-semibold mb-1">Historical Data</p>
                <p className="text-text-secondary text-sm">Service volumes & trends</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-secondary p-8 rounded-xl border border-dark-tertiary mt-8">
          <h3 className="text-2xl font-bold mb-3">System Flowchart</h3>
          <p className="text-text-secondary mb-5">
            End-to-end flow of data ingestion, enrichment, prediction, and user-facing output.
          </p>
          <a href="/assets/diagrams/flowchart-cuisineaml.png" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src="/assets/diagrams/flowchart-cuisineaml.png"
              alt="CuisineAML architecture flowchart"
              className="w-full rounded-xl border border-dark-tertiary bg-[#0a0f18] hover:border-orange-accent/50 transition"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
