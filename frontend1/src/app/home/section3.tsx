import { AppButton } from "@/components/AppButton";
import Image from "next/image";
export function Section3() {
  const foodItems = [
    {
      category: "Bar Titbits",
      image: "/menu6.svg",
      items: [
        {
          name: "French Fries",
          description: "Plain/Peri Peri/Cheesey",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Garlic Bread",
          description: "Plain/Cheese",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Potato Wedges",
          description: "Plain/Peri Peri",
          price: "295/345",
          veg: "green",
        },
        {
          name: "Chicken 65",
          description: "",
          price: "445",
          veg: "red",
        },
        {
          name: "Grilled fish skewers",
          description: "",
          price: "495",
          veg: "red",
        },
      ],
    },
    {
      category: "GOURMET HEALTHY SALADS",
      image: "/menu10.svg",
      items: [
        {
          name: "FIGS AND APRICOT",
          description:
            "FIGS AND APRICOT MIXED WITH ORGANIC GREENS & BALSAMIC VINAIGRETTE MAPLE DRESSING",
          price: "395",
          veg: "green",
        },
        {
          name: "FATTOUSH",
          description:
            "MEDITERRANEAN GREENS TOSSED WITH POMEGRANATE AND SUMMER GARDEN DRESSING",
          price: "395",
          veg: "green",
        },
        {
          name: "WATERMELON FETA CHEESE",
          description:
            "SALAD TOSSED WITH WATERMELON, POMEGRANATE AND VINAIGRETTE TOPPED WITH CRUMBLED FETA",
          price: "395",
          veg: "green",
        },
        {
          name: "CLASSIC CAESAR VEG/CHICKEN",
          description: "FRESH GREENS TOSSED WITH CAESAR DRESSING & CROUTONS",
          price: "395/445",
          veg: "black",
        },
      ],
    },
  ];

  const drinksItems = [
    {
      category: "Signature Cocktails",
      image: "/menu12.jpg",
      items: [
        {
          name: "AFTER HOURS SPECIAL",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "ORANGE MINT TO BE",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "DRUNK IN LOVE",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "PENICILLIN",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "PINK YOUR MOMENT",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "VALLEY OF SEX",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "THE SOUTHERN SOMRAS",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "HEART AND SOUL",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "BERRY HAPPY TOGETHER MARGARITA",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "RED BULL ENERGY DRINK VODKA",
          description: "",
          price: "645",
          veg: "",
        },
        {
          name: "RED BULL YELLOW EDITION GIN",
          description: "",
          price: "645",
          veg: "",
        },
      ],
    },
    {
      category: "Forever Classic",
      image: "/gallery2.jpg",
      items: [
        {
          name: "COSMOPOLITAN",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "PINACOLADA",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "DAIQUIRI - CLASSIC, W/MELON, STRAWBERRY",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "BLOODY MARY",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "OLD FASHION",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "MARTINI - CLASSIC, GIMLET, GIBSON, G/APPLE",
          description: "",
          price: "545",
          veg: "",
        },
        {
          name: "LIIT - CLASSIC, BEACH, SKY",
          description: "",
          price: "675/ 2490/ 950",
          veg: "",
        },
        {
          name: "LIIT - ELECTRIC",
          description: "",
          price: "745/ 2690/ 1045",
          veg: "",
        },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
        // {
        //   name: "",
        //   description: "",
        //   price: "",
        //   veg: "",
        // },
      ],
    },
  ];

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto lg:flex text-left pt-20 px-4 lg:px-0">
        <div className="flex lg:w-2/5 justify-start">
          <div className="w-auto lg:pr-16">
            <div>
              <p className="w-12 p-1 border-t border-b border-yellow-600 text-sm font-light">
                MENU
              </p>
            </div>
            <p className="app-header text-3xl font-bold pt-3">
              Try Our Special Menu
            </p>
            <p className="pt-3 text-sm text-app-gray text-justify">
              At Cafe After Hours, our menu is a culinary journey that blends
              flavors from around the world. From comforting classics to
              innovative fusion dishes, every plate is thoughtfully crafted to
              offer something unique.
            </p>
            <p className="pt-3 text-sm text-app-gray text-justify">
              Whether you&apos;re in the mood for light bites or a hearty meal,
              our multi-cuisine menu features an array of international flavors,
              complemented by handcrafted beverages and signature cocktails.
              Each dish is designed to delight, making every visit a new
              experience to savor.
            </p>
            <Image
              src="/menu1.jpg"
              width="300"
              height="500"
              alt="home"
              className="pt-4"
            />
            <div className="pt-8">
              <a href="/menu">
                <AppButton
                  color="border-app-yellow"
                  fill="bg-white"
                  fontcolor="text-yellow-600"
                  text="View Menu"
                  hover_color={"hover:border-app-yellow"}
                  hover_fill={"hover:bg-app-yellow"}
                  hover_fontcolor={"hover:text-app-purple"}
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="w-3/5 py-10">
          <div>
            <p className="app-header text-3xl font-bold pb-3">Starters</p>

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

</div>
          <div>
            <p className="app-header text-3xl font-bold pb-3">Main Dish</p>

            <div className="flex py-4">
              <div className="pr-2">
                <Image
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
                <Image
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
                <Image
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
                <Image
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

</div>
          <div>
            <p className="app-header text-3xl font-bold pb-3">Dessert</p>

<div className="flex py-4">
              <div className="pr-2">
                <Image
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
                <Image
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


</div>
        </div> */}
        <div>
          {foodItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="py-8 w-full lg:w-full ">
              {/* Category text */}
              <div className="pr-4">
                <p className="text-2xl font-bold text-black py-2 capitalize app-header">
                  {category.category.toLowerCase()}
                </p>
                {category.items.map((item, index) => (
                  <div key={index} className="flex py-4">
                    <div className="pr-2">
                      <div className={`${item.veg}-dot-container`}>
                        <div className={`${item.veg}-dot`}></div>
                      </div>
                    </div>
                    <div className="w-full flex items-end mb-2">
                      <div>
                        <p className="text-xl app-header font-bold capitalize">
                          {item.name.toLowerCase()}
                        </p>
                        <p className="text-sm text-app-gray capitalize">
                          {item.description.toLowerCase()}
                        </p>
                      </div>
                      <div className="flex-1 border-b border-dotted border-gray-400"></div>
                      <div className="w-1/6 flex items-end font-bold app-header text-xl">
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
