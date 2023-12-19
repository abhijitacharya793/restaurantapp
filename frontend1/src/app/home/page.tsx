import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  ClockIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Section6 } from "./section6";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header active_page={"home"} />
      {/* SECTION 1 */}
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex text-center">
        <Section1 />
      </div>
      {/* SECTION 2 */}
      <div className="bg-orange-50">
        <Section2 />
      </div>
      {/* SECTION 3 */}
      <div className="bg-white pb-20">
        <Section3 />
      </div>
      {/* TESTIMONIAL */}
      <div className="bg-app-purple">
        <Section4 />
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
      <div className="bg-white">
        <Section5 />
      </div>
      {/* MENU */}
      <div className="bg-white">
        <Section6 />
      </div>
      {/* SERVICES */}
      <div className="bg-app-purple h-32">
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
      <div className="bg-app-purple h-32">1</div>
      {/* FOOTER */}
      <Footer active_page={""} />
    </div>
  );
}
