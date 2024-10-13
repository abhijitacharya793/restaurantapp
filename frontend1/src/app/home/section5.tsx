import Image from "next/image";

export function Section5() {
  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto py-20">
        <div className="flex flex-col items-center justify-center">
          <p className="w-12 py-1 border-t border-b border-yellow-600 text-sm font-light">
            OFFER
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4">
            Our special Offer dishes
          </p>
          <p className="pt-1 pb-4 text-sm text-app-gray w-96">
            Our chefs create melt-in-your-mouth dishes that&apos;ll satiate even the
            fussiest eaters now the dishes are in offers use it based on hunger.
          </p>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/2 px-4 lg:px-0 py-4 lg:py-0">
            <Image alt="" width={500} height={500} src="/offer1.svg" />
          </div>
          <div className="lg:w-1/2 px-4 lg:px-0 py-4 lg:py-0">
            <Image alt="" width={500} height={500} src="/offer2.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
