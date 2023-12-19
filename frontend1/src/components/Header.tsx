import { AppButton } from "./AppButton";
import Image from "next/image";

type HeaderProps = {
  active_page: string;
};

export function Header({ active_page }: HeaderProps) {
  return (
    <>
      {/* Header top */}
      <div className="flex items-center max-w-screen-lg mx-10 my-10 text-left">
        <div className="h-44 w-1/3 flex items-center justify-center">
          <AppButton color="border-app-yellow" fill="" fontcolor="text-white" text="Call - 987 654 321" />
        </div>
        <div className="h-44 w-1/3 flex items-center justify-center">
          <Image src="/logo.svg" width={300} height={300} alt="logo" />
        </div>
        <div className="h-44 w-1/3 flex items-center justify-center">
          <AppButton color="border-app-yellow" fill="bg-app-yellow" fontcolor="text-black" text="Reservation" />
        </div>
      </div>
      <hr className="border-slate-400"/>
      {/* Header nav */}
      <div className="max-w-screen-lg mx-auto flex text-left py-2">
        {/* space */}

        {/* 7 parts of 12 */}
        <div className="w-1/12 h-10 py-2 text-white capitalize">home</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize">about</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize">menu</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize">reservation</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize">gallery</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize">blog</div>
        <div className="w-1/12 h-10 py-2 text-white capitalize">contact</div>
        {/* space */}
        <div className="w-1/6 h-10 py-2"></div>
        {/* socials */}
        <div className="flex w-1/6 h-10 py-2">
          <img src="/insta.svg" className="h-5 w-5 mx-2" />
          <img src="/facebook.svg" className="h-5 w-5 mx-2" />
          <img src="/twitter.svg" className="h-5 w-5 mx-2" />
          <img src="/pintrest.svg" className="h-5 w-5 mx-2" />
        </div>
        {/* space */}
        
      </div>
      <hr className="border-slate-400"/>
    </>
  );
}
