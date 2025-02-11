import Image from "next/image";
import {BackgroundLinesDemo} from "@/components/HeroSection";
import TextGenerateEffectDemo from "@/components/Letsee";

import VortexDemo from "./About/page";
import WobbleCardDemo from "./our-service/page";

import StickyScrollRevealDemo from "@/components/Vison";
import WavyBackgroundDemo from "@/components/Contact";
import {BackgroundBeamsWithCollisionDemo} from "@/components/Home";


export default function Home() {
  return (
   
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       < BackgroundBeamsWithCollisionDemo/>
        {/* <BackgroundLinesDemo/> */}
        <VortexDemo/>
        <WobbleCardDemo/>
        <StickyScrollRevealDemo/>
       
      </main>

  );
}


