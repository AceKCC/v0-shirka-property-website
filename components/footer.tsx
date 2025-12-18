import Link from "next/link"
import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { PRIMARY_PHONE_DISPLAY, PRIMARY_EMAIL } from "@/lib/company"

export function Footer() {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Areas We Cover", href: "/areas" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    "Reactive Maintenance",
    "Void Works",
    "Compliance & Certification",
    "Planned Maintenance",
    "Emergency Response",
    "Developer Aftercare",
  ]

  const sectors = [
    "Social Housing",
    "Education",
    "Healthcare",
    "Commercial",
    "Residential",
    "Heritage Properties",
    "Private Developers",
  ]

  const company = ["About", "Our Team", "News & Updates", "Careers", "Contact", "Accreditations & Policies"]

  return (
    <footer className="text-white relative overflow-hidden">
      <div className="absolute top-20 right-20 opacity-5">
        <img
          src="/images/swallow-logo.png"
          alt=""
          className="w-24 h-24 transform rotate-12 filter brightness-0 invert"
        />
      </div>
      <div className="absolute bottom-32 left-32 opacity-5">
        <img
          src="/images/swallow-logo.png"
          alt=""
          className="w-20 h-20 transform -rotate-30 scale-x-[-1] filter brightness-0 invert"
        />
      </div>

      <div className="py-3" style={{ backgroundColor: "#a50021" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center md:justify-between">
            <div className="flex items-center text-white">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">24/7 Emergency Line: {PRIMARY_PHONE_DISPLAY}</span>
            </div>
            <div className="hidden md:flex items-center text-white text-sm">
              <span>Need immediate assistance? Call now</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#1C1C1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img
                  src="/images/shirka-symbol.png"
                  alt="Shirka Property Maintenance"
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="mb-6 max-w-md leading-relaxed text-gray-300 text-sm font-extralight">
                Shirka provides responsive, respectful, and reliable maintenance services across London's social
                housing, public spaces, and private properties.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-3" style={{ color: "#a50021" }} />
                  <span>{PRIMARY_PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-3" style={{ color: "#a50021" }} />
                  <span>{PRIMARY_EMAIL}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-3" style={{ color: "#a50021" }} />
                  <span>London, UK — Covering North, East & South London</span>
                </div>
              </div>

              <div className="mb-6">
                <img
                  src="/images/safecontractor-seal.png"
                  alt="SafeContractor Approved Certification"
                  className="h-16 w-16"
                  style={{ minHeight: "57px", minWidth: "57px" }}
                />
                <p className="text-xs text-gray-400 mt-2">
                  Fully accredited and compliant with UK regulatory standards
                </p>
              </div>

              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-xs text-gray-400">Follow our journey</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link href="#" className="hover:text-white transition-colors text-sm text-gray-300">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Sectors We Serve</h3>
              <ul className="space-y-2">
                {sectors.map((sector) => (
                  <li key={sector}>
                    <Link href="#" className="hover:text-white transition-colors text-sm text-gray-300">
                      {sector}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors text-sm text-gray-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2025 Shirka Property Maintenance. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
