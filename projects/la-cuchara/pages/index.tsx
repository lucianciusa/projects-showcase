import Head from 'next/head'
import { useEffect } from 'react'
import HeaderBar from '../components/layout/HeaderBar'
import ProjectFooter from '../components/layout/ProjectFooter'
import HeroSection from '../components/sections/HeroSection'
import ProblemSection from '../components/sections/ProblemSection'
import SolutionSection from '../components/sections/SolutionSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import ArchitectureSection from '../components/sections/ArchitectureSection'
import TechStackSection from '../components/sections/TechStackSection'
import ScreenshotsSection from '../components/sections/ScreenshotsSection'
import TeamSection from '../components/sections/TeamSection'

export default function Home() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section')) as HTMLElement[]
    if (!sections.length) {
      return
    }

    const boxSelectors = '.glass, .rounded-xl.border, .rounded-2xl.border'
    const boxes = sections.flatMap((section) => {
      const sectionBoxes = Array.from(section.querySelectorAll(boxSelectors)) as HTMLElement[]
      return sectionBoxes
    })

    sections.forEach((section, index) => {
      section.classList.add('scroll-pop')
      section.style.setProperty('--reveal-delay', `${Math.min(index * 22, 110)}ms`)
    })

    sections.forEach((section) => {
      const sectionBoxes = Array.from(section.querySelectorAll(boxSelectors)) as HTMLElement[]
      sectionBoxes.forEach((box, boxIndex) => {
        box.classList.add('scroll-pop-box')
        box.style.setProperty('--box-reveal-delay', `${Math.min(boxIndex * 26, 130)}ms`)
      })
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview')
          } else {
            entry.target.classList.remove('is-inview')
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))
    boxes.forEach((box) => observer.observe(box))

    return () => {
      observer.disconnect()
      sections.forEach((section) => {
        section.classList.remove('scroll-pop', 'is-inview')
        section.style.removeProperty('--reveal-delay')
      })
      boxes.forEach((box) => {
        box.classList.remove('scroll-pop-box', 'is-inview')
        box.style.removeProperty('--box-reveal-delay')
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>CuisineAML - AI Restaurant Demand Forecasting Platform</title>
        <meta name="description" content="Intelligent platform for restaurant discovery and AI-powered demand forecasting. Solving the dining bottleneck in Madrid's Azca zone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1f2e" />
        <meta property="og:title" content="CuisineAML - AI Restaurant Demand Forecasting" />
        <meta property="og:description" content="Intelligent platform for restaurant discovery and demand forecasting using AI/ML." />
        <meta property="og:type" content="website" />
      </Head>

      <HeaderBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ArchitectureSection />
        <TechStackSection />
        <ScreenshotsSection />
        <TeamSection />
      </main>
      <ProjectFooter />
    </>
  )
}
