import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, FileText, Calendar, Wrench, CheckCircle, ArrowRight } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: Phone,
      title: "Initial Contact",
      description:
        "Reach out by phone, email, or form — we're quick to respond, clear on next steps, and ready to help.",
      details: ["Free consultation", "24/7 callout line", "Clear communication"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Assessment & Quote",
      description:
        "We carry out a thorough site visit and send you a straightforward, transparent quote. No fluff, no surprises.",
      details: ["Site inspection", "Breakdown by trade", "Fully costed proposals"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calendar,
      title: "Scheduling",
      description:
        "We plan works around your availability, keeping disruption to a minimum — especially where tenants are involved.",
      details: ["Flexible timing", "Coordination with all parties", "Tenant-first scheduling"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Wrench,
      title: "Professional Delivery",
      description: "Our trusted team completes the job with care, quality and compliance — every time.",
      details: ["Skilled tradespeople", "Safety-focused", "Quality assured materials"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: CheckCircle,
      title: "Sign-Off & Aftercare",
      description:
        "Once works are complete, we carry out quality checks and provide aftercare as needed — we're still here if anything comes up.",
      details: ["Client sign-off", "Post-work check-ins", "Work guaranteed"],
      color: "from-yellow-500 to-yellow-600",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#a50021" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We <span className="text-red-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A clear, reliable process — built for responsive repairs, long-term trust, and minimal disruption.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 via-red-500 to-yellow-500 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Node */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Card */}
                <Card
                  className={`mt-24 group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200 ${index % 2 === 0 ? "mb-8" : "mt-8"}`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-sm font-bold text-red-600 mb-2">STEP {index + 1}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                    </div>

                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300"></div>}

              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <Card className="flex-1 group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-sm font-bold text-red-600 mb-2">STEP {index + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>

                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's make property maintenance seamless. Reach out today — we'll listen, advise, and handle the rest.
            </h3>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
