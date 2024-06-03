"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { LucideArrowLeftCircle, LucideArrowRightCircle } from "lucide-react";
import Image from "next/image";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Generate an array of image paths
  const imagePaths = Array.from({ length: 27 }, (_, index) => `/images/gallery/gallery${index + 1}.jpg`);

  return (
    <div className="py-8 md:py-16">
      <div className="embla mx-auto max-w-5xl">
        <div
          className="embla__viewport  border rounded-3xl overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container h-full flex">
            {imagePaths.map((path, index) => (
              <div key={index} className="embla__slide flex items-center justify-center">
                <Image
                  src={path}
                  alt={`Gallery Image ${index + 1}`}
                  width={500} // Adjust width as needed
                  height={300} // Adjust height as needed
                  objectFit="cover" // Optional: to maintain aspect ratio
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-between">
          <LucideArrowLeftCircle
            onClick={scrollPrev}
            className="text-info cursor-pointer"
          />

          <LucideArrowRightCircle
            onClick={scrollNext}
            className="text-info cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
