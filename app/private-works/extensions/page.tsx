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

export default function ExtensionsPage() {
  const included = [
    "Full architectural design",
    "Planning permission support",
    "Building regulations approval",
    "Structural engineer input",
    "Complete project management",
    "Foundation and groundworks",
    "Roofing and external finish",
    "Windows, doors, and glazing",
    "Electrical and plumbing first fix",
    "Plastering and internal finish",
    "Quality materials throughout",
    "Full insurance coverage",
  ]

  const processSteps = [
    {
      icon: FileText,
      title: "Initial Consultation",
      description: "Free site visit to discuss your requirements and vision",
    },
    {
      icon: Ruler,
      title: "Design & Planning",
      description: "Detailed plans, costs, and planning permission if needed",
    },
    {
      icon: Building2,
      title: "Build Phase",
      description: "Professional construction with regular updates",
    },
    {
      icon: CheckCircle,
      title: "Completion",
      description: "Final inspection, snagging, and handover",
    },
  ]

  const faqs = [
    {
      question: "Do I need planning permission for an extension?",
      answer:
        "It depends on the size and location. Many single-storey extensions fall under permitted development rights. We'll assess your specific project and advise on whether planning permission is required.",
    },
    {
      question: "How long does an extension take?",
      answer:
        "A typical single-storey extension takes 10-14 weeks, while a double-storey extension can take 14-20 weeks. Timelines depend on size, complexity, and weather conditions.",
    },
    {
      question: "What is the average cost of an extension?",
      answer:
        "Costs vary significantly based on size, specification, and location. As a guide, single-storey extensions range from £2,000-£3,000 per square meter, while double-storey extensions can be £1,500-£2,500 per square meter.",
    },
    {
      question: "Can I stay in my home during construction?",
      answer:
        "Yes, in most cases you can remain in your home. We take steps to minimize disruption, seal off work areas, and maintain access to essential facilities throughout the project.",
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
            style={{
              backgroundImage: "url(/placeholder.svg?height=600&width=1200&query=home extension construction site)",
            }}
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
          <Badge className="bg-red-600 text-white border-0 mb-4">Extensions</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Home Extensions
            <span className="block text-red-600">Add Space & Value</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create the extra space you need with a professionally designed and built extension that enhances your home
            and lifestyle.
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
                Complete <span className="text-red-600">Extension Service</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From initial design through to final completion, we manage every aspect of your extension project with
                quality craftsmanship and attention to detail.
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
                <h3 className="font-bold text-gray-900 mb-2">Single & Double-Storey Extensions</h3>
                <p className="text-gray-600">
                  {
                    "Whether you're adding a kitchen extension, extra bedroom, or creating an open-plan living space, we'll design and build the perfect solution for your home."
                  }
                </p>
              </div>
            </div>

            <div className="sticky top-32">
              <QuoteForm serviceType="Extensions" leadSource="private-works/extensions" />
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
              A clear, transparent process from concept to completion
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
              Extension <span className="text-red-600">Projects</span>
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
                    <p className="font-medium">Extension Project {item}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Extend Your Home?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your extension project.
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
