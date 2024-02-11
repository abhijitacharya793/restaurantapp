"use client";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export function Section3() {
  type Slide = {
    name: string;
    image: string;
    role: string;
  };
  const slides: Slide[] = [
    {
      name: "Avroko",
      image: "/testimonial1.svg",
      role: "Master Chef",
    },
    {
      name: "Avroko",
      image: "/testimonial2.svg",
      role: "Master Chef",
    },
    {
      name: "Avroko",
      image: "/testimonial3.svg",
      role: "Master Chef",
    },
    {
      name: "Avroko",
      image: "/testimonial4.svg",
      role: "Master Chef",
    },
  ];

  const [slidesCount, setSlidesCount] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSlidesCount((window.innerWidth < 767 && 1) || 4);
    }
  }, []);
  const SimpleSlider = () => {
    return (
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className=" px-10">
            <Image
              src="/chef1.svg"
              className="bg-app-green w-full"
              width={200}
              height={200}
              alt=""
            />
            <p className="text-center app-header text-xl font-bold">
              {slide.name}
            </p>
            <p className="text-center text-sm text-app-gray">{slide.role}</p>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto py-20">
        <div className="flex flex-col items-center justify-center">
          <p className="w-10 py-1 border-t border-b border-yellow-600 text-sm font-light">
            TEAM
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4">
            Meet Our Professional Chefs
          </p>

          <div className="items-center w-full">
            <SimpleSlider />
          </div>
        </div>
      </div>
    </>
  );
}
