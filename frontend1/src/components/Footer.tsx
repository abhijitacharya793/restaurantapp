import { AppButton } from "./AppButton";

export function Footer() {
  return (
    <>
      {/* Footer top */}
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto">
        <div className="flex items-center justify-center py-4">
          <div className="h-44 w-1/3 flex items-center justify-start">
            <a href="#" className="text-white underline">
              Instagram Feed
            </a>
          </div>
          <div className="h-44 w-1/3 flex items-center justify-center">
            <img src="/logo.svg" width={250} height={250} alt="logo" />
          </div>
          <div className="h-44 w-1/3 flex items-center justify-end">
            <img src="/insta.svg" className="h-5 w-5 mx-2" />
            <img src="/facebook.svg" className="h-5 w-5 mx-2" />
            <img src="/twitter.svg" className="h-5 w-5 mx-2" />
            <img src="/pintrest.svg" className="h-5 w-5 mx-2" />
          </div>
        </div>
        <div className="flex items-center justify-center text-white py-2">
          <div className="w-1/3 flex items-center justify-start">
            <p className="w-18 py-1 border-t border-b border-yellow-600 text-sm font-light">
              CONTACT
            </p>
          </div>
          <div className="w-1/3 flex items-center justify-center text-center">
            Join our mailing list for updates, Get news & offers events.
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <p className="w-30 py-1 border-t border-b border-yellow-600 text-sm font-light">
              WORKING HOURS
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center text-white py-4">
          <div className="w-1/3 flex items-center justify-start">
            <p className="text-sm font-light">
              5 Rue Dalou, 75015 Paris
              <br />
              Call - +33 156 78 89 56
              <br />
              benoit@mail.com
            </p>
          </div>
          <div className="w-1/3 flex items-center justify-center text-center">
            <div className="">
              <form className="flex items-center border-2 border-white">
                <input
                  className="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 focus:outline-none"
                  type="email"
                  placeholder="Email"
                  aria-label="YEmail"
                />
                <AppButton
                  color={"border-white"}
                  fill={"bg-white"}
                  text={"Subscribe"}
                  fontcolor={"text-app-purple"}
                />
              </form>
            </div>
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <p className="text-sm font-light text-right">
              Mon – Fri: 7.00am – 6.00pm
              <br />
              Sat: 7.00am – 6.00pm
              <br />
              Sun: 8.00am – 6.00pm
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex text-white py-4 w-full">
        <div className="">
          © Copyright - Restaurantate | Designed by VictorFlow Templates -
          Powered by Webflow
        </div>
        <div className="flex items-end">Styleguide / Licenses</div>
      </div>
    </>
  );
}
