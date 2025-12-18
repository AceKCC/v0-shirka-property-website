"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, TrendingUp } from "lucide-react"

export function BeforeAfter() {
  const [activeSlide, setActiveSlide] = useState(0)

  const transformations = [
    {
      title: "HVAC System Overhaul",
      location: "Central London Office",
      duration: "6 months",
      beforeImage: "/placeholder.svg?height=800&width=1200&text=HVAC+Before",
      afterImage: "/placeholder.svg?height=800&width=1200&text=HVAC+After",
      description:
        "Complete HVAC system maintenance and upgrade program, replacing aging components and implementing smart controls for improved efficiency and reliability.",
      improvements: [
        "Replaced aging air handling units",
        "Installed smart temperature controls",
        "Improved air quality systems",
        "Reduced energy consumption by 40%",
      ],
      stats: {
        energySaving: "40%",
        timeframe: "6 months",
        value: "£180K",
      },
    },
    {
      title: "Electrical System Maintenance",
      location: "Manchester Retail Complex",
      duration: "4 months",
      beforeImage: "/placeholder.svg?height=800&width=1200&text=Electrical+Before",
      afterImage: "/placeholder.svg?height=800&width=1200&text=Electrical+After",
      description:
        "Comprehensive electrical maintenance program including panel upgrades, LED lighting installation, and emergency lighting system improvements.",
      improvements: [
        "Upgraded electrical distribution panels",
        "Installed LED lighting throughout",
        "Enhanced emergency lighting systems",
        "Improved power efficiency by 35%",
      ],
      stats: {
        energySaving: "35%",
        timeframe: "4 months",
        value: "£120K",
      },
    },
    {
      title: "Building Fabric Restoration",
      location: "Birmingham Heritage Building",
      duration: "8 months",
      beforeImage: "/placeholder.svg?height=800&width=1200&text=Building+Before",
      afterImage: "/placeholder.svg?height=800&width=1200&text=Building+After",
      description:
        "Specialist maintenance and restoration of building fabric including roof repairs, window refurbishment, and facade cleaning while preserving historical character.",
      improvements: [
        "Roof maintenance and waterproofing",
        "Window restoration and draught-proofing",
        "Facade cleaning and repointing",
        "Improved thermal efficiency by 30%",
      ],
      stats: {
        energySaving: "30%",
        timeframe: "8 months",
        value: "£250K",
      },
    },
  ]

  return (
    <section className="py-0 bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1920&text=Maintenance+Transformation')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Maintenance Transformations
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Before & <span className="text-red-400">After</span>
            </h2>
            <p className="text-xl text-gray-300">
              See the remarkable improvements achieved through our professional maintenance programs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {transformations.map((transformation, index) => (
              <Button
                key={index}
                variant={activeSlide === index ? "default" : "outline"}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-300 ${
                  activeSlide === index
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-red-200 text-red-600 hover:bg-red-50"
                }`}
              >
                {transformation.title.split(" ")[0]} {transformation.title.split(" ")[1]}
              </Button>
            ))}
          </div>

          {/* Active Transformation */}
          <div className="space-y-16">
            {transformations.map((transformation, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeSlide === index ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                {/* Before/After Images */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Before */}
                  <Card className="overflow-hidden group">
                    <div className="relative">
                      <img
                        src={transformation.beforeImage || "/placeholder.svg"}
                        alt="Before maintenance"
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-gray-800 text-white">BEFORE</Badge>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm opacity-90">Original condition</p>
                      </div>
                    </div>
                  </Card>

                  {/* After */}
                  <Card className="overflow-hidden group">
                    <div className="relative">
                      <img
                        src={transformation.afterImage || "/placeholder.svg"}
                        alt="After maintenance"
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">AFTER</Badge>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm opacity-90">Maintained & improved</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Description */}
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{transformation.title}</h3>

                    <div className="flex items-center space-x-6 mb-6 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-red-600" />
                        {transformation.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-red-600" />
                        {transformation.duration}
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{transformation.description}</p>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Maintenance Improvements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {transformation.improvements.map((improvement, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{improvement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div>
                    <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-6">Project Impact</h4>

                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">
                              {transformation.stats.energySaving}
                            </div>
                            <div className="text-sm text-gray-600 flex items-center justify-center">
                              <TrendingUp className="h-4 w-4 mr-1" />
                              Energy Savings
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">{transformation.stats.timeframe}</div>
                            <div className="text-sm text-gray-600 flex items-center justify-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Completion Time
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">{transformation.stats.value}</div>
                            <div className="text-sm text-gray-600">Maintenance Investment</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1920&text=Maintenance+CTA')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you improve your property's performance with our expert maintenance services.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
            Start Your Maintenance Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
