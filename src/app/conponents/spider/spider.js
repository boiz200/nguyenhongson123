'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
          <Image 
            src="/1.webp" 
            alt="Image 2" 
            width={400} 
            height={300} 
          
          />
      </div>
      <div>
      <Image 
            src="/2.webp" 
            alt="Image 2" 
            width={400} 
            height={300} 
          
          />
      </div>
      <div>
      <Image 
            src="/3.webp" 
            alt="Image 2" 
            width={400} 
            height={300} 
          
          />
      </div>
      <div>
      <Image 
            src="/4.webp" 
            alt="Image 2" 
            width={400} 
            height={300} 
          
          />
      </div>
      <div>
      <Image 
            src="/5.webp" 
            alt="Image 2" 
            width={400} 
            height={300} 
          
          />
      </div>
      <div>
      <Image 
            src="/6.webp" 
            alt="Image 2" 
            width={400} 
            height={300} 
          
          />
      </div>
    </Slider>
  );
}