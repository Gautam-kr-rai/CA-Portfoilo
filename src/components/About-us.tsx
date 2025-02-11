"use client"
import React from "react";
import { Vortex } from "./ui/vortex";
import Link from "next/link";
import CarouselDemo from "./Experties";
function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[40rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Tushar Tejpal Garg & Associates
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        At Tushar Tejpal Garg & Associates, we are committed to delivering top-tier financial, taxation, and compliance services. Founded by <p className="dark:text-red-300">&apos;CA Tushar Garg&apos;</p>, we specialize in offering tailored solutions for individuals, businesses, and organizations.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
           <CarouselDemo/>
        </div>
      </Vortex>
    </div>
  );
}

export default VortexDemo;