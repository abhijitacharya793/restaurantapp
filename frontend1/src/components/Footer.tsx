type FooterProps = {
  active_page: string;
};

export function Footer({ active_page }: FooterProps) {
  return (
    <>
      {/* Footer top */}
      <div className="flex items-center w-full my-10 text-center bg-green-50">
        <div className="h-44 w-1/3 bg-blue-300">
          <button>call</button>
        </div>
        <div className="h-44 w-1/3 bg-green-300">logo</div>
        <div className="h-44 w-1/3 bg-yellow-300">
          <button>reservation</button>
        </div>
      </div>
      <hr />
      {/* Footer nav */}
      <div className="flex w-full text-center">
        {/* space */}
        <div className="w-1/6 h-10 py-2"></div>
        {/* 7 parts of 12 */}
        <div className="w-1/12 h-10 py-2 bg-blue-300">home</div>
        <div className="w-1/12 h-10 py-2 bg-blue-300">about</div>
        <div className="w-1/12 h-10 py-2 bg-blue-300">menu</div>
        <div className="w-1/12 h-10 py-2 bg-blue-300">reservation</div>
        <div className="w-1/12 h-10 py-2 bg-blue-300">gallery</div>
        <div className="w-1/12 h-10 py-2 bg-blue-300">blog</div>
        <div className="w-1/12 h-10 py-2 bg-blue-300">contact</div>
        {/* space */}
        <div className="w-1/6 h-10 py-2"></div>
        {/* socials */}
        <div className="w-1/6 h-10 py-2 bg-blue-300">1</div>
        {/* space */}
        <div className="w-1/6 h-10 py-2"></div>
      </div>
      <hr />
    </>
  );
}
