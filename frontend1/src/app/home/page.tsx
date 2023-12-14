import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header active_page={"home"} />
      {/* SECTION 1 */}
      <div className="flex w-full my-10 text-center bg-green-50">
        <div className="w-3/5 flex items-center bg-blue-300">
          <div className="items-center text-left p-20">
            <h1 className="text-6xl">Welcome to Restaurantate</h1>
            <p className="text-sm">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy .
            </p>
            <button className="py-5 px-2">View Menu</button>
          </div>
        </div>
        <div className="w-2/5 bg-green-300 relative">
          <div className="absolute right-20 top-10">
            <div className="bg-blue-200 w-40 h-40 rounded-full"></div>
          </div>
          <div className="absolute top-10 left-10">
            <div className="bg-red-200 w-72 h-96 rounded-t-full"></div>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="bg-orange-50">
        {/* P1 */}
        <div className="flex items-center text-center">
          <div className="w-1/3 py-16 px-8">
            <div className="flex text-left">
              <div className="w-1/3 bg-slate-200 h-16"></div>
              <div className="w-2/3 bg-red-200 h-16 p-2">
                <p className="text-lg">Locate us</p>
                <p className="text-xs">
                  Riverside 25, San Francisco, California
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 py-16 px-8">
            <div className="flex text-left">
              <div className="w-1/3 bg-slate-200 h-16"></div>
              <div className="w-2/3 bg-red-200 h-16 p-2">
                <p className="text-lg">Locate us</p>
                <p className="text-xs">
                  Riverside 25, San Francisco, California
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 py-16 px-8">
            <div className="flex text-left">
              <div className="w-1/3 bg-slate-200 h-16"></div>
              <div className="w-2/3 bg-red-200 h-16 p-2">
                <p className="text-lg">Locate us</p>
                <p className="text-xs">
                  Riverside 25, San Francisco, California
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* P2 */}
        <div className="flex">
          <div className="w-1/2">
            <div className="bg-red-200 w-60 h-60"></div>
          </div>
          <div className="w-1/2">1</div>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="bg-white">
        <div className="flex items-center text-center">
          <div className="w-1/2 bg-red-100">1</div>
          <div className="w-1/2 bg-green-100">1</div>
        </div>
      </div>
      {/* TESTIMONIAL */}
      <div className="bg-fuchsia-950">
        <div className="flex items-center text-center h-40">
          <div className="w-1/2 bg-red-100">1</div>
          <div className="w-1/2 bg-green-100">1</div>
        </div>
      </div>
      {/* IMAGE */}
      <div className="bg-gray-200 h-32">1</div>
      {/* OFFER */}
      <div className="bg-white h-32">1</div>
      {/* MENU */}
      <div className="bg-white h-32">1</div>
      {/* SERVICES */}
      <div className="bg-fuchsia-950 h-32">
        <div className="flex items-center text-center">
          <div className="w-2/5">What we offer</div>
          <div className="w-3/5">
            <div className="flex">
              <div className="w-1/3">1</div>
              <div className="w-1/3">1</div>
              <div className="w-1/3">1</div>
            </div>
          </div>
        </div>
      </div>
      {/* BLOG */}
      <div className="bg-white h-32">
        <div className="flex items-center text-center">
          <div className="w-1/2">
            <div className="">1</div>
          </div>
          <div className="w-1/2">1</div>
        </div>
      </div>
      {/* RESERVATION */}
      <div className="bg-fuchsia-950 h-32">1</div>
      {/* FOOTER */}
      <Footer active_page={""} />
    </div>
  );
}
