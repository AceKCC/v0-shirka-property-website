"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Droplets, Shield, Wrench, Clock, Star, CheckCircle } from "lucide-react"

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: "Internal Repairs",
      subtitle: "Expert craftsmanship across interiors",
      description: "Carpentry, plastering, decorating, and all-round responsive repair work.",
      details: [
        "Carpentry & joinery works",
        "Plastering & patch repairs",
        "Internal decorating",
        "Kitchen & bathroom repairs",
        "Door & window maintenance",
        "Flooring installation",
      ],
      image: "/images/internal-repairs.png",
      price: "£45/hr",
      response: "Same day",
      rating: "4.9",
    },
    {
      title: "Plumbing Works",
      subtitle: "From urgent leaks to full system installs",
      description: "Our plumbing solutions keep homes flowing safely.",
      details: [
        "Emergency leak repairs",
        "Boiler servicing & repair",
        "Bathroom & kitchen plumbing",
        "Drainage & waste systems",
        "Water system installations",
        "Preventive maintenance",
      ],
      image: "/images/plumbing-works.png",
      price: "£55/hr",
      response: "2 hours",
      rating: "4.8",
    },
    {
      title: "Damp & Mould",
      subtitle: "Safeguarding homes with thorough care",
      description: "Damp detection, mould remediation, and long-term prevention.",
      details: [
        "Professional damp surveys",
        "Mould removal & treatment",
        "Ventilation improvements",
        "Waterproofing solutions",
        "Ongoing monitoring",
        "Health protection measures",
      ],
      image: "/images/damp-mould.png",
      price: "£200/job",
      response: "24 hours",
      rating: "4.9",
    },
    {
      title: "Responsive Repairs",
      subtitle: "When urgency strikes, we attend fast",
      description: "Multi-trade teams with tenant-friendly booking and live tracking.",
      details: [
        "24/7 emergency callouts",
        "Multi-trade repair teams",
        "Tenant-friendly booking",
        "Real-time job tracking",
        "Quality assurance",
        "Compliance reporting",
      ],
      image: "/images/responsive-repairs.png",
      price: "£65/call",
      response: "4 hours",
      rating: "4.7",
    },
  ]

  return (
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      {/* Swallow Background Elements */}
      <div className="absolute top-10 left-20 opacity-5">
        <img src="/images/swallow-logo.png" alt="" className="w-28 h-28 transform rotate-45" />
      </div>
      <div className="absolute bottom-10 right-20 opacity-5">
        <img src="/images/swallow-logo.png" alt="" className="w-24 h-24 transform -rotate-30 scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
            <span className="text-xs font-semibold tracking-wide uppercase">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shaping Homes with <span className="text-red-600">Care & Craft</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialist maintenance services delivered with precision and empathy across London's housing sector.
          </p>
          {/* Small swallow accent near header */}
          <div className="absolute -top-4 right-1/4 opacity-10">
            <img src="/images/swallow-logo.png" alt="" className="w-12 h-12" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-96"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* Swallow accent on service cards */}
              <div className="absolute top-4 right-4 opacity-20">
                <img src="/images/swallow-logo.png" alt="" className="w-6 h-6 filter brightness-0 invert" />
              </div>

              {/* Default State - Compact Info */}
              <div
                className={`absolute inset-0 p-6 flex flex-col justify-between text-white transition-all duration-500 ${
                  hoveredService === index ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {/* Top Section */}
                <div>
                  <div className="bg-red-600 p-3 w-fit mb-4">
                    {index === 0 && <Home className="h-6 w-6" />}
                    {index === 1 && <Droplets className="h-6 w-6" />}
                    {index === 2 && <Shield className="h-6 w-6" />}
                    {index === 3 && <Wrench className="h-6 w-6" />}
                  </div>
                  <Badge className="bg-white/20 text-white border-0 mb-3">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {service.rating}/5
                  </Badge>
                </div>

                {/* Bottom Section */}
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-red-300 text-sm font-medium mb-2">{service.subtitle}</p>
                  <p className="text-gray-200 text-sm mb-4">{service.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <div className="font-bold">{service.price}</div>
                      <div className="text-gray-300 text-xs">Starting from</div>
                    </div>
                    <div className="text-sm text-right">
                      <div className="font-bold">{service.response}</div>
                      <div className="text-gray-300 text-xs">Response</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover State - Detailed Info */}
              <div
                className={`absolute inset-0 p-6 bg-white/95 backdrop-blur-sm transition-all duration-500 ${
                  hoveredService === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-red-600 p-2">
                        {index === 0 && <Home className="h-5 w-5 text-white" />}
                        {index === 1 && <Droplets className="h-5 w-5 text-white" />}
                        {index === 2 && <Shield className="h-5 w-5 text-white" />}
                        {index === 3 && <Wrench className="h-5 w-5 text-white" />}
                      </div>
                      <Badge className="bg-red-100 text-red-600 border-0">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.response}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-red-600 text-sm font-medium">{service.subtitle}</p>
                  </div>

                  {/* Details List */}
                  <div className="flex-1 mb-4">
                    <div className="grid grid-cols-1 gap-1">
                      {service.details.slice(0, 4).map((detail, idx) => (
                        <div key={idx} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                      {service.details.length > 4 && (
                        <div className="text-xs text-gray-500 mt-1">+{service.details.length - 4} more services</div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm mb-3">
                      <span className="font-bold text-gray-900">{service.price}</span>
                      <span className="text-red-600 font-medium">★ {service.rating}/5</span>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2">
                      Get Quote
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="text-white p-8 relative bg-neutral-800">
          {/* Swallow accent in stats section */}
          <div className="absolute top-4 left-8 opacity-10">
            <img src="/images/swallow-logo.png" alt="" className="w-8 h-8 filter brightness-0 invert" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Planned or Reactive—We've Got You Covered</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              From one-off jobs to ongoing contracts, we adapt to your needs with a single point of contact.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
