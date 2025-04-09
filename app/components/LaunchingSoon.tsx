"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LaunchingSoon = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const comingSoonLocations = [
    {
      name: "Faridabad",
      image: "/assets/Faridabad.jpg",
      region: "NCR",
    },
    {
      name: "Noida",
      image: "/assets/Noida.webp",
      region: "NCR",
    },
    {
      name: "Mumbai",
      image: "/assets/Mumbai.png",
      region: "Maharashtra",
    },
    {
      name: "Pune",
      image: "/assets/Pune.jpg",
      region: "Maharashtra",
    },
    {
      name: "Chennai",
      image: "/assets/Chennai.jpg",
      region: "Tamil Nadu",
    },
    {
      name: "Vizag",
      image: "/assets/Vizag.jpg",
      region: "Andhra Pradesh",
    },
  ];

  return (
    <section className="w-full padding-x py-10 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col  md:items-center md:justify-between mb-8">
          <div className="text-center">
            <h2 className="text-2xl max-sm:text-xl text-center md:text-3xl font-bold inline-flex items-center justify-center gap-2">
              Launching Soon In <span className="text-3xl">🚀</span>
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Exciting new locations coming your way
            </p>
          </div>
        </div>

        {/* Locations Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-6 scrollbar-hide snap-x justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {comingSoonLocations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden relative border-4 border-white shadow-lg group-hover:border-red-500 transition-all duration-300">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium text-gray-800 group-hover:text-red-600 transition-colors">
                  {location.name}
                </p>
                <p className="text-sm text-gray-500">{location.region}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchingSoon;
