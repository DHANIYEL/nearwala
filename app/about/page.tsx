import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About NearPay Innovations</h1>
          <div className="w-32 h-1 bg-primary/80 mx-auto"></div>
        </div>

        {/* Company Image */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg mb-12">
          <Image
            src="/assets/about-us.jpg" // Replace with your actual image path
            alt="NearPay Innovations Office"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-gray-700">
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Company</h2>
            <p className="text-lg leading-relaxed">
              NearPay Innovations Pvt Ltd is a Bengaluru-based company dedicated to developing
              products in sectors such as fintech, retail tech, and consumer tech, aiming to enhance the
              offline shopping experience in India.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Brand - Nearwala</h2>
            <p className="text-lg leading-relaxed">
              Operating under the brand name Nearwala, the company offers an AI-powered platform designed 
              to empower local shops and SMEs to compete effectively with e-commerce giants. By generating 
              customer leads, providing personalized recommendations, and offering real-time discounts, 
              Nearwala aims to boost customer engagement and drive business growth for its partners.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Technology</h2>
            <p className="text-lg leading-relaxed">
              The platform includes advanced CRM tools and analytics, tailored for the digital era, 
              helping businesses thrive in today's competitive market landscape.
            </p>
          </section>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 bg-primary/80 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To revolutionize offline retail through innovative technology solutions that create 
            equal opportunities for local businesses in the digital economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;