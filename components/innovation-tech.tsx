"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Cpu, Zap, Shield, ArrowRight, Play, Pause } from "lucide-react"

export function InnovationTech() {
  const [activeTab, setActiveTab] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const technologies = [
    {
      icon: Smartphone,
      title: "Mobile Technology",
      subtitle: "Real-time Updates",
      image: "/placeholder.svg?height=800&width=1200&text=Mobile+Technology",
      description:
        "Our custom mobile app provides real-time job tracking, instant communication, and digital reporting for complete transparency.",
      features: [
        "Live job tracking and updates",
        "Digital work orders and signatures",
        "Photo documentation and reporting",
        "Client communication portal",
      ],
      stats: { efficiency: "40%", satisfaction: "95%", response: "50%" },
    },
    {
      icon: Cpu,
      title: "IoT Monitoring",
      subtitle: "Smart Building Systems",
      image: "/placeholder.svg?height=800&width=1200&text=IoT+Monitoring",
      description:
        "Internet of Things sensors monitor building systems 24/7, predicting maintenance needs before issues occur.",
      features: [
        "Predictive maintenance alerts",
        "Energy consumption monitoring",
        "Environmental condition tracking",
        "Automated reporting systems",
      ],
      stats: { efficiency: "60%", satisfaction: "90%", response: "75%" },
    },
    {
      icon: Zap,
      title: "Energy Management",
      subtitle: "Sustainable Solutions",
      image: "/placeholder.svg?height=800&width=1200&text=Energy+Management",
      description:
        "Advanced energy management systems optimize building performance while reducing environmental impact and costs.",
      features: [
        "Smart HVAC optimization",
        "LED lighting automation",
        "Solar panel integration",
        "Carbon footprint tracking",
      ],
      stats: { efficiency: "50%", satisfaction: "88%", response: "65%" },
    },
    {
      icon: Shield,
      title: "Security Systems",
      subtitle: "Advanced Protection",
      image: "/placeholder.svg?height=800&width=1200&text=Security+Systems",
      description: "State-of-the-art security systems with AI-powered monitoring and instant alert capabilities.",
      features: [
        "AI-powered surveillance",
        "Access control systems",
        "Intrusion detection",
        "Emergency response integration",
      ],
      stats: { efficiency: "70%", satisfaction: "92%", response: "80%" },
    },
  ]

  return (
    <section className="py-0 bg-gray-900">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=Technology+Innovation')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        {/* Video Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors group"
          >
            {isVideoPlaying ? (
              <Pause className="h-10 w-10 text-white" />
            ) : (
              <Play className="h-10 w-10 text-white ml-1" />
            )}
          </button>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-24">
          <div className="text-white max-w-4xl">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Innovation & Technology
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Future-Ready <span className="text-red-400">Solutions</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Leveraging cutting-edge technology to deliver smarter, more efficient property maintenance solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {technologies.map((tech, index) => {
              const TabIcon = tech.icon
              return (
                <Button
                  key={index}
                  variant={activeTab === index ? "default" : "outline"}
                  onClick={() => setActiveTab(index)}
                  className={`transition-all duration-300 ${
                    activeTab === index
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border-red-200 text-red-600 hover:bg-red-50"
                  }`}
                >
                  <TabIcon className="mr-2 h-4 w-4" />
                  {tech.title}
                </Button>
              )
            })}
          </div>

          {/* Active Technology Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={technologies[activeTab].image || "/placeholder.svg"}
                alt={technologies[activeTab].title}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Badge className="absolute top-6 left-6 bg-red-600 text-white">{technologies[activeTab].subtitle}</Badge>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                  {(() => {
                    const ActiveIcon = technologies[activeTab].icon
                    return <ActiveIcon className="h-8 w-8 text-red-600" />
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{technologies[activeTab].title}</h3>
                  <p className="text-red-600 font-medium">{technologies[activeTab].subtitle}</p>
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{technologies[activeTab].description}</p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                <div className="space-y-3">
                  {technologies[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    +{technologies[activeTab].stats.efficiency}
                  </div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {technologies[activeTab].stats.satisfaction}
                  </div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">+{technologies[activeTab].stats.response}</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Timeline */}
      <div
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1920&text=Innovation+Timeline')" }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">Innovation Roadmap</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to innovation drives continuous improvement in property maintenance technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                title: "AI-Powered Diagnostics",
                description: "Machine learning algorithms for predictive maintenance and fault detection.",
                status: "Active",
              },
              {
                year: "2025",
                title: "Drone Inspections",
                description: "Automated drone surveys for roof and facade inspections.",
                status: "Development",
              },
              {
                year: "2026",
                title: "AR Maintenance",
                description: "Augmented reality guidance for complex maintenance procedures.",
                status: "Planning",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <Badge
                    className={`mb-4 ${
                      item.status === "Active"
                        ? "bg-green-600"
                        : item.status === "Development"
                          ? "bg-yellow-600"
                          : "bg-blue-600"
                    } text-white`}
                  >
                    {item.status}
                  </Badge>
                  <div className="text-3xl font-bold text-red-400 mb-2">{item.year}</div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">Experience the Future Today</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Discover how our innovative technology solutions can transform your property maintenance experience.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent px-8 py-4"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
