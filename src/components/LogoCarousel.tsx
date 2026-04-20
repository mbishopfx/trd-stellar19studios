"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

const logos = [
  { name: "Cosmos Country", src: "/assets/clients/CosmosCountry.jpg" },
  { name: "She Designs Her Life", src: "/assets/clients/SheDesignsHerLifePod.jpg" },
  { name: "Destination Talk", src: "/assets/clients/DestinationTalkPod.jpg" },
  { name: "Take A Savvy Seat", src: "/assets/clients/TakeASavvySeatPod.jpeg" },
  { name: "Fight Factory", src: "/assets/clients/FightFactoryWrestlingPodcast.jpg" },
  { name: "The Jimmy Palumbo Show", src: "/assets/clients/TheJimmyPalumboShow.jpg" },
  { name: "Gabby AF", src: "/assets/clients/GabbyAFPodcast.jpg" },
  { name: "The U Go Boy", src: "/assets/clients/TheUGoBoyPodcast.jpg" },
  { name: "Jersey Boyz", src: "/assets/clients/JerseyBoyzPod.jpg" },
];

export default function LogoCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <div className="w-full py-12 border-y border-white/5 bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/60 text-center md:text-left">
          Trusted by the Heavy Hitters
        </p>
      </div>
      
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="embla__slide flex-[0_0_200px] min-w-0 px-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <div className="relative aspect-square w-full filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
