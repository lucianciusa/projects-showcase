import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-dark-secondary border-t border-dark-tertiary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-orange-accent mb-3">{t.footer.projectShowcase}</p>
        <h3 className="text-2xl font-bold mb-3">{t.footer.brandName}</h3>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8">
          {t.footer.description}
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="https://github.com/adnanhamidoun/lacuchara" target="_blank" rel="noopener noreferrer" className="text-orange-accent hover:text-orange-light transition font-semibold">
            {t.footer.sourceRepository}
          </a>
          <a href="#solution" className="text-text-secondary hover:text-orange-accent transition">
            {t.footer.solutionOverview}
          </a>
          <a href="#tech" className="text-text-secondary hover:text-orange-accent transition">
            {t.footer.technicalStack}
          </a>
        </div>
        <p className="text-text-secondary text-sm">{t.footer.credits}</p>
      </div>
    </footer>
  )
}
