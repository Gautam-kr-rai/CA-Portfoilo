"use client"
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import CarouselDemo from "@/components/Experties";
function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-lg h-[50rem] overflow-hidden bg-black/90 shadow-2xl relative pt-16">
    <Vortex
      backgroundColor="black"
      className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-12 w-full h-full"
    >
      {/* Heading */}
      <h6 className="text-blue-400 text-4xl sm:text-3xl md:text-3xl font-extrabold text-center leading-tight mt-8">
        About Us
      </h6>
  
      {/* Description */}
      <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mt-6 text-center leading-relaxed">
        At <span className="text-red-300 font-semibold">Tushar Tejpal Garg & Associates</span>, we are committed to delivering 
        top-tier financial, taxation, and compliance services. Founded by{' '}
        <span className="text-red-400 font-bold">CA Tushar Garg</span>, we specialize in offering tailored solutions for 
        individuals, businesses, and organizations.
      </p>
  
      {/* Carousel */}
      <p className="text-white text-lg sm:text-xl md:text-2xl font-medium mt-8">We offer ⤵️</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-6 w-full max-w-5xl px-6 pb-10">
        <CarouselDemo />
      </div>
    </Vortex>
  </div>
  
  );
}

export default VortexDemo;