"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; 
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"; // Removed CarouselNext and CarouselPrevious

interface CarouselProps {
  items: { imageUrl: string; title: string; description: string; altText: string }[];
  autoplayDelay?: number;
}

export const CarouselComponent: React.FC<CarouselProps> = ({
  items,
  autoplayDelay = 10000,
}) => {
  // Use the autoplay plugin directly without the plugin reference
  const autoplayPlugin = React.useRef(Autoplay({ delay: autoplayDelay, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[autoplayPlugin.current]} // Use the ref for autoplay plugin
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-44 lg:h-[500px] rounded-lg">
              <Image
                src={item.imageUrl}
                alt={item.altText}
                width={1920} // Full width
                height={1080} // Appropriate aspect ratio for the image
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute bottom-10 left-0 w-full text-center p-6 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base md:text-lg">{item.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
