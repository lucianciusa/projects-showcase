import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-10 -left-40 w-80 h-80 bg-orange-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-light/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-orange-accent/20 text-orange-accent rounded-full text-sm font-semibold">
            {t.hero.badge}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {t.hero.title.split(' ')[0]}<span className="text-orange-accent"> {t.hero.titleHighlight}</span> {t.hero.title.split(' ').slice(2).join(' ')}
        </h1>

        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://github.com/adnanhamidoun/lacuchara"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-orange-accent text-dark-primary font-semibold rounded-lg hover:bg-orange-light transition transform hover:scale-105"
          >
            {t.hero.repository}
          </a>
          <a 
            href="#features"
            className="px-8 py-3 border border-orange-accent text-orange-accent font-semibold rounded-lg hover:bg-orange-accent/10 transition"
          >
            {t.hero.learnMore}
          </a>
        </div>
      </div>
    </section>
  )
}
