import React, { useState } from 'react'

export default function Screenshots() {
  const images = [
    {
      src: '/assets/screenshots/screen-01-landing.png',
      title: 'Landing Discovery',
      caption: 'Main discovery view with search, category pills, and premium positioning.'
    },
    {
      src: '/assets/screenshots/screen-02-featured.png',
      title: 'Featured Restaurants',
      caption: 'Curated restaurant cards with ratings, cuisine tags, and pricing context.'
    },
    {
      src: '/assets/screenshots/screen-03-catalog.png',
      title: 'Catalog Filters',
      caption: 'Advanced filtering by segment, price range, and service extras.'
    },
    {
      src: '/assets/screenshots/screen-04-detail.png',
      title: 'Restaurant Detail',
      caption: 'Restaurant profile with map, highlights, and quick operational stats.'
    },
    {
      src: '/assets/screenshots/screen-05-onboarding.png',
      title: 'Onboarding Step 1',
      caption: 'Structured onboarding flow for restaurant registration and account setup.'
    },
    {
      src: '/assets/screenshots/screen-06-about.png',
      title: 'About Narrative',
      caption: 'Brand narrative section that explains positioning and value proposition.'
    },
    {
      src: '/assets/screenshots/screen-07-login.png',
      title: 'Access and Login',
      caption: 'Private-area access pattern for administrators and restaurant owners.'
    },
    {
      src: '/assets/screenshots/screen-08-upload.png',
      title: 'Menu Digitalization',
      caption: 'Menu upload and document-processing workflow for daily menu ingestion.'
    },
    {
      src: '/assets/screenshots/screen-09-prediction.png',
      title: 'Prediction Layer',
      caption: 'Demand-prediction interface integrating model outputs with user workflow.'
    },
    {
      src: '/assets/screenshots/screen-10-analytics.png',
      title: 'Analytics Support',
      caption: 'Operational indicators used to guide staffing and service planning.'
    },
    {
      src: '/assets/screenshots/screen-11-controls.png',
      title: 'Operational Controls',
      caption: 'Management controls that support restaurant-side configuration.'
    },
    {
      src: '/assets/screenshots/screen-12-summary.png',
      title: 'End-to-End Experience',
      caption: 'Final integrated experience showing cohesion across discovery and insights.'
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)

  const current = images[activeIndex]

  return (
    <section className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Application <span className="text-orange-accent">Screenshots</span>
          </h2>
          <p className="text-text-secondary text-lg">All project visuals with descriptive navigation and enlarged preview</p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className="bg-dark-secondary border border-dark-tertiary rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="w-full text-left group"
            >
              <img
                src={current.src}
                alt={current.title}
                className="w-full h-[420px] sm:h-[520px] object-contain bg-[#0a0f18]"
              />
            </button>
            <div className="p-6 border-t border-dark-tertiary">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-2xl font-bold">{current.title}</h3>
                <span className="text-sm text-text-secondary">{activeIndex + 1} / {images.length}</span>
              </div>
              <p className="text-text-secondary">{current.caption}</p>
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  className="px-4 py-2 rounded-lg border border-dark-tertiary hover:border-orange-accent/50 hover:text-orange-accent transition"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="px-4 py-2 rounded-lg border border-dark-tertiary hover:border-orange-accent/50 hover:text-orange-accent transition"
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="ml-auto px-4 py-2 rounded-lg bg-orange-accent text-dark-primary font-semibold hover:bg-orange-light transition"
                >
                  Enlarge
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3 max-h-[720px] overflow-auto pr-1">
            {images.map((img, idx) => (
              <button
                type="button"
                key={img.src}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left rounded-xl border transition overflow-hidden ${
                  activeIndex === idx
                    ? 'border-orange-accent bg-orange-accent/10'
                    : 'border-dark-tertiary bg-dark-secondary hover:border-orange-accent/40'
                }`}
              >
                <div className="flex gap-3 p-3">
                  <img src={img.src} alt={img.title} className="w-24 h-16 object-cover rounded-md" />
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{img.title}</p>
                    <p className="text-xs text-text-secondary mt-1">{img.caption}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {isLightboxOpen && (
          <div className="fixed inset-0 z-[80] bg-black/90 p-4 sm:p-8" role="dialog" aria-modal="true">
            <div className="max-w-7xl mx-auto h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-text-secondary">Fullscreen Preview</p>
                  <h4 className="text-lg font-semibold">{current.title}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-4 py-2 rounded-lg border border-dark-tertiary hover:border-orange-accent/60"
                >
                  Close
                </button>
              </div>
              <div className="relative flex-1 bg-[#0a0f18] rounded-xl border border-dark-tertiary overflow-hidden">
                <img src={current.src} alt={current.title} className="w-full h-full object-contain" />
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg bg-dark-primary/80 border border-dark-tertiary"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg bg-dark-primary/80 border border-dark-tertiary"
                >
                  Next
                </button>
              </div>
              <p className="mt-4 text-text-secondary text-sm">{current.caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
