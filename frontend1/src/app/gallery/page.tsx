import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import { Section1 } from "./section1";

export default function Gallery() {
  return (
    <>
      <div id="content">
        <Header active_page={"home"} />
        <div className="bg-app-purple py-8 flex justify-center">
          <p className="w-24 p-1 border-t border-b border-yellow-600 text-3xl text-white app-header font-bold">
            Gallery
          </p>
        </div>
        <div className="bg-white">
          <Section1 />
        </div>
        <Footer />
      </div>
      {/* <LoadingOverlay /> */}
    </>
  );
}
