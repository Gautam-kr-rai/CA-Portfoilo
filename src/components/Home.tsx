import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import TextGenerateEffectDemo from "./Letsee";
import { Cover } from "@/components/ui/cover";

 export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-black text-center">
     <h3 className="text-transparent    bg-clip-text bg-gradient-to-b from-gray-200 to-gray-500 dark:from-neutral-600 dark:to-white text-xl md:text-2xl lg:text-6xl font-bold tracking-tight leading-tight py-4 md:py-5">
    Tushar Tejpal Garg & Associates 
  </h3>
  <br /><h3 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-500 dark:from-neutral-600 dark:to-white text-xl md:text-4xl lg:text-3xl font-bold tracking-tight leading-tight py-4 md:py-3"> <Cover>Chartered Accountant</Cover></h3><br />
  <p className="w-full max-w-[90%] md:max-w-2xl text-sm md:text-lg text-neutral-400 dark:text-neutral-300 leading-relaxed">
    Welcome to <span className="font-semibold">
    Tushar Tejpal Garg & Associates 
    [Chartered Accountant] </span>
    <TextGenerateEffectDemo/>
  </p>
    </BackgroundBeamsWithCollision>
  );
}

// export default BackgroundBeamsWithCollisionDemo;