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
                  <span className=" font-bold">All Days: </span>12:00 pm to
                  1:00 am
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
                <a href="mailto:cafeafterhours@gmail.com">cafeafterhours@gmail.com</a>
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
            <h1 className="app-header text-3xl font-bold pb-2">The Story</h1>
            <p className="text-xs text-app-gray text-justify">
              Welcome to Cafe After Hours, where the aroma of freshly brewed
              coffee meets the allure of craft cocktails. We&apos;re more than
              just a café or a bar—we&apos;re the spot that transforms with your
              mood, whether you&apos;re craving a quiet morning pick-me-up or a
              lively evening out with friends.
            </p>
            <p className="text-xs text-app-gray text-justify">
              Our story began with the idea of creating a space that offers the
              best of both worlds: the laid-back vibe of a cozy café by day and
              the electric energy of a vibrant bar after dark. At Cafe After
              Hours, the day starts with expertly brewed espresso, freshly baked
              pastries, and the soft hum of conversation. As the sun sets, we
              dim the lights, shake up signature cocktails, and the atmosphere
              shifts—perfect for unwinding with a drink or gathering with
              friends.
            </p>
            <p className="text-xs text-app-gray text-justify">
              Every detail of our space reflects our commitment to comfort and
              creativity, from the rustic charm of our décor to the curated art
              on the walls. Whether you&apos;re sipping on a latte during the
              afternoon or enjoying a craft cocktail under dim lights,
              we&apos;ve designed an experience that feels as comfortable as
              home and as exciting as your favorite night out.
            </p>

            <p className="text-xs text-app-gray text-justify">
              Our menu is a reflection of this dual identity, offering a range
              of thoughtfully crafted drinks and simple, delicious bites.
              Whether you&apos;re in the mood for a cozy cappuccino, a
              refreshing beer, or an inventive cocktail, we&apos;ve got
              something to fit every moment.
            </p>
            <br />
            <p className="text-xs text-app-gray">
              At Cafe After Hours, we believe that good drinks and great company
              are the perfect pairing. So whether you&apos;re stopping in for a
              morning coffee or staying late into the night for a round of
              cocktails, you&apos;re always welcome to be part of our story.
            </p>

            {/* <div className="flex pt-4">
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
            </div> */}
            {/* <p className="pt-8">Sunil Luthra</p> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}
