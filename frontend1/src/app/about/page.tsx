import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section1 } from "./section1";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Reservation } from "@/components/Reservation";
import LoadingOverlay from "@/components/LoadingOverlay";
import { PageWrapper } from "../page-wrapper";

export default function About() {
  return (
    <>
      <PageWrapper>
        <div>
          <Header active_page="about" />
          <div className="bg-app-purple py-16 flex justify-center">
            <p className="w-32 p-1 border-t border-b border-yellow-600 text-3xl text-white app-header font-bold">
              About Us
            </p>
          </div>
          <div className="bg-white">
            <Section1 />
          </div>
          {/* TODO: */}
          <div className="bg-white pb-20">
            <Section3 />
          </div>
          {/* TODO: */}
          <div className="bg-app-purple">
            <Section4 />
          </div>

          <Reservation />
          <Footer />
        </div>
        {/* <LoadingOverlay /> */}
      </PageWrapper>
    </>
  );
}
