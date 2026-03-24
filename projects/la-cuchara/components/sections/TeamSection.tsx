import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Team() {
  const { t } = useLanguage()
  const team = [
    { name: 'Adnan Hamidoun', image: '/assets/team/adnan.jpg' },
    { name: 'Lucian Ciusa', image: '/assets/team/lucian.jpg' },
    { name: 'Mario García Romero', image: '/assets/team/mario.jpg' },
  ]

  return (
    <section id="team" className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.team.title.split(' ')[0]} <span className="text-orange-accent">{t.team.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-text-secondary text-lg">{t.team.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="glass p-6 rounded-xl border border-white/10 hover:border-orange-accent/50 transition text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-orange-accent/40 overflow-hidden">
                <img src={member.image} alt={`${member.name} portrait`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-dark-primary p-6 rounded-xl border border-orange-accent/30 hover:border-orange-accent/50 transition text-center">
            <div className="text-3xl font-bold text-orange-accent mb-2">3</div>
            <p className="text-text-secondary">{t.team.contributors}</p>
          </div>
          <div className="bg-dark-primary p-6 rounded-xl border border-orange-accent/30 hover:border-orange-accent/50 transition text-center">
            <div className="text-3xl font-bold text-orange-accent mb-2">2026</div>
            <p className="text-text-secondary">{t.team.completionYear}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
