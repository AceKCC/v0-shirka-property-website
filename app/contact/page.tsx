"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Users,
  Award,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { PRIMARY_PHONE_DISPLAY, PRIMARY_EMAIL, getPhoneLink } from "@/lib/company"

export default function ContactPage() {
  const [commercialForm, setCommercialForm] = useState({
    organization: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyCount: "",
    message: "",
  })
  const [commercialSubmitting, setCommercialSubmitting] = useState(false)
  const [commercialStatus, setCommercialStatus] = useState<"idle" | "success" | "error">("idle")

  const [privateForm, setPrivateForm] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    budget: "",
    projectType: "",
    enquiryType: "",
    message: "",
  })
  const [privateSubmitting, setPrivateSubmitting] = useState(false)
  const [privateStatus, setPrivateStatus] = useState<"idle" | "success" | "error">("idle")

  const handleCommercialSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCommercialSubmitting(true)
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: commercialForm.contactName,
          organization: commercialForm.organization,
          email: commercialForm.email,
          phone: commercialForm.phone,
          postcode: "N/A",
          serviceType: commercialForm.serviceType,
          propertyCount: commercialForm.propertyCount,
          message: commercialForm.message,
          leadSource: "contact-commercial",
          enquiryType: "Property Maintenance (Commercial)",
        }),
      })
      if (response.ok) {
        setCommercialStatus("success")
        setCommercialForm({
          organization: "",
          contactName: "",
          email: "",
          phone: "",
          serviceType: "",
          propertyCount: "",
          message: "",
        })
      } else {
        setCommercialStatus("error")
      }
    } catch {
      setCommercialStatus("error")
    } finally {
      setCommercialSubmitting(false)
    }
  }

  const handlePrivateSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPrivateSubmitting(true)
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: privateForm.name,
          email: privateForm.email,
          phone: privateForm.phone,
          postcode: privateForm.postcode,
          budget: privateForm.budget,
          jobType: privateForm.projectType,
          message: privateForm.message,
          leadSource: "contact-private",
          enquiryType: privateForm.enquiryType || "Private Home Project",
        }),
      })
      if (response.ok) {
        setPrivateStatus("success")
        setPrivateForm({
          name: "",
          phone: "",
          email: "",
          postcode: "",
          budget: "",
          projectType: "",
          enquiryType: "",
          message: "",
        })
      } else {
        setPrivateStatus("error")
      }
    } catch {
      setPrivateStatus("error")
    } finally {
      setPrivateSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white border-0 mb-4">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-red-600">Shirka</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {
              "Whether you need property maintenance services or want to discuss a renovation project, we're here to help."
            }
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Property Maintenance Enquiries */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-red-600">
              <CardContent className="p-8 text-center">
                <div className="bg-red-600 p-4 w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Property Maintenance</h3>
                <p className="text-gray-600 mb-6">For housing associations, councils, and managing agents</p>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <a href="#commercial-form">
                    Commercial Enquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Private Works Enquiries */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-red-600">
              <CardContent className="p-8 text-center">
                <div className="bg-red-600 p-4 w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Private Works</h3>
                <p className="text-gray-600 mb-6">For homeowners, landlords, and private projects</p>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <a href="#private-form">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Services */}
            <Card className="hover:shadow-lg transition-shadow bg-red-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="bg-white p-4 w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">24/7 Emergency</h3>
                <p className="text-red-100 mb-6">Round-the-clock response for urgent repairs</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  <a href={getPhoneLink()}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Form */}
      <section id="commercial-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="lg:col-span-2 shadow-lg border-gray-200">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Badge className="bg-red-600 text-white border-0 mb-3">Property Maintenance</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Commercial Enquiry Form</h3>
                  <p className="text-gray-600">For housing associations, councils, and managing agents</p>
                </div>

                {commercialStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Enquiry Submitted</h4>
                    <p className="text-gray-600 mb-4">We respond within 1 business day.</p>
                    <Button onClick={() => setCommercialStatus("idle")} variant="outline">
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleCommercialSubmit}>
                    {commercialStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                        <input
                          type="text"
                          placeholder="Your organization"
                          value={commercialForm.organization}
                          onChange={(e) => setCommercialForm({ ...commercialForm, organization: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={commercialForm.contactName}
                          onChange={(e) => setCommercialForm({ ...commercialForm, contactName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="email@organization.com"
                          value={commercialForm.email}
                          onChange={(e) => setCommercialForm({ ...commercialForm, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          placeholder="Phone number"
                          value={commercialForm.phone}
                          onChange={(e) => setCommercialForm({ ...commercialForm, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                        value={commercialForm.serviceType}
                        onChange={(e) => setCommercialForm({ ...commercialForm, serviceType: e.target.value })}
                      >
                        <option>Select service type</option>
                        <option>Responsive Repairs</option>
                        <option>Planned Maintenance</option>
                        <option>Void Property Services</option>
                        <option>Compliance Services</option>
                        <option>Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Properties</label>
                      <input
                        type="text"
                        placeholder="Approximate number of properties"
                        value={commercialForm.propertyCount}
                        onChange={(e) => setCommercialForm({ ...commercialForm, propertyCount: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        value={commercialForm.message}
                        onChange={(e) => setCommercialForm({ ...commercialForm, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors resize-none"
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                      disabled={commercialSubmitting}
                    >
                      {commercialSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Commercial Enquiry
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-lg border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">{PRIMARY_PHONE_DISPLAY}</div>
                        <div className="text-sm text-gray-600">Main Line</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">{PRIMARY_EMAIL}</div>
                        <div className="text-sm text-gray-600">Commercial Enquiries</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">London, UK</div>
                        <div className="text-sm text-gray-600">North, East & South London</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Shirka?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Shield className="h-4 w-4 text-red-600 mr-3" />
                      <span>Fully insured & accredited</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 text-red-600 mr-3" />
                      <span>Experienced team</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-red-600 mr-3" />
                      <span>Works with housing providers</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-red-600 mr-3" />
                      <span>24/7 emergency response</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Private Form */}
      <section id="private-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="lg:col-span-2 shadow-lg border-gray-200">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Badge className="bg-red-600 text-white border-0 mb-3">Private Works</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h3>
                  <p className="text-gray-600">For homeowners, landlords, and private projects</p>
                </div>

                {privateStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Quote Request Submitted</h4>
                    <p className="text-gray-600 mb-4">We respond within 1 business day.</p>
                    <Button onClick={() => setPrivateStatus("idle")} variant="outline">
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handlePrivateSubmit}>
                    {privateStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Enquiry Type</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                        value={privateForm.enquiryType}
                        onChange={(e) => setPrivateForm({ ...privateForm, enquiryType: e.target.value })}
                        required
                      >
                        <option value="">Select enquiry type</option>
                        <option value="Property Maintenance (Commercial)">Property Maintenance (Commercial)</option>
                        <option value="Private Home Project">Private Home Project</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                        value={privateForm.projectType}
                        onChange={(e) => setPrivateForm({ ...privateForm, projectType: e.target.value })}
                      >
                        <option>Select project type</option>
                        <option>Extension</option>
                        <option>Loft Conversion</option>
                        <option>Renovation</option>
                        <option>Brickwork</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={privateForm.name}
                          onChange={(e) => setPrivateForm({ ...privateForm, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          placeholder="Phone number"
                          value={privateForm.phone}
                          onChange={(e) => setPrivateForm({ ...privateForm, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={privateForm.email}
                        onChange={(e) => setPrivateForm({ ...privateForm, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Postcode</label>
                        <input
                          type="text"
                          placeholder="e.g. SW1A 1AA"
                          value={privateForm.postcode}
                          onChange={(e) => setPrivateForm({ ...privateForm, postcode: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                        <select
                          className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                          value={privateForm.budget}
                          onChange={(e) => setPrivateForm({ ...privateForm, budget: e.target.value })}
                        >
                          <option>Select budget</option>
                          <option>Under £10k</option>
                          <option>£10k - £25k</option>
                          <option>£25k - £50k</option>
                          <option>£50k - £100k</option>
                          <option>Over £100k</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                      <textarea
                        placeholder="Tell us about your project..."
                        rows={4}
                        value={privateForm.message}
                        onChange={(e) => setPrivateForm({ ...privateForm, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors resize-none"
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                      disabled={privateSubmitting}
                    >
                      {privateSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Free Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">We respond within 1 business day.</p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-lg border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">{PRIMARY_PHONE_DISPLAY}</div>
                        <div className="text-sm text-gray-600">Main Line</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">{PRIMARY_EMAIL}</div>
                        <div className="text-sm text-gray-600">General Enquiries</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">London, UK</div>
                        <div className="text-sm text-gray-600">Covering all major areas</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-600 text-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">24/7 Emergency Line</h3>
                  <div className="text-2xl font-bold mb-2">{PRIMARY_PHONE_DISPLAY}</div>
                  <p className="text-red-100 text-sm">Round-the-clock response for urgent repairs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
