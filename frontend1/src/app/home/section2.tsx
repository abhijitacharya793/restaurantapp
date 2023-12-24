"use client";
import { AppButton } from "@/components/AppButton";
import {
  ClockIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export function Section2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1.33"],
  });
  return (
    <>
      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      >
        {/* P1 */}
        <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex items-center pt-32">
          <div className="w-1/3 justify-start">
            <div className="flex text-left">
              <div className="w-1/6 h-16 flex items-center justify-start">
                <MapPinIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
              </div>
              <div className="w-5/6 h-16 p-2">
                <p className="text-xl app-header font-bold">Locate Us</p>
                <p className="text-xs text-app-gray">
                  Riverside 25, San Francisco, California
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 justify-center">
            <div className="flex text-left">
              <div className="w-2/6 h-16 flex items-center justify-end">
                <ClockIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
              </div>
              <div className="w-4/6 h-16 p-2">
                <p className="text-lg app-header font-bold">Open Hours</p>
                <p className="text-xs text-app-gray">
                  Mon To Fri 9:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 justify-end">
            <div className="flex text-left">
              <div className="w-3/6 h-16 flex items-center justify-end">
                <PencilSquareIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
              </div>
              <div className="w-3/6 h-16 p-2">
                <p className="text-lg app-header font-bold">Reservation</p>
                <p className="text-xs text-app-gray">
                  hirestaurantate@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* P2 */}
        <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex pt-10 pb-20">
          <div className="w-1/2 border-r border-gray-300 pr-4">
            <div className="flex w-full items-center justify-left">
              <Image
                src="/story.jpg"
                alt="home"
                className="w-auto h-80"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-1/2 ml-8">
            <h1 className="app-header text-3xl font-bold pb-2">The Story</h1>
            <p className="text-xs text-app-gray">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using &apos;Content here, content
              gfshere&apos;, makinlook like readable English. Many desktop
              publishing packages.
            </p>
            <div className="flex pt-4">
              <div className="w-1/2">
                <p className="app-header text-3xl font-bold pb-2">1996</p>
                <p className="text-xs text-app-gray">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
              </div>
              <div className="w-1/2">
                <p className="app-header text-3xl font-bold pb-2">2021</p>
                <p className="text-xs text-app-gray">
                  Lorem Ipsum is that it has a more-or-less normal Content
                  content
                </p>
              </div>
            </div>
            <p className="pt-8">JOSEFINE</p>
            <Image
              src="/sign.svg"
              width="100"
              height="100"
              alt="home"
              className="pt-2"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
