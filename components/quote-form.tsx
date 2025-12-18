"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface QuoteFormProps {
  serviceType?: string
}

export function QuoteForm({ serviceType = "" }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    jobType: serviceType,
    postcode: "",
    budget: "",
    timeline: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <Card className="shadow-lg border-gray-200">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
            <select
              value={formData.jobType}
              onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
              required
            >
              <option value="">Select a service</option>
              <option value="Extensions">Extensions</option>
              <option value="Loft Extensions">Loft Extensions</option>
              <option value="Renovations">Renovations</option>
              <option value="Brickwork">Brickwork</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Postcode</label>
            <input
              type="text"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              placeholder="e.g. SW1A 1AA"
              className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
              required
            >
              <option value="">Select budget range</option>
              <option value="Under £10k">Under £10,000</option>
              <option value="£10k - £25k">£10,000 - £25,000</option>
              <option value="£25k - £50k">£25,000 - £50,000</option>
              <option value="£50k - £100k">£50,000 - £100,000</option>
              <option value="Over £100k">Over £100,000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
              required
            >
              <option value="">When do you want to start?</option>
              <option value="ASAP">As soon as possible</option>
              <option value="1-3 months">Within 1-3 months</option>
              <option value="3-6 months">Within 3-6 months</option>
              <option value="6+ months">6+ months</option>
              <option value="Just planning">Just planning</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors resize-none"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Your phone number"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
            Submit Request
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-xs text-gray-500 text-center">
            We'll review your request and get back to you within 24 hours with a detailed quote.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
