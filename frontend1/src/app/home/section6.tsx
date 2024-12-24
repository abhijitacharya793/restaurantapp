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
      name: "burrah kebab",
      image: "/popular6.jpg",
      description:
        "a mesmerizing jewel from the mughlai kitchen the burrah or big kebab is melange of tender lamb chops",
      price: "",
    },
    {
      name: "Chicken Sharabi Tikka",
      image: "/popular7.jpg",
      description:
        "after hour's patrons favourite chicken marinated in rum cooked in charcoal oven and flambe in rum",
      price: "",
    },
    {
      name: "Dumplings",
      image: "/popular8.jpeg",
      description:
        "hand-crafted and filled with savory treasures, steamed to perfection, then crisped to golden-brown bliss",
      price: "",
    },
    {
      name: "Lucknowee Mutton Galouti Kebab",
      image: "/popular9.jpg",
      description:
        "mouth melting minced mutton blended with lucknowee spices and desi ghee served on ulta tawa paratha",
      price: "",
    },
    {
      name: "Smoked chicken Quesadillas",
      image: "/popular12.jpeg",
      description:
        "a mixture of smoky chicken and cheese to create one of the best quesadillas ever!!!!",
      price: "",
    },
    {
      name: "Tandoori pomfret",
      image: "/popular13.jpeg",
      description:
        "WHOLE POMFRET MARINATED IN SPICY TANDOORI YOGURT & COOKED TO PERFECTION IN TANDOOR",
      price: "",
    },
    {
      name: "Mocha mud cake",
      image: "/popular10.jpg",
      description:
        "a rich, indulgent chocolate cake layered with velvety mocha cream, creating the perfect balance of coffee and cocoa flavors",
      price: "",
    },
    {
      name: "Pink your moment",
      image: "/popular11.jpeg",
      description:
        "a vibrant, refreshing pink drink made with a blend of fruits and a hint of citrus, perfect for celebrating special moments",
      price: "",
    },
  ];

  const [slidesCount, setSlidesCount] = useState(1);
  const [slidesToScrollCount, setSlidesToScrollCount] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: slidesToScrollCount,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSlidesCount((window.innerWidth < 767 && 1) || 4);
      setSlidesToScrollCount((window.innerWidth < 767 && 1) || 2);
    }
  }, []);
  const SimpleSlider = () => {
    return (
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2 relative overflow-hidden group">
            <Image
              alt=""
              width={300}
              height={300}
              src={slide.image}
              className="flex justify-center object-cover h-48"
            />
            <div className="flex my-2 app-header font-bold text-xl">
              <p className="w-full capitalize">{slide.name.toLowerCase()}</p>
              <p>{slide.price}</p>
            </div>
            <p className="text-sm text-app-gray capitalize">
              {slide.description.toLowerCase()}
            </p>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto pb-10 px-10 lg:px-0 py-20">
        <div className="flex flex-col items-center justify-center">
          <p className="w-12 p-1 border-t border-b border-yellow-600 text-sm font-light">
            MENU
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4">
            Popular Dishes
          </p>
          <p className="pt-1 pb-4 text-sm text-app-gray lg:w-2/3 flex items-center justify-center">
            Explore our most popular drinks and snacks, perfect for a night out
            with friends.
          </p>
        </div>
        <div className="px-4 lg:px-0">
          <SimpleSlider />
        </div>
        <div className="flex items-center justify-center pt-10">
          <a href="/menu">
            <AppButton
              color="border-app-yellow mb-16"
              fill="bg-white"
              fontcolor="text-app-yellow"
              text="See all dishes"
              hover_color={"hover:border-app-yellow"}
              hover_fill={"hover:bg-app-yellow"}
              hover_fontcolor={"hover:text-app-purple"}
            />
          </a>
        </div>
      </div>
    </>
  );
}
