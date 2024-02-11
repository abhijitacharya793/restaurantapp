"use client";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Section4() {
  const slides = [
    {
      name: "Daniyal Sppra",
      image: "/testimonial1.svg",
      location: "",
      testimonial:
        "&quot;It is professional, considers everyone&apos;s time, can think about the There are many variations of passages whole probls small niche, friendly.&quot;",
    },
    {
      name: "Natasha D",
      image: "/testimonial2.svg",
      location: "",
      testimonial:
        "&quot;It is professional, considers everyone&apos;s time, can think about the There are many variations of passages whole probls small niche, friendly.&quot;",
    },
    {
      name: "Jack Sparrow",
      image: "/testimonial3.svg",
      location: "",
      testimonial:
        "&quot;It is professional, considers everyone&apos;s time, can think about the There are many variations of passages whole probls small niche, friendly.&quot;",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: (window.innerWidth < 768 && 1) || 3,
    slidesToScroll: 1,
  };

  const SimpleSlider = ({ slides }) => {
    return (
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="lg:w-1/3 mr-4 px-2">
            <div className="bg-app-dark-purple overflow-hidden p-3">
              <div className="p-4">
                <div className="flex items-center">
                  <Image
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full mr-4"
                    src={slide.image}
                    alt="Avatar"
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-white">
                      {slide.name}
                    </h2>
                    <p className="text-app-yellow">Newyork</p>
                  </div>
                </div>
                <hr className="border border-slate-500 my-3" />
                <div className="mt-4">
                  <p className="app-header text-white italic">
                    &quot;It is professional, considers everyone&apos;s time,
                    can think about the There are many variations of passages
                    whole probls small niche, friendly.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto py-20 px-8 lg:px-0">
        <div>
          <p className="w-24 p-1 border-t border-b border-yellow-600 text-white text-sm font-light ">
            TESTIMONIAL
          </p>
        </div>
        <p className="app-header text-3xl font-bold pb-3 text-white pt-4">
          What our clients say
        </p>
        <p className="pb-4 text-white">
          We love to hear from customers, so please leave a comment or say hello
          in an email.
        </p>
        <div className="">
          <SimpleSlider slides={slides} />
        </div>
      </div>
    </>
  );
}
