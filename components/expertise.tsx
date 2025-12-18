import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, Users, Award, Shield, MapPin } from "lucide-react"

export function Expertise() {
  const capabilities = [
    {
      icon: Home,
      title: "Housing Sector Specialists",
      description: "Dedicated expertise in social housing, general needs, and temporary accommodation maintenance.",
    },
    {
      icon: Users,
      title: "Tenant-Focused Service",
      description: "Professional, uniformed operatives with ID cards providing sensitive, respectful service delivery.",
    },
    {
      icon: Award,
      title: "Professional Delivery",
      description: "Consistent service delivery with transparent pricing and clear communication.",
    },
    {
      icon: Shield,
      title: "Fully Insured Operations",
      description:
        "Comprehensive insurance coverage with all operatives carrying full identification and certification.",
    },
    {
      icon: MapPin,
      title: "London-Wide Coverage",
      description: "Complete coverage across all London boroughs with local knowledge and rapid response.",
    },
    {
      icon: CheckCircle,
      title: "Multi-Trade Workforce",
      description: "Skilled technicians covering plumbing, carpentry, plastering, and specialist remediation works.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by London's <span className="text-red-600">Housing Providers</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With extensive experience in London's housing sector, Shirka delivers professional maintenance services
              that housing associations and property managers rely on. Our multi-trade approach ensures comprehensive
              solutions with minimal disruption to tenants.
            </p>
            <div className="space-y-4">
              {[
                "Over 1,500 properties successfully serviced",
                "High attendance rate consistently achieved",
                "Significant maintenance works delivered",
                "Trusted by multiple housing associations",
                "Coverage across London boroughs",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-gray-200 hover:border-red-200 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                    <capability.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
