"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

import AnimatedTooltipPreview from "@/components/Getintouch";

function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Get in Touch
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Stay updated with the latest Income Tax and GST laws, along with practical guides on tax savings, compliance, and financial planning. Get in touch for expert insights and personalized assistance! 🚀
      </p>
      <div className="mt-3">
     < AnimatedTooltipPreview/>
      </div>
    </WavyBackground>
  );
}
export default WavyBackgroundDemo;