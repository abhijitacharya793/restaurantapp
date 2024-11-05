"use client";
import React, { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";

export default function Menu() {
  // Define the food and drinks menu items with categories
  const foodItems = [
    {
      category: "Bar Titbits",
      items: [
        {
          name: "French Fries",
          description: "Plain/Peri Peri/Cheesey",
          price: "295/345",
          imageSrc: "/menu2.jpg",
          veg: "true",
        },
        {
          name: "Spring Roll",
          description: "Candied Jerusalem artichokes, truffle",
          price: "$20",
          imageSrc: "/menu3.svg",
          veg: "true",
        },
      ],
    },
    {
      category: "Soups",
      items: [
        {
          name: "French Onion Soup",
          description: "Candied Jerusalem artichokes, truffle",
          price: "$25",
          imageSrc: "/menu4.svg",
          veg: "true",
        },
      ],
    },
  ];

  const drinksItems = [
    {
      category: "Cocktails",
      items: [
        {
          name: "Mojito",
          description: "Rum, lime, mint, soda water",
          price: "$15",
          imageSrc: "/menu6.jpg",
          veg: "true",
        },
        {
          name: "Pina Colada",
          description: "Rum, pineapple juice, coconut cream",
          price: "$18",
          imageSrc: "/menu7.jpg",
          veg: "true",
        },
      ],
    },
    {
      category: "Non-Alcoholic",
      items: [
        {
          name: "Lemonade",
          description: "Fresh lemon, sugar, water",
          price: "$8",
          imageSrc: "/menu8.jpg",
          veg: "true",
        },
      ],
    },
  ];

  const [activeMenu, setActiveMenu] = useState("food");

  // Helper function to get the active menu's header based on the category
  const getMenuHeader = (menu) => {
    if (menu === "food") {
      return foodItems.map((item) => item.category).join(", ");
    } else if (menu === "drinks") {
      return drinksItems.map((item) => item.category).join(", ");
    }
    return "";
  };

  return (
    <>
      <div id="content">
        <Header active_page={"home"} />
        <div className="bg-app-purple py-16 flex justify-center">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveMenu("food")}
              className={`px-2 py-1 text-3xl font-bold ${
                activeMenu === "food"
                  ? "border-t border-b border-yellow-600 text-white"
                  : "text-gray-300"
              }`}
            >
              Food Menu
            </button>
            <button
              onClick={() => setActiveMenu("drinks")}
              className={`px-2 py-1 text-3xl font-bold ${
                activeMenu === "drinks"
                  ? "border-t border-b border-yellow-600 text-white"
                  : "text-gray-300"
              }`}
            >
              Drinks Menu
            </button>
          </div>
        </div>

        <div className="bg-white py-20 px-4 lg:px-0">
          <div className="lg:max-w-screen-lg mx-auto lg:flex">
            {activeMenu === "food" ? (
              <div className="lg:w-2/5">
                <Image
                  src="/menu6.svg"
                  width={300}
                  height={300}
                  alt="Food Menu"
                  priority
                  className="w-full"
                />
              </div>
            ) : (
              <div className="lg:w-2/5">
                <Image
                  src="/menu12.jpg"
                  width={300}
                  height={300}
                  alt="Drinks Menu"
                  priority
                  className="w-full"
                />
              </div>
            )}

            <div className="lg:w-3/5 lg:pl-8 pt-4 lg:pt-0">
              <p className="app-header text-3xl font-bold pb-3">
                {getMenuHeader(activeMenu)}
              </p>

              {(activeMenu === "food" ? foodItems : drinksItems).map(
                (category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <p className="text-2xl font-bold text-app-gray py-2">
                      {category.category}
                    </p>
                    {category.items.map((item, index) => (
                      <div key={index} className="flex py-4">
                        <div className="pr-2">
                          {(item.veg === "true" && (
                            <div className="green-dot-container">
                              <div className="green-dot"></div>
                            </div>
                          )) || (
                            <div className="red-dot-container">
                              <div className="red-dot"></div>
                            </div>
                          )}
                        </div>
                        <div className="w-full flex">
                          <div>
                            <p className="text-xl app-header font-bold">
                              {item.name}
                            </p>
                            <p className="text-sm text-app-gray">
                              {item.description}
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
