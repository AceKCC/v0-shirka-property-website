"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [showTopStrip, setShowTopStrip] = useState(true)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [showMegaMenu, setShowMegaMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const footerHeight = 500 // Approximate footer height including red strip
      const redStripHeight = 48 // Height of the red strip in footer

      setIsScrolled(scrollY > 30)

      // Calculate when we're near the footer red strip
      const distanceFromBottom = documentHeight - (scrollY + windowHeight)
      const nearFooterRedStrip = distanceFromBottom <= footerHeight - redStripHeight

      // Show top strip unless we're very close to the footer red strip
      setShowTopStrip(!nearFooterRedStrip)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (hoverTimeout) clearTimeout(hoverTimeout)
    }
  }, [hoverTimeout])

  // Handle mega menu visibility with delay for base state
  useEffect(() => {
    if (hoveredItem) {
      if (isScrolled) {
        // When scrolled, show immediately
        setShowMegaMenu(true)
      } else {
        // When in base state, delay to let header transition complete
        const timer = setTimeout(() => {
          setShowMegaMenu(true)
        }, 300) // Reduced from 350ms to 300ms
        return () => clearTimeout(timer)
      }
    } else {
      setShowMegaMenu(false)
    }
  }, [hoveredItem, isScrolled])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Property Maintenance", href: "/property-maintenance" },
    { name: "Private Works", href: "/private-works" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <div className="relative">
      {/* Top Red Strip */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          showTopStrip ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ backgroundColor: "#a50021" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex items-center justify-center md:justify-between">
            <div className="flex items-center text-white">
              <Phone className="h-3 w-3 mr-2" />
              <span className="text-xs font-medium">24/7 Emergency: +44 (0) 800 123 4567</span>
            </div>
            <div className="hidden md:flex items-center text-white text-xs">
              <span>Serving London's Housing Sector Since 1999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-200 ease-in-out my-1 ${
          hoveredItem
            ? "bg-white border-b border-gray-200 shadow-sm"
            : isScrolled
              ? "bg-white border-b border-gray-200 shadow-sm"
              : "bg-transparent border-b border-transparent"
        }`}
        style={{ top: showTopStrip ? "32px" : "0px" }}
      >
        <div className="relative z-10 container mx-auto px-4 lg:px-16 sm:px-20">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-20" : "h-28"}`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center py-0 my-0 gap-x-0 px-1.5 mx-0">
              <Image
                src="/images/shirka-full-logo.png"
                alt="Shirka Property Maintenance"
                width={240}
                height={70}
                className={`h-16 w-auto transition-all duration-200 ${
                  isScrolled || hoveredItem ? "" : "filter brightness-0 invert"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (hoverTimeout) clearTimeout(hoverTimeout)
                    setHoveredItem(item.name)
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setHoveredItem(null), 150)
                    setHoverTimeout(timeout)
                  }}
                >
                  <Link
                    href={item.href}
                    className={`relative ${
                      isScrolled || hoveredItem ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-white/80"
                    } font-medium text-sm transition-colors duration-200 py-2 group flex items-center`}
                  >
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: "#a50021" }}
                    ></span>
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                asChild
                variant="outline"
                className={`font-medium px-5 py-2 text-sm transition-all duration-200 ${
                  isScrolled || hoveredItem
                    ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    : "text-white border border-white hover:bg-white hover:text-gray-900 bg-transparent"
                }`}
              >
                <Link href="/contact">
                  <FileText className="mr-2 h-4 w-4" />
                  Get Quote
                </Link>
              </Button>

              <Button
                asChild
                className={`font-medium px-5 py-2 text-sm transition-all duration-200 ${
                  isScrolled || hoveredItem
                    ? "text-white"
                    : "text-white border border-white hover:bg-white hover:text-gray-900 bg-transparent"
                }`}
                style={isScrolled || hoveredItem ? { backgroundColor: "#a50021" } : {}}
                onMouseEnter={(e) => {
                  if (isScrolled || hoveredItem) {
                    e.currentTarget.style.backgroundColor = "#8a001c"
                  }
                }}
                onMouseLeave={(e) => {
                  if (isScrolled || hoveredItem) {
                    e.currentTarget.style.backgroundColor = "#a50021"
                  }
                }}
              >
                <Link href="tel:08001234567">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 ${
                isScrolled || hoveredItem ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-white/80"
              } transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  >
                    <Link href="/contact">
                      <FileText className="mr-2 h-4 w-4" />
                      Get Quote
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full text-white font-medium transition-all duration-200"
                    style={{ backgroundColor: "#a50021" }}
                  >
                    <Link href="tel:08001234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
