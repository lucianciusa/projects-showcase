import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Solution() {
  const { t } = useLanguage()
  return (
    <section id="solution" className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.solution.title.split(' ').slice(0, 1).join(' ')} <span className="text-orange-accent">{t.solution.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-text-secondary text-lg">{t.solution.subtitle}</p>
        </div>

        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-accent/20 text-orange-accent rounded-lg font-semibold text-sm">
                {t.solution.phase1Badge}
              </div>
              <h3 className="text-3xl font-bold mb-4">{t.solution.phase1Title}</h3>
              <p className="text-text-secondary mb-6">
                {t.solution.phase1Description}
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">✓</span>
                  <span className="text-text-secondary">{t.solution.phase1Item1}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">✓</span>
                  <span className="text-text-secondary">{t.solution.phase1Item2}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">✓</span>
                  <span className="text-text-secondary">{t.solution.phase1Item3}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">✓</span>
                  <span className="text-text-secondary">{t.solution.phase1Item4}</span>
                </li>
              </ul>
            </div>
            <div className="bg-dark-secondary p-6 rounded-xl border border-white/10 hover:border-orange-accent/50 transition flex items-center justify-center">
              <img 
                src="/assets/screenshots/screen-01-landing.png" 
                alt="Restaurant Discovery Interface" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-dark-secondary p-6 rounded-xl border border-white/10 hover:border-orange-accent/50 transition order-2 md:order-1 flex items-center justify-center">
              <img 
                src="/assets/screenshots/screen-10-demand-prediction.png" 
                alt="Restaurant analytics and prediction" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="inline-block mb-4 px-4 py-2 bg-orange-accent/20 text-orange-accent rounded-lg font-semibold text-sm">
                {t.solution.phase2Badge}
              </div>
              <h3 className="text-3xl font-bold mb-4">{t.solution.phase2Title}</h3>
              <p className="text-text-secondary mb-6">
                {t.solution.phase2Description}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">01</span>
                  <span className="text-text-secondary">{t.solution.phase2Item1}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">02</span>
                  <span className="text-text-secondary">{t.solution.phase2Item2}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">03</span>
                  <span className="text-text-secondary">{t.solution.phase2Item3}</span>
                </li>
              </ul>
              <p className="text-text-secondary text-sm">{t.solution.phase2Footer}</p>
            </div>
          </div>

          <div className="bg-dark-secondary p-6 rounded-xl border border-white/10 hover:border-orange-accent/50 transition">
            <h3 className="text-2xl font-bold mb-3">{t.solution.demoBadge}</h3>
            <p className="text-text-secondary mb-5">
              {t.solution.demoDescription}
            </p>
            <video
              controls
              preload="metadata"
              className="w-full rounded-xl border border-white/10 bg-[#0a0f18] hover:border-orange-accent/50 transition"
            >
              <source src="/assets/media/demo-cuisineaml.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
