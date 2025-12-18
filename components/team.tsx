"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

export function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Michael Harrison",
      position: "Managing Director",
      department: "Leadership",
      experience: "25+ Years",
      image: "/placeholder.svg?height=300&width=300&text=MH",
      bio: "Michael founded Shirka with a vision to revolutionize property maintenance standards. His leadership has driven the company's growth from a small local contractor to a leading UK maintenance specialist.",
      specialties: ["Strategic Planning", "Business Development", "Client Relations"],
      email: "m.harrison@shirka.co.uk",
      linkedin: "#",
    },
    {
      name: "Sarah Chen",
      position: "Operations Director",
      department: "Operations",
      experience: "18+ Years",
      image: "/placeholder.svg?height=300&width=300&text=SC",
      bio: "Sarah oversees all operational aspects of our services, ensuring seamless project delivery and maintaining our reputation for excellence across all sectors.",
      specialties: ["Project Management", "Quality Control", "Process Optimization"],
      email: "s.chen@shirka.co.uk",
      linkedin: "#",
    },
    {
      name: "David Rodriguez",
      position: "Technical Director",
      department: "Engineering",
      experience: "22+ Years",
      image: "/placeholder.svg?height=300&width=300&text=DR",
      bio: "David leads our technical teams and ensures all work meets the highest engineering standards. His expertise spans commercial, residential, and heritage property maintenance.",
      specialties: ["Technical Solutions", "Heritage Conservation", "Innovation"],
      email: "d.rodriguez@shirka.co.uk",
      linkedin: "#",
    },
    {
      name: "Emma Thompson",
      position: "Health & Safety Director",
      department: "Safety",
      experience: "15+ Years",
      image: "/placeholder.svg?height=300&width=300&text=ET",
      bio: "Emma maintains our exemplary safety record and ensures all team members return home safely every day. Her commitment to safety excellence is unwavering.",
      specialties: ["Safety Management", "Risk Assessment", "Training & Development"],
      email: "e.thompson@shirka.co.uk",
      linkedin: "#",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Leadership Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-red-600">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our experienced leadership team brings decades of expertise in property maintenance, ensuring exceptional
            service delivery across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <CardContent className="p-0 relative">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                      hoveredMember === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Social Links */}
                    <div
                      className={`absolute bottom-4 left-4 flex space-x-3 transition-all duration-500 ${
                        hoveredMember === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                    >
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Department Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-red-600 text-white border-0">
                      {member.department}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-gray-600">{member.experience} Experience</p>
                  </div>

                  {/* Bio - Shows on Hover */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      hoveredMember === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>

                    {/* Specialties */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-red-200 text-red-600">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Default Content - Shows when not hovered */}
                  <div
                    className={`transition-all duration-500 ${
                      hoveredMember === index ? "opacity-0 max-h-0" : "opacity-100 max-h-96"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.slice(0, 2).map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-gray-200 text-gray-600">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Team Members" },
              { number: "100+", label: "Years Combined Experience" },
              { number: "50+", label: "Qualified Specialists" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
