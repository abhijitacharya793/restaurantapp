import { AppButton } from "@/components/AppButton";
import Image from "next/image";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg items-center mx-4 lg:mx-auto">
        {/* ROW 1 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0">
            <Image
              src="/gallery1.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96 w-auto"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0">
            <Image
              src="/gallery2.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96 w-auto"
            />
          </div>
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0">
            <Image
              src="/popular3.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96 w-auto"
            />
          </div>
        </div>
        {/* ROW 2 */}
        <div className="lg:flex w-full py-4">
          <div className="lg:w-1/2 px-4 py-2 lg:px-2 lg:py-0">
            <Image
              src="/popular3.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96 w-auto"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0">
            <Image
              src="/gallery1.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96 w-auto"
            />
          </div>
          <div className="lg:w-1/4 px-4 py-2 lg:px-2 lg:py-0">
            <Image
              src="/gallery2.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96 w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
