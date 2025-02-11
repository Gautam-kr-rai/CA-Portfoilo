"use client"; // Mark the component as a Client Component

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import industriesdata from "@/data/Indutries.json"
function ThreeDCardDemo() {
  return (

    <div className="min-h-screen bg-black py-12 pt-36">
    <h4 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-white">
    We cater to businesses across multiple sectors, including:  
    </h4>
    <div className="flex flex-wrap justify-center">
      {industriesdata.industires.map((course, index) => (
        <CardContainer key={course.id || index} className="inter-var m-2">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {course.title}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={course.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={course.title}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
    <p className="text-lg md:text-4xl text-center font-sans font-bold mb-8 p-20 text-white">No matter your industry, our solutions are designed to align with your specific goals and compliance needs."</p>
  </div>
);
}

export default ThreeDCardDemo;