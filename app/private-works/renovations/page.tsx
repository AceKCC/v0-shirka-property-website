import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ArrowRight, Home, Ruler, FileText, Building2, Phone } from "lucide-react"
import Link from "next/link"

export default function RenovationsPage() {
  const included = [
    "Full property survey",
    "Detailed project plan & timeline",
    "Kitchen & bathroom design",
    "Complete stripping & preparation",
    "Structural alterations (if needed)",
    "Full rewiring & replumbing",
    "New heating system",
    "Plastering & rendering",
    "Flooring throughout",
    "Kitchen & bathroom installation",
    "Internal & external decoration",
    "Project management & coordination",
  ]

  const processSteps = [
    {
      icon: FileText,
      title: "Consultation",
      description: "Discuss your vision and assess the property",
    },
    {
      icon: Ruler,
      title: "Design & Quote",
      description: "Create detailed plans and fixed-price quote",
    },
    {
      icon: Building2,
      title: "Renovation",
      description: "Complete transformation with quality trades",
    },
    {
      icon: CheckCircle,
      title: "Handover",
      description: "Final walkthrough and snagging resolution",
    },
  ]

  const faqs = [
    {
      question: "How long does a full renovation take?",
      answer:
        "A complete house renovation typically takes 12-20 weeks depending on property size and scope. Kitchen/bathroom-only projects can be completed in 4-6 weeks.",
    },
    {
      question: "Can I live in my home during renovation?",
      answer:
        "For major renovations, it's usually best to move out temporarily. For smaller projects like single-room renovations, you can often remain in the property with some inconvenience.",
    },
    {
      question: "What does a renovation include?",
      answer:
        "Our renovations can be fully bespoke. They typically include structural work, all trades (electrical, plumbing, plastering), new kitchens and bathrooms, flooring, and decoration throughout.",
    },
    {
      question: "How much does a renovation cost?",
      answer:
        "Costs vary widely based on property size and specification. As a guide, full house renovations range from £40,000-£150,000+. We provide detailed, itemized quotes with no hidden costs.",
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
            style={{ backgroundImage: "url(/images/plumbing-works.png)" }}
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
          <Badge className="bg-red-600 text-white border-0 mb-4">Renovations</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Complete Renovations
            <span className="block text-red-600">Transform Your Property</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From tired period properties to dated interiors, we deliver complete property transformations with quality
            craftsmanship and project management.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
                <span className="text-xs font-semibold tracking-wide uppercase">What's Included</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Full Property <span className="text-red-600">Renovation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We manage every aspect of your renovation from concept to completion, coordinating all trades and
                ensuring quality at every stage.
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
                <h3 className="font-bold text-gray-900 mb-2">Comprehensive Project Management</h3>
                <p className="text-gray-600">
                  One point of contact manages all trades, materials, and scheduling, keeping your renovation on time
                  and on budget with regular progress updates.
                </p>
              </div>
            </div>

            <div className="sticky top-32">
              <QuoteForm serviceType="Renovations" />
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
              A structured approach to deliver your dream renovation
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
              Renovation <span className="text-red-600">Projects</span>
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
                    <p className="font-medium">Renovation Project {item}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Renovate?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your renovation project.
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
              <Link href="tel:08001234567">
                <Phone className="mr-2 h-5 w-5" />
                Call 0800 123 4567
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
