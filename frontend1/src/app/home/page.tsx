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
import { Section7 } from "./section7";
import { Section8 } from "./section8";
import { Reservation } from "../../components/Reservation";

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
          <Image
            className="w-full h-full object-cover"
            src="/testimonial.jpeg"
            alt="Your Image"
            width={500}
            height={500}
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
      <div className="bg-app-purple pb-20 pt-10">
        <Section7 />
      </div>
      {/* BLOG */}
      <div className="bg-white">
        <Section8 />
      </div>
      {/* RESERVATION */}
      <div className="">
        <Reservation />
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
