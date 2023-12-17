import { AppButton } from "@/components/AppButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  ClockIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header active_page={"home"} />
      {/* SECTION 1 */}
      <div className="flex w-full my-10 text-center">
        <div className="w-3/5 flex items-center">
          <div className="items-center text-left p-20">
            <h1 className="text-6xl text-white app-header">
              Welcome to Restaurantate
            </h1>
            <p className="text-sm text-white pt-8">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy .
            </p>
            <div className="py-8">
              <AppButton
                color="border-app-yellow"
                fill=""
                fontcolor="text-white"
                text="View Menu"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-green-300 relative">
          <div className="flex items-center justify-center top-10">
            <div className="bg-blue-200 w-40 h-40 rounded-full"></div>
          </div>
          <div className="absolute top-10 left-10">
            <div className="bg-red-800 w-72 h-96 rounded-t-full">
              <Image
                src="/home.svg"
                width={100}
                height={100}
                alt="home"
                className="bg-red-800 w-72 h-96 rounded-t-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="bg-orange-50">
        {/* P1 */}
        <div className="flex items-center text-center">
          <div className="w-1/3 py-16 px-8">
            <div className="flex text-left">
              <div className="w-1/4 h-16 flex items-center justify-end">
                <MapPinIcon className="w-10 h-10 bg-black text-white p-1 rounded-full" />
              </div>
              <div className="w-3/4 h-16 p-2">
                <p className="text-lg">Locate us</p>
                <p className="text-xs">
                  Riverside 25, San Francisco, California
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 py-16 px-8">
            <div className="flex text-left">
              <div className="w-1/4 h-16 flex items-center justify-end">
                <ClockIcon className="w-10 h-10 bg-black text-white p-1 rounded-full" />
              </div>
              <div className="w-3/4 h-16 p-2">
                <p className="text-lg">Open Hours</p>
                <p className="text-xs">Mon To Fri 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 py-16 px-8">
            <div className="flex text-left">
              <div className="w-1/4 h-16 flex items-center justify-end">
                <PencilSquareIcon className="w-10 h-10 bg-black text-white p-1 rounded-full" />
              </div>
              <div className="w-3/4 h-16 p-2">
                <p className="text-lg">Reservation</p>
                <p className="text-xs">hirestaurantate@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* P2 */}
        <div className="flex">
          <div className="w-1/2">
            <div className="flex w-full items-center justify-center p-8">
              <Image
                src="/story.jpg"
                width="300"
                height="300"
                alt="home"
                className=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <h1>The Story</h1>
            <p>
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using &apos;Content here, content gfshere&apos;,
              makinlook like readable English. Many desktop publishing packages.
            </p>
            <div className="flex">
              <div className="w-1/2">
                <p>1996</p>
                <p>
                  Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
              </div>
              <div className="w-1/2">
                <p>2021</p>
                <p>
                  Lorem Ipsum is that it has a more-or-less normal Content
                  content
                </p>
              </div>
            </div>
            <p>JOSEFINE</p>
            <Image
                src="/sign.svg"
                width="100"
                height="100"
                alt="home"
                className=""
              />
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="bg-white">
        <div className="flex items-center text-center">
          <div className="w-1/2 bg-red-100">1</div>
          <div className="w-1/2 bg-green-100">1</div>
        </div>
      </div>
      {/* TESTIMONIAL */}
      <div className="bg-fuchsia-950">
        <div className="flex items-center text-center h-40">
          <div className="w-1/2 bg-red-100">1</div>
          <div className="w-1/2 bg-green-100">1</div>
        </div>
      </div>
      {/* IMAGE */}
      <div className="bg-gray-200 h-32">1</div>
      {/* OFFER */}
      <div className="bg-white h-32">1</div>
      {/* MENU */}
      <div className="bg-white h-32">1</div>
      {/* SERVICES */}
      <div className="bg-fuchsia-950 h-32">
        <div className="flex items-center text-center">
          <div className="w-2/5">What we offer</div>
          <div className="w-3/5">
            <div className="flex">
              <div className="w-1/3">1</div>
              <div className="w-1/3">1</div>
              <div className="w-1/3">1</div>
            </div>
          </div>
        </div>
      </div>
      {/* BLOG */}
      <div className="bg-white h-32">
        <div className="flex items-center text-center">
          <div className="w-1/2">
            <div className="">1</div>
          </div>
          <div className="w-1/2">1</div>
        </div>
      </div>
      {/* RESERVATION */}
      <div className="bg-fuchsia-950 h-32">1</div>
      {/* FOOTER */}
      <Footer active_page={""} />
    </div>
  );
}
