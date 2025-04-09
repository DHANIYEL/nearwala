"use client";

import { motion } from "framer-motion";

const OurServices = () => {
  const steps = [
    {
      step: "1",
      title: "Download the App",
      description: "Available on both Android and iOS platforms",
    },
    {
      step: "2",
      title: "Get Your N-Coins",
      description: "Add N-Coins to your wallet to unlock discounts",
    },
    {
      step: "3",
      title: "Explore Local Shops",
      description: "Browse shops in your preferred categories",
    },
    {
      step: "4",
      title: "Make Your Purchase",
      description: "Shop at your chosen local store",
    },
    {
      step: "5",
      title: "Scan QR Code",
      description: "Use the app to scan the shop's QR code for payment",
    },
    {
      step: "6",
      title: "Enjoy Your Discount",
      description: "Avail discounts of up to 100% on your bill",
    },
  ];

  return (
    <section className="w-full py-20 bg-white" id="how-it-works">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest text-red-600 mb-2 block">
            SIMPLE STEPS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How Nearwala Works
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300"></div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold text-xl group-hover:bg-red-100 transition-colors">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-16 h-16 text-red-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;