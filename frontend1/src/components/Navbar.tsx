"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const links = [
    { href: "/home", text: "home", margin: "mr-8" },
    { href: "/about", text: "about", margin: "mr-8" },
    { href: "/menu", text: "menu", margin: "mr-8" },
    { href: "/reservation", text: "reservation", margin: "mr-12" },
    { href: "/gallery", text: "gallery", margin: "mr-8" },
    { href: "/blog", text: "blog", margin: "mr-4" },
    { href: "/contact", text: "contact", margin: "mr-8" },
  ];

  const path = usePathname();

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto flex text-left py-2">
        {/* Hamburger Menu Icon */}
        <div
          className="block lg:hidden cursor-pointer items-center bg-white mx-2 h-10"
          onClick={toggleMenu}
        >
          <Bars3Icon className="w-6 h-6 text-black mx-4 my-2" />
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center w-full lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* 7 parts of 12 */}
          {links.map((link) => (
            <motion.div
              key={link.text}
              whileHover={{ scale: 1.1 }}
              className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/12 h-10 py-2 text-white capitalize ${link.margin}`}
            >
              <a
                href={link.href}
                className={`${
                  link.href === path ? "font-bold text-app-yellow" : ""
                } hover:text-app-yellow`}
              >
                {link.text}
              </a>
            </motion.div>
          ))}
          {/* space */}

          {/* space */}
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3 h-10 py-2"></div>
        {/* socials */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex w-full sm:w-1/2 md:w-1/4 lg:w-1/12 h-10 py-2 justify-end"
        >
          <a href="https://www.instagram.com/cafe_after_hours/" target="_blank">
            <Image
              alt=""
              width={100}
              height={100}
              src="/insta.svg"
              className="h-5 w-5 mx-4"
            />
          </a>
          <a href="https://www.instagram.com/cafe_after_hours/" target="_blank">
            <Image
              alt=""
              width={100}
              height={100}
              src="/facebook.svg"
              className="h-5 w-5 mx-4"
            />
          </a>
          <a href="https://www.instagram.com/cafe_after_hours/" target="_blank">
            <Image
              alt=""
              width={100}
              height={100}
              src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/655afe9f73021a4d4bc26a34_social-white-icon-3.svg"
              className="h-5 w-5 mx-4"
            />
          </a>
          <a href="https://www.instagram.com/cafe_after_hours/" target="_blank">
            <Image
              alt=""
              width={100}
              height={100}
              src="/pintrest.svg"
              className="h-5 w-5 mx-4"
            />
          </a>
        </motion.div>
      </div>
    </>
  );
}
