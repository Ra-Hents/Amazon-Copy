import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Banner() {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={5000}
        showDots={false}
        arrows
        containerClass="w-full h-full"
        itemClass="w-full"
      >
        {[
          "https://links.papareact.com/gi1",
          "https://links.papareact.com/6ff",
          "https://links.papareact.com/7ma",
        ].map((src, i) => (
          <div key={i} className="relative w-full h-[400px] md:h-[600px]">
            <Image
              src={src}
              alt={`Banner ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
