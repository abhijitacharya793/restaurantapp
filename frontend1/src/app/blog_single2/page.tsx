import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import { PageWrapper } from "../page-wrapper";
import { Reservation } from "@/components/Reservation";
import { Section1 } from "./section1";

export default function Blog() {
  return (
    <>
      <PageWrapper>
        <div>
          <Header active_page="about" />
          <div className="bg-white">
            <Section1 />
          </div>
          {/* <div className="bg-app-purple">
            <Section5 />
          </div> */}

          <Reservation />
          <Footer />
        </div>
      </PageWrapper>
    </>
  );
}
