import { AppButton } from "@/components/AppButton";
import Image from "next/image";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex items-center ">
        <div className="w-1/2 py-10">
          <div>
            <p className="w-24 p-1 border-t border-b border-yellow-600 text-sm font-light">
              CEO Speaks
            </p>
            <p className="app-header text-3xl font-bold pt-3">
              Quality and Experience
            </p>
            <p className="pt-3 text-sm text-app-gray">
              Our CEO, Mr. Sunil Luthra is incredibly passionate about our
              restaurants and the F&B Industry. He envisions it as a vibrant and
              welcoming space where people can gather to enjoy delicious food
              and create lasting memories. He believes in the power of
              exceptional customer service and aim to provide a top-notch dining
              experience for every guest. 
              <br/>
              The CEO is committed to using fresh,
              locally sourced ingredients to create innovative and mouthwatering
              dishes that cater to various dietary preferences. He is dedicated
              to fostering a positive work culture, ensuring that our team is
              motivated, well-trained, and shares the same passion for
              delivering exceptional hospitality. Overall, our CEO`&quot;s vision for
              the restaurant is to be a place where people can indulge in
              outstanding culinary experiences while feeling like they are part
              of a larger community.
            </p>

            <p className="pt-2">Sunil Luthra</p>
            <Image
              src="/sign.svg"
              width="100"
              height="100"
              alt="home"
              className="pt-2"
              priority
            />
            <div className="py-4">
              <AppButton
                color={"border-app-yellow"}
                fill={"bg-white"}
                text={"See More"}
                fontcolor={"text-app-yellow"}
                hover_color={"hover:border-app-yellow"}
                hover_fill={"hover:bg-app-yellow"}
                hover_fontcolor={"hover:text-app-purple"}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 py-20">
          <Image alt="" src="/about1.svg" width="500" height="500" priority />
        </div>
      </div>
    </>
  );
}
