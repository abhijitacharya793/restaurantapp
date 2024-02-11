"use client";
import Image from "next/image";

import { AppButton } from "@/components/AppButton";

import { motion } from "framer-motion";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto lg:flex text-center">
        <div className="lg:w-1/2 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="items-center text-left"
          >
            <h1 className="text-3xl lg:text-6xl text-white app-header font-bold lg:pt-32 pt-10 text-center px-10 lg:text-left lg:px-0">
              Welcome to <br />
              Café <span className="text-app-yellow">After Hours</span>
            </h1>

            <p className="text-sm text-white pt-8 lg:w-96 text-center px-10 lg:px-0 lg:text-left">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy .
            </p>
            <div className="py-8 flex justify-center lg:justify-start">
              <a href="/menu">
                <AppButton
                  color="border-app-yellow lg:mb-16 mb-5"
                  fill="bg-app-purple"
                  fontcolor="text-white"
                  text="View Menu"
                  hover_color={"hover:border-app-yellow"}
                  hover_fill={"hover:bg-app-yellow"}
                  hover_fontcolor={"hover:text-app-purple"}
                />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute top-5 left-10 z-10">
            <Image
              src="/home.jpg"
              alt="home"
              width={450}
              height={700}
              className="rounded-t-full border-18 border-white border-opacity-20 hide_img_mobile"
              priority
            />
          </div>
          <div className="flex absolute top-5 right-0 z-0 app-pattern rotate">
            <Image
              src="/pattern.svg"
              alt="home"
              width={256}
              height={256}
              className="justify-end w-64 h-64 hide_img_mobile"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
