import { AppButton } from "@/components/AppButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  ClockIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Section1 } from "./section1";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header active_page={"home"} />
      {/* SECTION 1 */}
      <div className="max-w-screen-lg mx-auto flex text-center">
        <Section1 />
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
              <img src="/story.jpg" alt="home" className="w-auto h-64" />
            </div>
          </div>
          <div className="w-1/2">
            <h1>The Story</h1>
            <p>
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using &apos;Content here, content
              gfshere&apos;, makinlook like readable English. Many desktop
              publishing packages.
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
        <div className="flex text-left">
          <div className="flex w-2/5 p-10 justify-end">
            <div className="w-2/3">
              <p className="pt-2">MENU</p>
              <p className="text-2xl pt-2">Try Our Special Offers</p>
              <p className="pt-2">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using &apos;Content here, content making
                it look like readable English.
              </p>
              <Image
                src="/menu1.png"
                width="300"
                height="500"
                alt="home"
                className="pt-4"
              />
              <div className="pt-4">
                <AppButton
                  color="border-app-yellow"
                  fill=""
                  fontcolor="text-yellow-600"
                  text="View Menu"
                />
              </div>
            </div>
          </div>
          <div className="w-3/5 p-10">
            <div>
              <p>Starters</p>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
            </div>
            <div>
              <p>Starters</p>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
            </div>
            <div>
              <p>Starters</p>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
              <div className="flex w-full p-4">
                <div className="p-2">
                  <Image
                    src="/menu2.jpg"
                    width="32"
                    height="32"
                    alt="home"
                    className="rounded-full"
                  />
                </div>
                <div className="w-4/6">
                  <p>Raw Scallops from Erquy</p>
                  <p>Candied Jerusalem artichokes, truffle</p>
                </div>
                <div className="w-1/6">$40</div>
              </div>
            </div>
          </div>
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
      <div className="bg-gray-200">
        <div className="w-full h-64 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/testimonial.jpeg"
            alt="Your Image"
          />
        </div>
      </div>
      {/* OFFER */}
      <div className="bg-white h-32">2</div>
      {/* MENU */}
      <div className="bg-white h-32">2</div>
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
