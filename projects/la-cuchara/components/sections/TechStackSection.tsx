import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function TechStack() {
  const { t } = useLanguage()
  const techs = t.tech.categories

  return (
    <section id="tech" className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.tech.title.split(' ')[0]} <span className="text-orange-accent">{t.tech.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-text-secondary text-lg">{t.tech.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((group, idx) => (
            <div 
              key={idx}
              className="glass p-6 rounded-xl border border-white/10 hover:border-orange-accent/50 transition"
            >
              <h3 className="text-lg font-bold mb-4 text-orange-accent">{group.label}</h3>
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
          <div className="bg-dark-primary p-6 rounded-xl border border-orange-accent/30 hover:border-orange-accent/50 transition text-center">
            <div className="text-4xl font-bold text-orange-accent mb-2">30+</div>
            <p className="text-text-secondary">{t.tech.highlight1}</p>
          </div>
          <div className="bg-dark-primary p-6 rounded-xl border border-orange-accent/30 hover:border-orange-accent/50 transition text-center">
            <div className="text-4xl font-bold text-orange-accent mb-2">4</div>
            <p className="text-text-secondary">{t.tech.highlight2}</p>
          </div>
          <div className="bg-dark-primary p-6 rounded-xl border border-orange-accent/30 hover:border-orange-accent/50 transition text-center">
            <div className="text-4xl font-bold text-orange-accent mb-2">100%</div>
            <p className="text-text-secondary">{t.tech.highlight3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
