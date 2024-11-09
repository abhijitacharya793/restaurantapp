"use client";
import { AppButton } from "@/components/AppButton";
import {
  ClockIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";

export function Section2() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* P1 */}
        <div className="lg:max-w-screen-lg mx-auto lg:flex items-center pt-4 lg:pt-32 pl-10 lg:pl-0">
          <div className="lg:w-1/3 lg:justify-start">
            <div className="flex text-left my-4">
              <div className="lg:w-1/6 lg:h-16 flex lg:items-center lg:justify-start">
                <MapPinIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
              </div>
              <div className="w-5/6 lg:h-16 pl-2 mx-10 lg:mx-4">
                <p className="text-xl app-header font-bold">Locate Us</p>
                <p className="text-xs text-app-gray">
                  1st Floor, City Centre Mall
                  <br />
                  Sector 12, Dwarka
                  <br />
                  New Delhi - 110075
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:justify-center">
            <div className="flex text-left my-4">
              <div className="lg:w-2/6 lg:h-16 flex lg:items-center lg:justify-end">
                <ClockIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
              </div>
              <div className="w-4/6 lg:h-16 pl-2 mx-10 lg:mx-4">
                <p className="text-lg app-header font-bold">Open Hours</p>
                <p className="text-xs text-app-gray">
                  <span className=" font-bold">All Days: </span>12:00 pm to 1:00
                  am
                  {/* <br /> */}
                  {/* <span className=" font-bold">Sat – Sun: </span>12:00 pm to
                  1:00 am */}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:justify-end">
            <div className="flex text-left my-4">
              <div className="lg:w-3/6 lg:h-16 flex lg:items-center lg:justify-end">
                <PencilSquareIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
              </div>
              <div className="w-3/6 lg:h-16 pl-2 mx-10 lg:mx-4">
                <p className="text-lg app-header font-bold">Reservation</p>
                <p className="text-xs text-app-gray">
                  <a href="mailto:cafeafterhours@gmail.com">
                    cafeafterhours@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* P2 */}
        <div className="lg:max-w-screen-lg mx-auto flex pt-10 pb-20">
          <div className="w-1/2 border-r border-gray-300 pr-4 hide_mobile">
            <div className="flex w-full items-center justify-left">
              <Image
                src="/story1.jpg"
                alt="home"
                className="w-auto h-96 pt-10"
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="lg:w-1/2 ml-8 mr-10 lg:mr-0">
            <h1 className="app-header text-3xl font-bold pb-4 text-center lg:text-left">
              Welcome to Cafe After Hours
            </h1>

            {/* First paragraph */}
            <p className="text-sm text-app-gray text-justify mb-6">
              Welcome to Cafe After Hours, where the aroma of freshly brewed
              coffee meets the allure of craft cocktails. Whether you&apos;re
              looking for a quiet morning pick-me-up or a lively evening out,
              we&apos;ve got you covered.
            </p>

            {/* Second paragraph */}
            <p className="text-sm text-app-gray text-justify mb-6">
              Our story began with the idea of creating a space that offers the
              best of both worlds: the laid-back vibe of a cozy café by day and
              the electric energy of a vibrant bar after dark. From expertly
              brewed espresso and freshly baked pastries in the morning to
              signature cocktails as the sun sets, every moment here is designed
              for your enjoyment.
            </p>

            {/* Third paragraph */}
            <p className="text-sm text-app-gray text-justify mb-6">
              Whether you&apos;re sipping a latte or unwinding with friends,
              every detail of our space reflects our commitment to comfort and
              creativity. The rustic charm of our décor, the curated art on the
              walls, and the cozy atmosphere are all part of the experience.
            </p>

            {/* Fourth paragraph */}
            <p className="text-sm text-app-gray text-justify mb-6">
              Our menu mirrors this unique vibe, offering a range of
              thoughtfully crafted drinks and delicious bites. From cozy
              cappuccinos to inventive cocktails, we have something to satisfy
              every craving.
            </p>

            {/* Call to action */}
            <p className="text-sm text-app-gray text-center lg:text-left">
              At Cafe After Hours, we believe that good drinks and great company
              are the perfect pairing. So whether you&apos;re here for a morning
              coffee or a late-night cocktail, we invite you to make yourself at
              home.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
