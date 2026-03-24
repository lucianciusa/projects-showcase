import React from 'react'

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-orange-accent">Solution</span>
          </h2>
          <p className="text-text-secondary text-lg">A two-phase AI platform for intelligent restaurant discovery and demand forecasting</p>
        </div>

        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-orange-accent/20 text-orange-accent rounded-lg font-semibold text-sm">
                Phase 1: Discovery
              </div>
              <h3 className="text-3xl font-bold mb-4">Restaurant Intelligence Platform</h3>
              <p className="text-text-secondary mb-6">
                Restaurants upload daily menu photos. Our system automatically extracts, classifies, and stores menu items. Users can:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">✓</span>
                  <span className="text-text-secondary">Filter restaurants by location, cuisine, or specific dishes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">✓</span>
                  <span className="text-text-secondary">Rate dishes and see community rankings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">✓</span>
                  <span className="text-text-secondary">Compare today's menus in seconds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">✓</span>
                  <span className="text-text-secondary">Discover new favorite restaurants</span>
                </li>
              </ul>
            </div>
            <div className="bg-dark-secondary p-6 rounded-xl border border-dark-tertiary">
              <img 
                src="/assets/screenshots/screen-01-landing.png" 
                alt="Restaurant Discovery Interface" 
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-dark-secondary p-6 rounded-xl border border-dark-tertiary order-2 md:order-1">
              <img 
                src="/assets/screenshots/screen-02-featured.png" 
                alt="Restaurant Listings" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-orange-accent/20 text-orange-accent rounded-lg font-semibold text-sm">
                Phase 2: Prediction
              </div>
              <h3 className="text-3xl font-bold mb-4">AI Demand Forecasting</h3>
              <p className="text-text-secondary mb-6">
                Using historical data and advanced ML models, we predict:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">01</span>
                  <span className="text-text-secondary">Daily service volume per restaurant</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">02</span>
                  <span className="text-text-secondary">Weekly menu recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-accent font-bold">03</span>
                  <span className="text-text-secondary">Peak dining times and congestion</span>
                </li>
              </ul>
              <p className="text-text-secondary text-sm">Restaurants receive actionable insights to optimize staffing, inventory, and menu planning.</p>
            </div>
          </div>

          <div className="bg-dark-secondary p-6 rounded-xl border border-dark-tertiary">
            <h3 className="text-2xl font-bold mb-3">Product Demo</h3>
            <p className="text-text-secondary mb-5">
              Short walkthrough of CuisineAML in action, covering discovery, catalog filtering, and restaurant-side workflows.
            </p>
            <video
              controls
              preload="metadata"
              className="w-full rounded-xl border border-dark-tertiary bg-[#0a0f18]"
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
