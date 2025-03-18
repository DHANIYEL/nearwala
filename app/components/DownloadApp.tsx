"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DownloadApp = () => {
  const navigatePlayStore = () => {
    window.open(
      "https://play.google.com/store/search?q=near+wala&c=apps",
      "_blank"
    );
  };
  const navigateAppStore = () => {
    window.open(
      "https://apps.apple.com/in/app/nearwala/id1576686708",
      "_blank"
    );
  };

  return (
    <motion.div
      className="padding-x"
      id="downloadapp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
    >
      <div className="bg-orange-50 max-md:py-12 max-lg:py-8 padding-x rounded-3xl max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <div className="uppercase text-red-500 font-medium tracking-wider text-sm">
              Download App
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              GET STARTED WITH NEARWALA TODAY!
            </h2>

            <p className="text-gray-700 text-base sm:text-lg">
              Discover unbeatable discounts wherever and whenever you shop. Save
              instantly on every purchase!
            </p>

            {/* App store buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              {/* Play Store Button */}
              <button
                onClick={navigatePlayStore}
                className="inline-block cursor-pointer"
              >
                <Image
                  src="/assets/play-store.svg"
                  alt="Get it on Google Play"
                  width={168}
                  height={50}
                  className="h-12 w-auto"
                />
              </button>

              {/* App Store Button (if needed) */}
              <button
                onClick={navigateAppStore}
                className="inline-block cursor-pointer"
              >
                <Image
                  src="/assets/app-store.svg"
                  alt="Download on App Store"
                  width={168}
                  height={50}
                  className="h-12 w-auto"
                />
              </button>
            </div>
          </div>

          {/* Right side app screenshot */}
          <div className="flex justify-center items-end">
            <div className="relative w-full max-w-sm -bottom-20 md:-bottom-28">
              <Image
                src="/assets/ss-img.png"
                alt="Nearwala App Screenshot"
                width={400}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DownloadApp;
