import Image from "next/image";

export function Section7() {
  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto pb-10 lg:flex items-center py-20 px-8 lg:px-0">
        <div className="lg:w-2/5 text-white">
          <p className="w-32 p-1 border-t border-b border-yellow-600 text-sm font-light">
            WHAT WE OFFER
          </p>
          <div className="app-header text-3xl font-bold pt-4">
            Our Great Services
          </div>
          <p className="pt-1 pb-4 text-sm text-white w-80">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.{" "}
          </p>
        </div>
        <div className="lg:w-1/5 text-white text-center flex flex-col justify-center items-center h-48 bg-app-dark-purple lg:mr-4 my-4 lg:my-0">
          <Image
            width={100}
            height={100}
            className="w-12"
            src="/wwoffer1.svg"
            alt=""
          />
          <div className="text-xl pt-4">Opened 24/7</div>
        </div>
        <div className="lg:w-1/5 text-white text-center flex flex-col justify-center items-center h-48 bg-app-dark-purple lg:mr-4 my-4 lg:my-0">
          <Image
            width={100}
            height={100}
            className="w-12"
            src="/wwoffer2.svg"
            alt=""
          />
          <div className="text-xl pt-4">Special Menus</div>
        </div>
        <div className="lg:w-1/5 text-white text-center flex flex-col justify-center items-center h-48 bg-app-dark-purple my-4 lg:my-0">
          <Image
            width={100}
            height={100}
            className="w-12"
            src="/wwoffer3.svg"
            alt=""
          />
          <div className="text-xl pt-4">Home Delivery</div>
        </div>
      </div>
    </>
  );
}
