"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleDownloadClick = () => {
    window.open("https://play.google.com/store/search?q=near+wala&c=apps", "_blank");
  };

  return (
    <header
      className={`w-full bg-white fixed top-0 left-0 z-50 transition-all ${
        isScrolled
          ? "bg-opacity-80 backdrop-blur-sm shadow-sm"
          : "bg-opacity-100"
      }`}
    >
      <div className="padding-x py-6 mx-auto flex max-w-7xl items-center justify-between"> {/* Use custom padding classes */}
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/assets/NW-LOGO.png"
              alt="Nearwala Logo"
              width={130}
              height={80}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-primary ease-in duration-200"
          >
            HOW IT WORKS
          </a>
          <a
            href="#offers"
            className="text-sm font-medium text-gray-600 hover:text-primary ease-in duration-200"
          >
            OFFERS
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-gray-600 hover:text-primary ease-in duration-200"
          >
            TESTIMONIALS
          </a>
        </nav>

        {/* Download Button */}
        <div className="hidden md:block">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleDownloadClick();
              setIsMenuOpen(false);
            }}
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

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            className="fixed top-16 right-0 w-full h-[calc(100vh-4rem)] bg-white z-40 shadow-lg"
          >
            <nav className="flex flex-col items-center justify-center space-y-6 p-6 border-t border-gray-200">
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                HOW IT WORKS
              </Link>
              <Link
                href="#offers"
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                OFFERS
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                TESTIMONIALS
              </Link>
              <div className="pt-4">
                <Link
                  href="#"
                  className="inline-block rounded-full w-fit bg-red-600 px-6 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDownloadClick();
                    setIsMenuOpen(false);
                  }}
                >
                  Download
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}