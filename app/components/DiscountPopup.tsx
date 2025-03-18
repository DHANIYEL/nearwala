"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
console.log(hasSeenPopup)
    // If the user hasn't seen the popup, show it after a delay
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark the popup as seen in localStorage
        localStorage.setItem("hasSeenPopup", "true");
      }, 20000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRedeemClick = () => {
    // Detect if the user is on an Android device
    const isAndroid = /Android/i.test(navigator.userAgent);

    // Detect if the user is on an iOS device
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Play Store link for Android
    const playStoreLink =
      "https://play.google.com/store/search?q=near+wala&c=apps";

    // App Store link for iOS
    const appStoreLink = "https://apps.apple.com/in/app/nearwala/id1576686708"; // Replace with your actual App Store link

    // Close the popup after 2 seconds
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    // Redirect based on the device
    if (isAndroid) {
      window.open(playStoreLink, "_blank");
    } else if (isIOS) {
      window.open(appStoreLink, "_blank");
    } else {
      // Fallback for other devices (e.g., desktop)
      window.open(playStoreLink, "_blank");
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col items-center p-8 max-w-lg w-full">
          {/* Celebration icon */}
          <div className="bg-yellow-200 rounded-full w-28 h-28 flex items-center justify-center mb-8">
            <div className="flex items-center justify-center w-16 h-16">
              <Image
                src="/assets/congrats.png"
                width={40}
                height={40}
                alt="Congrats icon"
                className="object-contain" // Ensures the image fits properly
              />
            </div>
          </div>

          {/* Text content */}
          <h2 className="text-2xl font-bold mb-6 text-black">
            GET UPTO 100% DISCOUNT
          </h2>
          <p className="text-xl font-medium text-gray-700 mb-8">NEAR100</p>

          {/* Button */}
          <button
            onClick={handleRedeemClick}
            className="bg-black text-white w-full py-3 rounded-md font-medium text-lg mb-4 cursor-pointer hover:bg-gray-800 transition-colors"
          >
            Redeem Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DiscountPopup;