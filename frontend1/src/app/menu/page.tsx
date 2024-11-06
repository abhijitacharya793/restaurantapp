"use client";
import React, { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";
import { AppButton } from "@/components/AppButton";

export default function Menu() {
  // Define the food and drinks menu items with categories
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
          name: "Mumbaiya Corn Bhel",
          description: "",
          price: "295",
          veg: "green",
        },
        {
          name: "Peanut Masala",
          description: "",
          price: "275",
          veg: "green",
        },
        {
          name: "Peri Peri Chana chat",
          description: "",
          price: "275",
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
        {
          name: "Beer batter fish fingers",
          description: "",
          price: "575",
          veg: "red",
        },
        {
          name: "Butter chicken pav",
          description: "",
          price: "345",
          veg: "red",
        },
        {
          name: "Keema bao",
          description: "",
          price: "445",
          veg: "red",
        },
      ],
    },
    {
      category: "Soups",
      image: "/menu6.svg",
      items: [
        {
          name: "Thyme infused wild mushroom soup",
          description: "CREAMY & RICH FROTH OF FIELD FRESH MUSHROOMS",
          price: "295/345",
          veg: "green",
        },
        {
          name: "TOMATO BASIL SOUP VEG/CHICKEN",
          description: "BASIL FLAVORED TOMATO BROTH IS EVERYONE'S CHOICE",
          price: "295/345",
          veg: "black",
        },
        {
          name: "TIBETIAN THUPKA VEG/CHICKEN",
          description:
            "A WARM HEARTY BOWL OF SOUP WITH VEG & CHICKEN DUMPLINGS",
          price: "295/345",
          veg: "black",
        },
        {
          name: "SWEET CORN SOUP VEG/CHICKEN",
          description: "THIS SOUP IS SURE TO WARM HEARTS & STOMACHS!!!!",
          price: "295/345",
          veg: "black",
        },
        {
          name: "MANCHOW SOUP VEG/CHICKEN",
          description: "ONE OF THE MOST POPULAR INDO-CHINESE SOUP",
          price: "295/345",
          veg: "black",
        },
      ],
    },
    {
      category: "GOURMET HEALTHY SALADS",
      image: "",
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
          name: "ZESTY AVOCADO QUINOA SALAD",
          description:
            "SUPER FOOD THAT'S EASY TO LOVE, ONLY WHEN PAIRED WITH ORGANIC GREENS AND FRESH FRUITS",
          price: "525",
          veg: "green",
        },
        {
          name: "FRESH GARDEN GREEN SALAD",
          description: "CUCUMBER, ONION, TOMATO, CARROT",
          price: "245",
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

  const drinksItems = [
    {
      category: "Signature Cocktails",
      image: "/menu12.jpg",
      items: [
        {
          name: "AFTER HOURS SPECIAL",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "ORANGE MINT TO BE",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "DRUNK IN LOVE",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "PENICILLIN",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "PINK YOUR MOMENT",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "VALLEY OF SEX",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "THE SOUTHERN SOMRAS",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "HEART AND SOUL",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "BERRY HAPPY TOGETHER MARGARITA",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "RED BULL ENERGY DRINK VODKA",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "RED BULL YELLOW EDITION GIN",
          description: "",
          price: "645",
          veg: "",
        },
      ],
    },
    {
      category: "Forever Classic",
      image: "/gallery2.jpg",
      items: [
        {
          name: "COSMOPOLITAN",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "PINACOLADA",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "DAIQUIRI - CLASSIC, W/MELON, STRAWBERRY",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "BLOODY MARY",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "OLD FASHION",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "MARTINI - CLASSIC, GIMLET, GIBSON, G/APPLE",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "LIIT - CLASSIC, BEACH, SKY",
          description: "",
          price: "675/ 2490/ 950",
          veg: "",
        },
        {
          name: "LIIT - ELECTRIC",
          description: "",
          price: "745/ 2690/ 1045",
          veg: "",
        },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
      ],
    },
  ];

  const [activeMenu, setActiveMenu] = useState("food");

  return (
    <>
      <div id="content">
        <Header active_page={"home"} />
        <div className="bg-app-purple py-16 flex justify-center">
          <div className="flex space-x-6">
            {/* <button
              onClick={() => setActiveMenu("food")}
              className={`px-6 py-3 text-2xl font-semibold transition-all duration-300 rounded-md ${
                activeMenu === "food"
                  ? "bg-yellow-600 text-white shadow-lg transform scale-105"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Food Menu
            </button> */}
            <a onClick={() => setActiveMenu("food")}>
              <AppButton
                color={
                  activeMenu === "food"
                    ? "border-app-purple"
                    : "border-app-yellow"
                }
                fill={activeMenu === "food" ? "bg-app-yellow" : "bg-app-purple"}
                text={"Food Menu"}
                fontcolor={
                  activeMenu === "food" ? "text-app-purple" : "text-app-yellow"
                }
                hover_color={
                  activeMenu === "food"
                    ? "hover:border-app-purple"
                    : "hover:border-app-yellow"
                }
                hover_fill={
                  activeMenu === "food"
                    ? "hover:bg-app-yellow"
                    : "hover:bg-app-purple"
                }
                hover_fontcolor={
                  activeMenu === "food"
                    ? "hover:text-app-purple"
                    : "hover:text-app-yellow"
                }
              />
            </a>
            <a onClick={() => setActiveMenu("drinks")}>
              <AppButton
                color={
                  activeMenu === "drinks"
                    ? "border-app-purple"
                    : "border-app-yellow"
                }
                fill={activeMenu === "drinks" ? "bg-app-yellow" : "bg-app-purple"}
                text={"Drinks Menu"}
                fontcolor={
                  activeMenu === "drinks" ? "text-app-purple" : "text-app-yellow"
                }
                hover_color={
                  activeMenu === "drinks"
                    ? "hover:border-app-purple"
                    : "hover:border-app-yellow"
                }
                hover_fill={
                  activeMenu === "drinks"
                    ? "hover:bg-app-yellow"
                    : "hover:bg-app-purple"
                }
                hover_fontcolor={
                  activeMenu === "drinks"
                    ? "hover:text-app-purple"
                    : "hover:text-app-yellow"
                }
              />
            </a>
          </div>
        </div>

        <div className="bg-white py-20 px-4 lg:px-0">
          <div className="lg:max-w-screen-lg mx-auto">
            <div className="lg:pl-8 pt-4 lg:pt-0">
              {(activeMenu === "food" ? foodItems : drinksItems).map(
                (category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="py-8 w-full lg:w-full lg:flex"
                  >
                    {/* Conditionally render image before or after the category text */}
                    {category.image && categoryIndex % 2 === 0 && (
                      <div className="lg:w-2/5 mb-4 lg:mb-0 mr-4 relative">
                        <Image
                          src={category.image}
                          width={300}
                          height={300}
                          alt={category.category}
                          priority
                          className="w-full h-full object-cover object-center"
                          style={{ objectPosition: "center center" }} // Ensure the image is centered
                        />
                      </div>
                    )}

                    {/* Category text */}
                    <div className="lg:w-3/5 pr-4">
                      <p className="text-2xl font-bold text-app-gray py-2 capitalize">
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

                    {/* Image after text for odd-indexed categories */}
                    {category.image && categoryIndex % 2 !== 0 && (
                      <div className="lg:w-2/5 mt-4 lg:mt-0 relative">
                        <Image
                          src={category.image}
                          width={300}
                          height={300}
                          alt={category.category}
                          priority
                          className="w-full h-full object-cover object-center"
                          style={{ objectPosition: "center center" }} // Ensure the image is centered
                        />
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
