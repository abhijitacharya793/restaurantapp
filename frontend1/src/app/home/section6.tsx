import { AppButton } from "@/components/AppButton";
import Image from "next/image";

export function Section6() {
  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto pb-10">
        <div className="flex flex-col items-center justify-center">
          <p className="w-12 p-1 border-t border-b border-yellow-600 text-sm font-light">
            MENU
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4">
            Popular Dishes
          </p>
          <p className="pt-1 pb-4 text-sm text-app-gray w-96">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content making.
          </p>
        </div>
        <div className="flex ">
          <div className="w-1/4 mr-4">
            <Image alt="" width={500} height={500} src="/popular1.svg" />
            <div className="flex my-2 app-header font-bold text-xl">
              <p className="w-full">Chicken Manjoori</p>
              <p>$15</p>
            </div>
            <p className="text-sm text-app-gray">
              Lorem Ipsum is that it has a more-or-less normal
            </p>
          </div>
          <div className="w-1/4 mr-4">
            <Image alt="" width={500} height={500} src="/popular2.svg" />
            <div className="flex my-2 app-header font-bold text-xl">
              <p className="w-full">Chicken Manjoori</p>
              <p>$15</p>
            </div>
            <p className="text-sm text-app-gray">
              Lorem Ipsum is that it has a more-or-less normal
            </p>
          </div>
          <div className="w-1/4 mr-4">
            <Image alt="" width={500} height={500} src="/popular3.svg" />
            <div className="flex my-2 app-header font-bold text-xl">
              <p className="w-full">Chicken Manjoori</p>
              <p>$15</p>
            </div>
            <p className="text-sm text-app-gray">
              Lorem Ipsum is that it has a more-or-less normal
            </p>
          </div>
          <div className="w-1/4">
            <Image alt="" width={500} height={500} src="/popular4.svg" />
            <div className="flex my-2 app-header font-bold text-xl">
              <p className="w-full">Chicken Manjoori</p>
              <p>$15</p>
            </div>
            <p className="text-sm text-app-gray">
              Lorem Ipsum is that it has a more-or-less normal
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-10">
          <AppButton
            color="border-app-yellow mb-16"
            fill="bg-white"
            fontcolor="text-app-yellow"
            text="See all dishes"
            hover_color={"hover:border-app-yellow"}
            hover_fill={"hover:bg-app-yellow"}
            hover_fontcolor={"hover:text-app-purple"}
          />
        </div>
      </div>
    </>
  );
}
