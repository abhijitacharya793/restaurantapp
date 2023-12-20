import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Contact() {
  return (
    <>
      <div id="content">
        <Header active_page={"home"} />
        <div className="bg-app-purple py-16 flex justify-center">
          <p className="w-40 p-1 border-t border-b border-yellow-600 text-3xl text-white app-header font-bold">
            Contact Us
          </p>
        </div>
        <Footer />
      </div>
      <LoadingOverlay />
    </>
  );
}
