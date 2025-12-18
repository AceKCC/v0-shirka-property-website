"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Home, ArrowRight, CheckCircle } from "lucide-react"

export function PathSelector() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
            <span className="text-xs font-semibold tracking-wide uppercase">Choose Your Service Path</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Can We <span className="text-red-600">Help You Today?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select the service that best matches your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Property Maintenance Card */}
          <Link href="/property-maintenance" className="group">
            <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-600">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-red-600 p-4 w-fit mb-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Property Maintenance</h3>
                  <p className="text-red-600 font-medium mb-4">For Social Housing & Managing Agents</p>
                  <p className="text-gray-600 mb-6">
                    Comprehensive maintenance services for housing associations, councils, and property managers with
                    full compliance and quality assurance.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Works with major housing providers</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Full compliance & safety certifications</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>24/7 responsive repairs</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Planned & reactive maintenance</span>
                  </div>
                </div>

                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Private Works Card */}
          <Link href="/private-works" className="group">
            <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-600">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-red-600 p-4 w-fit mb-4">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Private Works</h3>
                  <p className="text-red-600 font-medium mb-4">For Homeowners & Private Landlords</p>
                  <p className="text-gray-600 mb-6">
                    Expert construction and renovation services including extensions, loft conversions, and complete
                    property transformations.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Extensions & loft conversions</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete renovations</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Brickwork & structural work</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Free quotes & consultations</span>
                  </div>
                </div>

                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
