import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-dark-secondary/95 backdrop-blur-sm border-b border-dark-tertiary z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/brand/logo-cuisineaml.png" alt="CuisineAML logo" className="w-9 h-9 object-contain" />
          <span className="font-bold text-lg hidden sm:inline">CuisineAML</span>
        </div>
        
        <ul className="flex items-center gap-8">
          <li><a href="#problem" className="hover:text-orange-accent transition">Problem</a></li>
          <li><a href="#solution" className="hover:text-orange-accent transition">Solution</a></li>
          <li><a href="#features" className="hover:text-orange-accent transition">Features</a></li>
          <li><a href="#tech" className="hover:text-orange-accent transition">Tech</a></li>
        </ul>

        <a 
          href="https://github.com/adnanhamidoun/lacuchara" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-orange-accent text-dark-primary font-semibold rounded-lg hover:bg-orange-light transition"
        >
          View on GitHub
        </a>
      </nav>
    </header>
  )
}
