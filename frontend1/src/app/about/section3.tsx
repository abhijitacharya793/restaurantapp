import Image from "next/image";

export function Section3() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto py-20">
        <div className="flex flex-col items-center justify-center">
          <p className="w-10 py-1 border-t border-b border-yellow-600 text-sm font-light">
            TEAM
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4">
            Meet Our Professional Chefs
          </p>
          <div className="flex items-center w-full justify-center">
            <div className="w-1/4 mr-3 h-56">
              <Image src="/chef1.svg" className="bg-app-green" width={300} height={300} alt=""/>
              <p className="text-center app-header text-xl font-bold">Avroko</p>
              <p className="text-center text-sm text-app-gray">
                Master Chef
              </p>
            </div>
            <div className="w-1/4 mr-3 h-56">
              <Image src="/chef2.svg" className="bg-app-green" width={300} height={300} alt=""/>
              <p className="text-center app-header text-xl font-bold">Avroko</p>
              <p className="text-center text-sm text-app-gray">
                Master Chef
              </p>
            </div>
            <div className="w-1/4 mr-3 h-56">
              <Image src="/chef3.svg" className="bg-app-green" width={300} height={300} alt=""/>
              <p className="text-center app-header text-xl font-bold">Avroko</p>
              <p className="text-center text-sm text-app-gray">
                Master Chef
              </p>
            </div>
            <div className="w-1/4 h-56">
              <Image src="/chef4.svg" className="bg-app-green" width={300} height={300} alt=""/>
              <p className="text-center app-header text-xl font-bold">Avroko</p>
              <p className="text-center text-sm text-app-gray">
                Master Chef
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
