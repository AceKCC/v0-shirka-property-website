"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Shield, Users, Award, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Swallow Background Elements */}
      <div className="absolute top-16 right-16 opacity-5">
        <img src="/images/swallow-logo.png" alt="" className="w-32 h-32 transform rotate-12" />
      </div>
      <div className="absolute bottom-16 left-16 opacity-5">
        <img src="/images/swallow-logo.png" alt="" className="w-28 h-28 transform -rotate-45 scale-x-[-1]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 mb-4">
            <span className="text-xs font-semibold tracking-wide uppercase">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Talk <span className="text-red-600">Property Maintenance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a housing officer, asset manager or private landlord — we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="lg:col-span-2 shadow-lg border-gray-200">
            <CardContent className="p-8 relative">
              {/* Small swallow accent in form */}
              <div className="absolute top-6 right-6 opacity-10">
                <img src="/images/swallow-logo.png" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors">
                    <option>Service Required</option>
                    <option>Internal Repairs</option>
                    <option>Plumbing Works</option>
                    <option>Damp & Mould</option>
                    <option>Responsive Repairs</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors resize-none"
                ></textarea>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 flex-1">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Emergency */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-lg border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">0800 123 4567</div>
                      <div className="text-sm text-gray-600">Main Line</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">info@shirkamaintenance.co.uk</div>
                      <div className="text-sm text-gray-600">General Enquiries</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">London, UK</div>
                      <div className="text-sm text-gray-600">Covering North, East & South London</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Services */}
            <Card className="bg-red-600 text-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">24/7 Emergency Line</h3>
                <div className="text-2xl font-bold mb-2">0800 123 4567</div>
                <p className="text-red-100 text-sm mb-4">Round-the-clock response for urgent repairs and callouts.</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {/* Why Choose Shirka */}
            <Card className="shadow-lg border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Shirka?</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Shield className="h-4 w-4 text-red-600 mr-3" />
                    <span>Fully insured & certified</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-red-600 mr-3" />
                    <span>Professional uniformed operatives</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Award className="h-4 w-4 text-red-600 mr-3" />
                    <span>92% attendance rate</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-red-600 mr-3" />
                    <span>6hr average response time</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
