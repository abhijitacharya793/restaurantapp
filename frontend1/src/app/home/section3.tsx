import { AppButton } from "@/components/AppButton";
export function Section3() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex text-left pt-20">
        <div className="flex w-2/5 justify-start">
          <div className="w-auto pr-16">
            <div>
              <p className="w-12 p-1 border-t border-b border-yellow-600 text-sm font-light">
                MENU
              </p>
            </div>
            <p className="app-header text-3xl font-bold pt-3">
              Try Our Special Offers
            </p>
            <p className="pt-3">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using &apos;Content here, content making it
              look like readable English.
            </p>
            <img
              src="/menu1.png"
              width="300"
              height="500"
              alt="home"
              className="pt-4"
            />
            <div className="pt-4">
              <AppButton
                color="border-app-yellow"
                fill=""
                fontcolor="text-yellow-600"
                text="View Menu"
              />
            </div>
          </div>
        </div>
        <div className="w-3/5 py-10">
          <div>
            <p className="app-header text-3xl font-bold pb-10">Starters</p>
            {/* Menu items */}
            <div className="flex py-4">
              <div className="pr-2">
                <img
                  src="/menu2.jpg"
                  width="40"
                  height="40"
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
                <div className="w-1/6 flex items-end">$40</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
