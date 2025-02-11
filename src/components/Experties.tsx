
import * as React from "react";
import { Card, CardContent } from "@/components/ui2/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui2/carousel";

function CarouselDemo() {
  const arr = [
    "Tax Planning & Compliance",
    "GST Advisory & Filing",
    "ROC Filing & Company Incorporation",
    "Business Advisory Services",
  ]; // Corrected array with proper strings

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {arr.map((item, index) => ( // Map over the `arr` array
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl text-white font-semibold text-center">{item}</span> {/* Display the array item */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselDemo;