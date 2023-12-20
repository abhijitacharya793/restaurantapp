import { AppButton } from "@/components/AppButton";
export function Section1() {
  return (
    <>
      <div className="w-1/2 flex items-center">
        <div className="items-center text-left">
          <h1 className="text-6xl text-white app-header font-bold pt-32 opacity-0 animate-fade-in">
            Welcome to Restaurantate
          </h1>
          <p className="text-sm text-white pt-8 w-96 opacity-0 animate-fade-in">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy .
          </p>
          <div className="py-8">
            <AppButton
              color="border-app-yellow mb-16"
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
            width={450}
            className="rounded-t-full border-18 border-white border-opacity-20 opacity-0 animate-fade-in"
          />
        </div>
        <div className="flex absolute top-5 right-0 z-0 app-pattern">
          <img src="/pattern.svg" alt="home" className="justify-end w-64 h-64 opacity-0 animate-fade-in" />
        </div>
      </div>
    </>
  );
}
