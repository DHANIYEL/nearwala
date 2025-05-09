"use client";

import React, { useState, useEffect, useRef } from 'react';
import  CountUp  from 'react-countup';
import { Award, Users, Calendar, Trophy } from 'lucide-react';

export default function StatsDisplay() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      value: 5,
      suffix: '+',
      label: 'Opreating Cities',
      icon: Calendar
    },
    {
      id: 2,
      value: 200,
      suffix: 'K+',
      label: 'Happy Clients',
      icon: Users
    },
    {
      id: 3,
      value: 2000,
      suffix: '+',
      label: 'Partnerd Shops',
      icon: Trophy
    },
    {
      id: 4,
      value: 200,
      suffix: 'k+',
      label: 'Shopping Transactions',
      icon: Award
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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

  return (
    <div className=" ">
      <div
        ref={sectionRef}
        className="py-12 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4 text-red-500">
                  <stat.icon size={48} strokeWidth={1.5} />
                </div>
                <div className="text-red-500 text-5xl font-bold mb-2">
                  {isVisible ? (
                    <>
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        delay={0}
                        useEasing={true}
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-red-500 text-lg font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}