"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const OurServices = () => {
  const services = [
    {
      title: "Easy To Save",
      description:
        "Saving is simple! Just a few steps to unlock exclusive discounts on your local purchases.",
      image: "/assets/service-1.png",
    },
    {
      title: "Instant Discounts",
      description:
        "Get discounts applied immediately at checkout - no waiting required.",
      image: "/assets/service-2.png",
    },
    {
      title: "Trusted Quality",
      description: "We ensure the best discounts from trusted local shops.",
      image: "/assets/service-3.png",
    },
  ];

  return (
    <section className="w-full padding-y bg-white" id="how-it-works">
      <div className="container padding-x mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-red-600 font-medium uppercase tracking-wider mb-4">
            HOW IT WORKS
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            How Nearwala Works for You
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              step: "1",
              title: "Download the App",
              description: "Available on both Android and iOS platforms",
              icon: "/download-icon.svg", // Replace with your icon path
            },
            {
              step: "2",
              title: "Get Your N-Coins",
              description: "Add N-Coins to your wallet to unlock discounts",
              icon: "/wallet-icon.svg",
            },
            {
              step: "3",
              title: "Explore Local Shops",
              description: "Browse shops in your preferred categories",
              icon: "/explore-icon.svg",
            },
            {
              step: "4",
              title: "Make Your Purchase",
              description: "Shop at your chosen local store",
              icon: "/cart-icon.svg",
            },
            {
              step: "5",
              title: "Scan QR Code",
              description: "Use the app to scan the shop's QR code for payment",
              icon: "/qr-icon.svg",
            },
            {
              step: "6",
              title: "Enjoy Your Discount",
              description: "Avail discounts of up to 100% on your bill",
              icon: "/discount-icon.svg",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-primary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="mb-6 h-16 w-16 rounded-full bg-red-200 flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
