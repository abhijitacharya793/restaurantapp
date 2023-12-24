"use client";

import { usePathname } from "next/navigation";
import { AppButton } from "./AppButton";
import Image from "next/image";

import { motion } from "framer-motion";

type HeaderProps = {
  active_page: string;
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

export function Header({ active_page }: HeaderProps) {
  const path = usePathname();
  console.log("PATH:", path);
  return (
    <>
      {/* Header top */}
      <div className="flex items-center lg:max-w-screen-lg sm:max-w-screen-sm mx-auto my-5">
        <div className="h-44 w-1/3 flex items-center justify-start">
          <AppButton
            color="app-yellow"
            fill="app-purple"
            fontcolor="white"
            text="Call - 987 654 321"
          />
        </div>
        <div className="h-44 w-1/3 flex items-center justify-center">
          <Image src="/logo.svg" width={250} height={250} alt="logo" priority />
        </div>
        <div className="h-44 w-1/3 flex items-center justify-end">
          <AppButton
            color="app-yellow"
            fill="app-yellow"
            fontcolor="app-purple"
            text="Reservation"
          />
        </div>
      </div>
      <hr className="border-slate-400" />
      {/* Header nav */}
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex text-left py-2">
        {/* space */}

        {/* 7 parts of 12 */}
        {links.map((link) => (
          <motion.div
            key={link.text}
            whileHover={{ scale: 1.1 }}
            className={`w-1/12 h-10 py-2 text-white capitalize ${link.margin}`}
          >
            <a
              href={link.href}
              className={`${link.href === path ? "font-bold" : ""}`}
            >
              {link.text}
            </a>
          </motion.div>
        ))}
        {/* space */}
        <div className="w-1/3 h-10 py-2"></div>
        {/* socials */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex w-1/12 h-10 py-2 justify-end"
        >
          <Image
            alt=""
            width={100}
            height={100}
            src="/insta.svg"
            className="h-5 w-5 mx-2"
          />
          <Image
            alt=""
            width={100}
            height={100}
            src="/facebook.svg"
            className="h-5 w-5 mx-2"
          />
          <Image
            alt=""
            width={100}
            height={100}
            src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/655afe9f73021a4d4bc26a34_social-white-icon-3.svg"
            className="h-5 w-5 mx-2"
          />
          <Image
            alt=""
            width={100}
            height={100}
            src="/pintrest.svg"
            className="h-5 w-5 mx-2"
          />
        </motion.div>
        {/* space */}
      </div>
      <hr className="border-slate-400" />
    </>
  );
}
