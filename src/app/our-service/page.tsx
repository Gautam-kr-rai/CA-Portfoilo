"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full py-12 pt-36">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative"
        className=""
      > 
        <div className="max-w-xs relative z-10">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Financial Advisory:
          </h2>
          <ul className="text-gray-200 leading-relaxed font-medium py-1 list-disc pl-5">
            <li>Business Planning & Forecasting</li>
            <li>Cost Optimization Strategies</li>
            <li>Cash Flow Management</li>
          </ul>
        </div>
        <div className="absolute inset-0 flex justify-end items-center p-4">
  <Image
    src="/Img/ad.webp"
    width={500}
    height={500}
    alt="linear demo image"
    className="w-full max-w-[150px] h-auto rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 transform-gpu hover:shadow-xl sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px]"
  />
</div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          ROC & Corporate Compliance:
        </h2>
        <ul className="text-gray-200 leading-relaxed font-medium py-1 list-disc pl-5">
          <li>Company Formation & Registration</li>
          <li>Filing of Annual Returns and ROC Forms</li>
          <li>Compliance with Companies Act, 2013</li>
        </ul>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
        <div className="max-w-sm relative z-10">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Taxation Services:
          </h2>
          <div>
            <h2 className="text-lg font-semibold text-gray-100 mt-2">Direct Taxation:</h2>
            <ul className="text-gray-200 leading-relaxed font-medium py-1 list-disc pl-5">
              <li>Income Tax Return Filing</li>
              <li>Tax Audit & Compliance</li>
              <li>Strategic Tax Planning</li>
            </ul>
            <h2 className="text-lg font-semibold text-gray-100 mt-4">Indirect Taxation (GST):</h2>
            <ul className="text-gray-200 leading-relaxed font-medium py-1 list-disc pl-5">
              <li>GST Registration</li>
              <li>Monthly/Quarterly GST Return Filing</li>
              <li>GST Advisory & Audits</li>
            </ul>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-end items-center p-4">
  <Image
    src="/Img/Tax.jpg"
    width={500}
    height={500}
    alt="linear demo image"
    className="w-full max-w-[250px] h-auto rounded-lg object-cover shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 opacity-100 transform-gpu hover:shadow-xl sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px]"
  />
</div>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]  relative"
      >
        <div className="max-w-xs relative z-10">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Audit & Assurance:
          </h2>
          <ul className="text-gray-200 leading-relaxed font-medium py-1 list-disc pl-5">
            <li>Statutory & Internal Audits</li>
            <li>GST Audits</li>
            <li>Financial Reporting & Assurance</li>
          </ul>
        </div>
        <div className="absolute inset-0 flex justify-end items-center p-4">
        <Image
  src="/Img/Audit.jpg"
  width={500}
  height={500}
  alt="linear demo image"
  className="w-full max-w-[250px] h-auto rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
/>
        </div>
    
      </WobbleCard>
    </div>
  );
}

export default WobbleCardDemo;
