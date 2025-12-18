import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ArrowRight, Home, Ruler, FileText, Building2, Phone } from "lucide-react"
import Link from "next/link"
import { PRIMARY_PHONE_DISPLAY, getPhoneLink } from "@/lib/company"

export default function LoftExtensionsPage() {
  const included = [
    "Structural survey and feasibility",
    "Full architectural design",
    "Planning & building regs",
    "Structural calculations",
    "Dormer or Velux installation",
    "Roof alterations & extensions",
    "Staircase design & installation",
    "Full insulation (walls & roof)",
    "Electrical wiring & lighting",
    "Plumbing (if bathroom included)",
    "Plastering & decoration",
    "Flooring and finishing",
  ]

  const processSteps = [
    {
      icon: FileText,
      title: "Survey & Design",
      description: "Assess suitability and create detailed plans",
    },
    {
      icon: Ruler,
      title: "Approvals",
      description: "Handle planning and building regulations",
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Professional build with minimal disruption",
    },
    {
      icon: CheckCircle,
      title: "Final Touches",
      description: "Complete finishing and quality checks",
    },
  ]

  const faqs = [
    {
      question: "Is my loft suitable for conversion?",
      answer:
        "Most properties can accommodate a loft conversion, but factors like roof height, pitch, and structure need assessment. We offer free surveys to determine suitability and discuss options.",
    },
    {
      question: "Do I need planning permission?",
      answer:
        "Many loft conversions fall under permitted development rights. However, planning permission may be required for significant changes to roof shape, in conservation areas, or for listed buildings.",
    },
    {
      question: "How long does a loft conversion take?",
      answer:
        "A typical loft conversion takes 6-8 weeks for a standard bedroom, and 8-12 weeks if including a bathroom. The timeline depends on complexity and the type of conversion.",
    },
    {
      question: "What types of loft conversion do you offer?",
      answer:
        "We offer various types including dormer conversions, hip-to-gable, mansard, and Velux conversions. The best option depends on your property type, roof structure, and requirements.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/placeholder.svg?height=600&width=1200&query=loft conversion bedroom)" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Link
            href="/private-works"
            className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Back to Private Works
          </Link>
          <Badge className="bg-red-600 text-white border-0 mb-4">Loft Extensions</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Loft Conversions
            <span className="block text-red-600">Unlock Hidden Space</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your unused loft into a beautiful bedroom, office, or playroom with our expert loft conversion
            service.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
                <span className="text-xs font-semibold tracking-wide uppercase">{"What's Included"}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete <span className="text-red-600">Loft Conversion</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We handle everything from structural work and approvals to final decoration, creating a fully functional
                living space in your loft.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-50 border-l-4 border-red-600">
                <h3 className="font-bold text-gray-900 mb-2">Maximum Value, Minimal Disruption</h3>
                <p className="text-gray-600">
                  Loft conversions can add significant value to your property and can be completed while you remain in
                  your home, with work contained to the upper floor.
                </p>
              </div>
            </div>

            <div className="sticky top-32">
              <QuoteForm serviceType="Loft Extensions" leadSource="private-works/loft-extensions" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold tracking-wide uppercase">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-red-600">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined process designed to minimize disruption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-600 p-4 w-fit mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-red-600 mb-2">0{index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold tracking-wide uppercase">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loft Conversion <span className="text-red-600">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-cover bg-center relative overflow-hidden group"
                style={{ backgroundImage: "url(/placeholder.svg?height=400&width=400)" }}
              >
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <Home className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium">Loft Conversion {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold tracking-wide uppercase">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common <span className="text-red-600">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Convert Your Loft?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free feasibility survey and quote for your loft conversion project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="#quote">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href={getPhoneLink()}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PRIMARY_PHONE_DISPLAY}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
