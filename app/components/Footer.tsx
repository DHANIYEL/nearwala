"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const OpenInstagram = () => {
    window.open("https://www.instagram.com/nearwalaglobal/?hl=en", "_blank");
  };
  const OpenFacebook = () => {
    window.open(
      "https://www.facebook.com/p/Nearwala-global-61553083014460/",
      "_blank"
    );
  };
  const OpenTwitter = () => {
    window.open("https://x.com/nearwala", "_blank");
  };
  return (
    <footer className="py-10 padding-y padding-x" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <a href="#">
                  <Image
                    src="/assets/NW-LOGO-1.jpg"
                    alt="Nearwala Logo"
                    width={150}
                    height={80}
                    className="object-contain cursor-pointer"
                  />
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-6 max-w-md">
              Our job is to fill your wallet with savings and bring you
              unbeatable discounts on every local purchase.
            </p>

            <div className="flex space-x-4">
              <Link
                href="#"
                onClick={OpenInstagram}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                onClick={OpenFacebook}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                onClick={OpenTwitter}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>

            <p className="text-gray-600 mt-3 font-semibold max-sm:text-sm max-w-md">
              © 2025 by NearPay Innovations Pvt Ltd
            </p>
          </div>

          {/* About column */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#downloadapp"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link href="#footer" className="text-gray-600 hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#offers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-600 hover:text-gray-900">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions{" "}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support column */}
          {/* <div className="md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Support Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-2">Question or feedback?</p>
                <p className="text-gray-600">We'd love to hear from you</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
