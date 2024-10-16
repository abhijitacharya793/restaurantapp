import { AppButton } from "@/components/AppButton";
import Image from "next/image";

// TODO: Reservation
export function Reservation() {
  return (
    <>
      <div className="relative bg-gray-100 min-h-screen flex items-center justify-center">
        <Image
          width={100}
          height={100}
          className="absolute inset-0 object-cover w-full h-full opacity-90 bg-black"
          src="reservation.svg"
          alt="Overlay Image"
        />

        <div className="relative z-10 bg-app-dark-purple lg:p-8 opacity-90 mx-4">
          <form className="lg:p-20 p-8">
            <div className="mb-4 flex flex-col justify-center items-center">
              <p className="w-24 py-1 border-t border-b border-yellow-600 text-sm font-light text-white">
                RESERVATION
              </p>
              <p className="app-header text-3xl pb-3 pt-4 text-white">
                Book your table now
              </p>

              <div className="lg:flex w-full justify-start lg:justify-center">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Name"
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-transparent mr-3 mb-3"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-transparent mb-3"
                />
              </div>
              <div className="lg:flex w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Person"
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-transparent mr-3"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Timing"
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-transparent mr-3"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Date"
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <AppButton
                color={"border-white"}
                fill={"bg-white"}
                text={"Book a Table"}
                fontcolor={"text-app-purple"}
                hover_color={"hover:border-app-yellow"}
                hover_fill={"hover:bg-app-yellow"}
                hover_fontcolor={"hover:text-app-purple"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
