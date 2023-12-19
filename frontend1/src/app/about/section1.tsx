import { AppButton } from "@/components/AppButton";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto flex items-center ">
        <div className="w-1/2 py-10">
          <div>
            <p className="w-20 p-1 border-t border-b border-yellow-600 text-sm font-light">
              ABOUT US
            </p>
            <p className="app-header text-3xl font-bold pt-3">
              Quality and Tradition
            </p>
            <p className="pt-3 text-sm text-app-gray">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here, content gfshere making
              look like readable English. Many desktop publishing packages.
            </p>

            <p className="pt-2">JOSEFINE</p>
            <img
              src="/sign.svg"
              width="100"
              height="100"
              alt="home"
              className="pt-2"
            />
            <div className="py-4">
              <AppButton
                color={"border-app-yellow"}
                fill={""}
                text={"See More"}
                fontcolor={"text-app-yellow"}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 py-20">
          <img src="/about1.svg" />
        </div>
      </div>
    </>
  );
}
