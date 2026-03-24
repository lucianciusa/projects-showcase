import React from 'react'

export default function Team() {
  const team = [
    { name: 'Adnan Hamidoun', role: 'Lead Developer' },
    { name: 'Lucian', role: 'Full Stack Engineer' },
    { name: 'Mariioogrciia', role: 'Developer' },
  ]

  return (
    <section className="py-20 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The <span className="text-orange-accent">Team</span>
          </h2>
          <p className="text-text-secondary text-lg">Built by passionate engineers passionate about solving real-world problems</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="glass p-6 rounded-xl border border-dark-tertiary hover:border-orange-accent/50 transition text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-accent/15 border border-orange-accent/40 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-orange-accent">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-text-secondary text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-dark-primary p-6 rounded-xl border border-dark-tertiary text-center">
            <div className="text-3xl font-bold text-orange-accent mb-2">3</div>
            <p className="text-text-secondary">Contributors</p>
          </div>
          <div className="bg-dark-primary p-6 rounded-xl border border-dark-tertiary text-center">
            <div className="text-3xl font-bold text-orange-accent mb-2">2</div>
            <p className="text-text-secondary">Project Phases</p>
          </div>
          <div className="bg-dark-primary p-6 rounded-xl border border-dark-tertiary text-center">
            <div className="text-3xl font-bold text-orange-accent mb-2">2026</div>
            <p className="text-text-secondary">Completion Year</p>
          </div>
        </div>
      </div>
    </section>
  )
}
