import Image from "next/image";
import React from "react";

const Achievement = () => {
  return (
    <div>
      <div className="flex justify-center padding-y">
        <section className="padding-x  max-w-7xl mx-auto rounded-xl w-full bg-gray-100 relative overflow-hidden">
          {/* Background Image - Using local image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/sale-img1.jpg" // Make sure the image is in public/assets folder
              alt="Nearwala discount app background"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why <span className="text-primary">Nearwala</span> Stands Out
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                Transforming Local Shopping with Unbeatable Savings
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mt-4">
                We're revolutionizing neighborhood commerce by connecting
                shoppers with incredible deals. Our platform empowers both
                consumers and local businesses through mutually beneficial
                discounts and promotions.
              </p>
            </div>

            {/* <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Our Achievements:
            </h3> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {/* Cities */}
              <div className="bg-white/30 cursor-pointer backdrop-blur-sm p-6 hover_text_gray rounded-lg shadow-lg transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:scale-105">
                <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
                <p className="text-white">Operating Cities</p>
              </div>

              {/* Users */}
              <div className="bg-white/30 cursor-pointer backdrop-blur-sm p-6 hover_text_gray rounded-lg shadow-lg transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:scale-105">
                <h3 className="text-3xl font-bold text-primary mb-2">200K+</h3>
                <p className="text-white">Happy Users</p>
              </div>

              {/* Partners */}
              <div className="bg-white/30 cursor-pointer backdrop-blur-sm p-6 hover_text_gray rounded-lg shadow-lg transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:scale-105">
                <h3 className="text-3xl font-bold text-primary mb-2">2K+</h3>
                <p className="text-white">Partnered Shops</p>
              </div>

              {/* Transactions */}
              <div className="bg-white/30 cursor-pointer backdrop-blur-sm p-6 hover_text_gray rounded-lg shadow-lg transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:scale-105">
                <h3 className="text-3xl font-bold text-primary mb-2">200K+</h3>
                <p className="text-white">Shopping Transactions</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Achievement;
