import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Building2, Hammer, Phone } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Victorian Terrace Extension",
      category: "Extensions",
      location: "Hackney, East London",
      image: "/images/internal-repairs.png",
      description: "Double-storey rear extension creating open-plan kitchen and additional bedroom",
      scope: "Extension, kitchen installation, structural work",
    },
    {
      title: "Loft Conversion - Master Suite",
      category: "Loft Extensions",
      location: "Islington, North London",
      image: "/images/responsive-repairs.png",
      description: "Dormer loft conversion with ensuite bathroom and fitted wardrobes",
      scope: "Loft conversion, dormer, bathroom, carpentry",
    },
    {
      title: "Period Property Restoration",
      category: "Renovations",
      location: "Greenwich, South London",
      image: "/images/plumbing-works.png",
      description: "Complete renovation of 1930s property with modern amenities",
      scope: "Full renovation, rewire, replumb, new kitchen/bathrooms",
    },
    {
      title: "Side Return Extension",
      category: "Extensions",
      location: "Walthamstow, East London",
      image: "/images/damp-mould.png",
      description: "Single-storey side return creating spacious kitchen-diner",
      scope: "Extension, bifold doors, underfloor heating",
    },
    {
      title: "Housing Association Voids",
      category: "Property Maintenance",
      location: "Various Locations, London",
      image: "/images/hero-maintenance.png",
      description: "Ongoing void turnaround service for major housing provider",
      scope: "Void works, repairs, decorating, compliance",
    },
    {
      title: "Townhouse Renovation",
      category: "Renovations",
      location: "Stratford, East London",
      image: "/images/internal-repairs.png",
      description: "Modern transformation of dated townhouse including basement",
      scope: "Full refurbishment, basement waterproofing, new systems",
    },
  ]

  const categories = ["All", "Extensions", "Loft Extensions", "Renovations", "Property Maintenance"]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-bg.png)" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white border-0 mb-4">Our Work</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-red-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our portfolio of completed projects across London, from property maintenance to major renovations
            and extensions.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-32 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div
                  className="h-64 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white border-0">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    {project.category === "Extensions" && (
                      <div className="bg-white p-2">
                        <Building2 className="h-5 w-5 text-red-600" />
                      </div>
                    )}
                    {project.category === "Loft Extensions" && (
                      <div className="bg-white p-2">
                        <Home className="h-5 w-5 text-red-600" />
                      </div>
                    )}
                    {project.category === "Renovations" && (
                      <div className="bg-white p-2">
                        <Hammer className="h-5 w-5 text-red-600" />
                      </div>
                    )}
                    {project.category === "Property Maintenance" && (
                      <div className="bg-white p-2">
                        <Home className="h-5 w-5 text-red-600" />
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-red-600 font-medium mb-3">{project.location}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-semibold">Scope:</span> {project.scope}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 group-hover:bg-red-50"
                  >
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              Load More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether it's property maintenance or a major renovation, we'd love to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="tel:08001234567">
                <Phone className="mr-2 h-5 w-5" />
                Call 0800 123 4567
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
