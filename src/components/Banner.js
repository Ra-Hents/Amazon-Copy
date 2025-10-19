import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={5000}
        showDots={false}
        arrows={true}
        containerClass="w-full h-full"
        itemClass="w-full"
      >
        <div>
          <img  className="object-cover w-full h-full" loading='lazy' src="https://links.papareact.com/gi1" alt="Banner 1" />
        </div>
        <div>
          <img  className="object-cover w-full h-full"  loading='lazy' src="https://links.papareact.com/6ff" alt="Banner 2" />
        </div>
        <div>
          <img  className="object-cover w-full h-full" loading='lazy' src="https://links.papareact.com/7ma" alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner;
