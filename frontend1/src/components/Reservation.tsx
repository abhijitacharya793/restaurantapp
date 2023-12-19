import { AppButton } from "@/components/AppButton";

// TODO: Reservation
export function Reservation() {
  return (
    <>
      <div className="relative bg-gray-100 min-h-screen flex items-center justify-center">
        <img
          className="absolute inset-0 object-cover w-full h-full opacity-90 bg-black"
          src="reservation.svg"
          alt="Overlay Image"
        />

        <div className="relative z-10 bg-app-dark-purple p-8">
          <form>
            <div className="mb-4 flex flex-col justify-center items-center">
              <p className="w-24 py-1 border-t border-b border-yellow-600 text-sm font-light text-white">
                RESERVATION
              </p>
              <p className="app-header text-3xl pb-3 pt-4 text-white">
                Book your table now
              </p>

              <div className="flex w-full ">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Name"
                  className="w-full px-3 py-2 border focus:outline-none bg-transparent mr-3 mb-3"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border focus:outline-none bg-transparent mb-3"
                />
              </div>
              <div className="flex w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Person"
                  className="w-full px-3 py-2 border focus:outline-none bg-transparent mr-3"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Timing"
                  className="w-full px-3 py-2 border focus:outline-none bg-transparent mr-3"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Date"
                  className="w-full px-3 py-2 border focus:outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <AppButton
                color={"border-white"}
                fill={"bg-white"}
                text={"Book a Table"}
                fontcolor={"text-app-purple"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
