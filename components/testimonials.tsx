"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      content:
        "SHIRKA are responsive, professional, and always easy to work with — especially on damp and plumbing works.",
      name: "Property Manager",
      company: "Housing Association",
      rating: 5,
    },
    {
      content:
        "The engineers are always polite and leave homes clean. As a tenant, I've had nothing but positive experiences.",
      name: "Sarah M.",
      company: "Tenant",
      rating: 5,
    },
    {
      content: "We've used Shirka across multiple void refurbishments — fast, well-managed, and reliable every time.",
      name: "Operations Manager",
      company: "Property Developer",
      rating: 5,
    },
    {
      content: "Working with Shirka means fewer callbacks and better tenant satisfaction — exactly what we need.",
      name: "Asset Manager",
      company: "Local Authority",
      rating: 5,
    },
    {
      content: "Their multi-trade approach saves us time and coordination headaches. One call, multiple solutions.",
      name: "Facilities Manager",
      company: "Commercial Property",
      rating: 5,
    },
    {
      content: "Consistent quality across all our London properties. Their team understands our standards perfectly.",
      name: "Regional Director",
      company: "Housing Group",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-red-600">Property Professionals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From housing associations to developers and facilities managers, our clients consistently commend our
            attention to detail, reliability, and tenant-first approach.
          </p>
        </div>

        {/* Testimonials Grid - Fixed Height with Scroll */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pr-2" style={{ maxHeight: "400px" }}>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-6 w-6 text-red-600 opacity-60" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Content */}
                  <blockquote className="text-gray-700 mb-4 leading-relaxed text-sm italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-red-600 text-xs font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-4">
            <div className="text-xs text-gray-400 flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
              Scroll to see more testimonials
              <div className="w-1 h-1 bg-gray-400 rounded-full ml-2"></div>
            </div>
          </div>
        </div>

        {/* Summary Stats - Softened claims */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">High</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">1,500+</div>
              <div className="text-sm text-gray-600">Properties Maintained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">Multiple</div>
              <div className="text-sm text-gray-600">Housing Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
