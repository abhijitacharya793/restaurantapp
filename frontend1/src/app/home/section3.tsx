"use client";
import { AppButton } from "@/components/AppButton";
import Image from "next/image";

import { motion } from "framer-motion";

export function Section3() {
  const foodItems = [
    {
      category: "Bar Titbits",
      image: "/menu6.svg",
      items: [
        {
          name: "French Fries",
          description: "Plain/Peri Peri/Cheesey",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Garlic Bread",
          description: "Plain/Cheese",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Potato Wedges",
          description: "Plain/Peri Peri",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Chicken 65",
          description: "",
          price: "445",
          veg: "red",
        },
        {
          name: "Grilled fish skewers",
          description: "",
          price: "495",
          veg: "red",
        },
      ],
    },
    {
      category: "GOURMET HEALTHY SALADS",
      image: "/menu10.svg",
      items: [
        {
          name: "FIGS AND APRICOT",
          description:
            "FIGS AND APRICOT MIXED WITH ORGANIC GREENS & BALSAMIC VINAIGRETTE MAPLE DRESSING",
          price: "395",
          veg: "green",
        },
        {
          name: "FATTOUSH",
          description:
            "MEDITERRANEAN GREENS TOSSED WITH POMEGRANATE AND SUMMER GARDEN DRESSING",
          price: "395",
          veg: "green",
        },
        {
          name: "WATERMELON FETA CHEESE",
          description:
            "SALAD TOSSED WITH WATERMELON, POMEGRANATE AND VINAIGRETTE TOPPED WITH CRUMBLED FETA",
          price: "395",
          veg: "green",
        },
        {
          name: "CLASSIC CAESAR VEG/CHICKEN",
          description: "FRESH GREENS TOSSED WITH CAESAR DRESSING & CROUTONS",
          price: "395/445",
          veg: "black",
        },
      ],
    },
  ];
  const itemVariant = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={itemVariant}
        viewport={{ once: true, amount: 0.2 }}
        className="lg:max-w-screen-lg mx-auto lg:flex text-left pt-20 px-4 lg:px-0"
      >
        <div className="flex lg:w-2/5 justify-start">
          <div className="w-auto lg:pr-16">
            <div>
              <p className="w-12 p-1 border-t border-b border-yellow-600 text-sm font-light">
                MENU
              </p>
            </div>
            <p className="app-header text-3xl font-bold pt-3">
              Try Our Special Menu
            </p>
            <p className="pt-3 text-sm text-app-gray text-justify">
              At Café After Hours, our menu is a culinary journey that blends
              flavors from around the world. From comforting classics to
              innovative fusion dishes, every plate is thoughtfully crafted to
              offer something unique.
            </p>
            <p className="pt-3 text-sm text-app-gray text-justify">
              Whether you&apos;re in the mood for light bites or a hearty meal,
              our multi-cuisine menu features an array of international flavors,
              complemented by handcrafted beverages and signature cocktails.
              Each dish is designed to delight, making every visit a new
              experience to savor.
            </p>
            <Image
              src="/menu1.jpg"
              width="300"
              height="500"
              alt="home"
              className="pt-4"
            />
            <div className="pt-8">
              <a href="/menu">
                <AppButton
                  color="border-app-yellow"
                  fill="bg-white"
                  fontcolor="text-yellow-600"
                  text="View Menu"
                  hover_color={"hover:border-app-yellow"}
                  hover_fill={"hover:bg-app-yellow"}
                  hover_fontcolor={"hover:text-app-purple"}
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          {foodItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="py-8 w-full lg:w-full ">
              {/* Category text */}
              <div className="pr-4">
                <p className="text-2xl font-bold text-black py-2 capitalize app-header">
                  {category.category.toLowerCase()}
                </p>
                {category.items.map((item, index) => (
                  <div key={index} className="flex py-4">
                    <div className="pr-2">
                      <div className={`${item.veg}-dot-container`}>
                        <div className={`${item.veg}-dot`}></div>
                      </div>
                    </div>
                    <div className="w-full flex items-end mb-2">
                      <div>
                        <p className="text-xl app-header font-bold capitalize">
                          {item.name.toLowerCase()}
                        </p>
                        <p className="text-sm text-app-gray capitalize">
                          {item.description.toLowerCase()}
                        </p>
                      </div>
                      <div className="flex-1 border-b border-dotted border-gray-400"></div>
                      <div className="w-1/6 flex items-end font-bold app-header text-xl">
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
