"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  const OpenInstagram = () => {
    window.open(
      "https://www.instagram.com/nearwalaglobal/?hl=en",
      "_blank"
    );
  };
  const OpenFacebook = () => {
    window.open(
      "https://www.facebook.com/p/Nearwala-global-61553083014460/",
      "_blank"
    );
  };
  const OpenTwitter = () => {
    window.open(
      "https://x.com/nearwala",
      "_blank"
    );
  };
  return (
    <footer className=" padding-y padding-x">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
          <div className="flex items-center">
            <Image
              src="/assets/NW-LOGO.png"
              alt="Nearwala Logo"
              width={130}
              height={80}
              className="object-contain"
            />
          </div>
            </div>

            <p className="text-gray-600 mb-6 max-w-md">
              Our job is to fill your wallet with savings and bring you unbeatable discounts on every local purchase.
            </p>

            <div className="flex space-x-4">
              <Link href="#" onClick={OpenInstagram} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" onClick={OpenFacebook} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" onClick={OpenTwitter} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* About column */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#downloadapp" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">
                Reviewers
                </Link>
              </li>
              <li>
                <Link href="#offers" className="text-gray-600 hover:text-gray-900">
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
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Why Nearwala?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
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
  )
}

export default Footer

