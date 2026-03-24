import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Features() {
  const { t } = useLanguage()
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      ),
      title: t.features.feature1Title,
      description: t.features.feature1Desc
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <rect x="4" y="8" width="16" height="10" rx="2" />
          <path d="M12 4v4" />
          <circle cx="9" cy="13" r="1" />
          <circle cx="15" cy="13" r="1" />
          <path d="M9 16h6" />
        </svg>
      ),
      title: t.features.feature2Title,
      description: t.features.feature2Desc
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      ),
      title: t.features.feature3Title,
      description: t.features.feature3Desc
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z" />
        </svg>
      ),
      title: t.features.feature4Title,
      description: t.features.feature4Desc
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <path d="M3 3v18h18" />
          <rect x="7" y="12" width="2.8" height="6" />
          <rect x="11" y="9" width="2.8" height="9" />
          <rect x="15" y="6" width="2.8" height="12" />
        </svg>
      ),
      title: t.features.feature5Title,
      description: t.features.feature5Desc
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <path d="M6 16a4 4 0 1 1 .6-7.95A5 5 0 0 1 16 9a3.5 3.5 0 1 1 .5 7H6z" />
          <path d="M9 20l-1 2" />
          <path d="M13 20l-1 2" />
        </svg>
      ),
      title: t.features.feature6Title,
      description: t.features.feature6Desc
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M3 10h18" />
        </svg>
      ),
      title: t.features.feature7Title,
      description: t.features.feature7Desc
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
      title: t.features.feature8Title,
      description: t.features.feature8Desc
    },
  ]

  return (
    <section id="features" className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.features.title.split(' ')[0]} <span className="text-orange-accent">{t.features.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-text-secondary text-lg">{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="glass p-6 rounded-xl border border-white/10 hover:border-orange-accent/50 transition group cursor-pointer"
            >
              <div className="mb-4 text-orange-accent">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
