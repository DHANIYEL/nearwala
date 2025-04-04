"use client";

import Image from "next/image";
export default function NCoinsSection() {
  const handleDownloadClick = () => {
    // Detect if the user is on an Android device
    const isAndroid = /Android/i.test(navigator.userAgent);

    // Detect if the user is on an iOS device
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Play Store link for Android
    const playStoreLink =
      "https://play.google.com/store/search?q=near+wala&c=apps";

    // App Store link for iOS
    const appStoreLink = "https://apps.apple.com/in/app/nearwala/id1576686708"; // Replace with your actual App Store link

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
  return (
    <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-12 px-4 padding-x padding-y" id="n-coins">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 max-md:text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 ">
              <span className="text-primary">N-Coins</span> for Guaranteed
              Discounts!
            </h2>

            <p className="text-lg text-gray-600">
              To enjoy discounts with Nearwala, add N-Coins to your wallet. For
              instance, adding ₹100 converts into 400 N-Coins, allowing you to
              secure discounts worth ₹400 on future purchases.
            </p>

            <div className="space-y-4 max-md:justify-self-center">
              <div className="flex items-start ">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Subscribe to N-Coin discount plans
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Earn N-Coins by inviting friends
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Look for reward N-Coins
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 max-md:justify-center max-md:mt-3">
              <button
                className="px-6 py-3 bg-primary hover:bg-primary/70 cursor-pointer text-white font-medium rounded-lg shadow-sm transition duration-200"
                onClick={() => handleDownloadClick()}
              >
                Add N-Coins Now
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-100 cursor-pointer text-primary font-medium rounded-lg shadow-sm border border-indigo-100 transition duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/assets/n-coin-img1.jpg" // Replace with your actual image path
                // src="/assets/Coins-01.png" // Replace with your actual image path
                alt="N-Coins Illustration"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
