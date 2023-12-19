import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section1 } from "./section1";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Reservation } from "@/components/Reservation";

export default function About() {
  return (
    <>
      <div>
        <Header active_page="about" />

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
    </>
  );
}
