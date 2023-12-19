export function Section5() {
  return (
    <>
      <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto py-20">
        <div className="flex flex-col items-center justify-center">
          <p className="w-12 py-1 border-t border-b border-yellow-600 text-sm font-light">
            OFFER
          </p>
          <p className="app-header text-3xl font-bold pb-3 pt-4">
            Our special Offer dishes
          </p>
          <p className="pt-1 pb-4 text-sm text-app-gray w-96">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content making.
          </p>
        </div>
        <div className="flex ">
          <div className="w-1/2 mr-4">
            <img src="/offer1.svg" />
          </div>
          <div className="w-1/2">
            <img src="/offer2.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
