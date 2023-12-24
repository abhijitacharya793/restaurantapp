import { Footer } from "@/components/Footer";
import { Reservation } from "@/components/Reservation";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function ReservationD() {
  return (
    <>
      <div id="content">
        <Header active_page={"home"} />
        <div>
          <Reservation />
        </div>
        <Footer />
      </div>
      {/* <LoadingOverlay /> */}
    </>
  );
}
