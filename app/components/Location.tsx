import Image from "next/image"
import { ArrowRight } from "lucide-react"

const Location = () => {
  // Updated location data array
  const locations = [
    {
      name: "Bengaluru",
      state: "Karnataka",
      image: "/assets/Bengaluru.avif",
      description: "Our main office",
    },
    {
      name: "Hyderabad",
      state: "Telangana",
      image: "/assets/Hyderabad.jpeg",
      description: "Tech hub location",
    },
    {
      name: "Kochi",
      state: "Kerala",
      image: "/assets/kochi.jpg",
      description: "Coastal branch",
    },
    {
      name: "Calicut",
      state: "Kerala",
      image: "/assets/kozhikode.jpg",
      description: "Northern office",
    },
    {
      name: "Coimbatore",
      state: "Tamil Nadu",
      image: "/assets/coimbatore.webp",
      description: "Southern branch",
    },
]
  

  return (
    <div className="container mx-auto padding-x padding-y">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold inline-flex items-center justify-center gap-2">
          Find Us In <span className="text-3xl">📍</span>
        </h2>
        <p className="mt-2 text-gray-600">Visit us in these beautiful cities</p>
      </div>

      <div className="flex overflow-x-auto pb-6 gap-4 scrollbar-hide px-2">
        {locations.map((location, index) => (
          <div key={index} className="flex-shrink-0 group relative">
            <div className="w-64 h-36 md:w-72 md:h-40 rounded-xl overflow-hidden relative shadow-md transition-all duration-300 hover:shadow-lg">
              {/* Card with image background */}
              <Image
                src={location.image || "/placeholder.svg"}
                alt={location.name}
                fill
                className="object-cover brightness-[0.85] group-hover:brightness-[0.8] group-hover:scale-105 transition-all duration-500"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium bg-white/90 text-gray-800 px-2 py-1 rounded-full">{location.state}</span>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-800" />
                  </button>
                </div>

                <div className="text-white">
                  <h3 className="font-medium text-lg">{location.name}</h3>
                  <p className="text-sm text-white/90">{location.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Location

