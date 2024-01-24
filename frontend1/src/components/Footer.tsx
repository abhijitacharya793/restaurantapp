import Image from "next/image";
import { AppButton } from "./AppButton";

export function Footer() {
  return (
    <>
      {/* Footer top */}
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto">
        <div className="flex items-center justify-center py-4">
          <div className="h-44 w-1/3 flex items-center justify-start">
            <a href="#" className="text-white underline">
              Instagram Feed
            </a>
          </div>
          <div className="h-44 w-1/3 flex items-center justify-center">
            <Image src="/logo.svg" width={250} height={250} alt="logo" />
          </div>
          <div className="h-44 w-1/3 flex items-center justify-end">
            <Image
              alt=""
              width={100}
              height={100}
              src="/insta.svg"
              className="h-5 w-5 mx-2"
            />
            <Image
              alt=""
              width={100}
              height={100}
              src="/facebook.svg"
              className="h-5 w-5 mx-2"
            />
            <Image
              alt=""
              width={100}
              height={100}
              src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/655afe9f73021a4d4bc26a34_social-white-icon-3.svg"
              className="h-5 w-5 mx-2"
            />
            <Image
              alt=""
              width={100}
              height={100}
              src="/pintrest.svg"
              className="h-5 w-5 mx-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-white py-2">
          <div className="w-1/3 flex items-center justify-start">
            <p className="w-18 py-1 border-t border-b border-yellow-600 text-sm font-light">
              CONTACT
            </p>
          </div>
          <div className="w-1/3 flex items-center justify-center text-center">
            Join our mailing list for updates, Get news & offers events.
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <p className="w-30 py-1 border-t border-b border-yellow-600 text-sm font-light">
              WORKING HOURS
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center text-white py-4">
          <div className="w-1/3 flex items-center justify-start">
            <p className="text-sm font-light">
              5 Rue Dalou, 75015 Paris
              <br />
              Call - <br />
              +91 98102 52704
              <br />
              +91 98103 63405
              <br />
              benoit@mail.com
            </p>
          </div>
          <div className="w-1/3 flex items-center justify-center text-center">
            <div className="">
              <form className="flex items-center border border-white">
                <input
                  className="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 focus:outline-none"
                  type="email"
                  placeholder="Email"
                  aria-label="YEmail"
                />
                <AppButton
                  color={"border-white"}
                  fill={"bg-white"}
                  text={"Subscribe"}
                  fontcolor={"text-app-purple"}
                  hover_color={"hover:border-app-yellow"}
                  hover_fill={"hover:bg-app-yellow"}
                  hover_fontcolor={"hover:text-app-purple"}
                />
              </form>
            </div>
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <p className="text-sm font-light text-right">
              Mon to Fri: 12:00 pm to 1:00 am
              <br />
              Sat - Sun: 12:00 pm to 1:00 am
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
