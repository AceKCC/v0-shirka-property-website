export function HousingAssociations() {
  const associations = [
    {
      name: "Notting Hill Genesis",
      logo: "/images/notting-hill-genesis-logo.png",
    },
    {
      name: "Peabody",
      logo: "/images/peabody-logo-teal.png",
    },
    {
      name: "L&Q",
      logo: "/images/lq-logo.avif",
    },
    {
      name: "Clarion Housing Group",
      logo: "/images/clarion-housing.png",
    },
    {
      name: "Sanctuary Housing",
      logo: "/images/sanctuary-housing.png",
    },
    {
      name: "Metropolitan Thames Valley",
      logo: "/images/mtvh-logo.png",
    },
  ]

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 font-medium">Trusted by leading social housing associations</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {associations.map((association, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={association.logo || "/placeholder.svg"}
                alt={association.name}
                className="h-8 max-w-[120px] object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
