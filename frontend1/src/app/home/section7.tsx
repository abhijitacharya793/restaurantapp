export function Section7() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto pb-10 flex items-center py-20">
        <div className="w-2/5 text-white">
          <p className="w-32 p-1 border-t border-b border-yellow-600 text-sm font-light">
            WHAT WE OFFER
          </p>
          <div className="app-header text-3xl font-bold">
            Our Great Services
          </div>
          <p className="pt-1 pb-4 text-sm text-white w-80">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.{" "}
          </p>
        </div>
        <div className="w-1/5 text-white text-center flex flex-col justify-center items-center h-48 bg-app-dark-purple mr-4">
          <img className="w-12" src="/wwoffer1.svg" alt="" />
          <div className="text-xl pt-4">Opened 24/7</div>
        </div>
        <div className="w-1/5 text-white text-center flex flex-col justify-center items-center h-48 bg-app-dark-purple mr-4">
          <img className="w-12" src="/wwoffer2.svg" alt="" />
          <div className="text-xl pt-4">Special Menus</div>
        </div>
        <div className="w-1/5 text-white text-center flex flex-col justify-center items-center h-48 bg-app-dark-purple">
          <img className="w-12" src="/wwoffer3.svg" alt="" />
          <div className="text-xl pt-4">Home Delivery</div>
        </div>
      </div>
    </>
  );
}
