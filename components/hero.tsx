"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, X } from "lucide-react"
import { useState, useEffect } from "react"
import { PRIMARY_PHONE_DISPLAY, getPhoneLink } from "@/lib/company"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const images = ["/images/hero-bg.png", "/images/hero-maintenance.png"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center filter blur-sm transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: "url(" + image + ")" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-16 -right-32 opacity-10">
          <img
            src="/images/swallow-logo.png"
            alt=""
            className="w-80 h-80 transform rotate-12 filter brightness-0 invert"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-16 sm:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center py-14">
          <div className="text-white lg:col-span-7 relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Reliable Maintenance.
              <span className="block">Confident Residents.</span>
              <span className="block text-red-600">Better Communities.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl font-extralight">
              Because good maintenance is not just what we do - it is how we make people feel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 py-4 text-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-none"
                onClick={() => setShowModal(true)}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent rounded-none"
                asChild
              >
                <a href={getPhoneLink()}>
                  <Phone className="mr-2 h-5 w-5" />
                  {PRIMARY_PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 flex lg:flex-col justify-center lg:justify-start items-center lg:items-end space-y-0 lg:space-y-8 space-x-8 lg:space-x-0 relative">
            <div className="text-right">
              <div className="text-4xl lg:text-5xl font-bold mb-1 text-red-600">Fast</div>
              <div className="text-sm text-gray-300 whitespace-nowrap">Response Times</div>
              <div className="hidden lg:block w-16 h-px bg-gray-600 mt-4 ml-auto"></div>
            </div>
            <div className="text-right">
              <div className="text-4xl lg:text-5xl font-bold mb-1 text-red-600">Reliable</div>
              <div className="text-sm text-gray-300 whitespace-nowrap">Scheduling</div>
              <div className="hidden lg:block w-16 h-px bg-gray-600 mt-4 ml-auto"></div>
            </div>
            <div className="text-right">
              <div className="text-4xl lg:text-5xl font-bold mb-1 text-red-600">Quality</div>
              <div className="text-sm text-gray-300 whitespace-nowrap">Workmanship</div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

            <div className="space-y-4">
              <button
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors opacity-50 cursor-not-allowed"
                disabled
              >
                <div className="font-semibold text-gray-900">Get an Automated Estimate</div>
                <div className="text-sm text-gray-500">Coming Soon</div>
              </button>

              <button
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors"
                onClick={() => {
                  setShowModal(false)
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <div className="font-semibold text-gray-900">Request a Quote</div>
                <div className="text-sm text-gray-500">Get a detailed quote for your project</div>
              </button>

              <button
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors"
                onClick={() => {
                  setShowModal(false)
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <div className="font-semibold text-gray-900">Ask a Question</div>
                <div className="text-sm text-gray-500">Get answers from our experts</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
