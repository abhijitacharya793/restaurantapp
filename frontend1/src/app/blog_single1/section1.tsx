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
            Savor the Moment: Culinary Excellence and Crafted Cocktails Await at
            Café After Hours
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
                Indulge in a symphony of flavors at Café After Hours, renowned
                for its exquisite fusion of delectable cuisine and artisanal
                cocktails. Our culinary maestros have meticulously crafted a
                menu that tantalizes the taste buds, offering a gastronomic
                journey like no other. <br />
                <br />
                From mouthwatering appetizers to sumptuous main courses, each
                dish is a culinary masterpiece that reflects our commitment to
                excellence. Complementing the gourmet experience, our expert
                mixologists curate an array of signature cocktails, blending
                creativity with premium spirits. <br />
                <br />
                Nestled in an inviting ambience, Café After Hours is not just a
                destination; it&quot;s an epicurean escape. Immerse yourself in the
                perfect blend of savory delights and handcrafted libations,
                creating a sensory experience that lingers long after the last
                sip. Join us at the intersection of culinary artistry and
                cocktail craftsmanship – where every bite is a revelation and
                every sip, a celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
