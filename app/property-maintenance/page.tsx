// ... existing code ...
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  Award,
  FileCheck,
  Wrench,
  Home,
  Droplets,
  AlertCircle,
  ArrowRight,
  Phone,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// <CHANGE> Import company constants
import { PRIMARY_PHONE_DISPLAY, getPhoneLink } from "@/lib/company"

export default function PropertyMaintenancePage() {
  const services = [
    {
      icon: Wrench,
      title: "Responsive Repairs",
      description: "24/7 emergency callouts with fast response times and right-first-time repairs",
    },
    {
      icon: Clock,
      title: "Planned Maintenance",
      description: "Proactive maintenance programs to prevent costly emergency repairs",
    },
    {
      icon: Home,
      title: "Void Property Management",
      description: "Complete void turnaround services to minimize vacant property periods",
    },
    {
      icon: Droplets,
      title: "Damp & Mould",
      description: "Specialist treatment and prevention of damp and mould issues",
    },
    {
      icon: Shield,
      title: "Compliance Services",
      description: "Full regulatory compliance including gas, electrical, and fire safety",
    },
    {
      icon: AlertCircle,
      title: "Out of Hours",
      description: "Round-the-clock emergency response for urgent repairs and callouts",
    },
  ]

  const partners = [
    { name: "Peabody", logo: "/images/peabody-logo.png" },
    { name: "Notting Hill Genesis", logo: "/images/notting-hill-genesis-logo.png" },
    { name: "L&Q", logo: "/images/lq-logo.avif" },
  ]

  // <CHANGE> Softened compliance claims
  const complianceItems = [
    "Gas Safe registered engineers",
    "NICEIC approved electrical contractors",
    "CDM 2015 compliant",
    "Quality management systems",
    "Industry accreditations",
    "Health & safety accredited",
    "Full liability coverage",
    "Professional indemnity insurance",
  ]

  const processSteps = [
    {
      number: "01",
      title: "Initial Contact",
      description: "Report repairs via phone, email, or your preferred portal",
    },
    {
      number: "02",
      title: "Assessment & Scheduling",
      description: "We assess priority and schedule appointments within SLA targets",
    },
    {
      number: "03",
      title: "Attendance & Repair",
      description: "Uniformed operatives attend with right-first-time approach",
    },
    {
      number: "04",
      title: "Quality Check & Reporting",
      description: "Post-work QA checks with comprehensive reporting and documentation",
    },
  ]

  // <CHANGE> Softened FAQ answers
  const faqs = [
    {
      question: "What areas do you cover?",
      answer:
        "We provide property maintenance services across North, East, and South London, serving housing associations, local councils, and managing agents throughout the region.",
    },
    {
      question: "Do you work with housing providers?",
      answer:
        "Yes, Shirka works with housing associations and local authorities across London, delivering responsive repairs, planned maintenance, and compliance works.",
    },
    {
      question: "What are your response times?",
      answer:
        "We operate tiered SLAs: Emergency (2-4 hours), Urgent (24 hours), Routine (5-7 days). We aim for fast response times with reliable scheduling.",
    },
    {
      question: "Do you provide out-of-hours services?",
      answer:
        "Yes, our 24/7 emergency line ensures round-the-clock support for urgent repairs and emergency callouts across all our service areas.",
    },
    {
      question: "How do you ensure compliance?",
      answer:
        "We maintain compliance through Gas Safe engineers, NICEIC electrical approval, quality management systems, and comprehensive insurance coverage with detailed reporting.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-maintenance.png)" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white border-0 mb-4">Property Maintenance</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted Maintenance for
            <span className="block text-red-600">{"London's Social Housing"}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Delivering responsive repairs, planned maintenance, and compliance services to housing associations,
            councils, and managing agents across London.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">
                Request Commercial Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              {/* <CHANGE> Use company constant */}
              <Link href={getPhoneLink()}>
                <Phone className="mr-2 h-5 w-5" />
                {PRIMARY_PHONE_DISPLAY}
              </Link>
            </Button>
          </div>

          {/* <CHANGE> Softened key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">Fast</div>
              <div className="text-sm text-gray-300">Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">Reliable</div>
              <div className="text-sm text-gray-300">Scheduling</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">Quality</div>
              <div className="text-sm text-gray-300">Workmanship</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">24/7</div>
              <div className="text-sm text-gray-300">Emergency Line</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold tracking-wide uppercase">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-red-600">Maintenance Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From reactive repairs to planned maintenance programs, we deliver quality service across all trades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-600 p-3 w-fit mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Safety */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
                <span className="text-xs font-semibold tracking-wide uppercase">Compliance & Safety</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fully Accredited & <span className="text-red-600">Compliant</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive accreditations and certifications ensure we meet high standards for social
                housing maintenance and repairs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {complianceItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* <CHANGE> Softened stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">Full</div>
                  <div className="text-sm text-gray-600">Liability Cover</div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">Accredited</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <FileCheck className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">Compliant</div>
                  <div className="text-sm text-gray-600">Standards</div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">Experienced</div>
                  <div className="text-sm text-gray-600">Team</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold tracking-wide uppercase">Trusted Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Working With <span className="text-red-600">Housing Providers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              {"We work with housing associations and local authorities across London"}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* <CHANGE> Softened platform claims */}
          <div className="bg-gray-50 p-8 text-center max-w-3xl mx-auto">
            <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Trusted Contractor</h3>
            <p className="text-gray-600">
              We work with various housing platforms and providers, delivering seamless integration with your existing
              systems and workflows, ensuring efficient job management and reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Process & SLA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold tracking-wide uppercase">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, <span className="text-red-600">Efficient Workflow</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial contact to completion, we ensure smooth delivery with clear communication every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-red-600 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-red-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Level Agreements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50">
                <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">Emergency</div>
                <div className="text-2xl font-bold text-red-600">2-4 hrs</div>
              </div>
              <div className="text-center p-4 bg-red-50">
                <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">Urgent</div>
                <div className="text-2xl font-bold text-red-600">24 hrs</div>
              </div>
              <div className="text-center p-4 bg-red-50">
                <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">Routine</div>
                <div className="text-2xl font-bold text-red-600">5-7 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold tracking-wide uppercase">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Aske\
