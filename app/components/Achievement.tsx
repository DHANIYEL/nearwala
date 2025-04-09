import React from "react";

const Achievement = () => {
  return (
    <div>
      <div className="flex justify-center padding-x padding-y mx-auto">
        <section 
          className="padding-x max-w-7xl mx-auto rounded-xl w-full relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,230,220,0.9) 0%, rgba(255,220,220,0.9) 25%, rgba(255,180,180,0.9) 50%, rgba(255,140,140,0.9) 100%)"
          }}
        >
          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why <span className="text-primary">Nearwala</span> Stands Out
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                Transforming Local Shopping with Unbeatable Savings
              </p>
              <p className="text-lg text-white/90 max-sm:text-start max-w-3xl mx-auto mt-4">
                We're revolutionizing neighborhood commerce by connecting
                shoppers with incredible deals. Our platform empowers both
                consumers and local businesses through mutually beneficial
                discounts and promotions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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