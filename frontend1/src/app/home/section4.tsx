export function Section4() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto py-20">
        <div>
          <p className="w-24 p-1 border-t border-b border-yellow-600 text-white text-sm font-light ">
            TESTIMONIAL
          </p>
        </div>
        <p className="app-header text-3xl font-bold pb-3 text-white pt-4">
          What our clients say
        </p>
        <p className="pb-4 text-white">
          We love to hear from customers, so please leave a comment or say hello
          in an email.
        </p>
        <div className="flex items-center">
          <div className="w-1/3 mr-4">
            <div className="bg-app-dark-purple overflow-hidden p-3">
              <div className="p-4">
                <div className="flex items-center">
                  <img
                    className="w-24 h-24 rounded-full mr-4"
                    src="/testimonial1.svg"
                    alt="Avatar"
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-white">
                      Daniyal Sppra
                    </h2>
                    <p className="text-app-yellow">Newyork</p>
                  </div>
                </div>
                <hr className="border border-slate-500 my-3" />
                <div className="mt-4">
                  <p className="app-header text-white italic">
                    "It is professional, considers everyone&apos;s time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 mr-4">
            <div className="bg-app-dark-purple overflow-hidden p-3">
              <div className="p-4">
                <div className="flex items-center">
                  <img
                    className="w-24 h-24 rounded-full mr-4"
                    src="/testimonial2.svg"
                    alt="Avatar"
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-white">
                      Natasha D
                    </h2>
                    <p className="text-app-yellow">Salt Lake City</p>
                  </div>
                </div>
                <hr className="border border-slate-500 my-3" />
                <div className="mt-4">
                  <p className="app-header text-white italic">
                    ""It is professional, considers everyone&apos;s time, can think
                    about the There are many variations of passages."
                    <br/>
                    <br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-app-dark-purple overflow-hidden p-3">
              <div className="p-4">
                <div className="flex items-center">
                  <img
                    className="w-24 h-24 rounded-full mr-4"
                    src="/testimonial3.svg"
                    alt="Avatar"
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-white">
                      Jack Sparrow
                    </h2>
                    <p className="text-app-yellow">San Diego</p>
                  </div>
                </div>
                <hr className="border border-slate-500 my-3" />
                <div className="mt-4">
                  <p className="app-header text-white italic">
                    "It is professional, considers everyone&apos;s time, can think
                    about the There are many passages whole probls small niche,
                    friendly.
                    <br/>
                    <br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
