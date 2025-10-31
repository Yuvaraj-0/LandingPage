"use client";

import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";

const WobbleCardDemo = () => {
  return (
    <>
    <section className="min-h-screen w-full flex items-center justify-center   py-10">
        
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  max-w-7xl">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-[700px] bg-pink-800 min-h-[300px]"
        >
          <div className="max-w-xs">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left text-neutral-200">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
            <div className="rounded-3xl text-white p-8 flex flex-col justify-between shadow-lg mt-4.5">
    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
    <p className="text-lg mb-4 opacity-90">
      To deliver high-quality, sustainable, and technology-driven solutions that empower industries to grow smarter and faster.
    </p>
    <ul className="space-y-2">
      <li className="text-sm text-gray-200">• Innovation & Excellence</li>
      <li className="text-sm text-gray-200">• Customer-first Approach</li>
      <li className="text-sm text-gray-200">• Global Partnerships</li>
    </ul>
  </div>
          </div>
          <img
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800">
          <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
          <div className="rounded-3xl  text-white p-8 flex flex-col justify-between shadow-lg">
    <h2 className="text-3xl font-bold mb-4">Certifications</h2>
    <p className="text-lg mb-4 opacity-90">
      Our quality and safety standards are internationally recognized through our certifications and audits.
    </p>
    <ul className="space-y-2">
      <li className="text-sm text-gray-200">• ISO 9001:2015 – Quality Management</li>
      <li className="text-sm text-gray-200">• ISO 14001 – Environmental Management</li>
      <li className="text-sm text-gray-200">• RoHS & REACH Certified</li>
    </ul>
  </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
              Signup for blazing-fast cutting-edge Gippity AI wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-neutral-200">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
            <div className="rounded-3xl  text-white p-8 flex flex-col justify-between shadow-lg">
    <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
    <p className="text-lg mb-4 opacity-90">
      Over the years, we’ve earned milestones that define our growth and commitment to excellence.
    </p>
    <ul className="space-y-2">
      <li className="text-sm text-gray-200">• 500+ Clients Worldwide</li>
      <li className="text-sm text-gray-200">• 10+ Industry Awards</li>
      <li className="text-sm text-gray-200">• Top 50 Tech-driven SMEs 2024</li>
    </ul>
  </div>
          </div>
          <img
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
    </>
  );
};

export default WobbleCardDemo;
