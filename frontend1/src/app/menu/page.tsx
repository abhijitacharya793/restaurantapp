import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <div id="content">
        <Header active_page={"home"} />
        <div className="bg-app-purple py-16 flex justify-center">
          <p className="w-36 px-2 py-1 border-t border-b border-yellow-600 text-3xl text-white app-header font-bold">
            Our Menu
          </p>
        </div>
        <div className="bg-white py-20 px-4 lg:px-0">
          <div className="lg:max-w-screen-lg mx-auto lg:flex">
            <div className="lg:w-2/5">
              <Image
                src="/menu12.jpg"
                width={300}
                height={300}
                alt=""
                priority
                className="w-full"
              />
            </div>
            <div className="lg:w-3/5 lg:pl-8 pt-4 lg:pt-0">
              <div>
                <p className="app-header text-3xl font-bold pb-3">Starters</p>
                {/* Menu items */}
                <div className="flex py-4">
                  <div className="pr-2">
                    <Image
                      src="/menu2.jpg"
                      width="50"
                      height="50"
                      alt="home"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-full flex">
                    <div>
                      <p className="text-xl app-header font-bold">
                        Raw Scallops from Erquy
                      </p>
                      <p className="text-sm text-app-gray">
                        Candied Jerusalem artichokes, truffle
                      </p>
                    </div>
                    <div className="flex-1 border-b border-dotted border-gray-400"></div>
                    <div className="w-1/6 flex items-end font-bold app-header text-xl">
                      $40
                    </div>
                  </div>
                </div>

                <div className="flex py-4">
                  <div className="pr-2">
                    <Image
                      src="/menu3.svg"
                      width="50"
                      height="50"
                      alt="home"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-full flex">
                    <div>
                      <p className="text-xl app-header font-bold">
                        Spring Roll
                      </p>
                      <p className="text-sm text-app-gray">
                        Candied Jerusalem artichokes, truffle
                      </p>
                    </div>
                    <div className="flex-1 border-b border-dotted border-gray-400"></div>
                    <div className="w-1/6 flex items-end font-bold app-header text-xl">
                      $20
                    </div>
                  </div>
                </div>

                <div className="flex py-4">
                  <div className="pr-2">
                    <Image
                      src="/menu4.svg"
                      width="50"
                      height="50"
                      alt="home"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-full flex">
                    <div>
                      <p className="text-xl app-header font-bold">
                        French Onion Soup
                      </p>
                      <p className="text-sm text-app-gray">
                        Candied Jerusalem artichokes, truffle
                      </p>
                    </div>
                    <div className="flex-1 border-b border-dotted border-gray-400"></div>
                    <div className="w-1/6 flex items-end font-bold app-header text-xl">
                      $25
                    </div>
                  </div>
                </div>

                <div className="flex py-4">
                  <div className="pr-2">
                    <Image
                      src="/menu5.svg"
                      width="50"
                      height="50"
                      alt="home"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-full flex">
                    <div>
                      <p className="text-xl app-header font-bold">
                        Tomato Bruschetta
                      </p>
                      <p className="text-sm text-app-gray">
                        Candied Jerusalem artichokes, truffle
                      </p>
                    </div>
                    <div className="flex-1 border-b border-dotted border-gray-400"></div>
                    <div className="w-1/6 flex items-end font-bold app-header text-xl">
                      $30
                    </div>
                  </div>
                </div>
                {/* End */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      {/* <LoadingOverlay /> */}
    </>
  );
}
