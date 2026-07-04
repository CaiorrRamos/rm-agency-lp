import './App.css'
import { AboutSection } from './components/sections/AboutSection'
import { AnswersSection } from './components/sections/AnswersSection'
import { Footer } from './components/sections/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ReviewsSection } from './components/sections/ReviewsSection'
import { ServicesSection } from './components/sections/ServicesSection'

function App() {
  return (
    <main className="page-shell">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <AnswersSection />
      <Footer />
    </main>
  )
}

export default App
