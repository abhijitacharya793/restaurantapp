"use client";
import Image from "next/image";

import { AppButton } from "@/components/AppButton";

import { motion } from "framer-motion";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex text-center">
        <div className="w-1/2 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="items-center text-left"
          >
            <h1 className="text-6xl text-white app-header font-bold lg:pt-32 sm:pt-10">
              Welcome to <br/>Café After Hours
            </h1>

            <p className="text-sm text-white pt-8 lg:w-96">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy .
            </p>
            <div className="py-8">
              <a href="/menu">
                <AppButton
                  color="border-app-yellow lg:mb-16 sm:mb-5"
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
              src="/home.png"
              alt="home"
              width={450}
              height={700}
              className="rounded-t-full border-18 border-white border-opacity-20"
              priority
            />
          </div>
          <div className="flex absolute top-5 right-0 z-0 app-pattern rotate">
            <Image
              src="/pattern.svg"
              alt="home"
              width={256}
              height={256}
              className="justify-end w-64 h-64"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
