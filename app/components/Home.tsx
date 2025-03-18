"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  
  const handleDownloadClick = () => {
    window.open(
      "https://play.google.com/store/search?q=near+wala&c=apps",
      "_blank"
    );
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container padding-x">
        {" "}
        {/* Use custom padding-x class */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center max-md:mt-10 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600">
              <span>More than Savings</span>
              <Image
                src="/assets/coin-logo.png" // Path to your coin-logo image
                alt="Coin Logo"
                width={16} // Adjust based on your image dimensions
                height={16} // Adjust based on your image dimensions
                className="ml-1 h-4 w-4" // Match the size of the original SVG
              />
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Your All-Time <br />
                Discount App for <br />
                <span className="text-red-600">Everyday Savings</span>
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to fill your wallet with savings and bring you
                exclusive discounts on every local purchase.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-red-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700"
                onClick={() => {
                  handleDownloadClick();
                }}
              >
                Download App
              </Link>
            </div>

            {/* Customer Reviews */}
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                <Image
                  src="/assets/person-1.png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/assets/person-2.png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/assets/person-3.png"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div>
                <p className="font-medium">Our Happy Customer</p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="ml-1 font-medium">4.8</span>
                  <span className="ml-1 text-sm text-gray-500">
                    (12.5k Review)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - App Screenshots */}
          <div className="relative max-w-lg w-full justify-self-center">
            {/* Hero Image with Background */}
            <img
              src="/assets/hero-img-bg.png"
              alt="Hero Image with Background"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
