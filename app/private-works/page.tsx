import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Building2, Hammer, CheckCircle, Star, Award, Shield, Phone } from "lucide-react"
import Link from "next/link"
import { PRIMARY_PHONE_DISPLAY, getPhoneLink } from "@/lib/company"

export default function PrivateWorksPage() {
  const services = [
    {
      icon: Building2,
      title: "Extensions",
      description: "Single and double-storey extensions to expand your living space",
      link: "/private-works/extensions",
      image: "/modern-home-extension-construction.jpg",
      features: ["Planning support", "Full project management", "Quality craftsmanship", "Building regulations"],
    },
    {
      icon: Home,
      title: "Loft Extensions",
      description: "Transform your loft into a beautiful, functional living space",
      link: "/private-works/loft-extensions",
      image: "/loft-conversion-bedroom-modern.jpg",
      features: ["Dormer conversions", "Velux installations", "Full insulation", "Staircase design"],
    },
    {
      icon: Hammer,
      title: "Renovations",
      description: "Complete property transformations from concept to completion",
      link: "/private-works/renovations",
      image: "/modern-home-renovation.png",
      features: ["Kitchen & bathroom", "Full refurbishment", "Period restoration", "Modern updates"],
    },
  ]

  const trustSignals = [
    { icon: Shield, text: "Fully Insured" },
    { icon: Award, text: "Experienced Team" },
    { icon: Star, text: "Quality Focused" },
    { icon: CheckCircle, text: "Clear Communication" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-bg.png)" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white border-0 mb-4">Private Works</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Home
            <span className="block text-red-600">With Expert Craftsmanship</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From extensions and loft conversions to complete renovations, we bring your vision to life with quality
            workmanship and attention to detail.
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
                {PRIMARY_PHONE_DISPLAY}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <signal.icon className="h-8 w-8 text-red-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{signal.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold tracking-wide uppercase">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expert <span className="text-red-600">Construction Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your project type to learn more about how we can transform your property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Link key={index} href={service.link} className="group">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-red-600 p-3">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Looking for something else?</p>
            <Button
              asChild
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              <Link href="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Softened claims */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Shirka?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">Experienced team delivering quality construction projects across London</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-gray-600">Comprehensive insurance coverage and relevant certifications</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focused</h3>
                <p className="text-gray-600">Clear communication and realistic timelines</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h2>
              <p className="text-gray-600">We respond within 1 business day.</p>
            </div>
            <QuoteForm leadSource="private-works" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your extension, loft conversion, or renovation project.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/contact">
              Request Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
