import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Screenshots() {
  const { t } = useLanguage()
  const images = [
    {
      src: '/assets/screenshots/screen-01-landing.png',
      title: t.screenshots.image1,
      caption: t.screenshots.image1Desc
    },
    {
      src: '/assets/screenshots/screen-02-featured.png',
      title: t.screenshots.image2,
      caption: t.screenshots.image2Desc
    },
    {
      src: '/assets/screenshots/screen-03-catalog.png',
      title: t.screenshots.image3,
      caption: t.screenshots.image3Desc
    },
    {
      src: '/assets/screenshots/screen-04-detail.png',
      title: t.screenshots.image4,
      caption: t.screenshots.image4Desc
    },
    {
      src: '/assets/screenshots/screen-05-restaurant-onboarding-steps.png',
      title: t.screenshots.image5,
      caption: t.screenshots.image5Desc
    },
    {
      src: '/assets/screenshots/screen-06-about.png',
      title: t.screenshots.image6,
      caption: t.screenshots.image6Desc
    },
    {
      src: '/assets/screenshots/screen-07-login.png',
      title: t.screenshots.image7,
      caption: t.screenshots.image7Desc
    },
    {
      src: '/assets/screenshots/screen-08-restaurant-panel.png',
      title: t.screenshots.image8,
      caption: t.screenshots.image8Desc
    },
    {
      src: '/assets/screenshots/screen-09-menu-digitalization.png',
      title: t.screenshots.image9,
      caption: t.screenshots.image9Desc
    },
    {
      src: '/assets/screenshots/screen-10-demand-prediction.png',
      title: t.screenshots.image10,
      caption: t.screenshots.image10Desc
    },
    {
      src: '/assets/screenshots/screen-11-menu-prediction.png',
      title: t.screenshots.image11,
      caption: t.screenshots.image11Desc
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)

  const current = images[activeIndex]

  return (
    <section id="screenshots" className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.screenshots.title.split(' ')[0]} <span className="text-orange-accent">{t.screenshots.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-text-secondary text-lg">{t.screenshots.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className="bg-dark-secondary border border-white/10 rounded-2xl overflow-hidden hover:border-orange-accent/50 transition">
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
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-2xl font-bold">{current.title}</h3>
                <span className="text-sm text-text-secondary">{activeIndex + 1} / {images.length}</span>
              </div>
              <p className="text-text-secondary">{current.caption}</p>
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  className="px-4 py-2 rounded-lg border border-white/10 hover:border-orange-accent/50 hover:text-orange-accent transition"
                >
                  {t.screenshots.previous}
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="px-4 py-2 rounded-lg border border-white/10 hover:border-orange-accent/50 hover:text-orange-accent transition"
                >
                  {t.screenshots.next}
                </button>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="ml-auto px-4 py-2 rounded-lg bg-orange-accent text-dark-primary font-semibold hover:bg-orange-light transition"
                >
                  {t.screenshots.enlarge}
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
                    : 'border-white/10 bg-dark-secondary hover:border-orange-accent/50'
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
                  className="px-4 py-2 rounded-lg border border-white/10 hover:border-orange-accent/50"
                >
                  Close
                </button>
              </div>
              <div className="relative flex-1 bg-[#0a0f18] rounded-xl border border-white/10 hover:border-orange-accent/50 transition overflow-hidden">
                <img src={current.src} alt={current.title} className="w-full h-full object-contain" />
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg bg-dark-primary/80 border border-white/10 hover:border-orange-accent/50 transition"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg bg-dark-primary/80 border border-white/10 hover:border-orange-accent/50 transition"
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
