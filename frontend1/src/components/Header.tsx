"use client";

import { AppButton } from "./AppButton";
import Image from "next/image";
import { Navbar } from "./Navbar";

type HeaderProps = {
  active_page: string;
};

export function Header({ active_page }: HeaderProps) {
  return (
    <>
      {/* Header top */}
      <div className="lg:flex items-center lg:max-w-screen-lg mx-auto py-5 bg-app-purple">
        <div className="lg:h-44 lg:w-1/3 flex items-center md:justify-start justify-center mx-auto pt-4">
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
        <div className="lg:h-44 lg:w-1/3 flex items-center justify-center">
          <Image
            className="h-36 lg:h-96"
            src="/logo1.svg"
            width={250}
            height={100}
            alt="logo"
            priority
          />
        </div>
        <div className="lg:h-44 lg:w-1/3 flex items-center md:justify-end justify-center mx-auto pb-4">
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
      <Navbar />
      
      <hr className="border-slate-400" />
    </>
  );
}

