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

  return (
    <>
      {/* Header top */}
      <div className="sm:flex items-center lg:max-w-screen-lg sm:max-w-screen-sm mx-auto py-5 bg-app-purple">
        <div className="lg:h-44 xl:h-44 2xl:h-44 lg:w-1/3 flex items-center md:justify-start justify-center mx-auto pt-4">
          <AppButton
            color="border-app-yellow"
            fill="bg-app-purple"
            fontcolor="text-white"
            text="Call - 98102 52704"
            hover_color={"hover:border-app-yellow"}
            hover_fill={"hover:bg-app-yellow"}
            hover_fontcolor={"hover:text-app-purple"}
          />
        </div>
        <div className="lg:h-44 xl:h-44 2xl:h-44 lg:w-1/3 flex items-center justify-center">
          <Image
            className="h-48"
            src="/logo1.svg"
            width={250}
            height={80}
            alt="logo"
            priority
          />
        </div>
        <div className="lg:h-44 xl:h-44 2xl:h-44 lg:w-1/3 flex items-center md:justify-end justify-center mx-auto pb-4">
          <AppButton
            color="border-app-yellow"
            fill="bg-app-yellow"
            fontcolor="text-app-purple"
            text="Reservation"
            hover_color={"hover:border-app-yellow"}
            hover_fill={"hover:bg-app-purple"}
            hover_fontcolor={"hover:text-app-yellow"}
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
              className={`${
                link.href === path ? "font-bold text-app-yellow" : ""
              } hover:text-app-yellow`}
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
