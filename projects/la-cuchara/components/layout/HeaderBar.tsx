'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#problem', label: t.header.problem },
    { href: '#solution', label: t.header.solution },
    { href: '#features', label: t.header.features },
    { href: '#tech', label: t.header.tech },
    { href: '#screenshots', label: t.header.screenshots },
    { href: '#team', label: t.header.team },
  ]

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility)
      return () => {
        window.removeEventListener('scroll', toggleVisibility)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const closeOnLarge = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeOnLarge)
    return () => window.removeEventListener('resize', closeOnLarge)
  }, [])

  return (
    <header className="fixed top-0 w-full bg-dark-secondary/95 backdrop-blur-sm border-b border-dark-tertiary z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-orange-accent transition"
        >
          <span className="font-bold text-lg hidden sm:inline">CuisineAML</span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-orange-accent transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="lg:hidden px-3 py-2 rounded-lg border border-white/10 hover:border-orange-accent/50 transition"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-dark-tertiary rounded-lg p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded transition ${
                language === 'en' ? 'bg-orange-accent text-dark-primary font-semibold' : 'hover:text-orange-accent'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded transition ${
                language === 'es' ? 'bg-orange-accent text-dark-primary font-semibold' : 'hover:text-orange-accent'
              }`}
            >
              ES
            </button>
          </div>

          <a
            href="https://github.com/adnanhamidoun/lacuchara"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-accent text-dark-primary font-semibold rounded-lg hover:bg-orange-light transition hidden sm:inline-block"
          >
            {t.header.github}
          </a>

          {/* Back to Top Button */}
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-orange-accent text-dark-primary font-semibold rounded-lg hover:bg-orange-light transition"
              title="Back to top"
            >
              ↑
            </button>
          )}
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden border-t border-white/10 bg-dark-secondary/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-3 py-2 rounded-lg border border-white/10 hover:border-orange-accent/50 hover:text-orange-accent transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
