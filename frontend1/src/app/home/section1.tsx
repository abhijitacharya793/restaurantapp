import Image from "next/image";

import { motion } from "framer-motion";

import { AppButton } from "@/components/AppButton";

export function Section1() {
  return (
    <>
      <div className="w-1/2 flex items-center">
        <div className="items-center text-left">
          <h1 className="text-6xl text-white app-header font-bold lg:pt-32 sm:pt-10">
            Welcome to Restaurantate
          </h1>

          <p className="text-sm text-white pt-8 lg:w-96">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy .
          </p>
          <div className="py-8">
            <a href="/menu">
              <AppButton
                color="app-yellow lg:mb-16 sm:mb-5"
                fill="app-purple"
                fontcolor="white"
                text="View Menu"
              />
            </a>
          </div>
        </div>
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
    </>
  );
}
