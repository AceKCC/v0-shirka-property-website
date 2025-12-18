import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PathSelector } from "@/components/path-selector"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { CoverageAreas } from "@/components/coverage-areas"
import { Platforms } from "@/components/platforms"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { TrustedPartners } from "@/components/trusted-partners"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <PathSelector />
      <About />
      <Services />
      <Process />
      <CoverageAreas />
      <Testimonials />
      <Platforms />
      <Contact />
      <TrustedPartners />
      <Footer />
    </main>
  )
}
