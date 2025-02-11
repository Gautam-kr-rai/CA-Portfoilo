"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const details = [
  {
    id: 1,
    name: "CA Tushar Garg",
    designation: "91-7056462441 & 91-9416193523",
    image:
      "/Img/call.webp",
      link:""
  },
  {
    id: 2,
    name: "Tushar Garg",
    designation: "+91 70564 62441",
    image:
      "/Img/Wahtsapp.avif",
      link:"https://wa.me/917056462441"
  },
  {
    id: 3,
    name: "Tushar Tejpal Garg & Associate Charted Accountants",
    designation: "facebook Page",
    image:
      "/Img/facebook.jpg",
      link:"http://facebook.com/catushar.garg"
  },
  {
    id: 4,
    name: "CA Tushar Garg",
    designation: "Linkedin page",
    image:
      "/Img/Linkedin.webp",
      link:"http://www.linkedin.com/in/catuahargarg"
  },
  {
    id: 5,
    name: "catushargarg",
    designation: "Soap Developer",
    image:
      "/Img/Mail.webp",
    link:'mailto:gstworkservice@gmail.com'
  },
];

 function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={details} />
    </div>
  );
}

export default AnimatedTooltipPreview;
