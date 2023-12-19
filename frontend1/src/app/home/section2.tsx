import { AppButton } from "@/components/AppButton";
import {
  ClockIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
export function Section2() {
  return (
    <>
      {/* P1 */}
      <div className="max-w-screen-lg mx-auto flex items-center pt-20">
        <div className="w-1/3 justify-start">
          <div className="flex text-left">
            <div className="w-1/6 h-16 flex items-center justify-start">
              <MapPinIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
            </div>
            <div className="w-5/6 h-16 p-2">
              <p className="text-lg">Locate us</p>
              <p className="text-xs">Riverside 25, San Francisco, California</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 justify-center">
          <div className="flex text-left">
            <div className="w-2/6 h-16 flex items-center justify-end">
              <ClockIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
            </div>
            <div className="w-4/6 h-16 p-2">
              <p className="text-lg">Open Hours</p>
              <p className="text-xs">Mon To Fri 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 justify-end">
          <div className="flex text-left">
            <div className="w-3/6 h-16 flex items-center justify-end">
              <PencilSquareIcon className="w-12 h-12 p-2 bg-black text-white rounded-full" />
            </div>
            <div className="w-3/6 h-16 p-2">
              <p className="text-lg">Reservation</p>
              <p className="text-xs">hirestaurantate@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* P2 */}
      <div className="max-w-screen-lg mx-auto flex pt-10 pb-20">
        <div className="w-1/2 border-r border-gray-300">
          <div className="flex w-full items-center justify-left">
            <img src="/story.jpg" alt="home" className="w-auto h-80" />
          </div>
        </div>
        <div className="w-1/2 ml-8">
          <h1 className="app-header text-3xl font-bold">The Story</h1>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &apos;Content here, content
            gfshere&apos;, makinlook like readable English. Many desktop
            publishing packages.
          </p>
          <div className="flex pt-4">
            <div className="w-1/2">
              <p className="app-header text-3xl font-bold">1996</p>
              <p>
                Lorem Ipsum is that it has a more-or-less normal distribution
              </p>
            </div>
            <div className="w-1/2">
              <p className="app-header text-3xl font-bold">2021</p>
              <p>
                Lorem Ipsum is that it has a more-or-less normal Content content
              </p>
            </div>
          </div>
          <p className="pt-2">JOSEFINE</p>
          <img
            src="/sign.svg"
            width="100"
            height="100"
            alt="home"
            className="pt-2"
          />
        </div>
      </div>
    </>
  );
}