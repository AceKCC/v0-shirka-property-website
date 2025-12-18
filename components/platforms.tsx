import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Users, CheckCircle } from "lucide-react"

export function Platforms() {
  const workingMethods = [
    {
      name: "Direct Instruction",
      description: "Direct partnerships with housing associations for comprehensive maintenance contracts",
      logo: "/images/direct-partnership.png",
      benefits: ["Dedicated account management", "Tailored service delivery", "Direct communication"],
    },
    {
      name: "Third-Party Portals",
      description: "Seamless integration with housing management systems and repair portals",
      logo: "/images/portal-integration.png",
      benefits: ["System integration", "Automated workflows", "Real-time updates"],
    },
    {
      name: "Emergency Response",
      description: "24/7 emergency callout services for urgent maintenance requirements",
      logo: "/images/emergency-response.png",
      benefits: ["Rapid response", "Out-of-hours availability", "Priority scheduling"],
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured & Certified",
      description: "All operatives carry full insurance, ID cards, and professional certifications",
    },
    {
      icon: Star,
      title: "Professional Service",
      description: "Consistent service delivery with transparent pricing",
    },
    {
      icon: Users,
      title: "Tenant-Focused Approach",
      description: "Professional, uniformed operatives providing sensitive, respectful service",
    },
    {
      icon: CheckCircle,
      title: "Clear Communication",
      description: "Transparent pricing structure and regular updates throughout projects",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flexible <span className="text-red-600">Working Partnerships</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether through direct instruction or third-party portals, our engineers operate with professionalism, clear
            communication, and tenant sensitivity across all engagement models.
          </p>
        </div>

        {/* Working Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {workingMethods.map((method, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={method.logo || "/placeholder.svg"}
                    alt={`${method.name} approach`}
                    className="h-16 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{method.description}</p>

                <div className="space-y-2">
                  {method.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Housing Providers Choose Shirka</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to professional service delivery and housing sector expertise makes us a trusted
              maintenance partner for London's housing providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
              Partner with Shirka
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
