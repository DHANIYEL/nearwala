"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

// Helper function to calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const Offers = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filters = ["All", "Food", "Car", "Near me"];

  const handleDownloadClick = () => {
    window.open("https://play.google.com/store/search?q=near+wala&c=apps", "_blank");
  };


  type Offer = {
    id: number;
    name: string;
    category: string;
    image: string;
    promotion: string;
    location: { lat: number; lon: number };
    distance?: number; // Optional property for distance
  };
  // Add location data to each shop
  const offers = [
    {
      id: 1,
      name: "Coco Coopa",
      category: "Food",
      image: "/assets/coco-coopa.png",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2626, lon: 75.7673 }, // Kozhikode, Kerala
    },
    {
      id: 2,
      name: "WinDex",
      category: "Car & Bike Wash",
      image: "/assets/windexx.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2601, lon: 75.7823 }, // Kozhikode, Kerala
    },
    {
      id: 3,
      name: "Momomia",
      category: "Food",
      image: "/assets/momomia.png",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2575, lon: 75.7817 }, // Kozhikode, Kerala
    },
    {
      id: 4,
      name: "Auto Holix",
      category: "Car",
      image: "/assets/autoholix.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2593, lon: 75.7798 }, // Kozhikode, Kerala
    },
    {
      id: 5,
      name: "Burger Space",
      category: "Food",
      image: "/assets/burger-space.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2612, lon: 75.7831 }, // Kozhikode, Kerala
    },
    {
      id: 6,
      name: "Chickhut",
      category: "Food",
      image: "/assets/chickhut.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2567, lon: 75.7809 }, // Kozhikode, Kerala
    },
    {
      id: 7,
      name: "Chickos",
      category: "Food",
      image: "/assets/chickos.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2582, lon: 75.7825 }, // Kozhikode, Kerala
    },
    {
      id: 8,
      name: "Chicken Street",
      category: "Food",
      image: "/assets/chiken-street.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2598, lon: 75.7814 }, // Kozhikode, Kerala
    },
    {
      id: 9,
      name: "Dosa Express",
      category: "Food",
      image: "/assets/dosa.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2579, lon: 75.7832 }, // Kozhikode, Kerala
    },
    {
      id: 10,
      name: "Garam Matka",
      category: "Food",
      image: "/assets/garam-matka.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2605, lon: 75.7796 }, // Kozhikode, Kerala
    },
    {
      id: 11,
      name: "Grillax",
      category: "Food",
      image: "/assets/grillax.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2586, lon: 75.7801 }, // Kozhikode, Kerala
    },
    {
      id: 12,
      name: "Habibis",
      category: "Food",
      image: "/assets/habibis.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2573, lon: 75.7828 }, // Kozhikode, Kerala
    },
    {
      id: 13,
      name: "Hug a Mug",
      category: "Food",
      image: "/assets/hugmug.jpeg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2591, lon: 75.7835 }, // Kozhikode, Kerala
    },
    {
      id: 14,
      name: "Wings a Things",
      category: "Food",
      image: "/assets/wings.jpg",
      promotion: "Get Upto 100% Cashback!",
      location: { lat: 11.2609, lon: 75.7819 }, // Kozhikode, Kerala
    },
  ];

  // Get user location when "Near me" is clicked
  const handleNearMeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setActiveFilter("Near me");
        },
        (error) => {
          console.error("Error getting user location:", error);
          alert("Unable to retrieve your location. Please enable location permissions.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Filter offers based on active filter
  const filteredOffers =
    activeFilter === "All"
      ? offers
      : activeFilter === "Near me"
      ? userLocation
        ? offers
            .map((offer) => ({
              ...offer,
              distance: calculateDistance(
                userLocation.lat,
                userLocation.lon,
                offer.location.lat,
                offer.location.lon
              ),
            }))
            .sort((a, b) => a.distance - b.distance) // Sort by distance
        : []
      : offers.filter((offer) => offer.category.includes(activeFilter));

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full padding-y bg-white">
      <div className="container padding-x mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h3 className="text-red-600 font-medium uppercase tracking-wider mb-2">EXCLUSIVE OFFERS</h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              Savings That Will Make
              <br className="hidden md:block" /> You Smile
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button
              onClick={scrollPrev}
              className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
              aria-label="Previous offers"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
              aria-label="Next offers"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => filter === "Near me" ? handleNearMeClick() : setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Offers Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto pb-6 -mx-4 px-4 space-x-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="flex-none w-[280px] md:w-[320px] snap-start">
              <div className="relative h-[340px] rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => {
                  handleDownloadClick();
                }}
              >
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 ease-in-out duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{offer.name}</h3>
                  <p className="text-yellow-300 font-medium mb-3">{offer.promotion}</p>
                  {activeFilter === "Near me" && (
                    <p className="text-white text-sm">Distance: {offer.distance?.toFixed(2)} km</p>
                  )}
                  <button className="flex items-center text-white text-sm font-medium cursor-pointer">
                    Scan Now <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;