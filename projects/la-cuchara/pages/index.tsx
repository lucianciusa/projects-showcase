import Head from 'next/head'
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23E8754F' width='100' height='100' rx='20'/><text x='50' y='70' font-size='60' font-weight='bold' text-anchor='middle' fill='%231a1f2e'>CM</text></svg>" />
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
