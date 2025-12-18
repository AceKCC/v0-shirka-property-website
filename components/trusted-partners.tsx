import Image from "next/image"

export const TrustedPartners = () => {
  const certifications = [
    {
      name: "SafeContractor Approved",
      logo: "/images/safecontractor-seal.png",
    },
    {
      name: "Fully Insured",
      logo: "/placeholder.svg?height=60&width=120&text=Insured",
    },
    {
      name: "Professional Standards",
      logo: "/placeholder.svg?height=60&width=120&text=Professional",
    },
    {
      name: "Quality Assured",
      logo: "/placeholder.svg?height=60&width=120&text=Quality",
    },
  ]

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Trusted by Housing Providers Across London</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Fully insured with professional standards and quality assurance.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={cert.logo || "/placeholder.svg"}
                alt={cert.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain mb-2"
              />
              <span className="text-xs text-gray-500 text-center">{cert.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-red-50 p-6 rounded-lg max-w-2xl mx-auto">
          <blockquote className="text-gray-700 italic mb-4">
            "Shirka have consistently delivered for us across hundreds of properties — dependable and respectful,
            always."
          </blockquote>
          <cite className="text-red-600 font-medium">— Housing Operations Manager, London Borough</cite>
        </div>
      </div>
    </section>
  )
}
