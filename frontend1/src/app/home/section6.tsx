"use client";
import { AppButton } from "@/components/AppButton";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export function Section6() {
  type Slide = {
    name: string;
    image: string;
    description: string;
    price: string;
  };
  const slides: Slide[] = [
    {
      name: "Chicken Manjoori",
      image: "/popular1.svg",
      description: "Lorem Ipsum is that it has a more-or-less normal",
      price: "15",
    },
    {
      name: "Chicken Manjoori",
      image: "/popular2.svg",
      description: "Lorem Ipsum is that it has a more-or-less normal",
      price: "15",
    },
    {
      name: "Chicken Manjoori",
      image: "/popular3.svg",
      description: "Lorem Ipsum is that it has a more-or-less normal",
      price: "15",
    },
    {
      name: "Chicken Manjoori",
      image: "/popular4.svg",
      description: "Lorem Ipsum is that it has a more-or-less normal",
      price: "15",
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
          <div key={index} className="px-2">
            <Image
              alt=""
              width={300}
              height={300}
              src={slide.image}
              className="flex justify-center"
            />
            <div className="flex my-2 app-header font-bold text-xl">
              <p className="w-full">{slide.name}</p>
              <p>${slide.price}</p>
            </div>
            <p className="text-sm text-app-gray">{slide.description}</p>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto pb-10">
        <div className="flex flex-col items-center justify-center">
          <p className="w-12 p-1 border-t border-b border-yellow-600 text-sm font-light">
            MENU
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4">
            Popular Dishes
          </p>
          <p className="pt-1 pb-4 text-sm text-app-gray w-96">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content making.
          </p>
        </div>
        <div className="px-4 lg:px-0">
          <SimpleSlider />
        </div>
        <div className="flex items-center justify-center pt-10">
          <AppButton
            color="border-app-yellow mb-16"
            fill="bg-white"
            fontcolor="text-app-yellow"
            text="See all dishes"
            hover_color={"hover:border-app-yellow"}
            hover_fill={"hover:bg-app-yellow"}
            hover_fontcolor={"hover:text-app-purple"}
          />
        </div>
      </div>
    </>
  );
}
