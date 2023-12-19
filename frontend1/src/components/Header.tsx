import { AppButton } from "./AppButton";
import Image from "next/image";

type HeaderProps = {
  active_page: string;
};

export function Header({ active_page }: HeaderProps) {
  return (
    <>
      {/* Header top */}
      <div className="flex items-center lg:max-w-screen-lg sm:max-w-screen-sm mx-auto my-5">
        <div className="h-44 w-1/3 flex items-center justify-start">
          <AppButton
            color="border-app-yellow"
            fill=""
            fontcolor="text-white"
            text="Call - 987 654 321"
          />
        </div>
        <div className="h-44 w-1/3 flex items-center justify-center">
          <Image src="/logo.svg" width={250} height={250} alt="logo" />
        </div>
        <div className="h-44 w-1/3 flex items-center justify-end">
          <AppButton
            color="border-app-yellow"
            fill="bg-app-yellow"
            fontcolor="text-black"
            text="Reservation"
          />
        </div>
      </div>
      <hr className="border-slate-400" />
      {/* Header nav */}
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex text-left py-2">
        {/* space */}

        {/* 7 parts of 12 */}
        <div className="w-1/12 h-10 py-2 text-white capitalize mr-4">home</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize mr-4">about</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize mr-4">menu</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize mr-4">
          reservation
        </div>
        <div className="w-1/12 h-10 py-2 text-white capitalize mr-4">gallery</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize mr-4">blog</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize mr-4">contact</div>
        {/* space */}
        <div className="w-1/3 h-10 py-2"></div>
        {/* socials */}
        <div className="flex w-1/12 h-10 py-2 justify-end">
          <img src="/insta.svg" className="h-5 w-5 mx-2" />
          <img src="/facebook.svg" className="h-5 w-5 mx-2" />
          <img src="/twitter.svg" className="h-5 w-5 mx-2" />
          <img src="/pintrest.svg" className="h-5 w-5 mx-2" />
        </div>
        {/* space */}
      </div>
      <hr className="border-slate-400" />
    </>
  );
}
