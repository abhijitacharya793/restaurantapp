import { AppButton } from "@/components/AppButton";
export function Section1() {
  return (
    <>
      <div className="w-3/5 flex items-center">
        <div className="items-center text-left p-20">
          <h1 className="text-6xl text-white app-header">
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
      <div className="w-2/5 bg-green-300 relative">
        <div className="flex items-center justify-center top-10">
          <div className="bg-blue-200 w-40 h-40 rounded-full"></div>
        </div>
        <div className="absolute top-10 left-10">
          <div className="bg-red-800 w-72 h-96 rounded-t-full">
            <img
              src="/home.svg"
              alt="home"
              className="bg-red-800 w-72 h-96 rounded-t-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
