"use client";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export function Section4() {
  type Slide = {
    name: string;
    image: string;
    location: string;
    testimonial: string;
  };
  const slides: Slide[] = [
    {
      name: "Dipesh Jha",
      // image: "/testimonial1.svg",
      image: "/undraw_male_avatar_g98d.svg",
      location: "Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
      testimonial:
        "'It was a wonderful experience dining there.. I went there with our friends. We tried north indian cuisine. The taste of food was awesome.. The service is between moderate to good...and the ambience is also awesome.. Rate is genuine .. The outdoor place for dining is quite wonderful and it looks more awesome at night The metro facing view makes it more good....'",
    },
    {
      name: "Jitya Saji",
      // image: "/testimonial3.svg",
      image: "/undraw_male_avatar_g98d.svg",
      location: "Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
      testimonial:
        "'The FOOD is Amazing!I Loved the ambiance since it has both outdoor and indoor sitting and is very aesthetic. The service is great. They are always available if you need help with anything. This place is our new meet up and party spot.'",
    },
    {
      name: "Vaishali Sethi",
      // image: "/testimonial2.svg",
      image: "/undraw_female_avatar_efig.svg",
      location: "Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
      testimonial:
        "'It was a beautiful evening, Pretty happening place with both indoor and outdoor seating. Great flavour and texture - definitely recommend. Service was prompt and efficient. It is also really friendly staff Like UMA, SANA, KAVITA I Tried cold coffee Mocktail, Pizza, Brownies'",
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
      setSlidesCount((window.innerWidth < 767 && 1) || 3);
    }
  }, []);
  const SimpleSlider = () => {
    return (
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full lg:w-1/3 mr-4 px-2">
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
                    <p className="text-app-yellow">{slide.location}</p>
                  </div>
                </div>
                <hr className="border border-slate-500 my-3" />
                <div className="mt-4">
                  <p className="app-header text-white italic">
                    {slide.testimonial}
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
          <SimpleSlider />
        </div>
      </div>
    </>
  );
}
