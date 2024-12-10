import { AppButton } from "@/components/AppButton";
import Image from "next/image";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg items-center mx-4 lg:mx-auto">
        {/* AMBIENCE - ROW 1 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5756-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5753-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5726-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5770-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5759-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5762-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5789-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5792-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5771-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5813-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5803-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/KRN_5795-HDR.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* FOOD - ROW 1 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/gallery1.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/gallery2.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Afghani chicken.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>
        {/* ROW 2 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Veg biryani.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Stir fried vegetables.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Cucumber cola.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>
        {/* ROW 3 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Golden fried prawns.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Fresh and fruity.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>
        {/* ROW 4 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Paneer malai tikka.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Fresh and fruity.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0 relative group">
            <Image
              src="/menu_item_Kitkat shake.jpg"
              alt="home"
              width={450}
              height={700}
              className="lg:h-96 lg:w-auto w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
}
