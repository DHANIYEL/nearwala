"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and apply glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white py-4 px-6 md:px-12 fixed top-0 left-0 z-50 transition-all ${
        isScrolled ? "bg-opacity-80 backdrop-blur-sm shadow-sm" : "bg-opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/assets/NW-LOGO.png" // Path relative to the `public` directory
              alt="Nearwala Logo"
              width={130} // Adjust width as needed
              height={80} // Adjust height as needed
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#how-it-works" // Change to the ID of the target section
            className="text-sm font-medium text-gray-600 hover:text-primary ease-in duration-200"
          >
            HOW IT WORKS
          </a>
          <a
            href="#offers" // Change to the ID of the target section
            className="text-sm font-medium text-gray-600 hover:text-primary ease-in duration-200"
          >
            OFFERS
          </a>
          <a
            href="#testimonials" // Change to the ID of the target section
            className="text-sm font-medium text-gray-600 hover:text-primary ease-in duration-200"
          >
            TESTIMONIALS
          </a>
        </nav>

        {/* Download Button */}
        <div className="hidden md:block">
          <Link
            href="/download"
            className="rounded-full bg-red-600 px-6 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
          >
            Download
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              HOW IT WORKS
            </Link>
            <Link
              href="/offers"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              OFFERS
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              TESTIMONIALS
            </Link>
            <Link
              href="/download"
              className="inline-block rounded-full w-fit bg-red-600 px-6 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}