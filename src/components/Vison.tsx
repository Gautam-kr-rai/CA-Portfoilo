"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Why Choose Us?",
    description: (
      <ul className="list-none space-y-2">
      <li className="relative pl-8 text-lg font-medium text-gray-600 before:absolute before:left-0 before:top-0 before:text-blue-500 before:content-['✔']">
        Comprehensive Industry Expertise
      </li>
      <li className="relative pl-8 text-lg font-medium text-gray-600 before:absolute before:left-0 before:top-0 before:text-blue-500 before:content-['✔']">
        Transparent and Timely Solutions
      </li>
      <li className="relative pl-8 text-lg font-medium text-gray-600 before:absolute before:left-0 before:top-0 before:text-blue-500 before:content-['✔']">
        Client-Centric Approach
      </li>
    </ul>
     ),
    
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Why us ?
      </div>
    ),
  },
  {
    title: "Mission",
    description: (<p className="relative pl-8 text-lg font-medium text-gray-600 before:absolute before:left-0 before:top-0 before:text-blue-500">To empower our clients with clear, concise, and compliant financial solutions that drive success in today’s competitive environment.</p>
  ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
         <p>Mission</p>
      </div>
    ),
  },
];
function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;
