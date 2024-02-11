import { AppButton } from "@/components/AppButton";
import Image from "next/image";

export function Section1() {
  return (
    <>
      <div className="lg:max-w-screen-lg items-center mx-4 lg:mx-auto">
        {/* ROW 1 */}
        <div className="flex w-full py-4">
          <div className="w-1/4 px-2">
            <Image
              src="/gallery1.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96"
            />
          </div>
          <div className="w-1/4 px-2">
            <Image
              src="/gallery2.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96"
            />
          </div>
          <div className="w-1/2 px-2">
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
        <div className="flex w-full py-4">
          <div className="w-1/2 px-2">
            <Image
              src="/popular3.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96 w-auto"
            />
          </div>
          <div className="w-1/4 px-2">
            <Image
              src="/gallery1.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96"
            />
          </div>
          <div className="w-1/4 px-2">
            <Image
              src="/gallery2.jpg"
              alt="home"
              width={450}
              height={700}
              className="h-96"
            />
          </div>
        </div>
      </div>
    </>
  );
}
