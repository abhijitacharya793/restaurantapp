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
                  New Delhi - 110078
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
                  <span className=" font-bold">Mon to Fri: </span>12:00 pm to
                  1:00 am
                  <br />
                  <span className=" font-bold">Sat – Sun: </span>12:00 pm to
                  1:00 am
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
                  hirestaurantate@gmail.com
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
                className="w-auto h-80"
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="lg:w-1/2 ml-8 mr-10 lg:mr-0">
            <h1 className="app-header text-3xl font-bold pb-2">The Story</h1>
            <p className="text-xs text-app-gray">
              Welcome to Café After Hours (CAH), where we bring you the ultimate
              restaurant and bar experience! We&quot;re thrilled to have you join us.
              Step into our medieval-inspired ambiance and prepare yourself for
              a culinary adventure like no other.
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
            <p className="pt-8">Sunil Luthra</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
