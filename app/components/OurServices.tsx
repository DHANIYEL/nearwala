import Image from "next/image"

const OurServices = () => {
  const services = [
    {
      title: "Easy To Save",
      description: "Saving is simple! Just a few steps to unlock exclusive discounts on your local purchases.",
      image: "/assets/service-1.png",
    },
    {
      title: "Instant Discounts",
      description: "Get discounts applied immediately at checkout - no waiting required.",
      image: "/assets/service-2.png",
    },
    {
      title: "Trusted Quality",
      description: "We ensure the best discounts from trusted local shops.",
      image: "/assets/service-3.png",
    },
  ]

  return (
    <section className="w-full padding-y bg-white" id="how-it-works">
      <div className="container padding-x mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-red-600 font-medium uppercase tracking-wider mb-4">WHAT WE BRING TO YOU</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            Your Go-To Discount App for Everyday Savings
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 h-[150px] w-[150px] relative">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 max-w-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices

