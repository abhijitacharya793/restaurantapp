import { AppButton } from "@/components/AppButton";
import Image from "next/image";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto py-20">
        <div className="flex flex-col items-center justify-center">
          <p className="w-10 py-1 border-t border-b border-yellow-600 text-sm font-light">
            BLOG
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4 px-20 text-center">
            An Evening of Elegance: Date Night at Café After Hours
          </p>
          <p className="pt-1 pb-4 text-sm text-app-gray w-96">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content making.
          </p>
        </div>
        <div className="flex mt-8">
          <div className="mr-8 border border-black">
            <Image
              width={100}
              height={100}
              className="w-full"
              src="/blog1.svg"
              alt="Placeholder image"
            />
            <div className="flex w-1/2">
              <div className="px-6 py-4">
                <p className="w-26 py-1 border-t border-b border-yellow-600 text-sm font-light">
                  RESTAURANTS
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="w-20 py-1 border-t border-b border-yellow-600 text-sm font-light">
                  Feb 22, 2022
                </p>
              </div>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-sm pt-2">
                Step into a world of refined romance at our exclusive lounge,
                where each detail is tailored for the perfect date night. The
                soft glow of ambient lighting sets the mood as you and your
                special someone settle into plush, private seating arrangements
                designed for intimacy. Sip on expertly crafted cocktails, each a
                blend of sophistication and flavor, while sharing delectable
                bites that ignite the senses.
                <br />
                <br />
                Our discreet corners offer a sanctuary where you can escape the
                world and immerse yourselves in meaningful conversations,
                laughter, and shared moments. Our attentive staff ensures your
                privacy, allowing you to focus solely on the connection you
                share.
                <br />
                <br />
                Elevate your date nights with us – a haven where every nuance is
                considered, creating an atmosphere that lingers in the memory
                long after the night has ended. Reserve your enchanted evening
                now. 🌙✨ #RomanceUnveiled #LoungeElegance#RomanceatCafeAH
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
