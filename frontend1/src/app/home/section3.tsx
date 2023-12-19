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
            <p className="pt-3 text-sm text-app-gray">
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
            <div className="pt-8">
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
            <p className="app-header text-3xl font-bold pb-3">Starters</p>
            {/* Menu items */}
            <div className="flex py-4">
              <div className="pr-2">
                <img
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
                <img
                  src="/menu3.svg"
                  width="50"
                  height="50"
                  alt="home"
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex">
                <div>
                  <p className="text-xl app-header font-bold">Spring Roll</p>
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
                <img
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
                <img
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
          <div>
            <p className="app-header text-3xl font-bold pb-3">Main Dish</p>
            {/* Menu items */}
            <div className="flex py-4">
              <div className="pr-2">
                <img
                  src="/menu6.svg"
                  width="50"
                  height="50"
                  alt="home"
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex">
                <div>
                  <p className="text-xl app-header font-bold">
                    Grilled Salmon with Dil Sauce
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
                <img
                  src="/menu7.svg"
                  width="50"
                  height="50"
                  alt="home"
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex">
                <div>
                  <p className="text-xl app-header font-bold">
                    Roast Beef with Vegetable
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
                <img
                  src="/menu8.svg"
                  width="50"
                  height="50"
                  alt="home"
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex">
                <div>
                  <p className="text-xl app-header font-bold">
                    Marrkesh Vegetetarian Curruy
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
                <img
                  src="/menu9.svg"
                  width="50"
                  height="50"
                  alt="home"
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex">
                <div>
                  <p className="text-xl app-header font-bold">
                    Spicy Vegan Potato Curry
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
          <div>
            <p className="app-header text-3xl font-bold pb-3">Dessert</p>
            {/* Menu items */}
            <div className="flex py-4">
              <div className="pr-2">
                <img
                  src="/menu10.svg"
                  width="50"
                  height="50"
                  alt="home"
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex">
                <div>
                  <p className="text-xl app-header font-bold">
                    Apple Pie with Cream
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
                <img
                  src="/menu11.svg"
                  width="50"
                  height="50"
                  alt="home"
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex">
                <div>
                  <p className="text-xl app-header font-bold">
                    Lemon Meringue Pie
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

            {/* End */}
          </div>
        </div>
      </div>
    </>
  );
}
