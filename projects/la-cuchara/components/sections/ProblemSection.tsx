import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

function StatIcon({ type }: { type: 'users' | 'store' | 'repeat' | 'file' }) {
  const iconClass = 'w-5 h-5 text-orange-accent'
  if (type === 'users') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  if (type === 'store') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass}>
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M4 9h16v11H4z" />
        <path d="M9 20v-6h6v6" />
      </svg>
    )
  }
  if (type === 'repeat') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass}>
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  )
}

export default function Problem() {
  const { t } = useLanguage()
  return (
    <section id="problem" className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.problem.title.split(' ')[0]} <span className="text-orange-accent">{t.problem.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-text-secondary text-lg">In Madrid's Azca zone, a bottleneck effect impacts daily dining choices</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="min-w-14 flex items-start justify-center">
                <div className="w-12 h-12 rounded-lg border border-white/10 bg-orange-accent/20 flex items-center justify-center text-orange-accent font-bold text-lg">
                  <StatIcon type="users" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t.problem.employees}</h3>
                <p className="text-text-secondary">{t.problem.employeesDesc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-14 flex items-start justify-center">
                <div className="w-12 h-12 rounded-lg border border-white/10 bg-orange-accent/20 flex items-center justify-center text-orange-accent font-bold text-lg">
                  <StatIcon type="store" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t.problem.restaurants}</h3>
                <p className="text-text-secondary">{t.problem.restaurantsDesc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-14 flex items-start justify-center">
                <div className="w-12 h-12 rounded-lg border border-white/10 bg-orange-accent/20 flex items-center justify-center text-orange-accent font-bold text-lg">
                  <StatIcon type="repeat" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t.problem.repetition}</h3>
                <p className="text-text-secondary">{t.problem.repetitionDesc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-14 flex items-start justify-center">
                <div className="w-12 h-12 rounded-lg border border-white/10 bg-orange-accent/20 flex items-center justify-center text-orange-accent font-bold text-lg">
                  <StatIcon type="file" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t.problem.menus}</h3>
                <p className="text-text-secondary">{t.problem.menusDesc}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-dark-primary p-8 rounded-xl border border-white/10 hover:border-orange-accent/50 transition">
              <p className="text-orange-accent font-semibold mb-4">{t.problem.bottleneck}</p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.problem.bottleneckDesc}
              </p>
              <div className="h-2 bg-gradient-to-r from-orange-accent to-orange-light rounded-full"></div>
              <p className="text-text-secondary text-sm mt-6">{t.problem.bottleneckConclusion}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
