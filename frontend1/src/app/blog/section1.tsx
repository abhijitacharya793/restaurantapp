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
          <p className="app-header text-3xl font-bold pb-3 pt-4">
            Be First Who Read News
          </p>
          <p className="pt-1 pb-4 text-sm text-app-gray w-96">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content making.
          </p>
        </div>
        <div className="flex mt-8">
          <div className="w-1/2 mr-8 border border-black">
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
              <div className="font-bold text-3xl mb-2 app-header">
                <a href="/blog_single">
                  Unwind in Style: Where Every Beat is a Celebration – Your
                  Ultimate Party Haven in Dwarka!
                </a>
              </div>
              <p className="text-gray-700 text-sm pt-2">
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </p>
            </div>
          </div>
          <div className="w-1/2 border border-black">
            <Image
              width={100}
              height={100}
              className="w-full"
              src="/blog2.svg"
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
              <div className="font-bold text-3xl mb-2 app-header">
                Savor the Moment: Culinary Excellence and Crafted Cocktails
                Await at Café After Hours
              </div>
              <p className="text-gray-700 text-sm pt-2">
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="w-1/2 mr-8 border border-black">
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
              <div className="font-bold text-3xl mb-2 app-header">
                An Evening of Elegance: Date Night at Café After Hours
              </div>
              <p className="text-gray-700 text-sm pt-2">
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </p>
            </div>
          </div>
          {/*  */}
          {/* <div className="w-1/2 border border-black">
            <Image
              width={100}
              height={100}
              className="w-full"
              src="/blog2.svg"
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
              <div className="font-bold text-3xl mb-2 app-header">
                Savor the Moment: Culinary Excellence and Crafted Cocktails
                Await at Café After Hours
              </div>
              <p className="text-gray-700 text-sm pt-2">
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </p>
            </div>
          </div> */}
          {/*  */}
        </div>
      </div>
    </>
  );
}
