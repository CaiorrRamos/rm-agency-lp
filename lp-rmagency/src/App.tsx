import { Footer } from './components/layout/Footer/Footer'
import { Navbar } from './components/layout/Navbar/Navbar'
import { VersionNotice } from './components/layout/VersionNotice/VersionNotice'
import { AboutSection } from './components/sections/About/AboutSection'
import { FAQSection } from './components/sections/FAQ/FAQSection'
import { HeroSection } from './components/sections/Hero/HeroSection'
import { ProcessSection } from './components/sections/Process/ProcessSection'
import { ShowcaseSection } from './components/sections/Showcase/ShowcaseSection'
import { SolutionsSection } from './components/sections/Solutions/SolutionsSection'
import { TestimonialsSection } from './components/sections/Testimonials/TestimonialsSection'
import { normalizePathname } from './lib/path'
import { ContactPage } from './pages/Contact/ContactPage'

function App() {
  const isContactPage = normalizePathname(window.location.pathname) === '/contact'

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {isContactPage ? (
        <ContactPage />
      ) : (
        <>
          <VersionNotice />
          <main>
            <HeroSection />
            <ShowcaseSection />
            <AboutSection />
            <ProcessSection />
            <SolutionsSection />
            <TestimonialsSection />
            <FAQSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
