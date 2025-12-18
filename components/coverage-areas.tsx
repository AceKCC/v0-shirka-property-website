"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Users, ArrowRight } from "lucide-react"
import { PRIMARY_PHONE_DISPLAY, PRIMARY_EMAIL } from "@/lib/company"

export function CoverageAreas() {
  const [activeRegion, setActiveRegion] = useState(0)

  const regions = [
    {
      name: "North London",
      image: "/images/north-london.png",
      description: "Our engineers and coordinators work across boroughs to provide unified, high-quality delivery.",
      boroughs: ["Haringey", "Barnet", "Enfield", "Islington"],
      stats: {
        properties: "Multiple",
        response: "Fast",
        attendance: "Reliable",
      },
    },
    {
      name: "East London",
      image: "/images/east-london.png",
      description: "Expert maintenance services across East London's diverse communities.",
      boroughs: ["Hackney", "Newham", "Tower Hamlets", "Barking"],
      stats: {
        properties: "Multiple",
        response: "Fast",
        attendance: "Reliable",
      },
    },
    {
      name: "South London",
      image: "/images/south-london.png",
      description: "Reliable maintenance solutions across South London's varied housing landscape.",
      boroughs: ["Lambeth", "Southwark", "Lewisham", "and more"],
      stats: {
        properties: "Multiple",
        response: "Fast",
        attendance: "Reliable",
      },
    },
  ]

  return (
    <section className="py-0 bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          {regions.map((region, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                activeRegion === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${region.image})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <span className="inline-block bg-red-600 text-white px-4 py-2 text-sm font-medium mb-4">
              Coverage Areas
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Serving London, <span className="text-red-400">Seamlessly</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              Our engineers and coordinators work across boroughs to provide unified, high-quality delivery.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {regions.map((region, index) => (
                <Button
                  key={index}
                  variant={activeRegion === index ? "default" : "outline"}
                  onClick={() => setActiveRegion(index)}
                  className={`transition-all duration-300 ${
                    activeRegion === index
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                  }`}
                >
                  {region.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{regions[activeRegion].stats.properties}</div>
                <div className="text-sm text-gray-300">Properties Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{regions[activeRegion].stats.response}</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{regions[activeRegion].stats.attendance}</div>
                <div className="text-sm text-gray-300">Scheduling</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Region Information */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">{regions[activeRegion].name}</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{regions[activeRegion].description}</p>

              {/* Boroughs Served */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Area Blocks</h4>
                <div className="flex flex-wrap gap-3">
                  {regions[activeRegion].boroughs.map((borough, index) => (
                    <Badge key={index} variant="outline" className="border-red-200 text-red-600 px-3 py-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {borough}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">Get in Touch</h5>
                      <div className="flex items-center text-red-600 mb-2">
                        <Phone className="h-4 w-4 mr-2" />
                        <span className="font-medium">{PRIMARY_PHONE_DISPLAY}</span>
                      </div>
                      <div className="text-sm text-gray-600">{PRIMARY_EMAIL}</div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Get in Touch</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Cards - Softened */}
            <div className="space-y-6">
              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{regions[activeRegion].stats.properties}</div>
                  <div className="text-gray-600 font-medium">Properties Maintained</div>
                  <p className="text-sm text-gray-500 mt-2">Active maintenance contracts across the region</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{regions[activeRegion].stats.response}</div>
                  <div className="text-gray-600 font-medium">Response Times</div>
                  <p className="text-sm text-gray-500 mt-2">Emergency and urgent maintenance requests</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{regions[activeRegion].stats.attendance}</div>
                  <div className="text-gray-600 font-medium">Scheduling</div>
                  <p className="text-sm text-gray-500 mt-2">Consistent high attendance across all appointments</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/london-housing-coverage.png')" }}
      >
        <div className="absolute inset-0 bg-red-600/90" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            {"Join London's housing providers who trust Shirka for professional, reliable maintenance services."}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent px-8 py-4"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
