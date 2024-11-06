import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Section6 } from "./section6";
import { Section7 } from "./section7";
import { Section8 } from "./section8";
import { Reservation } from "../../components/Reservation";
import LoadingOverlay from "@/components/LoadingOverlay";
import { PageWrapper } from "../page-wrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <div className="relative">
          <div
            className="fixed inset-0 bg-cover bg-center z-[-10] hide_mobile"
            style={{ backgroundImage: "url('/home.jpg')" }}
          />
          <div className="relative z-10">
            <div id="content">
              <div className="bg-app-purple">
                <Header active_page={"home"} />
              </div>
              <div className="bg-app-purple">
                <Section1 />
              </div>
              <div className="bg-orange-50">
                <Section2 />
              </div>
              <div className="bg-white pb-20">
                <Section3 />
              </div>
              <div className="bg-app-purple">
                <Section4 />
              </div>
              <div className="w-full h-64 overflow-hidden hide_mobile">
                <div className="w-12 h-12"></div>
              </div>
              {/* <div className="bg-white">
                <Section5 />
              </div> */}
              <div className="bg-white">
                <Section6 />
              </div>
              <div className="bg-app-purple pb-20 pt-10">
                <Section7 />
              </div>
              <div className="bg-white">
                <Section8 />
              </div>
              <div className="">
                <Reservation />
              </div>
              <div className="bg-app-purple">
                <Footer />
              </div>
            </div>
            {/* <LoadingOverlay /> */}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
