"use client";
import { div } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start animation when element is 20% in view
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Stats data matching the image
  const stats = [
    { id: 1, value: 145, suffix: ",000k+", label: "Our Downloads 145000+" },
    { id: 2, value: 50, suffix: ",000k+", label: "Our Users" },
    { id: 3, value: 7, suffix: ",000+", label: "Loyal Users" },
    { id: 4, value: 99, suffix: "%", label: "Customer Happiness" },
  ];

  return (
    <div className="container px-6 mx-auto max-w-7xl padding-y">
      <div
        ref={sectionRef}
        className="py-8 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-4 flex flex-col items-center justify-center"
              >
                <div className="text-red-500 text-5xl font-bold mb-2">
                  {isVisible ? (
                    <>
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        delay={0}
                        useEasing={true}
                        enableScrollSpy={false}
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-red-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
