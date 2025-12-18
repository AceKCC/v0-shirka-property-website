"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, FileText } from "lucide-react"
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
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        {
          name: "Internal Repairs & Maintenance",
          href: "/services/internal-repairs",
          description: "Carpentry, plastering, decorating and general internal property maintenance",
        },
        {
          name: "Plumbing & Wet Works",
          href: "/services/plumbing",
          description: "Emergency plumbing, boiler servicing, and complete wet room solutions",
        },
        {
          name: "Damp & Mould Remediation",
          href: "/services/damp-mould",
          description: "Specialist treatment and prevention of damp and mould issues",
        },
        {
          name: "Responsive Repairs",
          href: "/services/responsive-repairs",
          description: "24/7 emergency response and scheduled repair services",
        },
        {
          name: "Planned Maintenance",
          href: "/services/planned-maintenance",
          description: "Proactive maintenance programs to prevent costly repairs",
        },
        {
          name: "Compliance Services",
          href: "/services/compliance",
          description: "Ensuring full regulatory compliance for housing providers",
        },
      ],
    },
    { name: "Process", href: "/process" },
    { name: "Areas We Cover", href: "/areas" },
    { name: "Testimonials", href: "/testimonials" },
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
                    {item.dropdown && (
                      <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                    )}
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
                variant="outline"
                className={`font-medium px-5 py-2 text-sm transition-all duration-200 ${
                  isScrolled || hoveredItem
                    ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    : "text-white border border-white hover:bg-white hover:text-gray-900 bg-transparent"
                }`}
              >
                <FileText className="mr-2 h-4 w-4" />
                Get Quote
              </Button>

              <Button
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
                <Phone className="mr-2 h-4 w-4" />
                Call Now
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
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-sm text-gray-500 hover:text-gray-700 py-1 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                  <Button
                    className="w-full text-white font-medium transition-all duration-200"
                    style={{ backgroundColor: "#a50021" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8a001c")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#a50021")}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Full-Width Mega Menu */}
      {showMegaMenu && hoveredItem && navItems.find((item) => item.name === hoveredItem)?.dropdown && (
        <div
          className={`fixed left-0 w-full bg-white border-b border-gray-200 shadow-lg z-30 overflow-hidden ${
            showMegaMenu
              ? "animate-in slide-in-from-top-2 duration-200 ease-out"
              : "animate-out slide-out-to-top-2 duration-150 ease-in"
          }`}
          style={{
            top: showTopStrip ? (isScrolled ? "84px" : "108px") : isScrolled ? "52px" : "76px",
            transform: showMegaMenu ? "translateY(0)" : "translateY(-10px)",
            opacity: showMegaMenu ? 1 : 0,
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={() => {
            if (hoverTimeout) clearTimeout(hoverTimeout)
            setHoveredItem(hoveredItem)
          }}
          onMouseLeave={() => {
            const timeout = setTimeout(() => setHoveredItem(null), 150)
            setHoverTimeout(timeout)
          }}
        >
          <div
            className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isScrolled ? "py-8" : "py-10"}`}
            style={{
              transform: showMegaMenu ? "translateY(0)" : "translateY(-5px)",
              opacity: showMegaMenu ? 1 : 0,
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.05s",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {navItems
                .find((item) => item.name === hoveredItem)
                ?.dropdown?.map((dropdownItem, index) => (
                  <Link
                    key={dropdownItem.name}
                    href={dropdownItem.href}
                    className="group p-4 hover:bg-gray-50 transition-colors duration-200"
                    style={{
                      transform: showMegaMenu ? "translateY(0)" : "translateY(10px)",
                      opacity: showMegaMenu ? 1 : 0,
                      transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.03}s`,
                    }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {dropdownItem.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{dropdownItem.description}</p>
                  </Link>
                ))}
            </div>

            {/* Call to Action in Mega Menu */}
            <div
              className="mt-8 pt-6 border-t border-gray-100 text-center"
              style={{
                transform: showMegaMenu ? "translateY(0)" : "translateY(15px)",
                opacity: showMegaMenu ? 1 : 0,
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.15s",
              }}
            >
              <p className="text-gray-600 mb-4">Ready to partner with London's trusted maintenance specialists?</p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent font-medium px-6 py-2 text-sm"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Request Quote
                </Button>
                <Button
                  className="text-white font-medium px-6 py-2 text-sm transition-all duration-200"
                  style={{ backgroundColor: "#a50021" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8a001c")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#a50021")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Speak to Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
