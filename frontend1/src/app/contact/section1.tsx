"use client";
import { AppButton } from "@/components/AppButton";
import {
  ClockIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";

export function Section1() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
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
            <h1 className="app-header text-3xl font-bold pb-2">
              Contact Information
            </h1>
            <p className="text-sm text-app-gray text-justify">
              We love hearing from customers, visitors and people from the
              CAH. We really appreciate you taking the time to get in
              touch. Please fill in the form below.
            </p>
            {/*  */}
            <div className="lg:max-w-screen-lg mx-auto items-center pt-4 pl-10">
              <div className="">
                <div className="flex text-left my-4">
                  <div className="flex">
                    <MapPinIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
                  </div>
                  <div className="w-5/6 pl-2 mx-4">
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
              <div className="">
                <div className="flex text-left my-4">
                  <div className="flex">
                    <ClockIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
                  </div>
                  <div className="w-4/6 lg:h-16 pl-2 mx-4">
                    <p className="text-lg app-header font-bold">Open Hours</p>
                    <p className="text-xs text-app-gray">
                      <span className=" font-bold">Mon to Fri: </span>12:00 pm
                      to 1:00 am
                      <br />
                      <span className=" font-bold">Sat – Sun: </span>12:00 pm to
                      1:00 am
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex text-left my-4">
                  <div className="flex">
                    <PencilSquareIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
                  </div>
                  <div className="w-3/6 pl-2 mx-4">
                    <p className="text-lg app-header font-bold">Reservation</p>
                    <p className="text-xs text-app-gray">
                      cafeafterhours@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <Image
              src="/sign.svg"
              width="100"
              height="100"
              alt="home"
              className="pt-2 "
            /> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}
