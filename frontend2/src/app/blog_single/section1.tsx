import { AppButton } from "@/components/AppButton";
import Image from "next/image";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto py-20">
        <div className="flex flex-col items-center justify-center">
          <p className="w-10 py-1 border-t border-b border-yellow-600 text-sm font-light">
            BLOG
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4 px-20 text-center">
            Unwind in Style: Where Every Beat is a Celebration – Your Ultimate
            Party Haven in Dwarka!
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
                Welcome to Café After Hours, where sophistication meets revelry.
                Immerse yourself in an electrifying atmosphere with pulsating
                music, stylish decor, and a curated selection of drinks. Our
                experienced mixologists craft signature cocktails, setting the
                stage for an unforgettable night.
                <br />
                <br />
                Whether you prefer the energetic dance floor or a cozy VIP
                lounge, Café After Hours caters to your every mood. Elevate your
                nightlife experience and create lasting memories at the
                heartbeat of Dwarka. Join us for a night of unparalleled
                entertainment and camaraderie – where every moment is a
                celebration!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
