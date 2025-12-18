"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, CheckCircle, Star, Zap, Users } from "lucide-react"

export function Certifications() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      subtitle: "Quality Management",
      description:
        "Certified quality management system ensuring consistent service delivery and continuous improvement.",
      color: "from-blue-500 to-blue-600",
      badge: "Quality Assured",
    },
    {
      icon: CheckCircle,
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      description: "Environmental management certification demonstrating our commitment to sustainable practices.",
      color: "from-green-500 to-green-600",
      badge: "Eco-Friendly",
    },
    {
      icon: Award,
      title: "CHAS Approved",
      subtitle: "Health & Safety",
      description: "Contractors Health and Safety Assessment Scheme approval for exceptional safety standards.",
      color: "from-red-500 to-red-600",
      badge: "Safety First",
    },
    {
      icon: Star,
      title: "SafeContractor",
      subtitle: "Safety Accreditation",
      description: "Leading health and safety assessment scheme recognition for construction and maintenance.",
      color: "from-purple-500 to-purple-600",
      badge: "Accredited",
    },
    {
      icon: Zap,
      title: "NICEIC Approved",
      subtitle: "Electrical Safety",
      description: "National Inspection Council for Electrical Installation Contracting certification.",
      color: "from-yellow-500 to-yellow-600",
      badge: "Electrical Expert",
    },
    {
      icon: Users,
      title: "Constructionline",
      subtitle: "Supplier Verification",
      description: "Government-approved supplier database registration for public and private sector work.",
      color: "from-indigo-500 to-indigo-600",
      badge: "Verified Supplier",
    },
  ]

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Certifications & Accreditations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted & <span className="text-red-400">Certified</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications and accreditations, ensuring
            you receive the highest quality service every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8 relative">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {cert.badge}
                  </Badge>
                </div>

                {/* Icon */}
                <div className={`mb-6 relative`}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} p-4 transform transition-transform duration-500 ${
                      hoveredCard === index ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-red-400 font-medium mb-4">{cert.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} transform transition-transform duration-500 ${
                    hoveredCard === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Certifications" },
            { number: "25+", label: "Years Certified" },
            { number: "100%", label: "Compliance Rate" },
            { number: "0", label: "Safety Incidents" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
