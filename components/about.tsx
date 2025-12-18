import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, MapPin, TrendingUp, ArrowRight, Shield, CheckCircle } from "lucide-react"

export function About() {
  const stats = [
    { icon: TrendingUp, label: "Value of Works Delivered", value: "£500K+" },
    { icon: Award, label: "Responsive Attendance", value: "90-95%" },
    { icon: Users, label: "Homes Maintained", value: "1,500+" },
    { icon: MapPin, label: "London Boroughs", value: "All Areas" },
  ]

  const whyChooseShirka = [
    {
      icon: Shield,
      title: "Fully Insured & Certified",
      description: "All operatives carry comprehensive insurance, professional ID, and relevant certifications.",
    },
    {
      icon: CheckCircle,
      title: "SLA Compliant Service",
      description: "Reliable performance with SLA-aligned service and transparent, zero-rated VAT pricing.",
    },
    {
      icon: Users,
      title: "Professional Standards",
      description: "Uniformed, ID-carrying engineers trained in tenant-sensitive service delivery.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Trusted by major housing associations, backed by consistently high performance metrics.",
    },
  ]

  const valuePillars = [
    {
      title: "Reliable Maintenance",
      description: "Jobs attended and completed with professionalism and pride.",
    },
    {
      title: "Clear Communication",
      description: "Respectful, transparent interactions with tenants, clients and partners.",
    },
    {
      title: "Consistent Delivery",
      description: "A service standard that doesn't fluctuate — no matter the job or postcode.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Swallow Background Elements */}
      <div className="absolute top-20 right-10 opacity-5">
        <img src="/images/swallow-logo.png" alt="" className="w-32 h-32 transform rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5">
        <img src="/images/swallow-logo.png" alt="" className="w-24 h-24 transform -rotate-12 scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Intro/Overview Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Shirka
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built on Trust. <span className="text-red-600">Powered by Care.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            At Shirka Property Maintenance, dependable service is more than a promise — it's our practice. From reactive
            tenant repairs to large-scale void works and developer aftercare, we deliver with consistency, communication
            and care.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We serve housing providers, local authorities and property professionals with a clear focus: safe homes,
            satisfied residents, and streamlined delivery.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            Make an Enquiry
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-red-100 hover:border-red-200 transition-colors">
              <CardContent className="p-8">
                <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* We Deliver More Than Fixes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">We Deliver More Than Fixes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, index) => (
              <Card key={index} className="text-center border-red-100 hover:border-red-200 transition-colors">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* About Us - Shaping Better Living */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            {/* Swallow accent near text */}
            <div className="absolute -top-8 -left-8 opacity-10">
              <img src="/images/swallow-logo.png" alt="" className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Shaping Better Living, One Repair at a Time</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Specialists in multi-trade maintenance, trusted by London's housing sector to deliver care-driven,
              professional service at every door.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We recognise the importance of tenant experience, regulatory compliance, and communication clarity. Our
              team adapts to each client's systems and expectations—bringing professionalism to every visit.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our multi-trade engineers operate across all London boroughs, delivering repairs, responsive callouts, and
              specialist works. Whether through direct instruction or third-party portals, we maintain reliable,
              consistent standards.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8 relative">
              {/* Small swallow in testimonial */}
              <div className="absolute top-4 right-4 opacity-20">
                <img src="/images/swallow-logo.png" alt="" className="w-8 h-8" />
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "SHIRKA are responsive, professional, and always easy to work with — especially on damp and plumbing
                works."
              </blockquote>
              <cite className="text-red-600 font-medium">— Property Manager, Housing Association</cite>
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-square rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url('/images/shirka-maintenance-team.png')`,
              }}
            ></div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">1,500+</div>
              <div className="text-sm">Homes Maintained</div>
            </div>
          </div>
        </div>

        {/* Why Choose Shirka */}
        <div className="relative">
          {/* Swallow accent for credentials section */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 opacity-5">
            <img src="/images/swallow-logo.png" alt="" className="w-20 h-20" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Shirka</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseShirka.map((item, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:border-red-200 transition-colors duration-300 relative"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  {/* Small swallow accent on cards */}
                  {index === 1 && (
                    <div className="absolute bottom-2 right-2 opacity-10">
                      <img src="/images/swallow-logo.png" alt="" className="w-6 h-6" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
