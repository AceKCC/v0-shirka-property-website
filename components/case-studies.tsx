import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"

export function CaseStudies() {
  const projects = [
    {
      title: "Notting Hill Genesis Partnership",
      location: "Multiple London Boroughs",
      duration: "Ongoing - 2+ years",
      team: "15 multi-trade operatives",
      description:
        "Comprehensive maintenance services across general needs and temporary housing portfolio, covering responsive repairs, planned maintenance, and specialist damp remediation works.",
      image: "/placeholder.svg?height=300&width=500&text=NHG+Partnership",
      category: "Social Housing",
      stats: {
        properties: "800+",
        attendance: "92%",
        satisfaction: "4.8/5",
      },
    },
    {
      title: "Sovereign Network Group Contract",
      location: "East & South London",
      duration: "Ongoing - 18 months",
      team: "12 specialist technicians",
      description:
        "Multi-trade maintenance contract focusing on plumbing works, internal repairs, and emergency response services across diverse housing stock.",
      image: "/placeholder.svg?height=300&width=500&text=Sovereign+Contract",
      category: "Housing Association",
      stats: {
        properties: "450+",
        attendance: "94%",
        satisfaction: "4.7/5",
      },
    },
    {
      title: "Home Group Maintenance Program",
      location: "North & Central London",
      duration: "Ongoing - 12 months",
      team: "10 certified operatives",
      description:
        "Specialized maintenance program covering damp and mould remediation, internal repairs, and tenant-sensitive service delivery across mixed housing portfolio.",
      image: "/placeholder.svg?height=300&width=500&text=Home+Group+Program",
      category: "Housing Provider",
      stats: {
        properties: "250+",
        attendance: "91%",
        satisfaction: "4.9/5",
      },
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Success with <span className="text-red-600">Housing Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our ongoing partnerships with London's leading housing providers, demonstrating our commitment to
            excellence in property maintenance and tenant satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-red-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-red-600" />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-red-600" />
                    {project.team}
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{project.stats.properties}</div>
                    <div className="text-xs text-gray-600">Properties</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{project.stats.attendance}</div>
                    <div className="text-xs text-gray-600">Attendance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{project.stats.satisfaction}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white group bg-transparent"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
            View All Partnerships
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
