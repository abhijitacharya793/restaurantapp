import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Reservation() {
  return (
    <>
      <div id="content">
        <Header active_page={"home"} />
        {/*  */}
        <Footer />
      </div>
      <LoadingOverlay />
    </>
  );
}
