import React from 'react'

export default function TechStack() {
  const techs = [
    { category: 'Frontend', items: ['React 18.3', 'Vite 5.6', 'Tailwind CSS 3.4', 'TypeScript'] },
    { category: 'Backend', items: ['FastAPI 0.135', 'Pydantic 2.12', 'SQLAlchemy 2.0', 'Python 3.10'] },
    { category: 'Database', items: ['Azure SQL Server', 'pyodbc', 'SQLAlchemy ORM'] },
    { category: 'ML & AI', items: ['XGBoost 1.5', 'Azure AutoML', 'Feature Engineering', 'Azure Machine Learning'] },
    { category: 'Data & APIs', items: ['Open-Meteo API', 'holidays library', 'Document Intelligence'] },
    { category: 'Infrastructure', items: ['Azure SQL', 'Logic Apps', 'Uvicorn Server', 'Azure Functions'] },
  ]

  return (
    <section id="tech" className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Tech <span className="text-orange-accent">Stack</span>
          </h2>
          <p className="text-text-secondary text-lg">Modern technologies and Azure cloud services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((group, idx) => (
            <div 
              key={idx}
              className="glass p-6 rounded-xl border border-dark-tertiary hover:border-orange-accent/50 transition"
            >
              <h3 className="text-lg font-bold mb-4 text-orange-accent">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-accent"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Performance highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-dark-primary p-6 rounded-xl border border-orange-accent/30 text-center">
            <div className="text-4xl font-bold text-orange-accent mb-2">30+</div>
            <p className="text-text-secondary">Engineered Features for ML</p>
          </div>
          <div className="bg-dark-primary p-6 rounded-xl border border-orange-accent/30 text-center">
            <div className="text-4xl font-bold text-orange-accent mb-2">4</div>
            <p className="text-text-secondary">Data Sources Integrated</p>
          </div>
          <div className="bg-dark-primary p-6 rounded-xl border border-orange-accent/30 text-center">
            <div className="text-4xl font-bold text-orange-accent mb-2">100%</div>
            <p className="text-text-secondary">Production Ready</p>
          </div>
        </div>
      </div>
    </section>
  )
}
