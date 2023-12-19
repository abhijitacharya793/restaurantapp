import { AppButton } from "@/components/AppButton";
export function Section1() {
  return (
    <>
      <div className="w-1/2 flex items-center mr-20">
        <div className="items-center text-left">
          <h1 className="text-6xl text-white app-header font-bold">
            Welcome to Restaurantate
          </h1>
          <p className="text-sm text-white pt-8">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy .
          </p>
          <div className="py-8">
            <AppButton
              color="border-app-yellow"
              fill=""
              fontcolor="text-white"
              text="View Menu"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img src="/home.png" alt="home" className="w-72 h-96 opacity-0" />
        <div className="absolute top-5 left-10 z-10">
          <img
            src="/home.png"
            alt="home"
            className="w-72 h-96 rounded-t-full border-8 border-white border-opacity-20"
          />
        </div>
        <div className="absolute top-5 right-10 z-0">
          <img src="/pattern.svg" alt="home" className="w-52 h-52" />
        </div>
      </div>
    </>
  );
}
