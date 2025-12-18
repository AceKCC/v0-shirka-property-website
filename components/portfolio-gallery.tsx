"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, ExternalLink } from "lucide-react"

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "heritage", label: "Heritage" },
    { id: "industrial", label: "Industrial" },
  ]

  const projects = [
    {
      id: 1,
      title: "Office Complex Maintenance Program",
      category: "commercial",
      location: "London, UK",
      image: "/placeholder.svg?height=600&width=800&text=Office+Maintenance",
      description:
        "Comprehensive planned maintenance program for 50,000 sq ft office complex including HVAC, electrical, and building systems.",
      year: "2024",
      value: "£450K",
    },
    {
      id: 2,
      title: "Heritage Building Care Contract",
      category: "heritage",
      location: "Bath, UK",
      image: "/placeholder.svg?height=600&width=800&text=Heritage+Maintenance",
      description:
        "Specialist maintenance services for Grade II listed Victorian building preserving historical integrity.",
      year: "2023",
      value: "£280K",
    },
    {
      id: 3,
      title: "Residential Estate Maintenance",
      category: "residential",
      location: "Manchester, UK",
      image: "/placeholder.svg?height=600&width=800&text=Residential+Maintenance",
      description: "Ongoing maintenance services for 200-unit residential development including emergency response.",
      year: "2024",
      value: "£320K",
    },
    {
      id: 4,
      title: "Manufacturing Facility Upkeep",
      category: "industrial",
      location: "Birmingham, UK",
      image: "/placeholder.svg?height=600&width=800&text=Industrial+Maintenance",
      description: "Industrial facility maintenance including specialized equipment servicing and safety compliance.",
      year: "2023",
      value: "£510K",
    },
    {
      id: 5,
      title: "Retail Center Maintenance",
      category: "commercial",
      location: "Leeds, UK",
      image: "/placeholder.svg?height=600&width=800&text=Retail+Maintenance",
      description:
        "Complete maintenance services for retail space including lighting, HVAC, and accessibility systems.",
      year: "2024",
      value: "£380K",
    },
    {
      id: 6,
      title: "University Campus Care",
      category: "heritage",
      location: "Oxford, UK",
      image: "/placeholder.svg?height=600&width=800&text=University+Maintenance",
      description: "Ongoing maintenance of historic university buildings with modern efficiency standards.",
      year: "2023",
      value: "£650K",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-0 bg-white">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1920&text=Maintenance+Portfolio')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Maintenance <span className="text-red-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our diverse portfolio of successful maintenance contracts across commercial, residential,
              heritage, and industrial sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 py-6">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-red-200 text-red-600 hover:bg-red-50"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden aspect-square cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <Badge variant="secondary" className="bg-red-600 text-white border-0 mb-4 w-fit">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-medium">{project.location}</div>
                      <div className="text-gray-400">{project.year}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-400">{project.value}</div>
                      <div className="text-gray-400">Annual Value</div>
                    </div>
                  </div>
                </div>

                {/* Hover Actions */}
                <div
                  className={`absolute top-8 right-8 flex space-x-2 transition-all duration-500 ${
                    hoveredProject === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Maintenance Program?</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join our portfolio of satisfied clients. Let's discuss how we can maintain your property to the highest
            standards.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent px-8 py-4"
          >
            Get Maintenance Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
